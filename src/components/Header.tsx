import { useState } from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import NavMenu from './NavMenu';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-white"
          aria-label={`${profile.name} — Ana sayfa`}
        >
          {profile.name}
        </Link>

        {/* Masaüstü menü */}
        <nav aria-label="Ana menü" className="hidden md:block">
          <NavMenu />
        </nav>

        {/* Mobil menü düğmesi */}
        <button
          type="button"
          className="rounded p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobil menü paneli */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobil menü"
          className="border-t border-white/10 px-4 pb-4 md:hidden"
        >
          <NavMenu orientation="vertical" onNavigate={() => setOpen(false)} />
        </nav>
      )}
    </header>
  );
}
