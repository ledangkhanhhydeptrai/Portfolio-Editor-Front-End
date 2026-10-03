import React from "react";

import type { ExperienceProps } from "@/features/experience/experienceTypes";

import useInView from "../hooks/useInView";

interface TimelineItemProps {
  experience: ExperienceProps;
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index, isLast }) => {
  const [ref, inView] = useInView<HTMLDivElement>(0.5);

  const formatDate = (date: string) => {
    if (!date) {
      return "";
    }

    const value = new Date(date);

    return value.toLocaleDateString("vi-VN", {
      month: "2-digit",
      year: "numeric",
    });
  };

  const startDate = formatDate(experience.startDate);

  const endDate = experience.isCurrent ? "Hiện tại" : formatDate(experience.endDate);

  return (
    <div ref={ref} className="relative pl-12">
      {!isLast && (
        <span
          className="absolute top-8 left-2.25 w-px bg-white/12"
          style={{
            height: "calc(100% - 0.5rem)",
          }}
        >
          <span
            className={`absolute inset-x-0 top-0 w-px bg-[#718CFF] transition-all duration-700 ${
              inView ? "h-full opacity-100" : "h-0 opacity-0"
            }`}
          />
        </span>
      )}

      <span
        className={`absolute top-1 left-0 flex h-4.75 w-4.75 items-center justify-center rounded-full border transition-all duration-500 ${
          inView ? "border-[#718CFF] bg-[#718CFF]/20" : "border-white/15 bg-[#1A1D28]"
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${inView ? "bg-[#9BADFF]" : "bg-slate-500"}`} />
      </span>

      <div
        className={`pb-12 transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
        style={{
          transitionDelay: inView ? `${index * 60}ms` : "0ms",
        }}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[8px] tracking-[0.2em] text-[#8EA5FF] uppercase">
            {experience.companyName}
          </span>

          <span className="h-px w-4 bg-white/15" />

          <span className="font-mono text-[8px] tracking-[0.16em] text-[#777A84] uppercase">
            {startDate}
            {" — "}
            {endDate}
          </span>
        </div>

        <h3 className="mt-2 font-['Fraunces'] text-xl text-[#F4F3EF]">{experience.position}</h3>

        <p className="mt-2 max-w-md text-xs leading-6 text-[#9A9892]">{experience.description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
