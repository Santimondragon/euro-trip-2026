import { useEffect, useRef } from 'react';

interface DayNavProps {
  labels: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function DayNav({ labels, activeIndex, onSelect }: DayNavProps) {
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [activeIndex]);

  return (
    <nav className="flex gap-1.5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-1">
      {labels.map((label, i) => (
        <button
          key={i}
          ref={i === activeIndex ? activeRef : null}
          className={`shrink-0 snap-center px-3.5 py-1.5 rounded-full border text-[0.72rem] font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap ${
            i === activeIndex
              ? 'bg-accent text-white border-accent shadow-[0_0_20px_rgba(108,99,255,0.3)]'
              : 'bg-card text-muted border-edge hover:border-accent hover:text-light'
          }`}
          onClick={() => onSelect(i)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
