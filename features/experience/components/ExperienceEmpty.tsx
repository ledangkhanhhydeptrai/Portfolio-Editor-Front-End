import React from "react";

const ExperienceEmpty: React.FC = () => {
  return (
    <div className="mt-10 rounded-3xl border border-dashed border-white/10 bg-white/3 px-6 py-20 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/7 bg-white/3">
        <svg className="h-5 w-5 text-slate-600" viewBox="0 0 24 24" fill="none">
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

      <h2 className="mt-5 text-sm font-medium text-slate-300">
        Chưa có kinh nghiệm.
      </h2>

      <p className="mx-auto mt-2 max-w-sm text-xs leading-6 text-slate-600">
        Kinh nghiệm làm việc sẽ được cập nhật tại đây.
      </p>
    </div>
  );
};

export default ExperienceEmpty;
