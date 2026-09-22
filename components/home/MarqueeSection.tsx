"use client";

import { motion } from "motion/react";
export default function MarqueeSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/7 bg-[#0E0E11] py-4">
      <motion.div
        className="flex w-max items-center whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-[#817E77]"
        animate={{ x: [0, -900] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1, 2].map((loop) => (
          <div key={loop} className="flex items-center">
            {[
              "VIDEO EDITING",
              "NEXT.JS",
              "SPRING BOOT",
              "STORYTELLING",
              "POSTGRESQL",
              "CREATIVE",
              "MOTION"
            ].map((item) => (
              <span key={`${loop}-${item}`} className="flex items-center">
                <span className="mx-6 text-[#9BAEFF]">✦</span>
                {item}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
