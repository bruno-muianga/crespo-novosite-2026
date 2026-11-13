import { Leaf, Microscope, Sparkles, HeartHandshake, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const pilares = [
  {
    icon: <Microscope className="w-6 h-6 text-brand-gold" />,
    title: "Diagnóstico Capilar com Ciência",
    desc: "Exame minucioso de tricoscopia para entender a saúde do couro cabeludo e indicar o protocolo exato para o seu fio.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-brand-gold" />,
    title: "Tratamentos & Recuperação Real",
    desc: "Fórmulas naturais e técnicas avançadas para crescimento acelerado, combate à queda, fortalecimento da fibra e controle de caspa.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-brand-gold" />,
    title: "Tranças e Estilos Protetores",
    desc: "Penteados e tranças que respeitam os limites da tração capilar, protegendo a sua raiz e promovendo retenção de comprimento.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-brand-gold" />,
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
      className="relative py-16 sm:py-24 md:py-28 bg-background overflow-hidden scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 fade-in-section">
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block font-body text-xs sm:text-sm font-bold tracking-widest text-brand-green uppercase mb-2 sm:mb-3">
            O Nosso Espaço · A Nossa Missão
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Sobre o Salão Crespo Cresce
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Muito mais do que um salão de beleza convencional, o <strong>Crespo Cresce</strong> é um{" "}
            <strong>Centro Especializado em Terapia Capilar</strong> dedicado a transformar a relação de cada pessoa com o seu cabelo natural.
          </p>
        </div>

        {/* Bloco de Contexto com Destaque */}
        <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-border shadow-sm mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-foreground/90 font-body text-sm sm:text-base leading-relaxed">
              <p>
                Acreditamos que o <strong>cabelo crespo é rico em identidade, beleza e força</strong> — e necessita de cuidados pensados exclusivamente para a sua fisiologia.
              </p>
              <p className="text-muted-foreground">
                Combinamos o rigor da <strong>terapia capilar e tricologia</strong> com o poder de ingredientes naturais para tratar problemas reais: fios fragilizados, quebra, lentidão no crescimento, queda excessiva e irritações no couro cabeludo.
              </p>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium text-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                  Atendimento personalizado individual
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                  Produtos naturais selecionados
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                  Especialistas em couro cabeludo
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                  Acompanhamento para crianças e adultos
                </span>
              </div>
            </div>

            {/* Destaque das 3 Unidades */}
            <div className="lg:col-span-5 bg-brand-green/5 border border-brand-green/20 rounded-2xl p-6 text-center lg:text-left">
              <span className="text-[11px] font-body font-bold text-brand-gold uppercase tracking-wider block mb-1">
                Conveniência & Proximidade
              </span>
              <h4 className="font-display text-xl font-bold text-foreground mb-2">
                3 Salões em Moçambique
              </h4>
              <p className="font-body text-xs text-muted-foreground mb-4 leading-relaxed">
                Estamos prontos para acolhê-la em espaços modernos, higienizados e equipados:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm font-body text-foreground/90 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                  <strong>Sommershield:</strong> Edifício Kosmoz
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                  <strong>Maputo Cidade:</strong> Av. Josina Machel
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                  <strong>Matola (Sede):</strong> EN4, Ceres (Shoprite)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Grelha de Pilares do Salão */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {pilares.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Ações no rodapé da secção */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
          <a
            href={whatsappMatola}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-green text-primary-foreground px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-body font-bold text-sm sm:text-base hover:brightness-110 shadow-lg transition-all active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
            Agendar no WhatsApp (Matola: 853710487)
          </a>
          <a
            href="#depoimentos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-body font-semibold text-foreground border border-border hover:bg-muted transition-colors text-sm"
          >
            Ver Casos Reais de Clientes ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default SobreSalaoSection;

