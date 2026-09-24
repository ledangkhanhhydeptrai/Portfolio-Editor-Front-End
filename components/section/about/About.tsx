"use client";

import React from "react";

import AboutBackground from "./components/AboutBackground";
import AboutHero from "./components/AboutHero";
import AboutTimeline from "./components/AboutTimeline";
import AboutQuote from "./components/AboutQuote";
import AboutDirections from "./components/AboutDirections";
import AboutMarquee from "./components/AboutMarquee";
import AboutWorkStyle from "./components/AboutWorkStyle";
import AboutQuickInfo from "./components/AboutQuickInfo";

import useScrollProgress from "./hooks/useScrollProgress";

const About: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1B1E29] text-[#F7F6F2]">
      {/* GLOBAL BACKGROUND */}

      <AboutBackground />

      {/* SCROLL PROGRESS */}

      <div className="fixed left-0 top-0 z-50 h-0.5 w-full bg-white/10">
        <div
          className="h-full bg-[#9BADFF] transition-[width] duration-150 ease-out"
          style={{
            width: `${progress * 100}%`
          }}
        />
      </div>

      {/* CONTENT */}

      <main className="relative z-10 overflow-hidden">
        <AboutHero />

        <AboutTimeline />

        <AboutQuote />

        <AboutDirections />

        <AboutMarquee />

        <AboutWorkStyle />

        <AboutQuickInfo />
      </main>
    </div>
  );
};

export default About;
