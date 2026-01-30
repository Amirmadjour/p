import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

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
      <Footer />
    </main>
  );
}
