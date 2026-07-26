import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    watch: {
      // pnpm falls back to a repo-local store when $HOME is confined (sklp
      // space). Its symlink farm makes the watcher crash with ELOOP.
      ignored: ['**/.pnpm-store/**'],
    },
  },
  plugins: [
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart({
      srcDirectory: 'app',
      // Static output: prerender all known routes.
      prerender: {
        enabled: true,
        crawlLinks: true,
        retryCount: 2,
      },
      pages: [
        { path: '/' },
        { path: '/apps' },
        { path: '/pot' },
        { path: '/blog' },
        { path: '/a-propos' },
      ],
    }),
    viteReact(),
  ],
})
