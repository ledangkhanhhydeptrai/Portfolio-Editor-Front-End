import React from "react";
import Link from "next/link";

import { skillItems } from "./headerData";

import MobileNavLink from "./MobileNavLink";

interface MobileMenuProps {
  pathname: string;

  currentCategory: string | null;

  skillsOpen: boolean;

  onSkillsToggle: () => void;

  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  pathname,
  currentCategory,
  skillsOpen,
  onSkillsToggle,
  onClose
}) => {
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const skillsActive =
    pathname === "/skills" || pathname.startsWith("/skills/");

  return (
    <div
      className="absolute left-0 top-full w-full border-t border-white/6 bg-[#0B0B0D]/98 backdrop-blur-2xl md:hidden"
      style={{
        animation: "mobileMenuIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) both"
      }}
    >
      <nav className="max-h-[calc(100vh-72px)] w-full overflow-y-auto px-4 py-4 sm:px-6">
        <div className="space-y-1">
          <MobileNavLink
            number="01"
            label="Trang chủ"
            href="/"
            active={pathname === "/"}
            onClick={onClose}
            delay={0}
          />

          <MobileNavLink
            number="02"
            label="Giới thiệu"
            href="/about"
            active={isActive("/about")}
            onClick={onClose}
            delay={0.05}
          />

          {/* SKILLS */}

          <div
            style={{
              animation:
                "mobileItemIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both"
            }}
          >
            <button
              type="button"
              onClick={onSkillsToggle}
              className={`group flex w-full items-center justify-between rounded-xl px-4 py-4 transition duration-300 ${
                skillsActive
                  ? "bg-linear-to-r from-[#5B7CFA]/15 to-transparent text-[#EDECE8] shadow-[inset_0_0_0_1px_rgba(91,124,250,0.2)]"
                  : "text-[#8A887F] hover:bg-white/4 hover:text-[#EDECE8]"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`w-5 font-mono text-[8px] ${
                    skillsActive ? "text-[#7F96F5]" : "text-[#4C4944]"
                  }`}
                >
                  03
                </span>

                <span className="text-[13px] font-medium">Kỹ năng</span>

                {skillsActive && (
                  <span className="h-1 w-1 rounded-full bg-indigo-300 shadow-[0_0_8px_#8EA5FF]" />
                )}
              </div>

              <svg
                viewBox="0 0 20 20"
                fill="none"
                className={`h-4 w-4 transition-transform duration-300 ${
                  skillsOpen ? "rotate-180 text-indigo-300" : "text-[#5F5C56]"
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
            </button>

            <div
              className={`grid transition-all duration-300 ${
                skillsOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="ml-9 mt-2 space-y-1 border-l border-white/7 pl-3">
                  {skillItems.map((item) => {
                    const active =
                      skillsActive && currentCategory === item.category;

                    return (
                      <Link
                        key={item.category}
                        href={item.href}
                        onClick={onClose}
                        className={`group flex items-center gap-3 rounded-xl border px-3 py-3 transition-all duration-300 ${
                          active
                            ? "border-indigo-300/20 bg-indigo-300/8"
                            : "border-transparent hover:border-white/7 hover:bg-white/4"
                        }`}
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                            active
                              ? "border-indigo-300/20 bg-indigo-300/10 text-indigo-200"
                              : "border-white/7 bg-white/3 text-[#686B77]"
                          }`}
                        >
                          {item.icon}
                        </div>

                        <div className="min-w-0 flex-1 text-left">
                          <p
                            className={`text-[11px] font-medium ${
                              active ? "text-[#F0EFEA]" : "text-[#AAA8A1]"
                            }`}
                          >
                            {item.label}
                          </p>

                          <p className="mt-0.5 text-[8px] text-[#5F5C56]">
                            {item.description}
                          </p>
                        </div>

                        <span
                          className={`text-xs ${
                            active ? "text-indigo-300" : "text-[#4F5260]"
                          }`}
                        >
                          →
                        </span>
                      </Link>
                    );
                  })}

                  <Link
                    href="/skills"
                    onClick={onClose}
                    className="flex items-center justify-between px-3 py-3 text-[9px] text-[#68655E] transition hover:text-indigo-200"
                  >
                    <span>Xem tất cả</span>

                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <MobileNavLink
            number="04"
            label="Dự án"
            href="/projects"
            active={isActive("/projects")}
            onClick={onClose}
            delay={0.15}
          />

          <MobileNavLink
            number="05"
            label="Kinh nghiệm"
            href="/experience"
            active={isActive("/experience")}
            onClick={onClose}
            delay={0.2}
          />
        </div>

        {/* CONTACT */}

        <div className="mt-4 border-t border-white/7 pt-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="group relative flex w-full items-center justify-between overflow-hidden rounded-xl bg-[#EDECE8] px-5 py-4 text-[12px] font-semibold text-[#0B0B0D] transition active:scale-[0.99]"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-[#5B7CFA]/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

            <span className="relative z-10">Liên hệ</span>

            <span className="relative z-10">↗</span>
          </Link>

          <div className="mt-5 flex items-center justify-between px-1 pb-1">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#68655E]">
                Sẵn sàng nhận cơ hội mới
              </span>
            </div>

            <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-[#44413D]">
              2026
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
