import React from "react";
import useBannerImages from "../../hooks/useBannerImages";
import ParallaxSkeleton from "../../skeletons/ParallaxSkeleton";

const ParallaxSection: React.FC = () => {
    const { data: banners, isLoading } = useBannerImages();
    
    if (isLoading) {
      return <ParallaxSkeleton />;
    }

    const serviceBanner = banners?.find((banner)=> banner.banner_type == "services")
  return (
    <section
      className="relative flex items-center justify-center py-20 md:py-32 bg-fixed bg-center bg-cover min-h-[60vh] md:min-h-screen"
      style={{
        backgroundImage: `url('${serviceBanner?.image || "/home-interior2.jpg"}')`,
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-charcoal/70 md:bg-black/60" />

      
    </section>
  );
};

export default ParallaxSection;
