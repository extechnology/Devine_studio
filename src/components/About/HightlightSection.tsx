import React, { useEffect, useState } from "react";
import useAboutUs from "../../hooks/useAboutUs";

const HighlightSection: React.FC = () => {
  const { data: aboutUs } = useAboutUs();

  const [sectionIndex, setSectionIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const currentSection = aboutUs?.[sectionIndex];
  const images = currentSection?.images || [];

  // 🔥 Image auto slide (faster)
  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images]);

  // 🔥 Section change (slower)
  useEffect(() => {
    if (!aboutUs?.length) return;

    const interval = setInterval(() => {
      setSectionIndex((prev) => (prev + 1) % aboutUs.length);
      setImageIndex(0); // reset image when section changes
    }, 7000);

    return () => clearInterval(interval);
  }, [aboutUs]);

  return (
    <section
      className="relative py-20 md:py-20 text-white"
      style={{
        backgroundColor: "#2b2b2b",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "12px 12px",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* LEFT IMAGE CAROUSEL */}
        <div className="relative w-full md:w-[65%] group overflow-hidden">
          {images.length > 0 && (
            <img
              key={images[imageIndex]?.image} // 🔥 forces smooth transition
              src={images[imageIndex]?.image}
              alt="about-image"
              className="w-full h-[300px] md:h-[420px] object-cover transition duration-700 ease-in-out group-hover:scale-105"
            />
          )}
        </div>

        {/* RIGHT TEXT */}
        {currentSection && (
          <div className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-[45%] mt-8 md:mt-0 transition-all duration-500">
            <div className="bg-black/70 backdrop-blur-md p-6 md:p-10 shadow-xl border border-white/10">
              <p className="text-xs tracking-[0.3em] text-[#c6a47e] mb-2 uppercase">
                {currentSection.sub_title}
              </p>

              <h3 className="text-lg md:text-xl tracking-[0.2em] mb-4 font-heading uppercase">
                {currentSection.title}
              </h3>

              <p className="text-gray-300 text-xs text-justify leading-relaxed font-light">
                {currentSection.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HighlightSection;
