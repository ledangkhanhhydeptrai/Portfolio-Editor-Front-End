export default function Loading() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-6 overflow-hidden bg-slate-950">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="pointer-events-none absolute h-72 w-72 translate-x-24 translate-y-24 rounded-full bg-fuchsia-600/20 blur-3xl" />

      {/* Spinner */}
      <div className="relative flex h-20 w-20 items-center justify-center">
        <svg
          className="h-16 w-16 animate-spin drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]"
          viewBox="0 0 50 50"
          fill="none"
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="currentColor"
            strokeWidth="4"
            className="text-slate-700"
          />
          <path
            d="M25 5 a20 20 0 0 1 20 20"
            stroke="url(#spinner-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="spinner-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#e879f9" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Text */}
      <div className="relative flex flex-col items-center gap-1.5">
        <p className="text-sm font-medium tracking-wide text-slate-200">
          Đang tải
          <span className="inline-flex w-6 justify-start">
            <span className="animate-[pulse_1.4s_ease-in-out_infinite]">.</span>
            <span className="animate-[pulse_1.4s_ease-in-out_0.2s_infinite]">
              .
            </span>
            <span className="animate-[pulse_1.4s_ease-in-out_0.4s_infinite]">
              .
            </span>
          </span>
        </p>
        <p className="text-xs text-slate-500">Vui lòng chờ trong giây lát</p>
      </div>
    </div>
  );
}
