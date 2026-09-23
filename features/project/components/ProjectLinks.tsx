import React from "react";

interface ProjectLinksProps {
  demoUrl: string | null;
  githubUrl: string | null;
  featured?: boolean;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({
  demoUrl,
  githubUrl,
  featured = false
}) => {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 border-t border-white/7 ${
        featured ? "mt-10 pt-6" : "mt-6 pt-5"
      }`}
    >
      {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={
            featured
              ? "group/demo inline-flex items-center gap-3 rounded-xl bg-[#F0EFEA] px-5 py-3 text-xs font-medium text-[#0B0B0D] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              : "group/link inline-flex items-center gap-2 text-[11px] text-slate-400 transition-colors hover:text-white"
          }
        >
          Live Demo
          <span className="transition-transform duration-300 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
            ↗
          </span>
        </a>
      )}

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={
            featured
              ? "group/github inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/3 px-5 py-3 text-xs font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/7 hover:text-white"
              : "group/link inline-flex items-center gap-2 text-[11px] text-slate-400 transition-colors hover:text-white"
          }
        >
          {featured && (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.39.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.73 0-1.27.45-2.3 1.2-3.11-.12-.3-.52-1.48.11-3.07 0 0 .98-.31 3.16 1.19A11 11 0 0 1 12 6.05c.98 0 1.96.13 2.87.39 2.19-1.5 3.16-1.19 3.16-1.19.64 1.59.24 2.77.12 3.07.74.81 1.19 1.84 1.19 3.11 0 4.45-2.71 5.43-5.29 5.72.42.36.79 1.07.79 2.16v3.24c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z" />
            </svg>
          )}
          GitHub
          {!featured && (
            <span className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
              ↗
            </span>
          )}
        </a>
      )}

      {!demoUrl && !githubUrl && (
        <span className="inline-flex items-center gap-2 rounded-xl border border-white/7 bg-white/3 px-4 py-2.5 font-mono text-[8px] uppercase tracking-[0.15em] text-slate-600">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          Coming Soon
        </span>
      )}
    </div>
  );
};

export default ProjectLinks;
