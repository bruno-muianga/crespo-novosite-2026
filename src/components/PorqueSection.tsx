import { Leaf, Microscope, MapPin, Heart } from "lucide-react";
import { ReactNode } from "react";

const reasons: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-brand-green" />,
    title: "Especialistas em Cabelo Crespo",
    desc: "Técnicas especializadas e cosmética natural selecionada à medida da curvatura do seu fio.",
  },
  {
    icon: <Microscope className="w-6 h-6 sm:w-7 sm:h-7 text-brand-green" />,
    title: "Diagnóstico Capilar Real",
    desc: "Exame de tricoscopia e anamnese personalizada para identificar as reais necessidades do couro cabeludo.",
  },
  {
    icon: <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-brand-green" />,
    title: "3 Salões de Referência",
    desc: "Espaços acolhedores em Sommershield, Maputo Cidade e Matola para o seu conforto.",
  },
  {
    icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-brand-green" />,
    title: "Cabelo é Identidade & Poder",
    desc: "Cuidamos com amor, acolhimento e valorização da beleza e textura genuína.",
  },
];

const PorqueSection = () => (
  <section id="porque" className="py-16 sm:py-24 md:py-28 bg-background scroll-mt-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 fade-in-section">
      <div className="text-center mb-10 sm:mb-16">
        <span className="inline-block font-body text-xs sm:text-sm font-bold tracking-widest text-brand-green uppercase mb-2 sm:mb-3">
          Diferenciais Exclusivos
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
          Porquê o Crespo Cresce?
        </h2>
        <p className="font-body text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Ciência, delicadeza e dedicação em cada detalhe para o seu cabelo atingir o seu potencial máximo.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="bg-card rounded-2xl p-6 sm:p-7 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-brand-green/30 hover:-translate-y-1 flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
              {r.icon}
            </div>
            <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-2">
              {r.title}
            </h3>
            <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {r.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PorqueSection;
