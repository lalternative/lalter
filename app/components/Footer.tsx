import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-black/70 sm:flex-row sm:items-center sm:justify-between">
        <p>L'Alter — un collectif européen</p>
        <div className="flex gap-4">
          <Link to="/a-propos" className="hover:text-[color:var(--color-accent-primary)]">
            À propos
          </Link>
          <a
            href="mailto:contact@lalter.fr"
            className="hover:text-[color:var(--color-accent-primary)]"
          >
            contact@lalter.fr
          </a>
        </div>
      </div>
    </footer>
  )
}
