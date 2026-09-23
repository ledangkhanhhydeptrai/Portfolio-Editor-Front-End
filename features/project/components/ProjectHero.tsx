import React from "react";

interface ProjectHeroProps {
  totalProjects: number;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ totalProjects }) => {
  return (
    <div
      className="mb-14"
      style={{
        animation: "projectFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both"
      }}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-300">
          Selected Work
        </span>

        <span className="h-px w-12 bg-indigo-400/50" />
      </div>

      <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="max-w-3xl bg-linear-to-b from-white via-slate-100 to-slate-500 bg-clip-text text-4xl font-semibold tracking-[-0.04em] text-transparent sm:text-5xl lg:text-6xl">
            Projects
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
            Những sản phẩm, nội dung và kỹ năng thực tế tôi đã xây dựng hoặc
            đang tiếp tục phát triển qua ba hướng: Development, Video Editing và
            Driving.
          </p>
        </div>

        <div className="flex items-end gap-3">
          <span className="font-mono text-4xl font-light text-slate-200">
            {String(totalProjects).padStart(2, "0")}
          </span>

          <span className="pb-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
            Projects
          </span>
        </div>
      </div>

      <div className="mt-10 h-px w-full overflow-hidden bg-white/7">
        <div
          className="h-full w-full origin-left bg-linear-to-r from-indigo-400/60 via-white/10 to-transparent"
          style={{
            animation: "projectLine 1s cubic-bezier(0.16,1,0.3,1) both 0.2s"
          }}
        />
      </div>
    </div>
  );
};

export default ProjectHero;
