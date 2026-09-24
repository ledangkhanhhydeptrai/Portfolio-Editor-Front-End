import React from "react";

import type { ExperienceProps } from "../experienceTypes";


import ExperienceCard from "./ExperienceCard";
import { getExperienceAccent } from "@/utils/experienceAccent";

interface ExperienceTimelineProps {
  experiences: ExperienceProps[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences
}) => {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <>
      {/* TITLE */}

      <div className="mb-14 text-center">
        <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-indigo-300/70">
          Dòng thời gian
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-200">
          Hành trình làm việc
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-xs leading-6 text-slate-600">
          Mỗi trải nghiệm là một bước trong quá trình học hỏi, làm việc và mở
          rộng kỹ năng thực tế.
        </p>
      </div>

      {/* TIMELINE */}

      <div className="relative">
        {/* DESKTOP CENTER LINE */}

        <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-white/7 lg:block">
          <div
            className="h-full w-full origin-top bg-linear-to-b from-indigo-400/70 via-violet-400/40 to-transparent"
            style={{
              animation:
                "experienceLine 1.3s cubic-bezier(0.16,1,0.3,1) both 0.2s"
            }}
          />
        </div>

        {/* MOBILE LINE */}

        <div className="absolute bottom-0 left-4 top-0 w-px bg-linear-to-b from-indigo-400/60 via-violet-400/30 to-transparent lg:hidden" />

        <div className="space-y-12 lg:space-y-6">
          {experiences.map((experience, index) => {
            const accent = getExperienceAccent(experience.position);

            const isLeft = index % 2 === 0;

            return (
              <article
                key={experience.id}
                className="relative grid grid-cols-1 lg:grid-cols-2"
                style={{
                  animation: `experienceFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${
                    index * 0.12 + 0.2
                  }s both`
                }}
              >
                {/* DOT */}

                <div className="absolute left-4 top-10 z-20 -translate-x-1/2 lg:left-1/2">
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#07070c] shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                    <span
                      className={`absolute h-6 w-6 rounded-full ${accent.dot}/10`}
                    />

                    <span
                      className={`relative h-2 w-2 rounded-full ${accent.dot}`}
                    />
                  </div>
                </div>

                {/* LEFT */}

                <div
                  className={
                    isLeft ? "pl-12 lg:col-start-1 lg:pr-14" : "hidden lg:block"
                  }
                >
                  {isLeft && (
                    <ExperienceCard
                      experience={experience}
                      index={index}
                      accent={accent}
                      side="left"
                    />
                  )}
                </div>

                {/* RIGHT */}

                <div
                  className={
                    !isLeft
                      ? "pl-12 lg:col-start-2 lg:pl-14"
                      : "hidden lg:block"
                  }
                >
                  {!isLeft && (
                    <ExperienceCard
                      experience={experience}
                      index={index}
                      accent={accent}
                      side="right"
                    />
                  )}
                </div>

                {/* MOBILE RIGHT */}

                {!isLeft && (
                  <div className="pl-12 lg:hidden">
                    <ExperienceCard
                      experience={experience}
                      index={index}
                      accent={accent}
                      side="right"
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExperienceTimeline;
