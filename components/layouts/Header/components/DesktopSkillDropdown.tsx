import React from "react";

import { skillItems } from "./headerData";
import NavDropdown from "./Navdropdown";


interface DesktopSkillDropdownProps {
  open: boolean;
  skillsActive: boolean;
  currentCategory: string | null;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

const DesktopSkillDropdown: React.FC<DesktopSkillDropdownProps> = ({
  open,
  skillsActive,
  currentCategory,
  containerRef,
  onOpen,
  onClose,
  onToggle
}) => (
  <NavDropdown
    label="Kỹ năng"
    active={skillsActive}
    open={open}
    containerRef={containerRef}
    onOpen={onOpen}
    onClose={onClose}
    onToggle={onToggle}
    items={skillItems.map((item) => ({
      label: item.label,
      description: item.description,
      href: item.href,
      icon: item.icon,
      active: skillsActive && currentCategory === item.category
    }))}
    footer={{ label: "Xem tất cả kỹ năng", href: "/skills" }}
  />
);

export default DesktopSkillDropdown;