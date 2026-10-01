"use client";

import React from "react";

import type { ProfileProps } from "@/features/profile/profileTypes";

interface HeroContentProps {
  profile: ProfileProps;
}

interface ContactItem {
  key: string;
  label: string;
  value: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ profile }) => {
  const contactItems = React.useMemo<ContactItem[]>(() => {
    const items: ContactItem[] = [];

    if (profile.email) {
      items.push({
        key: "email",
        label: "Email",
        value: profile.email
      });
    }

    if (profile.phone) {
      items.push({
        key: "phone",
        label: "Phone",
        value: profile.phone
      });
    }

    if (profile.location) {
      items.push({
        key: "location",
        label: "Based in",
        value: profile.location
      });
    }

    return items;
  }, [profile]);

  return (
    <div
      className="
        relative
        z-10
        order-1
        min-w-0

        md:py-2

        lg:py-3
      "
    >
      {/* =========================================
          EYEBROW
      ========================================= */}

      <div
        className="
          hero-reveal
          hero-reveal-1
          flex
          flex-wrap
          items-center
          gap-4
        "
      >
        {profile.jobTitle && (
          <div
            className="
              inline-flex
              max-w-full
              items-center
              gap-2.5
              rounded-full
              border
              border-[#8EA5FF]/20
              bg-[#8EA5FF]/7
              px-3.5
              py-2
              backdrop-blur-sm
            "
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-[#8EA5FF]
                  opacity-40
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#8EA5FF]
                "
              />
            </span>

            <span
              className="
                truncate
                font-['Space_Grotesk']
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#AAB8FF]

                sm:text-[10px]
              "
            >
              {profile.jobTitle}
            </span>
          </div>
        )}

        <div
          className="
            hidden
            items-center
            gap-3

            sm:flex
          "
        >
          <span className="h-px w-8 bg-white/15" />

          <span
            className="
              font-['Space_Grotesk']
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-white/30
            "
          >
            Portfolio / 2026
          </span>
        </div>
      </div>

      {/* =========================================
          NAME
      ========================================= */}

      <h1
        className="
          hero-reveal
          hero-reveal-2
          mt-7
          max-w-4xl
          font-['Fraunces']
          text-[54px]
          font-light
          leading-[0.86]
          tracking-[-0.055em]
          text-[#F4F3EF]

          min-[480px]:text-[64px]

          sm:text-[72px]

          md:text-[5.5vw]

          lg:text-[78px]

          xl:text-[90px]
        "
      >
        {profile.fullName}

        <span className="text-[#8EA5FF]">.</span>
      </h1>

      {/* =========================================
          ACCENT
      ========================================= */}

      <div
        className="
          hero-reveal
          hero-reveal-2
          mt-6
          flex
          items-center
          gap-3
        "
      >
        <span
          className="
            h-px
            w-16
            bg-linear-to-r
            from-[#8EA5FF]
            to-[#8EA5FF]/10

            sm:w-24
          "
        />

        <span
          className="
            h-1
            w-1
            rounded-full
            bg-[#8EA5FF]/70
          "
        />
      </div>

      {/* =========================================
          SHORT DESCRIPTION
      ========================================= */}

      {profile.shortDescription && (
        <p
          className="
            hero-reveal
            hero-reveal-3
            mt-6
            max-w-[42ch]
            font-['Space_Grotesk']
            text-[15px]
            leading-7
            text-white/70

            sm:text-[16px]

            lg:text-[17px]
            lg:leading-7
          "
        >
          {profile.shortDescription}
        </p>
      )}

      {/* =========================================
          ABOUT
      ========================================= */}

      {profile.aboutMe && (
        <div
          className="
            hero-reveal
            hero-reveal-3
            mt-4
            flex
            max-w-[55ch]
            gap-4
          "
        >
          <span
            className="
              mt-1
              w-px
              shrink-0
              bg-linear-to-b
              from-[#8EA5FF]/60
              via-[#8EA5FF]/20
              to-transparent
            "
          />

          <p
            className="
              font-['Space_Grotesk']
              text-[13px]
              leading-6
              text-white/40

              sm:text-[13px]
              sm:leading-6

              lg:text-sm
              lg:leading-6
            "
          >
            {profile.aboutMe}
          </p>
        </div>
      )}

      {/* =========================================
          ACTIONS
      ========================================= */}

      <div
        className="
          hero-reveal
          hero-reveal-4
          mt-7
          flex
          flex-col
          gap-3

          min-[440px]:flex-row
          min-[440px]:items-center
        "
      >
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
              items-center
              justify-center
              gap-3
              overflow-hidden
              rounded-xl
              bg-[#F2F0EA]
              px-6
              font-['Space_Grotesk']
              text-sm
              font-semibold
              text-[#11131B]
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-white
              hover:shadow-[0_14px_35px_-12px_rgba(142,165,255,0.55)]
            "
          >
            <span className="relative z-10">Xem CV</span>

            <span
              className="
                relative
                z-10
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              ↗
            </span>
          </a>
        )}

        {profile.email && (
          <a
            href={`mailto:${profile.email}`}
            className="
              group
              flex
              h-12
              items-center
              justify-center
              gap-3
              rounded-xl
              border
              border-white/12
              bg-white/3
              px-6
              font-['Space_Grotesk']
              text-sm
              font-medium
              text-white/75
              backdrop-blur-sm
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-[#8EA5FF]/35
              hover:bg-[#8EA5FF]/8
              hover:text-white
            "
          >
            Liên hệ
            <span
              className="
                text-[#8EA5FF]
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        )}
      </div>

      {/* =========================================
          CONTACT META
      ========================================= */}

      {contactItems.length > 0 && (
        <div
          className="
            hero-reveal
            hero-reveal-5
            mt-7
            grid
            max-w-2xl
            grid-cols-1
            gap-x-8
            gap-y-5
            border-t
            border-white/8
            pt-5

            sm:grid-cols-3

            md:mt-6
            md:pt-4

            lg:mt-7
            lg:pt-5
          "
        >
          {contactItems.map((item) => (
            <div key={item.key} className="min-w-0">
              <p
                className="
                  font-['Space_Grotesk']
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white/25
                "
              >
                {item.label}
              </p>

              <p
                className="
                  mt-1.5
                  truncate
                  font-['Space_Grotesk']
                  text-xs
                  text-white/60
                  transition-colors
                  duration-300

                  hover:text-[#AAB8FF]

                  sm:text-[13px]
                "
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* =========================================
          SCROLL
          Chỉ hiện ở màn hình lớn.
          Laptop sẽ không chiếm thêm chiều cao.
      ========================================= */}

      <div
        className="
          hero-reveal
          hero-reveal-5
          mt-8
          hidden
          items-center
          gap-4

          xl:flex
        "
      >
        <div
          className="
            relative
            flex
            h-10
            w-6
            justify-center
            rounded-full
            border
            border-white/15
            pt-2
          "
        >
          <span
            className="
              hero-scroll-dot
              h-1
              w-1
              rounded-full
              bg-[#8EA5FF]
            "
          />
        </div>

        <span
          className="
            font-['Space_Grotesk']
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/25
          "
        >
          Cuộn xuống
        </span>

        <span
          className="
            h-px
            w-12
            bg-linear-to-r
            from-white/15
            to-transparent
          "
        />
      </div>
    </div>
  );
};

export default HeroContent;
