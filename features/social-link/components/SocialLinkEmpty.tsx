"use client";

import React from "react";

const SocialLinkEmpty: React.FC = () => {
  return (
    <div className="flex min-h-72 items-center justify-center rounded-2xl border border-dashed border-white/15 px-6">
      <div className="text-center">
        <h2 className="text-lg font-medium text-[#F4F3EF]">Chưa có liên kết nào</h2>
        <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
          Các liên kết mạng xã hội sẽ hiện ở đây sau khi được thêm.
        </p>
      </div>
    </div>
  );
};

export default SocialLinkEmpty;
