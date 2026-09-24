import React from "react";

export default function useScrollProgress(): number {
  const [progress, setProgress] = React.useState<number>(0);

  React.useEffect(() => {
    let ticking = false;

    const update = () => {
      const documentElement = document.documentElement;

      const max = documentElement.scrollHeight - documentElement.clientHeight;

      setProgress(max > 0 ? Math.min(1, documentElement.scrollTop / max) : 0);

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      window.requestAnimationFrame(update);

      ticking = true;
    };

    update();

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}
