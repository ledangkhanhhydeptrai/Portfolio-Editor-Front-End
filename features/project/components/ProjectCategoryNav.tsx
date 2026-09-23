import React from "react";

interface ProjectCategoryNavProps {
  developmentCount: number;
  videoCount: number;
  drivingCount: number;
}

const ProjectCategoryNav: React.FC<ProjectCategoryNavProps> = ({
  developmentCount,
  videoCount,
  drivingCount
}) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className="mb-28 grid grid-cols-1 gap-4 md:grid-cols-3">
      <CategoryButton
        number="01"
        title="Development"
        description="Web applications, tools và software projects."
        count={developmentCount}
        sectionId="development-projects"
        accent="indigo"
        onClick={scrollToSection}
      />

      <CategoryButton
        number="02"
        title="Video Editing"
        description="Short-form, product video và visual storytelling."
        count={videoCount}
        sectionId="video-projects"
        accent="violet"
        onClick={scrollToSection}
      />

      <CategoryButton
        number="03"
        title="Driving"
        description="Licensed · Practice next."
        count={drivingCount}
        sectionId="driving-projects"
        accent="emerald"
        onClick={scrollToSection}
      />
    </div>
  );
};

interface CategoryButtonProps {
  number: string;
  title: string;
  description: string;
  count: number;
  sectionId: string;

  accent: "indigo" | "violet" | "emerald";

  onClick: (id: string) => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  number,
  title,
  description,
  count,
  sectionId,
  accent,
  onClick
}) => {
  const styles = {
    indigo: {
      button:
        "border-indigo-400/15 bg-indigo-400/4 hover:border-indigo-400/35 hover:bg-indigo-400/7",

      glow: "bg-indigo-500/10",

      text: "text-indigo-300"
    },

    violet: {
      button:
        "border-violet-400/15 bg-violet-400/4 hover:border-violet-400/35 hover:bg-violet-400/7",

      glow: "bg-violet-500/10",

      text: "text-violet-300"
    },

    emerald: {
      button:
        "border-emerald-400/15 bg-emerald-400/4 hover:border-emerald-400/35 hover:bg-emerald-400/7",

      glow: "bg-emerald-500/10",

      text: "text-emerald-300"
    }
  }[accent];

  return (
    <button
      type="button"
      onClick={() => onClick(sectionId)}
      className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-500 hover:-translate-y-1 ${styles.button}`}
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[80px] ${styles.glow}`}
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <span
            className={`font-mono text-[9px] uppercase tracking-[0.2em] ${styles.text}`}
          >
            {number}
          </span>

          <span className="font-mono text-[9px] text-slate-600">
            {String(count).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-10 flex items-end justify-between">
          <div>
            <h2 className="text-lg font-medium text-[#F0EFEA]">{title}</h2>

            <p className="mt-2 max-w-60 text-xs leading-6 text-slate-500">
              {description}
            </p>
          </div>

          <span
            className={`text-lg transition-transform duration-300 group-hover:translate-y-1 ${styles.text}`}
          >
            ↓
          </span>
        </div>
      </div>
    </button>
  );
};

export default ProjectCategoryNav;
