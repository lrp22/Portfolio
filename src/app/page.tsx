// app/page.tsx - For App Router
//import BirdScene from "../components/BirdScene";
import About from "@/components/About";
import BeamsBackground from "@/components/Beams";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <BeamsBackground intensity="subtle" fadeOut={true} fullHeight={false}>
        <Header />
        <Hero />
      </BeamsBackground>
      <div className="px-8 md:px-20 lg:px-32">
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
