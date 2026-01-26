"use client";

import React, { useMemo } from "react";

interface SketchProgressProps {
  value: number; // 0-100
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  color?: string;
  className?: string;
}

export function SketchProgress({
  value,
  size = "md",
  showLabel = true,
  color = "#2563EB",
  className = "",
}: SketchProgressProps) {
  // Jitter für handgezeichneten Effekt
  const jitter = useMemo(() => {
    return Array.from({ length: 10 }, () => (Math.random() - 0.5) * 4);
  }, []);

  const sizes = {
    sm: { height: 12, strokeWidth: 2 },
    md: { height: 20, strokeWidth: 3 },
    lg: { height: 28, strokeWidth: 4 },
  };

  const { height, strokeWidth } = sizes[size];
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div className={`relative ${className}`}>
      <svg
        width="100%"
        height={height + 8}
        viewBox={`0 0 200 ${height + 8}`}
        preserveAspectRatio="none"
        className="w-full"
      >
        <defs>
          <filter
            id="progress-rough"
            x="-5%"
            y="-10%"
            width="110%"
            height="120%"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.04"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
          </filter>
        </defs>

        {/* Hintergrund-Track */}
        <path
          d={`
            M ${height / 2 + jitter[0]} ${4 + jitter[1]}
            Q ${50} ${2}, ${100} ${4 + jitter[2]}
            Q ${150} ${2}, ${200 - height / 2 + jitter[3]} ${4}
            Q ${200} ${height / 2 + 4}, ${200 - height / 2} ${height + 4 + jitter[4]}
            Q ${150} ${height + 6}, ${100} ${height + 4 + jitter[5]}
            Q ${50} ${height + 6}, ${height / 2 + jitter[6]} ${height + 4}
            Q ${0} ${height / 2 + 4}, ${height / 2 + jitter[7]} ${4}
            Z
          `}
          fill="#E5E7EB"
          stroke="#9CA3AF"
          strokeWidth={strokeWidth - 1}
          strokeLinecap="round"
          style={{ filter: "url(#progress-rough)" }}
        />

        {/* Fortschritts-Balken */}
        {clampedValue > 0 && (
          <path
            d={`
              M ${height / 2 + jitter[0]} ${4 + jitter[1]}
              Q ${(clampedValue / 100) * 50} ${2}, ${(clampedValue / 100) * 100} ${4 + jitter[2]}
              Q ${(clampedValue / 100) * 150} ${2}, ${Math.min((clampedValue / 100) * 200, 200 - height / 2) + jitter[3]} ${4}
              Q ${(clampedValue / 100) * 200} ${height / 2 + 4}, ${Math.min((clampedValue / 100) * 200, 200 - height / 2)} ${height + 4 + jitter[4]}
              Q ${(clampedValue / 100) * 150} ${height + 6}, ${(clampedValue / 100) * 100} ${height + 4 + jitter[5]}
              Q ${(clampedValue / 100) * 50} ${height + 6}, ${height / 2 + jitter[6]} ${height + 4}
              Q ${0} ${height / 2 + 4}, ${height / 2 + jitter[7]} ${4}
              Z
            `}
            fill={color}
            stroke={color}
            strokeWidth={strokeWidth - 1}
            strokeLinecap="round"
            style={{ filter: "url(#progress-rough)" }}
          />
        )}

        {/* Obere Highlight-Linie */}
        <path
          d={`
            M ${height / 2 + 2 + jitter[8]} ${6}
            Q ${50} ${4}, ${100} ${6}
            Q ${150} ${4}, ${(clampedValue / 100) * 180 + jitter[9]} ${6}
          `}
          fill="none"
          stroke="white"
          strokeWidth="1"
          opacity="0.4"
          strokeLinecap="round"
        />
      </svg>

      {/* Label */}
      {showLabel && (
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 font-['Google Sans',_sans-serif] text-lg font-bold"
          style={{ color }}
        >
          {Math.round(clampedValue)}%
        </span>
      )}
    </div>
  );
}

// Circular Progress Variante
interface SketchCircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  showLabel?: boolean;
}

export function SketchCircularProgress({
  value,
  size = 80,
  strokeWidth = 6,
  color = "#2563EB",
  showLabel = true,
}: SketchCircularProgressProps) {
  const jitter = useMemo(() => {
    return Array.from({ length: 30 }, () => (Math.random() - 0.5) * 2);
  }, []);

  const clampedValue = Math.max(0, Math.min(100, value));
  const radius = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;

  // Generiere handgezeichneten Kreis-Pfad
  const generateCirclePath = (progress: number) => {
    const segments = 32;
    const endAngle = (progress / 100) * Math.PI * 2;
    let path = "";

    for (let i = 0; i <= segments * (progress / 100); i++) {
      const angle = (i / segments) * Math.PI * 2 - Math.PI / 2;
      if (angle > endAngle - Math.PI / 2) break;

      const wobble = radius * 0.02 * (jitter[i % jitter.length] || 0);
      const x = cx + (radius + wobble) * Math.cos(angle);
      const y = cy + (radius + wobble) * Math.sin(angle);
      path += (i === 0 ? "M " : "L ") + `${x} ${y} `;
    }

    return path;
  };

  // Hintergrund-Kreis
  const backgroundPath = (() => {
    let path = "";
    const segments = 32;
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2 - Math.PI / 2;
      const wobble = radius * 0.02 * (jitter[i % jitter.length] || 0);
      const x = cx + (radius + wobble) * Math.cos(angle);
      const y = cy + (radius + wobble) * Math.sin(angle);
      path += (i === 0 ? "M " : "L ") + `${x} ${y} `;
    }
    return path + "Z";
  })();

  return (
    <div
      className="relative inline-block"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <filter
            id="circular-rough"
            x="-5%"
            y="-5%"
            width="110%"
            height="110%"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.03"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.5" />
          </filter>
        </defs>

        {/* Hintergrund */}
        <path
          d={backgroundPath}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          style={{ filter: "url(#circular-rough)" }}
        />

        {/* Fortschritt */}
        {clampedValue > 0 && (
          <path
            d={generateCirclePath(clampedValue)}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{ filter: "url(#circular-rough)" }}
          />
        )}
      </svg>

      {/* Label in der Mitte */}
      {showLabel && (
        <div
          className="absolute inset-0 flex items-center justify-center font-['Google Sans',_sans-serif] font-bold"
          style={{ color, fontSize: size * 0.25 }}
        >
          {Math.round(clampedValue)}%
        </div>
      )}
    </div>
  );
}
