import { useState, useEffect } from "react";
import ScrollReveal from "../components/ScrollReveal";
import useGallery from "../hooks/useGallery";
import { useParams } from "react-router-dom";

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

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: gallery } = useGallery();
  const { category } = useParams();
  const itemsPerPage = 10;
  const totalPages = Math.ceil(projectGalleryData.length / itemsPerPage);
  const galleryImages = gallery?.find((image) => image.title === category);
  const currentItems = projectGalleryData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Scroll to top of gallery section when page changes
  useEffect(() => {
    // optional: add smooth scroll logic if needed
  }, [currentPage]);

  return (
    <div>
      {/* New Home & Apartments Paginated Gallery Section */}
      <ScrollReveal
        threshold={0.05}
        delay={100}
        className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 mt-8"
      >
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-heading tracking-widest uppercase bg-sand text-charcoal inline-block px-4 py-2 font-bold shadow-soft">
            {category}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 border-t border-l border-white/20">
          {galleryImages?.images?.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-white/5 border-b border-r border-white/20 hover:bg-white/10 transition-colors duration-300 cursor-pointer overflow-hidden relative"
            >
              <div className="h-48 w-full bg-black/40 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item?.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-transform duration-[1500ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent mix-blend-multiply opacity-50" />
              </div>
              <div className="p-3 text-center border-t border-white/20 bg-charcoal/40 backdrop-blur-sm z-10">
                <p className="text-[9px] sm:text-[10px] text-white/50 group-hover:text-sand transition-colors font-heading tracking-widest uppercase font-medium">
                  {item?.title}
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
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={`flex items-center gap-3 text-white/70 hover:text-sand transition-all duration-300 font-heading tracking-widest text-sm uppercase font-semibold group ${
                currentPage === 1
                  ? "opacity-0 pointer-events-none w-0 -mx-4"
                  : "opacity-100 w-auto"
              }`}
            >
              <svg
                className="w-16 h-4 transition-transform group-hover:-translate-x-2 scale-x-[-1]"
                viewBox="0 0 100 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10H95M95 10L85 0M95 10L85 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Prev</span>
            </button>

            {/* Next Button */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="flex items-center gap-3 text-white/70 hover:text-sand disabled:opacity-30 disabled:hover:text-white/70 transition-all font-heading tracking-widest text-sm uppercase font-semibold group"
            >
              <span>Next</span>
              <svg
                className="w-16 h-4 transition-transform group-hover:translate-x-2"
                viewBox="0 0 100 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10H95M95 10L85 0M95 10L85 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
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
                {i + 1}
                {i < totalPages - 1 ? "-" : ""}
              </button>
            ))}
            <span className="text-white/40 ml-1">..</span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Gallery;





