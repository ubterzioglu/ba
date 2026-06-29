import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import { profile } from '../data/profile';

export default function CVPage() {
  return (
    <>
      <Seo
        title="Özgeçmiş"
        description={`${profile.name} özgeçmişi ve profesyonel arka planı.`}
        path="/cv"
      />
      <PageHeader
        title="Özgeçmiş"
        subtitle="Profesyonel arka plan ve deneyim."
      />

      <div className="mx-auto max-w-3xl px-4 py-16">
        {profile.cvUrl ? (
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-secondary"
          >
            ⬇ Özgeçmişi indir (PDF)
          </a>
        ) : (
          <p className="rounded-md bg-light px-4 py-3 text-sm text-dark/70">
            Özgeçmiş PDF’i yakında eklenecek. (Eklemek için PDF’i{' '}
            <code className="rounded bg-white px-1">public/</code> klasörüne koyup{' '}
            <code className="rounded bg-white px-1">profile.cvUrl</code> alanını
            doldurun.)
          </p>
        )}

        <section className="mt-12">
          <h2 className="text-xl font-bold text-primary">Profesyonel Arka Plan</h2>
          <div className="mt-4 space-y-4 text-dark/80">
            {profile.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-primary">Yetkinlikler</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {profile.strengths.map((s) => (
              <li
                key={s}
                className="rounded-full bg-light px-3 py-1 text-sm text-secondary"
              >
                {s}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
