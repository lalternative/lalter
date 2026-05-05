import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogArticle,
})

function BlogArticle() {
  const { slug } = Route.useParams()
  return (
    <article>
      <header className="border-b-2 border-text">
        <div className="mx-auto w-full max-w-3xl px-6 py-20 sm:py-28">
          <p className="label text-accent-primary">Article</p>
          <h1 className="font-heading mt-6 text-5xl uppercase leading-tight sm:text-7xl">
            {slug.replace(/-/g, ' ')}
          </h1>
          <p className="mt-8 text-base text-text/60">
            Cet article sera bientôt publié.
          </p>
        </div>
      </header>

      <section>
        <div className="mx-auto w-full max-w-3xl px-6 py-20 sm:py-28">
          <div className="prose-editorial text-text/80">
            <p>
              Le contenu de cet article est en cours d'écriture. Revenez
              bientôt — ou abonnez-vous à la revue pour ne pas le manquer.
            </p>
          </div>
        </div>
      </section>
    </article>
  )
}
