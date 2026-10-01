"use client";

const HeroStyles = () => {
  return (
    <style>{`
      @keyframes heroReveal {
        from {
          opacity: 0;
          transform: translateY(24px);
          filter: blur(6px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }
      }

      @keyframes heroImageEnter {
        from {
          opacity: 0;
          transform:
            translateY(24px)
            scale(0.97);
        }

        to {
          opacity: 1;
          transform:
            translateY(0)
            scale(1);
        }
      }

      @keyframes heroGlow {
        0%,
        100% {
          opacity: 0.55;
          transform:
            translateX(-50%)
            scale(1);
        }

        50% {
          opacity: 0.85;
          transform:
            translateX(-50%)
            scale(1.08);
        }
      }

      @keyframes heroGlowAlt {
        0%,
        100% {
          opacity: 0.5;
          transform: scale(1);
        }

        50% {
          opacity: 0.75;
          transform: scale(1.1);
        }
      }

      @keyframes heroScroll {
        0% {
          transform: translateY(0);
          opacity: 0;
        }

        25% {
          opacity: 1;
        }

        100% {
          transform: translateY(18px);
          opacity: 0;
        }
      }

      @keyframes heroStatusFloat {
        0%,
        100% {
          transform: translateY(0);
        }

        50% {
          transform: translateY(-6px);
        }
      }

      @keyframes heroSheen {
        0% {
          transform:
            translateX(-180%)
            rotate(12deg);
        }

        55%,
        100% {
          transform:
            translateX(520%)
            rotate(12deg);
        }
      }

      @keyframes heroFrameGlow {
        0%,
        100% {
          box-shadow:
            inset 0 0 0 1px
              rgba(142, 165, 255, 0.06),
            0 35px 90px -35px
              rgba(0, 0, 0, 0.95);
        }

        50% {
          box-shadow:
            inset 0 0 0 1px
              rgba(142, 165, 255, 0.18),
            0 35px 100px -30px
              rgba(91, 124, 250, 0.18);
        }
      }

      .hero-reveal {
        animation:
          heroReveal
          0.9s
          cubic-bezier(0.16, 1, 0.3, 1)
          both;
      }

      .hero-reveal-1 {
        animation-delay: 0.05s;
      }

      .hero-reveal-2 {
        animation-delay: 0.14s;
      }

      .hero-reveal-3 {
        animation-delay: 0.23s;
      }

      .hero-reveal-4 {
        animation-delay: 0.32s;
      }

      .hero-reveal-5 {
        animation-delay: 0.41s;
      }

      .hero-image-enter {
        animation:
          heroImageEnter
          1.1s
          cubic-bezier(0.16, 1, 0.3, 1)
          0.18s
          both;
      }

      .hero-glow {
        animation:
          heroGlow
          10s
          ease-in-out
          infinite;
      }

      .hero-glow-alt {
        animation:
          heroGlowAlt
          12s
          ease-in-out
          infinite;
      }

      .hero-scroll-dot {
        animation:
          heroScroll
          1.8s
          ease-in-out
          infinite;
      }

      .hero-status-float {
        animation:
          heroStatusFloat
          5s
          ease-in-out
          infinite;
      }

      .hero-image-sheen {
        animation:
          heroSheen
          8s
          ease-in-out
          infinite;
      }

      .hero-image-frame {
        animation:
          heroFrameGlow
          7s
          ease-in-out
          infinite;
      }

      @media (
        prefers-reduced-motion:
        reduce
      ) {
        .hero-reveal,
        .hero-image-enter,
        .hero-glow,
        .hero-glow-alt,
        .hero-scroll-dot,
        .hero-status-float,
        .hero-image-sheen,
        .hero-image-frame {
          animation: none !important;
        }
      }
    `}</style>
  );
};

export default HeroStyles;
