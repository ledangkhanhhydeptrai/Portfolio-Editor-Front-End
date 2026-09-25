"use client";

import React from "react";
import Link from "next/link";

interface MobileProjectsMenuProps {
  pathname: string;
  currentCategory: string | null;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
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

const MobileProjectsMenu: React.FC<MobileProjectsMenuProps> = ({
  pathname,
  currentCategory,
  open,
  onToggle,
  onClose
}) => {
  const projectsActive =
    pathname === "/projects" || pathname.startsWith("/projects/");

  const isProjectActive = (category: string) => {
    return projectsActive && currentCategory === category;
  };

  return (
    <div className="border-b border-white/7">
      {/* TRIGGER */}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] text-slate-600">04</span>

          <span
            className={`
              text-sm
              font-medium
              transition-colors
              ${projectsActive ? "text-[#F0EFEA]" : "text-slate-300"}
            `}
          >
            Dự án
          </span>
        </div>

        <span
          className={`
            text-xs
            text-slate-500
            transition-transform
            duration-300
            ${open ? "rotate-180" : ""}
          `}
        >
          ↓
        </span>
      </button>

      {/* CONTENT */}

      <div
        className={`
          grid
          transition-all
          duration-300
          ${
            open
              ? "grid-rows-[1fr] pb-4 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="ml-6 flex flex-col gap-1 border-l border-white/7 pl-4">
            {projectItems.map((item) => {
              const active = isProjectActive(item.category);

              return (
                <Link
                  key={item.category}
                  href={item.href}
                  onClick={onClose}
                  className={`
                      group
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-3
                      transition-all
                      duration-300
                      ${active ? "bg-indigo-400/7" : "hover:bg-white/4"}
                    `}
                >
                  <span
                    className={`
                        font-mono
                        text-[8px]
                        ${active ? "text-indigo-300" : "text-slate-600"}
                      `}
                  >
                    {item.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div
                      className={`
                          text-xs
                          font-medium
                          ${active ? "text-[#F0EFEA]" : "text-slate-300"}
                        `}
                    >
                      {item.label}
                    </div>

                    <div className="mt-0.5 text-[9px] text-slate-600">
                      {item.description}
                    </div>
                  </div>

                  <span
                    className={`
                        text-xs
                        ${active ? "text-indigo-300" : "text-slate-600"}
                      `}
                  >
                    →
                  </span>
                </Link>
              );
            })}

            {/* ALL */}

            <Link
              href="/projects"
              onClick={onClose}
              className={`
                mt-1
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

              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProjectsMenu;
