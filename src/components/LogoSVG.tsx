import logoImg from "@/assets/logo-crespo-cresce.png";

const LogoSVG = ({ className = "", size = "normal" }: { className?: string; size?: "normal" | "small" }) => {
  const h = size === "small" ? 50 : 65;
  return (
    <img
      src={logoImg}
      alt="Crespo Cresce — Terapia Capilar"
      className={className}
      style={{ height: h, width: "auto" }}
    />
  );
};

export default LogoSVG;
