import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
})

function BlogIndex() {
  return (
    <div className="space-y-4">
      <h1 className="text-5xl">Le blog</h1>
      <p className="text-black/70">
        Aucun article publié pour l'instant — bientôt.
      </p>
    </div>
  )
}
