import { useState } from "react";
import LocationChooser from "./LocationChooser";

type Item = { name: string };

const comCabelo: Item[] = [
  { name: "Desmanhar Cabelo" },
  { name: "Mirabas" },
  { name: "Piter" },
  { name: "Twist" },
  { name: "Linhas" },
  { name: "Twist/Piter c/ Cachos" },
];

const comMecha: Item[] = [
  { name: "Desmanhar Mecha" },
  { name: "Mirabas" },
  { name: "Piter" },
  { name: "Twist" },
  { name: "Twist/Piter c/ Cachos" },
  { name: "Mecha Comprida" },
  { name: "Ponta Fina Comprida" },
  { name: "Natural Twist" },
  { name: "Natural Twist Curto" },
  { name: "Bohemian Curto" },
  { name: "Bohemian Comprido" },
  { name: "Baby Twist" },
];

const outrosServicos: Item[] = [
  { name: "Pacote Tranças c/ Cabelo" },
  { name: "Pacote c/ Cabelo + Desmanchar" },
  { name: "Pacote c/ Mecha + Desmanchar" },
  { name: "Pacote c/ Mecha" },
  { name: "Esticar c/ Secador e Pente" },
  { name: "Esticar c/ Rolos" },
  { name: "Esticar c/ Escova Secadora" },
  { name: "Fitagem" },
  { name: "Texturização" },
  { name: "Penteados" },
  { name: "Pintar Pontas Mão de Obra" },
  { name: "Pintar Toda Cabeça" },
  { name: "Pintar Pontas Dreds" },
  { name: "Pintar Dreds Médias" },
  { name: "Pintar Dreds Compridas" },
];

const criancas49: Item[] = [
  { name: "Piter / Twist / Linhas" },
  { name: "Piter/Twist c/ Cachos" },
  { name: "Natural Twist" },
  { name: "Mecha Comprida/Média" },
  { name: "Ponta Fina" },
  { name: "Fitagem" },
  { name: "Texturização" },
];

const criancas1015: Item[] = [
  { name: "Piter / Twist / Linhas" },
  { name: "Piter/Twist c/ Cachos" },
  { name: "Natural Twist" },
  { name: "Mecha Comprida/Média" },
  { name: "Ponta Fina" },
  { name: "Fitagem" },
  { name: "Texturização" },
];

const tabs = [
  { key: "cabelo", label: "Com Cabelo", data: comCabelo },
  { key: "mecha", label: "Com Mecha", data: comMecha },
  { key: "outros", label: "Outros Serv.", data: outrosServicos },
  { key: "c49", label: "Crianças 4–9", data: criancas49 },
  { key: "c1015", label: "Crianças 10–15", data: criancas1015 },
] as const;

const TrancasSection = () => {
  const [active, setActive] = useState<string>("cabelo");
  const currentTab = tabs.find((t) => t.key === active)!;

  return (
    <section id="trancas" className="relative py-14 sm:py-20 md:py-28 overflow-hidden mobile-clip-diagonal" style={{ background: "hsl(var(--verde-escuro))" }}>
      <div className="max-w-6xl mx-auto px-4 fade-in-section">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-gold mb-1 sm:mb-2">Tranças</h2>
          <p className="font-body text-sm sm:text-base text-primary-foreground/70">Arte, identidade e beleza</p>
        </div>

        {/* Tabs - horizontal scroll on mobile */}
        <div className="flex gap-1.5 sm:gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 justify-start sm:justify-center scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setActive(t.key)}
              className={`flex-shrink-0 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full font-body font-semibold text-xs sm:text-sm transition-all ${active === t.key ? "bg-brand-gold text-brand-black" : "bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary-foreground/20"}`}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid gap-2.5 sm:gap-3 sm:grid-cols-2">
          {currentTab.data.map((item, idx) => (
            <div key={`${item.name}-${idx}`} className="bg-primary-foreground/5 backdrop-blur-sm border border-brand-gold/20 rounded-xl p-3 sm:p-4 hover:border-brand-gold/50 transition-all">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-body font-semibold text-primary-foreground text-xs sm:text-sm">{item.name}</h4>
                <LocationChooser service={item.name} className="text-[10px] sm:text-xs text-brand-green-light flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrancasSection;
