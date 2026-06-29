import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { navItems } from '../data/nav';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h2 className="text-base font-semibold text-white">{profile.name}</h2>
          <p className="mt-2 max-w-xs text-sm">{profile.title}</p>
        </div>

        <nav aria-label="Altbilgi menüsü">
          <h2 className="text-base font-semibold text-white">Sayfalar</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-semibold text-white">İletişim</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="hover:text-accent">
                {profile.email}
              </a>
            </li>
            {profile.social
              .filter((s) => s.icon !== 'email')
              .map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="hover:text-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            <li>
              <Link to="/privacy" className="hover:text-accent">
                Gizlilik &amp; KVKK
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-white/60">
          © {year} {profile.name}. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
