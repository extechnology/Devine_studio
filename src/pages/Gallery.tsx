import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

const projects = [
  {
    id: 1,
    title: "Living Room",
    category: "Residential",
    image: "/home-interior.jpg",
  },
  {
    id: 2,
    title: "Office",
    category: "Commercial",
    image: "/home-interior.jpg",
  },
  {
    id: 3,
    title: "Production Area",
    category: "Industrial",
    image: "/home-interior2.jpg",
  },
  {
    id: 4,
    title: "Retail",
    category: "Commercial",
    image: "/home-interior.jpg",
  },
  {
    id: 5,
    title: "Kitchen",
    category: "Residential",
    image: "/home-interior2.jpg",
  },
  {
    id: 6,
    title: "Bed Room",
    category: "Residential",
    image: "/home-interior2.jpg",
  },
  {
    id: 7,
    title: "Dining Room",
    category: "Residential",
    image: "/home-interior2.jpg",
  },
  {
    id: 8,
    title: "Urban Loft",
    category: "Customised Furniture",
    image: "/home-interior.jpg",
  },
  {
    id: 9,
    title: "Dining Room",
    category: "Residential",
    image: "/home-interior2.jpg",
  },
  {
    id: 10,
    title: "Bath Room",
    category: "Residential",
    image: "/home-interior2.jpg",
  },
  {
    id: 11,
    title: "Home Theatre",
    category: "Residential",
    image: "/home-interior2.jpg",
  },
  {
    id: 12,
    title: "Hospitality",
    category: "Commercial",
    image: "/home-interior2.jpg",
  },
  {
    id: 13,
    title: "Health Care",
    category: "Commercial",
    image: "/home-interior2.jpg",
  },
  {
    id: 14,
    title: "Corporate Interior",
    category: "Commercial",
    image: "/home-interior2.jpg",
  },
  {
    id: 15,
    title: "Educational",
    category: "Commercial",
    image: "/home-interior2.jpg",
  },
  {
    id: 16,
    title: "Dining Room",
    category: "Residential",
    image: "/home-interior2.jpg",
  },
  {
    id: 17,
    title: "Storate and Warehouse",
    category: "Industrial",
    image: "/home-interior2.jpg",
  },
  {
    id: 18,
    title: "Office and Administrative",
    category: "Industrial",
    image: "/home-interior2.jpg",
  },
  {
    id: 20,
    title: "Worker Facilities",
    category: "Industrial",
    image: "/home-interior2.jpg",
  },
  {
    id: 21,
    title: "Safety and Utility",
    category: "Industrial",
    image: "/home-interior2.jpg",
  },
  {
    id: 22,
    title: "Loading and Dispatch Area",
    category: "Industrial",
    image: "/home-interior2.jpg",
  },
  {
    id: 23,
    title: "Tables and Chair",
    category: "Customised Furniture",
    image: "/home-interior2.jpg",
  },
  {
    id: 24,
    title: "Sofa and Sets",
    category: "Customised Furniture",
    image: "/home-interior2.jpg",
  },
  {
    id: 25,
    title: "Kitchen Furniture and Accessories",
    category: "Customised Furniture",
    image: "/home-interior2.jpg",
  },
  {
    id: 26,
    title: "Beds",
    category: "Customised Furniture",
    image: "/home-interior2.jpg",
  },
  {
    id: 27,
    title: "Safety and Utility",
    category: "Customised Furniture",
    image: "/home-interior2.jpg",
  },
  {
    id: 28,
    title: "Loading and Dispatch Area",
    category: "Customised Furniture",
    image: "/home-interior2.jpg",
  },
  {
    id: 29,
    title: "Cutting and Shaping",
    category: "Wood and Plywood Crafting",
    image: "/home-interior2.jpg",
  },
  {
    id: 30,
    title: "Carving and Detailing",
    category: "Wood and Plywood Crafting",
    image: "/home-interior2.jpg",
  },
  {
    id: 31,
    title: "Lamination and Finishing",
    category: "Wood and Plywood Crafting",
    image: "/home-interior2.jpg",
  },
  {
    id: 32,
    title: "Assembly and Installation",
    category: "Wood and Plywood Crafting",
    image: "/home-interior2.jpg",
  },
];

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Customised Furniture",
  "Wood and Plywood Crafting",
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setFilteredProjects(
        filter === "All" ? projects : projects.filter((p) => p.category === filter)
      );
      setIsAnimating(false);
    }, 300); // Duration matches CSS opacity transition
    
    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <div className="bg-charcoal min-h-screen text-white font-body selection:bg-accent selection:text-white">
      <PageHeader
        title="Gallery"
        subtitle="A glimpse into signature homes and spaces curated by Devine Studio."
        image={projects[0].image}
      />

      <section className="py-24 relative overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <ScrollReveal className="mx-auto max-w-7xl px-6 relative z-10">
          {/* Header & Filter Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-8 md:space-y-0">
            <div className="max-w-xl">
              <p className="section-title mb-4">OUR SERVICES AND PRODUCTS</p>
              <h2 className="text-xl md:text-2xl font-heading tracking-widest mb-6">
                Designed for life Built with perfection Delivered right when you
                need it
              </h2>
              <p className="text-white/70 text-xs leading-relaxed max-w-lg">
                We offers comprehensive services, including interior designing
                and execution, manufacturing and distribution of wooden
                furniture for domestic and commercial needs, and expert
                consultation for interior projects. We also provide specialized
                plywood finishing works for external clients, ensuring
                precision, quality craftsmanship, and reliable solutions
                tailored to meet diverse requirements.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => filter !== cat && setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs tracking-[0.2em] font-heading uppercase transition-all duration-300 ${
                    filter === cat
                      ? "bg-sand text-charcoal shadow-[0_0_20px_rgba(200,184,160,0.3)]"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Grid */}
          <div
            className={`grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300 ease-in-out ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative h-[450px] w-full overflow-hidden rounded-xl bg-white/5 cursor-pointer ring-1 ring-white/10 transition-transform duration-700 hover:-translate-y-2`}
                style={{
                  transitionDelay: `${!isAnimating ? index * 50 : 0}ms`,
                }}
              >
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                />

                {/* Protective Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-8 transition-transform duration-500 ease-out group-hover:translate-y-0">
                    <span className="inline-block py-1.5 px-4 mb-4 rounded-full bg-white/10 backdrop-blur-md text-xs font-heading tracking-widest uppercase border border-white/20 text-white/90">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-body leading-tight mb-2">
                      {project.title}
                    </h3>

                    {/* Hover Link Box */}
                    <div className="opacity-0 -translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 flex items-center mt-4 text-xs font-heading text-sand tracking-widest uppercase">
                      <span className="mr-3">View Project</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transform transition-transform duration-300 group-hover:translate-x-2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Gallery;
