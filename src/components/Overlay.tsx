"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface OverlayProps {
  className?: string;
}

export default function Overlay({ className = "" }: OverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: Hero (0% - 25% scroll)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], ["0%", "-20%"]);

  // Section 2: Statement 1 (25% - 50% scroll)
  const statement1Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.45, 0.55],
    [0, 1, 1, 0]
  );
  const statement1Y = useTransform(scrollYProgress, [0.2, 0.55], ["30%", "-10%"]);

  // Section 3: Statement 2 (50% - 75% scroll)
  const statement2Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.75, 0.85],
    [0, 1, 1, 0]
  );
  const statement2Y = useTransform(scrollYProgress, [0.5, 0.85], ["30%", "-10%"]);

  // CTA section (85% - 100% scroll)
  const ctaOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.8, 1], ["20%", "0%"]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 z-10 h-[500vh] ${className}`}
    >
      {/* Section 1: Hero - Center */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            <span className="text-gradient">Amir Madjour</span>
          </h1>
          <p className="text-xl font-light tracking-wide text-white/60 md:text-2xl lg:text-3xl">
            Creative Developer
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 1 }}
            className="mx-auto mt-6 h-[1px] max-w-[200px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-black">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-6 w-[1px] bg-gradient-to-b from-black to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Section 2: Statement 1 - Left aligned */}
      <motion.div
        style={{ opacity: statement1Opacity, y: statement1Y }}
        className="sticky top-0 flex h-screen w-full items-center px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            I build{" "}
            <span className="text-gradient-accent">digital experiences</span>
          </h2>
          <p className="text-lg text-white/50 md:text-xl">
            Crafting immersive web applications that push the boundaries of what&apos;s possible in the browser.
          </p>
        </div>
      </motion.div>

      {/* Section 3: Statement 2 - Right aligned */}
      <motion.div
        style={{ opacity: statement2Opacity, y: statement2Y }}
        className="sticky top-0 flex h-screen w-full items-center justify-end px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-2xl text-right">
          <h2 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Bridging{" "}
            <span className="text-gradient-accent">design & engineering</span>
          </h2>
          <p className="text-lg text-white/50 md:text-xl">
            Where creative vision meets technical excellence. Every pixel intentional, every interaction delightful.
          </p>
        </div>
      </motion.div>

      {/* Section 4: CTA - Center with call to action */}
      <motion.div
        style={{ opacity: ctaOpacity, y: ctaY }}
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-center px-6"
      >
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Let&apos;s create something{" "}
            <span className="text-gradient-accent">extraordinary</span>
          </h2>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="pointer-events-auto inline-block"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex items-center gap-2 text-white/40"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              <span className="text-sm uppercase tracking-[0.2em]">
                View my work
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
