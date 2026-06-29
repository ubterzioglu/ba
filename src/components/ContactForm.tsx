import { useState, type FormEvent } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    // Sınır doğrulaması (boundary validation)
    if (!name || !email || !message) {
      setStatus('error');
      setError('Lütfen tüm alanları doldurun.');
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      setError('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }
    if (!isSupabaseConfigured) {
      setStatus('error');
      setError('Form altyapısı yapılandırılmamış. Lütfen daha sonra deneyin.');
      return;
    }

    setStatus('submitting');
    const { error: dbError } = await supabase
      .from('messages')
      .insert({ name, email, message });

    if (dbError) {
      setStatus('error');
      setError('Mesaj gönderilemedi. Lütfen tekrar deneyin.');
      return;
    }

    setStatus('success');
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-dark">
          Ad Soyad
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 text-sm focus:border-secondary"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-dark">
          E-posta
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 text-sm focus:border-secondary"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark">
          Mesajınız
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 text-sm focus:border-secondary"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-secondary disabled:opacity-60"
      >
        {status === 'submitting' ? 'Gönderiliyor…' : 'Gönder'}
      </button>

      {/* Erişilebilir durum bildirimi */}
      <p aria-live="polite" className="text-sm">
        {status === 'success' && (
          <span className="text-accent">
            Mesajınız alındı. En kısa sürede dönüş yapılacaktır.
          </span>
        )}
        {status === 'error' && <span className="text-red-600">{error}</span>}
      </p>
    </form>
  );
}
