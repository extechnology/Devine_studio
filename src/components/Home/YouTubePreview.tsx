import React from "react";

interface YouTubePreviewProps {
  videoId: string;
  title?: string;
}

const YouTubePreview: React.FC<YouTubePreviewProps> = ({
  videoId,
  title = "Watch on YouTube",
}) => {
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="w-full md:h-screen h-auto relative overflow-hidden">
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full group"
      >
        {/* Background Thumbnail */}
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500" />

        {/* Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500 ease-out backdrop-blur-sm">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-charcoal ml-1 sm:ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Optional Title */}
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white text-sm sm:text-lg md:text-2xl font-heading tracking-widest font-medium drop-shadow-md">
          {title}
        </div>
      </a>
    </div>
  );
};

export default YouTubePreview;
