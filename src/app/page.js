"use client";

import HeroSection from "@/components/sections/HeroSection";
import StoriesSection from "@/components/sections/StoriesSection";
import TutorialsSection from "@/components/sections/TutorialsSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <HeroSection />
      <StoriesSection />
      <TutorialsSection />
      <AboutSection />
    </main>
  );
}
