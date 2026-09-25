"use client";

import HeroPage from "@/app/hero/page";
import React from "react";

interface HeroPopupProps {
  open: boolean;
  onClose: () => void;
}

const HeroPopup: React.FC<HeroPopupProps> = ({ open, onClose }) => {
  React.useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const originalHtmlOverflow = document.documentElement.style.overflow;

    const originalBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;

      document.body.style.overflow = originalBodyOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-100 h-dvh w-screen overflow-hidden bg-[#0F1016]">
      {/* ================================================
          GLOBAL BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-[#171820] via-[#12131A] to-[#0F1016]" />

        <div className="absolute -top-80 left-1/2 h-175 w-175 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-[190px]" />

        <div className="absolute -left-50 top-60 h-150 w-150 rounded-full bg-blue-400/8 blur-[180px]" />

        <div className="absolute -right-50 top-120 h-150 w-150 rounded-full bg-violet-400/8 blur-[180px]" />

        <div className="absolute left-1/2 top-150 h-125 w-200 -translate-x-1/2 rounded-full bg-indigo-400/5 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      {/* ================================================
          TOP BAR
      ================================================= */}

      <div className="pointer-events-none absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 lg:px-10">
        <div className="pointer-events-auto flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />

          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-slate-500">
            Profile Preview
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#1B1E29]/90 text-slate-400 shadow-xl backdrop-blur-xl transition-all duration-300 hover:rotate-90 hover:border-indigo-300/30 hover:bg-[#252936] hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* ================================================
          HERO
      ================================================= */}

      <div className="relative z-10 h-full w-full overflow-hidden">
        <HeroPage />
      </div>
    </div>
  );
};

export default HeroPopup;
