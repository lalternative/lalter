import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a-propos')({
  component: AProposPage,
})

function AProposPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl">À propos</h1>
      <div className="max-w-2xl space-y-4 text-base text-black/80">
        <p>
          L'Alter est un collectif d'apps européennes mutualisant une part de
          leurs revenus dans un pot commun pour financer les briques numériques
          manquantes.
        </p>
        <p>Cette page sera enrichie prochainement.</p>
      </div>
    </div>
  )
}
