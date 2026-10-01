import React from "react";

import BrandMark from "./BrandMark";

const RegisterHeader: React.FC = () => (
  <header className="mb-8">
    <div className="mb-10 lg:hidden">
      <BrandMark />
    </div>

    <h2 className="text-3xl font-semibold tracking-tight text-[#E9EFEC] sm:text-4xl">
      Tạo tài khoản
    </h2>

    <p className="mt-3 text-sm leading-6 text-white/50">
      Nhập thông tin để bắt đầu xây dựng portfolio.
    </p>
  </header>
);

export default RegisterHeader;