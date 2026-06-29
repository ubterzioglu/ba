import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'cookie-consent-v1';

// Yalnız zorunlu çerez bilgilendirmesi (3. parti analiz/izleme yok).
// KVKK/GDPR: kesinlikle gerekli çerezler için onay zorunlu değildir,
// ancak şeffaflık için bilgilendirme bandı gösterilir.
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      // localStorage erişilemiyorsa bandı göstermeyelim
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {
      /* yoksay */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Çerez bilgilendirmesi"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 p-4 shadow-lg backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-dark/80">
          Bu sitede yalnızca hizmetin sağlanması için kesinlikle gerekli çerezler
          kullanılmaktadır. Üçüncü taraf takip veya analiz çerezi
          kullanılmamaktadır.{' '}
          <Link to="/privacy" className="font-medium text-secondary underline">
            Gizlilik &amp; KVKK
          </Link>
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-secondary"
        >
          Anladım
        </button>
      </div>
    </div>
  );
}
