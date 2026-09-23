"use client";

import React from "react";

// ↑ sửa path này nếu file hero.tsx của bạn nằm chỗ khác

interface HeroPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HeroPopup({ isOpen, onClose }: HeroPopupProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(1);

  // ESC để đóng popup + khóa scroll body
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Tự động thu/phóng nội dung Hero cho vừa khít khung popup
  // => không bao giờ phát sinh scroll ngang lẫn dọc
  React.useEffect(() => {
    if (!isOpen) return;

    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const computeScale = () => {
      // Đưa về scale 1 trước để đo kích thước "tự nhiên" của nội dung
      content.style.transform = "scale(1)";

      const contentWidth = content.scrollWidth;
      const contentHeight = content.scrollHeight;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      if (!contentWidth || !contentHeight) return;

      const nextScale = Math.min(
        containerWidth / contentWidth,
        containerHeight / contentHeight,
        1
      );

      setScale(nextScale > 0 ? nextScale : 1);
    };

    computeScale();

    const resizeObserver = new ResizeObserver(computeScale);
    resizeObserver.observe(container);
    resizeObserver.observe(content);
    window.addEventListener("resize", computeScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", computeScale);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm"
      style={{ animation: "popupBackdropIn 0.35s ease-out both" }}
      onMouseDown={onClose}
    >
      <style>{`
        @keyframes popupBackdropIn {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(4px); }
        }
        @keyframes popupModalIn {
          from { opacity: 0; transform: scale(0.94) translateY(14px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes popupBorderGlow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.75; }
        }
        @keyframes popupShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes popupParticle {
          0%, 100% { transform: translateY(0); opacity: 0.15; }
          50% { transform: translateY(-16px); opacity: 0.5; }
        }
        @keyframes popupCloseIn {
          from { opacity: 0; transform: scale(0.6) rotate(-45deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
      `}</style>

      {/* Particles trang trí trên nền backdrop */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
        {Array.from({ length: 14 }, (_, i) => ({
          id: i,
          left: (i * 43) % 100,
          top: (i * 31) % 100,
          size: 2 + (i % 2),
          delay: (i % 6) * 0.6,
          duration: 6 + (i % 5) * 1.2
        })).map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-[#5B7CFA]"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              animation: `popupParticle ${p.duration}s ease-in-out ${p.delay}s infinite`
            }}
          />
        ))}
      </div>

      {/* MODAL - gần full màn hình, không có thanh scroll */}
      <div
        ref={containerRef}
        className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0D] shadow-2xl"
        style={{
          animation: "popupModalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both"
        }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* VIỀN SÁNG BAO QUANH MODAL */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-r from-[#5B7CFA]/40 via-transparent to-[#5B7CFA]/40"
          style={{ animation: "popupBorderGlow 3.5s ease-in-out infinite" }}
        />

        {/* TIA SÁNG CHẠY NGANG TRÊN CẠNH TOP CỦA MODAL */}
        <div className="pointer-events-none absolute top-0 z-10 h-px w-full overflow-hidden">
          <div
            className="h-full w-1/3 bg-linear-to-r from-transparent via-[#8EA5FF] to-transparent"
            style={{ animation: "popupShimmer 4s linear infinite" }}
          />
        </div>

        {/* GÓC TRANG TRÍ */}
        <div className="pointer-events-none absolute left-4 top-4 h-6 w-6 rounded-tl-lg border-l border-t border-white/15" />
        <div className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 rounded-br-lg border-b border-r border-white/15" />

        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng"
          className="group fixed right-8 top-8 z-10000 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#151518]/90 text-lg text-[#A6A39B] backdrop-blur-md transition duration-300 hover:rotate-90 hover:border-[#5B7CFA]/40 hover:bg-[#1D1D21] hover:text-white"
          style={{ animation: "popupCloseIn 0.4s ease-out 0.15s both" }}
        >
          <span className="absolute inset-0 rounded-full bg-[#5B7CFA]/0 transition group-hover:bg-[#5B7CFA]/10" />
          <span className="relative">×</span>
        </button>

        {/* KHUNG CHỨA NỘI DUNG - luôn overflow-hidden, không bao giờ hiện scrollbar */}
        <div className="flex h-full w-full items-start justify-center overflow-hidden">
          <div
            ref={contentRef}
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top center",
              transition: "transform 0.15s ease-out"
            }}
          >
            {/* HERO.TSX */}
            <div className="flex min-h-[70vh] w-full items-center justify-center px-6">
              <div className="max-w-lg text-center">
                {/* STATUS */}
                <div className="mb-7 flex justify-center">
                  <div className="flex items-center gap-2 rounded-full border border-[#5B7CFA]/20 bg-[#5B7CFA]/5 px-4 py-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5B7CFA] opacity-40" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5B7CFA]" />
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8EA5FF]">
                      Đang cập nhật
                    </span>
                  </div>
                </div>

                {/* TITLE */}
                <h2 className="font-['Fraunces'] text-4xl font-light tracking-[-0.04em] text-[#EDECE8] sm:text-5xl">
                  Hồ sơ đang được
                  <br />
                  <span className="text-[#9A98A5]">hoàn thiện.</span>
                </h2>

                {/* DESCRIPTION */}
                <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-[#817E77]">
                  Một số dữ liệu hiện vẫn đang được cập nhật và chưa được đồng
                  bộ lên hệ thống. Nội dung đầy đủ sẽ sớm được bổ sung.
                </p>

                {/* PROGRESS */}
                <div className="mx-auto mt-10 max-w-xs">
                  <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.16em] text-[#5F5C56]">
                    <span>Portfolio data</span>
                    <span>Updating</span>
                  </div>

                  <div className="mt-3 h-px overflow-hidden bg-white/8">
                    <div className="h-full w-2/3 bg-[#5B7CFA]" />
                  </div>
                </div>

                {/* FOOTER */}
                <p className="mt-8 font-mono text-[8px] uppercase tracking-[0.18em] text-[#4C4944]">
                  Available soon
                </p>
              </div>
              {/* <Hero/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
