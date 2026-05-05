import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const apps = [
  { name: 'Synthiz', tagline: 'Second cerveau européen.' },
  { name: 'Skalpai', tagline: 'Observabilité pour les solos.' },
  { name: 'Spore', tagline: 'Email transactionnel européen.' },
  { name: 'NATS Dash', tagline: 'Dashboard NATS JetStream.' },
]

function LandingPage() {
  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-6xl sm:text-7xl">L'Alter</h1>
        <p className="text-xl text-black/70">
          Participez à un digital commun et souverain.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl">Les apps</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {apps.map((app) => (
            <article
              key={app.name}
              className="rounded-md border border-black/10 bg-white/40 p-5"
            >
              <h3 className="text-xl">{app.name}</h3>
              <p className="mt-1 text-sm text-black/70">{app.tagline}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-md border border-black/10 bg-white/40 p-6">
        <h2 className="text-2xl">Le pot commun</h2>
        <p className="text-sm text-black/70">
          Une part des revenus de chaque app alimente un pot commun pour financer
          les briques numériques européennes manquantes.
        </p>
        <Link
          to="/pot"
          className="inline-block rounded-md bg-[color:var(--color-accent-primary)] px-4 py-2 text-sm text-white"
        >
          Voir le pot
        </Link>
      </section>
    </div>
  )
}
