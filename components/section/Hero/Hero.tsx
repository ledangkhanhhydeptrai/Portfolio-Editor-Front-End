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
      <div className="flex min-h-screen items-center justify-center bg-[#101114]">
        <p className="font-['Space_Grotesk'] text-sm text-[#8F8B84]">
          Không có dữ liệu hồ sơ
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#101114]">
      <HeroStyles />

      <section className="relative overflow-hidden border-y border-white/6 text-[#EDEAE3]">
        <HeroBackground />

        <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-[1.45fr_0.75fr] md:gap-12 md:px-12 lg:px-14">
          <HeroContent profile={profile} />

          <HeroImage profile={profile} />
        </div>
      </section>
    </div>
  );
}
