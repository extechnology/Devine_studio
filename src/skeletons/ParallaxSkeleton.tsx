import React from 'react';

const ParallaxSkeleton = () => {
  return (
    <section className="relative flex items-center justify-center py-20 md:py-32 min-h-[60vh] md:min-h-screen bg-gray-800 animate-pulse">
      <div className="absolute inset-0 bg-charcoal/70 md:bg-black/60" />
    </section>
  );
};

export default ParallaxSkeleton;
