import React from "react";
import { Code, ExternalLink } from "lucide-react";

interface ProjectLinksProps {
  demoUrl?: string | null;
  githubUrl?: string | null;
  /** Giữ lại để tương thích với nơi gọi cũ */
  featured?: boolean;
}

/* Cùng chiều cao (h-10) và cỡ chữ với nút "Xem chi tiết" để hai nút thẳng hàng */
const buttonClass =
  "inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-medium text-slate-300 ring-1 ring-white/12 outline-none transition-colors duration-200 hover:bg-white/6 hover:text-white hover:ring-white/25 focus-visible:ring-2 focus-visible:ring-violet-300 motion-reduce:transition-none";

const ProjectLinks: React.FC<ProjectLinksProps> = ({ demoUrl, githubUrl }) => {
  if (!demoUrl && !githubUrl) return null;

  return (
    <div className="flex flex-wrap items-center gap-3">
      {demoUrl && (
        <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>
          <ExternalLink size={16} aria-hidden />
          Xem demo
        </a>
      )}

      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>
          <Code size={16} aria-hidden />
          Mã nguồn
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;