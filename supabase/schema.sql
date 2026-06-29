-- ============================================================
--  Supabase şema kurulumu — Supabase Dashboard → SQL Editor'da çalıştırın.
--  İletişim formu (messages) ve bülten (subscribers) tabloları.
--  RLS: anon rolüne YALNIZCA INSERT izni; okuma/güncelleme/silme YOK.
--  Böylece public anon key ile veri eklenebilir ama OKUNAMAZ.
-- ============================================================

-- 1) İletişim mesajları -------------------------------------------------
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 200),
  email text not null check (char_length(email) between 3 and 320),
  message text not null check (char_length(message) between 1 and 5000),
  created_at timestamptz not null default now()
);

alter table public.messages enable row level security;

drop policy if exists "anon can insert messages" on public.messages;
create policy "anon can insert messages"
  on public.messages
  for insert
  to anon
  with check (true);

-- 2) Bülten aboneleri ---------------------------------------------------
create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique check (char_length(email) between 3 and 320),
  created_at timestamptz not null default now()
);

alter table public.subscribers enable row level security;

drop policy if exists "anon can insert subscribers" on public.subscribers;
create policy "anon can insert subscribers"
  on public.subscribers
  for insert
  to anon
  with check (true);

-- NOT: SELECT/UPDATE/DELETE için anon politikası TANIMLANMADI.
-- Kayıtları yalnızca Supabase Dashboard veya service_role ile okuyabilirsiniz.
