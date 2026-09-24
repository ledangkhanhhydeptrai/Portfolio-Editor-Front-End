import React from "react";
import Link from "next/link";

interface MagneticLinkProps {
  href: string;
}

interface Offset {
  x: number;
  y: number;
}

const MagneticLink: React.FC<MagneticLinkProps> = ({ href }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const [offset, setOffset] = React.useState<Offset>({
    x: 0,
    y: 0
  });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;

    const y = event.clientY - rect.top - rect.height / 2;

    setOffset({
      x: x * 0.25,
      y: y * 0.35
    });
  };

  const handleLeave = () => {
    setOffset({
      x: 0,
      y: 0
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`
      }}
      className="w-fit transition-transform duration-200"
    >
      <Link
        href={href}
        className="group flex items-center gap-5 rounded-xl bg-[#F4F3EF] px-6 py-4 text-xs font-semibold text-[#12141C] shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-white"
      >
        Xem dự án
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
};

export default MagneticLink;
