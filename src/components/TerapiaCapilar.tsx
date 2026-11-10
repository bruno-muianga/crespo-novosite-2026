import { useState } from "react";
import { Microscope } from "lucide-react";
import LocationChooser from "./LocationChooser";

type ServiceItem = { name: string };

const lavagens: ServiceItem[] = [
  { name: "Lavagem Hidratação/Nutrição" },
  { name: "Lavagem Reconstrução Capilar" },
  { name: "Lavagem sem Tratamento" },
  { name: "Lavagem c/ Produtos da Cliente" },
  { name: "Lavagem Simples Produtos Naturais" },
  { name: "Lavagem de Tranças" },
  { name: "Detox Capilar com Argila" },
  { name: "Detox Capilar com Shampoo" },
  { name: "Cortar Pontas" },
  { name: "Tratamento Alta Frequência" },
  { name: "Vapor de Ozônio (uma vez)" },
  { name: "Usar Produto do Salão" },
];

const pacotes2: ServiceItem[] = [
  { name: "Crescimento Capilar" },
  { name: "Crescimento c/ Produtos da Cliente" },
];

const pacotes4: ServiceItem[] = [
  { name: "Crescimento Capilar Familiar" },
  { name: "Crescimento c/ Produtos da Cliente" },
  { name: "Crescimento Capilar" },
  { name: "Anti-Caspa" },
  { name: "Anti-Queda" },
];

const ServiceTable = ({ rows }: { rows: ServiceItem[] }) => (
  <div className="grid gap-2.5 sm:gap-3 sm:grid-cols-2">
    {rows.map((r, idx) => (
      <div key={`${r.name}-${idx}`} className="bg-card rounded-xl p-3 sm:p-4 border-l-4 border-brand-green shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center justify-between gap-3">
          <h4 className="font-body font-semibold text-foreground text-xs sm:text-sm">{r.name}</h4>
          <LocationChooser service={r.name} className="text-[10px] sm:text-xs text-brand-green flex-shrink-0" />
        </div>
      </div>
    ))}
  </div>
);

const TerapiaCapilar = () => {
  const [mainTab, setMainTab] = useState<"lavagens" | "pacotes">("lavagens");
  const [pacoteTab, setPacoteTab] = useState<"2sess" | "4sess">("2sess");

  return (
    <section id="terapia" className="relative py-14 sm:py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-4 fade-in-section">
        {/* Section title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 sm:mb-2">Terapia Capilar</h2>
          <p className="font-body text-sm sm:text-base text-muted-foreground">Diagnóstico, cuidado e transformação</p>
        </div>

        {/* Consulta highlight */}
        <div className="max-w-sm sm:max-w-2xl mx-auto mb-8 sm:mb-12 rounded-2xl p-5 sm:p-6 border-2 border-brand-gold bg-brand-gold/5 text-center">
          <Microscope className="w-6 h-6 sm:w-7 sm:h-7 text-brand-gold mx-auto mb-1" />
          <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1">Consulta + Exame de Tricoscopia</h3>
          <p className="font-body text-xs sm:text-sm text-muted-foreground mb-4">Avaliação + Ficha de Anamnese + Tricoscopia</p>
          <LocationChooser service="Consulta Capilar + Exame de Tricoscopia" className="inline-flex items-center gap-2 bg-brand-gold text-primary-foreground px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm hover:brightness-110 transition-all" />
        </div>

        {/* Tabs - scrollable on mobile */}
        <div className="flex justify-center gap-2 mb-6 sm:mb-8">
          {(["lavagens", "pacotes"] as const).map((t) => (
            <button key={t} onClick={() => setMainTab(t)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-body font-semibold text-xs sm:text-sm transition-all ${mainTab === t ? "bg-brand-green text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
              {t === "lavagens" ? "Lavagens & Tratamentos" : "Pacotes Mensais"}
            </button>
          ))}
        </div>

        {mainTab === "lavagens" && <ServiceTable rows={lavagens} />}

        {mainTab === "pacotes" && (
          <>
            <div className="flex justify-center gap-2 mb-4 sm:mb-6">
              {(["2sess", "4sess"] as const).map((t) => (
                <button key={t} onClick={() => setPacoteTab(t)}
                  className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-body font-medium text-[11px] sm:text-xs transition-all ${pacoteTab === t ? "bg-brand-green-dark text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {t === "2sess" ? "2 Sessões/Mês" : "4 Sessões/Mês"}
                </button>
              ))}
            </div>
            <ServiceTable rows={pacoteTab === "2sess" ? pacotes2 : pacotes4} />
          </>
        )}
      </div>
    </section>
  );
};

export default TerapiaCapilar;
