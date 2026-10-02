"use client";

import React from "react";
import Link from "next/link";

interface MobileAccountDropdownProps {
  username: string;
  onCloseMenu: () => void;
  onLogout: () => void;
}

const MobileAccountDropdown: React.FC<MobileAccountDropdownProps> = ({
  username,
  onCloseMenu,
  onLogout,
}) => {
  const [open, setOpen] = React.useState(false);

  const firstLetter = username ? username.charAt(0).toUpperCase() : "U";

  const handleProfile = () => {
    setOpen(false);
    onCloseMenu();
  };

  const handleLogout = () => {
    setOpen(false);
    onCloseMenu();
    onLogout();
  };

  return (
    <div className="overflow-hidden rounded-xl border border-[#7C93FF]/20 bg-[#7C93FF]/8">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((previous) => !previous)}
        className="flex min-h-13 w-full items-center justify-between gap-3 px-4 py-2.5 text-left transition-colors hover:bg-[#7C93FF]/8"
      >
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#7C93FF]/25 bg-[#7C93FF]/10">
            <span className="text-xs font-semibold text-[#9BADFF]">{firstLetter}</span>
          </div>

          <div className="min-w-0">
            <p className="text-[11px] leading-none text-[#7E7B73]">Đã đăng nhập</p>

            <p className="mt-1.5 truncate text-sm font-semibold text-[#C4CEFF]">{username}</p>
          </div>
        </div>

        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className={`h-4 w-4 shrink-0 text-[#7C93FF] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/8 p-1.5">
            <Link
              href="/profile"
              onClick={handleProfile}
              tabIndex={open ? 0 : -1}
              className="group flex h-11 w-full items-center gap-3 rounded-lg px-3 text-sm text-[#D6D3CB] transition-colors hover:bg-white/5 hover:text-white"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-[#9BADFF]"
              >
                <circle cx="10" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.5" />

                <path
                  d="M4.5 16C4.9 12.9 6.8 11.5 10 11.5C13.2 11.5 15.1 12.9 15.5 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <span>Profile</span>

              <span aria-hidden="true" className="ml-auto text-white/25">
                →
              </span>
            </Link>

            <div className="mx-3 h-px bg-white/6" />

            <button
              type="button"
              tabIndex={open ? 0 : -1}
              onClick={handleLogout}
              className="flex h-11 w-full items-center gap-3 rounded-lg px-3 text-sm text-red-300/80 transition-colors hover:bg-red-400/8 hover:text-red-300"
            >
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4 shrink-0">
                <path
                  d="M8 4H5.5C4.67 4 4 4.67 4 5.5V14.5C4 15.33 4.67 16 5.5 16H8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                <path
                  d="M12 6L16 10L12 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path d="M7 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>

              <span>Đăng xuất</span>

              <span aria-hidden="true" className="ml-auto opacity-40">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAccountDropdown;
