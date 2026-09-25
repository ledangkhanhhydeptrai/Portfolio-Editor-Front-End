"use client";

import React from "react";
import Image from "next/image";

import type { ProfileProps } from "@/features/profile/profileTypes";

interface HeroImageProps {
  profile: ProfileProps;
}

const HeroImage: React.FC<HeroImageProps> = ({ profile }) => {
  return (
    <div className="relative order-1 flex items-center justify-center md:order-2">
      {/* GLOW */}

      <div className="pointer-events-none absolute -right-10 bottom-0 h-60 w-40 rounded-full bg-[#C77B3D]/20 blur-[100px]" />

      <div className="pointer-events-none absolute -left-6 top-1/3 h-40 w-40 rounded-full bg-[#3A6B7A]/20 blur-[90px]" />

      {/* IMAGE FRAME */}

      <div
        className="relative h-95 w-full max-w-100 overflow-hidden rounded-[24px] border border-white/10 bg-[#111114] sm:h-110 md:h-125 md:max-w-105"
        style={{
          animation: "frameGlowPulse 6s ease-in-out infinite"
        }}
      >
        {profile.avatarUrl && profile.avatarUrl.trim() !== "" ? (
          <Image
            src={profile.avatarUrl}
            alt={profile.fullName || "Profile Photo"}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#151619]">
            <span className="font-['Fraunces'] text-8xl font-light text-white/5">
              {profile.fullName ? profile.fullName.charAt(0) : "P"}
            </span>
          </div>
        )}

        {/* IMAGE OVERLAY */}

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#101114]/65 via-transparent to-[#3A6B7A]/10" />

        <div className="pointer-events-none absolute inset-0 bg-[#C77B3D]/6 mix-blend-color" />

        {/* GRID */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#EDEAE3 1px, transparent 1px), linear-gradient(90deg, #EDEAE3 1px, transparent 1px)",
            backgroundSize: "36px 36px"
          }}
        />

        {/* JOB BADGE */}

        {profile.jobTitle && (
          <div
            className="pointer-events-none absolute right-4 top-4 hidden max-w-[85%] items-center gap-2 rounded-full border border-[#C77B3D]/30 bg-[#101114]/90 px-3 py-2 shadow-lg backdrop-blur-md sm:flex"
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

        {/* LOCATION */}

        {profile.location && (
          <div
            className="pointer-events-none absolute right-4 top-16 hidden items-center gap-2 rounded-full border border-[#3A6B7A]/30 bg-[#101114]/90 px-3 py-2 shadow-lg backdrop-blur-md sm:flex"
            style={{
              animation: "badgeFloatAlt 6s ease-in-out infinite 0.5s"
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#C77B3D]" />

            <span className="font-['Space_Grotesk'] text-[8px] uppercase tracking-[0.16em] text-[#EDEAE3]">
              {profile.location}
            </span>
          </div>
        )}

        {/* OPEN */}

        <div className="pointer-events-none absolute bottom-5 left-5 hidden sm:block">
          <div className="relative h-14 w-14">
            <svg
              className="h-14 w-14"
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
                strokeOpacity="0.2"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
            </svg>

            <span className="absolute inset-0 flex items-center justify-center font-['Space_Grotesk'] text-[7px] uppercase tracking-widest text-[#EDEAE3]/80">
              Open
            </span>
          </div>
        </div>

        {/* SIGNATURE */}

        <div className="pointer-events-none absolute bottom-5 right-5 hidden text-right sm:block">
          <p className="font-['Fraunces'] text-base italic text-[#EDEAE3]/90">
            {profile.fullName}
          </p>

          <p className="font-['Space_Grotesk'] text-[8px] uppercase tracking-[0.25em] text-[#8F8B84]">
            Portfolio 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
