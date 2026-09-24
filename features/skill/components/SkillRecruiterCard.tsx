import React from "react";

import type { CategoryMeta, RecruiterMeta } from "../utils/skillUtils";

interface SkillRecruiterCardProps {
  meta: CategoryMeta;
  recruiter: RecruiterMeta;
}

const SkillRecruiterCard: React.FC<SkillRecruiterCardProps> = ({
  meta,
  recruiter
}) => {
  return (
    <div className="relative mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#171923]/75 p-4 shadow-[0_10px_35px_rgba(0,0,0,0.12)]">
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full blur-3xl ${meta.glow}`}
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-500">
            {recruiter.label}
          </p>

          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${meta.dot}`} />
        </div>

        <h3 className={`mt-3 text-base font-semibold ${meta.text}`}>
          {recruiter.position}
        </h3>

        <p className="mt-2 text-[11px] leading-5 text-slate-400">
          {recruiter.description}
        </p>

        <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3">
          <span className="relative flex h-1.5 w-1.5">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-30 ${meta.dot}`}
            />

            <span className={`relative h-1.5 w-1.5 rounded-full ${meta.dot}`} />
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-slate-500">
            {recruiter.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillRecruiterCard;
