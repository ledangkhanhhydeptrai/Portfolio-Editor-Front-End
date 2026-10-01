"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import HeaderAnimations from "./HeaderAnimations";
import HeaderBrand from "./HeaderBrand";
import HeaderStatus from "./HeaderStatus";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";

import ContactPopup from "@/components/popup/ContactPopup";

interface HeaderContentProps {
  pathname: string;
}

const HeaderContent: React.FC<HeaderContentProps> = ({ pathname }) => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const [contactOpen, setContactOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mobileSkillsOpen, setMobileSkillsOpen] = React.useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = React.useState(false);
  const [desktopSkillsOpen, setDesktopSkillsOpen] = React.useState(false);
  const [desktopProjectsOpen, setDesktopProjectsOpen] = React.useState(false);

  const desktopSkillsRef = React.useRef<HTMLDivElement>(null);
  const desktopProjectsRef = React.useRef<HTMLDivElement>(null);

  // SCROLL
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // BODY LOCK
  React.useEffect(() => {
    if (!mobileMenuOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // ESC
  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setMobileMenuOpen(false);
      setMobileSkillsOpen(false);
      setMobileProjectsOpen(false);
      setDesktopSkillsOpen(false);
      setDesktopProjectsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // CLICK OUTSIDE
  React.useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        desktopSkillsRef.current &&
        !desktopSkillsRef.current.contains(target)
      ) {
        setDesktopSkillsOpen(false);
      }

      if (
        desktopProjectsRef.current &&
        !desktopProjectsRef.current.contains(target)
      ) {
        setDesktopProjectsOpen(false);
      }
    };

    document.addEventListener("mousedown", onMouseDown);

    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSkillsOpen(false);
    setMobileProjectsOpen(false);
  };

  const handleMobileContact = () => {
    closeMobileMenu();
    setContactOpen(true);
  };

  // DESKTOP DROPDOWNS (chỉ mở một cái tại một thời điểm)
  const handleSkillsOpen = () => {
    setDesktopProjectsOpen(false);
    setDesktopSkillsOpen(true);
  };

  const handleSkillsToggle = () => {
    setDesktopProjectsOpen(false);
    setDesktopSkillsOpen((previous) => !previous);
  };

  const handleProjectsOpen = () => {
    setDesktopSkillsOpen(false);
    setDesktopProjectsOpen(true);
  };

  const handleProjectsToggle = () => {
    setDesktopSkillsOpen(false);
    setDesktopProjectsOpen((previous) => !previous);
  };

  // MOBILE ACCORDIONS
  const handleMobileSkillsToggle = () => {
    setMobileProjectsOpen(false);
    setMobileSkillsOpen((previous) => !previous);
  };

  const handleMobileProjectsToggle = () => {
    setMobileSkillsOpen(false);
    setMobileProjectsOpen((previous) => !previous);
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-300 ${
          scrolled
            ? "border-white/10 bg-[#0C0D10]/92 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "border-white/6 bg-[#0C0D10]/70"
        }`}
      >
        <HeaderAnimations />

        <div className="mx-auto flex h-18 w-full max-w-375 items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-14">
          <HeaderBrand onClick={closeMobileMenu} />

          <DesktopNavigation
            pathname={pathname}
            currentCategory={currentCategory}
            skillsOpen={desktopSkillsOpen}
            skillsRef={desktopSkillsRef}
            onSkillsOpen={handleSkillsOpen}
            onSkillsClose={() => setDesktopSkillsOpen(false)}
            onSkillsToggle={handleSkillsToggle}
            projectsOpen={desktopProjectsOpen}
            projectsRef={desktopProjectsRef}
            onProjectsOpen={handleProjectsOpen}
            onProjectsClose={() => setDesktopProjectsOpen(false)}
            onProjectsToggle={handleProjectsToggle}
          />

          <div className="flex items-center gap-2">
            <HeaderStatus />

            <div className="hidden items-center gap-1 lg:flex">
              <Link
                href="/login"
                className="flex h-9 items-center rounded-full px-4 text-xs font-medium text-[#B5B2A9] transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#7C93FF]"
              >
                Đăng nhập
              </Link>

              <Link
                href="/register"
                className="flex h-9 items-center rounded-full border border-white/12 px-4 text-xs font-medium text-[#F2F0EA] transition-colors hover:border-[#7C93FF]/50 hover:bg-[#7C93FF]/10 focus-visible:outline-2 focus-visible:outline-[#7C93FF]"
              >
                Đăng ký
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="hidden h-9 items-center gap-1.5 rounded-full bg-[#F2F0EA] px-4 text-xs font-semibold text-[#0C0D10] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C93FF] sm:flex"
            >
              Liên hệ
              <span aria-hidden="true">↗</span>
            </button>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((previous) => !previous)}
              className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#7C93FF] md:hidden ${
                mobileMenuOpen
                  ? "border-[#7C93FF]/40 bg-[#7C93FF]/10"
                  : "border-white/10 bg-white/3 hover:bg-white/6"
              }`}
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 h-px w-5 bg-[#F2F0EA] transition-all duration-300 ${
                    mobileMenuOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />

                <span
                  className={`absolute left-0 top-1.5 h-px w-3.5 bg-[#F2F0EA] transition-opacity duration-200 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />

                <span
                  className={`absolute left-0 h-px w-5 bg-[#F2F0EA] transition-all duration-300 ${
                    mobileMenuOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <MobileMenu
            pathname={pathname}
            currentCategory={currentCategory}
            skillsOpen={mobileSkillsOpen}
            onSkillsToggle={handleMobileSkillsToggle}
            projectsOpen={mobileProjectsOpen}
            onProjectsToggle={handleMobileProjectsToggle}
            onClose={closeMobileMenu}
            onContact={handleMobileContact}
          />
        )}
      </header>

      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Đóng menu"
          onClick={closeMobileMenu}
          className="fixed inset-0 z-40 bg-black/55 md:hidden"
        />
      )}

      <ContactPopup open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

export default HeaderContent;
