import React from 'react';

const BeforeAndAfterSkeleton: React.FC = () => {
  return (
    <div className="py-16 bg-white dark:bg-charcoal transition-colors duration-500 overflow-hidden relative animate-pulse">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="h-4 w-24 bg-gray-700/50 rounded mb-3 block"></div>
          <div className="h-8 w-64 bg-gray-700/50 rounded mb-4"></div>
          <div className="h-3 w-96 max-w-full bg-gray-700/50 rounded"></div>
        </div>

        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] rounded-sm overflow-hidden bg-neutral-200 dark:bg-neutral-800">
        </div>
      </div>
    </div>
  );
};

export default BeforeAndAfterSkeleton;
