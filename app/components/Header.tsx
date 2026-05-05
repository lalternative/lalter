import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-2xl tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
          L'ALTER
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link to="/apps" className="hover:text-[color:var(--color-accent-primary)]">
            Apps
          </Link>
          <Link to="/pot" className="hover:text-[color:var(--color-accent-primary)]">
            Pot
          </Link>
          <Link to="/blog" className="hover:text-[color:var(--color-accent-primary)]">
            Blog
          </Link>
          <Link to="/a-propos" className="hover:text-[color:var(--color-accent-primary)]">
            À propos
          </Link>
        </nav>
      </div>
    </header>
  )
}
