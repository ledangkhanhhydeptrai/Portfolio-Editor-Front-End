"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14"
    >
      <div className="mx-auto grid w-full max-w-375 gap-12 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#7F96F5]">
            01 / Giới thiệu
          </p>
          <h2 className="mt-5 font-['Fraunces'] text-3xl font-light leading-tight text-[#EDECE8] lg:text-4xl">
            Nhiều hơn
            <br />
            một hướng đi.
          </h2>
        </div>
        <div>
          <p className="max-w-3xl font-['Fraunces'] text-2xl font-light leading-[1.45] text-[#D6D4CE] sm:text-3xl">
            Tôi kết hợp <span className="text-[#9BAEFF]">hình ảnh</span> và{" "}
            <span className="text-[#9BAEFF]">công nghệ</span> để tạo ra những
            sản phẩm rõ ràng, hữu ích và có cảm xúc.
          </p>
          <div className="mt-9 grid gap-4 border-t border-white/8 pt-7 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6F6C65]">
                Build
              </p>
              <p className="mt-2 text-sm leading-6 text-[#A6A39B]">
                Lập trình biến ý tưởng thành sản phẩm số.
              </p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6F6C65]">
                Create
              </p>
              <p className="mt-2 text-sm leading-6 text-[#A6A39B]">
                Video biến hình ảnh thành câu chuyện.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
