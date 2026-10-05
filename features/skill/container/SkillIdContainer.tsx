"use client";

import React from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Hash, Layers3, Sparkles } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getSkillIdRequest, getSkillUserIdRequest } from "../skillSlice";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

const SkillIdContainer: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { skill, loading, error } = useAppSelector((state) => state.skill);

  const id = params.id;

  React.useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    dispatch(getSkillUserIdRequest(id));
    dispatch(getSkillIdRequest(id));
  }, [dispatch, id]);

  const formatCategory = (category: string) => {
    switch (category) {
      case "VIDEO_EDITING":
        return "Video Editing";

      case "DEVELOPMENT":
        return "Development";

      case "DRIVING":
        return "Driving";

      default:
        return category
          .replaceAll("_", " ")
          .toLowerCase()
          .replace(/\b\w/g, (char) => char.toUpperCase());
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!skill) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#1B1E29] px-6 text-[#F4F3EF]">
        <div className="text-center">
          <p className="font-mono text-[10px] tracking-[0.2em] text-white/35 uppercase">
            Skill not found
          </p>

          <button
            type="button"
            onClick={() => router.back()}
            className="mt-5 text-sm text-white/50 transition-colors hover:text-white"
          >
            ← Quay lại
          </button>
        </div>
      </main>
    );
  }

  const category = formatCategory(skill.category);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1B1E29] px-6 py-24 text-[#F4F3EF] lg:px-10">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-[15%] h-125 w-125 rounded-full bg-indigo-500/10 blur-[150px]" />

        <div className="absolute -right-25 -bottom-25 h-100 w-100 rounded-full bg-violet-500/8 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-350">
        {/* BACK */}

        <button
          type="button"
          onClick={() => router.back()}
          className="group mb-16 inline-flex items-center gap-3 text-sm text-white/40 transition-colors hover:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-indigo-300/30 group-hover:bg-indigo-300/5">
            <ArrowLeft size={15} />
          </span>
          Quay lại kỹ năng
        </button>

        {/* MAIN */}

        <section className="grid min-h-140 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
          {/* LEFT */}

          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#8EA5FF] uppercase">
                Skill / {String(skill.displayOrder).padStart(2, "0")}
              </span>

              <div className="h-px w-10 bg-[#8EA5FF]/30" />

              <span className="font-mono text-[9px] tracking-[0.2em] text-white/25 uppercase">
                {category}
              </span>
            </div>

            <h1 className="mt-7 font-['Fraunces'] text-6xl leading-[0.95] font-light tracking-tighter text-[#F4F3EF] sm:text-7xl lg:text-8xl">
              {skill.name}
              <span className="text-[#8EA5FF]">.</span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#8E91A3]">
              Một trong những công cụ thuộc nhóm <span className="text-[#C5CAFF]">{category}</span>{" "}
              trong portfolio của tôi.
            </p>

            {/* META */}

            <div className="mt-12 grid max-w-lg grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8">
              <div className="bg-[#1B1E29]/95 p-5">
                <div className="flex items-center gap-2 text-white/25">
                  <Layers3 size={12} />

                  <span className="font-mono text-[8px] tracking-[0.18em] uppercase">Category</span>
                </div>

                <p className="mt-3 text-sm text-white/70">{category}</p>
              </div>

              <div className="bg-[#1B1E29]/95 p-5">
                <div className="flex items-center gap-2 text-white/25">
                  <Hash size={12} />

                  <span className="font-mono text-[8px] tracking-[0.18em] uppercase">Order</span>
                </div>

                <p className="mt-3 text-sm text-white/70">
                  {String(skill.displayOrder).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT / SKILL SHOWCASE */}

          <div className="relative flex items-center justify-center">
            {/* GLOW */}

            <div className="absolute h-90 w-90 rounded-full bg-indigo-500/10 blur-[100px]" />

            {/* CARD */}

            <div className="relative w-full max-w-125 overflow-hidden rounded-[36px] border border-white/10 bg-[#222632]/70 p-8 shadow-[0_40px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-10">
              {/* DECORATION */}

              <div className="absolute top-0 left-0 h-full w-px bg-linear-to-b from-[#9BADFF]/70 via-[#9BADFF]/10 to-transparent" />

              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-[90px]" />

              <span className="pointer-events-none absolute -top-8 -right-2 font-mono text-[150px] leading-none font-semibold tracking-[-0.08em] text-white/2">
                {String(skill.displayOrder).padStart(2, "0")}
              </span>

              {/* CARD HEADER */}

              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#9BADFF] uppercase">
                  Skill Identity
                </span>

                <Sparkles size={15} className="text-white/20" />
              </div>

              {/* ICON */}

              <div className="relative mx-auto mt-16 flex h-40 w-40 items-center justify-center overflow-hidden rounded-4xl border border-white/10 bg-white/4 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                {skill.iconUrl ? (
                  <Image
                    src={skill.iconUrl}
                    alt={skill.name}
                    fill
                    sizes="160px"
                    className="object-contain p-7"
                  />
                ) : (
                  <span className="font-['Fraunces'] text-6xl text-[#9BADFF]">
                    {skill.name.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>

              {/* NAME */}

              <div className="relative mt-12 text-center">
                <p className="font-mono text-[8px] tracking-[0.24em] text-[#7F96F5] uppercase">
                  {category}
                </p>

                <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-[#F4F3EF]">
                  {skill.name}
                </h2>
              </div>

              {/* FOOTER */}

              <div className="relative mt-12 flex items-center justify-between border-t border-white/8 pt-5">
                <span className="font-mono text-[8px] tracking-[0.18em] text-white/25 uppercase">
                  Portfolio Skill
                </span>

                <span className="font-mono text-[8px] tracking-[0.18em] text-[#9BADFF]/70 uppercase">
                  #{String(skill.displayOrder).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM */}

        <div className="mt-20 flex flex-col gap-4 border-t border-white/8 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[8px] tracking-[0.2em] text-white/20 uppercase">
            Skill Detail
          </span>

          <span className="max-w-xs truncate font-mono text-[8px] text-white/20 sm:max-w-none">
            ID · {skill.id}
          </span>
        </div>
      </div>
    </main>
  );
};

export default SkillIdContainer;
