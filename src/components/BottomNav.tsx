interface BottomNavProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function BottomNav({
  current,
  total,
  onPrev,
  onNext,
}: BottomNavProps) {
  const pct = ((current + 1) / total) * 100;

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-[100] bg-glass backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)] border-t border-edge flex items-center justify-between px-5 pt-2.5 pb-[max(10px,env(safe-area-inset-bottom))] min-[600px]:justify-center min-[600px]:gap-5">
      <button
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-edge bg-card text-[0.82rem] font-semibold cursor-pointer transition-all duration-200 active:scale-[0.96] disabled:opacity-30 disabled:pointer-events-none"
        disabled={current === 0}
        onClick={onPrev}
      >
        <i className="fas fa-chevron-left" /> Ant
      </button>
      <div className="flex flex-col items-center gap-1">
        <span className="text-[0.7rem] text-muted">
          {current + 1} / {total}
        </span>
        <div className="w-[60px] h-[3px] bg-edge rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-[width] duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
      <button
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-accent bg-accent text-[0.82rem] font-semibold cursor-pointer transition-all duration-200 active:scale-[0.96] disabled:opacity-30 disabled:pointer-events-none"
        disabled={current === total - 1}
        onClick={onNext}
      >
        Sig <i className="fas fa-chevron-right" />
      </button>
    </footer>
  );
}
