import type { NavItem, SkillMenuItemType } from "./headerTypes";

export const navItems: NavItem[] = [
  {
    label: "Trang chủ",
    href: "/"
  },
  {
    label: "Giới thiệu",
    href: "/about"
  },
  {
    label: "Dự án",
    href: "/projects"
  },
  {
    label: "Kinh nghiệm",
    href: "/experience"
  }
];

export const skillItems: SkillMenuItemType[] = [
  {
    label: "Video Editing",
    description: "Dựng video & hậu kỳ",
    href: "/skills?category=VIDEO_EDITING",
    category: "VIDEO_EDITING",
    number: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect
          x="3"
          y="5"
          width="14"
          height="14"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M17 10L21 8V16L17 14V10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        <path d="M8 9.5L13 12L8 14.5V9.5Z" fill="currentColor" />
      </svg>
    )
  },

  {
    label: "Development",
    description: "Web & Software",
    href: "/skills?category=DEVELOPMENT",
    category: "DEVELOPMENT",
    number: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M8 9L5 12L8 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M16 9L19 12L16 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M14 6L10 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  },

  {
    label: "Lái xe",
    description: "Kỹ năng & an toàn",
    href: "/skills?category=DRIVING",
    category: "DRIVING",
    number: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M5 16L6.5 10.5C6.8 9.6 7.6 9 8.5 9H15.5C16.4 9 17.2 9.6 17.5 10.5L19 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="M4 16H20V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V16Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle cx="7" cy="16" r="1" fill="currentColor" />

        <circle cx="17" cy="16" r="1" fill="currentColor" />

        <path
          d="M7 12H17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }
];
