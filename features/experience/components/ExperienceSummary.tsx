import React from "react";

interface ExperienceSummaryProps {
  total: number;
  partTimeCount: number;
  internshipCount: number;
}

const ExperienceSummary: React.FC<ExperienceSummaryProps> = ({
  total,
  partTimeCount,
  internshipCount
}) => {
  if (total === 0) {
    return null;
  }

  return (
    <div
      className="mb-24 grid grid-cols-1 gap-3 sm:grid-cols-3"
      style={{
        animation: "experienceFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both"
      }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/7 bg-white/3 p-5">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-slate-500/5 blur-[50px]" />

        <div className="relative">
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600">
            Tổng kinh nghiệm
          </p>

          <div className="mt-4 flex items-end gap-2">
            <span className="text-3xl font-semibold tracking-[-0.04em] text-[#F0EFEA]">
              {total}
            </span>

            <span className="pb-1 text-xs text-slate-600">vị trí</span>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-indigo-400/10 bg-indigo-400/3 p-5">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-500/8 blur-[50px]" />

        <div className="relative">
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-indigo-300/60">
            Bán thời gian
          </p>

          <div className="mt-4 flex items-end gap-2">
            <span className="text-3xl font-semibold tracking-[-0.04em] text-indigo-200">
              {partTimeCount}
            </span>

            <span className="pb-1 text-xs text-slate-600">vị trí</span>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-violet-400/10 bg-violet-400/3 p-5">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/8 blur-[50px]" />

        <div className="relative">
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-violet-300/60">
            Thực tập
          </p>

          <div className="mt-4 flex items-end gap-2">
            <span className="text-3xl font-semibold tracking-[-0.04em] text-violet-200">
              {internshipCount}
            </span>

            <span className="pb-1 text-xs text-slate-600">vị trí</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSummary;
