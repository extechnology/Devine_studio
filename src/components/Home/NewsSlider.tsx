import React, { useEffect, useState } from "react";
import useProjectInsights from "../../hooks/useProjectInsights";
import NewsSliderSkeleton from "../../skeletons/NewsSliderSkeleton";

interface NewsItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  image: string;
}

const NewsSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const { data: projectInsights, isLoading } = useProjectInsights();

  
  // Auto slide
  useEffect(() => {
    if (!projectInsights || projectInsights.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projectInsights.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [projectInsights]);

  // Get 2 visible items
  const visibleItems = projectInsights && projectInsights.length > 0 
    ? [projectInsights[index], projectInsights[(index + 1) % projectInsights.length]]
    : [];

    if (isLoading) {
      return <NewsSliderSkeleton />;
    }


  return (
    <section className="bg-[#2b2b2b] text-white pt-16 md:pt-20 pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-xl md:text-3xl tracking-[0.4em] mb-8">
          <span className="text-white">PROJECT</span>{" "}
          <span className="text-[#c6a47e]">INSIGHTS</span>
        </h2>

        {/* Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[450px]">
          {visibleItems.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="group cursor-pointer">
              {/* Image container */}
              <div className="group">
                {/* Image wrapper (ONLY this should clip zoom) */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[300px] md:h-[380px] object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay (OUTSIDE overflow-hidden) */}
                <div className="relative">
                  <div className="absolute -top-20 left-5 w-[90%] bg-[#2b2b2b] p-6 shadow transform translate-y-6 group-hover:translate-y-0 transition duration-500 z-10">
                    <p className="text-xs tracking-widest text-gray-400 mb-2">
                      {item.description}
                    </p>


                    <h3 className="text-xs text-[#c6a47e] leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-2">
          {projectInsights?.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === index ? "bg-[#c6a47e]" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSlider;
