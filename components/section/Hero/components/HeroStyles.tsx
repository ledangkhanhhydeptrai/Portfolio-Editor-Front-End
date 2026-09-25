"use client";

const HeroStyles = () => {
  return (
    <style>{`
      @keyframes floatParticle {
        0%, 100% {
          transform: translateY(0) translateX(0);
          opacity: 0.2;
        }

        50% {
          transform: translateY(-20px) translateX(8px);
          opacity: 0.75;
        }
      }

      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(18px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes spinSlow {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }

      @keyframes scrollDot {
        0% {
          transform: translateY(0);
          opacity: 0;
        }

        30% {
          opacity: 1;
        }

        100% {
          transform: translateY(14px);
          opacity: 0;
        }
      }

      @keyframes pulseGlow {
        0%, 100% {
          opacity: 0.18;
        }

        50% {
          opacity: 0.34;
        }
      }

      @keyframes shimmerSweep {
        0% {
          transform: translateX(-120%);
        }

        100% {
          transform: translateX(220%);
        }
      }

      @keyframes badgeFloat {
        0%, 100% {
          transform: translateY(0);
        }

        50% {
          transform: translateY(-8px);
        }
      }

      @keyframes badgeFloatAlt {
        0%, 100% {
          transform: translateY(0);
        }

        50% {
          transform: translateY(8px);
        }
      }

      @keyframes frameGlowPulse {
        0%, 100% {
          box-shadow:
            inset 0 0 0 1px rgba(199,123,61,0.2),
            0 0 60px -20px rgba(199,123,61,0.25);
        }

        50% {
          box-shadow:
            inset 0 0 0 1px rgba(199,123,61,0.5),
            0 0 90px -15px rgba(199,123,61,0.4);
        }
      }

      .fade-up {
        animation:
          fadeUp 0.9s
          cubic-bezier(0.16, 1, 0.3, 1)
          both;
      }

      .fade-up-1 {
        animation-delay: 0.05s;
      }

      .fade-up-2 {
        animation-delay: 0.18s;
      }

      .fade-up-3 {
        animation-delay: 0.32s;
      }

      .fade-up-4 {
        animation-delay: 0.46s;
      }

      .fade-up-5 {
        animation-delay: 0.6s;
      }
    `}</style>
  );
};

export default HeroStyles;
