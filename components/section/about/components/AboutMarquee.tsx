import React from "react";

import type { SkillProps } from "@/features/skill/skillTypes";

import useInView from "../hooks/useInView";

interface AboutMarqueeProps {
  skills: SkillProps[];
}

const AboutMarquee: React.FC<AboutMarqueeProps> = ({ skills }) => {
  const [ref, inView] = useInView<HTMLDivElement>(0.2);

  if (skills.length === 0) {
    return null;
  }

  const marqueeSkills = [...skills, ...skills];

  return (
    <section ref={ref} className="relative overflow-hidden border-b border-white/10 py-10">
      <div
        className={`about-marquee flex w-max items-center gap-10 transition-opacity duration-700 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        {marqueeSkills.map((skill, index) => (
          <span
            key={`${skill.id}-${index}`}
            className="flex items-center gap-10 font-['Fraunces'] text-2xl font-light text-[#96948E] sm:text-3xl"
          >
            {skill.name}

            <span className="text-sm text-[#8EA5FF]/70">✦</span>
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#151821] to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#151821] to-transparent" />

      <style jsx>
        {`
          .about-marquee {
            animation: aboutMarquee 28s linear infinite;
          }

          @keyframes aboutMarquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .about-marquee {
              animation: none;
            }
          }
        `}
      </style>
    </section>
  );
};

export default AboutMarquee;
