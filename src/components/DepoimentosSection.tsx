import depoimentoCrianca from "@/assets/depoimento-crianca.jpg";
import depoimentoCrescimento from "@/assets/depoimento-crescimento.jpg";
import depoimentoTransformacao from "@/assets/depoimento-transformacao.jpg";
import WhatsAppIcon from "./WhatsAppIcon";

const depoimentos = [
  {
    image: depoimentoCrianca,
    tag: "Cuidado Infantil",
    title: "Saúde Capilar Natural",
    caption: "Cuidado delicado e produtos próprios para os fios dos mais pequenos, com resultado visível e saudável.",
  },
  {
    image: depoimentoCrescimento,
    tag: "Evolução & Volume",
    title: "Crescimento Acompanhado",
    caption: "De 2023 a 2026 — recuperação consistente de densidade, força e comprimento com tratamento contínuo.",
  },
  {
    image: depoimentoTransformacao,
    tag: "Brilho & Vida",
    title: "Transformação Completa",
    caption: "Devolução da textura, hidratação profunda e definição dos caracóis com método especializado.",
  },
];

const DepoimentosSection = () => {
  return (
    <section id="depoimentos" className="relative py-16 sm:py-24 md:py-28 bg-card/40 border-t border-border/50 overflow-hidden scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 fade-in-section">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block font-body text-xs sm:text-sm font-bold tracking-widest text-brand-gold uppercase mb-2 sm:mb-3">
            Casos Reais & Transformações
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Transformações Reais
          </h2>
          <p className="font-body text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Cada cabelo conta uma história de cuidado, respeito à textura natural e amor próprio.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={d.image}
                  alt={d.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-brand-black/70 backdrop-blur-md text-brand-gold border border-brand-gold/30 text-[11px] font-body font-bold px-3 py-1 rounded-full">
                  {d.tag}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-card">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {d.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {d.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Consultation Callout */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="https://wa.me/258853710487?text=Olá!%20Gostaria%20de%20marcar%20uma%20avaliação%20para%20o%20meu%20cabelo%20no%20Crespo%20Cresce"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-brand-green text-primary-foreground px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-body font-bold text-sm sm:text-base hover:brightness-110 shadow-lg transition-all hover:scale-105"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Marcar Avaliação para o Meu Cabelo
          </a>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
