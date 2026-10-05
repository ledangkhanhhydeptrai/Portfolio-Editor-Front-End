"use client";

import React from "react";

const SocialLinkBackground: React.FC = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-24 -left-40 h-130 w-130 rounded-full bg-indigo-500/12 blur-[150px]" />
      <div className="absolute top-80 -right-48 h-120 w-120 rounded-full bg-violet-500/8 blur-[160px]" />
    </div>
  );
};

export default SocialLinkBackground;
