import React from 'react';

const NewsSliderSkeleton = () => {
  return (
    <section className="bg-[#2b2b2b] pt-16 md:pt-20 pb-20 md:pb-28 overflow-hidden animate-pulse">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex mb-8 gap-3 items-center">
          <div className="h-8 w-32 bg-charcoal/50 rounded"></div>
          <div className="h-8 w-32 bg-charcoal/50 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[450px]">
          {[1, 2].map((idx) => (
            <div key={idx} className="group">
              <div className="relative overflow-hidden">
                <div className="w-full h-[300px] md:h-[380px] bg-charcoal/30"></div>
              </div>
              <div className="relative">
                <div className="absolute -top-20 left-5 w-[90%] bg-charcoal/50 p-6 shadow transform translate-y-6 z-10 min-h-[100px]">
                  <div className="h-3 w-full bg-gray-600 rounded mb-2"></div>
                  <div className="h-3 w-3/4 bg-gray-600 rounded mb-4"></div>
                  <div className="h-4 w-1/2 bg-gray-600 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSliderSkeleton;
