"use client";

import React from "react";

import { skillItems } from "./headerData";
import NavDropdown from "./Navdropdown";
import { projectItems } from "./Headerprojects";


interface DesktopProjectsDropdownProps {
  pathname: string;
  currentCategory: string | null;
  open: boolean;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

const DesktopProjectsDropdown: React.FC<DesktopProjectsDropdownProps> = ({
  pathname,
  currentCategory,
  open,
  dropdownRef,
  onOpen,
  onClose,
  onToggle
}) => {
  const projectsActive =
    pathname === "/projects" || pathname.startsWith("/projects/");

  return (
    <NavDropdown
      label="Dự án"
      active={projectsActive}
      open={open}
      containerRef={dropdownRef}
      onOpen={onOpen}
      onClose={onClose}
      onToggle={onToggle}
      items={projectItems.map((item) => ({
        label: item.label,
        description: item.description,
        href: item.href,
        // dùng lại icon của cùng lĩnh vực bên Kỹ năng
        icon: skillItems.find((s) => s.category === item.category)?.icon,
        active: projectsActive && currentCategory === item.category
      }))}
      footer={{ label: "Xem tất cả dự án", href: "/projects" }}
    />
  );
};

export default DesktopProjectsDropdown;