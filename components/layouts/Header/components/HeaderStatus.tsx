import React from "react";

const HeaderStatus: React.FC = () => {
  return (
    <div className="hidden items-center gap-2 rounded-full border border-white/6 bg-white/2 px-3 py-1.5 lg:flex">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </span>
    </div>
  );
};

export default HeaderStatus;
