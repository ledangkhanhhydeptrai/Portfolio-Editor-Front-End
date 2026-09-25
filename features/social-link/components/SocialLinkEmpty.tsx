"use client";

import React from "react";

const SocialLinkEmpty: React.FC = () => {
  return (
    <div className="flex min-h-80 items-center justify-center rounded-[28px] border border-dashed border-white/10 bg-white/2">
      <div className="text-center">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/3">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5 text-slate-500"
          >
            <path
              d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <path
              d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="text-sm text-slate-400">Chưa có liên kết nào.</p>

        <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
          Social links unavailable
        </p>
      </div>
    </div>
  );
};

export default SocialLinkEmpty;
