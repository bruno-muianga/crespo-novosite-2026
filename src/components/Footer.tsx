import LogoSVG from "./LogoSVG";

const Footer = () => (
  <footer className="bg-foreground py-8 sm:py-12">
    <div className="max-w-6xl mx-auto px-5 sm:px-4">
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:items-start md:gap-16">
        <div className="flex-shrink-0">
          <LogoSVG size="small" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6 text-center flex-1 w-full">
          <div>
            <h4 className="font-body font-bold text-background text-xs sm:text-sm mb-1">Maputo</h4>
            <a href="https://wa.me/258835883700" className="font-body text-[10px] sm:text-xs text-background/60 hover:text-background block mb-1">+258 83 588 3700</a>
            <p className="font-body text-[9px] sm:text-[10px] text-background/40 leading-relaxed">Av. Josina Machel esq. c/ Av. Karl Marx, junto ao ginásio IR Fitness</p>
          </div>
          <div>
            <h4 className="font-body font-bold text-background text-xs sm:text-sm mb-1">Matola</h4>
            <a href="https://wa.me/258853710487" className="font-body text-[10px] sm:text-xs text-background/60 hover:text-background block mb-1">+258 85 371 0487</a>
            <p className="font-body text-[9px] sm:text-[10px] text-background/40 leading-relaxed">EN4, Ceres, semáforos da Shoprite — Centro Comercial, 1° Andar nr 9</p>
          </div>
          <div>
            <h4 className="font-body font-bold text-background text-xs sm:text-sm mb-1">Sommershield</h4>
            <a href="https://wa.me/258844631159" className="font-body text-[10px] sm:text-xs text-background/60 hover:text-background block mb-1">+258 84 463 1159</a>
            <p className="font-body text-[9px] sm:text-[10px] text-background/40 leading-relaxed">Kosmoz — Av. Elias Lucas Kumato, próximo à Fundação Armando Emílio Guebuza</p>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center">
        <p className="font-body text-[10px] sm:text-xs text-background/40">© 2025 Crespo Cresce — Todos os direitos reservados</p>
      </div>
    </div>
  </footer>
);

export default Footer;
