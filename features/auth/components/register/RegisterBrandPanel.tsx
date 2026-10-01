import React from "react";

import BrandMark from "./BrandMark";
import PortfolioPreview from "./PortfolioPreview";

const RegisterBrandPanel: React.FC = () => (
  <section className="hidden flex-col justify-between gap-8 border-r border-white/8 bg-[#101C1F] px-12 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:self-start lg:overflow-y-auto py-8 xl:px-16 xl:py-10">
    <BrandMark />

    <div className="flex flex-col gap-8">
      <div className="max-w-lg">
        <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#E9EFEC] xl:text-4xl">
          Một portfolio cho mọi việc bạn làm.
        </h1>

        <p className="mt-4 max-w-md text-sm leading-6 text-white/50 [@media(max-height:800px)]:hidden">
          Lập trình, lái xe, editor: mỗi mảng có kỹ năng và dự án riêng, gom về
          một địa chỉ duy nhất.
        </p>
      </div>

      <PortfolioPreview />
    </div>

    <p className="text-xs text-white/30">© 2026 Portfolio Editor</p>
  </section>
);

export default RegisterBrandPanel;
