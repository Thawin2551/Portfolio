import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete, duration = 1400, message = "Hi, I’m Thawin" }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const total = prefersReduced ? 500 : duration; // เคารพ reduced motion
    const start = performance.now();
    let rafId;
    let doneTimer;

    const tick = () => {
      const t = performance.now() - start;
      const p = Math.min(1, t / total);

      // type ค่อย ๆ โผล่ (เริ่มเห็นตั้งแต่ 30% ของระยะเวลา)
      const chars = Math.round(message.length * (0.3 + 0.7 * p));
      setText(message.slice(0, chars));

      // progress bar
      setProgress(Math.round(p * 100));

      if (p < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        doneTimer = setTimeout(() => onComplete?.(), 240); // หน่วงนิดให้เฟดดูนุ่ม
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(doneTimer);
    };
  }, [onComplete, duration, message]);

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black text-white">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.18),rgba(0,0,0,0))]" />
        <div className="absolute -bottom-28 -right-20 w-[28rem] h-[28rem] rounded-full blur-3xl bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.16),rgba(0,0,0,0))]" />
      </div>

      {/* glass card */}
      <div className="relative w-[min(92vw,640px)] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {text}
            <span className="opacity-70 animate-pulse">|</span>
          </h1>
          <span className="w-3.5 h-3.5 border border-white/30 border-t-white/80 rounded-full animate-spin" />
        </div>

        {/* progress */}
        <div className="mt-6">
          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 transition-[width] duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-center text-xs text-white/65">
            {progress}% • loading portfolio
          </div>
        </div>
      </div>
    </div>
  );
};
