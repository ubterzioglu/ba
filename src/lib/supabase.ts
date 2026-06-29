import { createClient } from '@supabase/supabase-js';

// YALNIZCA anon key kullanılır — client bundle'a gömülür ve bu güvenlidir,
// çünkü erişim Supabase tarafında RLS (Row Level Security) politikalarıyla
// kısıtlanır. service_role key burada ASLA kullanılmamalıdır.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Geliştirici uyarısı: .env.local eksik. Form gönderimleri çalışmaz.
  console.warn(
    '[supabase] VITE_SUPABASE_URL veya VITE_SUPABASE_ANON_KEY tanımlı değil. ' +
      '.env.example dosyasını .env.local olarak kopyalayıp doldurun.',
  );
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '');

/** Supabase yapılandırması mevcut mu? Formlar bunu kontrol eder. */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
