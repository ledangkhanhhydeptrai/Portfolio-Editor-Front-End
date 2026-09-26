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
    <div
      className="
        relative
        z-10
        order-1
        min-w-0
        py-2

        sm:py-4

        md:py-16
      "
    >
      {/* NUMBER */}

      <span
        className="
          pointer-events-none
          absolute
          -left-1
          -top-5
          select-none
          font-['Fraunces']
          text-[82px]
          font-black
          leading-none
          text-transparent

          sm:-left-3
          sm:-top-8
          sm:text-[110px]

          md:-left-4
          md:-top-4
          md:text-[9vw]
        "
        style={{
          WebkitTextStroke: "1px rgba(199,123,61,0.25)"
        }}
      >
        01
      </span>

      {/* JOB TITLE */}

      {profile.jobTitle && (
        <div
          className="
            fade-up
            fade-up-1
            relative
            inline-flex
            max-w-full
            items-center
            gap-2
            overflow-hidden
            rounded-full
            border
            border-[#C77B3D]/30
            bg-[#C77B3D]/10
            px-3
            py-1.5

            sm:gap-2.5
            sm:px-3.5
          "
        >
          <span
            className="
              pointer-events-none
              absolute
              inset-0
              -translate-x-full
              bg-linear-to-r
              from-transparent
              via-white/10
              to-transparent
            "
            style={{
              animation: "shimmerSweep 6s linear infinite"
            }}
          />

          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C77B3D] opacity-75" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#C77B3D]" />
          </span>

          <p
            className="
              relative
              truncate
              font-['Space_Grotesk']
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-[#E3A56D]

              sm:text-[10px]
              sm:tracking-[0.18em]

              lg:text-xs
              lg:tracking-[0.2em]
            "
          >
            {profile.jobTitle}
          </p>
        </div>
      )}

      {/* NAME */}

      <h1
        className="
          fade-up
          fade-up-2
          relative
          mt-7
          max-w-3xl
          font-['Fraunces']
          text-[46px]
          font-light
          leading-[0.9]
          tracking-[-0.045em]
          text-[#EDEAE3]

          min-[500px]:text-[56px]

          sm:mt-8
          sm:text-[64px]

          md:text-[5.2vw]

          xl:text-[76px]
        "
      >
        <span
          className="
            bg-linear-to-r
            from-[#EDEAE3]
            via-[#EDEAE3]
            to-[#C77B3D]
            bg-clip-text
          "
        >
          {profile.fullName}
        </span>
      </h1>

      {/* TITLE LINE */}

      <div className="fade-up fade-up-2 mt-4 flex items-center gap-3">
        <span className="block h-0.75 w-14 rounded-full bg-linear-to-r from-[#C77B3D] via-[#E3A56D] to-transparent sm:w-20" />

        <span className="h-1 w-1 rounded-full bg-[#C77B3D]/60" />
      </div>

      {/* SHORT DESCRIPTION */}

      {profile.shortDescription && (
        <p
          className="
            fade-up
            fade-up-3
            mt-6
            max-w-[42ch]
            font-['Space_Grotesk']
            text-[15px]
            leading-6
            text-[#C4C0B8]

            sm:text-base
            sm:leading-7

            md:mt-8
            md:text-lg

            lg:text-xl
          "
        >
          {profile.shortDescription}
        </p>
      )}

      {/* ABOUT */}

      {profile.aboutMe && (
        <div
          className="
            fade-up
            fade-up-3
            mt-4
            flex
            max-w-[52ch]
            gap-3
          "
        >
          <span className="w-0.5 shrink-0 rounded-full bg-linear-to-b from-[#3A6B7A]/60 via-[#3A6B7A]/30 to-transparent" />

          <p
            className="
              font-['Space_Grotesk']
              text-[13px]
              leading-6
              text-[#8F8B84]

              sm:text-sm
              sm:leading-relaxed
            "
          >
            {profile.aboutMe}
          </p>
        </div>
      )}

      {/* ACTIONS */}

      <div
        className="
          fade-up
          fade-up-4
          mt-7
          flex
          min-w-0
          flex-col
          gap-4

          sm:mt-8

          md:mt-10
          md:gap-5
        "
      >
        {/* CV */}

        {profile.cvUrl && (
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              flex
              h-12
              w-full
              items-center
              justify-center
              gap-2.5
              overflow-hidden
              rounded-lg
              border
              border-[#EDEAE3]/20
              bg-[#16171a]
              px-6
              font-['Space_Grotesk']
              text-sm
              font-medium
              text-[#EDEAE3]
              transition-all
              duration-300

              hover:border-[#C77B3D]
              hover:text-[#101114]
              hover:shadow-[0_10px_30px_-6px_rgba(199,123,61,0.55)]

              sm:w-fit
              sm:min-w-38
            "
          >
            <span className="absolute inset-0 -translate-x-full bg-[#C77B3D] transition-transform duration-300 ease-out group-hover:translate-x-0" />

            <span className="relative">Xem CV</span>

            <span className="relative transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        )}

        {/* CONTACT */}

        {contactItems.length > 0 && (
          <div
            className="
              flex
              min-w-0
              flex-wrap
              items-center
              gap-2
            "
          >
            {contactItems.map((item) => (
              <span
                key={item.key}
                className="
                    flex
                    max-w-full
                    min-w-0
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/4
                    px-3
                    py-2
                    font-['Space_Grotesk']
                    text-[10px]
                    text-[#C4C0B8]
                    transition-all
                    duration-300

                    hover:border-[#C77B3D]/30
                    hover:bg-[#C77B3D]/5
                    hover:text-[#EDEAE3]

                    sm:text-xs
                  "
              >
                <span
                  className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#C77B3D]/10
                    "
                >
                  <svg
                    className="h-3 w-3 text-[#C77B3D]"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    {CONTACT_ICON[item.key]}
                  </svg>
                </span>

                <span className="truncate">{item.value}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* DESKTOP SCROLL */}

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
