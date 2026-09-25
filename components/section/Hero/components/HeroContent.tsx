"use client";

import React from "react";

import type { ProfileProps } from "@/features/profile/profileTypes";

interface HeroContentProps {
  profile: ProfileProps;
}

const CONTACT_ICON: Record<string, React.ReactNode> = {
  email: (
    <path
      d="M3 5h14v10H3V5Zm0 0 7 6 7-6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),

  phone: (
    <path
      d="M4 3h3l1.5 4L6.5 8.5a10 10 0 0 0 5 5L13 11.5l4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A14 14 0 0 1 3 4.6 1.5 1.5 0 0 1 4 3Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),

  location: (
    <path
      d="M10 18s6-5.2 6-9.5A6 6 0 0 0 4 8.5C4 12.8 10 18 10 18Zm0-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
};

const HeroContent: React.FC<HeroContentProps> = ({ profile }) => {
  const contactItems = React.useMemo(() => {
    return [
      {
        key: "email",
        value: profile.email
      },
      {
        key: "phone",
        value: profile.phone
      },
      {
        key: "location",
        value: profile.location
      }
    ].filter(
      (
        item
      ): item is {
        key: string;
        value: string;
      } => Boolean(item.value)
    );
  }, [profile]);

  return (
    <div className="relative z-10 order-2 py-10 md:order-1 md:py-16">
      {/* NUMBER */}

      <span
        className="pointer-events-none absolute -left-4 -top-4 select-none font-['Fraunces'] text-[18vw] font-black leading-none text-transparent md:text-[9vw]"
        style={{
          WebkitTextStroke: "1px rgba(199,123,61,0.25)"
        }}
      >
        01
      </span>

      {/* JOB TITLE */}

      {profile.jobTitle && (
        <div className="fade-up fade-up-1 relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-[#C77B3D]/30 bg-[#C77B3D]/10 px-3.5 py-1.5">
          <span
            className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent"
            style={{
              animation: "shimmerSweep 6s linear infinite"
            }}
          />

          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C77B3D] opacity-75" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#C77B3D]" />
          </span>

          <p className="relative font-['Space_Grotesk'] text-xs uppercase tracking-[0.2em] text-[#E3A56D]">
            {profile.jobTitle}
          </p>
        </div>
      )}

      {/* NAME */}

      <h1 className="fade-up fade-up-2 relative mt-6 font-['Fraunces'] text-[13vw] font-light leading-[0.92] tracking-tight text-[#EDEAE3] md:text-[5.2vw]">
        <span className="bg-linear-to-r from-[#EDEAE3] via-[#EDEAE3] to-[#C77B3D] bg-clip-text">
          {profile.fullName}
        </span>
      </h1>

      <span className="fade-up fade-up-2 mt-3 block h-1 w-20 rounded-full bg-linear-to-r from-[#C77B3D] via-[#E3A56D] to-transparent" />

      {/* SHORT DESCRIPTION */}

      {profile.shortDescription && (
        <p className="fade-up fade-up-3 mt-8 max-w-[42ch] font-['Space_Grotesk'] text-lg leading-relaxed text-[#C4C0B8] md:text-xl">
          {profile.shortDescription}
        </p>
      )}

      {/* ABOUT */}

      {profile.aboutMe && (
        <p className="fade-up fade-up-3 mt-4 max-w-[50ch] border-l-2 border-[#3A6B7A]/30 pl-4 font-['Space_Grotesk'] text-sm leading-relaxed text-[#8F8B84]">
          {profile.aboutMe}
        </p>
      )}

      {/* ACTIONS */}

      <div className="fade-up fade-up-4 mt-10 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center">
        {profile.cvUrl && (
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-md border border-[#EDEAE3]/25 bg-[#16171a] px-6 py-3.5 font-['Space_Grotesk'] text-sm font-medium text-[#EDEAE3] transition-all duration-300 hover:scale-[1.03] hover:border-[#C77B3D] hover:text-[#101114] hover:shadow-[0_10px_30px_-6px_rgba(199,123,61,0.55)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-[#C77B3D] transition-transform duration-300 ease-out group-hover:translate-x-0" />

            <span className="relative">Xem CV</span>

            <span className="relative transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        )}

        {contactItems.length > 0 && (
          <div className="flex flex-wrap items-center gap-2.5">
            {contactItems.map((item) => (
              <span
                key={item.key}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-2 font-['Space_Grotesk'] text-xs text-[#C4C0B8] transition-colors duration-300 hover:border-[#C77B3D]/30 hover:text-[#EDEAE3]"
              >
                <svg
                  className="h-3.5 w-3.5 text-[#C77B3D]"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  {CONTACT_ICON[item.key]}
                </svg>

                {item.value}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* SCROLL */}

      <div className="fade-up fade-up-5 mt-12 hidden items-center gap-3 md:flex">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-[#C77B3D]/40 p-1">
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#C77B3D]"
            style={{
              animation: "scrollDot 1.8s ease-in-out infinite"
            }}
          />
        </div>

        <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.25em] text-[#8F8B84]">
          Cuộn xuống
        </span>

        <span className="h-px w-16 bg-linear-to-r from-[#8F8B84]/40 to-transparent" />
      </div>
    </div>
  );
};

export default HeroContent;
