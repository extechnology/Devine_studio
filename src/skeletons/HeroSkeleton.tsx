import React from 'react';

const HeroSkeleton = () => {
  return (
    <div className="relative h-screen w-full bg-charcoal animate-pulse">
      <div className="absolute inset-0 bg-gray-800" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
            <div className="mt-4 h-12 w-3/4 max-w-lg bg-gray-700/50 rounded"></div>
            <div className="mt-6 h-4 w-full max-w-xl bg-gray-700/50 rounded"></div>
            <div className="mt-2 h-4 w-5/6 max-w-xl bg-gray-700/50 rounded"></div>
            <div className="mt-2 h-4 w-4/6 max-w-xl bg-gray-700/50 rounded"></div>
            <div className="mt-10 h-12 w-48 bg-gray-700/50 rounded border border-gray-600/50"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
