import React from "react";
import useYouTubeLink from "../../hooks/useYouTubeLink";
import YouTubePreviewSkeleton from "../../skeletons/YouTubePreviewSkeleton";

const getYouTubeId = (url: string) => {
  const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
  const match = url.match(regExp);
  return match ? match[1] : "";
};

const YouTubePreview: React.FC = () => {
  const { data: youtubeLink, isLoading } = useYouTubeLink();

  const videoUrl = youtubeLink?.[0]?.link;
  const videoId = videoUrl ? getYouTubeId(videoUrl) : "";

  if (!videoId) return null;

  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  if (isLoading) {
    return <YouTubePreviewSkeleton />;
  }
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
          alt="Watch on YouTube"
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center group">
            {/* Outer glow pulse */}
            <span className="absolute w-32 h-32 rounded-full bg-white/10 animate-ping opacity-30"></span>

            {/* Glow ring */}
            <span className="absolute w-24 h-24 rounded-full border border-white/30 backdrop-blur-md"></span>

            {/* Main button */}
            <div className="relative w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
              {/* Inner gradient glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent opacity-60"></div>

              {/* YouTube icon */}
              <svg
                className="w-14 h-14 text-[#FF0000] relative z-10 transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.582 6.186a2.68 2.68 0 0 0-1.884-1.895C17.986 3.8 12 3.8 12 3.8s-5.986 0-7.698.49A2.68 2.68 0 0 0 2.418 6.186C1.928 7.893 1.928 12 1.928 12s0 4.107.49 5.814a2.68 2.68 0 0 0 1.884 1.895c1.712.49 7.698.49 7.698.49s5.986 0 7.698-.49a2.68 2.68 0 0 0 1.884-1.895c.49-1.707.49-5.814.49-5.814s0-4.107-.49-5.814zm-11.83 8.784V9.03l5.57 2.97-5.57 2.97z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="absolute bottom-6 left-6 text-white text-lg font-heading tracking-widest">
          Watch on YouTube
        </div>
      </a>
    </div>
  );
};

export default YouTubePreview;
