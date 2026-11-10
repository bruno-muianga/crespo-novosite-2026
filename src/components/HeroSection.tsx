import { useState, useEffect } from "react";
import { Leaf, MapPin, ArrowDown, ZoomIn, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import eventoBanner from "../assets/evento-crianca-crespa.jpg";

const Hero = () => {
  const [zoomOpen, setZoomOpen] = useState(false);

  const whatsappEventoLink =
    "https://wa.me/258844631159?text=Olá!%20Quero%20fazer%20reserva%20para%20o%20Evento%20Criança%20Crespa%20no%20Crespo%20Cresce";

  // Close zoom modal with Escape key
  useEffect(() => {
    if (!zoomOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomOpen]);

  return (
    <section
      id="evento"
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-x-hidden pt-16 sm:pt-24 pb-10 sm:pb-14 px-3 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(135deg, hsl(var(--verde-escuro)) 0%, hsl(var(--preto-marca)) 100%)" }}
    >
      {/* Decorative floating leaves - subtle on desktop, hidden on tiny screens */}
      <div className="hidden sm:block absolute top-20 left-[6%] text-brand-gold/25 animate-float-1 pointer-events-none">
        <Leaf className="w-8 h-8 sm:w-10 sm:h-10 rotate-45" />
      </div>
      <div className="hidden sm:block absolute top-36 right-[8%] text-brand-green-light/25 animate-float-2 pointer-events-none">
        <Leaf className="w-10 h-10 sm:w-12 sm:h-12 -rotate-12" />
      </div>
      <div className="hidden sm:block absolute bottom-28 left-[10%] text-brand-cream/15 animate-float-3 pointer-events-none">
        <Leaf className="w-6 h-6 sm:w-8 sm:h-8 rotate-90" />
      </div>
      <div className="hidden sm:block absolute bottom-40 right-[15%] text-brand-gold/20 animate-float-1 pointer-events-none">
        <Leaf className="w-9 h-9 sm:w-11 sm:h-11 -rotate-45" />
      </div>

      {/* Soft radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container - Maximum Width & Optimized for Mobile */}
      <div className="relative z-10 w-full max-w-6xl xl:max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Tag / Announcement */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-brand-gold/15 border border-brand-gold/40 rounded-full px-3.5 sm:px-6 py-1 sm:py-2 mb-2.5 sm:mb-4 animate-pulse">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-gold" />
          <span className="text-[11px] sm:text-sm md:text-base font-body font-bold text-brand-gold tracking-wider sm:tracking-widest uppercase">
            Grande Destaque • 2ª Edição Criança Crespa
          </span>
        </div>

        {/* HUGE EVENT BANNER - Mobile-Optimized Frame */}
        <div className="w-full relative group">
          <div className="relative w-full rounded-xl sm:rounded-3xl overflow-hidden border sm:border-2 md:border-4 border-brand-gold shadow-xl sm:shadow-[0_10px_60px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_80px_rgba(212,175,55,0.5)] transition-all duration-300">
            <img
              src={eventoBanner}
              alt="2ª Edição Evento Criança Crespa — 28 de Novembro na Sommershield"
              className="w-full h-auto object-contain sm:object-cover max-h-[70vh] sm:max-h-[80vh] mx-auto transition-transform duration-500"
              loading="eager"
              onClick={() => setZoomOpen(true)}
            />

            {/* Tap to Zoom indicator for Mobile */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomOpen(true);
              }}
              className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 bg-black/75 backdrop-blur-md text-brand-gold border border-brand-gold/40 text-[10px] sm:text-xs font-body font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full flex items-center gap-1.5 shadow-lg active:scale-95 transition-transform"
              aria-label="Ampliar flyer em tela cheia"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Toque p/ Ampliar</span>
            </button>

            {/* Desktop Hover Overlay */}
            <div
              onClick={() => setZoomOpen(true)}
              className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end justify-center pb-6 sm:pb-8 cursor-pointer"
            >
              <span className="inline-flex items-center gap-2 bg-brand-gold text-brand-black text-xs sm:text-sm font-bold font-body px-5 py-2.5 rounded-full shadow-2xl">
                <ZoomIn className="w-4 h-4" />
                Clique para Ver em Ecrã Inteiro
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons - Directly Under the Flyer */}
        <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center items-center w-full max-w-lg px-1">
          <a
            href={whatsappEventoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-9 py-3.5 sm:py-4 rounded-full font-body font-bold text-brand-black text-sm sm:text-base bg-brand-gold hover:brightness-110 transition-all shadow-xl active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
            Reservar Vaga no WhatsApp (844631159)
          </a>
          <a
            href="#galeria"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-body font-semibold text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors text-xs sm:text-sm active:scale-95"
          >
            Ver Fotos da 1ª Edição ↓
          </a>
        </div>

        {/* Locations subtitle */}
        <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-brand-cream/70 font-body">
          <span className="font-semibold text-brand-gold">
            Salões Crespo Cresce:
          </span>
          <span>Sommershield</span>
          <span>•</span>
          <span>Maputo</span>
          <span>•</span>
          <span>Matola</span>
        </div>

        {/* Smooth scroll down indicator */}
        <a
          href="#galeria"
          className="mt-5 sm:mt-7 text-brand-cream/40 hover:text-brand-cream transition-colors"
          aria-label="Rolar para fotos da galeria"
        >
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce-arrow" />
        </a>

      </div>

      {/* FULLSCREEN ZOOM MODAL FOR THE FLYER (Perfect for Mobile Reading) */}
      {zoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setZoomOpen(false)}
        >
          {/* Top Bar with Close Button */}
          <div className="absolute top-3.5 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white z-30">
            <span className="text-xs sm:text-sm font-body text-brand-gold font-bold bg-black/60 px-3 py-1.5 rounded-full border border-brand-gold/30">
              Flyer Oficial • 2ª Edição
            </span>
            <button
              onClick={() => setZoomOpen(false)}
              aria-label="Fechar ampliação"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Fullscreen Flyer Container */}
          <div
            className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={eventoBanner}
              alt="2ª Edição Evento Criança Crespa — Detalhes Completos"
              className="max-h-[75vh] sm:max-h-[80vh] max-w-full w-auto h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-brand-gold/30"
            />

            {/* Direct WhatsApp Action inside the Zoom Modal */}
            <div className="mt-4 flex justify-center w-full px-2">
              <a
                href={whatsappEventoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-black px-6 py-3 rounded-full font-body font-bold text-xs sm:text-sm shadow-xl hover:brightness-110 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Garantir Vaga no WhatsApp (844631159)
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
