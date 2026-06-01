# Capacific

Landing + blog + dashboard for Capacific — European apps that put the power to act back in your hands (Synthiz, Skalpai, Spore, NATS Dash).

Static TanStack Start site. No backend.

## Dev

```bash
pnpm install
pnpm dev      # http://localhost:3120
pnpm build    # static output in .output/public
pnpm preview
```

## Stack

- TanStack Start (Vite plugin, static prerender)
- React 19
- Tailwind CSS v4 (`@tailwindcss/vite`)
- TypeScript strict

## Structure

```
app/
  routes/        # File-based routing
  components/    # Header / Footer
  styles/        # app.css (Tailwind v4 + theme tokens)
  router.tsx     # Router factory
public/
vite.config.ts   # tanstackStart() with prerender enabled
```

## Visual identity (baseline — UX designer to refine)

- Background `#F5F1EA`, text `#1A1A1A`
- Accents: `#E63946`, `#264653`, `#F4A261`
- Headings: Anton — Body: Inter (Google Fonts via `<link>`)
