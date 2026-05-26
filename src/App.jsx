import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { AiPhotoshoot } from "@/components/AiPhotoshoot";
import { Route, Routes } from "react-router-dom";

function HomePage() {
  useReveal();
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Services />
      <Work />
      <WhyUs />
      <Process />
      <Testimonials />
      <TechStack />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CursorGlow />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-photoshoot" element={<AiPhotoshoot />} />
      </Routes>
      <Footer />
    </div>
  );
}
