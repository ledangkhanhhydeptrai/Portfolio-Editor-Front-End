"use client";

import React from "react";

interface EducationHeaderProps {
  total: number;
}

const EducationHeader: React.FC<EducationHeaderProps> = ({ total }) => {
  return (
    <div className="mb-14 border-b border-white/10 pb-10">
      {/* EYEBROW */}

      <div className="mb-7 flex items-center gap-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-indigo-300">
          05 · Education
        </span>

        <div className="h-px w-10 bg-indigo-300/40" />

        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-600">
          {String(total).padStart(2, "0")} hồ sơ
        </span>
      </div>

      {/* TITLE */}

      <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-end">
        <div>
          <h1 className="max-w-220 text-5xl font-medium tracking-[-0.05em] text-[#F4F3EF] sm:text-6xl lg:text-7xl">
            Hành trình
            <span className="block text-slate-500">học vấn</span>
          </h1>
        </div>

        <div className="lg:pb-2">
          <p className="text-sm leading-7 text-slate-500">
            Thông tin về quá trình học tập và nền tảng học vấn của tôi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationHeader;
