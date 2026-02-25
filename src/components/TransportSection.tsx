import type { TransportLeg, TransportMode } from '../types/trip.ts';

const TRANSPORT_ICONS: Record<TransportMode, string> = {
  avion: 'fa-plane',
  tren: 'fa-train',
  carro: 'fa-car',
  bus: 'fa-bus',
  ferry: 'fa-ship',
};

const TRANSPORT_LABELS: Record<TransportMode, string> = {
  avion: 'Avión',
  tren: 'Tren',
  carro: 'Carro',
  bus: 'Bus',
  ferry: 'Ferry',
};

const MODE_CLASSES: Record<TransportMode, string> = {
  avion: 'bg-accent/20 text-accent',
  tren: 'bg-accent3/20 text-accent3',
  carro: 'bg-orange-500/20 text-orange-500',
  bus: 'bg-sky-400/20 text-sky-400',
  ferry: 'bg-sky-400/20 text-sky-400',
};

interface TransportSectionProps {
  legs: TransportLeg[];
}

export default function TransportSection({ legs }: TransportSectionProps) {
  if (legs.length === 0) {
    return (
      <p className="text-muted text-[0.82rem] italic py-2.5 text-center">
        Sin traslados este día
      </p>
    );
  }

  return (
    <>
      {legs.map((leg, i) => (
        <div
          key={i}
          className="bg-card-alt rounded-inner p-3.5 mb-2.5 border border-edge last:mb-0"
        >
          <div className="flex items-center justify-between mb-2.5">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xl text-[0.7rem] font-semibold uppercase tracking-wider ${MODE_CLASSES[leg.medio]}`}
            >
              <i className={`fas ${TRANSPORT_ICONS[leg.medio]}`} />
              {TRANSPORT_LABELS[leg.medio]}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="text-center shrink-0 max-w-20">
              <div className="text-[0.85rem] font-bold">{leg.salida}</div>
              <div className="text-[0.7rem] text-muted mt-0.5">
                {leg.inicio}
              </div>
            </div>
            <div className="relative flex-1 h-0.5 bg-edge min-w-10 before:content-[''] before:absolute before:-right-0.75 before:-top-0.75 before:w-2 before:h-2 before:border-r-2 before:border-t-2 before:border-accent before:rotate-45" />
            <div className="text-center shrink-0 max-w-20">
              <div className="text-[0.85rem] font-bold">{leg.llegada}</div>
              <div className="text-[0.7rem] text-muted mt-0.5">
                {leg.destino}
              </div>
            </div>
          </div>
          {leg.data && (
            <div className="mt-2.5 px-3 py-2 bg-accent/8 rounded-lg text-[0.72rem] text-muted leading-relaxed whitespace-pre-line">
              <strong className="text-accent">Reserva:</strong> {leg.data}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
