import React from 'react';

const DedicatedServicesSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="text-center mb-16 flex flex-col items-center">
        <div className="h-8 w-48 bg-gray-700/50 rounded mb-2"></div>
        <div className="h-8 w-64 bg-gray-700/50 rounded"></div>
        <div className="w-24 h-px bg-gray-600 mx-auto mt-8" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {[1, 2].map((i) => (
          <div key={i}>
            <div className="h-4 w-32 bg-gray-700/50 rounded mb-4"></div>
            <div className="w-full h-[1px] bg-gray-600 mb-6" />
            <div className="h-3 w-full bg-gray-700/50 rounded mb-2"></div>
            <div className="h-3 w-full bg-gray-700/50 rounded mb-2"></div>
            <div className="h-3 w-4/5 bg-gray-700/50 rounded mb-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DedicatedServicesSkeleton;
