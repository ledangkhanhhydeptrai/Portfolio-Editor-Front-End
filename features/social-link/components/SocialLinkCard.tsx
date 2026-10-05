"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import type { SocialLinkProps } from "../socialLinkTypes";

interface SocialLinkCardProps {
  social: SocialLinkProps;
}

const getDisplayUrl = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const SocialLinkCard: React.FC<SocialLinkCardProps> = ({ social }) => {
  return (
    <article className="group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/4 p-4 transition-colors duration-200 focus-within:border-indigo-300/50 hover:border-indigo-300/30 hover:bg-white/7 sm:gap-5 sm:p-5">
      {/* Logo */}
      <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/6">
        {social.iconUrl ? (
          <span className="relative block size-8">
            <Image src={social.iconUrl} alt="" fill sizes="32px" className="object-contain" />
          </span>
        ) : (
          <span className="text-lg font-semibold text-indigo-200">
            {social.platform.charAt(0).toUpperCase()}
          </span>
        )}
      </div>

      {/* Tên + domain. Link phủ cả thẻ để bấm đâu cũng vào trang chi tiết */}
      <div className="min-w-0 flex-1">
        <h2 className="truncate text-lg font-semibold text-[#F4F3EF]">
          <Link
            href={`/social-link/${social.id}`}
            className="outline-none after:absolute after:inset-0 after:rounded-2xl"
          >
            {social.platform}
          </Link>
        </h2>
        <p className="mt-0.5 truncate text-sm text-slate-400">{getDisplayUrl(social.url)}</p>
      </div>

      <span className="hidden text-sm text-slate-400 transition-colors group-hover:text-indigo-200 sm:inline">
        Xem chi tiết
      </span>

      {/* Mở link ngoài, nằm trên lớp phủ nên vẫn bấm riêng được */}
      <a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Mở ${social.platform} trong tab mới`}
        className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-indigo-300/50 hover:bg-indigo-300/10 hover:text-indigo-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      </a>
    </article>
  );
};

export default SocialLinkCard;
