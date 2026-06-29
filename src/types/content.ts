// Site içeriği için ortak tip tanımları.
// Gerçek içerik src/data/*.ts dosyalarında bu tiplere göre tutulur.

export interface SocialLink {
  label: string;
  href: string;
  /** Basit ikon anahtarı (Footer/Header eşler) */
  icon: 'linkedin' | 'twitter' | 'github' | 'email' | 'web';
}

export interface Profile {
  name: string;
  /** Hero alt başlığı / unvan */
  title: string;
  /** Kısa slogan / CTA cümlesi */
  tagline: string;
  /** Hakkımda uzun metni (paragraf dizisi) */
  about: string[];
  /** Öne çıkan güçler / yetkinlikler */
  strengths: string[];
  /** Stratejik / yatırımcı perspektifi paragrafları */
  vision: string[];
  social: SocialLink[];
  email: string;
  /** CV PDF yolu (public/ altında), opsiyonel */
  cvUrl?: string;
}

export interface Project {
  slug: string;
  name: string;
  summary: string;
  description: string;
  tags: string[];
  url?: string;
  /** public/ altında görsel yolu, opsiyonel */
  image?: string;
  featured?: boolean;
}

export interface Publication {
  title: string;
  publisher: string;
  year: number;
  url?: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  image?: string;
}
