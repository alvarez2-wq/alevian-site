interface AlevianLogoProps {
  className?: string;
  height?: number;
  dark?: boolean;
}

export default function AlevianLogo({
  className = "",
  height = 32,
  dark = false,
}: AlevianLogoProps) {
  const textColor = dark ? "#ffffff" : "#0a2866";
  const fontSize = height * 0.82;
  const triW = height * 0.274;
  const triH = height * 0.784;
  // Vertex stays fixed: top = vertexPosition - triH
  const vertexY = fontSize * 0.05 + height * 0.26; // original top + original height
  const triTop = vertexY - triH + 11;

  return (
    <div
      className={`inline-flex items-end select-none ${className}`}
      style={{ height, overflow: "visible" }}
      role="img"
      aria-label="Alevian"
    >
      <span
        className="leading-none"
        style={{
          fontFamily: "var(--font-geist-sans), Inter, system-ui, sans-serif",
          fontSize: `${fontSize}px`,
          fontWeight: 600,
          color: textColor,
          letterSpacing: "-0.02em",
        }}
      >
        Ale
        <span className="relative inline-block" style={{ overflow: "visible" }}>
          v
          {/* Inverted red triangle — point-down, at the top of the V */}
          <svg
            className="absolute"
            style={{
              top: `${triTop}px`,
              left: "50%",
              transform: "translateX(-50%)",
            }}
            width={triW}
            height={triH}
            viewBox="-1 -1 26 34"
            fill="none"
          >
            <polygon points="0,0 24,0 12,32" fill="#bd0a0a" />
          </svg>
        </span>
        ian
      </span>
    </div>
  );
}
