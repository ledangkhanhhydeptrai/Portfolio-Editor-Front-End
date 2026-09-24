import React from "react";

const AboutBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-[#1A1D28] via-[#151821] to-[#12141C]" />

      <div className="absolute -top-60 left-1/2 h-150 w-200 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-[180px]" />

      <div className="absolute -left-60 top-120 h-130 w-130 rounded-full bg-blue-500/8 blur-[170px]" />

      <div className="absolute -right-60 top-250 h-130 w-130 rounded-full bg-violet-500/8 blur-[170px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.045)_1px,transparent_0)] bg-size-[32px_32px]" />
    </div>
  );
};

export default AboutBackground;
