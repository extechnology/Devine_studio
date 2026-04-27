import useImageAndText from "../../hooks/useImageAndText";
import AboutHomeSkeleton from "../../skeletons/AboutHomeSkeleton";

const AboutHome = () => {
  const {data:homeImageAndText, isLoading} = useImageAndText();
  
  if (isLoading) {
    return <AboutHomeSkeleton />;
  }

  return (
    <div className="bg-charcoalDark">
      {homeImageAndText?.map((home) => (
        <section
          key={home.id}
          className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4  md:py-24 py-12 px-6 md:px-0"
        >
          <div className="content-center">
            <p className="section-title text-2xl mb-6">{home?.title}</p>
            <p className="mt-6 text-base text-justify text-white/70 font-body leading-relaxed">
              {home?.description}
            </p>
          </div>
          <div className="h-64 overflow-hidden rounded-xl shadow-soft md:h-80 relative group">
            <img
              src={home?.image}
              alt="Journey"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </section>
      ))}
    </div>
  );
}

export default AboutHome