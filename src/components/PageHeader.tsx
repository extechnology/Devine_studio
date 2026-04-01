type PageHeaderProps = {
  title: string;
  subtitle: string;
  image: string;
};

const PageHeader = ({ title, subtitle, image }: PageHeaderProps) => {
  return (
    <section className="relative h-[55vh] min-h-[420px] w-full">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16">
          <p className="section-title">Divinestudio</p>
          <h1 className="mt-4 text-3xl font-heading tracking-[0.4em] md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/70 md:text-base">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
