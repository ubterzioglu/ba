import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import NewsletterForm from '../components/NewsletterForm';
import { profile } from '../data/profile';
import { projects } from '../data/projects';

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Seo
        title={`${profile.name} — ${profile.title}`}
        description={profile.tagline}
        path="/"
      />

      <HeroSection />

      {/* Kısa Hakkımda */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-primary">Hakkımda</h2>
        <p className="mt-4 max-w-3xl text-dark/80">{profile.about[0]}</p>
        <Link
          to="/about"
          className="mt-4 inline-block font-semibold text-accent hover:underline"
        >
          Devamını oku →
        </Link>
      </section>

      {/* Öne çıkan projeler */}
      {featured.length > 0 && (
        <section className="bg-light">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-2xl font-bold text-primary">Öne Çıkan Projeler</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bülten */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Bültene Abone Olun</h2>
          <p className="mt-2 max-w-2xl text-white/80">
            Yeni yazılar ve güncellemelerden haberdar olun.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
