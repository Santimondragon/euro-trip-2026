import DayNav from './DayNav.tsx';

interface AppHeaderProps {
  currentDay: number;
  totalDays: number;
  onDaySelect: (index: number) => void;
  dayLabels: string[];
}

export default function AppHeader({
  currentDay,
  totalDays,
  onDaySelect,
  dayLabels,
}: AppHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-linear-to-b from-bg from-60% to-transparent px-4 pt-4 pb-7 pointer-events-none min-[600px]:flex min-[600px]:flex-col min-[600px]:items-center">
      <div className="pointer-events-auto min-[600px]:max-w-[500px] min-[600px]:w-full">
        <div className="flex items-center justify-between mb-2.5">
          <h1 className="text-[1.3rem] font-bold bg-linear-to-br from-accent to-accent2 bg-clip-text [-webkit-text-fill-color:transparent] text-transparent">
            <i className="fas fa-earth-americas" /> Europa 2026
          </h1>
          <span className="text-[0.8rem] text-muted bg-card px-3 py-1 rounded-full border border-edge">
            Día {currentDay + 1} / {totalDays}
          </span>
        </div>
        <DayNav
          labels={dayLabels}
          activeIndex={currentDay}
          onSelect={onDaySelect}
        />
      </div>
    </header>
  );
}
