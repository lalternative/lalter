import { Link } from '@tanstack/react-router'

const navLinks = [
  { to: '/apps', label: 'Organes' },
  { to: '/pot', label: 'Pot commun' },
  { to: '/blog', label: 'Revue' },
  { to: '/a-propos', label: 'À propos' },
] as const

export function Header() {
  return (
    <header className="border-b-2 border-text">
      <div className="mx-auto flex w-full max-w-7xl items-end justify-between gap-6 px-6 py-5 sm:py-6">
        <Link
          to="/"
          className="font-heading text-3xl leading-none tracking-tight sm:text-4xl"
          aria-label="L'Alter — accueil"
        >
          L'ALTER
        </Link>
        <nav
          aria-label="Navigation principale"
          className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 sm:gap-x-7"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="label text-text/80 transition-colors hover:text-accent-primary"
              activeProps={{ className: 'label text-accent-primary' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
