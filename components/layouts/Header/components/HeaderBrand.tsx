"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

interface HeaderBrandProps {
  onClick: () => void;
}

const AuthenticatedBrand = dynamic(() => import("./AuthenticatedBrand"), {
  ssr: false,
  loading: () => (
    <span className="hidden sm:block">
      <span className="block font-['Fraunces'] text-[15px] leading-tight text-[#F2F0EA]">
        Khánh Hỷ
      </span>
      <span className="mt-0.5 block text-[11px] text-[#7E7B73]">Portfolio cá nhân</span>
    </span>
  ),
});

const HeaderBrand: React.FC<HeaderBrandProps> = ({ onClick }) => {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group flex min-w-fit items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7C93FF]"
    >
      <AuthenticatedBrand />
    </Link>
  );
};

export default HeaderBrand;
