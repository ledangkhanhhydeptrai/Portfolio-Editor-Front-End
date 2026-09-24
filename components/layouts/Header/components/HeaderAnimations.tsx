import React from "react";

const HeaderAnimations:
  React.FC = () => {
  return (
    <style>
      {`
        @keyframes shimmerLine {
          0% {
            transform:
              translateX(-100%);
          }

          100% {
            transform:
              translateX(100%);
          }
        }

        @keyframes floatDot {
          0%,
          100% {
            transform:
              translateY(0);

            opacity: 0.2;
          }

          50% {
            transform:
              translateY(-4px);

            opacity: 0.6;
          }
        }

        @keyframes logoGlowPulse {
          0%,
          100% {
            opacity: 0.35;
            transform:
              scale(1);
          }

          50% {
            opacity: 0.65;
            transform:
              scale(1.18);
          }
        }

        @keyframes logoRingSpin {
          from {
            transform:
              rotate(0deg);
          }

          to {
            transform:
              rotate(360deg);
          }
        }

        @keyframes gradientDrift {
          0%,
          100% {
            background-position:
              0% 50%;
          }

          50% {
            background-position:
              100% 50%;
          }
        }

        @keyframes mobileMenuIn {
          from {
            opacity: 0;

            transform:
              translateY(-10px)
              scale(0.98);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }
        }

        @keyframes mobileItemIn {
          from {
            opacity: 0;

            transform:
              translateX(-10px);
          }

          to {
            opacity: 1;

            transform:
              translateX(0);
          }
        }

        @keyframes skillDropdownIn {
          from {
            opacity: 0;

            transform:
              translateY(-8px)
              scale(0.97);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }
        }

        @keyframes skillIconFloat {
          0%,
          100% {
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-2px);
          }
        }

        .brand-gradient-text {
          background:
            linear-gradient(
              90deg,
              #EDECE8,
              #8EA5FF,
              #EDECE8
            );

          background-size:
            200% auto;

          -webkit-background-clip:
            text;

          background-clip:
            text;

          color:
            transparent;

          animation:
            gradientDrift
            6s
            ease-in-out
            infinite;
        }
      `}
    </style>
  );
};

export default HeaderAnimations;