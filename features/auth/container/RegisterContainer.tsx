"use client"
const RegisterContainer = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#11131B] text-[#F0EFEA]">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-[#171923] via-[#12141C] to-[#101118]" />

        <div className="absolute -left-60 -top-60 h-180 w-180 rounded-full bg-indigo-500/10 blur-[190px]" />

        <div className="absolute -bottom-60 right-0 h-160 w-160 rounded-full bg-violet-500/8 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-size-[32px_32px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-375 lg:grid-cols-2">
        {/* ================================================= */}
        {/* LEFT */}
        {/* ================================================= */}

        <section className="relative hidden min-h-screen flex-col justify-between overflow-hidden border-r border-white/8 px-12 py-10 lg:flex xl:px-18 xl:py-14">
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-100 w-100 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[140px]" />

          {/* Logo */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <span className="text-lg font-semibold text-[#9BADFF]">K</span>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-tight">
                Portfolio Editor
              </p>

              <p className="text-xs text-white/35">Create your own space.</p>
            </div>
          </div>

          {/* Main content */}
          <div className="relative z-10 max-w-150">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#9BADFF]" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#9BADFF]">
                Your Portfolio
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.045em] xl:text-7xl">
              Biến kỹ năng
              <span className="mt-2 block text-white/35">thành dấu ấn.</span>
            </h1>

            <p className="mt-8 max-w-125 text-base leading-7 text-white/45">
              Xây dựng không gian cá nhân để giới thiệu kỹ năng, dự án và hành
              trình của bạn theo cách riêng.
            </p>

            {/* Features */}
            <div className="mt-12 grid max-w-125 grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/8 bg-white/3 p-5 backdrop-blur-xl">
                <span className="mb-4 block text-xs text-[#9BADFF]">01</span>

                <p className="text-sm font-medium">Portfolio cá nhân</p>

                <p className="mt-2 text-xs leading-5 text-white/35">
                  Thể hiện câu chuyện và phong cách của riêng bạn.
                </p>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/3 p-5 backdrop-blur-xl">
                <span className="mb-4 block text-xs text-[#9BADFF]">02</span>

                <p className="text-sm font-medium">Quản lý nội dung</p>

                <p className="mt-2 text-xs leading-5 text-white/35">
                  Cập nhật dự án, kỹ năng và kinh nghiệm dễ dàng.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="relative z-10 flex items-center justify-between text-xs text-white/25">
            <span>© 2026 Portfolio Editor</span>

            <span>Editor × Developer</span>
          </div>
        </section>

        {/* ================================================= */}
        {/* RIGHT */}
        {/* ================================================= */}

        <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10 lg:px-14 xl:px-20">
          <div className="w-full max-w-115">
            {/* Mobile logo */}
            <div className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <span className="font-semibold text-[#9BADFF]">K</span>
              </div>

              <div>
                <p className="text-sm font-semibold">Portfolio Editor</p>

                <p className="text-xs text-white/35">Create your own space.</p>
              </div>
            </div>

            {/* Heading */}
            <div className="mb-9">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#9BADFF]">
                Bắt đầu
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Tạo tài khoản.
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/40">
                Điền thông tin bên dưới để tạo portfolio của bạn.
              </p>
            </div>

            {/* ================= FORM ================= */}

            <form className="space-y-5">
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-white/65"
                >
                  Username
                </label>

                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Nhập username"
                  autoComplete="username"
                  className="h-14 w-full rounded-xl border border-white/10 bg-white/4 px-4 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/15 focus:border-[#8EA5FF]/60 focus:bg-white/6 focus:ring-4 focus:ring-[#8EA5FF]/8"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white/65"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  autoComplete="email"
                  className="h-14 w-full rounded-xl border border-white/10 bg-white/4 px-4 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/15 focus:border-[#8EA5FF]/60 focus:bg-white/6 focus:ring-4 focus:ring-[#8EA5FF]/8"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-white/65"
                >
                  Mật khẩu
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  autoComplete="new-password"
                  className="h-14 w-full rounded-xl border border-white/10 bg-white/4 px-4 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/15 focus:border-[#8EA5FF]/60 focus:bg-white/6 focus:ring-4 focus:ring-[#8EA5FF]/8"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-3 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#F0EFEA] text-sm font-semibold text-[#11131B] transition duration-300 hover:bg-white hover:shadow-[0_0_40px_rgba(142,165,255,0.12)] active:scale-[0.98]"
              >
                Tạo tài khoản
                <span aria-hidden="true">→</span>
              </button>
            </form>

            {/* Login */}
            <div className="mt-8 border-t border-white/8 pt-7 text-center">
              <p className="text-sm text-white/35">
                Đã có tài khoản?{" "}
                <a
                  href="/login"
                  className="font-medium text-[#9BADFF] transition hover:text-white"
                >
                  Đăng nhập
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RegisterContainer;
