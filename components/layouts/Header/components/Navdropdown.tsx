"use client";

import React from "react";
import Link from "next/link";
import { navPill } from "./Headerstyles";



export interface DropdownEntry {
  label: string;
  description: string;
  href: string;
  active: boolean;
  icon?: React.ReactNode;
}

interface NavDropdownProps {
  label: string;
  active: boolean;
  open: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  items: DropdownEntry[];
  footer: { label: string; href: string };
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  label,
  active,
  open,
  containerRef,
  onOpen,
  onClose,
  onToggle,
  items,
  footer
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
        className={navPill(active)}
      >
        <span>{label}</span>

        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className={`h-3 w-3 transition-transform duration-200 ${
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
        <div className="absolute left-1/2 top-full z-60 w-72 -translate-x-1/2 pt-3">
          <div
            role="menu"
            className="rounded-2xl border border-white/10 bg-[#14161B] p-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
            style={{ animation: "dropdownIn 0.18s ease-out both" }}
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={onClose}
                className={`group flex items-center gap-3 rounded-xl px-2.5 py-2.5 transition-colors focus-visible:outline-2 focus-visible:outline-[#7C93FF] ${
                  item.active ? "bg-white/8" : "hover:bg-white/5"
                }`}
              >
                {item.icon && (
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      item.active
                        ? "bg-[#7C93FF]/20 text-[#B4C2FF]"
                        : "bg-white/5 text-[#8B8981] group-hover:text-[#B4C2FF]"
                    }`}
                  >
                    {item.icon}
                  </span>
                )}

                <span className="min-w-0 flex-1">
                  <span
                    className={`block text-[13px] font-medium ${
                      item.active ? "text-white" : "text-[#D6D3CB]"
                    }`}
                  >
                    {item.label}
                  </span>

                  <span className="mt-0.5 block text-[11px] text-[#7E7B73]">
                    {item.description}
                  </span>
                </span>
              </Link>
            ))}

            <Link
              href={footer.href}
              role="menuitem"
              onClick={onClose}
              className="mt-1 flex items-center justify-between rounded-xl border-t border-white/8 px-3 pb-2 pt-3 text-[11px] text-[#8B8981] transition-colors hover:text-white"
            >
              <span>{footer.label}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;