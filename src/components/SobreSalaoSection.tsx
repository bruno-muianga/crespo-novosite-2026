import { Leaf, Microscope, Sparkles, HeartHandshake, CheckCircle2, MapPin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const pilares = [
  {
    icon: <Microscope className="w-5 h-5 text-brand-gold" />,
    number: "01",
    title: "Diagnóstico Capilar com Ciência",
    desc: "Exame minucioso de tricoscopia para entender a saúde do couro cabeludo e indicar o protocolo exato para o seu fio.",
  },
  {
    icon: <Leaf className="w-5 h-5 text-brand-gold" />,
    number: "02",
    title: "Tratamentos & Recuperação Real",
    desc: "Fórmulas naturais e técnicas avançadas para crescimento acelerado, combate à queda, fortalecimento da fibra e controle de caspa.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-brand-gold" />,
    number: "03",
    title: "Tranças e Estilos Protetores",
    desc: "Penteados e tranças que respeitam os limites da tração capilar, protegendo a sua raiz e promovendo retenção de comprimento.",
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-brand-gold" />,
    number: "04",
    title: "Acompanhamento & Autoestima",
    desc: "Um espaço seguro e acolhedor onde ensinamos a cuidar do cabelo crespo no dia a dia com amor, respeito e orgulho.",
  },
];

const SobreSalaoSection = () => {
  const whatsappMatola =
    "https://wa.me/258853710487?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20Salão%20Crespo%20Cresce";

  return (
    <section
      id="sobre-salao"
      className="relative py-20 sm:py-28 bg-background overflow-hidden scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 fade-in-section">
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="inline-block font-body text-[11px] sm:text-xs font-bold tracking-[0.2em] text-brand-green uppercase mb-3">
            O Nosso Espaço · A Nossa Missão
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Sobre o Salão Crespo Cresce
          </h2>
          <div className="w-12 h-0.5 bg-brand-gold/60 mx-auto mb-5" />
          <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
            Muito mais do que um salão de beleza convencional, somos um <strong>Centro Especializado em Terapia Capilar</strong> dedicado à saúde e valorização genuína do cabelo crespo e natural.
          </p>
        </div>

        {/* Bloco Editorial Moderno */}
        <div className="bg-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-border/80 shadow-sm mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4 text-foreground/90 font-body text-sm sm:text-base leading-relaxed">
              <p className="text-base sm:text-lg font-medium text-foreground">
                O cabelo crespo é rico em identidade, ancestralidade e força — e necessita de cuidados pensados especificamente para a sua estrutura única.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Aliamos a ciência da <strong>terapia capilar e tricologia</strong> ao poder de ativos naturais nobres para tratar a raiz do problema: quebra contínua, estagnação no crescimento, queda excessiva e desequilíbrios do couro cabeludo.
              </p>
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                  Atendimento individualizado
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                  Cosmética natural pura
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                  Terapeutas capilares certificados
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                  Cuidado para crianças e adultos
                </span>
              </div>
            </div>

            {/* Destaque das 3 Unidades */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-green/5 via-card to-brand-gold/5 border border-brand-green/20 rounded-2xl p-6 sm:p-7 shadow-sm">
              <span className="text-[10px] sm:text-[11px] font-body font-bold text-brand-gold uppercase tracking-[0.2em] block mb-1">
                Conveniência & Acesso
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                3 Salões em Moçambique
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm font-body text-foreground/90">
                <li className="flex items-start gap-2.5 p-2 rounded-xl bg-card/60 border border-border/50">
                  <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground">Matola (Sede)</span>
                    <p className="text-[11px] text-muted-foreground">EN4, Ceres, semáforos Shoprite em frente à Construa</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 p-2 rounded-xl bg-card/60 border border-border/50">
                  <MapPin className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground">Maputo Cidade</span>
                    <p className="text-[11px] text-muted-foreground">Av. Josina Machel c/ Av. Karl Marx (junto ao IR Fitness)</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 p-2 rounded-xl bg-card/60 border border-border/50">
                  <MapPin className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground">Sommershield</span>
                    <p className="text-[11px] text-muted-foreground">Edifício Kosmoz — Av. Elias Lucas Kumato</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Grelha Minimalista de Pilares */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-14">
          {pilares.map((p) => (
            <div
              key={p.title}
              className="group bg-card rounded-2xl p-6 border border-border/70 shadow-sm hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center transition-transform group-hover:scale-105">
                    {p.icon}
                  </div>
                  <span className="font-display font-bold text-lg text-muted-foreground/30">
                    {p.number}
                  </span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Minimalista para Agendamento */}
        <div className="text-center">
          <a
            href={whatsappMatola}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-brand-green hover:brightness-110 text-white px-8 py-3.5 sm:py-4 rounded-full font-body font-semibold text-xs sm:text-sm shadow-lg transition-all active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
            Agendar Consulta no WhatsApp (Matola: 853710487)
          </a>
        </div>
      </div>
    </section>
  );
};

export default SobreSalaoSection;
