const LeafSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 60" className={className} aria-hidden="true">
    <path d="M20 58 C20 58, 2 40, 2 22 C2 6, 20 2, 20 2 C20 2, 38 6, 38 22 C38 40, 20 58, 20 58Z" fill="currentColor" />
    <line x1="20" y1="58" x2="20" y2="12" stroke="hsla(0,0%,100%,0.3)" strokeWidth="1" />
  </svg>
);

export default LeafSVG;
