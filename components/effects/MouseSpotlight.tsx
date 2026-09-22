"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function MouseSpotlight() {
  const [cursor, setCursor] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-40 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5B7CFA]/10 blur-[90px] lg:block"
      animate={{ left: cursor.x, top: cursor.y }}
      transition={{ type: "spring", stiffness: 120, damping: 24, mass: 0.2 }}
    />
  );
}
