import { MapPin, Phone } from "lucide-react";
import SilhouetteWatermark from "./SilhouetteWatermark";
import WhatsAppIcon from "./WhatsAppIcon";

const locations = [
  {
    name: "Matola",
    badge: "Sede",
    isSede: true,
    phone: "+258 85 371 0487",
    wa: "https://wa.me/258853710487?text=Olá!%20Quero%20agendar%20na%20Matola%20(Sede)%20no%20Crespo%20Cresce",
    address: "EN4, Ceres, semáforos da Shoprite em frente à Construa (1° Andar, nr 9)",
  },
  {
    name: "Maputo Cidade",
    badge: "Salão",
    isSede: false,
    phone: "+258 83 588 3700",
    wa: "https://wa.me/258835883700?text=Olá!%20Quero%20agendar%20em%20Maputo%20no%20Crespo%20Cresce",
    address: "Av. Josina Machel esq. c/ Av. Karl Marx, junto ao ginásio IR Fitness",
  },
  {
    name: "Sommershield",
    badge: "Espaço do Evento",
    isSede: false,
    phone: "+258 84 463 1159",
    wa: "https://wa.me/258844631159?text=Olá!%20Quero%20agendar%20na%20Sommershield%20no%20Crespo%20Cresce",
    address: "Edifício Kosmoz — Av. Elias Lucas Kumato (próximo à Fundação Armando Emílio Guebuza)",
  },
];

const CTAFinal = () => (
  <section
    id="contacto"
    className="relative py-20 sm:py-28 md:py-32 overflow-hidden scroll-mt-16"
    style={{
      background:
        "radial-gradient(ellipse 90% 70% at 50% 30%, hsl(var(--verde-escuro)) 0%, hsl(var(--preto-marca)) 100%)",
    }}
  >
    <SilhouetteWatermark className="right-0 top-10 w-[200px] sm:w-[400px] text-brand-green opacity-5 pointer-events-none" />
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center fade-in-section">
      <span className="inline-block font-body text-[11px] sm:text-xs font-bold tracking-[0.2em] text-brand-gold uppercase mb-3">
        Agendamentos & Reservas
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
        Pronta para cuidar do seu cabelo?
      </h2>
      <div className="w-12 h-0.5 bg-brand-gold/60 mx-auto mb-5" />
      <p className="font-body text-brand-cream/80 text-sm sm:text-base mb-12 sm:mb-16 max-w-xl mx-auto leading-relaxed">
        Escolha o salão da sua preferência e fale diretamente com a nossa equipa especializada via WhatsApp.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left">
        {locations.map((l) => (
          <div
            key={l.name}
            className={`flex flex-col justify-between rounded-3xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-lg ${
              l.isSede
                ? "bg-white/[0.06] border-2 border-brand-gold/60 shadow-[0_10px_40px_rgba(212,175,55,0.15)]"
                : "bg-white/[0.03] border border-white/10 hover:border-brand-gold/40"
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-primary-foreground">
                  {l.name}
                </h3>
                <span
                  className={`text-[10px] font-body font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    l.isSede
                      ? "bg-brand-gold text-brand-black"
                      : "bg-white/10 text-brand-cream/80 border border-white/15"
                  }`}
                >
                  {l.badge}
                </span>
              </div>
              <p className="font-body text-xs sm:text-sm text-brand-cream/70 leading-relaxed mb-4 flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>{l.address}</span>
              </p>
              <p className="font-body text-xs sm:text-sm text-brand-cream/90 font-medium mb-6 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span>{l.phone}</span>
              </p>
            </div>

            <a
              href={l.wa}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-body font-bold text-xs sm:text-sm transition-all shadow-md w-full active:scale-95 ${
                l.isSede
                  ? "bg-brand-gold hover:brightness-110 text-brand-black"
                  : "bg-white/10 hover:bg-brand-gold text-white hover:text-brand-black border border-white/15 hover:border-brand-gold"
              }`}
            >
              <WhatsAppIcon className="w-4 h-4" />
              Agendar no WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CTAFinal;
