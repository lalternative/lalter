import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
})

function BlogIndex() {
  return (
    <div>
      <section className="border-b-2 border-text">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-28">
          <p className="label text-text/60">La revue — № 01</p>
          <h1 className="display-xl mt-6">La revue</h1>
        </div>
      </section>

      <section className="bg-accent-primary text-bg">
        <div className="mx-auto w-full max-w-7xl px-6 py-32 sm:py-44">
          <div className="mx-auto max-w-4xl">
            <p className="label opacity-80">À paraître</p>
            <p className="font-heading mt-8 text-4xl uppercase leading-tight sm:text-6xl">
              « Une revue lente, écrite à plusieurs mains, sur ce que veut
              dire reprendre la main sur ses outils aujourd'hui. »
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-3xl px-6 py-20 sm:py-28">
          <div className="prose-editorial text-text/85">
            <p>
              La revue de L'Alter ouvrira ses pages dans les prochains mois.
              On y publiera des textes courts, denses, sur le pouvoir d'agir
              concret : tenir ses comptes, se faire entendre, décider de ses
              placements, garder la main sur son savoir.
            </p>
            <p>
              Pas de hot takes, pas de classements, pas de tendances. Une
              cadence d'éditeur — quelques numéros par an, signés par les
              gens qui font.
            </p>
          </div>
          <div className="mt-12 border-t-2 border-text pt-6">
            <p className="label text-text/60">Premier numéro — à venir</p>
          </div>
        </div>
      </section>
    </div>
  )
}
