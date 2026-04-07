import React from 'react';

const AboutHomeSkeleton = () => {
  return (
    <div className="bg-charcoalDark py-24 animate-pulse">
        <section className="max-w-6xl mx-auto grid grid-cols-2 gap-4">
          <div className="content-center">
            <div className="h-8 w-48 bg-gray-700/50 rounded mb-6"></div>
            <div className="mt-6 h-4 w-full bg-gray-700/50 rounded"></div>
            <div className="mt-2 h-4 w-full bg-gray-700/50 rounded"></div>
            <div className="mt-2 h-4 w-5/6 bg-gray-700/50 rounded"></div>
            <div className="mt-2 h-4 w-4/6 bg-gray-700/50 rounded"></div>
          </div>
          <div className="h-64 overflow-hidden rounded-xl shadow-soft md:h-80 relative bg-gray-800">
          </div>
        </section>
    </div>
  );
};

export default AboutHomeSkeleton;
