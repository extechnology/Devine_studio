import React from 'react';

const YouTubePreviewSkeleton: React.FC = () => {
  return (
    <div className="w-full md:h-screen h-auto min-h-[400px] relative overflow-hidden bg-gray-800 animate-pulse">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-20 h-20 bg-gray-700 rounded-full"></div>
        </div>
        <div className="absolute bottom-6 left-6 h-6 w-48 bg-gray-700 rounded"></div>
    </div>
  );
};

export default YouTubePreviewSkeleton;
