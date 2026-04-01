import React, { useEffect, useState } from "react";

interface Slide {
  id: number;
  title: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "TAMIL NADU",
    image: "/home-interior.jpg",
  },
  {
    id: 2,
    title: "KERALA",
    image: "/home-interior2.jpg",
  },
  {
    id: 3,
    title: "KARNATAKA",
    image: "/home-interior.jpg",
  },
];

const HighlightSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-20 md:py-28 text-white"
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
          <img
            key={slides[index].id}
            src={slides[index].image}
            alt={slides[index].title}
            className="w-full h-[300px] md:h-[420px] object-cover transition duration-700 group-hover:scale-105"
          />

          {/* BIG TITLE ON IMAGE */}
          <h2 className="absolute top-10 left-10 text-3xl md:text-5xl font-bold tracking-widest">
            {slides[index].title}
          </h2>
        </div>

        {/* RIGHT OVERLAY PANEL */}
        <div className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-[45%] mt-8 md:mt-0">
          <div className="bg-black/70 backdrop-blur-md p-6 md:p-10 shadow-xl">
            <p className="text-xs tracking-[0.3em] text-[#c6a47e] mb-2">
              DIVINE HIGHLIGHTS
            </p>

            <h3 className="text-lg md:text-lg tracking-[0.2em] mb-2">
              Transforming spaces with style Delivering quality that lasts
            </h3>

            <p className="text-gray-300 text-xs text-justify leading-relaxed">
              Our journey began over 15 years ago in Calicut, driven by a
              passion for craftsmanship and interior excellence. What started as
              a small venture in furniture manufacturing and interior design has
              grown into a trusted industry name. Built on dedication, skill,
              and innovation, we consistently deliver quality-driven results.
              Our mission has always been to transform spaces into meaningful
              experiences through thoughtful design and precision. This
              commitment has helped us build lasting client relationships. Nine
              years ago, we launched Devinestudio, marking a milestone in our
              vision to become a leader in interior and furniture solutions
              across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
