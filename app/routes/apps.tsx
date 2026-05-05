import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/apps')({
  component: AppsPage,
})

type App = {
  name: string
  description: string
  kicker: string
  detail: string
  accent: 'primary' | 'secondary' | 'warm' | 'paper'
}

const apps: App[] = [
  {
    name: 'Synthiz',
    kicker: 'Connaissance',
    description:
      'Second cerveau européen — capture, vectorise, synthétise vos sources.',
    detail:
      'Une mémoire augmentée pour les indépendants, les chercheurs et les équipes qui veulent garder la main sur leurs notes, leurs documents, leurs idées.',
    accent: 'primary',
  },
  {
    name: 'Skalpai',
    kicker: 'Infrastructure',
    description: 'Observabilité (logs, traces, métriques) pour les équipes solo.',
    detail:
      "L'observabilité ne devrait pas être réservée aux gros budgets. Skalpai propose une stack complète, sobre, autohébergeable, pour qui veut comprendre ce que fait sa prod.",
    accent: 'paper',
  },
  {
    name: 'Spore',
    kicker: 'Messagerie',
    description: 'Email transactionnel multi-tenant, hébergé en Europe.',
    detail:
      "Vos emails de production envoyés depuis l'Europe, sans intermédiaire opaque. API simple, tarifs lisibles, données qui restent chez vous.",
    accent: 'secondary',
  },
  {
    name: 'NATS Dash',
    kicker: 'Outils',
    description: 'Dashboard pour gérer vos infrastructures NATS JetStream.',
    detail:
      "Une interface claire pour piloter vos clusters NATS : streams, consumers, KV, object stores. L'outil que l'on aurait aimé trouver.",
    accent: 'warm',
  },
]

const accentClass: Record<App['accent'], string> = {
  primary: 'bg-accent-primary text-bg',
  secondary: 'bg-accent-secondary text-bg',
  warm: 'bg-warm text-text',
  paper: 'bg-bg text-text border-y-2 border-text',
}

function AppsPage() {
  return (
    <div>
      {/* Title block */}
      <section className="border-b-2 border-text">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-28">
          <p className="label text-text/60">Catalogue — № 01</p>
          <h1 className="display-xl mt-6">Les apps</h1>
          <p className="chapeau mt-8 max-w-2xl">
            Quatre apps, quatre équipes, un même esprit. Chaque produit
            avance pour son compte mais reverse une part au pot commun.
          </p>
        </div>
      </section>

      {/* Editorial entries — alternating */}
      {apps.map((app, i) => {
        const reverse = i % 2 === 1
        return (
          <section key={app.name} className={accentClass[app.accent]}>
            <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-28">
              <div
                className={`grid gap-10 sm:grid-cols-12 ${
                  reverse ? 'sm:[direction:rtl]' : ''
                }`}
              >
                <div
                  className={`sm:col-span-7 ${
                    reverse ? 'sm:[direction:ltr]' : ''
                  }`}
                >
                  <p className="label opacity-70">
                    {String(i + 1).padStart(2, '0')} — {app.kicker}
                  </p>
                  <h2 className="font-heading mt-6 text-7xl leading-none sm:text-9xl">
                    {app.name}
                  </h2>
                </div>
                <div
                  className={`flex flex-col justify-end sm:col-span-5 ${
                    reverse ? 'sm:[direction:ltr]' : ''
                  }`}
                >
                  <p className="chapeau">{app.description}</p>
                  <p className="mt-6 text-base opacity-80">{app.detail}</p>
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
