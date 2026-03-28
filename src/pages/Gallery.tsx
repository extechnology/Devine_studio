import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

const projects = [
  {
    id: 1,
    title: "The Vertex Residency",
    category: "Residential",
    image: "https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1666774469-thumb-9dfefdfb-a1de-49cd-8bc9-10ae482212be.jpg"
  },
  {
    id: 2,
    title: "Nova Commercial Space",
    category: "Commercial",
    image: "https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1666776214-thumb-1ef84c1f-bd8b-449d-8592-b1738cb529df.jpg"
  },
  {
    id: 3,
    title: "Lumina Penthouse",
    category: "Interior",
    image: "https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1666776951-thumb-d4133618-50b5-4bdc-b716-855d118a944d.jpg"
  },
  {
    id: 4,
    title: "Aura Boutique Hotel",
    category: "Commercial",
    image: "https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1666853412-thumb-FGJFkhvjgc.jpg"
  },
  {
    id: 5,
    title: "Zenith Villa",
    category: "Residential",
    image: "https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1666945935-thumb-e53aa85b-f33a-41de-83c6-82b886f4beef.jpg"
  },
  {
    id: 6,
    title: "Urban Loft",
    category: "Interior",
    image: "https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1666947791-thumb-375fdcca-201c-4ae9-9225-2d5b53d98737.jpg"
  }
];

const categories = ["All", "Residential", "Commercial", "Interior"];

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
              <p className="section-title mb-4">OUR PORTFOLIO</p>
              <h2 className="text-4xl md:text-5xl font-heading tracking-widest mb-6">
                Featured Projects
              </h2>
              <p className="text-white/70 leading-relaxed max-w-lg">
                Explore our curated collection of architectural marvels, interior designs, and commercial spaces that redefine modern aesthetics.
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
                  transitionDelay: `${!isAnimating ? index * 50 : 0}ms`
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
                    <h3 className="text-2xl font-body leading-tight mb-2">{project.title}</h3>
                    
                    {/* Hover Link Box */}
                    <div className="opacity-0 -translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 flex items-center mt-4 text-xs font-heading text-sand tracking-widest uppercase">
                      <span className="mr-3">View Project</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform duration-300 group-hover:translate-x-2">
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
