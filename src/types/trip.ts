export type TransportMode = 'avion' | 'tren' | 'carro' | 'bus' | 'ferry';

export interface TransportLeg {
  inicio: string;
  salida: string;
  medio: TransportMode;
  llegada: string;
  destino: string;
  data: string | null;
}

export interface Meals {
  desayuno: string;
  almuerzo: string;
  cena: string;
}

export interface Activity {
  name: string;
  place: string;
  start: string;
  end: string;
}

export interface TripDay {
  dia: string;
  id: string;
  title: string;
  heroIcon: string;
  transport: TransportLeg[];
  noche: string | null;
  alojamiento: string | null;
  meals: Meals;
  activities: Activity[];
}
