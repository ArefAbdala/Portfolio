import { useState } from "react";

const C = {
  cream: "#faf6f0", brown: "#7a3f22", dark: "#2a1c12", tan: "#d4c4b0", amber: "#c4884a",
};

export default function DualOrbitAtom() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#110a04",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 32,
      fontFamily: "'Georgia', serif",
      padding: 40,
    }}>
      <svg viewBox="0 0 260 260" width={360} height={360}>
        <circle cx="130" cy="130" r="130" fill={C.cream} />

        {/* Outer seal ring + dot perimeter */}
        <circle cx="130" cy="130" r="124" fill="none" stroke={C.brown} strokeWidth="1.5" />
        <circle cx="130" cy="130" r="118" fill="none" stroke={C.tan} strokeWidth="0.6" />
        {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => (
          <circle key={a} cx={130 + 121 * Math.cos(a * Math.PI / 180)} cy={130 + 121 * Math.sin(a * Math.PI / 180)} r="1.8" fill={C.brown} opacity="0.5" />
        ))}

        {/* Inner field */}
        <circle cx="130" cy="130" r="72" fill={C.cream} stroke={C.brown} strokeWidth="1" />
        <circle cx="130" cy="130" r="44" fill="none" stroke={C.brown} strokeWidth="0.9" />

        {/* Crosshair lines */}
        <line x1="130" y1="60" x2="130" y2="86" stroke={C.brown} strokeWidth="0.6" opacity="0.35" />
        <line x1="130" y1="174" x2="130" y2="200" stroke={C.brown} strokeWidth="0.6" opacity="0.35" />
        <line x1="60" y1="130" x2="86" y2="130" stroke={C.brown} strokeWidth="0.6" opacity="0.35" />
        <line x1="174" y1="130" x2="200" y2="130" stroke={C.brown} strokeWidth="0.6" opacity="0.35" />

        {/* ORBIT 1 — sweeps upper-right to lower-left */}
        <ellipse cx="130" cy="130" rx="68" ry="20" fill="none" stroke={C.tan} strokeWidth="1.4" strokeDasharray="5 4" transform="rotate(-12 130 130)" opacity="0.85" />
        <circle
          cx={130 + 66 * Math.cos(-25 * Math.PI / 180)}
          cy={130 + 20 * Math.sin(-25 * Math.PI / 180)}
          r="5" fill={C.tan} opacity="0.9"
        />

        {/* ORBIT 2 — sweeps upper-left to lower-right */}
        <ellipse cx="130" cy="130" rx="68" ry="20" fill="none" stroke={C.amber} strokeWidth="1.2" strokeDasharray="4 5" transform="rotate(18 130 130)" opacity="0.72" />
        <circle
          cx={130 + 66 * Math.cos((18 + 160) * Math.PI / 180)}
          cy={130 + 20 * Math.sin((18 + 160) * Math.PI / 180)}
          r="4" fill={C.amber} opacity="0.78"
        />

        {/* AA monogram */}
        <text x="130" y="140" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="48" fontWeight="700" fill={C.dark} letterSpacing="-2">AA</text>
      </svg>

      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C.brown, textTransform: "uppercase" }}>
          Dual Orbit Atom
        </div>
      </div>
    </div>
  );
}
