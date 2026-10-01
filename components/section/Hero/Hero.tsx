"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { getProfileRequest } from "@/features/profile/profileSlice";

import type { ProfileProps } from "@/features/profile/profileTypes";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

import HeroBackground from "./components/HeroBackground";
import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage";
import HeroStyles from "./components/HeroStyles";

export default function Hero() {
  const dispatch = useAppDispatch();

  const { data, loading, error } = useAppSelector((state) => state.profile);

  React.useEffect(() => {
    dispatch(getProfileRequest());
  }, [dispatch]);

  const profile = React.useMemo<ProfileProps | null>(() => {
    if (!data) {
      return null;
    }

    if (Array.isArray(data)) {
      if (data.length === 0) {
        return null;
      }

      return (data as ProfileProps[]).at(0) ?? null;
    }

    return data as ProfileProps;
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!profile) {
    return (
      <div
        className="
          flex
          min-h-dvh
          items-center
          justify-center
          bg-[#11131B]
          px-6
        "
      >
        <p
          className="
            text-center
            font-['Space_Grotesk']
            text-sm
            text-white/45
          "
        >
          Không có dữ liệu hồ sơ
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        w-full
        overflow-x-hidden
        bg-[#11131B]
      "
    >
      <HeroStyles />

      <section
        className="
          relative
          min-h-dvh
          w-full
          overflow-hidden
          border-b
          border-white/8
          text-[#F0EFEA]
        "
      >
        <HeroBackground />

        {/* =========================================
            MAIN HERO
        ========================================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            w-full
            max-w-375
            grid-cols-1
            items-center
            gap-12
            px-6
            pb-16
            pt-28

            sm:px-8
            sm:pb-16
            sm:pt-28

            md:min-h-dvh
            md:grid-cols-[1.12fr_0.88fr]
            md:gap-10
            md:px-10
            md:pb-10
            md:pt-20

            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-14
            lg:px-12
            lg:pb-12
            lg:pt-20

            xl:gap-16
            xl:px-14
          "
        >
          {/* =========================================
              LEFT
          ========================================= */}

          <div
            className="
              relative
              z-10
              min-w-0
            "
          >
            <HeroContent profile={profile} />
          </div>

          {/* =========================================
              RIGHT
          ========================================= */}

          <div
            className="
              relative
              z-10
              min-w-0

              md:flex
              md:items-center
              md:justify-end
            "
          >
            <HeroImage profile={profile} />
          </div>
        </div>

        {/* =========================================
            MOBILE BOTTOM
        ========================================= */}

        <div
          className="
            relative
            z-10
            mx-6
            flex
            items-center
            justify-between
            border-t
            border-white/8
            py-5

            sm:mx-8

            md:hidden
          "
        >
          <div
            className="
              flex
              items-center
              gap-2.5
            "
          >
            <span
              className="
                relative
                flex
                h-1.5
                w-1.5
              "
            >
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
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#8EA5FF]
                "
              />
            </span>

            <span
              className="
                font-['Space_Grotesk']
                text-[8px]
                uppercase
                tracking-[0.24em]
                text-white/35
              "
            >
              Available / 2026
            </span>
          </div>

          <span
            className="
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[0.2em]
              text-white/30
            "
          >
            Scroll ↓
          </span>
        </div>
      </section>
    </div>
  );
}
