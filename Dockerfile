# ============================================================
#  Çok aşamalı (multi-stage) Docker imajı — Coolify için.
#  1) Node ile Vite üretim derlemesi  2) Nginx ile statik servis
# ============================================================

# --- 1. Aşama: build ---------------------------------------------------
FROM node:22-alpine AS build
WORKDIR /app

# VITE_ değişkenleri BUILD-TIME'da gömülür. Coolify'da bunları
# "Build Variable" olarak tanımlayın (Environment Variables → Build Variable).
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_ANON_KEY=$VITE_SUPABASE_ANON_KEY

# Bağımlılıklar (lockfile ile deterministik kurulum, katman önbelleği)
COPY package.json package-lock.json ./
RUN npm ci

# Kaynak kod + derleme
COPY . .
RUN npm run build

# --- 2. Aşama: serve ---------------------------------------------------
FROM nginx:1.27-alpine AS runtime

# SPA için Nginx yapılandırması (try_files fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Derlenmiş statik dosyalar
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Basit sağlık kontrolü (Coolify health check ile uyumlu)
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
