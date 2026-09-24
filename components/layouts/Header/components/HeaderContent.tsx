"use client";

import React from "react";
import Link from "next/link";

import { useSearchParams } from "next/navigation";

import HeaderAnimations from "./HeaderAnimations";
import HeaderBrand from "./HeaderBrand";
import HeaderStatus from "./HeaderStatus";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";

interface HeaderContentProps {
  pathname: string;
}

const HeaderContent: React.FC<HeaderContentProps> = ({ pathname }) => {
  const searchParams = useSearchParams();

  const [scrolled, setScrolled] = React.useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const [mobileSkillsOpen, setMobileSkillsOpen] = React.useState(false);

  const [desktopSkillsOpen, setDesktopSkillsOpen] = React.useState(false);

  const desktopSkillsRef = React.useRef<HTMLDivElement>(null);

  const currentCategory = searchParams.get("category");

  // =====================================================
  // SCROLL
  // =====================================================

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // =====================================================
  // BODY LOCK
  // =====================================================

  React.useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";

      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // =====================================================
  // ESC
  // =====================================================

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);

        setMobileSkillsOpen(false);

        setDesktopSkillsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // =====================================================
  // CLICK OUTSIDE
  // =====================================================

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopSkillsRef.current &&
        !desktopSkillsRef.current.contains(event.target as Node)
      ) {
        setDesktopSkillsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // =====================================================
  // CLOSE MOBILE
  // =====================================================

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);

    setMobileSkillsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-2xl transition-all duration-500 ${
          scrolled
            ? "border-white/9 bg-[#0B0B0D]/95 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            : "border-white/7 bg-[#0B0B0D]/75"
        }`}
      >
        <HeaderAnimations />

        {/* TOP LIGHT */}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden bg-linear-to-r from-transparent via-[#5B7CFA]/60 to-transparent">
          <div
            className="h-full w-1/3 bg-linear-to-r from-transparent via-[#8EA5FF] to-[#B9C6FF]"
            style={{
              animation: "shimmerLine 5s linear infinite"
            }}
          />
        </div>

        {/* DOTS */}

        <div
          className="pointer-events-none absolute left-[6%] top-1/2 hidden h-1 w-1 -translate-y-1/2 rounded-full bg-[#5B7CFA] xl:block"
          style={{
            animation: "floatDot 4s ease-in-out infinite"
          }}
        />

        <div
          className="pointer-events-none absolute right-[6%] top-1/2 hidden h-1 w-1 -translate-y-1/2 rounded-full bg-[#8EA5FF] xl:block"
          style={{
            animation: "floatDot 4s ease-in-out infinite 1.5s"
          }}
        />

        {/* CONTENT */}

        <div className="mx-auto flex h-18 w-full max-w-375 items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-14">
          <HeaderBrand onClick={closeMobileMenu} />

          <DesktopNavigation
            pathname={pathname}
            currentCategory={currentCategory}
            skillsOpen={desktopSkillsOpen}
            skillsRef={desktopSkillsRef}
            onSkillsOpen={() => setDesktopSkillsOpen(true)}
            onSkillsClose={() => setDesktopSkillsOpen(false)}
            onSkillsToggle={() => setDesktopSkillsOpen((previous) => !previous)}
          />

          {/* RIGHT */}

          <div className="flex items-center gap-3">
            <HeaderStatus />

            <div className="hidden h-7 w-px bg-linear-to-b from-transparent via-white/12 to-transparent lg:block" />

            <Link
              href="/contact"
              className="group relative hidden items-center gap-2 overflow-hidden rounded-lg bg-[#EDECE8] px-4 py-2 text-[11px] font-semibold text-[#0B0B0D] shadow-[0_0_0_0_rgba(91,124,250,0)] transition-all duration-300 hover:scale-[1.03] hover:bg-white hover:shadow-[0_4px_20px_-2px_rgba(91,124,250,0.5)] sm:flex"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-[#5B7CFA]/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

              <span className="relative z-10">Liên hệ</span>

              <span className="relative z-10 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </Link>

            {/* HAMBURGER */}

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((previous) => !previous)}
              className={`relative flex h-10 w-10 items-center justify-center rounded-xl border transition duration-300 md:hidden ${
                mobileMenuOpen
                  ? "border-[#5B7CFA]/40 bg-[#5B7CFA]/10"
                  : "border-white/10 bg-white/3 hover:border-white/20 hover:bg-white/6"
              }`}
            >
              <div className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0.5 h-px bg-[#EDECE8] transition-all duration-300 ${
                    mobileMenuOpen ? "top-2 w-5 rotate-45" : "w-5"
                  }`}
                />

                <span
                  className={`absolute left-0 top-2 h-px bg-[#EDECE8] transition-all duration-300 ${
                    mobileMenuOpen ? "w-0 opacity-0" : "w-3.5 opacity-100"
                  }`}
                />

                <span
                  className={`absolute bottom-0.5 left-0 h-px bg-[#EDECE8] transition-all duration-300 ${
                    mobileMenuOpen ? "bottom-1.5 w-5 -rotate-45" : "w-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE */}

        {mobileMenuOpen && (
          <MobileMenu
            pathname={pathname}
            currentCategory={currentCategory}
            skillsOpen={mobileSkillsOpen}
            onSkillsToggle={() => setMobileSkillsOpen((previous) => !previous)}
            onClose={closeMobileMenu}
          />
        )}
      </header>

      {/* MOBILE BACKDROP */}

      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Đóng menu"
          onClick={closeMobileMenu}
          className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px] md:hidden"
        />
      )}
    </>
  );
};

export default HeaderContent;
