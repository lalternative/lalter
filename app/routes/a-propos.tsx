import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a-propos')({
  component: AProposPage,
  head: () => ({
    meta: [
      { title: "À propos — L'Alter" },
      { name: 'description', content: "L'Alter réunit des outils sobres qui vous donnent les moyens d'agir par vous-même." },
    ],
  }),
})

function AProposPage() {
  return (
    <div>
      <section className="border-b-2 border-text">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-28">
          <p className="label text-text/60">Le collectif</p>
          <h1 className="display-xl mt-6">À propos</h1>
          <p className="chapeau mt-10 max-w-2xl">
            L'Alter réunit des outils sobres qui vous donnent les moyens
            d'agir par vous-même — et mutualisent une partie de leurs revenus
            dans un pot commun pour financer les briques qui manquent encore.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-3xl px-6 py-20 sm:py-28">
          <p className="label text-accent-primary">Notre lecture</p>
          <h2 className="font-heading mt-6 text-4xl uppercase leading-tight sm:text-5xl">
            Vous en êtes déjà capable.
          </h2>
          <div className="prose-editorial mt-10 text-text/85">
            <p>
              La plupart des outils décident à votre place : ils simplifient
              en vous retirant la main. L'Alter part de l'idée inverse —
              vous savez ce que vous faites, il suffit qu'on vous en donne les
              moyens.
            </p>
            <p>
              Chaque outil couvre une capacité concrète : tenir ses comptes,
              se faire entendre, faire fructifier, garder la main sur son
              savoir. Sobre, lisible, sans intermédiaire qui s'interpose.
              Ce qui les relie : une part des revenus reversée au pot commun,
              et la conviction qu'on peut reprendre la main soi-même.
            </p>
            <p>
              Ce n'est pas un manifeste. C'est juste la manière dont on a
              envie de travailler.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-text text-bg">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32">
          <div className="grid gap-10 sm:grid-cols-12">
            <div className="sm:col-span-5">
              <p className="label opacity-70">Contact</p>
              <p className="font-heading mt-6 text-5xl uppercase leading-none sm:text-7xl">
                Écrivez-nous.
              </p>
            </div>
            <div className="flex flex-col justify-end sm:col-span-7">
              <p className="chapeau opacity-90">
                Vous vous reconnaissez dans cette démarche, ou vous voulez
                juste discuter ? On lit tout.
              </p>
              <Link
                to="/contact"
                className="label mt-8 inline-flex w-fit items-center gap-3 border-2 border-bg px-6 py-3 hover:bg-bg hover:text-text"
              >
                Nous écrire <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
