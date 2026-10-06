"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useParams, useRouter } from "next/navigation";
import { getCurriculumIdRequest, getCurriculumUserIdRequest } from "../CurriculumVitaeSlice";
import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c8cff]";

/** Hai trang giấy xếp chồng – cùng họa tiết với trang danh sách CV */
function PaperThumb() {
  return (
    <div aria-hidden="true" className="relative h-40 w-30">
      <div className="absolute inset-0 rotate-6 rounded-sm bg-[#8a8a94] opacity-50" />

      <div className="absolute inset-0 -rotate-3 rounded-sm bg-[#e9e6df] p-3.5 shadow-[0_24px_40px_-14px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-1.5">
          <span className="h-4 w-4 rounded-full bg-[#101114]/80" />
          <span className="h-1.5 w-12 rounded-full bg-[#101114]/80" />
        </div>

        <div className="mt-3.5 space-y-1.5">
          <span className="block h-1 w-full rounded-full bg-[#101114]/25" />
          <span className="block h-1 w-10/12 rounded-full bg-[#101114]/25" />
          <span className="block h-1 w-11/12 rounded-full bg-[#101114]/25" />
        </div>

        <div className="mt-4 space-y-1.5">
          <span className="block h-1.5 w-8 rounded-full bg-[#7c8cff]" />
          <span className="block h-1 w-full rounded-full bg-[#101114]/25" />
          <span className="block h-1 w-9/12 rounded-full bg-[#101114]/25" />
        </div>

        <span className="absolute top-0 right-0 h-4 w-4 bg-linear-to-bl from-[#101114] from-50% to-[#cfcbc2] to-50%" />
      </div>
    </div>
  );
}

const CurriculumContainerId: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const id = params.id;

  const { curriculum, loading, error } = useAppSelector((state) => state.curriculumVitae);

  React.useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    dispatch(getCurriculumUserIdRequest(id));
    dispatch(getCurriculumIdRequest(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!curriculum) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#101114] px-6 text-white">
        <div className="text-center">
          <h1 className="text-xl font-semibold">Không tìm thấy CV</h1>

          <p className="mt-2 text-sm text-neutral-500">CV này không tồn tại hoặc đã bị xóa.</p>

          <button
            type="button"
            onClick={() => router.back()}
            className={`mt-6 cursor-pointer rounded-full border border-white/15 px-6 py-2.5 text-sm text-neutral-200 transition hover:border-white/40 hover:text-white ${focusRing}`}
          >
            Quay lại
          </button>
        </div>
      </main>
    );
  }

  const title = curriculum.title || "Hồ sơ cá nhân";

  return (
    // pt-20 chừa chỗ cho navbar cố định phía trên. Nếu navbar không fixed thì bỏ pt-20.
    <main className="flex min-h-dvh flex-col bg-[#101114] bg-[radial-gradient(ellipse_55%_45%_at_15%_0%,rgba(124,140,255,0.14),transparent)] pt-20 text-white lg:h-dvh">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-6 md:px-8 lg:min-h-0 lg:flex-1 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12 lg:py-8">
        {/* ============ TRÁI: thông tin ============ */}
        <aside className="flex flex-col lg:min-h-0 lg:overflow-y-auto">
          <button
            type="button"
            onClick={() => router.back()}
            className={`inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border border-white/15 py-2 pr-4 pl-3 text-sm text-neutral-300 transition hover:border-white/40 hover:text-white ${focusRing}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
            Quay lại
          </button>

          {/* Trang giấy trang trí, chỉ hiện trên màn hình lớn */}
          <div className="mt-8 hidden items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/2 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(124,140,255,0.22),transparent)] py-10 lg:flex">
            <PaperThumb />
          </div>

          <h1 className="mt-8 text-2xl font-semibold tracking-tight text-balance lg:text-3xl">
            {title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-neutral-400">
              PDF
            </span>

            {curriculum.isPrimary && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#7c8cff]/30 bg-[#7c8cff]/10 px-2.5 py-0.5 text-xs font-medium text-[#aab3ff]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7c8cff]" />
                CV chính
              </span>
            )}
          </div>

          <p className="mt-4 text-sm leading-6 text-neutral-400">
            Xem trực tiếp tài liệu ở bên cạnh, hoặc tải về để lưu lại.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col">
            <a
              href={curriculum.fileUrl}
              download
              className={`inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 text-base font-semibold whitespace-nowrap text-[#101114] transition hover:bg-neutral-200 sm:flex-1 lg:flex-none ${focusRing}`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14"
                />
              </svg>
              Tải xuống
            </a>

            <a
              href={curriculum.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-full border border-white/15 px-7 text-base font-semibold whitespace-nowrap text-neutral-200 transition hover:border-white/40 hover:text-white sm:flex-1 lg:flex-none ${focusRing}`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5H19.5V10.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5L19.5 4.5" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5V18A1.5 1.5 0 0118 19.5H6A1.5 1.5 0 014.5 18V6A1.5 1.5 0 016 4.5H10.5"
                />
              </svg>
              Mở tab mới
            </a>
          </div>
        </aside>

        {/* ============ PHẢI: trình xem PDF ============ */}
        <section className="h-[70vh] min-h-96 lg:h-full lg:min-h-0">
          <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#25262b] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
            {/* Hiện phía sau iframe trong lúc PDF đang tải */}
            <p className="absolute inset-0 flex items-center justify-center text-sm text-neutral-500">
              Đang tải tài liệu…
            </p>

            <iframe
              src={`${curriculum.fileUrl}#view=FitH&navpanes=0&toolbar=1`}
              title={title}
              className="relative h-full w-full border-0"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default CurriculumContainerId;
