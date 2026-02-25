import type { TripDay } from '../types/trip.ts';
import DayHero from './DayHero.tsx';
import SectionCard from './SectionCard.tsx';
import TransportSection from './TransportSection.tsx';
import MealsSection from './MealsSection.tsx';
import ActivitiesSection from './ActivitiesSection.tsx';

interface DaySlideProps {
  day: TripDay;
  dayNumber: number;
}

export default function DaySlide({ day, dayNumber }: DaySlideProps) {
  const transportCount = day.transport.length;
  const transportSubtitle =
    transportCount > 0
      ? `${transportCount} trayecto${transportCount > 1 ? 's' : ''}`
      : 'Sin traslados';

  return (
    <div className="px-4 animate-fade-in">
      <DayHero day={day} dayNumber={dayNumber} />

      <SectionCard
        title="Transporte"
        subtitle={transportSubtitle}
        iconClass="fa-route"
        iconType="transport"
      >
        <TransportSection legs={day.transport} />
      </SectionCard>

      <SectionCard
        title="Comidas"
        subtitle="Desayuno · Almuerzo · Cena"
        iconClass="fa-utensils"
        iconType="meals"
      >
        <MealsSection meals={day.meals} />
      </SectionCard>

      <SectionCard
        title="Actividades"
        subtitle={`${day.activities.length} actividades planeadas`}
        iconClass="fa-map-pin"
        iconType="activities"
        defaultExpanded
      >
        <ActivitiesSection activities={day.activities} />
      </SectionCard>
    </div>
  );
}
