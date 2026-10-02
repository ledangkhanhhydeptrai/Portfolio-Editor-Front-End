"use client";

import React from "react";
import { Film } from "lucide-react";

const VideoProjectEmpty: React.FC = () => {
  return (
    <section className="mx-auto flex w-full max-w-350 flex-col items-center px-6 py-24 text-center lg:px-10">
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-violet-300/20 bg-violet-400/10 text-violet-300">
        <Film size={24} strokeWidth={1.6} />
      </span>

      <h2 className="mt-6 text-3xl font-medium tracking-[-0.03em] text-[#F4F3EF]">
        Chưa có video nào
      </h2>

      <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
        Các sản phẩm dựng video sẽ xuất hiện tại đây ngay khi được đăng.
      </p>
    </section>
  );
};

export default VideoProjectEmpty;
