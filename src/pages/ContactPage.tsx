import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { profile } from '../data/profile';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="İletişim"
        description={`${profile.name} ile iletişime geçin.`}
        path="/contact"
      />
      <PageHeader
        title="İletişim"
        subtitle="Bir proje, iş birliği veya soru için yazın."
      />

      <div className="mx-auto grid max-w-5xl gap-12 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-primary">İletişim Bilgileri</h2>
          <p className="mt-4 text-dark/80">
            Mesajınızı formdan iletebilir ya da doğrudan e-posta gönderebilirsiniz.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <span className="font-semibold text-dark">E-posta: </span>
              <a
                href={`mailto:${profile.email}`}
                className="text-secondary underline"
              >
                {profile.email}
              </a>
            </li>
            {profile.social
              .filter((s) => s.icon !== 'email')
              .map((s) => (
                <li key={s.label}>
                  <span className="font-semibold text-dark">{s.label}: </span>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary underline"
                  >
                    {s.href === '#' ? 'Yakında' : s.href}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-primary">Mesaj Gönder</h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
