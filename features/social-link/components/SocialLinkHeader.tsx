"use client";

import React from "react";

interface SocialLinkHeaderProps {
  total: number;
}

const SocialLinkHeader: React.FC<SocialLinkHeaderProps> = ({ total }) => {
  return (
    <div className="mb-14 border-b border-white/10 pb-10">
      <div className="mb-7 flex items-center gap-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-indigo-300">
          06 · Connect
        </span>

        <div className="h-px w-10 bg-indigo-300/40" />

        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-600">
          {String(total).padStart(2, "0")} liên kết
        </span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-end">
        <div>
          <h1 className="text-5xl font-medium tracking-[-0.05em] text-[#F4F3EF] sm:text-6xl lg:text-7xl">
            Kết nối
            <span className="block text-slate-500">với tôi</span>
          </h1>
        </div>

        <p className="text-sm leading-7 text-slate-500">
          Theo dõi các nền tảng và kết nối với tôi qua những liên kết bên dưới.
        </p>
      </div>
    </div>
  );
};

export default SocialLinkHeader;
