/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Markdown dosyalarını raw string olarak import edebilmek için
declare module '*.md?raw' {
  const content: string;
  export default content;
}
