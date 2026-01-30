import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative">
      {/* Scrollytelling Hero Section */}
      <section className="relative">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Footer */}
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
            <a
              href="mailto:hello@example.com"
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
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-sm text-white/30">
              © 2024 Amir Madjour. All rights reserved.
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
    </main>
  );
}
