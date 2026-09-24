import React from "react";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

interface MainLayoutsProps {
  children: React.ReactNode;
}

export default function MainLayouts({ children }: MainLayoutsProps) {
  return (
    <div className="relative min-h-screen bg-[#111218] text-[#F0EFEA]">
      {/* ================================================
          GLOBAL BACKGROUND
      ================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Base */}

        <div className="absolute inset-0 bg-linear-to-b from-[#171820] via-[#12131A] to-[#0F1016]" />

        {/* Top center light */}

        <div className="absolute -top-80 left-1/2 h-175 w-175 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-[190px]" />

        {/* Left */}

        <div className="absolute -left-50 top-60 h-150 w-150 rounded-full bg-blue-400/8 blur-[180px]" />

        {/* Right */}

        <div className="absolute -right-50 top-120 h-150 w-150 rounded-full bg-violet-400/8 blur-[180px]" />

        {/* Center */}

        <div className="absolute left-1/2 top-150 h-125 w-200 -translate-x-1/2 rounded-full bg-indigo-400/5 blur-[180px]" />

        {/* Bottom */}

        <div className="absolute -bottom-60 left-1/3 h-150 w-150 rounded-full bg-blue-500/7 blur-[180px]" />

        {/* Grid */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.045)_1px,transparent_0)] bg-size-[32px_32px]" />

        {/* Soft center highlight */}

        <div className="absolute inset-x-0 top-0 h-200 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_65%)]" />
      </div>

      {/* ================================================
          HEADER
      ================================================= */}

      <Header />

      {/* ================================================
          PAGE
      ================================================= */}

      <main className="relative min-h-screen overflow-hidden">{children}</main>

      {/* ================================================
          FOOTER
      ================================================= */}

      <Footer />
    </div>
  );
}
