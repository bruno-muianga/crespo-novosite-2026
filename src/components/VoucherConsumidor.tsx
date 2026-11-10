import { Check } from "lucide-react";
import LocationChooser from "./LocationChooser";

const VoucherConsumidor = () => {
  

  return (
    <section className="relative py-14 sm:py-20 md:py-28 overflow-hidden mobile-clip-diagonal" style={{ background: "hsl(var(--verde-principal))" }}>
      {/* % Pattern background */}
      <div className="absolute inset-0 opacity-[0.06] font-body text-[80px] sm:text-[120px] font-black text-primary-foreground leading-none overflow-hidden select-none pointer-events-none" aria-hidden="true">
        <div className="flex flex-wrap gap-4 sm:gap-8 -rotate-12 -translate-x-10">
          {"% % % % % % % % % % % % % % % % % % % % % % % % ".split(" ").map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-4 text-center fade-in-section">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-4 sm:mb-6">
          <span className="text-xs sm:text-sm font-body font-bold text-primary-foreground tracking-wider">
            MARÇO · MÊS DO CONSUMIDOR
          </span>
        </div>

        <h2 className="font-body text-4xl sm:text-6xl md:text-8xl font-black text-primary-foreground mb-1 sm:mb-2">VOUCHER 10%</h2>
        <p className="font-script text-2xl sm:text-3xl md:text-4xl text-primary-foreground/90 mb-8 sm:mb-10">mês do consumidor</p>

        {/* Card */}
        <div className="max-w-sm sm:max-w-md mx-auto bg-card rounded-2xl p-6 sm:p-8 shadow-2xl">
          <p className="font-body text-sm sm:text-base text-foreground leading-relaxed mb-5 sm:mb-6">
            Durante o mês de Março, cada cliente recebe <strong>10% de desconto</strong> na próxima visita
          </p>

          <div className="flex flex-col gap-2 mb-5 sm:mb-6 text-left">
            <span className="font-body text-sm text-foreground inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-green flex-shrink-0" /> Tratamentos Capilares
            </span>
            <span className="font-body text-sm text-foreground inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-green flex-shrink-0" /> Tranças
            </span>
          </div>

          <div className="bg-brand-green/10 rounded-xl px-4 py-2.5 sm:py-3">
            <p className="font-body font-bold text-brand-green text-base sm:text-lg">VÁLIDO POR 30 DIAS</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10">
          <span className="inline-flex items-center gap-2 sm:gap-3 bg-brand-green-dark text-primary-foreground px-7 sm:px-10 py-3.5 sm:py-4 rounded-full font-body font-bold text-sm sm:text-lg">
            <LocationChooser service="Voucher 10% Mês do Consumidor" className="text-primary-foreground text-sm sm:text-lg" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default VoucherConsumidor;
