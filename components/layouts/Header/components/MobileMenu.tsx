"use client";

import React from "react";
import Link from "next/link";

interface MobileMenuProps {
  pathname: string;
  currentCategory: string | null;

  skillsOpen: boolean;
  onSkillsToggle: () => void;

  projectsOpen: boolean;
  onProjectsToggle: () => void;

  onClose: () => void;
  onContact: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  pathname,
  currentCategory,
  skillsOpen,
  onSkillsToggle,
  projectsOpen,
  onProjectsToggle,
  onClose,
  onContact
}) => {
  // =====================================================
  // ACTIVE
  // =====================================================

  const isHome = pathname === "/" && !currentCategory;

  const isAbout = pathname === "/about";

  const isSkills = pathname === "/skills";

  const isProjects = pathname === "/projects";

  const isExperience = pathname === "/experience";

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="absolute left-0 top-full z-50 w-full border-b border-white/8 bg-[#0B0B0D]/98 px-4 pb-6 pt-4 shadow-[0_30px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:hidden">
      {/* ================================================= */}
      {/* NAVIGATION */}
      {/* ================================================= */}

      <nav className="space-y-1">
        {/* HOME */}

        <Link
          href="/"
          onClick={onClose}
          className={`group flex min-h-14 items-center justify-between rounded-xl border px-4 transition-all duration-300 ${
            isHome
              ? "border-[#5B7CFA]/30 bg-[#5B7CFA]/8 text-white"
              : "border-transparent text-white/55 hover:border-white/8 hover:bg-white/3 hover:text-white"
          }`}
        >
          <div className="flex items-center gap-5">
            <span
              className={`text-[9px] font-medium ${
                isHome ? "text-[#8EA5FF]" : "text-white/20"
              }`}
            >
              01
            </span>

            <span className="text-sm font-semibold">Trang chủ</span>
          </div>

          <span
            className={`text-xs transition-transform duration-300 group-hover:translate-x-1 ${
              isHome ? "text-[#8EA5FF]" : "text-white/30"
            }`}
          >
            →
          </span>
        </Link>

        {/* ABOUT */}

        <Link
          href="/about"
          onClick={onClose}
          className={`group flex min-h-14 items-center justify-between rounded-xl border px-4 transition-all duration-300 ${
            isAbout
              ? "border-[#5B7CFA]/30 bg-[#5B7CFA]/8 text-white"
              : "border-transparent text-white/55 hover:border-white/8 hover:bg-white/3 hover:text-white"
          }`}
        >
          <div className="flex items-center gap-5">
            <span
              className={`text-[9px] font-medium ${
                isAbout ? "text-[#8EA5FF]" : "text-white/20"
              }`}
            >
              02
            </span>

            <span className="text-sm font-semibold">Giới thiệu</span>
          </div>

          <span
            className={`text-xs transition-transform duration-300 group-hover:translate-x-1 ${
              isAbout ? "text-[#8EA5FF]" : "text-white/30"
            }`}
          >
            →
          </span>
        </Link>

        {/* ================================================= */}
        {/* SKILLS */}
        {/* ================================================= */}

        <div>
          <button
            type="button"
            onClick={onSkillsToggle}
            className={`group flex min-h-14 w-full items-center justify-between rounded-xl border px-4 text-left transition-all duration-300 ${
              isSkills || skillsOpen
                ? "border-[#5B7CFA]/20 bg-[#5B7CFA]/5 text-white"
                : "border-transparent text-white/55 hover:border-white/8 hover:bg-white/3 hover:text-white"
            }`}
          >
            <div className="flex items-center gap-5">
              <span
                className={`text-[9px] font-medium ${
                  isSkills || skillsOpen ? "text-[#8EA5FF]" : "text-white/20"
                }`}
              >
                03
              </span>

              <span className="text-sm font-semibold">Kỹ năng</span>
            </div>

            <span
              className={`text-xs transition-transform duration-300 ${
                skillsOpen ? "rotate-180 text-[#8EA5FF]" : "text-white/30"
              }`}
            >
              ↓
            </span>
          </button>

          {skillsOpen && (
            <div className="mx-4 mb-2 mt-1 overflow-hidden rounded-xl border border-white/7 bg-white/2">
              <Link
                href="/skills?category=DEVELOPMENT"
                onClick={onClose}
                className="flex items-center justify-between border-b border-white/6 px-4 py-3 text-xs text-white/45 transition hover:bg-white/4 hover:text-white"
              >
                <span>Development</span>

                <span className="text-white/20">→</span>
              </Link>

              <Link
                href="/skills?category=VIDEO_EDITING"
                onClick={onClose}
                className="flex items-center justify-between border-b border-white/6 px-4 py-3 text-xs text-white/45 transition hover:bg-white/4 hover:text-white"
              >
                <span>Video Editing</span>

                <span className="text-white/20">→</span>
              </Link>

              <Link
                href="/skills?category=DRIVING"
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3 text-xs text-white/45 transition hover:bg-white/4 hover:text-white"
              >
                <span>Driving</span>

                <span className="text-white/20">→</span>
              </Link>
            </div>
          )}
        </div>

        {/* ================================================= */}
        {/* PROJECTS */}
        {/* ================================================= */}

        <div>
          <button
            type="button"
            onClick={onProjectsToggle}
            className={`group flex min-h-14 w-full items-center justify-between rounded-xl border px-4 text-left transition-all duration-300 ${
              isProjects || projectsOpen
                ? "border-[#5B7CFA]/20 bg-[#5B7CFA]/5 text-white"
                : "border-transparent text-white/55 hover:border-white/8 hover:bg-white/3 hover:text-white"
            }`}
          >
            <div className="flex items-center gap-5">
              <span
                className={`text-[9px] font-medium ${
                  isProjects || projectsOpen
                    ? "text-[#8EA5FF]"
                    : "text-white/20"
                }`}
              >
                04
              </span>

              <span className="text-sm font-semibold">Dự án</span>
            </div>

            <span
              className={`text-xs transition-transform duration-300 ${
                projectsOpen ? "rotate-180 text-[#8EA5FF]" : "text-white/30"
              }`}
            >
              ↓
            </span>
          </button>

          {projectsOpen && (
            <div className="mx-4 mb-2 mt-1 overflow-hidden rounded-xl border border-white/7 bg-white/2">
              <Link
                href="/projects?category=DEVELOPMENT"
                onClick={onClose}
                className="flex items-center justify-between border-b border-white/6 px-4 py-3 text-xs text-white/45 transition hover:bg-white/4 hover:text-white"
              >
                <span>Development</span>

                <span className="text-white/20">→</span>
              </Link>

              <Link
                href="/projects?category=VIDEO_EDITING"
                onClick={onClose}
                className="flex items-center justify-between border-b border-white/6 px-4 py-3 text-xs text-white/45 transition hover:bg-white/4 hover:text-white"
              >
                <span>Video Editing</span>

                <span className="text-white/20">→</span>
              </Link>

              <Link
                href="/projects?category=DRIVING"
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3 text-xs text-white/45 transition hover:bg-white/4 hover:text-white"
              >
                <span>Driving</span>

                <span className="text-white/20">→</span>
              </Link>
            </div>
          )}
        </div>

        {/* EXPERIENCE */}

        <Link
          href="/experience"
          onClick={onClose}
          className={`group flex min-h-14 items-center justify-between rounded-xl border px-4 transition-all duration-300 ${
            isExperience
              ? "border-[#5B7CFA]/30 bg-[#5B7CFA]/8 text-white"
              : "border-transparent text-white/55 hover:border-white/8 hover:bg-white/3 hover:text-white"
          }`}
        >
          <div className="flex items-center gap-5">
            <span
              className={`text-[9px] font-medium ${
                isExperience ? "text-[#8EA5FF]" : "text-white/20"
              }`}
            >
              05
            </span>

            <span className="text-sm font-semibold">Kinh nghiệm</span>
          </div>

          <span
            className={`text-xs transition-transform duration-300 group-hover:translate-x-1 ${
              isExperience ? "text-[#8EA5FF]" : "text-white/30"
            }`}
          >
            →
          </span>
        </Link>
      </nav>

      {/* ================================================= */}
      {/* DIVIDER */}
      {/* ================================================= */}

      <div className="my-4 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

      {/* ================================================= */}
      {/* AUTH */}
      {/* ================================================= */}

      <div className="grid grid-cols-2 gap-3">
        {/* LOGIN */}

        <Link
          href="/login"
          onClick={onClose}
          className="group relative flex h-13 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/3 text-xs font-semibold text-white/70 transition-all duration-300 hover:border-[#8EA5FF]/35 hover:bg-[#8EA5FF]/8 hover:text-white active:scale-[0.98]"
        >
          <span className="pointer-events-none absolute inset-0 translate-y-full bg-linear-to-t from-[#5B7CFA]/10 to-transparent transition-transform duration-300 group-hover:translate-y-0" />

          <span className="relative z-10">Đăng nhập</span>
        </Link>

        {/* REGISTER */}

        <Link
          href="/register"
          onClick={onClose}
          className="group relative flex h-13 items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#8EA5FF] text-xs font-semibold text-[#0B0B0D] shadow-[0_0_0_0_rgba(142,165,255,0)] transition-all duration-300 hover:bg-[#A7B7FF] hover:shadow-[0_4px_22px_-4px_rgba(142,165,255,0.45)] active:scale-[0.98]"
        >
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

          <span className="relative z-10">Đăng ký</span>

          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>

      {/* ================================================= */}
      {/* CONTACT */}
      {/* ================================================= */}

      <button
        type="button"
        onClick={onContact}
        className="group relative mt-3 flex h-14 w-full items-center justify-between overflow-hidden rounded-xl bg-[#EDECE8] px-5 text-xs font-semibold text-[#0B0B0D] transition-all duration-300 hover:bg-white active:scale-[0.99]"
      >
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-[#5B7CFA]/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

        <span className="relative z-10">Liên hệ</span>

        <span className="relative z-10 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          ↗
        </span>
      </button>

      {/* ================================================= */}
      {/* BOTTOM */}
      {/* ================================================= */}

      <div className="mt-5 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

          <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-white/25">
            Sẵn sàng nhận cơ hội mới
          </span>
        </div>

        <span className="text-[8px] tracking-[0.2em] text-white/15">2026</span>
      </div>
    </div>
  );
};

export default MobileMenu;
