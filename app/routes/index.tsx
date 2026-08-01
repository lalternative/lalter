import { Link, createFileRoute } from '@tanstack/react-router'
import { ORGANIZATION, SITE_URL, jsonLd, seo } from '@/lib/seo'

const homeSeo = seo({
  title: "L'Alternative Fabrique — des outils sobres pour reprendre le pouvoir d'agir",
  description:
    "Cinq organes du pouvoir d'agir — connaissance, technique, création, financement, communication — et un outil sobre pour chacun. On en est capable.",
  path: '/',
})

export const Route = createFileRoute('/')({
  component: LandingPage,
  head: () => ({
    ...homeSeo,
    meta: [
      ...homeSeo.meta,
      // WebSite + Organization are declared once, on the home page: it is the
      // node every other page's publisher reference points back to.
      jsonLd({
        '@context': 'https://schema.org',
        '@graph': [
          ORGANIZATION,
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: "L'Alternative Fabrique",
            inLanguage: 'fr-FR',
            publisher: { '@id': `${SITE_URL}/#organization` },
          },
        ],
      }),
    ],
  }),
})

type Capacite = {
  name: string
  tagline: string
  kicker: string
  /** True once an organ has a shipped tool. Tools are named on /outils, not here. */
  shipped?: boolean
  /** Shipped but invite-only: shown as "Sur invitation", not "Disponible". */
  beta?: boolean
}

/** Shared "Disponible →" / "En cours" state line for an organ tile. */
function OrganeStatus({ shipped, beta }: { shipped?: boolean; beta?: boolean }) {
  if (!shipped && !beta) return <p className="label mt-6 opacity-50">En cours</p>
  return (
    <Link
      to="/outils"
      className="label mt-6 inline-flex w-fit items-center gap-2 border-b-2 border-current pb-1 hover:opacity-70"
    >
      {beta ? 'Sur invitation' : 'Disponible'} <span aria-hidden>→</span>
    </Link>
  )
}

const capacites: Capacite[] = [
  {
    name: 'Connaissance',
    tagline: 'Avoir les idées, garder la main sur son savoir.',
    kicker: 'Le point de départ',
    shipped: true,
  },
  {
    name: 'Technique',
    tagline: 'Tenir ses outils sans dépendre de personne.',
    kicker: 'La machine',
    shipped: true,
  },
  {
    name: 'Création',
    tagline: 'Faire exister ce que vous lancez.',
    kicker: 'Produire',
  },
  {
    name: 'Financement',
    tagline: 'Financer ce qu\'on entreprend, sans intermédiaire qui prélève.',
    kicker: 'Le nerf',
    beta: true,
  },
  {
    name: 'Communication',
    tagline: 'Se faire connaître par ses propres moyens.',
    kicker: 'Se faire entendre',
    shipped: true,
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

          {/*
           * Two lines, one whole word each, so the eye never has to reassemble
           * the name. w-fit shrinks the heading onto its widest line so the
           * ranged-right second line lands under the final E of L'ALTERNATIVE
           * rather than at the far edge of the container, where it would read
           * as a detached word instead of the rest of the name.
           */}
          <h1 className="display-xxl mt-8 w-fit sm:mt-10">
            L'Alternative
            {/*
             * FABRIQUE sits smaller and flush right, tucked under the final E
             * of the line above. Set at the same size and flush left it left a
             * hole under the right half of the block; ranged right it closes
             * that gap and reads as a signature under the name rather than a
             * line that ran out of letters.
             */}
            <span className="block text-right text-[0.58em] leading-[0.95] text-accent-primary">
              Fabrique
            </span>
          </h1>

          <div className="mt-10 grid gap-10 sm:mt-14 sm:grid-cols-12">
            <p className="chapeau sm:col-span-7 sm:col-start-1">
              Reprenez le pouvoir d'agir. Des outils sobres qui vous rendent
              capable — vos idées, vos outils, ce que vous créez, ce que vous
              financez, votre parole — sans personne pour décider à votre place.
            </p>
            <div className="sm:col-span-4 sm:col-start-9 sm:self-end">
              <p className="label text-text/60">Au sommaire</p>
              <ul className="mt-3 space-y-1 text-base">
                <li>— Cinq organes à reprendre</li>
                <li>— Un pot commun, transparent</li>
                <li>— Une revue à venir</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ORGANES — asymmetric editorial cards */}
      <section className="border-b-2 border-text">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-28">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="display-lg">Les organes</h2>
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
              <p className="label opacity-80">{capacites[0].kicker}</p>
              <h3 className="font-heading mt-6 text-6xl leading-none sm:text-8xl">
                {capacites[0].name}
              </h3>
              <p className="chapeau mt-6 max-w-md">{capacites[0].tagline}</p>
              <OrganeStatus shipped={capacites[0].shipped} />
            </article>

            <article className="col-span-1 bg-bg p-8 sm:col-span-5 sm:p-12">
              <p className="label text-text/60">{capacites[1].kicker}</p>
              <h3 className="font-heading mt-6 text-5xl leading-none sm:text-7xl">
                {capacites[1].name}
              </h3>
              <p className="mt-6 text-base text-text/80">{capacites[1].tagline}</p>
              <OrganeStatus shipped={capacites[1].shipped} />
            </article>

            <article className="col-span-1 bg-accent-secondary p-8 text-bg sm:col-span-5 sm:p-12">
              <p className="label opacity-70">{capacites[2].kicker}</p>
              <h3 className="font-heading mt-6 text-5xl leading-none sm:text-7xl">
                {capacites[2].name}
              </h3>
              <p className="mt-6 text-base opacity-90">{capacites[2].tagline}</p>
              <OrganeStatus shipped={capacites[2].shipped} />
            </article>

            <article className="col-span-1 bg-warm p-8 sm:col-span-7 sm:p-12">
              <p className="label text-text/70">{capacites[3].kicker}</p>
              <h3 className="font-heading mt-6 text-6xl leading-none sm:text-8xl">
                {capacites[3].name}
              </h3>
              <p className="chapeau mt-6 max-w-md">{capacites[3].tagline}</p>
              <OrganeStatus shipped={capacites[3].shipped} beta={capacites[3].beta} />
            </article>

            <article className="col-span-1 bg-text p-8 text-bg sm:col-span-12 sm:p-12">
              <p className="label opacity-70">{capacites[4].kicker}</p>
              <h3 className="font-heading mt-6 text-6xl leading-none sm:text-8xl">
                {capacites[4].name}
              </h3>
              <p className="chapeau mt-6 max-w-xl opacity-90">
                {capacites[4].tagline}
              </p>
              <OrganeStatus shipped={capacites[4].shipped} />
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
                Chaque centime <br />
                revient ici.
              </h2>
            </div>
            <div className="flex flex-col justify-end sm:col-span-5">
              <p className="chapeau opacity-90">
                Une part des revenus de chaque outil alimente un pot commun,
                qui sert à reforger nos propres moyens numériques. Une idée ne
                se concrétise qu'en la finançant : plutôt que de lever des
                fonds, on reprend la main sur des revenus qui nous échappent
                déjà.
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
              Reprendre ses capacités, une à une.
              <br />
              La capacité de tout{' '}
              <span className="text-accent-primary">changer</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
