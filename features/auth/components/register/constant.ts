export interface PortfolioTopic {
  id: string;
  label: string;
  skills: string[];
  items: { title: string; meta: string }[];
}

/** Dữ liệu mẫu cho bản xem trước portfolio. */
export const PORTFOLIO_TOPICS: PortfolioTopic[] = [
  {
    id: "programming",
    label: "Lập trình",
    skills: ["React", "Next.js", "TypeScript"],
    items: [
      { title: "Website portfolio", meta: "Next.js, Tailwind" },
      { title: "Ứng dụng quản lý công việc", meta: "React, Redux" }
    ]
  },
  {
    id: "driving",
    label: "Lái xe",
    skills: ["Bằng lái B2", "Đường dài", "Lái xe an toàn"],
    items: [
      { title: "Hành trình đã đi", meta: "Tuyến đường và quãng đường" },
      { title: "Bằng lái và chứng chỉ", meta: "Hạng xe, thời hạn" }
    ]
  },
  {
    id: "editor",
    label: "Editor",
    skills: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    items: [
      { title: "Phim ngắn", meta: "Dựng, chỉnh màu" },
      { title: "Video quảng cáo", meta: "Dựng, motion graphics" }
    ]
  }
];