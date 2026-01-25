"use client";

import React, { useMemo } from "react";

interface SketchCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "elevated" | "outline";
}

export function SketchCard({
  children,
  className = "",
  onClick,
  variant = "default",
}: SketchCardProps) {
  // Generiere Jitter für handgezeichnete Ecken
  const jitter = useMemo(() => {
    return Array.from({ length: 12 }, () => (Math.random() - 0.5) * 6);
  }, []);

  const variantStyles = {
    default: {
      fill: "#FFFFFF",
      stroke: "#2563EB",
      strokeWidth: 3,
    },
    elevated: {
      fill: "#FFFFFF",
      stroke: "#2563EB",
      strokeWidth: 4,
    },
    outline: {
      fill: "transparent",
      stroke: "#3B82F6",
      strokeWidth: 2,
    },
  };

  const style = variantStyles[variant];

  return (
    <div
      onClick={onClick}
      className={`
        relative
        ${onClick ? "cursor-pointer hover:scale-[1.01] active:scale-[0.99]" : ""}
        transition-transform duration-150
        ${className}
      `}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="card-rough" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.04"
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
        
        {/* Hauptrahmen - handgezeichnet */}
        <path
          d={`
            M ${5 + jitter[0]}% ${3 + jitter[1]}%
            Q ${25}% ${-0.5 + jitter[2]}%, ${50}% ${2 + jitter[3]}%
            Q ${75}% ${-0.5}%, ${95 + jitter[4]}% ${3}%
            Q ${100.5}% ${25}%, ${97}% ${50}%
            Q ${100.5}% ${75}%, ${95 + jitter[5]}% ${97}%
            Q ${75}% ${100.5}%, ${50}% ${97 + jitter[6]}%
            Q ${25}% ${100.5}%, ${5 + jitter[7]}% ${97}%
            Q ${-0.5}% ${75}%, ${3}% ${50}%
            Q ${-0.5}% ${25}%, ${5 + jitter[8]}% ${3}%
            Z
          `}
          fill={style.fill}
          stroke={style.stroke}
          strokeWidth={style.strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "url(#card-rough)" }}
        />
        
        {/* Zweite Linie für mehr Tiefe */}
        <path
          d={`
            M ${6 + jitter[9]}% ${4 + jitter[10]}%
            Q ${25}% ${0.5}%, ${50}% ${3}%
            Q ${75}% ${0.5}%, ${94 + jitter[11]}% ${4}%
            Q ${99.5}% ${25}%, ${96}% ${50}%
            Q ${99.5}% ${75}%, ${94}% ${96}%
            Q ${75}% ${99.5}%, ${50}% ${96}%
            Q ${25}% ${99.5}%, ${6}% ${96}%
            Q ${0.5}% ${75}%, ${4}% ${50}%
            Q ${0.5}% ${25}%, ${6}% ${4}%
            Z
          `}
          fill="none"
          stroke={style.stroke}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Schatten-Effekt für elevated */}
        {variant === "elevated" && (
          <path
            d={`
              M ${7}% ${6}%
              Q ${25}% ${2}%, ${50}% ${5}%
              Q ${75}% ${2}%, ${93}% ${6}%
              Q ${98}% ${25}%, ${95}% ${50}%
              Q ${98}% ${75}%, ${93}% ${95}%
              Q ${75}% ${98}%, ${50}% ${95}%
              Q ${25}% ${98}%, ${7}% ${95}%
              Q ${2}% ${75}%, ${5}% ${50}%
              Q ${2}% ${25}%, ${7}% ${6}%
              Z
            `}
            fill="none"
            stroke="#1E40AF"
            strokeWidth="2"
            opacity="0.2"
            transform="translate(3, 3)"
          />
        )}
      </svg>
      
      {/* Inhalt */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
}
