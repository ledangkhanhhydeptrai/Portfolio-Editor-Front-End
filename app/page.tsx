"use client";

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

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0B0D] text-[#F0EFEA] selection:bg-[#5B7CFA] selection:text-white">
      <MouseSpotlight />
      <style jsx global>{`
        @keyframes kh-float-glow {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.55;
          }
          50% {
            transform: translate3d(-70px, 45px, 0) scale(1.18);
            opacity: 0.8;
          }
        }
        @keyframes kh-shimmer {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(220%);
          }
        }
        @keyframes kh-pulse-soft {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.06);
          }
        }
        .kh-glow {
          animation: kh-float-glow 6s ease-in-out infinite;
        }
        .kh-shimmer::after {
          content: "";
          position: absolute;
          inset: 0;
          width: 35%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.045),
            transparent
          );
          transform: translateX(-120%);
          animation: kh-shimmer 6s ease-in-out infinite;
          pointer-events: none;
        }
        .kh-pulse-soft {
          animation: kh-pulse-soft 4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .kh-glow,
          .kh-shimmer::after,
          .kh-pulse-soft {
            animation: none !important;
          }
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 top-40 h-125 w-125 rounded-full bg-[#5B7CFA]/5 blur-[160px]" />
        <div className="absolute -right-40 top-175 h-125 w-125 rounded-full bg-violet-500/5 blur-[160px]" />
      </div>

      <Header />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ShowreelSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
