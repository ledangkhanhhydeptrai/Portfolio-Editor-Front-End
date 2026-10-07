import type { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
  children?: CVMenuItemType[];
}

export interface CVMenuItemType {
  label: string;
  description: string;
  href: string;
  number: string;
  icon: ReactNode;
}

export interface SkillMenuItemType {
  label: string;
  description: string;
  href: string;
  category: string;
  number: string;
  icon: ReactNode;
}

export interface MobileNavLinkProps {
  number: string;
  label: string;
  href: string;
  active: boolean;
  delay: number;
  onClick: () => void;
}