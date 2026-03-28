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
    <div className="w-full h-screen relative overflow-hidden">
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
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />

        {/* Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition">
            <svg
              className="w-10 h-10 text-black ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Optional Title */}
        <div className="absolute bottom-6 left-6 text-white text-lg md:text-xl font-semibold">
          {title}
        </div>
      </a>
    </div>
  );
};

export default YouTubePreview;
