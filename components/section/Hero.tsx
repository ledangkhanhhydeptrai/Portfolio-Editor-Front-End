"use client";

import { useEffect } from "react";
import Image from "next/image";

import { getProfileRequest } from "../../features/profile/profileSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

export default function Hero() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfileRequest());
  }, [dispatch]);

  if (loading) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-[#101114]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#8F8B84] border-t-[#C77B3D]" />
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center gap-2 bg-[#101114] px-6 text-center">
        <p className="font-['Space_Grotesk'] text-sm text-[#8F8B84]">
          Không tải được thông tin
        </p>
        <p className="font-['Space_Grotesk'] text-[#EDEAE3]">{error}</p>
      </section>
    );
  }

  if (!data) return null;

  const contactItems = [data.email, data.phone, data.location].filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-[#101114] text-[#EDEAE3]">
      {/* lưới nền mảnh, chỉ trang trí nhẹ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#EDEAE3 1px, transparent 1px), linear-gradient(90deg, #EDEAE3 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-8 md:py-0 md:pl-6">
        {/* Cột chữ */}
        <div className="order-2 flex flex-col justify-center md:order-1 md:min-h-screen md:py-24">
          <p className="font-['Space_Grotesk'] text-sm tracking-tight text-[#C77B3D]">
            {data.jobTitle}
          </p>

          <h1 className="mt-3 font-['Fraunces'] text-[15vw] font-light leading-[0.92] tracking-tight md:text-[5.2vw]">
            {data.fullName}
          </h1>

          <p className="mt-8 max-w-[42ch] font-['Space_Grotesk'] text-lg leading-relaxed text-[#C4C0B8]">
            {data.shortDescription}
          </p>

          {data.aboutMe && (
            <p className="mt-4 max-w-[48ch] font-['Space_Grotesk'] text-sm leading-relaxed text-[#8F8B84]">
              {data.aboutMe}
            </p>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-6">
            {data.cvUrl && (
              <a
                href={data.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#EDEAE3] px-5 py-2.5 font-['Space_Grotesk'] text-sm text-[#EDEAE3] transition-colors hover:border-[#C77B3D] hover:text-[#C77B3D]"
              >
                Tải CV
              </a>
            )}

            <div className="flex flex-wrap items-center font-['Space_Grotesk'] text-sm text-[#8F8B84]">
              {contactItems.map((item, i) => (
                <span key={item} className="flex items-center">
                  {i > 0 && <span className="mx-3 h-3 w-px bg-[#3A3833]" />}
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cột ảnh — tràn cạnh phải */}
        <div className="order-1 md:order-2 md:sticky md:top-0 md:h-screen">
          <div className="relative h-[50vh] w-full overflow-hidden md:h-screen md:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
            <Image
              src={data.avatarUrl}
              alt={data.fullName}
              fill
              priority
              className="object-cover grayscale-15"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#101114]/40 via-transparent to-transparent md:bg-linear-to-r md:from-[#101114]/50 md:via-transparent md:to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
