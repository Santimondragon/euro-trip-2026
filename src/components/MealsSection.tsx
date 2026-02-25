import type { Meals } from '../types/trip.ts';

const MEAL_CONFIG = [
  { key: 'desayuno' as const, emoji: '☕', label: 'Desayuno' },
  { key: 'almuerzo' as const, emoji: '🍽️', label: 'Almuerzo' },
  { key: 'cena' as const, emoji: '🌙', label: 'Cena' },
];

interface MealsSectionProps {
  meals: Meals;
}

export default function MealsSection({ meals }: MealsSectionProps) {
  return (
    <div className="flex flex-col gap-2">
      {MEAL_CONFIG.map(({ key, emoji, label }) => (
        <div
          key={key}
          className="flex items-center gap-3 px-3.5 py-3 bg-card-alt rounded-inner border border-edge"
        >
          <span className="text-xl shrink-0">{emoji}</span>
          <div>
            <div className="text-[0.72rem] text-accent2 font-semibold uppercase tracking-wider">
              {label}
            </div>
            <div className="text-[0.85rem] mt-0.5">{meals[key]}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
