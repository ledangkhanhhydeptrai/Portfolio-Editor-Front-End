"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { getLinkRequest, getLinkUserRequest } from "../socialLinkSlice";

import SocialLinkBackground from "../components/SocialLinkBackground";
import SocialLinkHeader from "../components/SocialLinkHeader";
import SocialLinkGrid from "../components/SocialLinkGrid";
import SocialLinkEmpty from "../components/SocialLinkEmpty";

/* Khung hai bên: trái = giới thiệu (dính khi cuộn), phải = nội dung */
function Split({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#1B1E29] px-5 py-16 text-[#F0EFEA] sm:px-8 sm:py-20 lg:px-10 lg:py-28">
      <SocialLinkBackground />

      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[22rem_1fr] lg:gap-0">
        <div className="lg:sticky lg:top-28 lg:self-start lg:pr-14">{left}</div>
        <div className="min-w-0 lg:border-l lg:border-white/10 lg:pl-14">{right}</div>
      </div>
    </section>
  );
}

function SocialLinkSkeleton() {
  return (
    <Split
      left={
        <div role="status" aria-label="Đang tải liên kết" className="space-y-4">
          <div className="h-12 w-64 animate-pulse rounded-xl bg-white/10" />
          <div className="h-4 w-72 max-w-full animate-pulse rounded-full bg-white/5" />
          <div className="h-4 w-48 animate-pulse rounded-full bg-white/5" />
        </div>
      }
      right={
        <div className="flex flex-col gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-24 animate-pulse rounded-2xl border border-white/10 bg-white/4"
              style={{ animationDelay: `${i * 90}ms` }}
            />
          ))}
        </div>
      }
    />
  );
}

function SocialLinkError({ onRetry }: { onRetry: () => void }) {
  return (
    <Split
      left={
        <h1 className="text-4xl font-semibold tracking-tight text-[#F4F3EF] sm:text-5xl">
          Kết nối với tôi
        </h1>
      }
      right={
        <div role="alert" className="rounded-2xl border border-white/10 bg-white/4 p-8">
          <h2 className="text-xl font-semibold">Không tải được danh sách liên kết</h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
            Kết nối tới máy chủ bị gián đoạn. Kiểm tra mạng rồi thử lại.
          </p>
          <button
            type="button"
            onClick={onRetry}
            className="mt-6 rounded-full bg-[#F0EFEA] px-6 py-2.5 text-sm font-medium text-[#1B1E29] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
          >
            Tải lại
          </button>
        </div>
      }
    />
  );
}

export default function SocialLinkContainer() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.socialLink);

  const fetchAll = React.useCallback(() => {
    dispatch(getLinkUserRequest());
    dispatch(getLinkRequest());
  }, [dispatch]);

  React.useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const socialLinks = React.useMemo(
    () => [...(data ?? [])].sort((a, b) => a.displayOrder - b.displayOrder),
    [data],
  );

  if (loading) return <SocialLinkSkeleton />;
  if (error) return <SocialLinkError onRetry={fetchAll} />;

  return (
    <Split
      left={<SocialLinkHeader total={socialLinks.length} previews={socialLinks} />}
      right={
        socialLinks.length > 0 ? <SocialLinkGrid socialLinks={socialLinks} /> : <SocialLinkEmpty />
      }
    />
  );
}
