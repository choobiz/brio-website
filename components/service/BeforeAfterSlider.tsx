"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  altBefore?: string;
  altAfter?: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  altBefore = "Before renovation",
  altAfter = "After renovation",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      dragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden cursor-col-resize select-none touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* After image (full background) */}
      <Image src={after} alt={altAfter} fill className="object-cover" sizes="33vw" />

      {/* Before image — use clip-path to reveal only the left portion */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={before} alt={altBefore} fill className="object-cover" sizes="33vw" />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-[2]"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 z-[3] -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${position}%` }}
      >
        <div className="w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7l-4 5 4 5M16 7l4 5-4 5"
            />
          </svg>
        </div>
      </div>

      {/* Before label — only visible when slider shows before area */}
      {position > 10 && (
        <span className="absolute bottom-3 left-3 bg-black/50 text-white text-[11px] px-2 py-0.5 rounded z-[2]">
          Before
        </span>
      )}

      {/* After label — only visible when slider shows after area */}
      {position < 90 && (
        <span className="absolute bottom-3 right-3 bg-black/50 text-white text-[11px] px-2 py-0.5 rounded z-[0]">
          After
        </span>
      )}
    </div>
  );
}
