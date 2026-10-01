"use client";

import React from "react";
import Link from "next/link";

import { navItems } from "./headerData";


import DesktopSkillDropdown from "./DesktopSkillDropdown";
import DesktopProjectsDropdown from "./DesktopProjectsDropdown";
import { navPill } from "./Headerstyles";

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
  onProjectsToggle
}) => {
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const skillsActive = isActive("/skills");

  const renderNavLink = (item: { label: string; href: string }) => (
    <Link
      key={item.href}
      href={item.href}
      aria-current={isActive(item.href) ? "page" : undefined}
      className={navPill(isActive(item.href))}
    >
      {item.label}
    </Link>
  );

  const before = navItems.filter(
    (item) => item.href === "/" || item.href === "/about"
  );

  // "Dự án" đã có dropdown riêng nên loại khỏi danh sách link thường
  const after = navItems.filter(
    (item) =>
      item.href !== "/" && item.href !== "/about" && item.href !== "/projects"
  );

  return (
    <nav
      aria-label="Điều hướng chính"
      className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-full border border-white/8 bg-white/3 p-1 md:flex"
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
