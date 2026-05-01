import { useState } from "react";
import useDirectorProfiles from "../../hooks/useDirectorProfiles";
import type { DirectorProfile as DirectorProfileType } from "../../services/about/types.about";

interface Director {
  name: string;
  role: string;
  roleDetail: string;
  bio: string;
  image: string;
  type: "managing" | "executive";
}

const ManagingDirectorCard = () => {
  const [expanded, setExpanded] = useState(false);
  const { data: directorProfiles } = useDirectorProfiles();
  const preview =
    directorProfiles
      ?.find((item) => item.is_primary === true)
      ?.description?.slice(0, 200) + "...";
  const managingDirector = directorProfiles?.find(
    (item) => item.is_primary === true,
  );
  return (
    <div className="relative group w-full overflow-hidden mb-20">
      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c6a47e] to-transparent z-20" />

      <div className="flex flex-col lg:flex-row gap-0 min-h-[520px]">
        {/* Image Side */}
        <div className="relative w-full lg:w-[55%] overflow-hidden">
          <img
            src={managingDirector?.image}
            alt={managingDirector?.name}
            className="w-full h-[360px] lg:h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/90 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />

          {/* Role Badge on image */}
          <div className="absolute bottom-6 left-6 lg:hidden">
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#c6a47e] font-semibold bg-black/60 backdrop-blur-sm px-4 py-2 border border-[#c6a47e]/30">
              {managingDirector?.role}
            </span>
          </div>
        </div>

        {/* Content Side */}
        <div className="relative w-full lg:w-[45%] bg-[#0d0d0d] border border-white/5 p-10 lg:p-14 flex flex-col justify-center">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-[1px] bg-[#c6a47e]/40" />
            <div className="absolute top-0 right-0 h-full w-[1px] bg-[#c6a47e]/40" />
          </div>

          <p className="text-[9px] tracking-[0.5em] text-[#c6a47e] uppercase font-semibold mb-3">
            Our Management
          </p>

          <h2 className="text-2xl lg:text-3xl font-heading tracking-[0.2em] text-white mb-1 leading-tight">
            {managingDirector?.name}
          </h2>

          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[1px] bg-[#c6a47e]" />
            <span className="text-[10px] tracking-[0.3em] text-[#c6a47e]/80 uppercase">
              {managingDirector?.role}
            </span>
          </div>

          {/* Quote mark */}
          <div className="text-[#c6a47e]/15 text-8xl font-serif leading-none mb-2 select-none -mt-4">
            "
          </div>

          <p className="text-gray-400 text-sm leading-[2] text-justify -mt-6">
            {expanded ? managingDirector?.description : preview}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-8 self-start flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#c6a47e] font-semibold hover:text-white transition-colors duration-300 group/btn"
          >
            <span>{expanded ? "Show Less" : "Read More"}</span>
            <span className="w-6 h-[1px] bg-[#c6a47e] transition-all duration-300 group-hover/btn:w-10" />
          </button>

          {/* Bottom stat row */}
          {/* <div className="mt-10 pt-8 border-t border-white/5 flex gap-8">
            <div>
              <p className="text-2xl font-heading tracking-widest text-white">
                20+
              </p>
              <p className="text-[9px] tracking-[0.3em] text-gray-500 uppercase mt-1">
                Years Experience
              </p>
            </div>
            <div className="w-[1px] bg-white/10" />
            <div>
              <p className="text-2xl font-heading tracking-widest text-white">
                500+
              </p>
              <p className="text-[9px] tracking-[0.3em] text-gray-500 uppercase mt-1">
                Projects Delivered
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Gold accent line bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c6a47e] to-transparent" />
    </div>
  );
};



const ExecutiveCard = ({ executive }: { executive: DirectorProfileType }) => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="relative flex flex-col group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] w-full">
        <img
          src={executive.image}
          alt={executive.name}
          className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

        {/* Gold shimmer line on hover */}
        <div
          className="absolute top-0 left-0 w-full h-[2px] bg-[#c6a47e] transition-transform duration-700 origin-left"
          style={{ transform: hovered || expanded ? "scaleX(1)" : "scaleX(0)" }}
        />

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div
            className="transition-transform duration-500"
            style={{
              transform: hovered || expanded ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <p
              className="text-[8px] tracking-[0.4em] uppercase mb-2 transition-all duration-300"
              style={{
                color: hovered || expanded ? "#c6a47e" : "rgba(198,164,126,0.7)",
              }}
            >
              {executive.role}
            </p>
            <h3 className="text-base font-heading tracking-[0.2em] text-white leading-tight">
              {executive.name}
            </h3>

            {/* Bio – revealed on hover, hidden when expanded */}
            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                maxHeight: hovered && !expanded ? "120px" : "0px",
                opacity: hovered && !expanded ? 1 : 0,
              }}
            >
              <p className="text-[11px] text-gray-400 leading-relaxed mt-4 line-clamp-4">
                {executive.description}
              </p>
            </div>
          </div>
        </div>

        {/* Hover border */}
        <div
          className="absolute inset-0 border transition-all duration-500 pointer-events-none"
          style={{
            borderColor: hovered || expanded ? "rgba(198,164,126,0.4)" : "transparent",
          }}
        />
      </div>

      {/* Expanded Description below image */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: expanded ? "1000px" : "0px",
          opacity: expanded ? 1 : 0,
        }}
      >
        <div className="pt-4 pb-2 px-1">
          <p className="text-[11px] text-gray-400 leading-relaxed">
            {executive.description}
          </p>
          <div className="mt-3 flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase text-[#c6a47e] font-semibold">
            <span>Show Less</span>
            <span className="w-6 h-[1px] bg-[#c6a47e]" />
          </div>
        </div>
      </div>
    </div>
  );
};

const DirectorProfile = () => {
  const { data: directorProfiles } = useDirectorProfiles();
  const executives = directorProfiles?.filter((item) => !item.is_primary) ?? [];

  return (
    <section className="max-w-7xl mx-auto px-4  py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-[9px] tracking-[0.6em] text-[#c6a47e] uppercase font-semibold mb-4">
          The People Behind the Vision
        </p>
        <h2 className="text-3xl md:text-4xl font-heading tracking-[0.3em] text-white mb-6">
          Our Management
        </h2>
        <div className="flex items-center justify-center gap-4">
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c6a47e]" />
          <span className="w-2 h-2 bg-[#c6a47e] rotate-45 block" />
          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c6a47e]" />
        </div>
      </div>

      {/* Managing Director – Hero Card */}
      <ManagingDirectorCard />

      {/* Executive Directors Label */}
      <div className="flex items-center gap-6 mb-10">
        <span className="flex-1 h-[1px] bg-gradient-to-r from-[#c6a47e]/40 to-transparent" />
        <p className="text-[9px] tracking-[0.5em] text-[#c6a47e] uppercase font-semibold whitespace-nowrap">
          Executive Leadership
        </p>
        <span className="flex-1 h-[1px] bg-gradient-to-l from-[#c6a47e]/40 to-transparent" />
      </div>

      {/* Executive Directors Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-start">
        {executives.map((exec) => (
          <ExecutiveCard key={exec.id} executive={exec} />
        ))}
      </div>

      {/* Bottom decorative quote */}
      <div className="mt-20 relative border border-white/5 bg-[#0d0d0d] p-10 md:p-14 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-[#c6a47e]/50" />
        <p className="text-[#c6a47e]/20 text-7xl font-serif absolute top-4 left-8 select-none">
          "
        </p>
        <p className="text-gray-300 text-sm md:text-base leading-[2.2] tracking-wide max-w-3xl mx-auto relative z-10">
          Divinestudio is powered by a highly skilled team dedicated to
          excellence in interior design and furniture craftsmanship. Their
          expertise, creativity, and coordinated performance ensure every
          project is executed with precision and quality. With a strong focus on
          innovation and timely delivery, the team consistently transforms ideas
          into functional, aesthetically appealing spaces that exceed client
          expectations.
        </p>
        <p className="text-[9px] tracking-[0.4em] text-[#c6a47e] uppercase mt-6">
          — Divinestudio
        </p>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-[#c6a47e]/50" />
      </div>
    </section>
  );
};

export default DirectorProfile;
