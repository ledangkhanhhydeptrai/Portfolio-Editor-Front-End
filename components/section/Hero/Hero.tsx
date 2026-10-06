"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { getProfileRequest, getProfileUserRequest } from "@/features/profile/profileSlice";

import type { ProfileProps } from "@/features/profile/profileTypes";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

import HeroBackground from "./components/HeroBackground";
import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage";
import HeroStyles from "./components/HeroStyles";

export default function Hero() {
  const dispatch = useAppDispatch();

  const { user: authUser, authReady } = useAppSelector((state) => state.auth);

  const { data, user: userProfile, loading, error } = useAppSelector((state) => state.profile);

  React.useEffect(() => {
    if (!authReady) {
      return;
    }

    if (authUser) {
      console.log("HERO -> USER PROFILE");
      dispatch(getProfileUserRequest());
      return;
    }

    console.log("HERO -> PUBLIC PROFILE");
    dispatch(getProfileRequest());
  }, [dispatch, authReady, authUser]);

  const profileData = authUser ? userProfile : data;

  const profile = React.useMemo<ProfileProps | null>(() => {
    if (!profileData) {
      return null;
    }

    if (Array.isArray(profileData)) {
      if (profileData.length === 0) {
        return null;
      }

      return profileData.at(0) ?? null;
    }

    return profileData as ProfileProps;
  }, [profileData]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!profile) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-[#11131B] px-6">
        <p className="text-center font-['Space_Grotesk'] text-sm text-white/45">
          Không có dữ liệu hồ sơ
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden bg-[#11131B]">
      <HeroStyles />

      <section className="relative min-h-dvh w-full overflow-hidden border-b border-white/8 text-[#F0EFEA]">
        <HeroBackground />

        {/* =========================================
            MAIN HERO
        ========================================= */}

        <div className="relative z-10 mx-auto grid w-full max-w-375 grid-cols-1 items-center gap-12 px-6 pt-28 pb-16 sm:px-8 sm:pt-28 sm:pb-16 md:min-h-dvh md:grid-cols-[1.12fr_0.88fr] md:gap-10 md:px-10 md:pt-20 md:pb-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-12 lg:pt-20 lg:pb-12 xl:gap-16 xl:px-14">
          {/* =========================================
              LEFT
          ========================================= */}

          <div className="relative z-10 min-w-0">
            <HeroContent profile={profile} />
          </div>

          {/* =========================================
              RIGHT
          ========================================= */}

          <div className="relative z-10 min-w-0 md:flex md:items-center md:justify-end">
            <HeroImage profile={profile} />
          </div>
        </div>

        {/* =========================================
            MOBILE BOTTOM
        ========================================= */}

        <div className="relative z-10 mx-6 flex items-center justify-between border-t border-white/8 py-5 sm:mx-8 md:hidden">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8EA5FF] opacity-40" />

              <span className="relative h-1.5 w-1.5 rounded-full bg-[#8EA5FF]" />
            </span>

            <span className="font-['Space_Grotesk'] text-[8px] tracking-[0.24em] text-white/35 uppercase">
              Available / 2026
            </span>
          </div>

          <span className="font-['Space_Grotesk'] text-[8px] tracking-[0.2em] text-white/30 uppercase">
            Scroll ↓
          </span>
        </div>
      </section>
    </div>
  );
}
