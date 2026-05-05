import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

type App = {
  name: string
  tagline: string
  kicker: string
}

const apps: App[] = [
  {
    name: 'Synthiz',
    tagline: 'Second cerveau européen.',
    kicker: 'Connaissance',
  },
  {
    name: 'Skalpai',
    tagline: 'Observabilité pour les solos.',
    kicker: 'Infra',
  },
  {
    name: 'Spore',
    tagline: 'Email transactionnel européen.',
    kicker: 'Messagerie',
  },
  {
    name: 'NATS Dash',
    tagline: 'Dashboard NATS JetStream.',
    kicker: 'Outils',
  },
]

function LandingPage() {
  return (
    <div>
      {/* COVER */}
      <section className="border-b-2 border-text">
        <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-12 sm:pb-28 sm:pt-16">
          <div className="flex items-center justify-between">
            <p className="label text-text/60">№ 01 — Édition courante</p>
            <p className="label text-accent-primary">Manifeste</p>
          </div>

          <h1 className="display-xxl mt-8 sm:mt-10">
            L'<span className="text-accent-primary">Alter</span>
          </h1>

          <div className="mt-10 grid gap-10 sm:mt-14 sm:grid-cols-12">
            <p className="chapeau sm:col-span-7 sm:col-start-1">
              Participez à un digital commun et souverain. Un collectif d'apps
              européennes qui mutualisent une part de leurs revenus pour
              financer les briques manquantes du web.
            </p>
            <div className="sm:col-span-4 sm:col-start-9 sm:self-end">
              <p className="label text-text/60">Au sommaire</p>
              <ul className="mt-3 space-y-1 text-base">
                <li>— Quatre apps, un même esprit</li>
                <li>— Un pot commun, transparent</li>
                <li>— Une revue à venir</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* APPS — asymmetric editorial cards */}
      <section className="border-b-2 border-text">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-28">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="display-lg">Les apps</h2>
            <Link
              to="/apps"
              className="label text-accent-primary hover:underline"
            >
              Voir toutes →
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-px bg-text sm:grid-cols-12">
            {/* big tile */}
            <article className="col-span-1 bg-accent-primary p-8 text-bg sm:col-span-7 sm:p-12">
              <p className="label opacity-80">{apps[0].kicker}</p>
              <h3 className="font-heading mt-6 text-6xl leading-none sm:text-8xl">
                {apps[0].name}
              </h3>
              <p className="chapeau mt-6 max-w-md">{apps[0].tagline}</p>
            </article>

            <article className="col-span-1 bg-bg p-8 sm:col-span-5 sm:p-12">
              <p className="label text-text/60">{apps[1].kicker}</p>
              <h3 className="font-heading mt-6 text-5xl leading-none sm:text-7xl">
                {apps[1].name}
              </h3>
              <p className="mt-6 text-base text-text/80">{apps[1].tagline}</p>
            </article>

            <article className="col-span-1 bg-accent-secondary p-8 text-bg sm:col-span-5 sm:p-12">
              <p className="label opacity-70">{apps[2].kicker}</p>
              <h3 className="font-heading mt-6 text-5xl leading-none sm:text-7xl">
                {apps[2].name}
              </h3>
              <p className="mt-6 text-base opacity-90">{apps[2].tagline}</p>
            </article>

            <article className="col-span-1 bg-warm p-8 sm:col-span-7 sm:p-12">
              <p className="label text-text/70">{apps[3].kicker}</p>
              <h3 className="font-heading mt-6 text-6xl leading-none sm:text-8xl">
                {apps[3].name}
              </h3>
              <p className="chapeau mt-6 max-w-md">{apps[3].tagline}</p>
            </article>
          </div>
        </div>
      </section>

      {/* POT COMMUN — full bleed colored block */}
      <section className="bg-accent-secondary text-bg">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32">
          <div className="grid gap-12 sm:grid-cols-12">
            <div className="sm:col-span-7">
              <p className="label opacity-70">Le pot commun</p>
              <h2 className="display-xl mt-6">
                Mutualiser <br />
                pour bâtir.
              </h2>
            </div>
            <div className="flex flex-col justify-end sm:col-span-5">
              <p className="chapeau opacity-90">
                Une part des revenus de chaque app alimente un pot commun. Ces
                fonds financent les briques numériques européennes qui nous
                manquent — bibliothèques open source, infrastructures
                partagées, outils communs.
              </p>
              <Link
                to="/pot"
                className="mt-10 inline-flex w-fit items-center gap-3 border-2 border-bg px-6 py-3 label hover:bg-bg hover:text-accent-secondary"
              >
                Voir le pot <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE / STATEMENT */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="label text-text/50">L'idée fixe</p>
            <p className="font-heading mt-8 text-4xl uppercase leading-tight sm:text-6xl">
              Le web était un{' '}
              <span className="text-accent-primary">commun</span>.
              <br />
              Il peut le redevenir.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
