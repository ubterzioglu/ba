import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import PublicationCard from '../components/PublicationCard';
import { publications } from '../data/publications';

export default function PublicationsPage() {
  return (
    <>
      <Seo
        title="Yayınlar"
        description="Burak Akçakanat'ın yayınları, makaleleri ve katkıları."
        path="/publications"
      />
      <PageHeader
        title="Yayınlar"
        subtitle="Makaleler, yazılar ve katkılar."
      />

      <div className="mx-auto max-w-3xl px-4 py-16">
        {publications.length > 0 ? (
          <div className="grid gap-4">
            {publications.map((pub) => (
              <PublicationCard key={pub.title} publication={pub} />
            ))}
          </div>
        ) : (
          <p className="text-dark/60">Yakında yayınlar eklenecek.</p>
        )}
      </div>
    </>
  );
}
