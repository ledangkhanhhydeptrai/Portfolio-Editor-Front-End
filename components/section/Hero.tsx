"use client";

import React from "react";
import Image from "next/image";
import { getProfileRequest } from "../../features/profile/profileSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { ProfileProps } from "@/features/profile/profileTypes";
import Loading from "../ui/Loading";
import ErrorMessage from "../ui/ErrorMessage";

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

  const contactItems = React.useMemo<string[]>(() => {
    if (!profile) return [];
    return [profile.email, profile.phone, profile.location].filter(Boolean);
  }, [profile]);

  // Vài chấm nền ngẫu nhiên nhưng cố định (tránh mismatch hydration)
  const particles = React.useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        top: (i * 53) % 100,
        size: 2 + (i % 3),
        delay: (i % 6) * 0.7,
        duration: 6 + (i % 5) * 1.4
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
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.15; }
          50% { transform: translateY(-18px) translateX(6px); opacity: 0.55; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(14px); opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.10; }
          50% { opacity: 0.22; }
        }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.18s; }
        .fade-up-3 { animation-delay: 0.32s; }
        .fade-up-4 { animation-delay: 0.46s; }
        .fade-up-5 { animation-delay: 0.6s; }
      `}</style>

      <section className="relative overflow-hidden text-[#EDEAE3]">
        {/* Lưới nền kỹ thuật */}
        <div
          className="pointer-events-none absolute inset-0 opacity-3"
          style={{
            backgroundImage:
              "linear-gradient(#EDEAE3 1px, transparent 1px), linear-gradient(90deg, #EDEAE3 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />

        {/* Particles trôi nổi trang trí */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute rounded-full bg-[#C77B3D]"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
                animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite`
              }}
            />
          ))}
        </div>

        {/* Ambient Glow đôi màu tạo chiều sâu cho typography */}
        <div
          className="pointer-events-none absolute -left-20 top-1/4 h-125 w-125 rounded-full bg-[#C77B3D]/10 blur-[130px]"
          style={{ animation: "pulseGlow 8s ease-in-out infinite" }}
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#3A6B7A]/10 blur-[120px]"
          style={{ animation: "pulseGlow 10s ease-in-out infinite 1.5s" }}
        />

        {/* Viền góc trang trí kiểu blueprint */}
        <div className="pointer-events-none absolute left-6 top-6 hidden h-10 w-10 border-l border-t border-[#EDEAE3]/15 md:block" />
        <div className="pointer-events-none absolute bottom-6 right-6 hidden h-10 w-10 border-b border-r border-[#EDEAE3]/15 md:block" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[1.35fr_1fr] md:items-stretch">
          {/* CỘT TRÁI: Nội dung giới thiệu */}
          <div className="relative order-2 px-6 py-20 md:order-1 md:py-32 md:pl-10 md:pr-12">
            {/* Chữ số nghệ thuật nền mờ */}
            <span className="pointer-events-none absolute -left-6 top-8 select-none font-['Fraunces'] text-[18vw] font-black leading-none text-white/1.5 md:text-[9vw]">
              01
            </span>

            {profile.jobTitle && (
              <div className="fade-up fade-up-1 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/3 px-3.5 py-1 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C77B3D] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#C77B3D]" />
                </span>
                <p className="font-['Space_Grotesk'] text-xs uppercase tracking-[0.2em] text-[#C77B3D]">
                  {profile.jobTitle}
                </p>
              </div>
            )}

            <h1 className="fade-up fade-up-2 mt-6 font-['Fraunces'] text-[13vw] font-light leading-[0.92] tracking-tight text-[#EDEAE3] md:text-[5.2vw]">
              {profile.fullName}
            </h1>

            {profile.shortDescription && (
              <p className="fade-up fade-up-3 mt-8 max-w-[42ch] font-['Space_Grotesk'] text-lg leading-relaxed text-[#C4C0B8] md:text-xl">
                {profile.shortDescription}
              </p>
            )}

            {profile.aboutMe && (
              <p className="fade-up fade-up-3 mt-4 max-w-[50ch] font-['Space_Grotesk'] text-sm leading-relaxed text-[#8F8B84]">
                {profile.aboutMe}
              </p>
            )}

            <div className="fade-up fade-up-4 mt-12 flex flex-col gap-8 sm:flex-row sm:items-center">
              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-md border border-[#EDEAE3]/20 bg-[#16171a] px-6 py-3 font-['Space_Grotesk'] text-sm font-medium text-[#EDEAE3] transition-all duration-300 hover:border-[#C77B3D] hover:text-[#101114]"
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
                <div className="flex flex-wrap items-center gap-y-2 font-['Space_Grotesk'] text-sm text-[#8F8B84]">
                  {contactItems.map((item, index) => (
                    <span key={item} className="flex items-center">
                      {index > 0 && (
                        <span className="mx-3.5 h-3 w-px bg-[#3A3833]" />
                      )}
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Chỉ báo cuộn xuống */}
            <div className="fade-up fade-up-5 mt-16 hidden items-center gap-3 md:flex">
              <div className="flex h-9 w-5 items-start justify-center rounded-full border border-[#EDEAE3]/20 p-1">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#C77B3D]"
                  style={{ animation: "scrollDot 1.8s ease-in-out infinite" }}
                />
              </div>
              <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.25em] text-[#8F8B84]">
                Cuộn xuống
              </span>
            </div>
          </div>

          {/* CỘT PHẢI: Hình ảnh avatar/showcase */}
          <div className="order-1 md:order-2 md:relative">
            <div className="relative h-[55vh] w-full overflow-hidden bg-[#111114] md:absolute md:inset-0 md:h-full md:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
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
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#101114] via-[#101114]/40 to-transparent md:hidden" />
              <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-linear-to-r from-[#101114]/90 via-[#101114]/20 to-transparent md:block" />
              <div className="pointer-events-none absolute inset-0 bg-[#C77B3D]/3 mix-blend-color" />

              {/* Vòng tròn xoay trang trí quanh badge trạng thái */}
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
                      strokeOpacity="0.15"
                      strokeWidth="1"
                      strokeDasharray="4 6"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center font-['Space_Grotesk'] text-[8px] uppercase tracking-widest text-[#EDEAE3]/70">
                    Open
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
