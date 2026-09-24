import React from "react";

const directions = [
  {
    number: "01",
    code: "EDIT",
    icon: "▶",
    title: "Video Editor",
    description:
      "Tập trung vào cách chọn source, nhịp dựng, bố cục và cách kể câu chuyện bằng hình ảnh.",
    skills: ["CapCut", "Storytelling", "Short-form"]
  },
  {
    number: "02",
    code: "CODE",
    icon: "</>",
    title: "Developer",
    description:
      "Xây dựng ứng dụng từ giao diện đến backend, tập trung vào logic rõ ràng và trải nghiệm sử dụng thực tế.",
    skills: ["Next.js", "Spring Boot", "PostgreSQL"]
  },
  {
    number: "03",
    code: "DRIVE",
    icon: "🚗",
    title: "Driver",
    description:
      "Đã có giấy phép lái xe, hiện đang bổ túc tay lái và tiếp tục tích lũy kinh nghiệm thực tế.",
    skills: ["Tập trung", "An toàn", "Trách nhiệm"]
  }
];

const AboutDirections: React.FC = () => {
  return (
    <section className="relative border-b border-white/10">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-100 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#718CFF]/7 blur-[160px]" />

      <div className="relative mx-auto w-full max-w-375 px-6 py-20 lg:px-10 lg:py-24 xl:px-14">
        <div className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-2.25 text-[#8EA5FF]">02</span>

              <span className="h-px w-8 bg-white/15" />
            </div>

            <h2 className="mt-5 font-['Fraunces'] text-4xl font-light tracking-[-0.03em] text-[#F4F3EF]">
              Ba hướng.
              <span className="text-[#A09E98]"> Một con người.</span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-5 text-[#96948E]">
            Mỗi lĩnh vực cho tôi một góc nhìn khác nhau trong cách giải quyết
            vấn đề và tạo ra sản phẩm.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {directions.map((direction) => (
            <article
              key={direction.code}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1B1E29]/75 p-7 shadow-[0_15px_45px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#8EA5FF]/30 hover:bg-[#20232F]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2.25 text-[#8EA5FF]">
                  {direction.number} / {direction.code}
                </span>

                <span className="text-xl text-[#777A84] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#9BADFF]">
                  ↗
                </span>
              </div>

              <div className="mt-12 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#9BADFF]">
                {direction.icon}
              </div>

              <h3 className="mt-6 font-['Fraunces'] text-2xl text-[#F4F3EF]">
                {direction.title}
              </h3>

              <p className="mt-4 text-xs leading-6 text-[#999791]">
                {direction.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {direction.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[8px] text-[#AAA8A1]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutDirections;
