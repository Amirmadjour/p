"use client";

import { useRef } from "react";

// Base path for production deployment
const basePath = process.env.NODE_ENV === "production" ? "/p" : "";

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
          src={`${basePath}/hero_image.jpeg`}
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
