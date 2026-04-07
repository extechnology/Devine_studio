import ScrollReveal from "../ScrollReveal";
import useHeroCarousel from "../../hooks/useHeroCarousel";
import HeroSkeleton from "../../skeletons/HeroSkeleton";

const Hero = () => {
  const {data:heroCarousel, isLoading} = useHeroCarousel();

  if (isLoading) {
    return <HeroSkeleton />;
  }

  return (
    <div>
      {heroCarousel?.map((hero) => (
        <div>
          <img
            src={heroCarousel?.[0]?.image}
            alt="Divinestudio"
            className="h-screen w-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-6">
              <ScrollReveal>
                <h1 className="mt-4 text-2xl font-heading md:text-5xl tracking-wide">
                 {hero?.title}
                </h1>
                <p className="mt-6 text-sm text-white/70 max-w-xl font-body leading-relaxed">
                  {hero?.description}
                </p>
                <button className="mt-10 border border-white/40 px-8 py-4 text-xs uppercase tracking-[0.4em] text-white hover:bg-white hover:text-charcoal transition-all duration-300">
                  Explore Portfolio
                </button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero