import React from "react";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

interface MainLayoutsProps {
  children: React.ReactNode;
}

export default function MainLayouts({ children }: MainLayoutsProps) {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F0EFEA]">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-40 h-125 w-125 rounded-full bg-[#5B7CFA]/5 blur-[160px]" />

        <div className="absolute -right-40 top-175 h-125 w-125 rounded-full bg-violet-500/5 blur-[160px]" />
      </div>

      {/* Header */}
      <Header />

      {/* Page Content */}
      <main className="min-h-screen overflow-hidden">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
