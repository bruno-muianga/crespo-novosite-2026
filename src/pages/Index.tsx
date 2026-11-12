import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import GaleriaEventoSection from "../components/GaleriaEventoSection";
import SobreSalaoSection from "../components/SobreSalaoSection";
import DepoimentosSection from "../components/DepoimentosSection";
import PorqueSection from "../components/PorqueSection";
import CTAFinal from "../components/CTAFinal";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="grain-overlay">
      <Header />
      <HeroSection />
      <GaleriaEventoSection />
      <SobreSalaoSection />
      <DepoimentosSection />
      <PorqueSection />
      <CTAFinal />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
