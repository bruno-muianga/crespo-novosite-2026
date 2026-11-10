import { Gift, Star } from "lucide-react";
import SilhouetteWatermark from "./SilhouetteWatermark";
import LocationChooser from "./LocationChooser";

const VoucherMulher = () => {
  return (
    <section
      id="voucher-mulher"
      className="relative py-14 sm:py-20 md:py-28 overflow-hidden mobile-clip-diagonal"
      style={{ background: "linear-gradient(160deg, #1A3009 0%, hsl(var(--preto-marca)) 100%)" }}
    >
      <SilhouetteWatermark className="left-0 bottom-0 w-[150px] sm:w-[250px] text-brand-gold opacity-5" />

      {/* Animated African pattern elements */}
      <div className="absolute top-10 left-[5%] animate-float-1 opacity-[0.07]">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 0L60 30L30 60L0 30Z" stroke="hsl(var(--dourado))" strokeWidth="2" />
          <path d="M30 10L50 30L30 50L10 30Z" stroke="hsl(var(--dourado))" strokeWidth="1.5" />
          <circle cx="30" cy="30" r="8" stroke="hsl(var(--dourado))" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute top-[30%] right-[8%] animate-float-2 opacity-[0.06]">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M40 0L80 40L40 80L0 40Z" stroke="hsl(var(--terracota))" strokeWidth="2" />
          <path d="M40 15L65 40L40 65L15 40Z" stroke="hsl(var(--terracota))" strokeWidth="1.5" />
          <path d="M40 25L55 40L40 55L25 40Z" stroke="hsl(var(--terracota))" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-[15%] left-[3%] animate-float-3 opacity-[0.06]">
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
          <polyline points="0,20 15,5 30,20 45,5 60,20 75,5 90,20 105,5 120,20" stroke="hsl(var(--dourado))" strokeWidth="2" fill="none" />
          <polyline points="0,30 15,15 30,30 45,15 60,30 75,15 90,30 105,15 120,30" stroke="hsl(var(--dourado))" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      <div className="hidden sm:block absolute top-[20%] left-[15%] animate-float-2 opacity-[0.05]">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="hsl(var(--verde-claro))" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="30" stroke="hsl(var(--verde-claro))" strokeWidth="1" />
          <circle cx="50" cy="50" r="15" stroke="hsl(var(--verde-claro))" strokeWidth="1" />
        </svg>
      </div>
      <div className="hidden md:block absolute bottom-[5%] right-[5%] animate-float-1 opacity-[0.04]">
        <svg width="140" height="180" viewBox="0 0 140 180" fill="none">
          <path d="M70 180V100" stroke="hsl(var(--dourado))" strokeWidth="6" />
          <path d="M70 100Q30 80 20 50Q15 30 35 20Q50 12 70 25Q90 12 105 20Q125 30 120 50Q110 80 70 100Z" stroke="hsl(var(--dourado))" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="absolute top-[60%] right-[15%] animate-float-3 opacity-[0.05]">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <polygon points="25,5 45,40 5,40" stroke="hsl(var(--terracota))" strokeWidth="1.5" fill="none" />
          <polygon points="25,15 38,38 12,38" stroke="hsl(var(--terracota))" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-4 text-center fade-in-section" id="promocoes">
        {/* Title */}
        <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-gold" />
          <span className="font-body text-[10px] sm:text-xs text-brand-gold tracking-[0.2em] uppercase font-bold">
            Promoção Especial
          </span>
          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-gold" />
        </div>

        <p className="font-script text-2xl sm:text-3xl md:text-5xl text-brand-gold mb-1 sm:mb-2">
          Celebre a Força,
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-primary-foreground mb-8 sm:mb-12">
          da Mulher Moçambicana
        </h2>

        {/* Redesigned Voucher Card */}
        <div className="max-w-sm sm:max-w-md mx-auto relative">
          {/* Outer glow ring */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-brand-gold/40 via-brand-terracotta/30 to-brand-gold/40 blur-[1px]" />

          <div
            className="relative rounded-3xl overflow-hidden"
            style={{ background: "linear-gradient(160deg, #2D1810 0%, #1A0E08 100%)" }}
          >
            {/* Top decorative border */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

            {/* Inner pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, hsl(var(--dourado)) 20px, hsl(var(--dourado)) 21px)`,
            }} />

            <div className="relative px-6 sm:px-8 pt-8 sm:pt-10">
              {/* Label */}
              <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
                <div className="h-[1px] w-8 sm:w-12 bg-brand-gold/40" />
                <p className="font-body text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-brand-gold/70 uppercase">
                  Voucher Presente
                </p>
                <div className="h-[1px] w-8 sm:w-12 bg-brand-gold/40" />
              </div>

              {/* Special offer title */}
              <div className="mb-6 sm:mb-8">
                <p className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight tracking-tight">
                  Especial
                </p>
                <p className="font-body text-base sm:text-lg text-brand-gold font-bold tracking-[0.25em] mt-1 uppercase">
                  Mês da Mulher
                </p>
              </div>
            </div>

            {/* Dashed separator */}
            <div className="mx-6 sm:mx-8 border-t border-dashed border-brand-gold/20" />

            {/* Benefits */}
            <div className="px-6 sm:px-8 py-5 sm:py-6">
              <p className="font-body text-xs sm:text-sm text-brand-cream/80 leading-relaxed">
                Tratamento Capilar + Tranças Natural Twists ou Penteado, feito por especialistas em cabelo crespo
              </p>
            </div>

            {/* Bottom bar */}
            <div className="bg-brand-gold/10 px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2">
              <Gift className="w-3.5 h-3.5 text-brand-gold/60" />
              <p className="font-body text-[10px] sm:text-xs text-brand-gold/70 tracking-wider font-medium">
                Válido durante todo o mês de Abril
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10">
          <span
            className="animate-pulse-gold inline-flex items-center gap-2 sm:gap-3 px-7 sm:px-10 py-3.5 sm:py-4 rounded-full font-body font-bold text-brand-black text-sm sm:text-lg bg-brand-gold hover:brightness-110 transition-all"
          >
            <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
            <LocationChooser
              service="Voucher Mês da Mulher Moçambicana"
              className="text-brand-black text-sm sm:text-lg"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default VoucherMulher;
