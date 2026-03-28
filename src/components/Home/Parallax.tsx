import React from "react";

const ParallaxSection: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center py-20 md:py-32 bg-fixed bg-center bg-cover min-h-[60vh] md:min-h-screen"
      style={{
        backgroundImage:
          "url('https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1639204624-8.jpg')",
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-charcoal/70 md:bg-black/60" />

      
    </section>
  );
};

export default ParallaxSection;
