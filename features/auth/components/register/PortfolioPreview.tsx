"use client";

import React from "react";

import { PORTFOLIO_TOPICS } from "./constant";

// Hồ sơ mẫu cố định, không phụ thuộc dữ liệu người dùng nhập ở form.
const SAMPLE_NAME = "Nguyễn Văn A";
const SAMPLE_SLUG = "Nguyễn Văn A";

/**
 * Bản xem trước portfolio mẫu gồm 3 mảng: lập trình, lái xe, editor.
 */
const PortfolioPreview: React.FC = () => {
  const [activeId, setActiveId] = React.useState<string>(
    PORTFOLIO_TOPICS[0].id
  );

  const topic =
    PORTFOLIO_TOPICS.find((t) => t.id === activeId) ?? PORTFOLIO_TOPICS[0];

  const initial = SAMPLE_NAME.charAt(0).toUpperCase();

  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#121F22] shadow-2xl shadow-black/40">
      {/* Thanh địa chỉ */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-black/20 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>

        <div className="flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-white/50">
          portfolio.app/
          <span className="font-medium text-[#F2B544]">{SAMPLE_SLUG}</span>
        </div>
      </div>

      <div className="space-y-4 p-5">
        {/* Hồ sơ */}
        <div className="flex items-center gap-4">
          <div
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2B544] text-base font-bold text-[#0D1618]"
          >
            {initial}
          </div>

          <div className="min-w-0">
            <p className="truncate text-base font-semibold text-[#E9EFEC]">
              {SAMPLE_NAME}
            </p>
            <p className="text-sm text-white/45">
              Lập trình, lái xe và editor
            </p>
          </div>
        </div>

        {/* Tab các mảng */}
        <div
          role="tablist"
          aria-label="Các mảng trong portfolio"
          className="flex gap-1 border-b border-white/10"
        >
          {PORTFOLIO_TOPICS.map((t) => {
            const selected = t.id === topic.id;

            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(t.id)}
                className={`-mb-px border-b-2 px-3 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-[#F2B544] ${
                  selected
                    ? "border-[#F2B544] text-[#E9EFEC]"
                    : "border-transparent text-white/45 hover:text-white/75"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Nội dung của mảng đang chọn */}
        <div role="tabpanel" className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {topic.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/65"
              >
                {skill}
              </span>
            ))}
          </div>

          <ul className="space-y-2">
            {topic.items.map((item) => (
              <li
                key={item.title}
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/3 p-2.5"
              >
                <div
                  aria-hidden="true"
                  className="h-9 w-9 shrink-0 rounded-lg bg-linear-to-br from-white/12 to-white/4"
                />

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-[#E9EFEC]">
                    {item.title}
                  </p>
                  <p className="truncate text-xs text-white/40">{item.meta}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPreview;