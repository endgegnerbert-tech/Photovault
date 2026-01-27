"use client";

import React, { useMemo } from "react";

export interface SketchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function SketchButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  type = "button",
  ...props
}: SketchButtonProps) {
  // Generiere einmalig die "Jitter"-Werte für den handgezeichneten Effekt
  const jitterValues = useMemo(() => {
    return Array.from({ length: 8 }, () => (Math.random() - 0.5) * 4);
  }, []);

  const sizes = {
    sm: { width: 120, height: 40, fontSize: "16px", padding: "8px 16px" },
    md: { width: 160, height: 50, fontSize: "18px", padding: "10px 24px" },
    lg: { width: 200, height: 60, fontSize: "20px", padding: "14px 32px" },
  };

  const colors = {
    primary: {
      stroke: "#2563EB",
      fill: "#2563EB",
      text: "#FFFFFF",
      hoverStroke: "#1D4ED8",
    },
    secondary: {
      stroke: "#3B82F6",
      fill: "#EFF6FF",
      text: "#2563EB",
      hoverStroke: "#2563EB",
    },
    outline: {
      stroke: "#2563EB",
      fill: "transparent",
      text: "#2563EB",
      hoverStroke: "#1D4ED8",
    },
  };

  const { width, height, fontSize, padding } = sizes[size];
  const { stroke, fill, text } = colors[variant];

  // Handgezeichneter Rechteck-Pfad
  const sketchPath = `
    M ${2 + jitterValues[0]} ${2 + jitterValues[1]}
    Q ${width / 4 + jitterValues[2]} ${-1 + jitterValues[3]}, ${width / 2} ${2 + jitterValues[4]}
    Q ${(3 * width) / 4 + jitterValues[5]} ${-1}, ${width - 2 + jitterValues[6]} ${2}
    Q ${width + 1} ${height / 4}, ${width - 2} ${height / 2}
    Q ${width + 1} ${(3 * height) / 4}, ${width - 2 + jitterValues[7]} ${height - 2}
    Q ${(3 * width) / 4} ${height + 1}, ${width / 2} ${height - 2}
    Q ${width / 4} ${height + 1}, ${2 + jitterValues[0]} ${height - 2}
    Q ${-1} ${(3 * height) / 4}, ${2} ${height / 2}
    Q ${-1} ${height / 4}, ${2 + jitterValues[1]} ${2}
    Z
  `;

  // Zweiter Durchgang für den "mehrfach gezeichnet" Effekt
  const sketchPath2 = `
    M ${3 + jitterValues[1]} ${3 + jitterValues[0]}
    Q ${width / 4 + jitterValues[3]} ${0 + jitterValues[2]}, ${width / 2} ${3}
    Q ${(3 * width) / 4} ${0}, ${width - 3 + jitterValues[4]} ${3}
    Q ${width} ${height / 4}, ${width - 3} ${height / 2}
    Q ${width} ${(3 * height) / 4}, ${width - 3 + jitterValues[5]} ${height - 3}
    Q ${(3 * width) / 4} ${height}, ${width / 2} ${height - 3}
    Q ${width / 4} ${height}, ${3 + jitterValues[6]} ${height - 3}
    Q ${0} ${(3 * height) / 4}, ${3} ${height / 2}
    Q ${0} ${height / 4}, ${3 + jitterValues[7]} ${3}
    Z
  `;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`
        relative inline-block
        transition-transform duration-150
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-[1.02] active:scale-[0.98]"}
        ${className}
      `}
      style={{ width, height }}
      {...props}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Hintergrund-Füllung */}
        <path d={sketchPath} fill={fill} stroke="none" />
        {/* Erste Linie (dicker) */}
        <path
          d={sketchPath}
          fill="none"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "url(#rough-edge)" }}
        />
        {/* Zweite Linie (dünner, leicht versetzt) */}
        <path
          d={sketchPath2}
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      </svg>

      {/* Text */}
      <span
        className="relative z-10 font-['Google Sans',_sans-serif] font-bold truncate px-2"
        style={{
          fontSize,
          color: text,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        {children}
      </span>
    </button>
  );
}
