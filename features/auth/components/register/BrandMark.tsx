import Link from "next/link";
import React from "react";

const BrandMark: React.FC = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F2B544] text-base font-bold text-[#0D1618]">
          K
        </div>

        <span className="text-sm font-semibold tracking-tight text-[#E9EFEC]">
          Portfolio Editor
        </span>
      </div>
    </Link>
  );
};

export default BrandMark;
