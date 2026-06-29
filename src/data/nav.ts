export interface NavItem {
  label: string;
  to: string;
}

// Üst menü ve altbilgi paylaşır.
export const navItems: NavItem[] = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'Hakkımda', to: '/about' },
  { label: 'Projeler', to: '/projects' },
  { label: 'Yayınlar', to: '/publications' },
  { label: 'Blog', to: '/blog' },
  { label: 'İletişim', to: '/contact' },
  { label: 'Özgeçmiş', to: '/cv' },
];
