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
    <div
      className={`grid gap-10 items-center md:grid-cols-2 ${
        reverse ? "md:grid-flow-dense" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`h-72 overflow-hidden rounded-sm ${
          reverse ? "md:col-start-2" : ""
        }`}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="text-white/80">
        <h3 className="text-xl font-heading tracking-wide text-white">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed">
          {expanded ? content : previewText}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-xs uppercase tracking-widest text-white/60 hover:text-white transition"
        >
          {expanded ? "Show Less ↑" : "Read More →"}
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
