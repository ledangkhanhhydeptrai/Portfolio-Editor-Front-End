"use client";

import React, { Suspense } from "react";

import { usePathname } from "next/navigation";

import HeaderContent from "./components/HeaderContent";

// =====================================================
// FALLBACK
// =====================================================

const HeaderFallback: React.FC = () => {
  return (
    <header className="fixed left-0 top-0 z-50 h-18 w-full border-b border-white/7 bg-[#0B0B0D]/95 backdrop-blur-2xl" />
  );
};

// =====================================================
// HEADER
// =====================================================

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <Suspense fallback={<HeaderFallback />}>
      <HeaderContent key={pathname} pathname={pathname} />
    </Suspense>
  );
};

export default Header;
