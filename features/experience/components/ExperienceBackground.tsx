import React from "react";

const ExperienceBackground: React.FC = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-size-[30px_30px] mask-[radial-gradient(ellipse_80%_70%_at_50%_20%,#000_20%,transparent_80%)]" />

      <div
        className="pointer-events-none absolute -left-40 top-40 h-130 w-130 rounded-full bg-indigo-500/7 blur-[160px]"
        style={{
          animation: "experienceGlow 12s ease-in-out infinite"
        }}
      />

      <div
        className="pointer-events-none absolute -right-40 top-160 h-130 w-130 rounded-full bg-violet-500/5 blur-[160px]"
        style={{
          animation: "experienceGlow 15s ease-in-out infinite reverse"
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-[#07070c] to-transparent" />
    </>
  );
};

export default ExperienceBackground;
