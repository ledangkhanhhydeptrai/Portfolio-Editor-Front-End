import React from "react";
import Link from "next/link";

interface HeaderBrandProps {
  onClick: () => void;
}

const HeaderBrand: React.FC<HeaderBrandProps> = ({ onClick }) => {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group flex min-w-fit items-center gap-3"
    >
      <div className="relative flex h-9 w-9 items-center justify-center">
        <div
          className="absolute -inset-0.5 rounded-xl opacity-60 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "conic-gradient(from 0deg, #5B7CFA, transparent 30%, transparent 70%, #8EA5FF, #5B7CFA)",
            animation: "logoRingSpin 5s linear infinite"
          }}
        />

        <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#0B0B0D] transition duration-300 group-hover:rotate-[8deg] group-hover:border-[#5B7CFA]/40">
          <span className="relative z-10 text-[11px] font-bold tracking-tight text-[#EDECE8]">
            KH
          </span>

          <div
            className="absolute -bottom-5 -right-5 h-10 w-10 rounded-full bg-[#5B7CFA]/25 blur-xl transition duration-300 group-hover:bg-[#5B7CFA]/45"
            style={{
              animation: "logoGlowPulse 3s ease-in-out infinite"
            }}
          />
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="flex items-center gap-2">
          <p className="brand-gradient-text font-['Fraunces'] text-sm">
            Khánh Hỷ
          </p>

          <span className="relative flex h-1 w-1">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5B7CFA] opacity-60" />

            <span className="relative h-1 w-1 rounded-full bg-[#5B7CFA]" />
          </span>
        </div>

        <p className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.2em] text-[#5c584f]">
          Portfolio cá nhân
        </p>
      </div>
    </Link>
  );
};

export default HeaderBrand;
