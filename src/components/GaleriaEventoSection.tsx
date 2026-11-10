import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X, Sparkles, Camera, ZoomIn } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const fotos = [
  { id: 1, src: "/fotos-evento/evento-1.jpg", alt: "1ª Edição Criança Crespa — Chegada e Acolhimento" },
  { id: 2, src: "/fotos-evento/evento-2.jpg", alt: "1ª Edição Criança Crespa — Cuidado e Carinho" },
  { id: 3, src: "/fotos-evento/evento-3.jpg", alt: "1ª Edição Criança Crespa — Aprendizado Teórico" },
  { id: 4, src: "/fotos-evento/evento-4.jpg", alt: "1ª Edição Criança Crespa — Prática de Penteados" },
  { id: 5, src: "/fotos-evento/evento-5.jpg", alt: "1ª Edição Criança Crespa — Hidratação e Cuidados" },
  { id: 6, src: "/fotos-evento/evento-6.jpg", alt: "1ª Edição Criança Crespa — Oficina de Tranças" },
  { id: 7, src: "/fotos-evento/evento-7.jpg", alt: "1ª Edição Criança Crespa — Acompanhamento e Mães" },
  { id: 8, src: "/fotos-evento/evento-8.jpg", alt: "1ª Edição Criança Crespa — Palestra e Autoestima" },
  { id: 9, src: "/fotos-evento/evento-9.jpg", alt: "1ª Edição Criança Crespa — Produtos e Kits" },
  { id: 10, src: "/fotos-evento/evento-10.jpg", alt: "1ª Edição Criança Crespa — Momentos de Diversão" },
  { id: 11, src: "/fotos-evento/evento-11.jpg", alt: "1ª Edição Criança Crespa — Orgulho Crespo" },
  { id: 12, src: "/fotos-evento/evento-12.jpg", alt: "1ª Edição Criança Crespa — Sorrisos e Celebração" },
  { id: 13, src: "/fotos-evento/evento-13.jpg", alt: "1ª Edição Criança Crespa — Atenção aos Detalhes" },
  { id: 14, src: "/fotos-evento/evento-14.jpg", alt: "1ª Edição Criança Crespa — Ensino Prático" },
  { id: 15, src: "/fotos-evento/evento-15.jpg", alt: "1ª Edição Criança Crespa — Interação em Família" },
  { id: 16, src: "/fotos-evento/evento-16.jpg", alt: "1ª Edição Criança Crespa — Textura Natural" },
  { id: 17, src: "/fotos-evento/evento-17.jpg", alt: "1ª Edição Criança Crespa — Comunidade Crespo Cresce" },
  { id: 18, src: "/fotos-evento/evento-18.jpg", alt: "1ª Edição Criança Crespa — Encerramento Memorável" },
];

const GaleriaEventoSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay with pause on hover
  useEffect(() => {
    if (!emblaApi || isPaused || lightboxIndex !== null) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [emblaApi, isPaused, lightboxIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev !== null ? (prev + 1) % fotos.length : null));
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev !== null ? (prev - 1 + fotos.length) % fotos.length : null));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const whatsappReserva =
    "https://wa.me/258844631159?text=Olá!%20Vi%20as%20fotos%20da%201ª%20Edição%20e%20quero%20reservar%20vaga%20para%20a%202ª%20Edição%20do%20Evento%20Criança%20Crespa!";

  return (
    <section
      id="galeria"
      className="relative py-16 sm:py-24 md:py-28 overflow-hidden scroll-mt-16"
      style={{
        background: "linear-gradient(180deg, hsl(var(--verde-escuro)) 0%, hsl(var(--preto-marca)) 100%)",
      }}
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 fade-in-section">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/30 rounded-full px-4 sm:px-5 py-1.5 mb-3 sm:mb-4">
            <Camera className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-xs sm:text-sm font-body font-bold text-brand-gold tracking-widest uppercase">
              1ª Edição • Galeria de Fotos
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-3 sm:mb-4">
            Como Foi o Evento Passado
          </h2>
          <p className="font-body text-sm sm:text-base text-brand-cream/80 max-w-2xl mx-auto leading-relaxed">
            Momentos mágicos de conexão, aprendizagem prática, carinho e valorização da autoestima das nossas crianças. Deslize para ver os registos da 1ª edição!
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Embla Viewport */}
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-3 sm:-ml-4">
              {fotos.map((foto, index) => (
                <div
                  key={foto.id}
                  className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_28%] pl-3 sm:pl-4 min-w-0"
                >
                  <div
                    onClick={() => setLightboxIndex(index)}
                    className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden border-2 border-brand-gold/30 bg-card/60 shadow-lg group/card hover:border-brand-gold hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={foto.src}
                      alt={foto.alt}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                      <span className="text-[11px] sm:text-xs text-brand-cream/90 font-body font-medium truncate pr-2">
                        {foto.alt}
                      </span>
                      <span className="p-1.5 rounded-full bg-brand-gold/90 text-brand-black flex-shrink-0 shadow">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            aria-label="Foto anterior"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-brand-black/80 backdrop-blur-md border border-brand-gold/50 text-brand-gold hover:bg-brand-gold hover:text-brand-black flex items-center justify-center transition-all shadow-xl z-20 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Próxima foto"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-brand-black/80 backdrop-blur-md border border-brand-gold/50 text-brand-gold hover:bg-brand-gold hover:text-brand-black flex items-center justify-center transition-all shadow-xl z-20 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Status & Indicators */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-body text-brand-cream/70">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>
              Mostrando foto <strong>{selectedIndex + 1}</strong> de {fotos.length}
            </span>
          </div>

          {/* Progress dots bar */}
          <div className="flex items-center gap-1.5 max-w-full overflow-x-auto py-1">
            {fotos.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi && emblaApi.scrollTo(i)}
                aria-label={`Ir para foto ${i + 1}`}
                className={`transition-all rounded-full ${
                  selectedIndex === i
                    ? "w-7 h-2 bg-brand-gold"
                    : "w-2 h-2 bg-primary-foreground/25 hover:bg-primary-foreground/50"
                }`}
              />
            ))}
          </div>

          <span className="text-xs text-brand-cream/50 hidden sm:inline">
            Clique na foto para ampliar
          </span>
        </div>

        {/* Call to action for the 2nd Edition */}
        <div className="mt-12 sm:mt-16 bg-brand-gold/10 border-2 border-brand-gold/30 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden backdrop-blur-sm">
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-2 sm:mb-3">
              Não perca a 2ª Edição do Evento Criança Crespa!
            </h3>
            <p className="font-body text-xs sm:text-sm sm:text-base text-brand-cream/80 mb-6 leading-relaxed">
              Traga a sua criança para um dia inesquecível de aprendizagem prática, kit de produtos naturais, lanche e muita celebração em Sommershield (28 de Novembro às 10H).
            </p>
            <a
              href={whatsappReserva}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-brand-gold text-brand-black px-7 sm:px-10 py-3.5 sm:py-4 rounded-full font-body font-bold text-sm sm:text-base hover:brightness-110 shadow-2xl transition-all hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Garantir Vaga na 2ª Edição (844631159)
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal (Fullscreen Zoom) */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white z-30">
            <span className="text-xs sm:text-sm font-body text-brand-cream/80 bg-black/50 px-3 py-1.5 rounded-full border border-white/10">
              Foto {lightboxIndex + 1} de {fotos.length}
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Fechar ampliação"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Large Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={fotos[lightboxIndex].src}
              alt={fotos[lightboxIndex].alt}
              className="max-h-[82vh] max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10"
            />

            {/* Prev/Next buttons inside Lightbox */}
            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev !== null ? (prev - 1 + fotos.length) % fotos.length : null))
              }
              aria-label="Foto anterior"
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-brand-gold hover:text-brand-black text-white flex items-center justify-center transition-all border border-white/20"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev !== null ? (prev + 1) % fotos.length : null))
              }
              aria-label="Próxima foto"
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-brand-gold hover:text-brand-black text-white flex items-center justify-center transition-all border border-white/20"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Caption */}
          <p className="mt-4 text-center font-body text-xs sm:text-sm text-brand-cream/80 max-w-xl px-4">
            {fotos[lightboxIndex].alt}
          </p>
        </div>
      )}
    </section>
  );
};

export default GaleriaEventoSection;

