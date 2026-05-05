import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogArticle,
})

function BlogArticle() {
  const { slug } = Route.useParams()
  return (
    <div className="space-y-4">
      <h1 className="text-4xl">{slug}</h1>
      <p className="text-black/70">Article à venir.</p>
    </div>
  )
}
