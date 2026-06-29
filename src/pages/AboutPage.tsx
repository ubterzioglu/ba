import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import { profile } from '../data/profile';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Hakkımda"
        description={`${profile.name} hakkında: ${profile.tagline}`}
        path="/about"
      />
      <PageHeader title="Hakkımda" subtitle={profile.title} />

      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="prose-custom space-y-4 text-dark/80">
          {profile.about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-bold text-primary">
          Ayırt Edici Güçler
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {profile.strengths.map((s) => (
            <li
              key={s}
              className="flex items-start gap-2 rounded-md bg-light px-3 py-2 text-sm text-dark/80"
            >
              <span aria-hidden="true" className="mt-0.5 text-accent">
                ▸
              </span>
              {s}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-xl font-bold text-primary">
          Stratejik ve Yatırımcı Perspektifi
        </h2>
        <div className="mt-4 space-y-4 text-dark/80">
          {profile.vision.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </>
  );
}
