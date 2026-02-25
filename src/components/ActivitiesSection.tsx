import type { Activity } from '../types/trip.ts';

interface ActivitiesSectionProps {
  activities: Activity[];
}

export default function ActivitiesSection({
  activities,
}: ActivitiesSectionProps) {
  return (
    <div className="relative pl-6 before:content-[''] before:absolute before:left-1.75 before:top-2 before:bottom-2 before:w-0.5 before:bg-edge before:rounded-full">
      {activities.map((activity, i) => (
        <div key={i} className="relative pb-4 last:pb-0">
          <div
            className={`absolute -left-5 top-1.5 w-3 h-3 rounded-full border-2 border-accent3 z-1 ${i === 0 ? 'bg-accent3' : 'bg-bg'}`}
          />
          <div className="bg-card-alt rounded-inner p-3.5 border border-edge">
            <div className="text-[0.7rem] font-bold text-accent3 mb-1">
              <i className="far fa-clock" /> {activity.start} — {activity.end}
            </div>
            <div className="text-[0.88rem] font-semibold mb-1">
              {activity.name}
            </div>
            <div className="text-[0.75rem] text-muted flex items-center gap-1">
              <i className="fas fa-map-marker-alt" /> {activity.place}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
