"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";

import { getProfileRequest } from "../../features/profile/profileSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { ProfileProps } from "@/features/profile/profileTypes";

export default function Hero() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfileRequest());
  }, [dispatch]);

  // Trích xuất profile an toàn, tuân thủ đúng ProfileProps interface
  const profile = useMemo<ProfileProps | null>(() => {
    if (!data) return null;
    if (Array.isArray(data)) {
      if (data.length === 0) return null;
      return (data as ProfileProps[]).at(0) ?? null;
    }
    return data as ProfileProps;
  }, [data]);

  const contactItems = useMemo<string[]>(() => {
    if (!profile) return [];
    return [profile.email, profile.phone, profile.location].filter(Boolean);
  }, [profile]);

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#101114]">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#3A3833] border-t-[#C77B3D]" />
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center gap-2 bg-[#101114] px-6 text-center">
        <p className="font-['Space_Grotesk'] text-sm text-[#8F8B84]">
          Không tải được thông tin
        </p>
        <p className="font-['Space_Grotesk'] text-[#EDEAE3]">{error}</p>
      </section>
    );
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
      <Header />

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

        {/* Ambient Glow tạo chiều sâu cho typography */}
        <div className="pointer-events-none absolute -left-20 top-1/4 h-125 w-125 rounded-full bg-[#C77B3D]/10 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[1.35fr_1fr] md:items-stretch">
          {/* CỘT TRÁI: Nội dung giới thiệu */}
          <div className="relative order-2 px-6 py-20 md:order-1 md:py-32 md:pl-10 md:pr-12">
            {/* Chữ số nghệ thuật nền mờ */}
            <span className="pointer-events-none absolute -left-6 top-8 select-none font-['Fraunces'] text-[18vw] font-black leading-none text-white/1.5 md:text-[9vw]">
              01
            </span>

            {profile.jobTitle && (
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/3 px-3.5 py-1 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C77B3D]" />
                <p className="font-['Space_Grotesk'] text-xs uppercase tracking-[0.2em] text-[#C77B3D]">
                  {profile.jobTitle}
                </p>
              </div>
            )}

            <h1 className="mt-6 font-['Fraunces'] text-[13vw] font-light leading-[0.92] tracking-tight text-[#EDEAE3] md:text-[5.2vw]">
              {profile.fullName}
            </h1>

            {profile.shortDescription && (
              <p className="mt-8 max-w-[42ch] font-['Space_Grotesk'] text-lg leading-relaxed text-[#C4C0B8] md:text-xl">
                {profile.shortDescription}
              </p>
            )}

            {profile.aboutMe && (
              <p className="mt-4 max-w-[50ch] font-['Space_Grotesk'] text-sm leading-relaxed text-[#8F8B84]">
                {profile.aboutMe}
              </p>
            )}

            <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-center">
              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-md border border-[#EDEAE3]/20 bg-[#16171a] px-6 py-3 font-['Space_Grotesk'] text-sm font-medium text-[#EDEAE3] transition-all duration-300 hover:border-[#C77B3D] hover:bg-[#C77B3D] hover:text-[#101114]"
                >
                  <span>Xem CV</span>
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
