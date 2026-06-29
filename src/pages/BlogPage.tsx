import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import { getAllPosts } from '../lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Seo
        title="Blog"
        description="Burak Akçakanat'ın yazıları: dijital ekosistemler, büyüme ve topluluk dinamikleri."
        path="/blog"
      />
      <PageHeader title="Blog" subtitle="Düşünceler, notlar ve analizler." />

      <div className="mx-auto max-w-4xl px-4 py-16">
        {posts.length > 0 ? (
          <ul className="space-y-8">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="rounded-xl border border-black/5 bg-white p-6 shadow-sm"
              >
                <article>
                  {post.date && (
                    <time
                      dateTime={post.date}
                      className="text-xs font-medium uppercase tracking-wide text-secondary"
                    >
                      {post.date}
                    </time>
                  )}
                  <h2 className="mt-1 text-xl font-bold text-primary">
                    <Link to={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt && (
                    <p className="mt-2 text-dark/70">{post.excerpt}</p>
                  )}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-3 inline-block text-sm font-semibold text-accent hover:underline"
                  >
                    Devamını Oku →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-dark/60">Yakında yazılar eklenecek.</p>
        )}
      </div>
    </>
  );
}
