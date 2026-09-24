import React from "react";

const ExperienceFooter: React.FC = () => {
  return (
    <div className="relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-white/3 px-6 py-14 text-center backdrop-blur-sm">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-60 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/8 blur-[100px]" />

        <div className="absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-blue-400/6 blur-[80px]" />

        <div className="absolute -right-20 top-0 h-40 w-40 rounded-full bg-violet-400/6 blur-[80px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.045)_1px,transparent_0)] bg-size-[28px_28px]" />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center">
        {/* ICON */}

        <div className="relative">
          <div className="absolute inset-0 scale-150 rounded-2xl bg-indigo-400/15 blur-[25px]" />

          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-300/7 shadow-[0_12px_35px_rgba(0,0,0,0.18)]">
            <svg
              className="h-6 w-6 text-indigo-200"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="4"
                y="7"
                width="16"
                height="12"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <path
                d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* LABEL */}

        <div className="mt-7 flex items-center gap-3">
          <span className="h-px w-8 bg-linear-to-r from-transparent to-indigo-300/50" />

          <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-indigo-300">
            Hành trình sự nghiệp
          </span>

          <span className="h-px w-8 bg-linear-to-l from-transparent to-indigo-300/50" />
        </div>

        {/* TITLE */}

        <h2 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#F4F3EF] sm:text-2xl">
          Hành trình vẫn đang{" "}
          <span className="bg-linear-to-r from-indigo-200 to-violet-300 bg-clip-text text-transparent">
            tiếp tục.
          </span>
        </h2>

        {/* DESCRIPTION */}

        <p className="mx-auto mt-4 max-w-md text-xs leading-6 text-slate-400">
          Mỗi trải nghiệm là một bước tiến mới trong quá trình học hỏi, phát
          triển kỹ năng và hoàn thiện bản thân.
        </p>

        {/* STATUS */}

        <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-indigo-300/15 bg-indigo-300/5 px-4 py-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-300 opacity-40" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-300" />
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-indigo-200/80">
            Đang phát triển
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceFooter;
