import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pot')({
  component: PotPage,
})

type Tile = {
  label: string
  value: string
  hint: string
  bg: string
  fg: string
}

const tiles: Tile[] = [
  {
    label: 'Pot total',
    value: '0 €',
    hint: 'À ce jour',
    bg: 'bg-accent-primary',
    fg: 'text-bg',
  },
  {
    label: 'Contributeurs',
    value: '0',
    hint: 'Abonnés actifs',
    bg: 'bg-bg border-2 border-text',
    fg: 'text-text',
  },
  {
    label: 'Apps participantes',
    value: '4',
    hint: 'Au lancement',
    bg: 'bg-accent-secondary',
    fg: 'text-bg',
  },
  {
    label: 'Prochaine cible',
    value: '10K€',
    hint: 'Premier financement',
    bg: 'bg-warm',
    fg: 'text-text',
  },
]

function PotPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b-2 border-text">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-28">
          <p className="label text-text/60">Transparence</p>
          <h1 className="display-xl mt-6">
            Le <span className="text-accent-primary">pot</span>
            <br />
            commun
          </h1>
          <p className="chapeau mt-10 max-w-2xl">
            Une partie de ce que gagne chaque app revient au collectif. Les
            chiffres ci-dessous sont publics et le resteront.
          </p>
        </div>
      </section>

      {/* Infographic tiles */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 gap-px bg-text sm:grid-cols-2 lg:grid-cols-4">
            {tiles.map((tile) => (
              <div
                key={tile.label}
                className={`${tile.bg} ${tile.fg} flex min-h-[260px] flex-col justify-between p-8 sm:p-10`}
              >
                <p className="label opacity-70">{tile.label}</p>
                <div>
                  <p className="font-heading text-7xl leading-none sm:text-8xl">
                    {tile.value}
                  </p>
                  <p className="mt-3 text-sm opacity-75">{tile.hint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reading column */}
      <section>
        <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
          <p className="label text-accent-primary">Comment ça marche</p>
          <h2 className="font-heading mt-6 text-4xl uppercase leading-tight sm:text-5xl">
            Mutualiser sans se diluer.
          </h2>
          <div className="prose-editorial mt-10 text-text/85">
            <p>
              Chaque app du collectif reverse une fraction de ses revenus
              dans un pot commun. Ces fonds financent des briques numériques
              européennes manquantes : bibliothèques open source,
              infrastructures partagées, outils communs dont nous avons tous
              besoin et que personne ne maintient.
            </p>
            <p>
              Le pourcentage exact, la liste des projets soutenus et
              l'attribution des fonds seront publiés à chaque cycle. Pas de
              fondation, pas de comité de direction caché — un tableau, des
              chiffres, des décisions justifiées.
            </p>
            <p>
              Le pot commun n'est pas un acte militant. C'est un calcul
              simple : nos apps reposent sur des fondations qu'il faut bien
              que quelqu'un entretienne. Autant que ce soit nous, ensemble.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
