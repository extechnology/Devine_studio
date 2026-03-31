import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";

const projectSegments = [
  {
    title: "Home & Apartments",
    description: "Creates Stylish, Functional Home And Apartment Interiors, Blending Comfort, Aesthetics, And Smart Space Planning For Modern Living Experiences.",
    image: "/home-interior.jpg",
    link: "/gallery",
  },
  {
    title: "Office & Commercial",
    description: "Efficient Office And Commercial Interiors, Combining Functionality, Branding, And Modern Aesthetics To Create Productive, Professional, And Visually Appealing Workspaces.",
    image: "/home-interior2.jpg",
    link: "/gallery",
  },
  {
    title: "Industrial & Product Houses",
    description: "Delivers industrial and product house interiors focused on efficiency, durability, and smart layouts, ensuring seamless operations and optimized workspace functionality.",
    image: "/home-interior.jpg",
    link: "/gallery",
  }
];

const projectGalleryData = Array.from({ length: 25 }).map((_, i) => ({
  id: i + 1,
  image: i % 2 === 0 ? "/home-interior.jpg" : "/home-interior2.jpg",
  location: [
    "Feroke, Calicut",
    "Perumanna, Calicut",
    "Panthiramkave, Calicut",
    "Mukkam, Calicut",
    "Vipin, Ernakulam",
  ][i % 5],
}));

const ProjectAndGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(projectGalleryData.length / itemsPerPage);

  const currentItems = projectGalleryData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Scroll to top of gallery section when page changes
  useEffect(() => {
    // optional: add smooth scroll logic if needed
  }, [currentPage]);

  return (
    <div className="bg-charcoal min-h-screen text-white font-body selection:bg-accent selection:text-white pb-20">
      
      {/* Strip Image - Re-using the elegant PageHeader component for consistency */}
      <PageHeader
        title="Projects & Gallery"
        subtitle="A showcase of our milestone projects across multiple segments."
        image="/home-interior2.jpg"
      />

      <section className="pt-24 relative overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <ScrollReveal threshold={0} className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-3xl font-heading tracking-[0.3em] uppercase">
              Our Milestone <span className="text-sand font-semibold">Projects</span>
            </h2>
            <div className="w-24 h-px bg-sand mx-auto mt-6" />
          </div>

          {/* Grid Layout perfectly matching the requested structure */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {projectSegments.map((segment, index) => (
              <div 
                key={index} 
                className="group flex flex-col h-full bg-white/5 border border-white/20 rounded-md hover:border-sand transition-all duration-300 shadow-soft overflow-hidden"
              >
                
                {/* Image Section */}
                <div className="w-full h-72 sm:h-80 overflow-hidden relative bg-black/40 border-b border-white/20 pb-4">
                  <img
                    src={segment.image}
                    alt={segment.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-transform duration-[1500ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent mix-blend-multiply opacity-70" />
                </div>
                
                {/* Text Section */}
                <div className="flex flex-col flex-grow p-8 items-center text-center bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                  <h3 className="text-[15px] font-heading font-semibold mb-6 tracking-widest uppercase text-white/90 group-hover:text-sand transition-colors border-b border-white/10 pb-4 w-full">
                    {segment.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-10 flex-grow font-light">
                    {segment.description}
                  </p>
                  
                  {/* Action Button Segment */}
                  <Link to={segment.link} className="w-full mt-auto block">
                    <button className="w-full py-4 border border-white/20 hover:border-sand hover:bg-sand hover:text-charcoal bg-black/20 text-white group-hover:text-sand font-heading uppercase tracking-widest text-xs font-bold transition-all duration-300 shadow-sm">
                      View Now!
                    </button>
                  </Link>
                </div>
                
              </div>
            ))}
          </div>

        </ScrollReveal>

        {/* New Home & Apartments Paginated Gallery Section */}
        <ScrollReveal threshold={0.05} delay={100} className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 mt-32">
          
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-heading tracking-widest uppercase bg-sand text-charcoal inline-block px-4 py-2 font-bold shadow-soft">
              Home & Apartments
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border-t border-l border-white/20">
            {currentItems.map((item) => (
              <div 
                key={item.id} 
                className="group flex flex-col bg-white/5 border-b border-r border-white/20 hover:bg-white/10 transition-colors duration-300 cursor-pointer overflow-hidden relative"
              >
                <div className="h-48 w-full bg-black/40 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.location} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-transform duration-[1500ms] group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent mix-blend-multiply opacity-50" />
                </div>
                <div className="p-3 text-center border-t border-white/20 bg-charcoal/40 backdrop-blur-sm z-10">
                  <p className="text-[9px] sm:text-[10px] text-white/50 group-hover:text-sand transition-colors font-heading tracking-widest uppercase font-medium">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-8 flex flex-col items-end gap-3 text-right">
            <div className="flex items-center gap-8">
              {/* Previous Button (Hidden on Page 1) */}
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className={`flex items-center gap-3 text-white/70 hover:text-sand transition-all duration-300 font-heading tracking-widest text-sm uppercase font-semibold group ${
                  currentPage === 1 ? "opacity-0 pointer-events-none w-0 -mx-4" : "opacity-100 w-auto"
                }`}
              >
                <svg className="w-16 h-4 transition-transform group-hover:-translate-x-2 scale-x-[-1]" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10H95M95 10L85 0M95 10L85 20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
                <span>Prev</span>
              </button>

              {/* Next Button */}
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-3 text-white/70 hover:text-sand disabled:opacity-30 disabled:hover:text-white/70 transition-all font-heading tracking-widest text-sm uppercase font-semibold group"
              >
                <span>Next</span>
                <svg className="w-16 h-4 transition-transform group-hover:translate-x-2" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10H95M95 10L85 0M95 10L85 20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="flex font-heading tracking-widest font-bold text-sm">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button 
                  key={i} 
                  className={`transition-colors ${currentPage === i + 1 ? "text-sand" : "text-white/40 hover:text-white"}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}{i < totalPages - 1 ? "-" : ""}
                </button>
              ))}
              <span className="text-white/40 ml-1">..</span>
            </div>
          </div>

        </ScrollReveal>
      </section>
    </div>
  );
};

export default ProjectAndGallery;
