# Burak Akçakanat — Kişisel Web Sitesi

Vite + React + TypeScript + Tailwind CSS ile geliştirilen kişisel/kurucu web sitesi.
İletişim formu ve bülten aboneliği **Supabase**'e (anon key + insert-only RLS) yazar.

## Teknolojiler

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** (lacivert/mavi/nefti yeşil palet, Inter font)
- **react-router-dom** v6 — yönlendirme
- **react-helmet-async** — SEO meta etiketleri
- **react-markdown** + **remark-gfm** — Markdown blog
- **@supabase/supabase-js** — form/bülten backend

## Kurulum

```bash
npm install
cp .env.example .env.local   # değerleri doldurun (aşağıya bakın)
npm run dev                  # http://localhost:5173
```

## Ortam Değişkenleri

`.env.local` (repoya **girmez**, `.gitignore`'da):

```
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

> ⚠️ **Güvenlik:** Yalnızca `VITE_` önekli değişkenler tarayıcıya gömülür. `anon key`
> güvenlidir (RLS korur). `service_role key`, DB şifresi ve `sbp_` access token
> **asla** `VITE_` önekiyle kullanılmamalı ve client'a gitmemelidir.

## Supabase Kurulumu

1. Supabase projesinde **SQL Editor**'ı açın.
2. [`supabase/schema.sql`](supabase/schema.sql) içeriğini çalıştırın — `messages` ve
   `subscribers` tablolarını + insert-only RLS politikalarını oluşturur.

## Komutlar

| Komut             | Açıklama                          |
| ----------------- | --------------------------------- |
| `npm run dev`     | Geliştirme sunucusu               |
| `npm run build`   | Üretim derlemesi (`dist/`)        |
| `npm run preview` | Derlemeyi yerel önizleme          |
| `npm run lint`    | ESLint                            |

## İçerik Güncelleme

- **Profil / bio:** [`src/data/profile.ts`](src/data/profile.ts)
- **Projeler:** [`src/data/projects.ts`](src/data/projects.ts)
- **Yayınlar:** [`src/data/publications.ts`](src/data/publications.ts)
- **Blog yazıları:** [`src/content/blog/`](src/content/blog/) altına `.md` dosyası ekleyin
  (frontmatter: `title`, `date`, `excerpt`, opsiyonel `image`).
- **CV PDF:** `public/` altına koyup `profile.cvUrl` alanını doldurun.

## Klasör Yapısı

```
src/
├─ components/   # Layout, Header, Footer, Seo, formlar, kartlar
├─ pages/        # 7 sayfa + Privacy + 404
├─ data/         # profile, projects, publications, nav (içerik)
├─ content/blog/ # markdown yazılar
├─ lib/          # supabase client, blog loader
└─ types/        # içerik tip tanımları
```

## Dağıtım

Statik SPA olduğu için Vercel / Netlify / Cloudflare Pages'e doğrudan dağıtılabilir.
Build komutu `npm run build`, çıktı dizini `dist/`. Ortam değişkenlerini
(`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) hosting panelinde tanımlayın.
SPA yönlendirmesi için tüm yolları `index.html`'e yönlendiren bir rewrite ekleyin
(Vercel için `vercel.json`, Netlify için `public/_redirects` hazırdır).

### Coolify ile Dağıtım

Bu repo Coolify için **Dockerfile** ile hazırdır (multi-stage build → Nginx).

1. Coolify'da **New Resource → Application → Public/Private Git Repository** seçin
   ve bu repoyu (`github.com/ubterzioglu/ba`) bağlayın.
2. **Build Pack** olarak **Dockerfile** seçin (repo kökündeki `Dockerfile` kullanılır).
3. **Environment Variables** bölümünde aşağıdakileri **Build Variable** olarak ekleyin
   (Vite bunları derleme sırasında gömer — runtime değil):
   - `VITE_SUPABASE_URL` = `https://yqqcfoyiqqlawwfzvyal.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = (Supabase anon key)
4. **Port**: `80` (Nginx). Coolify reverse proxy + otomatik HTTPS (Let's Encrypt) sağlar.
5. Domain'inizi (örn. `burakakcakanat.com.tr`) Coolify'da tanımlayın ve deploy edin.

> ⚠️ `service_role key`, DB şifresi ve `sbp_` token'ı Coolify'a **eklemeyin** — bunlar
> client/build'e gerekmez. `.dockerignore` zaten `.env.local`'ı imaj dışında tutar.

**Yerel Docker testi:**

```bash
docker build \
  --build-arg VITE_SUPABASE_URL="https://yqqcfoyiqqlawwfzvyal.supabase.co" \
  --build-arg VITE_SUPABASE_ANON_KEY="<anon-key>" \
  -t ba-site .
docker run --rm -p 8080:80 ba-site   # http://localhost:8080
```

İlgili dosyalar: [`Dockerfile`](Dockerfile), [`nginx.conf`](nginx.conf),
[`.dockerignore`](.dockerignore), [`docker-compose.yaml`](docker-compose.yaml).
