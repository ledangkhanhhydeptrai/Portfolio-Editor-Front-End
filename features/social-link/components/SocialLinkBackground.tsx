"use client";

import React from "react";

const SocialLinkBackground: React.FC = () => {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-linear-to-b from-[#252936] to-transparent" />

      <div className="pointer-events-none absolute -left-40 top-40 h-130 w-130 rounded-full bg-indigo-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-50 top-90 h-130 w-130 rounded-full bg-violet-500/7 blur-[160px]" />

      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-linear-to-r from-transparent via-indigo-300/5 to-transparent" />
    </>
  );
};

export default SocialLinkBackground;
