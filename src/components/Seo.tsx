import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://burakakcakanat.com.tr';
const SITE_NAME = 'Burak Akçakanat';

interface SeoProps {
  title: string;
  description: string;
  /** Geçerli sayfanın yolu (örn. "/about"); canonical için kullanılır */
  path?: string;
  image?: string;
}

export default function Seo({ title, description, path = '/', image }: SeoProps) {
  const fullTitle = path === '/' ? title : `${title} · ${SITE_NAME}`;
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <html lang="tr" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {image && <meta property="og:image" content={`${SITE_URL}${image}`} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
