import React from "react";

import useInView from "../hooks/useInView";

const AboutQuote: React.FC = () => {
  const [ref, inView] = useInView<HTMLDivElement>(0.6);

  return (
    <section className="relative border-b border-white/10">
      <div className="mx-auto w-full max-w-375 px-6 py-16 lg:px-10 xl:px-14">
        <div
          ref={ref}
          className={`mx-auto max-w-4xl text-center transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="font-['Fraunces'] text-4xl text-[#8EA5FF]/60">
            &ldquo;
          </span>

          <p className="mt-2 font-['Fraunces'] text-[26px] font-light leading-[1.35] tracking-[-0.02em] text-[#E4E2DD] sm:text-[32px]">
            Một thứ hoạt động tốt thôi chưa đủ — cách nó được trình bày và cảm
            giác mà nó mang lại cũng rất quan trọng.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutQuote;
