import React from "react";
import Link from "next/link";

import type { MobileNavLinkProps } from "./headerTypes";

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  number,
  label,
  href,
  active,
  delay,
  onClick
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{
        animation: `mobileItemIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both`
      }}
      className={`group flex w-full items-center justify-between rounded-xl px-4 py-4 transition duration-300 ${
        active
          ? "bg-linear-to-r from-[#5B7CFA]/15 to-transparent text-[#EDECE8] shadow-[inset_0_0_0_1px_rgba(91,124,250,0.2)]"
          : "text-[#8A887F] hover:bg-white/4 hover:text-[#EDECE8]"
      }`}
    >
      <div className="flex items-center gap-4">
        <span
          className={`w-5 font-mono text-[8px] ${
            active ? "text-[#7F96F5]" : "text-[#4C4944]"
          }`}
        >
          {number}
        </span>

        <span className="text-[13px] font-medium">{label}</span>
      </div>

      <span
        className={`text-sm transition duration-300 group-hover:translate-x-1 ${
          active ? "text-[#7F96F5]" : "text-[#5F5C56]"
        }`}
      >
        →
      </span>
    </Link>
  );
};

export default MobileNavLink;
