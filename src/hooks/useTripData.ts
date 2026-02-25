import type { TripDay } from '../types/trip.ts';
import { tripDays } from '../data/days.ts';

interface UseTripDataReturn {
  days: TripDay[];
  isLoading: boolean;
  error: string | null;
}

/**
 * Data access hook for trip itinerary.
 *
 * Currently returns static data. To connect to a DB/API later,
 * swap the implementation for React Query:
 *
 *   const { data, isLoading, error } = useQuery({
 *     queryKey: ['trip-days'],
 *     queryFn: () => fetch('/api/trip-days').then(r => r.json()),
 *   });
 *   return { days: data ?? [], isLoading, error: error?.message ?? null };
 */
export function useTripData(): UseTripDataReturn {
  return { days: tripDays, isLoading: false, error: null };
}
