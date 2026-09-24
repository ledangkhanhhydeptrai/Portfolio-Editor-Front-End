import React from "react";

import type { SkillProps } from "../skillTypes";

import {
  CATEGORY_META,
  DEFAULT_META,
  RECRUITER_META,
  formatCategory
} from "../utils/skillUtils";

interface SkillSidebarProps {
  skills: SkillProps[];

  grouped: [string, SkillProps[]][];

  onCategoryClick: (category: string) => void;
}

const SkillSidebar: React.FC<SkillSidebarProps> = ({
  skills,
  grouped,
  onCategoryClick
}) => {
  return (
    <aside
      className="lg:sticky lg:top-24 lg:self-start"
      style={{
        animation: "skillFadeLeft 0.6s cubic-bezier(0.16,1,0.3,1) both"
      }}
    >
      {/* BADGE */}

      <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300 shadow-sm backdrop-blur-md">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

          <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        Portfolio
      </span>

      {/* TITLE */}

      <h1 className="mt-5 bg-linear-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent">
        Kỹ năng &amp; Chuyên môn
      </h1>

      <span className="mt-4 block h-px w-16 bg-linear-to-r from-indigo-400 to-transparent" />

      <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
        Tổng hợp các công cụ, công nghệ và kỹ năng được tích lũy qua quá trình
        học tập và làm việc.
      </p>

      {/* STATS */}

      <div className="mt-8 flex flex-wrap gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/8">
          <p className="text-xl font-semibold text-white">{skills.length}</p>

          <p className="mt-0.5 text-[11px] text-slate-500">Kỹ năng</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/8">
          <p className="text-xl font-semibold text-white">{grouped.length}</p>

          <p className="mt-0.5 text-[11px] text-slate-500">Nhóm</p>
        </div>
      </div>

      {/* CATEGORY */}

      <div className="mt-7 border-t border-white/10 pt-6">
        <p className="mb-3 font-mono text-[8px] uppercase tracking-[0.2em] text-slate-500">
          Danh mục
        </p>

        <div className="flex flex-col gap-1.5">
          {grouped.map(([category, items]) => {
            const meta = CATEGORY_META[category] ?? DEFAULT_META;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryClick(category)}
                className="group flex w-full items-center justify-between rounded-xl border border-transparent px-3 py-2.5 text-left transition-all duration-300 hover:border-white/7 hover:bg-white/7"
              >
                <div className="flex items-center gap-2.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />

                  <p className="text-[12px] text-slate-400 transition-colors group-hover:text-white">
                    {formatCategory(category)}
                  </p>
                </div>

                <span className="font-mono text-[10px] text-slate-600 transition-colors group-hover:text-slate-300">
                  {String(items.length).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* RECRUITER */}

      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">
          Bạn đang tuyển vị trí nào?
        </p>

        <div className="mt-4 flex flex-col gap-2">
          {grouped.map(([category]) => {
            const recruiter = RECRUITER_META[category];

            const meta = CATEGORY_META[category] ?? DEFAULT_META;

            if (!recruiter) {
              return null;
            }

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryClick(category)}
                className="
                    group flex w-full
                    items-center justify-between
                    rounded-xl border
                    border-white/10
                    bg-white/5
                    px-4 py-3
                    text-left
                    shadow-sm
                    backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-white/20
                    hover:bg-white/8
                  "
              >
                <div className="flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full ${meta.dot}`} />

                  <span className="text-xs text-slate-300 transition-colors group-hover:text-white">
                    {recruiter.position}
                  </span>
                </div>

                <span className="text-xs text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-200">
                  →
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default SkillSidebar;
