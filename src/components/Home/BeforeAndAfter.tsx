import React, { useRef, useState, useEffect, useCallback } from "react";

const BeforeAndAfter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let percent = ((clientX - rect.left) / rect.width) * 100;
    percent = Math.max(2, Math.min(98, percent));
    setPosition(percent);
  }, []);

  useEffect(() => {
    if (!dragging) return;

    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      updatePosition(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    };
    const stop = () => setDragging(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", stop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stop);
    };
  }, [dragging, updatePosition]);

  const handleClick = (e: React.MouseEvent) => {
    if (!dragging) updatePosition(e.clientX);
  };

  // Smooth transition only when NOT dragging (for click-to-jump)
  const transitionStyle = dragging
    ? "none"
    : "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)";

  return (
    <div className=" py-14">
      <div>
        <h1 className="text-center text-3xl pb-3">Before and After</h1>
        <p className="text-center text-gray-400 text-sm pb-10">
          Watch and compare the amazing transformation of space into beautiful
          and functional interiors.
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-4">
        {/* Container */}
        <div
          ref={containerRef}
          onClick={handleClick}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden border-2 border-white shadow-2xl"
          style={{
            cursor: dragging ? "ew-resize" : "pointer",
            userSelect: "none",
          }}
        >
          {/* BEFORE image — full background */}
          <img
            src="/home-interior.jpg"
            alt="Before"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover select-none"
          />

          {/* AFTER image — clipped from the left */}
          <img
            src="/home-interior2.jpg"
            alt="After"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover select-none"
            style={{
              clipPath: `inset(0 0 0 ${position}%)`,
              transition: transitionStyle,
              willChange: "clip-path",
            }}
          />

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 z-10"
            style={{
              left: `${position}%`,
              width: "3px",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.9), rgba(255,255,255,0.2))",
              transition: transitionStyle,
              willChange: "left",
              boxShadow: "0 0 12px rgba(255,255,255,0.4)",
            }}
          />

          {/* Drag Handle */}
          <div
            className="absolute z-20"
            style={{
              left: `${position}%`,
              top: "50%",
              transform: "translate(-50%, -50%)",
              transition: transitionStyle,
              willChange: "left",
            }}
          >
            <div
              onMouseDown={(e) => {
                e.stopPropagation();
                setDragging(true);
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
                setDragging(true);
              }}
              className="relative flex items-center justify-center cursor-ew-resize"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(8px)",
                boxShadow: `0 4px 20px rgba(0,0,0,0.3), 0 0 0 ${isHovering || dragging ? "4px" : "2px"} rgba(255,255,255,0.5)`,
                transition: "box-shadow 0.3s ease, transform 0.2s ease",
                transform: dragging
                  ? "scale(1.15)"
                  : isHovering
                    ? "scale(1.05)"
                    : "scale(1)",
              }}
            >
              {/* Left chevron */}
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                style={{ marginRight: "6px" }}
              >
                <path
                  d="M8 2L2 8L8 14"
                  stroke="#333"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* Right chevron */}
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                style={{ marginLeft: "6px" }}
              >
                <path
                  d="M2 2L8 8L2 14"
                  stroke="#333"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* BEFORE label — bottom-left */}
          <div
            className="absolute bottom-4 left-4 z-10 pointer-events-none"
            style={{
              opacity: position > 10 ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <span
              style={{
                padding: "6px 16px",
                borderRadius: "999px",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: "#fff",
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(6px)",
                textTransform: "uppercase",
              }}
            >
              Before
            </span>
          </div>

          {/* AFTER label — bottom-right */}
          <div
            className="absolute bottom-4 right-4 z-10 pointer-events-none"
            style={{
              opacity: position < 90 ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <span
              style={{
                padding: "6px 16px",
                borderRadius: "999px",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: "#fff",
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(6px)",
                textTransform: "uppercase",
              }}
            >
              After
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAndAfter;
