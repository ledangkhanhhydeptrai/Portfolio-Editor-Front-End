"use client";

import React from "react";
import Link from "next/link";

import { navItems } from "./headerData";

import DesktopSkillDropdown from "./DesktopSkillDropdown";
import DesktopProjectsDropdown from "./DesktopProjectsDropdown";

// =====================================================
// TYPES
// =====================================================

interface DesktopNavigationProps {
  pathname: string;
  currentCategory: string | null;

  // SKILLS
  skillsOpen: boolean;
  skillsRef: React.RefObject<HTMLDivElement | null>;
  onSkillsOpen: () => void;
  onSkillsClose: () => void;
  onSkillsToggle: () => void;

  // PROJECTS
  projectsOpen: boolean;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  onProjectsOpen: () => void;
  onProjectsClose: () => void;
  onProjectsToggle: () => void;
}

// =====================================================
// COMPONENT
// =====================================================

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  pathname,
  currentCategory,

  skillsOpen,
  skillsRef,
  onSkillsOpen,
  onSkillsClose,
  onSkillsToggle,

  projectsOpen,
  projectsRef,
  onProjectsOpen,
  onProjectsClose,
  onProjectsToggle
}) => {
  // =====================================================
  // ACTIVE
  // =====================================================

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const skillsActive =
    pathname === "/skills" || pathname.startsWith("/skills/");

  // =====================================================
  // NORMAL NAV LINK
  // =====================================================

  const renderNavLink = (item: { label: string; href: string }) => {
    const active = isActive(item.href);

    return (
      <Link
        key={item.href}
        href={item.href}
        className={`group relative flex items-center gap-2 overflow-hidden rounded-lg px-3.5 py-2 text-[11px] font-medium transition-all duration-300 ${
          active
            ? "bg-linear-to-r from-[#5B7CFA]/20 to-[#8EA5FF]/10 text-[#EDECE8] shadow-[inset_0_0_0_1px_rgba(91,124,250,0.25)]"
            : "text-[#8A887F] hover:bg-white/5 hover:text-[#EDECE8]"
        }`}
      >
        {/* SHIMMER */}

        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/6 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

        {/* LABEL */}

        <span className="relative">{item.label}</span>

        {/* ACTIVE DOT */}

        <span
          className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-[#5B7CFA] shadow-[0_0_8px_#5B7CFA] transition-all duration-300 ${
            active ? "w-3 opacity-100" : "w-0 opacity-0"
          }`}
        />
      </Link>
    );
  };

  // =====================================================
  // NAV ITEMS
  // =====================================================

  /*
   * navItems hiện tại:
   *
   * Trang chủ
   * Giới thiệu
   * Dự án
   * Kinh nghiệm
   *
   * Skills được insert riêng.
   * Projects bây giờ cũng được insert riêng.
   *
   * Vì vậy loại /projects khỏi normal links.
   */

  const beforeDropdownItems = navItems.filter(
    (item) => item.href === "/" || item.href === "/about"
  );

  const afterDropdownItems = navItems.filter(
    (item) =>
      item.href !== "/" && item.href !== "/about" && item.href !== "/projects"
  );

  // =====================================================
  // UI
  // =====================================================

  return (
    <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-xl border border-white/7 bg-white/3 p-1 md:flex">
      {/* HOME + ABOUT */}

      {beforeDropdownItems.map(renderNavLink)}

      {/* =================================================
          SKILLS
      ================================================= */}

      <DesktopSkillDropdown
        open={skillsOpen}
        skillsActive={skillsActive}
        currentCategory={currentCategory}
        containerRef={skillsRef}
        onOpen={onSkillsOpen}
        onClose={onSkillsClose}
        onToggle={onSkillsToggle}
      />

      {/* =================================================
          PROJECTS
      ================================================= */}

      <DesktopProjectsDropdown
        pathname={pathname}
        currentCategory={currentCategory}
        open={projectsOpen}
        dropdownRef={projectsRef}
        onOpen={onProjectsOpen}
        onClose={onProjectsClose}
        onToggle={onProjectsToggle}
      />

      {/* =================================================
          EXPERIENCE + OTHER NORMAL ITEMS
      ================================================= */}

      {afterDropdownItems.map(renderNavLink)}
    </nav>
  );
};

export default DesktopNavigation;
