import React, { useRef, useState, useEffect } from "react";
import useBeforeAndAfter from "../../hooks/useBeforeAndAfter";
import BeforeAndAfterSkeleton from "../../skeletons/BeforeAndAfterSkeleton";

const BeforeAndAfter: React.FC = () => {
  const { data: beforeAndAfter, isLoading } = useBeforeAndAfter();
  
  
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);


  const before = beforeAndAfter?.[0]?.before;
  const after = beforeAndAfter?.[0]?.after;


  // Use refs for the cursor position to avoid React re-renders on every mouse move
  const posRef = useRef({ x: 50, y: 50 });

  const updateCursorPosition = (
    x: number,
    y: number,
    withTransition: boolean = false
  ) => {
    if (maskRef.current && ringRef.current) {
      if (withTransition) {
        maskRef.current.style.transition = "clip-path 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
        ringRef.current.style.transition = "opacity 0.4s ease, left 0.4s cubic-bezier(0.25, 1, 0.5, 1), top 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
      } else {
        maskRef.current.style.transition = "none";
        // keep ring opacity transition
        ringRef.current.style.transition = "opacity 0.4s ease, transform 0.2s ease";
      }

      const radius = window.innerWidth < 768 ? 120 : 200;
      
      // Update clip path
      maskRef.current.style.clipPath = `circle(${
        isHovering ? radius + "px" : "0px"
      } at ${x}% ${y}%)`;

      // Update ring position
      ringRef.current.style.left = `${x}%`;
      ringRef.current.style.top = `${y}%`;

      // Adjust ring size to match clip path radius
      ringRef.current.style.width = isHovering ? `${radius * 2}px` : "0px";
      ringRef.current.style.height = isHovering ? `${radius * 2}px` : "0px";
    }
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    let clientX, clientY;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
      if (!isHovering) setIsHovering(true);
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    posRef.current = { x, y };
    
    if (!hasInteracted) setHasInteracted(true);

    if (isHovering) {
      updateCursorPosition(x, y, false);
    }
  };

  // Re-trigger update when hover state changes so it transitions smoothly in/out
  useEffect(() => {
    updateCursorPosition(posRef.current.x, posRef.current.y, true);

    const timeout = setTimeout(() => {
      // Clear transition after animation to allow responsive drag
      if (maskRef.current && ringRef.current && isHovering) {
        maskRef.current.style.transition = "none";
        ringRef.current.style.transition = "opacity 0.4s ease";
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [isHovering]);

  useEffect(() => {
    // Reset position slightly off-center for visual cue
    posRef.current = { x: 50, y: 50 };
  }, []);


  if (isLoading) {
    return <BeforeAndAfterSkeleton />;
  }

  
  return (
    <div className="py-16 bg-white dark:bg-charcoal transition-colors duration-500 overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-neutral-50 dark:bg-neutral-900/40 pattern-grid-lg text-neutral-200 dark:text-neutral-800 opacity-50" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold mb-3 block">
            The Reveal
          </span>
          <h1 className="text-xl md:text-3xl font-light tracking-tight mb-4 text-neutral-900 dark:text-white">
            Discover the{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#c6a47e] to-[#c6a47e]">
              Difference
            </span>
          </h1>
          <p className="text-neutral-500 text-xs max-w-xl mx-auto uppercase tracking-widest leading-relaxed">
            Move your cursor across the image below to explore the
            transformation in real time.
          </p>
        </div>

        {/* Interactive Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] rounded-sm overflow-hidden cursor-crosshair shadow-2xl ring-1 ring-black/5 dark:ring-white/10 group bg-neutral-200 dark:bg-neutral-800"
        >
          {/* Base Layer: Before Image */}
          <img
            src={before}
            alt="Before Design"
            draggable={false}
            className={`absolute inset-0 w-full h-full object-cover select-none transition-all duration-[1500ms] ease-out ${
              isHovering
                ? "scale-[1.01] opacity-90 grayscale-[40%]"
                : "scale-100 opacity-100 grayscale-0"
            }`}
          />

          {/* Masked Layer: After Image */}
          <div
            ref={maskRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            style={{
              clipPath: "circle(0px at 50% 50%)", // initial state
            }}
          >
            <img
              src={after}
              alt="After Design"
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover select-none"
            />
          </div>

          {/* Magnetic Cursor Ring / Portal Frame */}
          <div
            ref={ringRef}
            className="absolute pointer-events-none z-20 rounded-full border border-white/60 shadow-[0_0_30px_rgba(255,255,255,0.4),0_0_10px_rgba(0,0,0,0.5)_inset] bg-white/5 backdrop-blur-[1px]"
            style={{
              left: "50%",
              top: "50%",
              width: "0px",
              height: "0px",
              transform: "translate(-50%, -50%)",
              opacity: 0,
            }}
          >
            {/* Inner detailed ring */}
            <div className="absolute inset-0 rounded-full border border-black/10 m-[2px]" />
          </div>

          {/* Prompt text when NOT hovering */}
          <div
            className={`absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none transition-all duration-700 ease-in-out ${
              isHovering ? "opacity-0 scale-105" : "opacity-100 scale-100"
            }`}
          >
            <div className="w-20 h-20 rounded-full bg-white/20 dark:bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/40 dark:border-white/20 mb-6 shadow-xl animate-pulse ring-4 ring-white/10">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 15L21 21M15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9C13.3431 9 12 10.3431 12 12C12 13.6569 13.3431 15 15 15ZM9 9L3 3M9 9C10.6569 9 12 7.65685 12 6C12 4.34315 10.6569 3 9 3C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9Z"
                  stroke="currentColor"
                  className="text-neutral-800 dark:text-white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="px-8 py-3 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-md text-neutral-800 dark:text-white/90 text-sm font-semibold tracking-[0.2em] uppercase shadow-lg border border-white/50 dark:border-white/20">
              {hasInteracted ? "Explore Again" : "Hover to Discover"}
            </span>
          </div>

          {/* Before & After Labels */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 pointer-events-none">
            <div className="flex flex-col items-start">
              <span className="px-5 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-800 dark:text-white bg-white/70 dark:bg-black/60 backdrop-blur-md shadow-lg border border-white/40 dark:border-white/20">
                Before
              </span>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-30 pointer-events-none">
            <div
              className={`flex flex-col items-end transition-all duration-700 ${
                isHovering
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="px-5 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--accent)] dark:text-amber-300 bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-lg border border-white/50 dark:border-amber-300/30">
                After
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAndAfter;