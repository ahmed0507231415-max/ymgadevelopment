interface PageHeroProps {
  label: string;
  title: string;
  intro: string;
}

export function PageHero({ label, title, intro }: PageHeroProps) {
  return (
    <section className="bg-navy-50 border-b border-navy-100">
      <div className="container-ymga py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="section-label animate-fade-in">{label}</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-medium text-navy-900 leading-tight animate-fade-in-up">
            {title}
          </h1>
          <p className="mt-6 text-lg text-navy-600 leading-relaxed animate-fade-in-delayed">
            {intro}
          </p>
        </div>
      </div>
    </section>
  );
}
