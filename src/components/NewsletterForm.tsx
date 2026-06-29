import { useState, type FormEvent } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    const form = e.currentTarget;
    const email = String(new FormData(form).get('email') ?? '').trim();

    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      setError('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }
    if (!isSupabaseConfigured) {
      setStatus('error');
      setError('Bülten altyapısı yapılandırılmamış.');
      return;
    }

    setStatus('submitting');
    const { error: dbError } = await supabase
      .from('subscribers')
      .insert({ email });

    if (dbError) {
      // 23505 = unique violation (zaten abone)
      if (dbError.code === '23505') {
        setStatus('success');
        form.reset();
        return;
      }
      setStatus('error');
      setError('Abonelik kaydedilemedi. Lütfen tekrar deneyin.');
      return;
    }

    setStatus('success');
    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
      noValidate
    >
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          E-posta adresiniz
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="E-posta adresiniz"
          required
          className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:border-accent"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
      >
        {status === 'submitting' ? 'Kaydediliyor…' : 'Abone Ol'}
      </button>

      <p aria-live="polite" className="sm:sr-only">
        {status === 'success' && (
          <span className="text-accent">Aboneliğiniz alındı, teşekkürler!</span>
        )}
        {status === 'error' && <span className="text-red-300">{error}</span>}
      </p>
    </form>
  );
}
