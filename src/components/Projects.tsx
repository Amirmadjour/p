"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  folder: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Rabit",
    category: "Web Platform",
    description:
      "A comprehensive B2C and C2C marketplace with integrated secure payment system. Built for the web to provide seamless buying and selling experiences with robust transaction security.",
    tags: ["Next.js", "React", "TypeScript", "Noon Payments"],
    gradient: "from-orange-500/20 to-red-500/20",
    folder: "Rabit",
    images: [
      "/projects/Rabit/image1.png",
      "/projects/Rabit/image2.png",
      "/projects/Rabit/image3.png",
      "/projects/Rabit/image4.png",
      "/projects/Rabit/image5.png",
      "/projects/Rabit/image6.png",
      "/projects/Rabit/image7.png",
      "/projects/Rabit/image8.png",
      "/projects/Rabit/image9.png",
      "/projects/Rabit/image10.png",
    ],
  },
  {
    id: 2,
    title: "Rabitpay",
    category: "Mobile App",
    description:
      "A pure Expo React Native application powering a B2C and C2C marketplace with a secure payment system. Features seamless mobile-first user experience for buying, selling, and secure transactions.",
    tags: ["Expo", "React Native", "TypeScript", "Noon Payments"],
    gradient: "from-teal-500/20 to-cyan-500/20",
    folder: "Rabitpay",
    images: [
      "/projects/Rabitpay/image0.png",
      "/projects/Rabitpay/image1.png",
      "/projects/Rabitpay/image2.png",
      "/projects/Rabitpay/image3.png",
      "/projects/Rabitpay/image4.png",
      "/projects/Rabitpay/image5.png",
      "/projects/Rabitpay/image6.png",
      "/projects/Rabitpay/image7.png",
    ],
  },
  {
    id: 3,
    title: "Haris",
    category: "Security Platform",
    description:
      "A comprehensive logging and monitoring system designed for a pentesting company. Provides real-time security insights, vulnerability tracking, and audit trail management.",
    tags: ["Security", "Logging", "Analytics", "Dashboard"],
    gradient: "from-purple-500/20 to-pink-500/20",
    folder: "haris",
    images: [
      "/projects/haris/Screenshot_2025-04-22_16_18_53.png",
      "/projects/haris/Screenshot_2025-05-05_18_27_20.png",
      "/projects/haris/Screenshot_2025-05-05_23_32_07.png",
    ],
  },
  {
    id: 4,
    title: "Livri",
    category: "B2B SaaS",
    description:
      "A B2B SaaS startup application built with Expo that connects big retailers to small shops and cafes. Streamlines supply chain management and ordering processes for businesses of all sizes.",
    tags: ["Expo", "React Native", "B2B", "Supply Chain"],
    gradient: "from-blue-500/20 to-indigo-500/20",
    folder: "livri",
    images: [
      "/projects/livri/image1.png",
      "/projects/livri/image2.jpg",
      "/projects/livri/image3.jpg",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

interface ImagePreviewModalProps {
  project: Project;
  onClose: () => void;
}

function ImagePreviewModal({ project, onClose }: ImagePreviewModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") onClose();
  };

  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Image container - full screen */}
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative flex h-full w-full items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative h-full w-full"
          >
            <Image
              src={project.images[currentIndex]}
              alt={`${project.title} screenshot ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Close button - top right corner */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section className="relative min-h-screen bg-[#0a0a0a] px-6 py-24 md:px-16 lg:px-24">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-[120px]" />
          <div className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-teal-500/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block text-sm uppercase tracking-[0.3em] text-white/40">
              Selected Work
            </span>
            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Featured <span className="text-gradient-accent">Projects</span>
            </h2>
          </motion.div>

          {/* Projects grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 md:grid-cols-2"
          >
            {projects.map((project) => (
              <motion.article
                key={project.id}
                variants={cardVariants}
                className="glass-card group relative cursor-pointer overflow-hidden p-8"
                onClick={() => setSelectedProject(project)}
              >
                {/* Preview thumbnail */}
                <div className="relative mb-6 aspect-video overflow-hidden rounded-xl bg-black/20">
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-50" />
                  
                  {/* Image count badge */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm">
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {project.images.length}
                  </div>
                </div>

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-30`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <span className="mb-2 inline-block text-xs uppercase tracking-[0.2em] text-white/40">
                    {project.category}
                  </span>
                  <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-white md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-white/50 transition-colors group-hover:text-white/70">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 transition-colors group-hover:border-white/20 group-hover:text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Click indicator */}
                  <motion.div
                    className="absolute right-8 top-8 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    <span className="text-xs text-white/60">View Gallery</span>
                    <svg
                      className="h-5 w-5 text-white/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Hover border glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-[-1px] rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ImagePreviewModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
