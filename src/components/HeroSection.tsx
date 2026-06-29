import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark via-primary to-secondary text-white">
      {/* Soyut, su-altı hissi veren dekoratif katman */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(60% 60% at 20% 20%, rgba(0,128,128,0.5) 0%, transparent 60%), radial-gradient(50% 50% at 80% 30%, rgba(0,80,158,0.5) 0%, transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {profile.title}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
          {profile.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Projeleri Keşfet
          </Link>
          <Link
            to="/contact"
            className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </section>
  );
}
