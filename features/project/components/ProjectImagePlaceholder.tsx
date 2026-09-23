import React from "react";

const ProjectImagePlaceholder: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#0B0B10]">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/7 bg-white/3">
        <svg className="h-5 w-5 text-slate-700" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />

          <path
            d="m4 16 4.5-4.5 3.5 3.5 2-2 6 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          <circle
            cx="15.5"
            cy="8.5"
            r="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProjectImagePlaceholder;
