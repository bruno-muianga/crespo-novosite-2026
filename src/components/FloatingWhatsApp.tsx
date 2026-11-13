import { useState, useRef, useEffect } from "react";
import { MapPin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const locations = [
  { name: "Matola (Sede)", wa: "258853710487" },
  { name: "Maputo", wa: "258835883700" },
  { name: "Sommershield", wa: "258844631159" },
];

const FloatingWhatsApp = () => {
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
    `https://wa.me/${wa}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços do Crespo Cresce")}`;

  return (
    <div ref={ref} className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {open && (
        <div className="absolute right-0 bottom-full mb-2 bg-card border border-border rounded-xl shadow-lg min-w-[160px] overflow-hidden animate-in fade-in-0 zoom-in-95">
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
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{ background: "#25D366" }}
        aria-label="Contactar pelo WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
