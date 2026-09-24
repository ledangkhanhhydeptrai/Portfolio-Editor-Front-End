"use client";

export default function ErrorMessage() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-6 overflow-hidden bg-slate-950">
      {/* =================================================
          AMBIENT GLOW
      ================================================= */}

      <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-rose-600/20 blur-3xl" />

      <div className="pointer-events-none absolute h-72 w-72 translate-x-24 translate-y-24 rounded-full bg-orange-500/10 blur-3xl" />

      {/* =================================================
          ERROR ICON
      ================================================= */}

      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-rose-500/10 ring-1 ring-rose-500/30">
        <svg
          className="h-9 w-9 text-rose-400 drop-shadow-[0_0_10px_rgba(251,113,133,0.4)]"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.8"
          />

          <path
            d="M12 8v5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          <circle cx="12" cy="16" r="1" fill="currentColor" />
        </svg>
      </div>

      {/* =================================================
          ERROR MESSAGE
      ================================================= */}

      <div className="relative flex flex-col items-center gap-1.5 text-center">
        <p className="text-base font-semibold tracking-wide text-slate-100">
          Đã có lỗi xảy ra
        </p>

        <p className="max-w-xs text-sm leading-6 text-slate-500">
          Không thể tải dữ liệu. Vui lòng thử lại sau.
        </p>
      </div>

      {/* =================================================
          RETRY BUTTON
      ================================================= */}

      <button
        type="button"
        onClick={handleRetry}
        className="relative inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-2.5 text-sm font-medium text-slate-200 ring-1 ring-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-700 hover:ring-slate-600 active:translate-y-0"
      >
        {/* Refresh icon */}

        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 11a8.1 8.1 0 0 0-15.5-2M4 5v4h4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M4 13a8.1 8.1 0 0 0 15.5 2M20 19v-4h-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>Thử lại</span>
      </button>
    </div>
  );
}
