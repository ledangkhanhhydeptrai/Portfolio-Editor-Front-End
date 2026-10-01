// Một nguồn style duy nhất cho mọi mục trên thanh điều hướng desktop,
// để link thường, "Kỹ năng" và "Dự án" luôn trông giống nhau.
export const navPill = (active: boolean) =>
  `relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C93FF] ${
    active
      ? "bg-[#7C93FF]/15 text-white ring-1 ring-inset ring-[#7C93FF]/30"
      : "text-[#9A978E] hover:bg-white/5 hover:text-[#F2F0EA]"
  }`;
