"use client";

import React from "react";
import Image from "next/image";

import type { ProfileProps } from "@/features/profile/profileTypes";

interface HeroImageProps {
  profile: ProfileProps;
}

const HeroImage: React.FC<HeroImageProps> = ({ profile }) => {
  return (
    <div
      className="
        relative
        order-2
        flex
        w-full
        min-w-0
        items-center
        justify-center
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -right-12
          bottom-0
          h-60
          w-44
          rounded-full
          bg-[#C77B3D]/18
          blur-[100px]

          md:-right-10
          md:h-60
          md:w-40
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-10
          top-1/3
          h-44
          w-44
          rounded-full
          bg-[#3A6B7A]/16
          blur-[90px]

          md:-left-6
          md:h-40
          md:w-40
        "
      />

      {/* DECORATIVE NUMBER */}

      <span
        className="
          pointer-events-none
          absolute
          -right-1
          -top-7
          hidden
          select-none
          font-['Fraunces']
          text-7xl
          italic
          text-white/3

          sm:block

          md:hidden
        "
      >
        01
      </span>

      {/* IMAGE FRAME */}

      <div
        className="
          relative
          aspect-16/10
          w-full
          overflow-hidden
          rounded-[18px]
          border
          border-white/10
          bg-[#111114]
          shadow-[0_30px_80px_-35px_rgba(0,0,0,0.9)]

          sm:aspect-video
          sm:rounded-[22px]

          md:aspect-auto
          md:h-125
          md:max-w-105
          md:rounded-3xl
        "
        style={{
          animation: "frameGlowPulse 6s ease-in-out infinite"
        }}
      >
        {/* IMAGE */}

        {profile.avatarUrl && profile.avatarUrl.trim() !== "" ? (
          <Image
            src={profile.avatarUrl}
            alt={profile.fullName || "Profile Photo"}
            fill
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 90vw, 420px"
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#151619]">
            <span className="font-['Fraunces'] text-7xl font-light text-white/5 sm:text-8xl">
              {profile.fullName ? profile.fullName.charAt(0) : "P"}
            </span>
          </div>
        )}

        {/* DARK OVERLAY */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-linear-to-t
            from-[#101114]/75
            via-transparent
            to-[#101114]/5
          "
        />

        {/* COLOR OVERLAY */}

        <div className="pointer-events-none absolute inset-0 bg-[#C77B3D]/5 mix-blend-color" />

        {/* GRID */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.05]
          "
          style={{
            backgroundImage:
              "linear-gradient(#EDEAE3 1px, transparent 1px), linear-gradient(90deg, #EDEAE3 1px, transparent 1px)",
            backgroundSize: "36px 36px"
          }}
        />

        {/* TOP LEFT DECORATION */}

        <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 sm:left-5 sm:top-5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C77B3D]" />

          <span className="font-['Space_Grotesk'] text-[7px] uppercase tracking-[0.22em] text-[#EDEAE3]/60 sm:text-[8px]">
            Profile / Visual
          </span>
        </div>

        {/* JOB BADGE - DESKTOP */}

        {profile.jobTitle && (
          <div
            className="
              pointer-events-none
              absolute
              right-4
              top-4
              hidden
              max-w-[85%]
              items-center
              gap-2
              rounded-full
              border
              border-[#C77B3D]/30
              bg-[#101114]/90
              px-3
              py-2
              shadow-lg
              backdrop-blur-md

              md:flex
            "
            style={{
              animation: "badgeFloat 5s ease-in-out infinite"
            }}
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3A6B7A] opacity-60" />

              <span className="relative h-1.5 w-1.5 rounded-full bg-[#3A6B7A]" />
            </span>

            <span className="truncate font-['Space_Grotesk'] text-[8px] uppercase tracking-[0.16em] text-[#EDEAE3]">
              {profile.jobTitle}
            </span>
          </div>
        )}

        {/* LOCATION - DESKTOP */}

        {profile.location && (
          <div
            className="
              pointer-events-none
              absolute
              right-4
              top-16
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-[#3A6B7A]/30
              bg-[#101114]/90
              px-3
              py-2
              shadow-lg
              backdrop-blur-md

              md:flex
            "
            style={{
              animation: "badgeFloatAlt 6s ease-in-out infinite 0.5s"
            }}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C77B3D]" />

            <span className="font-['Space_Grotesk'] text-[8px] uppercase tracking-[0.16em] text-[#EDEAE3]">
              {profile.location}
            </span>
          </div>
        )}

        {/* BOTTOM GRADIENT LINE */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            h-0.75
            w-full
            bg-linear-to-r
            from-[#C77B3D]
            via-[#3A6B7A]
            to-[#C77B3D]
            opacity-60
          "
        />

        {/* OPEN */}

        <div className="pointer-events-none absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-[#101114]/60
              backdrop-blur-md

              sm:h-14
              sm:w-14
            "
          >
            <svg
              className="absolute h-10 w-10 sm:h-14 sm:w-14"
              viewBox="0 0 64 64"
              style={{
                animation: "spinSlow 12s linear infinite"
              }}
            >
              <circle
                cx="32"
                cy="32"
                r="30"
                fill="none"
                stroke="#EDEAE3"
                strokeOpacity="0.22"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
            </svg>

            <span className="font-['Space_Grotesk'] text-[6px] uppercase tracking-widest text-[#EDEAE3]/80 sm:text-[7px]">
              Open
            </span>
          </div>
        </div>

        {/* SIGNATURE */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-4
            right-4
            max-w-[55%]
            text-right

            sm:bottom-5
            sm:right-5
          "
        >
          <p
            className="
              truncate
              font-['Fraunces']
              text-sm
              italic
              text-[#EDEAE3]/90

              sm:text-base
            "
          >
            {profile.fullName}
          </p>

          <div className="mt-1 flex items-center justify-end gap-2">
            <span className="h-px w-5 bg-[#C77B3D]/50" />

            <p className="font-['Space_Grotesk'] text-[6px] uppercase tracking-[0.2em] text-[#8F8B84] sm:text-[8px] sm:tracking-[0.25em]">
              Portfolio 2026
            </p>
          </div>
        </div>

        {/* FRAME CORNERS */}

        <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-white/15" />

        <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-white/15" />
      </div>
    </div>
  );
};

export default HeroImage;
