import { useState, useRef, useEffect } from "react";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Maputo", wa: "258835883700" },
  { name: "Matola", wa: "258853710487" },
  { name: "Sommershield", wa: "258844631159" },
];

interface Props {
  service: string;
  className?: string;
}

const LocationChooser = ({ service, className = "" }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const waUrl = (wa: string) =>
    `https://wa.me/${wa}?text=Olá!%20Quero%20agendar:%20${encodeURIComponent(service)}%20no%20Crespo%20Cresce`;

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className={`font-body font-bold hover:underline whitespace-nowrap ${className}`}
      >
        Agendar →
      </button>
      {open && (
        <div className="absolute right-0 bottom-full mb-2 bg-card border border-border rounded-xl shadow-lg z-50 min-w-[160px] overflow-hidden animate-in fade-in-0 zoom-in-95">
          <p className="px-3 py-2 text-[10px] sm:text-xs font-body text-muted-foreground border-b border-border">
            Escolha o salão:
          </p>
          {locations.map((l) => (
            <a
              key={l.name}
              href={waUrl(l.wa)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2.5 text-xs sm:text-sm font-body font-medium text-foreground hover:bg-muted transition-colors"
              onClick={() => setOpen(false)}
            >
              <MapPin className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
              {l.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationChooser;
