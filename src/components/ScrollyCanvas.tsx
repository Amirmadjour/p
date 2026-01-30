"use client";

import { useRef } from "react";

interface ScrollyCanvasProps {
  className?: string;
}

export default function ScrollyCanvas({ className = "" }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`relative h-[500vh] ${className}`}
    >
      {/* Sticky image container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <img
          src="/hero_image.jpeg"
          alt="Hero background"
          className="h-full w-full object-cover"
          style={{
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
