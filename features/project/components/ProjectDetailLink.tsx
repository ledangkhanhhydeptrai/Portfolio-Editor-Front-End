import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ProjectProps } from "../projectTypes";

type Accent = "violet" | "indigo" | "emerald";

/* Class đầy đủ để Tailwind nhận diện được khi build */
const accents: Record<Accent, string> = {
  violet:
    "bg-violet-400/15 text-violet-100 ring-violet-400/30 group-hover/card:bg-violet-400/25 group-hover/card:ring-violet-400/50 focus-visible:ring-violet-300",
  indigo:
    "bg-indigo-400/15 text-indigo-100 ring-indigo-400/30 group-hover/card:bg-indigo-400/25 group-hover/card:ring-indigo-400/50 focus-visible:ring-indigo-300",
  emerald:
    "bg-emerald-400/15 text-emerald-100 ring-emerald-400/30 group-hover/card:bg-emerald-400/25 group-hover/card:ring-emerald-400/50 focus-visible:ring-emerald-300",
};

interface ProjectDetailLinkProps {
  id: ProjectProps["id"];
  accent?: Accent;
}

/**
 * Nút "Xem chi tiết". Link được kéo giãn (after:inset-0) nên cả thẻ đều bấm được:
 * thẻ cha cần có `relative` và `group/card`, còn các link khác trong thẻ cần `relative z-10`.
 */
const ProjectDetailLink: React.FC<ProjectDetailLinkProps> = ({ id, accent = "indigo" }) => (
  <Link
    href={`/projects/${id}`}
    className={`inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-medium ring-1 outline-none transition-colors duration-200 after:absolute after:inset-0 after:content-[''] focus-visible:ring-2 motion-reduce:transition-none ${accents[accent]}`}
  >
    Xem chi tiết
    <ArrowUpRight
      size={16}
      aria-hidden
      className="transition-transform duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 motion-reduce:transition-none"
    />
  </Link>
);

export default ProjectDetailLink;