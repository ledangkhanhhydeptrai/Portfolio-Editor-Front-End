"use client";

import React from "react";

import MouseSpotlight from "@/components/effects/MouseSpotlight";
import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import AboutSection from "@/components/home/AboutSection";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ShowreelSection from "@/components/home/ShowreelSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ContactSection from "@/components/home/ContactSection";
import MainLayouts from "@/components/layouts/MainLayout";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getVideoRequest, getVideoUserRequest } from "@/features/video/videoSlice";
import { getSkillRequest, getSkillUserRequest } from "@/features/skill/skillSlice";
import { getProjectRequest, getProjectUserRequest } from "@/features/project/projectSlice";
import { getExperienceRequest, getExperienceUserRequest } from "@/features/experience/experienceSlice";
import { getProfileRequest } from "@/features/profile/profileSlice";
import { getLinkRequest } from "@/features/social-link/socialLinkSlice";

export default function Home() {
  const dispatch = useAppDispatch();

  const { user, authReady } = useAppSelector((state) => state.auth);

  /*
   * PROFILE + SOCIAL LINK
   *
   * Hiện hai resource này đang dùng PUBLIC.
   * Chỉ load một lần.
   */
  React.useEffect(() => {
    dispatch(getProfileRequest());

    dispatch(getLinkRequest());
  }, [dispatch]);

  /*
   * USER / PUBLIC DATA
   *
   * user != null
   *     -> USER API
   *
   * user == null
   *     -> PUBLIC API
   *
   * Khi logout:
   * createLogoutSuccess()
   * -> user = null
   * -> effect chạy lại
   * -> PUBLIC API
   */
  React.useEffect(() => {
    if (!authReady) {
      return;
    }

    if (user) {
      dispatch(getVideoUserRequest());

      dispatch(getSkillUserRequest());

      dispatch(getProjectUserRequest());

      dispatch(getExperienceUserRequest());

      return;
    }

    dispatch(getVideoRequest());

    dispatch(getSkillRequest());

    dispatch(getProjectRequest());

    dispatch(getExperienceRequest());
  }, [dispatch, user, authReady]);

  return (
    <MainLayouts>
      <main className="relative min-h-screen overflow-hidden bg-[#11131B] text-[#F0EFEA]">
        {/* ================================================
            GLOBAL BACKGROUND
        ================================================= */}

        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-[#171923] via-[#12141C] to-[#101118]" />

          <div className="absolute -top-80 left-1/2 h-175 w-200 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-[190px]" />

          <div className="absolute top-100 -left-60 h-150 w-150 rounded-full bg-blue-500/8 blur-[180px]" />

          <div className="absolute top-160 -right-60 h-150 w-150 rounded-full bg-violet-500/8 blur-[180px]" />

          <div className="absolute top-250 left-1/2 h-125 w-200 -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[180px]" />

          <div className="absolute -bottom-60 left-1/4 h-150 w-150 rounded-full bg-blue-500/6 blur-[180px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-size-[32px_32px]" />
        </div>

        {/* ================================================
            CONTENT
        ================================================= */}

        <div className="relative z-10">
          <MouseSpotlight />

          <HeroSection />

          <MarqueeSection />

          <AboutSection />

          <SkillsSection />

          <ProjectsSection />

          <ShowreelSection />

          <ExperienceSection />

          <ContactSection />
        </div>
      </main>
    </MainLayouts>
  );
}
