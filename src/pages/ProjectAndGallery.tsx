import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import useBannerImages from "../hooks/useBannerImages";
import useGallery from "../hooks/useGallery";


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
  const { data: banners } = useBannerImages();
  const { data: gallery } = useGallery();
  const galleryBanner = banners?.find(
    (banner) => banner.banner_type === "gallery",
  );

  console.log(gallery,"gallery");
  
  const itemsPerPage = 10;
  const totalPages = Math.ceil(projectGalleryData.length / itemsPerPage);

  const currentItems = projectGalleryData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
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
        image={galleryBanner?.image || "/home-interior.jpg"}
      />

      <section className="pt-24 relative overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <ScrollReveal
          threshold={0}
          className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-3xl font-heading tracking-[0.3em] uppercase">
              Our Milestone{" "}
              <span className="text-sand font-semibold">Projects</span>
            </h2>
            <div className="w-24 h-px bg-sand mx-auto mt-6" />
          </div>

          {/* Grid Layout perfectly matching the requested structure */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {gallery?.map((segment, index) => (
              <div
                key={index}
                className="group flex flex-col h-full bg-white/5 border border-white/20 rounded-md hover:border-sand transition-all duration-300 shadow-soft overflow-hidden"
              >
                {/* Image Section */}
                <div className="w-full h-72 sm:h-80 overflow-hidden relative bg-black/40 border-b border-white/20 ">
                  {(() => {
                    const mainImg = segment.images?.find((img: any) => img.is_main_image) || segment.images?.[0];
                    return mainImg ? (
                      <img
                        src={mainImg.image}
                        alt={segment.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-transform duration-[1500ms] group-hover:scale-105"
                      />
                    ) : null;
                  })()}

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
                  <Link
                    to={`/gallery/${segment.title}`}
                    className="w-full mt-auto block"
                  >
                    <button className="w-full py-4 border border-white/20 hover:border-sand hover:bg-sand hover:text-charcoal bg-black/20 text-white group-hover:text-sand font-heading uppercase tracking-widest text-xs font-bold transition-all duration-300 shadow-sm">
                      View Now!
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default ProjectAndGallery;
