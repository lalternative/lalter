import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/apps')({
  component: AppsPage,
})

const apps = [
  {
    name: 'Synthiz',
    description:
      'Second cerveau européen — capture, vectorise, synthétise vos sources.',
  },
  {
    name: 'Skalpai',
    description: 'Observabilité (logs, traces, metrics) pour les équipes solo.',
  },
  {
    name: 'Spore',
    description: 'Email transactionnel multi-tenant, hébergé en Europe.',
  },
  {
    name: 'NATS Dash',
    description: 'Dashboard pour gérer vos infrastructures NATS JetStream.',
  },
]

function AppsPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-5xl">Les apps</h1>
      <div className="grid gap-5 sm:grid-cols-2">
        {apps.map((app) => (
          <article
            key={app.name}
            className="rounded-md border border-black/10 bg-white/40 p-6"
          >
            <h2 className="text-2xl">{app.name}</h2>
            <p className="mt-2 text-sm text-black/70">{app.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
