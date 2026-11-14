import { Leaf, Microscope, MapPin, Heart } from "lucide-react";
import { ReactNode } from "react";

const reasons: { number: string; icon: ReactNode; title: string; desc: string }[] = [
  {
    number: "01",
    icon: <Leaf className="w-5 h-5 text-brand-green" />,
    title: "Especialistas em Cabelo Crespo",
    desc: "Técnicas especializadas e cosmética natural selecionada à medida da curvatura do seu fio.",
  },
  {
    number: "02",
    icon: <Microscope className="w-5 h-5 text-brand-green" />,
    title: "Diagnóstico Capilar Real",
    desc: "Exame de tricoscopia e anamnese personalizada para identificar as reais necessidades do couro cabeludo.",
  },
  {
    number: "03",
    icon: <MapPin className="w-5 h-5 text-brand-green" />,
    title: "3 Salões de Referência",
    desc: "Espaços acolhedores em Sommershield, Maputo Cidade e Matola para o seu conforto.",
  },
  {
    number: "04",
    icon: <Heart className="w-5 h-5 text-brand-green" />,
    title: "Cabelo é Identidade & Poder",
    desc: "Cuidamos com amor, acolhimento e valorização da beleza e textura genuína.",
  },
];

const PorqueSection = () => (
  <section id="porque" className="py-20 sm:py-28 bg-background scroll-mt-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 fade-in-section">
      <div className="text-center mb-14 sm:mb-20">
        <span className="inline-block font-body text-[11px] sm:text-xs font-bold tracking-[0.2em] text-brand-green uppercase mb-3">
          Diferenciais Exclusivos
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
          Porquê o Crespo Cresce?
        </h2>
        <div className="w-12 h-0.5 bg-brand-gold/60 mx-auto mb-4" />
        <p className="font-body text-sm sm:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Ciência, delicadeza e dedicação em cada detalhe para o seu cabelo atingir o seu potencial máximo.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="group bg-card rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/70 hover:border-brand-green/30 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center transition-transform group-hover:scale-105">
                  {r.icon}
                </div>
                <span className="font-display font-bold text-lg text-muted-foreground/30">
                  {r.number}
                </span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-2 leading-snug">
                {r.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {r.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PorqueSection;
