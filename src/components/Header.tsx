import { useState, useEffect } from "react";
import LogoSVG from "./LogoSVG";
import WhatsAppIcon from "./WhatsAppIcon";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = [
    { label: "Eventos", href: "#evento" },
    { label: "1ª Edição Evento Criança Crespa", href: "#galeria" },
    { label: "Sobre o Salão", href: "#sobre-salao" },
    { label: "Casos reais", href: "#depoimentos" },
    { label: "Porquê Escolher Crespo Cresce", href: "#porque" },
    { label: "Contactos do Crespo Cresce", href: "#contacto" },
  ];

  const whatsappMatolaLink =
    "https://wa.me/258853710487?text=Olá!%20Gostaria%20de%20agendar%20no%20Crespo%20Cresce";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-lg border-b border-border/60 shadow-sm"
          : "bg-gradient-to-b from-black/60 via-black/20 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        <a href="#" className="flex-shrink-0 transition-opacity hover:opacity-90" aria-label="Crespo Cresce">
          <LogoSVG size="small" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-body text-xs lg:text-[13px] font-medium tracking-wide transition-all duration-200 hover:text-brand-gold ${
                scrolled ? "text-foreground" : "text-brand-cream/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <a
          href={whatsappMatolaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-brand-green hover:brightness-110 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold font-body shadow-sm transition-all active:scale-95"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Agendar no WhatsApp
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className={`xl:hidden p-2 -mr-1.5 rounded-lg transition-colors ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-card/95 backdrop-blur-xl border-t border-border px-6 py-5 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block font-body text-sm font-medium text-foreground py-2.5 border-b border-border/40 last:border-0 hover:text-brand-green transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href={whatsappMatolaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-green hover:brightness-110 text-white px-5 py-3 rounded-full text-sm font-semibold font-body justify-center shadow-md transition-all active:scale-95"
              onClick={() => setMobileOpen(false)}
            >
              <WhatsAppIcon className="w-4 h-4" />
              Agendar no WhatsApp (Matola: 853710487)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
