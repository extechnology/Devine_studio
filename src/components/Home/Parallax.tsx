import React from "react";

const ParallaxSection: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center py-20 md:py-32 bg-scroll md:bg-fixed bg-center bg-cover min-h-[60vh] md:min-h-screen"
      style={{
        backgroundImage:
          "url('https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1639204624-8.jpg')",
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-charcoal/70 md:bg-black/60" />

      {/* Content (moves naturally over the fixed background) */}
      {/* <div className="relative z-10 px-6 w-full max-w-4xl text-center">
        <div className="bg-[#1f1f1f]/80 backdrop-blur-md text-white p-8 md:p-12 lg:p-16 mx-auto border border-white/10 shadow-2xl rounded-2xl">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading tracking-[0.3em] mb-6">
            <span className="text-white">DEVINE</span>{" "}
            <span className="text-sand">EXPERIENCE</span>
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed font-body max-w-2xl mx-auto mb-8">
            Crafting spaces that resonate with your inner self. Our meticulous
            attention to detail ensures that every corner of your home is a
            testament to unparalleled luxury and comfort.
          </p>
          <button className="border border-sand px-8 py-4 text-xs font-heading font-medium uppercase tracking-[0.3em] text-sand hover:bg-sand hover:text-charcoal transition-all duration-300">
            Discover More
          </button>
        </div>
      </div> */}
    </section>
  );
};

export default ParallaxSection;
