import type { Publication } from '../types/content';

export default function PublicationCard({
  publication,
}: {
  publication: Publication;
}) {
  return (
    <article className="rounded-lg border border-black/5 bg-white p-5 shadow-sm">
      <h3 className="font-semibold text-primary">{publication.title}</h3>
      <p className="mt-1 text-sm text-dark/60">
        {publication.publisher} · {publication.year}
      </p>
      {publication.url && (
        <a
          href={publication.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
        >
          Yayını görüntüle →
        </a>
      )}
    </article>
  );
}
