"use client";

import React from "react";
import Image from "next/image";

import type { SocialLinkProps } from "../socialLinkTypes";

interface SocialLinkHeaderProps {
  total: number;
  previews?: Pick<SocialLinkProps, "id" | "platform" | "iconUrl">[];
}

const SocialLinkHeader: React.FC<SocialLinkHeaderProps> = ({
  total,
  previews = [],
}) => {
  const shown = previews.slice(0, 5);

  return (
    <header>
      <h1 className="text-4xl font-semibold tracking-tight text-balance text-[#F4F3EF] sm:text-5xl">
        Kết nối với tôi
      </h1>

      <p className="mt-5 max-w-sm text-base leading-relaxed text-slate-400">
        Theo dõi các nền tảng và kết nối với tôi qua những liên kết bên cạnh.
      </p>

      {total > 0 && (
        <div className="mt-8 flex items-center gap-4">
          <ul className="flex -space-x-2">
            {shown.map((item) => (
              <li
                key={item.id}
                className="relative flex size-10 items-center justify-center overflow-hidden rounded-full border-2 border-[#1B1E29] bg-[#2A2F3E]"
              >
                {item.iconUrl ? (
                  <span className="relative block size-5">
                    <Image
                      src={item.iconUrl}
                      alt={item.platform}
                      fill
                      sizes="20px"
                      className="object-contain"
                    />
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-indigo-200">
                    {item.platform.charAt(0).toUpperCase()}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <p className="text-sm text-slate-400">
            <span className="font-medium text-[#F4F3EF]">{total}</span> nền
            tảng
          </p>
        </div>
      )}
    </header>
  );
};

export default SocialLinkHeader;