"use client";

import React from "react";

import type { EducationProps } from "../educationTypes";

import EducationCard from "./EducationCard";

interface EducationTimelineProps {
  educations: EducationProps[];
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({
  educations
}) => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-2.5 top-8 w-px bg-linear-to-b from-indigo-300/40 via-white/10 to-transparent lg:left-[217px]" />

      <div className="space-y-12">
        {educations.map((education, index) => (
          <EducationCard
            key={education.id}
            education={education}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
