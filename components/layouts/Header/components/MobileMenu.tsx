"use client";

import React from "react";
import Link from "next/link";

import {
  navItems,
  skillItems
} from "./headerData";

import {
  projectItems
} from "./Headerprojects";

import MobileAccountDropdown from "./account/MobileAccountDropdown";

interface MobileMenuProps {
  pathname: string;
  currentCategory: string | null;

  skillsOpen: boolean;
  onSkillsToggle: () => void;

  projectsOpen: boolean;
  onProjectsToggle: () => void;

  onClose: () => void;
  onContact: () => void;
  onLogout: () => void;

  hydrated: boolean;
  authReady: boolean;
  username: string | null;
}

const rowClass = (
  active: boolean
) =>
  `flex min-h-12 w-full items-center justify-between rounded-xl px-4 text-left text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#7C93FF] ${
    active
      ? "bg-[#7C93FF]/15 text-white ring-1 ring-inset ring-[#7C93FF]/30"
      : "text-[#B5B2A9] hover:bg-white/5 hover:text-white"
  }`;

interface GroupProps {
  label: string;
  active: boolean;
  open: boolean;

  onToggle: () => void;
  onClose: () => void;

  links: {
    label: string;
    href: string;
    active: boolean;
  }[];

  all: {
    label: string;
    href: string;
  };
}

const Group: React.FC<GroupProps> = ({
  label,
  active,
  open,
  onToggle,
  onClose,
  links,
  all
}) => {
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className={rowClass(active)}
      >
        <span>
          {label}
        </span>

        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-200 ${
            open
              ? "rotate-180"
              : ""
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
          open
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-1 mb-1 ml-5 space-y-0.5 border-l border-white/10 pl-3">
            {links.map(
              (link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  tabIndex={
                    open ? 0 : -1
                  }
                  className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    link.active
                      ? "bg-white/8 text-white"
                      : "text-[#9A978E] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            <Link
              href={all.href}
              onClick={onClose}
              tabIndex={
                open ? 0 : -1
              }
              className="block rounded-lg px-3 py-2.5 text-[13px] text-[#7E7B73] transition-colors hover:text-white"
            >
              {all.label} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileMenu: React.FC<
  MobileMenuProps
> = ({
  pathname,
  currentCategory,

  skillsOpen,
  onSkillsToggle,

  projectsOpen,
  onProjectsToggle,

  onClose,
  onContact,
  onLogout,

  hydrated,
  authReady,
  username
}) => {
  const isActive = (
    href: string
  ) =>
    href === "/"
      ? pathname === "/" &&
        !currentCategory
      : pathname === href ||
        pathname.startsWith(
          `${href}/`
        );

  const renderLink = (
    item: {
      label: string;
      href: string;
    }
  ) => (
    <Link
      key={item.href}
      href={item.href}
      onClick={onClose}
      aria-current={
        isActive(item.href)
          ? "page"
          : undefined
      }
      className={rowClass(
        isActive(item.href)
      )}
    >
      <span>
        {item.label}
      </span>

      <span
        aria-hidden="true"
        className="text-white/30"
      >
        →
      </span>
    </Link>
  );

  const before =
    navItems.filter(
      (item) =>
        item.href === "/" ||
        item.href === "/about"
    );

  const after =
    navItems.filter(
      (item) =>
        item.href !== "/" &&
        item.href !== "/about" &&
        item.href !== "/projects"
    );

  const skillsActive =
    isActive("/skills");

  const projectsActive =
    isActive("/projects");

  return (
    <div
      className="absolute top-full left-0 z-50 max-h-[calc(100dvh-4.5rem)] w-full overflow-y-auto border-b border-white/8 bg-[#0C0D10]/98 px-4 pt-3 pb-6 shadow-[0_30px_70px_rgba(0,0,0,0.55)] backdrop-blur-xl md:hidden"
      style={{
        animation:
          "mobileMenuIn 0.2s ease-out both"
      }}
    >
      <nav
        aria-label="Menu di động"
        className="space-y-0.5"
      >
        {before.map(
          renderLink
        )}

        <Group
          label="Kỹ năng"
          active={skillsActive}
          open={skillsOpen}
          onToggle={
            onSkillsToggle
          }
          onClose={onClose}
          links={skillItems.map(
            (skill) => ({
              label:
                skill.label,
              href:
                skill.href,
              active:
                skillsActive &&
                currentCategory ===
                  skill.category
            })
          )}
          all={{
            label:
              "Xem tất cả kỹ năng",
            href: "/skills"
          }}
        />

        <Group
          label="Dự án"
          active={
            projectsActive
          }
          open={
            projectsOpen
          }
          onToggle={
            onProjectsToggle
          }
          onClose={onClose}
          links={projectItems.map(
            (project) => ({
              label:
                project.label,
              href:
                project.href,
              active:
                projectsActive &&
                currentCategory ===
                  project.category
            })
          )}
          all={{
            label:
              "Xem tất cả dự án",
            href: "/projects"
          }}
        />

        {after.map(
          renderLink
        )}
      </nav>

      <div className="my-4 h-px w-full bg-white/8" />

      {/* ================================= */}
      {/* AUTH MOBILE                       */}
      {/* ================================= */}

      {!hydrated ||
      !authReady ? (
        <div className="h-13 w-full animate-pulse rounded-xl border border-white/8 bg-white/3" />
      ) : username ? (
        <MobileAccountDropdown
          username={username}
          onCloseMenu={
            onClose
          }
          onLogout={
            onLogout
          }
        />
      ) : (
        <div className="grid grid-cols-2 gap-2.5">
          <Link
            href="/login"
            onClick={onClose}
            className="flex h-12 items-center justify-center rounded-xl border border-white/12 text-sm font-medium text-[#D6D3CB] transition-colors hover:bg-white/5 hover:text-white active:scale-[0.98]"
          >
            Đăng nhập
          </Link>

          <Link
            href="/register"
            onClick={onClose}
            className="flex h-12 items-center justify-center rounded-xl border border-[#7C93FF]/40 bg-[#7C93FF]/10 text-sm font-medium text-white transition-colors hover:bg-[#7C93FF]/20 active:scale-[0.98]"
          >
            Đăng ký
          </Link>
        </div>
      )}

      <button
        type="button"
        onClick={onContact}
        className="mt-2.5 flex h-12 w-full items-center justify-center gap-1.5 rounded-xl bg-[#F2F0EA] text-sm font-semibold text-[#0C0D10] transition-colors hover:bg-white active:scale-[0.99]"
      >
        Liên hệ

        <span aria-hidden="true">
          ↗
        </span>
      </button>

      <p className="mt-4 flex items-center gap-2 px-1 text-xs text-[#7E7B73]">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

        Sẵn sàng nhận cơ hội mới
      </p>
    </div>
  );
};

export default MobileMenu;