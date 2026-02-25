import { useState, useRef, type ReactNode } from 'react';

const ICON_CLASSES = {
  transport: 'bg-accent/15 text-accent',
  meals: 'bg-accent2/15 text-accent2',
  activities: 'bg-accent3/15 text-accent3',
} as const;

interface SectionCardProps {
  title: string;
  subtitle: string;
  iconClass: string;
  iconType: keyof typeof ICON_CLASSES;
  defaultExpanded?: boolean;
  children: ReactNode;
}

export default function SectionCard({
  title,
  subtitle,
  iconClass,
  iconType,
  defaultExpanded = false,
  children,
}: SectionCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(defaultExpanded ? '2000px' : '0');

  const toggle = () => {
    if (expanded) {
      setMaxHeight('0');
    } else {
      setMaxHeight(`${bodyRef.current?.scrollHeight ?? 2000}px`);
    }
    setExpanded((prev) => !prev);
  };

  return (
    <div
      className={`bg-card rounded-card border mb-3 overflow-hidden transition-colors duration-300 ${expanded ? 'border-accent' : 'border-edge'}`}
    >
      <div
        className="flex items-center justify-between px-4.5 py-4 cursor-pointer select-none [-webkit-tap-highlight-color:transparent] active:bg-card-alt"
        onClick={toggle}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-inner flex items-center justify-center text-[0.9rem] shrink-0 ${ICON_CLASSES[iconType]}`}
          >
            <i className={`fas ${iconClass}`} />
          </div>
          <div>
            <div className="text-[0.9rem] font-semibold">{title}</div>
            <div className="text-[0.72rem] text-muted mt-0.5">{subtitle}</div>
          </div>
        </div>
        <i
          className={`fas fa-chevron-down text-[0.8rem] text-muted transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
        />
      </div>
      <div
        ref={bodyRef}
        className="overflow-hidden transition-[max-height] duration-400 ease-out"
        style={{ maxHeight }}
      >
        <div className="px-4.5 pb-4.5">{children}</div>
      </div>
    </div>
  );
}
