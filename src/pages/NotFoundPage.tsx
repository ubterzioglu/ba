import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Sayfa bulunamadı"
        description="Aradığınız sayfa bulunamadı."
        path="/404"
      />
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-32 text-center">
        <p className="text-6xl font-extrabold text-accent">404</p>
        <h1 className="mt-4 text-2xl font-bold text-primary">
          Sayfa bulunamadı
        </h1>
        <p className="mt-2 text-dark/70">
          Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-secondary"
        >
          Ana sayfaya dön
        </Link>
      </div>
    </>
  );
}
