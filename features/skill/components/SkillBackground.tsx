import React from "react";

const SkillBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* BASE */}

      <div className="absolute inset-0 bg-linear-to-br from-[#181A24] via-[#12141D] to-[#101118]" />

      {/* TOP LIGHT */}

      <div className="absolute -top-70 left-1/2 h-150 w-200 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-[180px]" />

      {/* DEVELOPMENT */}

      <div
        className="absolute left-[5%] top-30 h-100 w-100 rounded-full bg-indigo-500/12 blur-[130px]"
        style={{
          animation: "skillBlobDrift 10s ease-in-out infinite"
        }}
      />

      {/* VIDEO */}

      <div
        className="absolute right-0 top-60 h-100 w-100 rounded-full bg-fuchsia-500/8 blur-[140px]"
        style={{
          animation: "skillBlobDriftSide 12s ease-in-out infinite 1s"
        }}
      />

      {/* DRIVING */}

      <div
        className="absolute bottom-10 right-[20%] h-90 w-90 rounded-full bg-emerald-500/7 blur-[130px]"
        style={{
          animation: "skillBlobDriftSide 13s ease-in-out infinite 3s"
        }}
      />

      {/* GRID */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] bg-size-[30px_30px] mask-[radial-gradient(ellipse_80%_75%_at_50%_20%,#000_20%,transparent_85%)]" />

      {/* LIGHT */}

      <div className="absolute inset-x-0 top-0 h-150 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.045),transparent_70%)]" />
    </div>
  );
};

export default SkillBackground;
