import React from "react";

import { BrandMark } from "../register";

const LoginHeader: React.FC = () => (
  <header className="mb-8">
    <div className="mb-10 lg:hidden">
      <BrandMark />
    </div>

    <h2 className="text-3xl font-semibold tracking-tight text-[#E9EFEC] sm:text-4xl">
      Đăng nhập
    </h2>

    <p className="mt-3 text-sm leading-6 text-white/50">
      Nhập email và mật khẩu để tiếp tục với portfolio của bạn.
    </p>
  </header>
);

export default LoginHeader;
