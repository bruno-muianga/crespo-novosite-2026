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
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16 md:h-20">
        <a href="#" aria-label="Crespo Cresce">
          <LogoSVG size="small" />
        </a>

        <nav className="hidden xl:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`font-body text-xs sm:text-sm font-medium transition-colors hover:text-brand-green ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappMatolaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-brand-green text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold font-body hover:brightness-110 transition-all"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Agendar no WhatsApp
        </a>

        <button
          className={`xl:hidden p-2 -mr-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-card/95 backdrop-blur-md border-t border-border px-5 py-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block font-body text-base font-medium text-foreground py-3 border-b border-border/50 last:border-0" onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href={whatsappMatolaLink}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-green text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold font-body justify-center mt-3"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Agendar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
