interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

// Sayfa üst başlığı — tutarlı bir görsel dil için tüm iç sayfalarda kullanılır.
export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-primary via-secondary to-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-white/80 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
