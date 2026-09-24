"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { getProjectRequest } from "../projectSlice";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

import ProjectHero from "../components/ProjectHero";
import ProjectCategoryNav from "../components/ProjectCategoryNav";
import DevelopmentProjects from "../components/DevelopmentProjects";
import VideoProjects from "../components/VideoProjects";
import DrivingProjects from "../components/DrivingProjects";

const ProjectContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const { data, loading, error } = useAppSelector((state) => state.project);

  /* =====================================================
     FETCH
  ===================================================== */

  React.useEffect(() => {
    dispatch(getProjectRequest());
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

  const projects = [...(data ?? [])].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  const developmentProjects = projects.filter(
    (project) => project.category === "DEVELOPMENT"
  );

  const videoProjects = projects.filter(
    (project) => project.category === "VIDEO_EDITING"
  );

  const drivingProjects = projects.filter(
    (project) => project.category === "DRIVING"
  );

  /* =====================================================
     UI
  ===================================================== */

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1B1E29] px-6 py-24 lg:px-10">
      {/* =================================================
          ANIMATIONS
      ================================================= */}

      <style>
        {`
          @keyframes projectFadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes projectGlow {
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
                  15px
                )
                scale(1.08);
            }
          }

          @keyframes projectLine {
            from {
              transform:
                scaleX(0);
            }

            to {
              transform:
                scaleX(1);
            }
          }

          @keyframes projectPulse {
            0%,
            100% {
              opacity: 0.5;
            }

            50% {
              opacity: 1;
            }
          }
        `}
      </style>

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* BASE GRADIENT */}

        <div className="absolute inset-0 bg-linear-to-b from-[#252936] via-[#1F222E] to-[#1A1D27]" />

        {/* TOP CENTER LIGHT */}

        <div className="absolute -top-70 left-1/2 h-150 w-200 -translate-x-1/2 rounded-full bg-indigo-400/12 blur-[180px]" />

        {/* LEFT INDIGO */}

        <div
          className="absolute -left-40 top-40 h-130 w-130 rounded-full bg-indigo-400/12 blur-[160px]"
          style={{
            animation: "projectGlow 12s ease-in-out infinite"
          }}
        />

        {/* RIGHT VIOLET */}

        <div
          className="absolute -right-40 top-180 h-130 w-130 rounded-full bg-violet-400/10 blur-[160px]"
          style={{
            animation: "projectGlow 14s ease-in-out infinite reverse"
          }}
        />

        {/* CENTER LIGHT */}

        <div className="absolute left-1/2 top-150 h-100 w-180 -translate-x-1/2 rounded-full bg-white/3 blur-[150px]" />

        {/* LOWER BLUE */}

        <div className="absolute -bottom-50 left-1/4 h-130 w-130 rounded-full bg-blue-400/7 blur-[160px]" />

        {/* GRID */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.065)_1px,transparent_0)] bg-size-[30px_30px] mask-[radial-gradient(ellipse_80%_75%_at_50%_20%,#000_20%,transparent_85%)]" />

        {/* TOP SOFT LIGHT */}

        <div className="absolute inset-x-0 top-0 h-100 bg-linear-to-b from-white/3 to-transparent" />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative mx-auto max-w-7xl">
        {/* HERO */}

        <ProjectHero totalProjects={projects.length} />

        {/* CATEGORY NAV */}

        <ProjectCategoryNav
          developmentCount={developmentProjects.length}
          videoCount={videoProjects.length}
          drivingCount={drivingProjects.length}
        />

        {/* DEVELOPMENT */}

        <DevelopmentProjects projects={developmentProjects} />

        {/* VIDEO EDITING */}

        <VideoProjects projects={videoProjects} />

        {/* DRIVING */}

        <DrivingProjects projects={drivingProjects} />

        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="mt-32 flex flex-col gap-3 border-t border-white/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-500">
            End of selected work
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-500">
            Development · Video · Driving
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectContainer;
