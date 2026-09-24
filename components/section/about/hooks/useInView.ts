import React from "react";

export default function useInView<T extends HTMLElement>(
  threshold = 0.35
): [React.RefObject<T | null>, boolean] {
  const ref = React.useRef<T | null>(null);

  const [inView, setInView] = React.useState<boolean>(false);

  React.useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setInView(true));

      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);

          observer.unobserve(entry.target);
        }
      },
      {
        threshold
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
