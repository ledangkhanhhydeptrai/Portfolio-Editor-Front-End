import React from "react";
import Image from "next/image";

import type { SkillProps } from "../skillTypes";

import {
  CATEGORY_META,
  DEFAULT_META,
  RECRUITER_META,
  formatCategory
} from "../utils/skillUtils";

import SkillRecruiterCard from "./SkillRecruiterCard";

interface SkillCategoryCardProps {
  category: string;
  items: SkillProps[];
  index: number;
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({
  category,
  items,
  index
}) => {
  const meta = CATEGORY_META[category] ?? DEFAULT_META;

  const recruiter = RECRUITER_META[category];

  return (
    <section
      id={`skill-${category}`}
      style={{
        animation: `skillFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) ${
          index * 0.08
        }s both`
      }}
      className={`
        group relative mb-5 block
        scroll-mt-32 break-inside-avoid
        overflow-hidden rounded-2xl
        border border-white/10
        bg-[#1A1C26]/80
        p-6
        shadow-[0_15px_50px_rgba(0,0,0,0.15)]
        ring-1 ring-white/3
        backdrop-blur-md
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-[#1E202B]/90
        ${meta.border}
      `}
    >
      {/* TOP HIGHLIGHT */}

      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

      {/* GLOW */}

      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-150 ${meta.glow}`}
      />

      {/* HEADER */}

      <div className="relative mb-5 flex items-center gap-3">
        <div
          className={`
            flex h-11 w-11
            shrink-0 items-center
            justify-center rounded-xl
            border border-white/10
            ${meta.softBackground}
            ring-1 ring-white/7
            transition-all duration-300
            ${meta.text}
            ${meta.ring}
          `}
        >
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none">
            {meta.icon}
          </svg>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-100">
            {formatCategory(category)}
          </h2>

          <p className="mt-0.5 text-xs text-slate-500">
            {items.length} kỹ năng
          </p>
        </div>
      </div>

      {/* SKILLS */}

      <ul className="relative flex flex-col gap-1">
        {items.map((skill) => (
          <li
            key={skill.id}
            className="
              flex items-center gap-3
              rounded-lg px-2.5 py-2.5
              text-sm text-slate-300
              transition-all duration-200
              hover:bg-white/7
              hover:text-white
            "
          >
            {skill.iconUrl ? (
              <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-md border border-white/7 bg-white/5">
                <Image
                  src={skill.iconUrl}
                  alt={skill.name}
                  fill
                  sizes="24px"
                  className="object-contain p-0.5"
                />
              </span>
            ) : (
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${meta.dot}`}
              />
            )}

            <span className="truncate">{skill.name}</span>
          </li>
        ))}
      </ul>

      {/* RECRUITER */}

      {recruiter && <SkillRecruiterCard meta={meta} recruiter={recruiter} />}
    </section>
  );
};

export default SkillCategoryCard;
