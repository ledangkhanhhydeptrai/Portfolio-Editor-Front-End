"use client";

import { useState } from "react";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import MouseSpotlight from "@/components/effects/MouseSpotlight";

import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import AboutSection from "@/components/home/AboutSection";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ShowreelSection from "@/components/home/ShowreelSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ContactSection from "@/components/home/ContactSection";

import HeroPopup from "@/components/popup/HeroPopup";

export default function Home() {
  const [showHeroPopup, setShowHeroPopup] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0B0D] text-[#F0EFEA]">
      <MouseSpotlight />

      <Header />

      <HeroSection />

      {/* TEST BUTTON */}
      <button
        type="button"
        onClick={() => setShowHeroPopup(true)}
        className="fixed bottom-6 right-6 z-50 rounded-lg bg-[#5B7CFA] px-5 py-3 text-sm font-medium text-white"
      >
        Mở Profile
      </button>

      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ShowreelSection />
      <ExperienceSection />
      <ContactSection />

      <Footer />

      {/* POPUP */}
      <HeroPopup
        isOpen={showHeroPopup}
        onClose={() => setShowHeroPopup(false)}
      />
    </main>
  );
}
