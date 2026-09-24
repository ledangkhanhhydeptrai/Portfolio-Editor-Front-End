"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

import { getSkillRequest } from "../skillSlice";

import type { SkillProps } from "../skillTypes";

import SkillBackground from "../components/SkillBackground";
import SkillSidebar from "../components/SkillSidebar";
import SkillCategoryCard from "../components/SkillCategoryCard";
import SkillEmpty from "../components/SkillEmpty";

import { groupByCategory } from "../utils/skillUtils";

const SkillContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const { data, loading, error } = useAppSelector((state) => state.skill);

  /* =====================================================
       API
    ===================================================== */

  React.useEffect(() => {
    dispatch(getSkillRequest());
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

  const skills: SkillProps[] = data ?? [];

  const grouped = groupByCategory(skills);

  /* =====================================================
       SCROLL
    ===================================================== */

  const scrollToCategory = (category: string) => {
    const element = document.getElementById(`skill-${category}`);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  /* =====================================================
       UI
    ===================================================== */

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#11131B] px-6 py-20 lg:px-10">
      {/* ANIMATIONS */}

      <style>
        {`
            @keyframes skillFadeUp {
              from {
                opacity: 0;
                transform: translateY(14px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes skillFadeLeft {
              from {
                opacity: 0;
                transform: translateX(-14px);
              }

              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes skillBlobDrift {
              0%,
              100% {
                transform:
                  translate(0, 0)
                  scale(1);
              }

              50% {
                transform:
                  translate(
                    10px,
                    12px
                  )
                  scale(1.06);
              }
            }

            @keyframes skillBlobDriftSide {
              0%,
              100% {
                transform:
                  translate(0, 0)
                  scale(1);

                opacity: 0.5;
              }

              50% {
                transform:
                  translate(
                    10px,
                    -14px
                  )
                  scale(1.1);

                opacity: 0.8;
              }
            }

            @keyframes skillDashTravel {
              to {
                stroke-dashoffset:
                  -200;
              }
            }
          `}
      </style>

      {/* BACKGROUND */}

      <SkillBackground />

      {/* CORNERS */}

      <div className="pointer-events-none absolute left-6 top-6 hidden h-8 w-8 border-l border-t border-white/15 lg:block" />

      <div className="pointer-events-none absolute bottom-6 right-6 hidden h-8 w-8 border-b border-r border-white/15 lg:block" />

      {/* CONTENT */}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[380px_1fr] lg:gap-12">
        {/* LEFT */}

        <SkillSidebar
          skills={skills}
          grouped={grouped}
          onCategoryClick={scrollToCategory}
        />

        {/* DIVIDER */}

        <svg
          className="pointer-events-none absolute inset-y-0 left-95 ml-6 hidden h-full w-6 xl:block"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke="#FFFFFF"
            strokeOpacity="0.12"
            strokeWidth="1"
            strokeDasharray="3 9"
            style={{
              animation: "skillDashTravel 8s linear infinite"
            }}
          />
        </svg>

        {/* RIGHT */}

        <div className="columns-1 gap-5 sm:columns-2">
          {grouped.map(([category, items], index) => (
            <SkillCategoryCard
              key={category}
              category={category}
              items={items}
              index={index}
            />
          ))}

          {grouped.length === 0 && <SkillEmpty />}
        </div>
      </div>
    </section>
  );
};

export default SkillContainer;
