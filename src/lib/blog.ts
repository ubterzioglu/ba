import type { BlogPostMeta } from '../types/content';

// Build-time: src/content/blog/*.md dosyalarını raw string olarak yükler.
const modules = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export interface BlogPost extends BlogPostMeta {
  /** Frontmatter çıkarıldıktan sonra kalan markdown gövdesi */
  content: string;
}

/** Basit frontmatter ayrıştırıcı: `---` blokları arasındaki key: value satırları. */
function parseFrontmatter(raw: string): {
  data: Record<string, string>;
  body: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { data: {}, body: raw };
  }
  const [, fm, body] = match;
  const data: Record<string, string> = {};
  for (const line of fm.split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (key) data[key] = value;
  }
  return { data, body: body.trim() };
}

function slugFromPath(path: string): string {
  return path.split('/').pop()!.replace(/\.md$/, '');
}

const posts: BlogPost[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    return {
      slug: slugFromPath(path),
      title: data.title ?? slugFromPath(path),
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      image: data.image,
      content: body,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1)); // en yeni önce

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
