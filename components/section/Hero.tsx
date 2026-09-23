"use client";

import React from "react";
import Image from "next/image";
import { getProfileRequest } from "../../features/profile/profileSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { ProfileProps } from "@/features/profile/profileTypes";
import Loading from "../ui/Loading";
import ErrorMessage from "../ui/ErrorMessage";

const CONTACT_ICON: Record<string, React.ReactNode> = {
  email: (
    <path
      d="M3 5h14v10H3V5Zm0 0 7 6 7-6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  phone: (
    <path
      d="M4 3h3l1.5 4L6.5 8.5a10 10 0 0 0 5 5L13 11.5l4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A14 14 0 0 1 3 4.6 1.5 1.5 0 0 1 4 3Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  location: (
    <path
      d="M10 18s6-5.2 6-9.5A6 6 0 0 0 4 8.5C4 12.8 10 18 10 18Zm0-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
};

export default function Hero() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.profile);

  React.useEffect(() => {
    dispatch(getProfileRequest());
  }, [dispatch]);

  // Trích xuất profile an toàn, tuân thủ đúng ProfileProps interface
  const profile = React.useMemo<ProfileProps | null>(() => {
    if (!data) return null;
    if (Array.isArray(data)) {
      if (data.length === 0) return null;
      return (data as ProfileProps[]).at(0) ?? null;
    }
    return data as ProfileProps;
  }, [data]);

  const contactItems = React.useMemo<{ key: string; value: string }[]>(() => {
    if (!profile) return [];
    return [
      { key: "email", value: profile.email },
      { key: "phone", value: profile.phone },
      { key: "location", value: profile.location }
    ].filter((item): item is { key: string; value: string } =>
      Boolean(item.value)
    );
  }, [profile]);

  // Vài chấm nền ngẫu nhiên nhưng cố định (tránh mismatch hydration)
  const particles = React.useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        top: (i * 53) % 100,
        size: 2 + (i % 4),
        delay: (i % 6) * 0.7,
        duration: 6 + (i % 5) * 1.4,
        tone: i % 3 === 0 ? "#3A6B7A" : "#C77B3D"
      })),
    []
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!profile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#101114]">
        <p className="font-['Space_Grotesk'] text-sm text-[#8F8B84]">
          Không có dữ liệu hồ sơ
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#101114]">
      {/* Keyframes cục bộ cho các hiệu ứng trang trí */}
      <style>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-20px) translateX(8px); opacity: 0.75; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinSlowReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(14px); opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.18; }
          50% { opacity: 0.34; }
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(220%); }
        }
        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes badgeFloatAlt {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        @keyframes dashTravel {
          to { stroke-dashoffset: -200; }
        }
        @keyframes frameGlowPulse {
          0%, 100% { box-shadow: inset 0 0 0 1px rgba(199,123,61,0.2), 0 0 60px -20px rgba(199,123,61,0.25); }
          50% { box-shadow: inset 0 0 0 1px rgba(199,123,61,0.5), 0 0 90px -15px rgba(199,123,61,0.4); }
        }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.18s; }
        .fade-up-3 { animation-delay: 0.32s; }
        .fade-up-4 { animation-delay: 0.46s; }
        .fade-up-5 { animation-delay: 0.6s; }
      `}</style>

      <section className="relative overflow-hidden border-y border-white/6 text-[#EDEAE3]">
        {/* Hạt nhiễu (grain) phủ nhẹ toàn bộ nền để bớt phẳng */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay">
          <filter id="heroGrain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#heroGrain)" />
        </svg>

        {/* Lưới nền kỹ thuật — rõ hơn */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#EDEAE3 1px, transparent 1px), linear-gradient(90deg, #EDEAE3 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />

        {/* Nhãn dọc trang trí bên mép trái */}
        <div className="pointer-events-none absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
          <p
            className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.5em] text-[#8F8B84]/70"
            style={{ writingMode: "vertical-rl" }}
          >
            Portfolio — 2026
          </p>
        </div>

        {/* Particles trôi nổi trang trí — 2 tông màu xen kẽ, rõ hơn */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
                backgroundColor: p.tone,
                boxShadow: `0 0 10px ${p.tone}`,
                animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite`
              }}
            />
          ))}
        </div>

        {/* Ambient Glow đôi màu — đậm hơn để tạo chiều sâu rõ rệt */}
        <div
          className="pointer-events-none absolute -left-20 top-1/4 h-125 w-125 rounded-full bg-[#C77B3D]/20 blur-[130px]"
          style={{ animation: "pulseGlow 8s ease-in-out infinite" }}
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#3A6B7A]/20 blur-[120px]"
          style={{ animation: "pulseGlow 10s ease-in-out infinite 1.5s" }}
        />
        <div
          className="pointer-events-none absolute left-1/3 top-0 h-56 w-56 rounded-full bg-[#3A6B7A]/14 blur-[100px]"
          style={{ animation: "pulseGlow 9s ease-in-out infinite 3s" }}
        />

        {/* Đường kẻ đứt chạy dọc phân định 2 nửa */}
        <svg
          className="pointer-events-none absolute inset-y-0 left-[57%] hidden h-full w-6 md:block"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke="#EDEAE3"
            strokeOpacity="0.14"
            strokeWidth="1"
            strokeDasharray="3 9"
            style={{ animation: "dashTravel 8s linear infinite" }}
          />
        </svg>

        {/* Viền góc trang trí kiểu blueprint — lớn và rõ hơn */}
        <div className="pointer-events-none absolute left-6 top-6 hidden h-12 w-12 border-l-2 border-t-2 border-[#C77B3D]/40 md:block" />
        <div className="pointer-events-none absolute left-6 top-6 hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C77B3D] md:block" />
        <div className="pointer-events-none absolute bottom-6 right-6 hidden h-12 w-12 border-b-2 border-r-2 border-[#3A6B7A]/40 md:block" />
        <div className="pointer-events-none absolute bottom-6 right-6 hidden h-1.5 w-1.5 translate-x-1/2 translate-y-1/2 rounded-full bg-[#3A6B7A] md:block" />

        {/* tia sáng chạy ngang phía trên cùng */}
        <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-px overflow-hidden md:block">
          <div
            className="h-full w-1/4 bg-linear-to-r from-transparent via-[#C77B3D] to-transparent"
            style={{ animation: "shimmerSweep 7s linear infinite" }}
          />
        </div>
        {/* thanh gradient nhấn dưới cùng */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.75 bg-linear-to-r from-[#C77B3D] via-[#3A6B7A] to-[#C77B3D] opacity-60" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[1.35fr_1fr] md:items-stretch">
          {/* CỘT TRÁI: Nội dung giới thiệu */}
          <div className="relative order-2 px-6 py-20 md:order-1 md:py-32 md:pl-14 md:pr-12">
            {/* Chữ số nghệ thuật nền — có viền màu, rõ hơn */}
            <span
              className="pointer-events-none absolute -left-4 top-6 select-none font-['Fraunces'] text-[18vw] font-black leading-none text-transparent md:text-[9vw]"
              style={{ WebkitTextStroke: "1px rgba(199,123,61,0.25)" }}
            >
              01
            </span>

            {/* chấm trôi trang trí cạnh cột trái */}
            <span
              className="pointer-events-none absolute left-1 top-1/3 hidden h-1 w-1 rounded-full bg-[#C77B3D]/70 md:block"
              style={{ animation: "badgeFloat 4s ease-in-out infinite" }}
            />
            <span
              className="pointer-events-none absolute left-3 top-2/3 hidden h-1 w-1 rounded-full bg-[#3A6B7A]/70 md:block"
              style={{ animation: "badgeFloatAlt 5s ease-in-out infinite 1s" }}
            />

            {profile.jobTitle && (
              <div className="fade-up fade-up-1 relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-[#C77B3D]/30 bg-[#C77B3D]/10 px-3.5 py-1.5">
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent"
                  style={{ animation: "shimmerSweep 6s linear infinite" }}
                />
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C77B3D] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#C77B3D]" />
                </span>
                <p className="relative font-['Space_Grotesk'] text-xs uppercase tracking-[0.2em] text-[#E3A56D]">
                  {profile.jobTitle}
                </p>
              </div>
            )}

            <h1 className="fade-up fade-up-2 relative mt-6 font-['Fraunces'] text-[13vw] font-light leading-[0.92] tracking-tight text-[#EDEAE3] md:text-[5.2vw]">
              <span className="bg-linear-to-r from-[#EDEAE3] via-[#EDEAE3] to-[#C77B3D] bg-clip-text">
                {profile.fullName}
              </span>
            </h1>
            <span className="fade-up fade-up-2 mt-3 block h-1 w-20 rounded-full bg-linear-to-r from-[#C77B3D] via-[#E3A56D] to-transparent" />

            {profile.shortDescription && (
              <p className="fade-up fade-up-3 mt-8 max-w-[42ch] font-['Space_Grotesk'] text-lg leading-relaxed text-[#C4C0B8] md:text-xl">
                {profile.shortDescription}
              </p>
            )}

            {profile.aboutMe && (
              <p className="fade-up fade-up-3 mt-4 max-w-[50ch] border-l-2 border-[#3A6B7A]/30 pl-4 font-['Space_Grotesk'] text-sm leading-relaxed text-[#8F8B84]">
                {profile.aboutMe}
              </p>
            )}

            <div className="fade-up fade-up-4 mt-12 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center">
              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-md border border-[#EDEAE3]/25 bg-[#16171a] px-6 py-3.5 font-['Space_Grotesk'] text-sm font-medium text-[#EDEAE3] shadow-[0_0_0_0_rgba(199,123,61,0)] transition-all duration-300 hover:scale-[1.03] hover:border-[#C77B3D] hover:text-[#101114] hover:shadow-[0_10px_30px_-6px_rgba(199,123,61,0.55)]"
                >
                  <span
                    className="absolute inset-0 -translate-x-full bg-[#C77B3D] transition-transform duration-300 ease-out group-hover:translate-x-0"
                    aria-hidden
                  />
                  <span className="relative">Xem CV</span>
                  <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              )}

              {contactItems.length > 0 && (
                <div className="flex flex-wrap items-center gap-2.5">
                  {contactItems.map((item) => (
                    <span
                      key={item.key}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-2 font-['Space_Grotesk'] text-xs text-[#C4C0B8] transition-colors duration-300 hover:border-[#C77B3D]/30 hover:text-[#EDEAE3]"
                    >
                      <svg
                        className="h-3.5 w-3.5 text-[#C77B3D]"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        {CONTACT_ICON[item.key]}
                      </svg>
                      {item.value}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Chỉ báo cuộn xuống */}
            <div className="fade-up fade-up-5 mt-16 hidden items-center gap-3 md:flex">
              <div className="flex h-9 w-5 items-start justify-center rounded-full border border-[#C77B3D]/40 p-1">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#C77B3D]"
                  style={{ animation: "scrollDot 1.8s ease-in-out infinite" }}
                />
              </div>
              <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.25em] text-[#8F8B84]">
                Cuộn xuống
              </span>
              <span className="h-px w-16 bg-linear-to-r from-[#8F8B84]/40 to-transparent" />
            </div>
          </div>

          {/* CỘT PHẢI: Hình ảnh avatar/showcase */}
          <div className="order-1 md:order-2 md:relative">
            <div
              className="relative h-[55vh] w-full overflow-hidden bg-[#111114] md:absolute md:inset-0 md:h-full md:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]"
              style={{ animation: "frameGlowPulse 6s ease-in-out infinite" }}
            >
              {profile.avatarUrl && profile.avatarUrl.trim() !== "" ? (
                <Image
                  src={profile.avatarUrl}
                  alt={profile.fullName || "Profile Photo"}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#151619]">
                  <span className="font-['Fraunces'] text-8xl font-light text-white/5">
                    {profile.fullName ? profile.fullName.charAt(0) : "P"}
                  </span>
                </div>
              )}

              {/* Gradient che mờ các mép ảnh cho liền mạch với nền */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-[#101114] via-[#101114]/50 to-transparent md:hidden" />
              <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-linear-to-r from-[#101114]/95 via-[#101114]/25 to-transparent md:block" />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#101114]/70 via-transparent to-[#3A6B7A]/10" />
              <div className="pointer-events-none absolute inset-0 bg-[#C77B3D]/6 mix-blend-color" />

              {/* lưới kỹ thuật phủ nhẹ lên ảnh để đồng bộ phong cách */}
              <div
                className="pointer-events-none absolute inset-0 hidden opacity-[0.06] md:block"
                style={{
                  backgroundImage:
                    "linear-gradient(#EDEAE3 1px, transparent 1px), linear-gradient(90deg, #EDEAE3 1px, transparent 1px)",
                  backgroundSize: "36px 36px"
                }}
              />

              {/* đường chéo nhấn trang trí cắt qua khung ảnh */}
              <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block">
                <line
                  x1="30%"
                  y1="0"
                  x2="10%"
                  y2="100%"
                  stroke="#C77B3D"
                  strokeOpacity="0.18"
                  strokeWidth="1"
                />
              </svg>

              {/* Vòng tròn xoay trang trí quanh badge trạng thái (2 lớp) */}
              <div className="pointer-events-none absolute bottom-6 left-6 hidden md:block">
                <div className="relative h-16 w-16">
                  <svg
                    className="h-16 w-16"
                    viewBox="0 0 64 64"
                    style={{ animation: "spinSlow 12s linear infinite" }}
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="30"
                      fill="none"
                      stroke="#EDEAE3"
                      strokeOpacity="0.2"
                      strokeWidth="1"
                      strokeDasharray="4 6"
                    />
                  </svg>
                  <svg
                    className="absolute inset-0 h-16 w-16"
                    viewBox="0 0 64 64"
                    style={{ animation: "spinSlowReverse 18s linear infinite" }}
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="24"
                      fill="none"
                      stroke="#C77B3D"
                      strokeOpacity="0.35"
                      strokeWidth="1"
                      strokeDasharray="1 5"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center font-['Space_Grotesk'] text-[8px] uppercase tracking-widest text-[#EDEAE3]/80">
                    Open
                  </span>
                </div>
              </div>

              {/* Thẻ nổi — vai trò, nền đặc hơn để nổi bật trên ảnh */}
              {profile.jobTitle && (
                <div
                  className="pointer-events-none absolute right-6 top-6 hidden items-center gap-2 rounded-full border border-[#C77B3D]/30 bg-[#101114]/90 px-3.5 py-2 shadow-lg backdrop-blur-md md:flex"
                  style={{ animation: "badgeFloat 5s ease-in-out infinite" }}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3A6B7A] opacity-60" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-[#3A6B7A]" />
                  </span>
                  <span className="font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.18em] text-[#EDEAE3]">
                    {profile.jobTitle}
                  </span>
                </div>
              )}

              {/* Thẻ nổi — địa điểm, trôi ngược pha */}
              {profile.location && (
                <div
                  className="pointer-events-none absolute right-6 top-18 hidden items-center gap-2 rounded-full border border-[#3A6B7A]/30 bg-[#101114]/90 px-3.5 py-2 shadow-lg backdrop-blur-md md:flex"
                  style={{
                    animation: "badgeFloatAlt 6s ease-in-out infinite 0.5s"
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C77B3D]" />
                  <span className="font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.18em] text-[#EDEAE3]">
                    {profile.location}
                  </span>
                </div>
              )}

              {/* nhãn tên nổi phía dưới ảnh — chữ ký thị giác */}
              <div className="pointer-events-none absolute bottom-6 right-6 hidden text-right md:block">
                <p className="font-['Fraunces'] text-lg italic text-[#EDEAE3]/90">
                  {profile.fullName}
                </p>
                <p className="font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.25em] text-[#8F8B84]">
                  Portfolio 2026
                </p>
              </div>

              {/* góc blueprint trên khung ảnh */}
              <div className="pointer-events-none absolute right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 border-r-2 border-t-2 border-[#EDEAE3]/15 md:block" />
            </div>

            {/* quầng glow phía sau khung ảnh — đậm hơn */}
            <div className="pointer-events-none absolute -right-10 bottom-0 hidden h-72 w-40 rounded-full bg-[#C77B3D]/20 blur-[100px] md:block" />
            <div className="pointer-events-none absolute -left-6 top-1/3 hidden h-40 w-40 rounded-full bg-[#3A6B7A]/20 blur-[90px] md:block" />
          </div>
        </div>
      </section>
    </div>
  );
}
