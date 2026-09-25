"use client";

import React from "react";

import type { SocialLinkProps } from "../socialLinkTypes";

import SocialLinkCard from "./SocialLinkCard";

interface SocialLinkGridProps {
  socialLinks: SocialLinkProps[];
}

const SocialLinkGrid: React.FC<SocialLinkGridProps> = ({ socialLinks }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {socialLinks.map((social, index) => (
        <SocialLinkCard key={social.id} social={social} index={index} />
      ))}
    </div>
  );
};

export default SocialLinkGrid;
