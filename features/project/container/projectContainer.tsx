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

  React.useEffect(() => {
    dispatch(getProjectRequest());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

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

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07070c] px-6 py-24 lg:px-10">
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
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }

            50% {
              transform: translate(20px, 15px) scale(1.08);
            }
          }

          @keyframes projectLine {
            from {
              transform: scaleX(0);
            }

            to {
              transform: scaleX(1);
            }
          }

          @keyframes projectPulse {
            0%, 100% {
              opacity: 0.5;
            }

            50% {
              opacity: 1;
            }
          }
        `}
      </style>

      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-size-[30px_30px] mask-[radial-gradient(ellipse_80%_70%_at_50%_20%,#000_20%,transparent_80%)]" />

      <div
        className="pointer-events-none absolute -left-40 top-40 h-130 w-130 rounded-full bg-indigo-500/7 blur-[160px]"
        style={{
          animation: "projectGlow 12s ease-in-out infinite"
        }}
      />

      <div
        className="pointer-events-none absolute -right-40 top-180 h-130 w-130 rounded-full bg-violet-500/5 blur-[160px]"
        style={{
          animation: "projectGlow 14s ease-in-out infinite reverse"
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <ProjectHero totalProjects={projects.length} />

        <ProjectCategoryNav
          developmentCount={developmentProjects.length}
          videoCount={videoProjects.length}
          drivingCount={drivingProjects.length}
        />

        <DevelopmentProjects projects={developmentProjects} />

        <VideoProjects projects={videoProjects} />

        <DrivingProjects projects={drivingProjects} />

        <div className="mt-32 flex items-center justify-between border-t border-white/7 pt-8">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
            End of selected work
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
            Development · Video · Driving
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectContainer;
