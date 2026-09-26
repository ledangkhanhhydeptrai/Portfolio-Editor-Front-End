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
      <div className="flex min-h-dvh items-center justify-center bg-[#101114] px-6">
        <p className="text-center font-['Space_Grotesk'] text-sm text-[#8F8B84]">
          Không có dữ liệu hồ sơ
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden bg-[#101114]">
      <HeroStyles />

      <section className="relative w-full overflow-hidden border-y border-white/6 text-[#EDEAE3]">
        <HeroBackground />

        {/* MAIN */}

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            w-full
            max-w-7xl
            grid-cols-1
            gap-8
            px-5
            pb-6
            pt-18

            sm:gap-10
            sm:px-8
            sm:pb-8
            sm:pt-20

            md:min-h-dvh
            md:grid-cols-[1.1fr_0.9fr]
            md:items-center
            md:gap-8
            md:px-10
            md:py-20

            lg:grid-cols-[1.3fr_0.7fr]
            lg:gap-12
            lg:px-12

            xl:grid-cols-[1.45fr_0.75fr]
            xl:px-14
          "
        >
          <HeroContent profile={profile} />

          <HeroImage profile={profile} />
        </div>

        {/* MOBILE / TABLET FOOTER */}

        <div
          className="
            relative
            z-10
            mx-5
            flex
            items-center
            justify-between
            border-t
            border-white/8
            py-4

            sm:mx-8
            sm:py-5

            md:hidden
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C77B3D]" />

            <span className="font-['Space_Grotesk'] text-[8px] uppercase tracking-[0.24em] text-[#8F8B84]">
              Portfolio / 2026
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-linear-to-r from-[#C77B3D]/60 to-transparent" />

            <span className="font-['Space_Grotesk'] text-[8px] tracking-[0.2em] text-[#8F8B84]">
              01 / 01
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
