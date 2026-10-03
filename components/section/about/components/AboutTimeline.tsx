import React from "react";

import type {
  ExperienceProps,
} from "@/features/experience/experienceTypes";

import TimelineItem from "./TimelineItem";

interface AboutTimelineProps {
  experiences: ExperienceProps[];
}

const AboutTimeline: React.FC<
  AboutTimelineProps
> = ({
  experiences,
}) => {
  if (experiences.length === 0) {
    return null;
  }

  const sortedExperiences = [
    ...experiences,
  ].sort(
    (a, b) =>
      a.displayOrder -
      b.displayOrder,
  );

  return (
    <section className="relative border-b border-white/10">
      <div className="mx-auto w-full max-w-375 px-6 py-20 lg:px-10 lg:py-24 xl:px-14">
        <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-2.25 text-[#8EA5FF]">
                01
              </span>

              <span className="h-px w-8 bg-white/15" />
            </div>

            <h2 className="mt-5 font-['Fraunces'] text-3xl font-light text-[#F4F3EF]">
              Hành trình
            </h2>

            <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[#777A84]">
              Từng bước một
            </p>
          </div>

          <div>
            {sortedExperiences.map(
              (experience, index) => (
                <TimelineItem
                  key={experience.id}
                  experience={experience}
                  index={index}
                  isLast={
                    index ===
                    sortedExperiences.length - 1
                  }
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;