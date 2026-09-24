import React from "react";

const AboutHero: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);

  const heroRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));

    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = heroRef.current;

    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();

    element.style.setProperty("--mx", `${event.clientX - rect.left}px`);

    element.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const heroStyle = {
    "--mx": "50%",
    "--my": "20%"
  } as React.CSSProperties;

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      style={heroStyle}
      className="relative overflow-hidden border-b border-white/10"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-150 w-150 rounded-full bg-[#718CFF]/12 blur-[170px]" />

        <div className="absolute -left-60 bottom-0 h-120 w-120 rounded-full bg-[#718CFF]/7 blur-[160px]" />

        <div className="absolute right-6 top-24 select-none font-['Fraunces'] text-[220px] leading-none text-white/3 lg:right-14 lg:text-[330px]">
          01
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-375 px-6 pb-20 pt-32 lg:px-10 lg:pb-24 lg:pt-36 xl:px-14">
        {/* TOP */}

        <div
          className={`flex items-center justify-between border-b border-white/10 pb-5 transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#8EA5FF]" />

            <span className="font-mono text-2.25 uppercase tracking-[0.28em] text-[#9BADFF]">
              Giới thiệu
            </span>
          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-[#777A84] sm:block">
            Khánh Hỷ · Portfolio 2026
          </span>
        </div>

        {/* CONTENT */}

        <div className="grid gap-14 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-24">
          <div>
            <p className="mb-5 font-mono text-2.25 uppercase tracking-[0.24em] text-[#81838D]">
              Một chút về tôi
            </p>

            <h1 className="max-w-4xl font-['Fraunces'] text-[52px] font-light leading-[0.96] tracking-[-0.045em] text-[#F5F4F0] sm:text-[64px] lg:text-[78px]">
              Tôi thích tạo ra
              <br />
              <span className="text-[#A5A4A0]">những thứ</span>{" "}
              <span className="text-[#9BADFF]">có ích.</span>
            </h1>
          </div>

          <div className="max-w-xl lg:pb-2">
            <p className="font-['Fraunces'] text-[22px] font-light leading-normal tracking-[-0.02em] text-[#D0CEC8] sm:text-[25px]">
              Tôi là <span className="text-white">Khánh Hỷ</span>, làm việc ở
              giao điểm giữa <span className="text-[#9BADFF]">công nghệ</span>,
              hình ảnh và trải nghiệm thực tế.
            </p>

            <p className="mt-5 max-w-lg text-[12px] leading-6 text-[#9A9892]">
              Tôi quan tâm đến cách một ý tưởng được biến thành sản phẩm: từ
              viết code, xây dựng trải nghiệm, xử lý hình ảnh cho đến việc hoàn
              thiện những chi tiết nhỏ nhất.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />

                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[11px] text-[#AAA8A1]">
                  Sẵn sàng cho cơ hội mới
                </span>
              </div>

              <span className="h-4 w-px bg-white/15" />

              <span className="font-mono text-2.25 uppercase tracking-[0.16em] text-[#81838D]">
                Việt Nam
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
