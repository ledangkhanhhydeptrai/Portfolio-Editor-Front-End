import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

import type { ProjectProps } from "../projectTypes";

import ProjectLinks from "./ProjectLinks";
import ProjectDetailLink from "./ProjectDetailLink";

interface DrivingProjectsProps {
  projects: ProjectProps[];
}

type StepStatus = "done" | "current" | "next";

const steps: { title: string; status: StepStatus }[] = [
  { title: "Giấy phép lái xe", status: "done" },
  { title: "Bổ túc tay lái", status: "current" },
  { title: "Kinh nghiệm thực tế", status: "next" },
];

const statusLabel: Record<StepStatus, string> = {
  done: "Hoàn thành",
  current: "Đang thực hiện",
  next: "Tiếp theo",
};

/* Điểm đánh dấu trên lộ trình: đặc = xong, vòng + chấm = đang làm, rỗng = chưa tới */
const Marker: React.FC<{ status: StepStatus }> = ({ status }) => {
  if (status === "done") {
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-[#05140d]">
        <Check size={15} strokeWidth={3} />
      </span>
    );
  }

  if (status === "current") {
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-2 ring-emerald-400">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </span>
    );
  }

  return <span className="h-7 w-7 shrink-0 rounded-full ring-1 ring-white/20" />;
};

const DrivingProjects: React.FC<DrivingProjectsProps> = ({ projects }) => {
  return (
    <section id="driving-projects" className="mt-32 scroll-mt-24">
      {/* Header */}
      <header className="mb-10 flex items-end justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#F0EFEA]">Lái xe</h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Một hướng kỹ năng thực tế tôi đang tiếp tục phát triển.
          </p>
        </div>

        {projects.length > 0 && (
          <p className="shrink-0 text-sm text-slate-500">{projects.length} mục</p>
        )}
      </header>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group/card relative flex flex-col overflow-hidden rounded-xl bg-white/3 ring-1 ring-white/8 transition-colors duration-300 hover:ring-emerald-400/40"
            >
              {project.thumbnailUrl && (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-lg font-semibold text-[#F0EFEA]">{project.title}</h3>
                <p className="line-clamp-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-3">
                  <ProjectDetailLink id={project.id} accent="emerald" />
                  <div className="relative z-10">
                    <ProjectLinks demoUrl={project.demoUrl} githubUrl={project.githubUrl} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Hiện trạng: lộ trình thật sự có thứ tự nên dùng stepper */
        <div className="rounded-2xl bg-white/3 p-7 ring-1 ring-white/8 sm:p-10">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#F0EFEA]">
              Kinh nghiệm lái xe
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Tôi đã có giấy phép lái xe và đang bổ túc tay lái, tiếp tục tích lũy kinh nghiệm thực
              tế. Nội dung và trải nghiệm cụ thể sẽ được bổ sung vào portfolio sau.
            </p>
          </div>

          <ol className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-0">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;

              return (
                <li
                  key={step.title}
                  aria-current={step.status === "current" ? "step" : undefined}
                  className="flex gap-4 sm:flex-col sm:gap-4"
                >
                  <div className="flex items-center sm:w-full">
                    <Marker status={step.status} />
                    {!isLast && (
                      <span
                        aria-hidden
                        className={`ml-3 hidden h-px flex-1 sm:mr-3 sm:block ${
                          step.status === "done" ? "bg-emerald-400/60" : "bg-white/12"
                        }`}
                      />
                    )}
                  </div>

                  <div>
                    <p
                      className={`text-sm font-medium ${
                        step.status === "next" ? "text-slate-400" : "text-[#F0EFEA]"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p
                      className={`mt-1 text-xs ${
                        step.status === "next" ? "text-slate-500" : "text-emerald-300"
                      }`}
                    >
                      {statusLabel[step.status]}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </section>
  );
};

export default DrivingProjects;
