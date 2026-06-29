import { NavLink } from 'react-router-dom';
import { navItems } from '../data/nav';

interface NavMenuProps {
  /** Mobil menüde tıklayınca menüyü kapatmak için */
  onNavigate?: () => void;
  orientation?: 'horizontal' | 'vertical';
}

export default function NavMenu({
  onNavigate,
  orientation = 'horizontal',
}: NavMenuProps) {
  const listClass =
    orientation === 'horizontal'
      ? 'flex items-center gap-1'
      : 'flex flex-col gap-1';

  return (
    <ul className={listClass}>
      {navItems.map((item) => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            end={item.to === '/'}
            onClick={onNavigate}
            className={({ isActive }) =>
              `block rounded px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 ${
                isActive ? 'text-accent' : 'text-white/90'
              }`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
