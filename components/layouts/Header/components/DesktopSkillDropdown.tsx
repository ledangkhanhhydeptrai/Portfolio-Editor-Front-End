import React from "react";
import Link from "next/link";

import { skillItems } from "./headerData";

import SkillMenuItem from "./SkillMenuItem";

interface DesktopSkillDropdownProps {
  open: boolean;
  skillsActive: boolean;
  currentCategory: string | null;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

const DesktopSkillDropdown: React.FC<DesktopSkillDropdownProps> = ({
  open,
  skillsActive,
  currentCategory,
  containerRef,
  onOpen,
  onClose,
  onToggle
}) => {
  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={onToggle}
        className={`group relative flex items-center gap-1.5 overflow-hidden rounded-lg px-3.5 py-2 text-[11px] font-medium transition-all duration-300 ${
          skillsActive
            ? "bg-linear-to-r from-[#5B7CFA]/20 to-[#8EA5FF]/10 text-[#EDECE8] shadow-[inset_0_0_0_1px_rgba(91,124,250,0.25)]"
            : "text-[#8A887F] hover:bg-white/5 hover:text-[#EDECE8]"
        }`}
      >
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/6 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

        <span className="relative">Kỹ năng</span>

        <svg
          viewBox="0 0 20 20"
          fill="none"
          className={`relative h-3 w-3 transition-transform duration-300 ${
            open ? "rotate-180 text-[#8EA5FF]" : ""
          }`}
        >
          <path
            d="M6 8L10 12L14 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span
          className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-[#5B7CFA] shadow-[0_0_8px_#5B7CFA] transition-all duration-300 ${
            skillsActive ? "w-3 opacity-100" : "w-0 opacity-0"
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-60 w-80 -translate-x-1/2 pt-3">
          <div
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#151821]/98 p-2 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
            style={{
              animation:
                "skillDropdownIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) both"
            }}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-15 -top-15 h-35 w-35 rounded-full bg-indigo-400/10 blur-[50px]" />

              <div className="absolute -bottom-15 -left-15 h-35 w-35 rounded-full bg-violet-400/7 blur-[50px]" />

              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-indigo-300/40 to-transparent" />
            </div>

            <div className="relative px-3 pb-2 pt-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[7px] uppercase tracking-[0.22em] text-indigo-300">
                    Chọn lĩnh vực
                  </p>

                  <p className="mt-1 text-[10px] text-[#6F6C65]">
                    Kỹ năng theo chuyên môn
                  </p>
                </div>

                <span className="rounded-full border border-indigo-300/15 bg-indigo-300/5 px-2 py-1 font-mono text-[7px] text-indigo-200/70">
                  03
                </span>
              </div>
            </div>

            <div className="relative mt-1 space-y-1">
              {skillItems.map((item) => (
                <SkillMenuItem
                  key={item.category}
                  item={item}
                  active={skillsActive && currentCategory === item.category}
                  onClick={onClose}
                />
              ))}
            </div>

            <div className="relative mt-2 border-t border-white/6 px-3 pb-1 pt-3">
              <Link
                href="/skills"
                onClick={onClose}
                className="group flex items-center justify-between text-[8px] text-[#68655E] transition-colors hover:text-indigo-200"
              >
                <span>Xem tất cả kỹ năng</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopSkillDropdown;
