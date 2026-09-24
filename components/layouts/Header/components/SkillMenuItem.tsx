import React from "react";
import Link from "next/link";

import type { SkillMenuItemType } from "./headerTypes";

interface SkillMenuItemProps {
  item: SkillMenuItemType;
  active: boolean;
  onClick: () => void;
}

const SkillMenuItem: React.FC<SkillMenuItemProps> = ({
  item,
  active,
  onClick
}) => {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`group flex items-center gap-3 rounded-xl border px-3 py-3 transition-all duration-300 ${
        active
          ? "border-indigo-300/20 bg-linear-to-r from-indigo-400/15 to-violet-400/5"
          : "border-transparent hover:border-white/7 hover:bg-white/4"
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
          active
            ? "border-indigo-300/25 bg-indigo-300/10 text-indigo-200"
            : "border-white/7 bg-white/3 text-[#777A86] group-hover:border-indigo-300/15 group-hover:bg-indigo-300/7 group-hover:text-indigo-200"
        }`}
        style={{
          animation: "skillIconFloat 4s ease-in-out infinite"
        }}
      >
        {item.icon}
      </div>

      <div className="min-w-0 flex-1 text-left">
        <div className="flex items-center gap-2">
          <p
            className={`text-[11px] font-medium transition-colors ${
              active
                ? "text-[#F0EFEA]"
                : "text-[#B5B3AD] group-hover:text-[#F0EFEA]"
            }`}
          >
            {item.label}
          </p>

          {active && (
            <span className="h-1 w-1 rounded-full bg-indigo-300 shadow-[0_0_8px_#8EA5FF]" />
          )}
        </div>

        <p className="mt-0.5 text-[8px] text-[#5F5C56] transition-colors group-hover:text-[#85827A]">
          {item.description}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-mono text-[7px] text-[#4F5260]">
          {item.number}
        </span>

        <span
          className={`text-xs transition-all duration-300 group-hover:translate-x-1 ${
            active
              ? "text-indigo-300"
              : "text-[#4F5260] group-hover:text-indigo-300"
          }`}
        >
          →
        </span>
      </div>
    </Link>
  );
};

export default SkillMenuItem;
