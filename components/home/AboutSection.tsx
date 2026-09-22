"use client";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14"
    >
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#5B7CFA]/5 blur-[140px]" />
      <span className="pointer-events-none absolute right-[5%] top-12 select-none font-['Fraunces'] text-[120px] leading-none text-white/2">
        01
      </span>
      <div className="relative mx-auto grid w-full max-w-375 gap-14 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#5B7CFA]" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#5B7CFA]">
              Giới thiệu
            </span>
          </div>

          <h2 className="mt-5 font-['Fraunces'] text-3xl font-light leading-tight lg:text-4xl">
            Nhiều hơn
            <br />
            một hướng đi.
          </h2>
        </div>

        <div>
          <p className="max-w-4xl font-['Fraunces'] text-2xl font-light leading-[1.45] text-[#E0DED8] sm:text-3xl lg:text-[34px]">
            Tôi thích tạo ra những thứ có thể
            <span className="text-[#5B7CFA]"> nhìn thấy</span>,
            <span className="text-[#5B7CFA]"> sử dụng</span> và
            <span className="text-[#5B7CFA]"> cảm nhận</span>.
          </p>

          <div className="mt-8 grid gap-4 border-t border-white/7 pt-7 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-white/7 bg-white/2 p-5 transition duration-300 hover:border-[#5B7CFA]/20 hover:bg-white/3">
              <span className="font-mono text-[8px] text-[#5B7CFA]">
                01 / BUILD
              </span>
              <p className="mt-3 text-sm leading-6 text-[#A6A39B]">
                Lập trình biến ý tưởng thành sản phẩm số.
              </p>
              <div className="absolute bottom-0 left-5 h-px w-0 bg-[#5B7CFA] transition-all duration-500 group-hover:w-16" />
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/7 bg-white/2 p-5 transition duration-300 hover:border-violet-400/20 hover:bg-white/3">
              <span className="font-mono text-[8px] text-violet-300/70">
                02 / CREATE
              </span>
              <p className="mt-3 text-sm leading-6 text-[#A6A39B]">
                Video biến hình ảnh thành câu chuyện.
              </p>
              <div className="absolute bottom-0 left-5 h-px w-0 bg-violet-400 transition-all duration-500 group-hover:w-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
