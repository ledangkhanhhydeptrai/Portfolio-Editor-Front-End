"use client";

import React from "react";

import type { SocialLinkProps } from "../socialLinkTypes";

import SocialLinkCard from "./SocialLinkCard";

interface SocialLinkGridProps {
  socialLinks: SocialLinkProps[];
}

const SocialLinkGrid: React.FC<SocialLinkGridProps> = ({ socialLinks }) => {
  return (
    <ul className="flex flex-col gap-3">
      {socialLinks.map((social) => (
        <li key={social.id}>
          <SocialLinkCard social={social} />
        </li>
      ))}
    </ul>
  );
};

export default SocialLinkGrid;
