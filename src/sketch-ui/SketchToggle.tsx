"use client";

import React, { useMemo } from "react";

interface SketchToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export function SketchToggle({
  checked,
  onChange,
  label,
  disabled = false,
}: SketchToggleProps) {
  // Jitter für handgezeichneten Effekt
  const jitter = useMemo(() => {
    return Array.from({ length: 8 }, () => (Math.random() - 0.5) * 3);
  }, []);

  const width = 60;
  const height = 32;
  const knobSize = 24;

  // Handgezeichneter Pfad für den äußeren Rahmen
  const trackPath = `
    M ${16 + jitter[0]} ${2 + jitter[1]}
    Q ${30} ${0}, ${44 + jitter[2]} ${2}
    Q ${58} ${6}, ${58 + jitter[3]} ${16}
    Q ${58} ${26}, ${44} ${30 + jitter[4]}
    Q ${30} ${32}, ${16 + jitter[5]} ${30}
    Q ${2} ${26}, ${2 + jitter[6]} ${16}
    Q ${2} ${6}, ${16 + jitter[7]} ${2}
    Z
  `;

  // Handgezeichneter Kreis für den Knob
  const knobPath = (cx: number) => {
    const segments = 16;
    let path = "";
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const r = knobSize / 2;
      const wobble = r * 0.08 * Math.sin(i * 3);
      const x = cx + (r + wobble) * Math.cos(angle);
      const y = height / 2 + (r + wobble) * Math.sin(angle);
      path += (i === 0 ? "M " : "L ") + `${x} ${y} `;
    }
    return path + "Z";
  };

  const knobX = checked ? width - knobSize / 2 - 4 : knobSize / 2 + 4;

  return (
    <label
      className={`
        inline-flex items-center gap-3
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      <button
        type="button"
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
        className="relative focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full"
        style={{ width, height }}
      >
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <defs>
            <filter id="toggle-rough" x="-5%" y="-5%" width="110%" height="110%">
              <feTurbulence
                type="turbulence"
                baseFrequency="0.05"
                numOctaves="2"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="1"
              />
            </filter>
          </defs>

          {/* Track Hintergrund */}
          <path
            d={trackPath}
            fill={checked ? "#2563EB" : "#E5E7EB"}
            stroke={checked ? "#1D4ED8" : "#9CA3AF"}
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{ filter: "url(#toggle-rough)" }}
          />

          {/* Zweite Linie für Tiefe */}
          <path
            d={trackPath}
            fill="none"
            stroke={checked ? "#1E40AF" : "#6B7280"}
            strokeWidth="1"
            opacity="0.3"
            transform="translate(1, 1)"
          />

          {/* Knob */}
          <g
            style={{
              transition: "transform 0.2s ease-out",
            }}
          >
            {/* Knob Schatten */}
            <path
              d={knobPath(knobX)}
              fill="#1E40AF"
              opacity="0.15"
              transform="translate(2, 2)"
            />
            
            {/* Knob Hauptform */}
            <path
              d={knobPath(knobX)}
              fill="#FFFFFF"
              stroke="#2563EB"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Knob innere Linie */}
            <path
              d={knobPath(knobX)}
              fill="none"
              stroke="#3B82F6"
              strokeWidth="1"
              opacity="0.4"
              transform="scale(0.85)"
              style={{ transformOrigin: `${knobX}px ${height / 2}px` }}
            />
          </g>
        </svg>
      </button>

      {label && (
        <span className="font-['Architects Daughter',_cursive] text-xl text-[#1E40AF]">
          {label}
        </span>
      )}
    </label>
  );
}
