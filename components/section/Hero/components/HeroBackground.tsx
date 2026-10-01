"use client";

import React from "react";

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* BASE */}
      <div className="pointer-events-none absolute inset-0 bg-[#11131B]" />

      {/* TOP GRADIENT */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-[70%]
          bg-linear-to-b
          from-[#191C29]
          via-[#141620]/70
          to-transparent
        "
      />

      {/* MAIN INDIGO GLOW */}
      <div
        className="
          hero-glow
          pointer-events-none
          absolute
          -top-70
          left-[42%]
          h-170
          w-170
          -translate-x-1/2
          rounded-full
          bg-[#7189FF]/12
          blur-[170px]
        "
      />

      {/* RIGHT VIOLET GLOW */}
      <div
        className="
          hero-glow-alt
          pointer-events-none
          absolute
          -right-60
          top-[18%]
          h-140
          w-140
          rounded-full
          bg-[#8B5CF6]/10
          blur-[170px]
        "
      />

      {/* LEFT BLUE GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -left-70
          bottom-[-20%]
          h-150
          w-150
          rounded-full
          bg-[#3B82F6]/8
          blur-[180px]
        "
      />

      {/* DOT GRID */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-35
          mask-[linear-gradient(to_bottom,black,transparent_90%)]
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* VERTICAL GUIDE */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[8%]
          top-0
          hidden
          w-px
          bg-linear-to-b
          from-transparent
          via-white/6
          to-transparent

          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-[8%]
          top-0
          hidden
          w-px
          bg-linear-to-b
          from-transparent
          via-white/6
          to-transparent

          lg:block
        "
      />

      {/* TOP LINE */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#8EA5FF]/30 to-transparent" />

      {/* NOISE */}
      <svg
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          opacity-[0.025]
          mix-blend-overlay
        "
      >
        <filter id="heroNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />

          <feColorMatrix type="saturate" values="0" />
        </filter>

        <rect width="100%" height="100%" filter="url(#heroNoise)" />
      </svg>

      {/* SIDE LABEL */}
      <div
        className="
          pointer-events-none
          absolute
          left-5
          top-1/2
          hidden
          -translate-y-1/2

          xl:block
        "
      >
        <p
          className="
            font-['Space_Grotesk']
            text-[9px]
            uppercase
            tracking-[0.45em]
            text-white/20
          "
          style={{
            writingMode: "vertical-rl"
          }}
        >
          Portfolio — 2026
        </p>
      </div>
    </>
  );
};

export default HeroBackground;
