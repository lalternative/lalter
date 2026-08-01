# syntax=docker/dockerfile:1.7
#
# web image — static nginx bundle (NOT a Node/SSR server).
#
# Unlike the spore and lungor web images, this app has no server-side runtime
# surface: no createServerFn, no API route, no auth. vite.config.ts prerenders
# every route to its own index.html, so the build output under dist/client is a
# complete static site. Serving it with nginx instead of Node drops the runtime
# image from ~200MB of Node + node_modules to ~60MB of nginx + 700KB of assets,
# and removes the entire npm dependency tree from what gets scanned and patched.
#
# dist/server (the SSR handler) is deliberately NOT copied — it is a build
# artefact of the prerender pass and is dead weight at runtime.

# ───────────────────────── builder ─────────────────────────
# Full toolchain (vite, esbuild, all devDeps) lives here; the layer is
# discarded. Only the prerendered dist/client flows into the runtime stage,
# keeping build-only tools (the esbuild Go binary, etc.) out of the shipped
# image.
FROM node:22-bookworm AS builder

WORKDIR /app

# Pin pnpm to the version in .sklp/space.yaml so the lockfile resolves the same
# way here as it does in CI.
RUN corepack enable && corepack prepare pnpm@10.27.0 --activate

# pnpm-workspace.yaml is not a monorepo marker here — it carries the
# onlyBuiltDependencies/allowBuilds settings that let esbuild run its
# postinstall. Without it `vite build` fails on a missing native binary.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# NODE_ENV is intentionally NOT production: pnpm would skip devDependencies,
# and vite lives there. CI=true disables the interactive build-script approval
# prompt that would otherwise hang the build.
ENV CI=true
RUN pnpm install --frozen-lockfile

# The prerender pass boots a Vite preview server and crawls it over HTTP.
# Vite binds it to `localhost`, which has to resolve through NSS — and a bare
# OCI rootfs has no /etc/hosts at all. Docker papers over this by bind-mounting
# one into every build container; sklp's runc builder does not, so
# getaddrinfo("localhost") returns ENOTFOUND, vite.preview() throws, and the
# build dies on "Failed to start the Vite preview server for prerendering".
#
# Writing the file into the image layer fixes it for every builder, with no
# dependency on what the runtime chooses to mount. Both families are listed:
# Node resolves localhost to ::1 first, and the server does listen on ::.
RUN printf '127.0.0.1\tlocalhost\n::1\tlocalhost ip6-localhost ip6-loopback\n' > /etc/hosts

# Keep the crawler on IPv4 once the name resolves. dist/client is fetched over
# this same loopback, and mixing families between the listener and the client
# has bitten this build before.
ENV NODE_OPTIONS=--dns-result-order=ipv4first

COPY tsconfig.json vite.config.ts ./
COPY app app
COPY public public

RUN pnpm build

# ───────────────────────── runtime ─────────────────────────
# nginx-unprivileged: the stock nginx image runs its master as root and binds
# :80. This variant is built to run as a non-root user on a high port, so no
# capability is needed and USER below is not fighting the entrypoint.
FROM nginxinc/nginx-unprivileged:1.29-alpine

# Replace the default site entirely rather than dropping a conf.d snippet, so
# no stock server block survives to answer on an unexpected path.
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist/client /usr/share/nginx/html

# 101 is the nginx user baked into the unprivileged image. Numeric form so the
# runtime does not need to resolve /etc/passwd.
USER 101:101

# Must match the `listen` in nginx.conf.
EXPOSE 8080

CMD ["nginx", "-c", "/etc/nginx/nginx.conf"]
