"use client";

import React from "react";

import AboutBackground from "./components/AboutBackground";
import AboutHero from "./components/AboutHero";
import AboutTimeline from "./components/AboutTimeline";
import AboutQuote from "./components/AboutQuote";
import AboutDirections from "./components/AboutDirections";
import AboutMarquee from "./components/AboutMarquee";
import AboutWorkStyle from "./components/AboutWorkStyle";
import AboutQuickInfo from "./components/AboutQuickInfo";

import useScrollProgress from "./hooks/useScrollProgress";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { getProfileRequest, getProfileUserRequest } from "@/features/profile/profileSlice";

import { getSkillRequest, getSkillUserRequest } from "@/features/skill/skillSlice";

import {
  getExperienceRequest,
  getExperienceUserRequest,
} from "@/features/experience/experienceSlice";
import { getWorkStylesRequest } from "@/features/work-style/WorkStylesSlice";
import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { getDirectionRequest, getDirectionUserRequest } from "@/features/direction/DirectionSlice";

const About: React.FC = () => {
  const dispatch = useAppDispatch();

  const progress = useScrollProgress();
  const {
    data: DataDirection,
    loading: LoadingDirection,
    error: ErrorDirection,
  } = useAppSelector((state) => state.direction);
  const { user, authReady } = useAppSelector((state) => state.auth);
  const {
    data: workStyles,
    loading: workStyleLoading,
    error: workStyleError,
  } = useAppSelector((state) => state.workstyle);
  // =========================
  // PROFILE
  // =========================

  const {
    data: publicProfile,
    user: userProfile,
    loading: profileLoading,
  } = useAppSelector((state) => state.profile);

  // =========================
  // SKILL
  // =========================

  const { data: publicSkills, userSkill: userSkills } = useAppSelector((state) => state.skill);

  // =========================
  // EXPERIENCE
  // =========================

  const { data: publicExperiences, userExperience: userExperiences } = useAppSelector(
    (state) => state.experience,
  );

  // =========================
  // FETCH DATA
  // =========================

  React.useEffect(() => {
    if (!authReady) {
      return;
    }

    // Logged in
    if (user) {
      dispatch(getProfileUserRequest());
      dispatch(getDirectionUserRequest());
      dispatch(getSkillUserRequest());

      dispatch(getExperienceUserRequest());

      return;
    }
    dispatch(getDirectionRequest());
    // Public
    dispatch(getProfileRequest());
    dispatch(getWorkStylesRequest());
    dispatch(getSkillRequest());

    dispatch(getExperienceRequest());
  }, [dispatch, user, authReady]);

  // =========================
  // CURRENT DATA
  // =========================

  const profile = user ? userProfile : publicProfile;

  const skills = user ? userSkills : publicSkills;

  const experiences = user ? userExperiences : publicExperiences;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1B1E29] text-[#F7F6F2]">
      <AboutBackground />

      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 z-50 h-0.5 w-full bg-white/10">
        <div
          className="h-full bg-[#9BADFF] transition-[width] duration-150 ease-out"
          style={{
            width: `${progress * 100}%`,
          }}
        />
      </div>

      <main className="relative z-10 overflow-hidden">
        {/* PROFILE */}
        <AboutHero profile={profile} loading={profileLoading} />

        {/* EXPERIENCE */}
        <AboutTimeline experiences={experiences} />

        <AboutQuote />

        {LoadingDirection ? (
          <Loading />
        ) : ErrorDirection ? (
          <ErrorMessage />
        ) : (
          <AboutDirections directions={DataDirection} />
        )}
        {/* SKILL */}
        <AboutMarquee skills={skills} />

        {/* WORK STYLE */}

        {workStyleLoading ? (
          <Loading />
        ) : workStyleError ? (
          <ErrorMessage />
        ) : (
          <AboutWorkStyle workStyles={workStyles} />
        )}

        {/* PROFILE */}
        <AboutQuickInfo profile={profile} />
      </main>
    </div>
  );
};

export default About;
