import { useState } from "react";

interface AboutSectionProps {
  title: string;
  content: string;
  image: string;
  reverse?: boolean;
}

const AboutSection = ({
  title,
  content,
  image,
  reverse = false,
}: AboutSectionProps) => {
  const [expanded, setExpanded] = useState(false);

  const previewText = content.slice(0, 180) + "...";

  return (
    <div className="relative w-full my-12 md:my-20">
      {/* IMAGE CAROUSEL / CONTAINER */}
      <div className={`relative w-full md:w-[65%] group overflow-hidden ${reverse ? "md:ml-auto" : ""}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-[350px] md:h-[450px] object-cover transition duration-1000 group-hover:scale-105"
        />
      </div>

      {/* OVERLAY TEXT PANEL */}
      <div 
        className={`relative md:absolute md:top-1/2 md:-translate-y-1/2 md:w-[45%] mt-[-4rem] sm:mt-[-5rem] md:mt-0 z-10 px-4 md:px-0 ${
          reverse ? "md:left-4 lg:left-0" : "md:right-4 lg:right-0"
        }`}
      >
        <div className="bg-black/80 backdrop-blur-md p-8 md:p-12 shadow-2xl border border-white/5">
          <p className="text-[10px] tracking-[0.3em] text-[#c6a47e] mb-4 uppercase font-semibold">
            About Divine
          </p>
          <h3 className="text-xl md:text-2xl font-heading tracking-[0.2em] text-white mb-6 uppercase">
            {title}
          </h3>

          <p className="text-gray-300 text-xs text-justify leading-[1.8] mb-8">
            {expanded ? content : previewText}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c6a47e] hover:text-white transition-colors flex items-center gap-2"
          >
            {expanded ? "Show Less" : "Read More"}
            <span className="text-base leading-none">{expanded ? "↑" : "→"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
