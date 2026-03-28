import React, { useEffect, useState } from "react";

interface NewsItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  image: string;
}

const data: NewsItem[] = [
  {
    id: 1,
    title:
      "Interior Planning Before Construction How to Design Your Home Before the First Brick is Laid",
    subtitle:
      "Interior Planning Before Construction How to Design Your Home Before the First Brick is Laid",
    date: "18-03-2026",
    image: "/home-interior.jpg",
  },
  {
    id: 2,
    title: "Small Apartment Heres How to Make It Look Premium",
    subtitle: "Small Apartment Heres How to Make It Look Premium",
    date: "18-02-2026",
    image: "/home-interior2.jpg",
  },
  {
    id: 3,
    title: "Modern Kitchen Trends You Should Know",
    subtitle: "Modern Kitchen Trends You Should Know",
    date: "10-02-2026",
    image: "/home-interior.jpg",
  },
  {
    id: 4,
    title: "Living Room Styling Tips for 2026",
    subtitle: "Living Room Styling Tips for 2026",
    date: "05-02-2026",
    image: "/home-interior2.jpg",
  },
];

const NewsSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Get 2 visible items
  const visibleItems = [data[index], data[(index + 1) % data.length]];

  return (
    <section className="bg-[#2b2b2b] text-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-xl md:text-3xl tracking-[0.4em] mb-8">
          <span className="text-white">CURRENT</span>{" "}
          <span className="text-[#c6a47e]">NEWS</span>
        </h2>

        {/* Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
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
                  <div className="absolute -top-20 left-5 w-[90%] bg-[#2b2b2b] p-6 transform translate-y-6 group-hover:translate-y-0 transition duration-500 z-10">
                    <p className="text-xs tracking-widest text-gray-400 mb-2">
                      {item.subtitle}
                    </p>

                    <p className="text-xs text-gray-400 mb-3">- {item.date}</p>

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
          {data.map((_, i) => (
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
