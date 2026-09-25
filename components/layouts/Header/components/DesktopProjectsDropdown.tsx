"use client";

import React from "react";
import Link from "next/link";

interface DesktopProjectsDropdownProps {
  pathname: string;
  currentCategory: string | null;
  open: boolean;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

const projectItems = [
  {
    number: "01",
    label: "Phát triển",
    description: "Ứng dụng web & phần mềm",
    category: "DEVELOPMENT",
    href: "/projects?category=DEVELOPMENT"
  },
  {
    number: "02",
    label: "Dựng video",
    description: "Video & hậu kỳ",
    category: "VIDEO_EDITING",
    href: "/projects?category=VIDEO_EDITING"
  },
  {
    number: "03",
    label: "Lái xe",
    description: "Kỹ năng & thực hành",
    category: "DRIVING",
    href: "/projects?category=DRIVING"
  }
];

const DesktopProjectsDropdown: React.FC<DesktopProjectsDropdownProps> = ({
  pathname,
  currentCategory,
  open,
  dropdownRef,
  onOpen,
  onClose,
  onToggle
}) => {
  const projectsActive =
    pathname === "/projects" || pathname.startsWith("/projects/");

  const isProjectActive = (category: string) => {
    return projectsActive && currentCategory === category;
  };

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      {/* TRIGGER */}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`
          group relative flex
          items-center gap-1.5
          px-1 py-6
          text-[11px]
          font-medium
          transition-colors
          duration-300
          ${
            projectsActive
              ? "text-[#F0EFEA]"
              : "text-slate-400 hover:text-[#F0EFEA]"
          }
        `}
      >
        <span>Dự án</span>

        <svg
          viewBox="0 0 20 20"
          fill="none"
          className={`
            h-3 w-3
            transition-transform
            duration-300
            ${open ? "rotate-180" : ""}
          `}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span
          className={`
            absolute
            inset-x-0
            bottom-4
            h-px
            origin-left
            bg-linear-to-r
            from-[#5B7CFA]
            to-[#8EA5FF]
            transition-transform
            duration-300
            ${
              projectsActive
                ? "scale-x-100"
                : "scale-x-0 group-hover:scale-x-100"
            }
          `}
        />
      </button>

      {/* DROPDOWN */}

      <div
        className={`
          absolute
          left-1/2
          top-full
          w-80
          -translate-x-1/2
          pt-2
          transition-all
          duration-300
          ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }
        `}
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#11131B]/98 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
          {/* TOP LIGHT */}

          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-[#8EA5FF]/50 to-transparent" />

          {/* GLOW */}

          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-[80px]" />

          {/* LABEL */}

          <div className="relative px-3 pb-2 pt-3">
            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-slate-600">
              Dự án
            </span>
          </div>

          {/* ITEMS */}

          <div className="relative flex flex-col gap-1">
            {projectItems.map((item) => {
              const active = isProjectActive(item.category);

              return (
                <Link
                  key={item.category}
                  href={item.href}
                  onClick={onClose}
                  className={`
                      group/item
                      relative
                      flex
                      items-center
                      gap-4
                      overflow-hidden
                      rounded-xl
                      border
                      px-3
                      py-3
                      transition-all
                      duration-300
                      ${
                        active
                          ? "border-indigo-400/20 bg-indigo-400/7"
                          : "border-transparent hover:border-white/7 hover:bg-white/4"
                      }
                    `}
                >
                  <span
                    className={`
                        flex h-9 w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        font-mono
                        text-[9px]
                        transition-all
                        duration-300
                        ${
                          active
                            ? "border-indigo-400/25 bg-indigo-400/10 text-indigo-300"
                            : "border-white/7 bg-white/3 text-slate-600 group-hover/item:text-slate-300"
                        }
                      `}
                  >
                    {item.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div
                      className={`
                          text-xs
                          font-medium
                          transition-colors
                          ${
                            active
                              ? "text-[#F0EFEA]"
                              : "text-slate-300 group-hover/item:text-white"
                          }
                        `}
                    >
                      {item.label}
                    </div>

                    <div className="mt-0.5 text-[10px] text-slate-600">
                      {item.description}
                    </div>
                  </div>

                  <span
                    className={`
                        text-xs
                        transition-all
                        duration-300
                        ${
                          active
                            ? "text-indigo-300"
                            : "translate-x-1 text-slate-700 opacity-0 group-hover/item:translate-x-0 group-hover/item:text-indigo-300 group-hover/item:opacity-100"
                        }
                      `}
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </div>

          {/* ALL */}

          <div className="relative mt-2 border-t border-white/7 pt-2">
            <Link
              href="/projects"
              onClick={onClose}
              className={`
                group/all
                flex
                items-center
                justify-between
                rounded-xl
                px-3
                py-3
                text-[10px]
                transition-all
                duration-300
                ${
                  projectsActive && !currentCategory
                    ? "bg-white/5 text-[#F0EFEA]"
                    : "text-slate-500 hover:bg-white/4 hover:text-slate-300"
                }
              `}
            >
              <span>Xem tất cả dự án</span>

              <span className="transition-transform duration-300 group-hover/all:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopProjectsDropdown;
