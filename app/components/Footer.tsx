import { Link } from '@tanstack/react-router'
import { Logo } from '@/components/Logo'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-32 border-t-2 border-text">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-12">
          <div className="sm:col-span-6">
            <Logo size={96} className="h-24 w-24" />
            <p className="mt-6 max-w-sm text-base text-text/70">
              Des outils sobres pour construire une alternative.
              Un organe après l'autre.
            </p>
          </div>

          <div className="sm:col-span-3">
            <p className="label text-text/50">Navigation</p>
            <ul className="mt-4 space-y-2 text-base">
              <li>
                <Link to="/apps" className="hover:text-accent-primary">
                  Organes
                </Link>
              </li>
              <li>
                <Link to="/pot" className="hover:text-accent-primary">
                  Pot commun
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-accent-primary">
                  Revue
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-accent-primary">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-3">
            <p className="label text-text/50">Contact</p>
            <ul className="mt-4 space-y-2 text-base">
              <li>
                <a
                  href="mailto:contact@lalternativefabrique.org"
                  className="hover:text-accent-primary"
                >
                  contact@lalternativefabrique.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-text/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-text/60">№ 01 — {year}</p>
          <p className="label text-text/60">Nos outils, nos règles</p>
        </div>
      </div>
    </footer>
  )
}
