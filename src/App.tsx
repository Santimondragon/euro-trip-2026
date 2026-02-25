import { useState, useCallback, useEffect } from 'react';
import { useTripData } from './hooks/useTripData.ts';
import { useSwipe } from './hooks/useSwipe.ts';
import AppHeader from './components/AppHeader.tsx';
import DaySlide from './components/DaySlide.tsx';
import BottomNav from './components/BottomNav.tsx';

export default function App() {
  const { days, isLoading, error } = useTripData();
  const [currentSlide, setCurrentSlide] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (index >= 0 && index < days.length) {
        setCurrentSlide(index);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [days.length],
  );

  const next = useCallback(
    () => goTo(currentSlide + 1),
    [goTo, currentSlide],
  );
  const prev = useCallback(
    () => goTo(currentSlide - 1),
    [goTo, currentSlide],
  );

  useSwipe(next, prev);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prev();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-dvh text-muted">
        Cargando itinerario...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-dvh text-accent2">
        Error: {error}
      </div>
    );
  }

  if (days.length === 0) return null;

  return (
    <>
      <AppHeader
        currentDay={currentSlide}
        totalDays={days.length}
        onDaySelect={goTo}
        dayLabels={days.map((d) => d.dia)}
      />
      <main className="pt-27.5 pb-22.5 max-w-125 mx-auto">
        <DaySlide
          key={currentSlide}
          day={days[currentSlide]}
          dayNumber={currentSlide + 1}
        />
      </main>
      <BottomNav
        current={currentSlide}
        total={days.length}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}
