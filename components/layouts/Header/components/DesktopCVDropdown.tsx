"use client";

import React from "react";
import NavDropdown from "./Navdropdown";
import { CurriculumProps } from "@/features/CurriculumVitae/CurriculumVitaeTypes";

interface DesktopCVDropdownProps {
  pathname: string;
  curriculums: CurriculumProps[];
  open: boolean;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

const DesktopCVDropdown: React.FC<DesktopCVDropdownProps> = ({
  pathname,
  open,
  dropdownRef,
  onOpen,
  onClose,
  onToggle,
  curriculums,
}) => {
  const cvActive = pathname === "/curriculum" || pathname.startsWith("/curriculum/");

  return (
    <NavDropdown
      label="CV"
      active={cvActive}
      open={open}
      containerRef={dropdownRef}
      onOpen={onOpen}
      onClose={onClose}
      onToggle={onToggle}
      items={curriculums.map((cv) => ({
        label: cv.title,
        description: cv.isPrimary ? "CV chính" : "Curriculum Vitae",
        href: `/curriculum/${cv.id}`,
        active: pathname === `/curriculum/${cv.id}`,
      }))}
      footer={{
        label: "Xem CV",
        href: "/curriculum",
      }}
    />
  );
};

export default DesktopCVDropdown;
