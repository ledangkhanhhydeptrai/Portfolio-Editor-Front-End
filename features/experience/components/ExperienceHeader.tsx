import React from "react";

interface ExperienceHeaderProps {
  total: number;
}

const ExperienceHeader: React.FC<ExperienceHeaderProps> = ({ total }) => {
  return (
    <div
      className="mb-14"
      style={{
        animation: "experienceFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both"
      }}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-300">
          Hành trình nghề nghiệp
        </span>

        <span className="h-px w-12 bg-indigo-400/50" />

        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
          2026
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="max-w-3xl bg-linear-to-b from-white via-slate-100 to-slate-500 bg-clip-text text-4xl font-semibold tracking-[-0.04em] text-transparent sm:text-5xl lg:text-6xl">
            Kinh nghiệm
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
            Những trải nghiệm thực tế trong quá trình làm việc, thực tập và phát
            triển kỹ năng của tôi, từ xử lý dữ liệu đến sáng tạo nội dung video.
          </p>
        </div>

        <div className="flex items-end gap-3">
          <span className="font-mono text-4xl font-light text-slate-200">
            {String(total).padStart(2, "0")}
          </span>

          <span className="pb-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
            Vị trí
          </span>
        </div>
      </div>

      <div className="mt-10 h-px w-full bg-linear-to-r from-indigo-400/60 via-violet-400/20 to-transparent" />
    </div>
  );
};

export default ExperienceHeader;
