import React from "react";

import type { SkillProps } from "../skillTypes";

export interface CategoryMeta {
  dot: string;
  text: string;
  glow: string;
  border: string;
  ring: string;
  softBackground: string;
  icon: React.ReactNode;
}

export interface RecruiterMeta {
  position: string;
  label: string;
  description: string;
  status: string;
}

/* =========================================================
   CATEGORY META
========================================================= */

export const CATEGORY_META: Record<string, CategoryMeta> = {
  VIDEO_EDITING: {
    dot: "bg-fuchsia-400",
    text: "text-fuchsia-300",

    glow: "bg-fuchsia-500/12",

    border: "hover:border-fuchsia-400/30",

    ring: "group-hover:ring-fuchsia-400/30",

    softBackground: "bg-fuchsia-400/5",

    icon: (
      <path
        d="M4 6.5A1.5 1.5 0 0 1 5.5 5h7A1.5 1.5 0 0 1 14 6.5v11A1.5 1.5 0 0 1 12.5 19h-7A1.5 1.5 0 0 1 4 17.5v-11ZM14 9.5l5.2-2.9a.6.6 0 0 1 .8.53v9.74a.6.6 0 0 1-.8.53L14 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    )
  },

  DEVELOPMENT: {
    dot: "bg-indigo-400",
    text: "text-indigo-300",

    glow: "bg-indigo-500/12",

    border: "hover:border-indigo-400/30",

    ring: "group-hover:ring-indigo-400/30",

    softBackground: "bg-indigo-400/5",

    icon: (
      <path
        d="m9 8-4 4 4 4M15 8l4 4-4 4M13 5l-2 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },

  DRIVING: {
    dot: "bg-emerald-400",
    text: "text-emerald-300",

    glow: "bg-emerald-500/12",

    border: "hover:border-emerald-400/30",

    ring: "group-hover:ring-emerald-400/30",

    softBackground: "bg-emerald-400/5",

    icon: (
      <path
        d="M5 16.5v-4l1.7-4.6A2 2 0 0 1 8.6 6.5h6.8a2 2 0 0 1 1.9 1.4L19 12.5v4M5 16.5a1.5 1.5 0 0 0 1.5 1.5h.2A1.5 1.5 0 0 0 8 16.5v-.7H16v.7a1.5 1.5 0 0 0 1.5 1.5h.2a1.5 1.5 0 0 0 1.3-1.5M5 16.5H4M19 16.5h1M7.5 12h9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  }
};

export const DEFAULT_META: CategoryMeta = {
  dot: "bg-slate-400",
  text: "text-slate-300",

  glow: "bg-slate-500/10",

  border: "hover:border-slate-400/30",

  ring: "group-hover:ring-slate-400/30",

  softBackground: "bg-slate-400/5",

  icon: <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
};

/* =========================================================
   RECRUITER
========================================================= */

export const RECRUITER_META: Record<string, RecruiterMeta> = {
  VIDEO_EDITING: {
    position: "Video Editor",

    label: "Dành cho nhà tuyển dụng",

    description:
      "Phù hợp với các vị trí dựng video, nội dung ngắn, social media content và visual storytelling.",

    status: "Sẵn sàng cho cơ hội mới"
  },

  DEVELOPMENT: {
    position: "Full-stack Developer",

    label: "Dành cho nhà tuyển dụng",

    description:
      "Phù hợp với các vị trí phát triển sản phẩm web từ frontend đến backend.",

    status: "Sẵn sàng cho cơ hội mới"
  },

  DRIVING: {
    position: "Driver",

    label: "Định hướng nghề nghiệp",

    description:
      "Đã có giấy phép lái xe, hiện đang bổ túc tay lái và tiếp tục tích lũy kinh nghiệm thực tế.",

    status: "Đã có bằng · Đang bổ túc"
  }
};

/* =========================================================
   FORMAT CATEGORY
========================================================= */

export function formatCategory(category: string) {
  switch (category) {
    case "VIDEO_EDITING":
      return "Video Editing";

    case "DEVELOPMENT":
      return "Development";

    case "DRIVING":
      return "Driving";

    default:
      return category
        .toLowerCase()
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
  }
}

/* =========================================================
   GROUP
========================================================= */

export function groupByCategory(skills: SkillProps[]) {
  const groups = new Map<string, SkillProps[]>();

  for (const skill of skills) {
    const list = groups.get(skill.category) ?? [];

    list.push(skill);

    groups.set(skill.category, list);
  }

  for (const list of groups.values()) {
    list.sort((a, b) => a.displayOrder - b.displayOrder);
  }

  return Array.from(groups.entries());
}
