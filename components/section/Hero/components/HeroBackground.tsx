"use client";

import React from "react";

const HeroBackground: React.FC = () => {
  const particles = React.useMemo(
    () =>
      Array.from(
        {
          length: 30
        },
        (_, i) => ({
          id: i,
          left: (i * 37) % 100,
          top: (i * 53) % 100,
          size: 2 + (i % 4),
          delay: (i % 6) * 0.7,
          duration: 6 + (i % 5) * 1.4,
          tone: i % 3 === 0 ? "#3A6B7A" : "#C77B3D"
        })
      ),
    []
  );

  return (
    <>
      {/* GRAIN */}

      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay">
        <filter id="heroGrain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />

          <feColorMatrix type="saturate" values="0" />
        </filter>

        <rect width="100%" height="100%" filter="url(#heroGrain)" />
      </svg>

      {/* GRID */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#EDEAE3 1px, transparent 1px), linear-gradient(90deg, #EDEAE3 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }}
      />

      {/* LABEL */}

      <div className="pointer-events-none absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
        <p
          className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.5em] text-[#8F8B84]/70"
          style={{
            writingMode: "vertical-rl"
          }}
        >
          Portfolio — 2026
        </p>
      </div>

      {/* PARTICLES */}

      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.tone,
              boxShadow: `0 0 10px ${particle.tone}`,
              animation: `floatParticle ${particle.duration}s ease-in-out ${particle.delay}s infinite`
            }}
          />
        ))}
      </div>

      {/* GLOW */}

      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-125 w-125 rounded-full bg-[#C77B3D]/20 blur-[130px]"
        style={{
          animation: "pulseGlow 8s ease-in-out infinite"
        }}
      />

      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#3A6B7A]/20 blur-[120px]"
        style={{
          animation: "pulseGlow 10s ease-in-out infinite 1.5s"
        }}
      />

      {/* CORNERS */}

      <div className="pointer-events-none absolute left-6 top-6 hidden h-12 w-12 border-l-2 border-t-2 border-[#C77B3D]/40 md:block" />

      <div className="pointer-events-none absolute bottom-6 right-6 hidden h-12 w-12 border-b-2 border-r-2 border-[#3A6B7A]/40 md:block" />

      {/* TOP LIGHT */}

      <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-px overflow-hidden md:block">
        <div
          className="h-full w-1/4 bg-linear-to-r from-transparent via-[#C77B3D] to-transparent"
          style={{
            animation: "shimmerSweep 7s linear infinite"
          }}
        />
      </div>

      {/* BOTTOM LINE */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.75 bg-linear-to-r from-[#C77B3D] via-[#3A6B7A] to-[#C77B3D] opacity-60" />
    </>
  );
};

export default HeroBackground;
