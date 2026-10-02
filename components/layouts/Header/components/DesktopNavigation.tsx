"use client";

import React from "react";
import Link from "next/link";

import { navItems } from "./headerData";

import DesktopSkillDropdown from "./DesktopSkillDropdown";
import DesktopProjectsDropdown from "./DesktopProjectsDropdown";

interface DesktopNavigationProps {
  pathname: string;
  currentCategory: string | null;

  skillsOpen: boolean;
  skillsRef: React.RefObject<HTMLDivElement | null>;
  onSkillsOpen: () => void;
  onSkillsClose: () => void;
  onSkillsToggle: () => void;

  projectsOpen: boolean;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  onProjectsOpen: () => void;
  onProjectsClose: () => void;
  onProjectsToggle: () => void;
}

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
  onProjectsToggle,
}) => {
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const skillsActive = isActive("/skills");

  const renderNavLink = (item: {
    label: string;
    href: string;
  }) => {
    const active = isActive(item.href);

    return (
      <Link
        key={item.href}
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={`
          relative flex h-9 shrink-0 items-center rounded-xl px-3
          text-[13px] font-medium
          transition-all duration-200
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#8EA2FF]/50
          ${
            active
              ? "bg-[#778DFF]/12 text-[#F4F5FF] shadow-[inset_0_0_0_1px_rgba(142,162,255,0.22)]"
              : "text-white/55 hover:bg-white/4.5 hover:text-white/90"
          }
        `}
      >
        {item.label}

        {active && (
          <span
            className="
              absolute right-3 bottom-1 left-3
              h-px rounded-full
              bg-[#8EA2FF]/70
            "
          />
        )}
      </Link>
    );
  };

  const before = navItems.filter(
    (item) =>
      item.href === "/" ||
      item.href === "/about",
  );

  const after = navItems.filter(
    (item) =>
      item.href !== "/" &&
      item.href !== "/about" &&
      item.href !== "/projects",
  );

  return (
    <nav
      aria-label="Điều hướng chính"
      className="
        absolute left-1/2 top-1/2
        hidden -translate-x-1/2 -translate-y-1/2
        items-center gap-0.5
        whitespace-nowrap
        md:flex
      "
    >
      {before.map(renderNavLink)}

      <DesktopSkillDropdown
        open={skillsOpen}
        skillsActive={skillsActive}
        currentCategory={currentCategory}
        containerRef={skillsRef}
        onOpen={onSkillsOpen}
        onClose={onSkillsClose}
        onToggle={onSkillsToggle}
      />

      <DesktopProjectsDropdown
        pathname={pathname}
        currentCategory={currentCategory}
        open={projectsOpen}
        dropdownRef={projectsRef}
        onOpen={onProjectsOpen}
        onClose={onProjectsClose}
        onToggle={onProjectsToggle}
      />

      {after.map(renderNavLink)}
    </nav>
  );
};

export default DesktopNavigation;