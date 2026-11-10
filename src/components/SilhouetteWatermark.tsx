const SilhouetteWatermark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 300" className={`absolute pointer-events-none select-none ${className}`} aria-hidden="true">
    <circle cx="100" cy="80" r="50" fill="currentColor" opacity="0.06" />
    <ellipse cx="100" cy="55" rx="60" ry="55" fill="currentColor" opacity="0.06" />
    <rect x="88" y="128" width="24" height="30" rx="8" fill="currentColor" opacity="0.06" />
    <ellipse cx="100" cy="170" rx="50" ry="18" fill="currentColor" opacity="0.06" />
    <path d="M120 20 C130 8, 148 5, 150 18 C144 12, 130 16, 120 20Z" fill="currentColor" opacity="0.08" />
    <path d="M130 40 C142 28, 158 30, 156 44 C150 36, 138 38, 130 40Z" fill="currentColor" opacity="0.08" />
    <path d="M72 16 C62 4, 44 6, 46 20 C52 12, 66 14, 72 16Z" fill="currentColor" opacity="0.08" />
    <path d="M64 38 C52 30, 40 38, 44 50 C48 42, 60 38, 64 38Z" fill="currentColor" opacity="0.08" />
  </svg>
);

export default SilhouetteWatermark;
