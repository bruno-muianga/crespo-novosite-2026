import { useState, useEffect } from "react";
import { MapPin, ArrowDown, ZoomIn, X, Sparkles } from "lucide-react";
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
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-x-hidden pt-20 sm:pt-28 pb-12 sm:pb-20 px-3 sm:px-6 lg:px-8"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 50% 15%, hsl(var(--verde-escuro)) 0%, hsl(var(--preto-marca)) 100%)",
      }}
    >
      {/* Subtle ambient light aura behind the flyer */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-4xl h-[450px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Minimalist Announcement Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 backdrop-blur-md mb-4 sm:mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-[11px] sm:text-xs font-body font-bold text-brand-gold tracking-[0.18em] uppercase">
            Grande Destaque • 2ª Edição Criança Crespa
          </span>
        </div>

        {/* HERO FLYER SHOWCASE - Maximum Visibility & Editorial Frame */}
        <div className="w-full relative group">
          <div className="relative w-full rounded-2xl sm:rounded-3xl p-1 sm:p-2 bg-gradient-to-b from-brand-gold/40 via-brand-gold/15 to-brand-gold/35 shadow-[0_20px_80px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all duration-500 hover:shadow-[0_25px_90px_rgba(212,175,55,0.25)]">
            <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black/60 cursor-pointer">
              <img
                src={eventoBanner}
                alt="Flyer Oficial — 2ª Edição Evento Criança Crespa na Sommershield"
                className="w-full h-auto object-contain block mx-auto transition-transform duration-700 group-hover:scale-[1.01]"
                loading="eager"
                onClick={() => setZoomOpen(true)}
              />

              {/* Minimalist Floating Zoom Pill (Always accessible on Mobile & Desktop) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomOpen(true);
                }}
                className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 bg-brand-black/80 hover:bg-brand-black text-brand-gold border border-brand-gold/40 text-[10px] sm:text-xs font-body font-semibold px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-md active:scale-95 transition-all"
                aria-label="Ampliar flyer em tela cheia"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Toque p/ Ampliar</span>
              </button>

              {/* Desktop Hover Hint */}
              <div
                onClick={() => setZoomOpen(true)}
                className="hidden sm:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end justify-center pb-6"
              >
                <span className="inline-flex items-center gap-2 bg-brand-gold text-brand-black text-xs font-bold font-body px-5 py-2.5 rounded-full shadow-2xl">
                  <ZoomIn className="w-4 h-4" />
                  Clique para Ver em Ecrã Inteiro
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist High-Contrast CTAs */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-lg px-2">
          <a
            href={whatsappEventoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-body font-bold text-brand-black text-sm sm:text-base bg-gradient-to-r from-brand-gold via-[#e8c66a] to-brand-gold hover:brightness-105 transition-all shadow-[0_10px_35px_rgba(212,175,55,0.35)] active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
            Reservar Vaga no WhatsApp (844631159)
          </a>
          <a
            href="#galeria"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-body font-medium text-brand-cream/90 hover:text-white border border-brand-cream/20 hover:border-brand-gold/40 hover:bg-white/5 transition-all text-xs sm:text-sm active:scale-95 backdrop-blur-sm"
          >
            Ver Fotos da 1ª Edição ↓
          </a>
        </div>

        {/* Minimalist Editorial Card: Centro de Terapia Capilar Crespo Cresce */}
        <div className="mt-10 sm:mt-14 w-full max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-gold/30 backdrop-blur-md text-center transition-all duration-300 shadow-xl">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-body font-bold text-brand-gold tracking-[0.2em] uppercase mb-2">
            <Sparkles className="w-3 h-3 text-brand-gold" />
            Centro de Terapia Capilar
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-3 tracking-wide">
            Crespo Cresce
          </h3>
          <p className="font-body text-xs sm:text-sm text-brand-cream/80 leading-relaxed max-w-lg mx-auto mb-6">
            Especializado no cuidado do cabelo crespo, tratamento para crescimento capilar, recuperação de queda capilar e controle de caspa.
          </p>

          {/* Botão Saber Mais */}
          <div className="flex justify-center mb-6">
            <a
              href="#sobre-salao"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-body font-semibold text-xs sm:text-sm text-brand-cream bg-white/5 hover:bg-brand-gold hover:text-brand-black border border-white/15 hover:border-brand-gold transition-all duration-300 active:scale-95"
            >
              Saber Mais ↓
            </a>
          </div>

          {/* As 3 Localizações */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-body text-brand-cream/70">
            <span className="flex items-center gap-1.5 font-medium hover:text-brand-gold transition-colors">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" /> Sommershield
            </span>
            <span className="text-brand-gold/30">•</span>
            <span className="flex items-center gap-1.5 font-medium hover:text-brand-gold transition-colors">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" /> Maputo Cidade
            </span>
            <span className="text-brand-gold/30">•</span>
            <span className="flex items-center gap-1.5 font-medium text-brand-gold hover:brightness-110 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" /> Matola (Sede)
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#galeria"
          className="mt-8 text-brand-cream/40 hover:text-brand-gold transition-colors"
          aria-label="Rolar para a galeria"
        >
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce-arrow" />
        </a>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {zoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setZoomOpen(false)}
        >
          {/* Top Bar with Close Button */}
          <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white z-30">
            <span className="text-xs sm:text-sm font-body text-brand-gold font-bold bg-black/60 px-3.5 py-1.5 rounded-full border border-brand-gold/30">
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
