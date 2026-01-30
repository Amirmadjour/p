"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+34605637460";
  const formattedPhone = "+34 605 637 460";

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#0a0a0a] px-6 py-16 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-2xl font-bold text-white">
              Let&apos;s work together
            </h3>
            <p className="text-white/50">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <a
              href="mailto:amirmadjour133@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium uppercase tracking-[0.1em] text-black transition-all hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Get in touch
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <button
              onClick={handleCopyPhone}
              className="group relative inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium uppercase tracking-[0.1em] text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {formattedPhone}
              
              {/* Copied notification */}
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-green-500 px-4 py-2 text-xs font-medium text-white shadow-lg"
                  >
                    ✓ Copied!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/30">
            © 2026 Amir Madjour. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-white/30 transition-colors hover:text-white/60"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-sm text-white/30 transition-colors hover:text-white/60"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm text-white/30 transition-colors hover:text-white/60"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
