"use client";

import { useRef } from "react";
import config from "../../next.config.js";

// Base path for production deployment
const basePath = config.basePath;

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
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Mobile Image */}
        <img
          src={`${basePath}/hero_image_mobile.png`}
          alt="Hero background mobile"
          className="block h-full w-full object-cover md:hidden"
        />
        {/* Desktop Image */}
        <img
          src={`${basePath}/hero_image.jpeg`}
          alt="Hero background"
          className="hidden h-full w-full object-cover md:block"
        />
      </div>
    </div>
  );
}
