import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  // Links like "/#projects" from other pages land before fonts settle the layout,
  // so the browser's own jump misses. Jump again once fonts are in.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    document.fonts.ready.then(() => document.getElementById(id)?.scrollIntoView({ behavior: "instant" }));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar home />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
