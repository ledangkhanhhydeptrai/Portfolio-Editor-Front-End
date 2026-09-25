"use client";

import React from "react";

import type { SocialLinkProps } from "../socialLinkTypes";
import Image from "next/image";
import Link from "next/link";

interface SocialLinkCardProps {
  social: SocialLinkProps;
  index: number;
}

const SocialLinkCard: React.FC<SocialLinkCardProps> = ({ social, index }) => {
  const order = String(index + 1).padStart(2, "0");

  const getDisplayUrl = (url: string) => {
    try {
      const parsedUrl = new URL(url);

      return parsedUrl.hostname.replace("www.", "");
    } catch {
      return url;
    }
  };

  return (
    <Link
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative min-h-85 overflow-hidden rounded-[28px] border border-white/10 bg-[#222632]/65 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-300/25 hover:bg-[#252936]/85 sm:p-9"
    >
      {/* LEFT ACCENT */}

      <div className="absolute left-0 top-0 h-full w-px bg-linear-to-b from-indigo-300/70 via-indigo-300/10 to-transparent" />

      {/* BACKGROUND NUMBER */}

      <span className="pointer-events-none absolute -right-3 -top-10 select-none font-mono text-[150px] font-semibold leading-none tracking-[-0.08em] text-white/2">
        {order}
      </span>

      {/* GLOW */}

      <div className="pointer-events-none absolute -right-30 -top-30 h-80 w-80 rounded-full bg-indigo-500/5 blur-[100px] transition-all duration-700 group-hover:bg-indigo-500/10" />

      <div className="relative flex h-full flex-col">
        {/* TOP */}

        <div className="flex items-start justify-between">
          {/* ICON */}

          {/* ICON */}

          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1.5">
            {social.iconUrl ? (
              <Image
                src={social.iconUrl}
                alt={social.platform}
                fill
                sizes="44px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <span className="text-sm font-semibold text-indigo-300">
                {social.platform.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          {/* ARROW */}

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/3 text-slate-500 transition-all duration-500 group-hover:border-indigo-300/30 group-hover:bg-indigo-300/7 group-hover:text-indigo-300">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <path
                d="M7 17L17 7M9 7H17V15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* CONTENT */}

        <div className="mt-12">
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-indigo-300">
              {order}
            </span>

            <div className="h-px w-6 bg-indigo-300/30" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600">
              Social
            </span>
          </div>

          <h2 className="text-3xl font-medium tracking-[-0.04em] text-[#F4F3EF] sm:text-4xl">
            {social.platform}
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            {getDisplayUrl(social.url)}
          </p>
        </div>

        {/* FOOTER */}

        <div className="mt-auto pt-10">
          <div className="flex items-center justify-between border-t border-white/7 pt-5">
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-600">
              Mở liên kết
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-indigo-300/70 transition-all duration-300 group-hover:text-indigo-300">
              Visit ↗
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SocialLinkCard;
