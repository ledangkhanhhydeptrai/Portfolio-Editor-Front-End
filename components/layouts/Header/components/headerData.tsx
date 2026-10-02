import type { NavItem, SkillMenuItemType } from "./headerTypes";

export const navItems: NavItem[] = [
  {
    label: "Trang chủ",
    href: "/",
  },
  {
    label: "Giới thiệu",
    href: "/about",
  },
  {
    label: "Dự án",
    href: "/projects",
  },
  {
    label: "Video",
    href: "/video",
  },
  {
    label: "Kinh nghiệm",
    href: "/experience",
  },
  {
    label: "Học vấn",
    href: "/education",
  },
  {
    label: "Kết nối",
    href: "/social-link",
  },
];

export const skillItems: SkillMenuItemType[] = [
  {
    label: "Video Editing",
    description: "Dựng phim & hậu kỳ",
    href: "/skills?category=VIDEO_EDITING",
    category: "VIDEO_EDITING",
    number: "01",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect
          x="3.5"
          y="5.5"
          width="13"
          height="13"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M16.5 10L20.5 8V16L16.5 14V10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        <path
          d="M8.5 9.5L13 12L8.5 14.5V9.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    label: "Development",
    description: "Web & Software",
    href: "/skills?category=DEVELOPMENT",
    category: "DEVELOPMENT",
    number: "02",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M8.5 8.5L5 12L8.5 15.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M15.5 8.5L19 12L15.5 15.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M14 5.5L10 18.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    label: "Lái xe",
    description: "Kỹ năng & an toàn",
    href: "/skills?category=DRIVING",
    category: "DRIVING",
    number: "03",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M5.5 15.5L7 10.5C7.3 9.6 8.1 9 9 9H15C15.9 9 16.7 9.6 17 10.5L18.5 15.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="M4.5 15.5H19.5V18C19.5 19.1 18.6 20 17.5 20H6.5C5.4 20 4.5 19.1 4.5 18V15.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        <path
          d="M7 12.5H17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <circle
          cx="7.5"
          cy="16.5"
          r="1"
          fill="currentColor"
        />

        <circle
          cx="16.5"
          cy="16.5"
          r="1"
          fill="currentColor"
        />
      </svg>
    ),
  },
];