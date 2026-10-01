"use client";

import React from "react";
import Image from "next/image";

import type { ProfileProps } from "@/features/profile/profileTypes";

interface HeroImageProps {
  profile: ProfileProps;
}

const HeroImage: React.FC<HeroImageProps> = ({ profile }) => {
  return (
    <div className="relative order-2 w-full min-w-0 md:-translate-y-8 lg:-translate-y-10">
      <div className="hero-image-enter relative flex w-full min-w-0 items-center justify-center md:justify-end">
        {/* GLOW */}

        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7189FF]/12 blur-[100px]" />

        {/* OUTER FRAME */}

        <div className="relative w-full max-w-125 p-2 sm:p-3 md:max-w-110">
          {/* INDEX */}

          <div className="absolute -top-7 -right-1 z-20 hidden items-center gap-3 sm:flex">
            <span className="h-px w-8 bg-[#8EA5FF]/40" />

            <span className="font-['Space_Grotesk'] text-[9px] tracking-[0.22em] text-white/25 uppercase">
              01 / Profile
            </span>
          </div>

          {/* FRAME LINE */}

          <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-[#8EA5FF]/15" />

          <div className="pointer-events-none absolute -inset-2 rounded-[34px] border border-white/4" />

          {/* IMAGE */}

          <div className="hero-image-frame group relative aspect-4/5 w-full overflow-hidden rounded-[22px] border border-white/10 bg-[#181B25] shadow-[0_35px_90px_-35px_rgba(0,0,0,0.95)] sm:rounded-3xl md:aspect-auto md:h-135">
            {profile.avatarUrl && profile.avatarUrl.trim() !== "" ? (
              <Image
                src={profile.avatarUrl}
                alt={profile.fullName || "Profile Photo"}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 440px"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[#181B25]">
                <span className="font-['Fraunces'] text-8xl font-light text-white/5">
                  {profile.fullName ? profile.fullName.charAt(0) : "P"}
                </span>
              </div>
            )}

            {/* IMAGE GRADIENT */}

            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0E1017]/90 via-transparent to-[#11131B]/10" />

            {/* SUBTLE COLOR */}

            <div className="pointer-events-none absolute inset-0 bg-[#7189FF]/4 mix-blend-color" />

            {/* TOP */}

            <div className="pointer-events-none absolute top-5 right-5 left-5 flex items-center justify-between">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#10121A]/50 px-3 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8EA5FF]" />

                <span className="font-['Space_Grotesk'] text-[7px] tracking-[0.2em] text-white/60 uppercase sm:text-[8px]">
                  Visual / Profile
                </span>
              </div>

              <span className="font-['Space_Grotesk'] text-[8px] tracking-[0.18em] text-white/35 uppercase">
                2026
              </span>
            </div>

            {/* BOTTOM */}

            <div className="pointer-events-none absolute right-0 bottom-0 left-0 p-5 sm:p-6">
              <div className="flex items-end justify-between gap-5">
                <div className="min-w-0">
                  <p className="font-['Space_Grotesk'] text-[8px] tracking-[0.22em] text-[#AAB8FF]/70 uppercase">
                    Selected profile
                  </p>

                  <p className="mt-2 truncate font-['Fraunces'] text-xl text-[#F4F3EF] sm:text-2xl">
                    {profile.fullName}
                  </p>

                  {profile.location && (
                    <p className="mt-1 truncate font-['Space_Grotesk'] text-[10px] text-white/40 sm:text-xs">
                      {profile.location}
                    </p>
                  )}
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/6 text-[#AAB8FF] backdrop-blur-md sm:h-12 sm:w-12">
                  ↗
                </div>
              </div>
            </div>

            {/* LIGHT SWEEP */}

            <div className="hero-image-sheen pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 rotate-12 bg-linear-to-r from-transparent via-white/6 to-transparent blur-sm" />
          </div>

          {/* FLOATING STATUS */}

          <div className="hero-status-float absolute -bottom-4 -left-2 z-20 flex items-center gap-3 rounded-xl border border-white/10 bg-[#151821]/85 px-4 py-3 shadow-[0_16px_40px_-18px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:-left-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />

              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <div>
              <p className="font-['Space_Grotesk'] text-[7px] tracking-[0.2em] text-white/30 uppercase">
                Status
              </p>

              <p className="mt-0.5 font-['Space_Grotesk'] text-[10px] font-medium text-white/75">
                Available for work
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
