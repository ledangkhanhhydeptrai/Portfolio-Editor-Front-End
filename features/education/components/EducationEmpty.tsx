"use client";

import React from "react";

const EducationEmpty: React.FC = () => {
  return (
    <div className="flex min-h-80 items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/2">
      <div className="text-center">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/3">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5 text-slate-500"
          >
            <path
              d="M3 9L12 4L21 9L12 14L3 9Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            <path
              d="M7 11.5V16C7 17.5 9.2 19 12 19C14.8 19 17 17.5 17 16V11.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <p className="text-sm text-slate-400">Chưa có thông tin học vấn.</p>

        <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
          Education data unavailable
        </p>
      </div>
    </div>
  );
};

export default EducationEmpty;
