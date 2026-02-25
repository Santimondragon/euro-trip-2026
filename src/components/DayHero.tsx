import type { TripDay } from '../types/trip.ts';

interface DayHeroProps {
  day: TripDay;
  dayNumber: number;
}

export default function DayHero({ day, dayNumber }: DayHeroProps) {
  return (
    <div className="relative overflow-hidden rounded-card border border-edge bg-card px-5 py-6 mb-4 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.75 before:bg-linear-to-r before:from-accent before:to-accent2">
      <div className="text-[0.75rem] uppercase tracking-[2px] text-accent mb-1.5 font-semibold">
        <i className={`fas ${day.heroIcon}`} /> Día {dayNumber}
      </div>
      <h2 className="text-[1.6rem] font-bold mb-1">{day.title}</h2>
      <div className="text-[0.85rem] text-muted flex items-center gap-1.5">
        <i className="far fa-calendar" /> {day.dia} 2026
      </div>
      {day.noche && (
        <span className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-card-alt rounded-full text-[0.75rem] text-muted border border-edge">
          <i className="fas fa-bed text-gold" />
          <span>
            {day.alojamiento ? (
              <>
                <strong>{day.noche}</strong> · {day.alojamiento}
              </>
            ) : (
              day.noche
            )}
          </span>
        </span>
      )}
    </div>
  );
}
