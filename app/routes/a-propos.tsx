import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a-propos')({
  component: AProposPage,
})

function AProposPage() {
  return (
    <div>
      <section className="border-b-2 border-text">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-28">
          <p className="label text-text/60">Le collectif</p>
          <h1 className="display-xl mt-6">À propos</h1>
          <p className="chapeau mt-10 max-w-2xl">
            L'Alter est un collectif d'apps européennes mutualisant une
            partie de leurs revenus pour financer les briques numériques
            manquantes.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-3xl px-6 py-20 sm:py-28">
          <p className="label text-accent-primary">Notre lecture</p>
          <h2 className="font-heading mt-6 text-4xl uppercase leading-tight sm:text-5xl">
            Le web, à l'origine, était un commun.
          </h2>
          <div className="prose-editorial mt-10 text-text/85">
            <p>
              Le web est né d'une idée simple : des protocoles ouverts, des
              gens qui partagent, une infrastructure commune que personne
              ne possède en propre. Cette idée tient toujours, même si
              l'industrie a fini par la recouvrir.
            </p>
            <p>
              L'Alter rassemble des éditeurs d'apps qui veulent continuer à
              construire dans cette filiation. Chaque app reste libre,
              indépendante, économiquement viable de son côté. Ce qui nous
              relie : une part des revenus reversée au pot commun, et la
              conviction qu'on peut faire du logiciel européen sans
              attendre de subvention ni de plateforme.
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
                Vous éditez une app européenne et vous vous reconnaissez
                dans cette démarche ? Vous voulez juste discuter ? Une
                seule adresse.
              </p>
              <a
                href="mailto:contact@lalter.fr"
                className="mt-8 font-heading text-3xl uppercase tracking-tight text-accent-primary hover:underline sm:text-4xl"
              >
                contact@lalter.fr
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
