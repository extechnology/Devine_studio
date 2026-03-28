import React from "react";

const ParallaxSection: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center py-32 bg-fixed bg-center h-screen bg-cover"
      style={{
        backgroundImage:
          "url('https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1639204624-8.jpg')",
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content (moves naturally over the fixed background) */}
      {/* <div className="relative z-10 px-6 text-center">
        <div className="bg-[#2b2b2b]/90 backdrop-blur-sm text-white p-10 max-w-2xl mx-auto border border-white/10">
          <h2 className="text-2xl md:text-3xl tracking-[0.4em] mb-4">
            <span className="text-white">DEVINE</span>{" "}
            <span className="text-[#c6a47e]">EXPERIENCE</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
            Crafting spaces that resonate with your inner self. Our meticulous
            attention to detail ensures that every corner of your home is a
            testament to unparalleled luxury and comfort.
          </p>
          <button className="mt-8 border border-[#c6a47e] px-8 py-3 text-xs uppercase tracking-[0.4em] text-[#c6a47e] hover:bg-[#c6a47e] hover:text-white transition duration-300">
            Discover More
          </button>
        </div>
      </div> */}
    </section>
  );
};

export default ParallaxSection;
