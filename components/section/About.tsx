import Link from "next/link";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#EDECE8]">
      <Header />

      <main className="overflow-hidden">
        {/* =========================================================
            HERO ABOUT
        ========================================================= */}
        <section className="relative overflow-hidden border-b border-white/[0.07]">
          {/* BACKGROUND */}
          <div className="pointer-events-none absolute inset-0">
            {/* GRID */}
            <div
              className="absolute inset-0 opacity-2.5"
              style={{
                backgroundImage:
                  "linear-gradient(#EDECE8 1px, transparent 1px), linear-gradient(90deg, #EDECE8 1px, transparent 1px)",
                backgroundSize: "48px 48px"
              }}
            />

            {/* GLOWS */}
            <div className="absolute -right-40 top-0 h-150 w-150 rounded-full bg-[#5B7CFA]/8 blur-[170px]" />

            <div className="absolute -left-60 bottom-0 h-120 w-120 rounded-full bg-[#5B7CFA]/4 blur-[160px]" />

            {/* HUGE NUMBER */}
            <span className="absolute right-6 top-24 select-none font-['Fraunces'] text-[220px] leading-none text-white/[0.018] lg:right-14 lg:text-[330px]">
              01
            </span>
          </div>

          <div className="relative mx-auto w-full max-w-375 px-6 pb-20 pt-32 lg:px-10 lg:pb-24 lg:pt-36 xl:px-14">
            {/* TOP */}
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#5B7CFA]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#8EA5FF]">
                  Giới thiệu
                </span>
              </div>

              <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-[#4D4A44] sm:block">
                Khánh Hỷ · Portfolio 2026
              </span>
            </div>

            {/* HERO CONTENT */}
            <div className="grid gap-14 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-24">
              {/* LEFT */}
              <div>
                <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.24em] text-[#55524C]">
                  Một chút về tôi
                </p>

                <h1 className="max-w-4xl font-['Fraunces'] text-[52px] font-light leading-[0.96] tracking-[-0.045em] text-[#EDECE8] sm:text-[64px] lg:text-[78px]">
                  Tôi thích tạo ra
                  <br />
                  <span className="text-[#77756F]">những thứ</span>{" "}
                  <span className="text-[#8EA5FF]">có ích.</span>
                </h1>
              </div>

              {/* RIGHT */}
              <div className="max-w-xl lg:pb-2">
                <p className="font-['Fraunces'] text-[22px] font-light leading-normal tracking-[-0.02em] text-[#B9B7B0] sm:text-[25px]">
                  Tôi là <span className="text-[#EDECE8]">Khánh Hỷ</span>, làm
                  việc ở giao điểm giữa{" "}
                  <span className="text-[#8EA5FF]">công nghệ</span>, hình ảnh và
                  trải nghiệm thực tế.
                </p>

                <p className="mt-5 max-w-lg text-[12px] leading-6 text-[#68665F]">
                  Tôi quan tâm đến cách một ý tưởng được biến thành sản phẩm: từ
                  viết code, xây dựng trải nghiệm, xử lý hình ảnh cho đến việc
                  hoàn thiện những chi tiết nhỏ nhất.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />
                      <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                    </span>

                    <span className="text-[11px] text-[#8A887F]">
                      Sẵn sàng cho cơ hội mới
                    </span>
                  </div>

                  <span className="h-4 w-px bg-white/10" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#55524C]">
                    Việt Nam
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            MY STORY
        ========================================================= */}
        <section className="relative border-b border-white/[0.07]">
          <div className="mx-auto w-full max-w-375 px-6 py-20 lg:px-10 lg:py-24 xl:px-14">
            <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24">
              {/* LABEL */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-[#5B7CFA]">
                    01
                  </span>

                  <span className="h-px w-8 bg-white/10" />
                </div>

                <h2 className="mt-5 font-['Fraunces'] text-3xl font-light text-[#EDECE8]">
                  Câu chuyện
                </h2>

                <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[#4D4A44]">
                  Hành trình của tôi
                </p>
              </div>

              {/* CONTENT */}
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <p className="text-sm leading-7 text-[#9B9992]">
                    Tôi bắt đầu từ{" "}
                    <span className="text-[#EDECE8]">công nghệ thông tin</span>,
                    nơi tôi học cách phân tích vấn đề, xây dựng hệ thống và biến
                    yêu cầu thành một sản phẩm có thể sử dụng.
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[#77756F]">
                    Việc làm sản phẩm giúp tôi nhận ra rằng một thứ hoạt động
                    tốt thôi chưa đủ — cách nó được trình bày và cảm giác mà nó
                    mang lại cũng rất quan trọng.
                  </p>
                </div>

                <div>
                  <p className="text-sm leading-7 text-[#9B9992]">
                    Từ đó tôi mở rộng sang{" "}
                    <span className="text-[#EDECE8]">video editing</span>, nơi
                    câu chuyện được truyền tải bằng hình ảnh, nhịp điệu và cảm
                    xúc thay vì chỉ bằng code.
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[#77756F]">
                    Tôi không muốn giới hạn mình trong một chức danh duy nhất.
                    Điều tôi quan tâm hơn là học đủ sâu để có thể tạo ra một kết
                    quả thực sự tốt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            THREE DIRECTIONS
        ========================================================= */}
        <section className="relative border-b border-white/[0.07]">
          {/* GLOW */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-100 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5B7CFA]/4 blur-[160px]" />

          <div className="relative mx-auto w-full max-w-375 px-6 py-20 lg:px-10 lg:py-24 xl:px-14">
            {/* HEADER */}
            <div className="flex flex-col gap-5 border-b border-white/[0.07] pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-[#5B7CFA]">
                    02
                  </span>

                  <span className="h-px w-8 bg-white/10" />
                </div>

                <h2 className="mt-5 font-['Fraunces'] text-4xl font-light tracking-[-0.03em] text-[#EDECE8]">
                  Ba hướng.
                  <span className="text-[#77756F]"> Một con người.</span>
                </h2>
              </div>

              <p className="max-w-sm text-xs leading-5 text-[#68665F]">
                Mỗi lĩnh vực cho tôi một góc nhìn khác nhau trong cách giải
                quyết vấn đề và tạo ra sản phẩm.
              </p>
            </div>

            {/* CARDS */}
            <div className="grid lg:grid-cols-3">
              {/* VIDEO EDITOR */}
              <div className="group relative border-b border-white/[0.07] py-9 lg:border-b-0 lg:border-r lg:pr-10">
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-[#5B7CFA]">
                    01 / EDIT
                  </span>

                  <span className="text-xl text-[#343330] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8EA5FF]">
                    ↗
                  </span>
                </div>

                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/2.5 text-base">
                  ▶
                </div>

                <h3 className="font-['Fraunces'] text-2xl text-[#EDECE8]">
                  Video Editor
                </h3>

                <p className="mt-4 max-w-sm text-xs leading-6 text-[#68665F]">
                  Tập trung vào cách chọn source, nhịp dựng, bố cục và cách kể
                  câu chuyện bằng hình ảnh.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["CapCut", "Storytelling", "Short-form"].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/[0.07] bg-white/2 px-2.5 py-1 font-mono text-[8px] text-[#66635D]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* DEVELOPER */}
              <div className="group relative border-b border-white/[0.07] py-9 lg:border-b-0 lg:border-r lg:px-10">
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-[#5B7CFA]">
                    02 / CODE
                  </span>

                  <span className="text-xl text-[#343330] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8EA5FF]">
                    ↗
                  </span>
                </div>

                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/2.5 font-mono text-sm text-[#8EA5FF]">
                  &lt;/&gt;
                </div>

                <h3 className="font-['Fraunces'] text-2xl text-[#EDECE8]">
                  Developer
                </h3>

                <p className="mt-4 max-w-sm text-xs leading-6 text-[#68665F]">
                  Xây dựng ứng dụng từ giao diện đến backend, tập trung vào
                  logic rõ ràng và trải nghiệm sử dụng thực tế.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Next.js", "Spring Boot", "PostgreSQL"].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/[0.07] bg-white/2 px-2.5 py-1 font-mono text-[8px] text-[#66635D]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* DRIVER */}
              <div className="group relative py-9 lg:pl-10">
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-[#5B7CFA]">
                    03 / DRIVE
                  </span>

                  <span className="text-xl text-[#343330] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8EA5FF]">
                    ↗
                  </span>
                </div>

                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/2.5 text-base">
                  🚗
                </div>

                <h3 className="font-['Fraunces'] text-2xl text-[#EDECE8]">
                  Driver
                </h3>

                <p className="mt-4 max-w-sm text-xs leading-6 text-[#68665F]">
                  Một hướng thực tế giúp tôi rèn sự tập trung, tính chủ động và
                  trách nhiệm trong từng tình huống.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Tập trung", "An toàn", "Trách nhiệm"].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/[0.07] bg-white/2 px-2.5 py-1 font-mono text-[8px] text-[#66635D]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WORK STYLE
        ========================================================= */}
        <section className="relative border-b border-white/[0.07]">
          <div className="mx-auto w-full max-w-375 px-6 py-20 lg:px-10 lg:py-24 xl:px-14">
            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              {/* LEFT */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-[#5B7CFA]">
                    03
                  </span>

                  <span className="h-px w-8 bg-white/10" />
                </div>

                <h2 className="mt-5 font-['Fraunces'] text-4xl font-light leading-tight tracking-[-0.03em] text-[#EDECE8]">
                  Cách tôi
                  <br />
                  <span className="text-[#77756F]">làm việc.</span>
                </h2>
              </div>

              {/* RIGHT */}
              <div className="grid sm:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Hiểu vấn đề",
                    text: "Xác định rõ mục tiêu trước khi bắt đầu làm."
                  },
                  {
                    number: "02",
                    title: "Làm có chủ đích",
                    text: "Mỗi chi tiết đều nên có lý do để tồn tại."
                  },
                  {
                    number: "03",
                    title: "Thử và chỉnh",
                    text: "Không ngại sửa lại nếu kết quả chưa đủ tốt."
                  },
                  {
                    number: "04",
                    title: "Hoàn thiện",
                    text: "Ưu tiên sản phẩm sử dụng được thay vì chỉ đẹp trên ý tưởng."
                  }
                ].map((item, index) => (
                  <div
                    key={item.number}
                    className={`group p-7 ${
                      index % 2 === 0
                        ? "sm:border-r sm:border-white/[0.07]"
                        : ""
                    } ${index < 2 ? "border-b border-white/[0.07]" : ""}`}
                  >
                    <span className="font-mono text-[8px] text-[#5B7CFA]">
                      {item.number}
                    </span>

                    <h3 className="mt-8 text-sm font-medium text-[#EDECE8]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xs text-xs leading-5 text-[#68665F]">
                      {item.text}
                    </p>

                    <div className="mt-7 h-px w-8 bg-white/10 transition-all duration-300 group-hover:w-14 group-hover:bg-[#5B7CFA]/50" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            QUICK INFO + CTA
        ========================================================= */}
        <section className="relative">
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-200 -translate-x-1/2 rounded-full bg-[#5B7CFA]/5 blur-[150px]" />

          <div className="relative mx-auto w-full max-w-375 px-6 py-20 lg:px-10 lg:py-24 xl:px-14">
            {/* INFO */}
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["ĐỊA ĐIỂM", "Việt Nam"],
                ["LĨNH VỰC", "Edit + Development"],
                ["ĐỊNH HƯỚNG", "Freelance / Remote"],
                ["TRẠNG THÁI", "Sẵn sàng"]
              ].map(([label, value]) => (
                <div key={label} className="bg-[#0B0B0D] px-6 py-6">
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#4D4A44]">
                    {label}
                  </p>

                  <p className="mt-3 text-xs text-[#B5B3AD]">{value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 grid gap-10 border-t border-white/[0.07] pt-14 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#5B7CFA]">
                  Tiếp theo
                </p>

                <h2 className="mt-5 max-w-3xl font-['Fraunces'] text-4xl font-light leading-[1.1] tracking-[-0.03em] text-[#EDECE8] sm:text-5xl">
                  Đừng chỉ đọc về tôi.
                  <br />
                  <span className="text-[#77756F]">
                    Hãy xem những gì tôi đã làm.
                  </span>
                </h2>
              </div>

              <Link
                href="/projects"
                className="group flex w-fit items-center gap-5 rounded-xl bg-[#EDECE8] px-6 py-4 text-xs font-semibold text-[#0B0B0D] transition duration-300 hover:scale-[1.02] hover:bg-white"
              >
                Xem dự án
                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
