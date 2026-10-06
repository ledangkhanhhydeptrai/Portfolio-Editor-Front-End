import React from "react";
import Link from "next/link";

import { useAppSelector } from "@/hooks/redux";

interface HeaderBrandProps {
  onClick: () => void;
}

const HeaderBrand: React.FC<HeaderBrandProps> = ({ onClick }) => {
  const { user } = useAppSelector((state) => state.auth);
  const displayName = user && user.username ? user.username : "Khánh Hỷ";

  const initials = displayName
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0))
    .slice(-2)
    .join("")
    .toUpperCase();

  return (
    <Link
      href="/"
      onClick={onClick}
      className="group flex min-w-fit items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7C93FF]"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-[#7C93FF] to-[#4A63D8] text-[12px] font-bold tracking-tight text-white shadow-[0_6px_18px_-6px_rgba(124,147,255,0.7)] transition-transform duration-300 group-hover:-rotate-6">
        {initials}
      </span>

      <span className="hidden sm:block">
        <span className="block font-['Fraunces'] text-[15px] leading-tight text-[#F2F0EA]">
          {displayName}
        </span>

        <span className="mt-0.5 block text-[11px] text-[#7E7B73]">
          {user ? "Tài khoản của tôi" : "Portfolio cá nhân"}
        </span>
      </span>
    </Link>
  );
};

export default HeaderBrand;
