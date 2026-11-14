import LogoSVG from "./LogoSVG";

const Footer = () => (
  <footer className="bg-foreground py-10 sm:py-14 border-t border-white/5">
    <div className="max-w-6xl mx-auto px-5 sm:px-6">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-16">
        <div className="flex-shrink-0">
          <LogoSVG size="small" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center sm:text-left flex-1 w-full">
          <div>
            <span className="text-[10px] font-body font-bold text-brand-gold uppercase tracking-wider block mb-1">Unidade Central</span>
            <h4 className="font-body font-bold text-background text-sm mb-1.5">Matola (Sede)</h4>
            <a href="https://wa.me/258853710487" className="font-body text-xs text-background/80 hover:text-brand-gold block mb-1.5 transition-colors">+258 85 371 0487</a>
            <p className="font-body text-xs text-background/50 leading-relaxed">EN4, Ceres, semáforos da Shoprite — Centro Comercial, 1° Andar nr 9</p>
          </div>
          <div>
            <span className="text-[10px] font-body font-bold text-background/40 uppercase tracking-wider block mb-1">Filial Cidade</span>
            <h4 className="font-body font-bold text-background text-sm mb-1.5">Maputo Cidade</h4>
            <a href="https://wa.me/258835883700" className="font-body text-xs text-background/80 hover:text-brand-gold block mb-1.5 transition-colors">+258 83 588 3700</a>
            <p className="font-body text-xs text-background/50 leading-relaxed">Av. Josina Machel esq. c/ Av. Karl Marx, junto ao ginásio IR Fitness</p>
          </div>
          <div>
            <span className="text-[10px] font-body font-bold text-background/40 uppercase tracking-wider block mb-1">Espaço Eventos</span>
            <h4 className="font-body font-bold text-background text-sm mb-1.5">Sommershield</h4>
            <a href="https://wa.me/258844631159" className="font-body text-xs text-background/80 hover:text-brand-gold block mb-1.5 transition-colors">+258 84 463 1159</a>
            <p className="font-body text-xs text-background/50 leading-relaxed">Edifício Kosmoz — Av. Elias Lucas Kumato, próximo à Fundação Guebuza</p>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-center gap-2">
        <p className="font-body text-xs text-background/40">© 2026 Crespo Cresce — Terapia Capilar Especializada. Todos os direitos reservados.</p>
        <p className="font-body text-[11px] text-background/30">Cuidado natural & ciência capilar em Moçambique.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
