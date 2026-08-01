import { Link } from '@tanstack/react-router'
import { Logo } from '@/components/Logo'

const navLinks = [
  { to: '/apps', label: 'Organes' },
  { to: '/outils', label: 'Outils' },
  { to: '/pot', label: 'Pot commun' },
  { to: '/blog', label: 'Revue' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
] as const

export function Header() {
  return (
    <header className="border-b-2 border-text">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:py-6">
        <Link
          to="/"
          className="shrink-0 transition-opacity hover:opacity-70"
          aria-label="L'Alternative Fabrique — accueil"
        >
          {/* Smaller on mobile so the nav keeps its room on a narrow bar. */}
          <Logo size={56} className="h-14 w-14 sm:h-[68px] sm:w-[68px]" />
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
