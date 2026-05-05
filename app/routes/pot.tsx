import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pot')({
  component: PotPage,
})

const tiles = [
  { label: 'Pot total', value: '0 €' },
  { label: 'Abonnés contributeurs', value: '0' },
  { label: 'Apps participantes', value: '4' },
  { label: 'Prochaine cible', value: '10 000 €' },
]

function PotPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-5xl">Le pot commun</h1>
      <p className="max-w-2xl text-base text-black/70">
        Chaque app du collectif reverse une fraction de ses revenus dans un pot
        commun. Ces fonds financent des briques numériques européennes
        manquantes : bibliothèques open source, infrastructures partagées,
        outils communs. Transparence totale : les chiffres ci-dessous seront
        publiés à mesure que le collectif s'étend.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((tile) => (
          <div
            key={tile.label}
            className="rounded-md border border-black/10 bg-white/40 p-5"
          >
            <p className="text-xs uppercase tracking-wider text-black/60">
              {tile.label}
            </p>
            <p className="mt-2 text-3xl">{tile.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
