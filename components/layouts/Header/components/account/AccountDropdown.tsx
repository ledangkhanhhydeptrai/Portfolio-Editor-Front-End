"use client";

import React from "react";
import Link from "next/link";

interface AccountDropdownProps {
  username: string;
  open: boolean;
  accountRef: React.RefObject<HTMLDivElement | null>;
  onToggle: () => void;
  onClose: () => void;
  onLogout: () => void;
}

const AccountDropdown: React.FC<AccountDropdownProps> = ({
  username,
  open,
  accountRef,
  onToggle,
  onClose,
  onLogout,
}) => {
  const firstLetter = username ? username.charAt(0).toUpperCase() : "U";

  return (
    <div ref={accountRef} className="relative hidden lg:block">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={onToggle}
        className={`flex h-9 items-center gap-1.5 rounded-full border px-4 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#7C93FF] ${
          open
            ? "border-[#7C93FF]/40 bg-[#7C93FF]/14 shadow-[0_0_24px_rgba(124,147,255,0.08)]"
            : "border-[#7C93FF]/20 bg-[#7C93FF]/8 hover:border-[#7C93FF]/35 hover:bg-[#7C93FF]/12"
        }`}
      >
        <span className="text-xs text-[#B5B2A9]">Hello,</span>

        <span className="max-w-32 truncate text-xs font-semibold text-[#9BADFF]">{username}</span>

        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className={`ml-0.5 h-3.5 w-3.5 shrink-0 text-[#7C93FF] transition-transform duration-200 ${
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

      {open && (
        <div
          role="menu"
          className="absolute top-[calc(100%+10px)] right-0 z-60 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#111318]/98 p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl"
          style={{
            animation: "accountDropdownIn 0.18s ease-out both",
          }}
        >
          <div className="border-b border-white/8 px-3 py-3">
            <p className="text-[10px] font-medium tracking-[0.12em] text-[#6F6C65] uppercase">
              Tài khoản
            </p>

            <div className="mt-2 flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#7C93FF]/25 bg-[#7C93FF]/10">
                <span className="text-xs font-semibold text-[#9BADFF]">{firstLetter}</span>
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-[#F2F0EA]">{username}</p>

                <p className="mt-0.5 text-[11px] text-[#7E7B73]">Portfolio account</p>
              </div>
            </div>
          </div>

          <div className="pt-1.5">
            <Link
              href="/profile"
              role="menuitem"
              onClick={onClose}
              className="group flex h-10 w-full items-center gap-3 rounded-xl px-3 text-sm text-[#D6D3CB] transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#7C93FF]"
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

              <span
                aria-hidden="true"
                className="ml-auto text-xs text-white/25 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white/50"
              >
                →
              </span>
            </Link>

            <div className="my-1 h-px bg-white/6" />

            <button
              type="button"
              role="menuitem"
              onClick={onLogout}
              className="group flex h-10 w-full items-center gap-3 rounded-xl px-3 text-sm text-red-300/75 transition-colors hover:bg-red-400/8 hover:text-red-300 focus-visible:outline-2 focus-visible:outline-red-400/50"
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

              <span
                aria-hidden="true"
                className="ml-auto text-xs opacity-40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:opacity-80"
              >
                →
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
