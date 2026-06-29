import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Seo from '../components/Seo';
import { getPostBySlug } from '../lib/blog';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <Seo
          title="Yazı bulunamadı"
          description="Aradığınız blog yazısı bulunamadı."
          path={`/blog/${slug ?? ''}`}
        />
        <h1 className="text-2xl font-bold text-primary">Yazı bulunamadı</h1>
        <Link
          to="/blog"
          className="mt-4 inline-block font-semibold text-accent hover:underline"
        >
          ← Tüm yazılar
        </Link>
      </div>
    );
  }

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <Link
          to="/blog"
          className="text-sm font-semibold text-accent hover:underline"
        >
          ← Tüm yazılar
        </Link>
        <h1 className="mt-4 text-3xl font-extrabold text-primary">
          {post.title}
        </h1>
        {post.date && (
          <time
            dateTime={post.date}
            className="mt-2 block text-sm text-dark/50"
          >
            {post.date}
          </time>
        )}

        <div className="prose-custom mt-8 max-w-none space-y-4 text-dark/80 [&_a]:text-secondary [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-primary [&_li]:ml-5 [&_li]:list-disc">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </>
  );
}
