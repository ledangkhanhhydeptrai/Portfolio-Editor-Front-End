"use client";

import React from "react";

const VideoProjectEmpty: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden bg-[#1B1E29] px-6 py-20 text-[#F0EFEA] lg:px-10">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />

        <div className="absolute -right-50 top-0 h-125 w-125 rounded-full bg-violet-500/5 blur-[140px]" />
      </div>

      {/* CONTENT */}

      <div className="relative mx-auto w-full max-w-350">
        <div className="relative overflow-hidden rounded-[28px] border border-violet-300/10 bg-[#202330]/80 px-8 py-16 sm:px-10">
          {/* NUMBER */}

          <span className="pointer-events-none absolute -bottom-8 right-8 select-none font-mono text-[140px] font-semibold leading-none text-white/2">
            02
          </span>

          <div className="relative max-w-180">
            {/* LABEL */}

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-violet-400" />

              <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-violet-300">
                Portfolio đang được cập nhật
              </span>
            </div>

            {/* TITLE */}

            <h2 className="mt-8 text-3xl font-medium tracking-[-0.04em] text-[#F4F3EF] sm:text-4xl">
              Sản phẩm video sắp được cập nhật.
            </h2>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-160 text-sm leading-7 text-slate-500">
              Các sản phẩm dựng video sẽ được cập nhật tại đây, bao gồm video
              ngắn, video sản phẩm và các bài dựng tập trung vào kể chuyện bằng
              hình ảnh.
            </p>

            {/* STATUS */}

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-violet-300/15 bg-violet-300/5 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-violet-300">
                Sắp ra mắt
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoProjectEmpty;
