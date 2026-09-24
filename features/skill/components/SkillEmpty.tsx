import React from "react";

const SkillEmpty: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-white/12 bg-white/4 px-6 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
        <svg className="h-7 w-7 text-slate-500" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 12h6M9 16h6M8 4h8a2 2 0 0 1 2 2v13l-4-2-2 2-2-2-4 2V6a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div>
        <p className="text-sm font-medium text-slate-200">
          Chưa có kỹ năng nào
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Danh sách kỹ năng sẽ hiển thị tại đây khi có dữ liệu.
        </p>
      </div>
    </div>
  );
};

export default SkillEmpty;
