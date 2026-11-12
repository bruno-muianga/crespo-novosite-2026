import { MapPin, Phone } from "lucide-react";
import SilhouetteWatermark from "./SilhouetteWatermark";
import WhatsAppIcon from "./WhatsAppIcon";

const locations = [
  {
    name: "Sommershield",
    badge: "Espaço do Evento",
    phone: "+258 84 463 1159",
    wa: "https://wa.me/258844631159?text=Olá!%20Quero%20agendar%20na%20Sommershield%20no%20Crespo%20Cresce",
    address: "Edifício Kosmoz — Av. Elias Lucas Kumato (próximo à Fundação Armando Emílio Guebuza)",
  },
  {
    name: "Maputo Cidade",
    badge: "Sede",
    phone: "+258 83 588 3700",
    wa: "https://wa.me/258835883700?text=Olá!%20Quero%20agendar%20em%20Maputo%20no%20Crespo%20Cresce",
    address: "Av. Josina Machel esq. c/ Av. Karl Marx, junto ao ginásio IR Fitness",
  },
  {
    name: "Matola",
    badge: "Centro Comercial",
    phone: "+258 85 371 0487",
    wa: "https://wa.me/258853710487?text=Olá!%20Quero%20agendar%20na%20Matola%20no%20Crespo%20Cresce",
    address: "EN4, Ceres, semáforos da Shoprite em frente à Construa (1° Andar, nr 9)",
  },
];

const CTAFinal = () => (
  <section
    id="contacto"
    className="relative py-16 sm:py-24 md:py-32 overflow-hidden scroll-mt-16"
    style={{ background: "linear-gradient(160deg, hsl(var(--verde-escuro)) 0%, hsl(var(--preto-marca)) 100%)" }}
  >
    <SilhouetteWatermark className="right-0 top-10 w-[200px] sm:w-[400px] text-brand-green opacity-5 pointer-events-none" />
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center fade-in-section">
      <span className="inline-block font-body text-xs sm:text-sm font-bold tracking-widest text-brand-gold uppercase mb-2 sm:mb-3">
        Agendamentos & Reservas
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-3 sm:mb-4">
        Pronta para transformar o seu cabelo?
      </h2>
      <p className="font-body text-brand-cream/80 text-sm sm:text-base md:text-lg mb-10 sm:mb-16 max-w-2xl mx-auto">
        Escolha o salão mais perto de si e fale diretamente com a nossa equipa via WhatsApp.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left">
        {locations.map((l) => (
          <div
            key={l.name}
            className="flex flex-col justify-between bg-primary-foreground/5 backdrop-blur-md rounded-2xl p-6 border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 className="font-display text-xl font-bold text-primary-foreground">
                  {l.name}
                </h3>
                <span className="bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-[10px] font-body font-bold px-2.5 py-0.5 rounded-full">
                  {l.badge}
                </span>
              </div>
              <p className="font-body text-xs text-brand-cream/70 leading-relaxed mb-4 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>{l.address}</span>
              </p>
              <p className="font-body text-xs text-brand-cream/90 font-medium mb-6 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-green-light" />
                <span>{l.phone}</span>
              </p>
            </div>

            <a
              href={l.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-black px-5 py-3 rounded-full font-body font-bold text-xs sm:text-sm hover:brightness-110 shadow-md transition-all w-full"
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
