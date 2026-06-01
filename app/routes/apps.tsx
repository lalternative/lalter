import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/apps')({
  component: AppsPage,
})

type Capacite = {
  name: string
  description: string
  kicker: string
  detail: string
  accent: 'primary' | 'secondary' | 'warm' | 'paper'
}

const capacites: Capacite[] = [
  {
    name: 'Connaissance',
    kicker: 'Avoir les idées',
    description: 'Capturer, relier, retrouver ce que vous apprenez.',
    detail:
      "Une mémoire qui vous appartient : vos notes, vos sources, vos idées, organisées par vous. Le point de départ — sans idées, rien ne commence.",
    accent: 'primary',
  },
  {
    name: 'Technique',
    kicker: 'Tenir ses outils',
    description: 'Comprendre et piloter ce qui fait tourner vos projets.',
    detail:
      "Voir ce que fait votre infra, sans dépendre d'une équipe ou d'un budget que vous n'avez pas. Garder la main sur la machine plutôt que la subir.",
    accent: 'paper',
  },
  {
    name: 'Création',
    kicker: 'Faire exister',
    description: 'Produire et donner forme à ce que vous lancez.',
    detail:
      "De l'idée au produit : les outils pour fabriquer, itérer et sortir ce que vous créez, sans chaîne d'intermédiaires entre vous et votre travail.",
    accent: 'secondary',
  },
  {
    name: 'Financement',
    kicker: 'Le nerf de la guerre',
    description: 'Financer ce qu\'on entreprend, sans intermédiaire qui prélève.',
    detail:
      "Deux briques : lever des fonds et investir, et encaisser vos paiements par vos propres moyens, sans dépendre d'un intermédiaire qui prélève sa part.",
    accent: 'warm',
  },
  {
    name: 'Communication',
    kicker: 'Se faire connaître',
    description: 'Émettre, atteindre, se faire entendre — par vos propres moyens.',
    detail:
      "Vos messages partent de chez vous, sans intermédiaire qui filtre ou monétise votre audience. Parler au monde sans demander la permission.",
    accent: 'paper',
  },
]

const accentClass: Record<Capacite['accent'], string> = {
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
          <p className="label text-text/60">Les capacités — № 01</p>
          <h1 className="display-xl mt-6">Les capacités</h1>
          <p className="chapeau mt-8 max-w-2xl">
            Des idées au financement, du faire-exister au se-faire-connaître :
            les capacités qu'on peut reprendre soi-même. Pour chacune, un outil
            sobre qui vous en rend capable — rien qui décide à votre place.
          </p>
        </div>
      </section>

      {/* Editorial entries — alternating */}
      {capacites.map((capacite, i) => {
        const reverse = i % 2 === 1
        return (
          <section key={capacite.name} className={accentClass[capacite.accent]}>
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
                    {String(i + 1).padStart(2, '0')} — {capacite.kicker}
                  </p>
                  <h2 className="font-heading mt-6 text-7xl leading-none sm:text-9xl">
                    {capacite.name}
                  </h2>
                </div>
                <div
                  className={`flex flex-col justify-end sm:col-span-5 ${
                    reverse ? 'sm:[direction:ltr]' : ''
                  }`}
                >
                  <p className="chapeau">{capacite.description}</p>
                  <p className="mt-6 text-base opacity-80">{capacite.detail}</p>
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
