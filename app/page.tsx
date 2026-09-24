"use client";

import React from "react";

import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";

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
  const [showHeroPopup, setShowHeroPopup] = React.useState<boolean>(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#11131B] text-[#F0EFEA]">
      {/* ================================================
          GLOBAL BACKGROUND
      ================================================= */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Base gradient */}

        <div className="absolute inset-0 bg-linear-to-b from-[#171923] via-[#12141C] to-[#101118]" />

        {/* Top center glow */}

        <div className="absolute -top-80 left-1/2 h-175 w-200 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-[190px]" />

        {/* Left blue glow */}

        <div className="absolute -left-60 top-100 h-150 w-150 rounded-full bg-blue-500/8 blur-[180px]" />

        {/* Right violet glow */}

        <div className="absolute -right-60 top-160 h-150 w-150 rounded-full bg-violet-500/8 blur-[180px]" />

        {/* Middle glow */}

        <div className="absolute left-1/2 top-250 h-125 w-200 -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[180px]" />

        {/* Bottom glow */}

        <div className="absolute -bottom-60 left-1/4 h-150 w-150 rounded-full bg-blue-500/6 blur-[180px]" />

        {/* Grid */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-size-[32px_32px]" />
      </div>

      {/* ================================================
          CONTENT
      ================================================= */}

      <div className="relative z-10">
        <MouseSpotlight />

        <Header />

        <HeroSection />

        {/* TEST BUTTON */}

        <button
          type="button"
          onClick={() => setShowHeroPopup(true)}
          className="fixed bottom-6 right-6 z-50 rounded-lg bg-[#6F8CFF] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_35px_rgba(91,124,250,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7D97FF]"
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
      </div>

      {/* ================================================
          POPUP
      ================================================= */}

      <HeroPopup
        isOpen={showHeroPopup}
        onClose={() => setShowHeroPopup(false)}
      />
    </main>
  );
}
