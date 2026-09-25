"use client";

import React from "react";

const EducationBackground: React.FC = () => {
  return (
    <>
      {/* DOT GRID */}

      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      {/* TOP FADE */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-linear-to-b from-[#252936] to-transparent" />

      {/* INDIGO GLOW */}

      <div className="pointer-events-none absolute -left-40 top-40 h-130 w-130 rounded-full bg-indigo-500/10 blur-[150px]" />

      {/* VIOLET GLOW */}

      <div className="pointer-events-none absolute -right-50 top-100 h-130 w-130 rounded-full bg-violet-500/7 blur-[160px]" />

      {/* CENTER LINE */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-linear-to-b from-transparent via-white/3 to-transparent" />

      {/* NOISE-LIKE LINES */}

      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-linear-to-r from-transparent via-indigo-300/7 to-transparent" />
    </>
  );
};

export default EducationBackground;
