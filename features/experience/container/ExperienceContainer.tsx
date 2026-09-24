"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { getExperienceRequest } from "../experienceSlice";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

import ExperienceBackground from "../components/ExperienceBackground";
import ExperienceHeader from "../components/ExperienceHeader";
import ExperienceSummary from "../components/ExperienceSummary";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ExperienceEmpty from "../components/ExperienceEmpty";
import ExperienceFooter from "../components/ExperienceFooter";

const ExperienceContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const { data, loading, error } = useAppSelector((state) => state.experience);

  /* =====================================================
     FETCH
  ===================================================== */

  React.useEffect(() => {
    dispatch(getExperienceRequest());
  }, [dispatch]);

  /* =====================================================
     STATE
  ===================================================== */

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  /* =====================================================
     DATA
  ===================================================== */

  const experiences = [...(data ?? [])].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  const internshipCount = experiences.filter((experience) => {
    const position = experience.position.toLowerCase();

    return position.includes("thực tập") || position.includes("editor");
  }).length;

  const partTimeCount = experiences.filter((experience) => {
    const position = experience.position.toLowerCase();

    return (
      position.includes("part-time") ||
      position.includes("parttime") ||
      position.includes("part time")
    );
  }).length;

  /* =====================================================
     UI
  ===================================================== */

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1B1E29] px-6 py-24 lg:px-10">
      {/* =================================================
          ANIMATION
      ================================================= */}

      <style>
        {`
          @keyframes experienceFadeUp {
            from {
              opacity: 0;
              transform: translateY(24px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes experienceLine {
            from {
              transform: scaleY(0);
            }

            to {
              transform: scaleY(1);
            }
          }

          @keyframes experiencePulse {
            0%,
            100% {
              opacity: 0.45;
              transform: scale(1);
            }

            50% {
              opacity: 1;
              transform: scale(1.25);
            }
          }

          @keyframes experienceGlow {
            0%,
            100% {
              transform:
                translate(0, 0)
                scale(1);
            }

            50% {
              transform:
                translate(
                  20px,
                  20px
                )
                scale(1.08);
            }
          }
        `}
      </style>

      {/* =================================================
          BASE BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* BASE GRADIENT */}

        <div className="absolute inset-0 bg-linear-to-b from-[#252936] via-[#1F222E] to-[#1A1D27]" />

        {/* TOP LIGHT */}

        <div className="absolute -top-70 left-1/2 h-150 w-200 -translate-x-1/2 rounded-full bg-indigo-400/12 blur-[180px]" />

        {/* LEFT GLOW */}

        <div
          className="absolute -left-50 top-60 h-130 w-130 rounded-full bg-indigo-400/10 blur-[160px]"
          style={{
            animation: "experienceGlow 12s ease-in-out infinite"
          }}
        />

        {/* RIGHT GLOW */}

        <div
          className="absolute -right-50 top-180 h-130 w-130 rounded-full bg-violet-400/9 blur-[160px]"
          style={{
            animation: "experienceGlow 14s ease-in-out infinite reverse"
          }}
        />

        {/* CENTER LIGHT */}

        <div className="absolute left-1/2 top-160 h-100 w-180 -translate-x-1/2 rounded-full bg-white/3 blur-[150px]" />

        {/* LOWER GLOW */}

        <div className="absolute -bottom-50 left-1/4 h-130 w-130 rounded-full bg-blue-400/7 blur-[160px]" />

        {/* GRID */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-size-[30px_30px] mask-[radial-gradient(ellipse_80%_75%_at_50%_20%,#000_20%,transparent_85%)]" />

        {/* SOFT TOP LIGHT */}

        <div className="absolute inset-x-0 top-0 h-100 bg-linear-to-b from-white/3 to-transparent" />
      </div>

      {/* =================================================
          ORIGINAL EXPERIENCE BACKGROUND
      ================================================= */}

      <ExperienceBackground />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative mx-auto max-w-7xl">
        <ExperienceHeader total={experiences.length} />

        <ExperienceSummary
          total={experiences.length}
          partTimeCount={partTimeCount}
          internshipCount={internshipCount}
        />

        {experiences.length > 0 ? (
          <ExperienceTimeline experiences={experiences} />
        ) : (
          <ExperienceEmpty />
        )}

        <ExperienceFooter />
      </div>
    </section>
  );
};

export default ExperienceContainer;
