"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import HeaderAnimations from "./HeaderAnimations";
import HeaderBrand from "./HeaderBrand";
import HeaderStatus from "./HeaderStatus";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";

import AccountDropdown from "./account/AccountDropdown";

import ContactPopup from "@/components/popup/ContactPopup";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { createLogoutRequest } from "@/features/auth/authSlice";

interface HeaderContentProps {
  pathname: string;
}

function useHydrated() {
  return React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

const HeaderContent: React.FC<HeaderContentProps> = ({ pathname }) => {
  const hydrated = useHydrated();
  const dispatch = useAppDispatch();
  const { user, authReady } = useAppSelector((state) => state.auth);
  const username = user ? user.username : null;
  const { data } = useAppSelector((state) => state.curriculumVitae);
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const [desktopCVOpen, setDesktopCVOpen] = React.useState(false);
  // STATES
  const [contactOpen, setContactOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mobileSkillsOpen, setMobileSkillsOpen] = React.useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = React.useState(false);
  const [desktopSkillsOpen, setDesktopSkillsOpen] = React.useState(false);
  const [desktopProjectsOpen, setDesktopProjectsOpen] = React.useState(false);
  const [accountOpen, setAccountOpen] = React.useState(false);

  // REFS
  const desktopSkillsRef = React.useRef<HTMLDivElement>(null);
  const desktopProjectsRef = React.useRef<HTMLDivElement>(null);
  const desktopCVRef = React.useRef<HTMLDivElement>(null);
  const accountRef = React.useRef<HTMLDivElement>(null);
  // SCROLL
  const progressRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      setScrolled(window.scrollY > 12);

      // Thanh tiến độ cuộn: cập nhật trực tiếp qua ref, không gây re-render
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
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
      setDesktopCVOpen(false);
      setAccountOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // CLICK OUTSIDE
  React.useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (desktopSkillsRef.current && !desktopSkillsRef.current.contains(target)) {
        setDesktopSkillsOpen(false);
      }
      if (desktopProjectsRef.current && !desktopProjectsRef.current.contains(target)) {
        setDesktopProjectsOpen(false);
      }
      if (desktopCVRef.current && !desktopCVRef.current.contains(target)) {
        setDesktopCVOpen(false);
      }
      if (accountRef.current && !accountRef.current.contains(target)) {
        setAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  // MOBILE
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSkillsOpen(false);
    setMobileProjectsOpen(false);
  };

  const handleMobileContact = () => {
    closeMobileMenu();
    setContactOpen(true);
  };

  const handleMobileSkillsToggle = () => {
    setMobileProjectsOpen(false);
    setMobileSkillsOpen((previous) => !previous);
  };

  const handleMobileProjectsToggle = () => {
    setMobileSkillsOpen(false);
    setMobileProjectsOpen((previous) => !previous);
  };

  // DESKTOP
  const handleSkillsOpen = () => {
    setDesktopProjectsOpen(false);
    setAccountOpen(false);
    setDesktopSkillsOpen(true);
  };

  const handleSkillsToggle = () => {
    setDesktopProjectsOpen(false);
    setAccountOpen(false);
    setDesktopSkillsOpen((previous) => !previous);
  };

  const handleProjectsOpen = () => {
    setDesktopSkillsOpen(false);
    setAccountOpen(false);
    setDesktopProjectsOpen(true);
  };

  const handleProjectsToggle = () => {
    setDesktopSkillsOpen(false);
    setAccountOpen(false);
    setDesktopProjectsOpen((previous) => !previous);
  };
  const handleCVOpen = () => {
    setDesktopSkillsOpen(false);
    setDesktopProjectsOpen(false);
    setAccountOpen(false);
    setDesktopCVOpen(true);
  };

  const handleCVToggle = () => {
    setDesktopSkillsOpen(false);
    setDesktopProjectsOpen(false);
    setAccountOpen(false);
    setDesktopCVOpen((previous) => !previous);
  };
  // ACCOUNT
  const handleAccountToggle = () => {
    setDesktopSkillsOpen(false);
    setDesktopProjectsOpen(false);
    setAccountOpen((previous) => !previous);
  };

  const handleLogout = () => {
    setAccountOpen(false);
    closeMobileMenu();
    dispatch(createLogoutRequest());
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-300 motion-reduce:transition-none ${
          scrolled
            ? "border-b border-white/10 bg-[#0B0D12]/88 shadow-[0_14px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-2xl backdrop-saturate-150"
            : "border-b border-white/5 bg-[#0B0D12]/60 backdrop-blur-xl backdrop-saturate-150"
        }`}
      >
        <HeaderAnimations />

        {/* Thanh tiến độ cuộn trang */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 left-0 h-px overflow-hidden"
        >
          <span
            ref={progressRef}
            className="block h-full w-full origin-left scale-x-0 bg-[#8EA2FF] will-change-transform"
          />
        </span>

        {/*
          LAYOUT: brand | nav (flex-1, nằm giữa phần còn lại) | actions
          Nav KHÔNG còn absolute nên không thể đè lên Status / Account nữa.
        */}
        <div className="relative mx-auto flex h-16 w-full max-w-375 items-center gap-3 px-5 sm:px-7 lg:gap-4 lg:px-8 xl:gap-6">
          {/* BRAND */}
          <div className="relative z-10 shrink-0">
            <HeaderBrand onClick={closeMobileMenu} />
          </div>

          {/* DESKTOP NAV: chiếm phần trống ở giữa, co lại khi hết chỗ */}
          <div className="hidden min-w-0 flex-1 justify-center lg:flex">
            <div className="flex max-w-full items-center rounded-full border border-white/8 bg-white/3 px-1.5 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <DesktopNavigation
                curriculums={data}
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
                cvOpen={desktopCVOpen}
                cvRef={desktopCVRef}
                onCVOpen={handleCVOpen}
                onCVClose={() => setDesktopCVOpen(false)}
                onCVToggle={handleCVToggle}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative z-10 ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
            {/* Status chỉ hiện khi màn đủ rộng */}
            <div className="hidden 2xl:block">
              <HeaderStatus />
            </div>

            {/* Divider ngăn nhóm điều hướng và nhóm tài khoản */}
            <span aria-hidden="true" className="mx-1 hidden h-5 w-px bg-white/10 lg:block" />

            {/* AUTH DESKTOP */}
            {!hydrated || !authReady ? (
              <div className="hidden h-9 w-28 lg:block" />
            ) : username ? (
              <AccountDropdown
                username={username}
                open={accountOpen}
                accountRef={accountRef}
                onToggle={handleAccountToggle}
                onClose={() => setAccountOpen(false)}
                onLogout={handleLogout}
              />
            ) : (
              <div className="hidden items-center gap-1.5 lg:flex">
                <Link
                  href="/login"
                  className="flex h-9 items-center rounded-full px-3.5 text-xs font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-[#8EA2FF]/50 focus-visible:outline-none"
                >
                  Đăng nhập
                </Link>

                <Link
                  href="/register"
                  className="flex h-9 items-center rounded-full border border-white/12 px-3.5 text-xs font-medium text-white/85 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-[#8EA2FF]/50 focus-visible:outline-none"
                >
                  Đăng ký
                </Link>
              </div>
            )}

            {/* CONTACT */}
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="group hidden h-9 items-center gap-2 rounded-full bg-[#F2F0EA] pr-1.5 pl-4 text-xs font-semibold text-[#111318] shadow-[0_0_0_1px_rgba(255,255,255,0.4),0_6px_20px_-6px_rgba(142,162,255,0.45)] transition-all duration-200 hover:bg-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.6),0_8px_26px_-6px_rgba(142,162,255,0.7)] focus-visible:ring-2 focus-visible:ring-[#8EA2FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D12] focus-visible:outline-none motion-reduce:transition-none sm:flex"
            >
              Liên hệ
              <span
                aria-hidden="true"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#111318] text-[11px] text-[#F2F0EA] transition-transform duration-200 group-hover:rotate-45 motion-reduce:transition-none"
              >
                ↗
              </span>
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((previous) => !previous)}
              className={`relative flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#8EA2FF]/50 focus-visible:outline-none lg:hidden ${
                mobileMenuOpen
                  ? "border-[#8EA2FF]/30 bg-[#8EA2FF]/10"
                  : "border-white/10 bg-white/3 hover:bg-white/6"
              }`}
            >
              <span className="relative block h-3.5 w-4.5">
                <span
                  className={`absolute left-0 h-px w-4.5 bg-[#F2F0EA] transition-all duration-300 ${
                    mobileMenuOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute top-1.5 left-0 h-px w-3 bg-[#F2F0EA] transition-opacity duration-200 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-4.5 bg-[#F2F0EA] transition-all duration-300 ${
                    mobileMenuOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>

          {/* MOBILE MENU */}
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
              onLogout={handleLogout}
              hydrated={hydrated}
              authReady={authReady}
              username={username}
            />
          )}
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Đóng menu"
          onClick={closeMobileMenu}
          className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px] lg:hidden"
        />
      )}

      {/* CONTACT POPUP */}
      <ContactPopup open={contactOpen} onClose={() => setContactOpen(false)} />

      <style jsx global>{`
        @keyframes accountDropdownIn {
          from {
            opacity: 0;
            transform: translateY(-6px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default HeaderContent;
