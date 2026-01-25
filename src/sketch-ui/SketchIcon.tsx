"use client";

import React, { useMemo } from "react";

interface SketchIconProps {
  icon: "shield" | "photo" | "clock" | "key" | "cloud" | "folder" | "check" | "warning";
  size?: number;
  color?: string;
  className?: string;
}

export function SketchIcon({
  icon,
  size = 48,
  color = "#2563EB",
  className = "",
}: SketchIconProps) {
  // Generiere Jitter-Werte
  const jitter = useMemo(() => {
    return Array.from({ length: 20 }, () => (Math.random() - 0.5) * 2);
  }, []);

  const strokeWidth = size > 40 ? 3 : 2;

  const renderIcon = () => {
    switch (icon) {
      case "shield":
        return (
          <>
            {/* Schild-Form */}
            <path
              d={`
                M ${size / 2 + jitter[0]} ${4 + jitter[1]}
                Q ${size - 6 + jitter[2]} ${6}, ${size - 6} ${size / 3}
                Q ${size - 6} ${size * 0.6}, ${size / 2} ${size - 4 + jitter[3]}
                Q ${6} ${size * 0.6}, ${6 + jitter[4]} ${size / 3}
                Q ${6} ${6}, ${size / 2 + jitter[5]} ${4}
                Z
              `}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Checkmark im Schild */}
            <path
              d={`
                M ${size * 0.3 + jitter[6]} ${size * 0.5}
                L ${size * 0.45} ${size * 0.65 + jitter[7]}
                L ${size * 0.7 + jitter[8]} ${size * 0.35}
              `}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case "photo":
        return (
          <>
            {/* Rahmen */}
            <path
              d={`
                M ${6 + jitter[0]} ${8 + jitter[1]}
                L ${size - 6 + jitter[2]} ${8}
                L ${size - 6} ${size - 8 + jitter[3]}
                L ${6 + jitter[4]} ${size - 8}
                Z
              `}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Berge */}
            <path
              d={`
                M ${10 + jitter[5]} ${size - 14}
                L ${size * 0.35} ${size * 0.45 + jitter[6]}
                L ${size * 0.5} ${size * 0.55}
                L ${size * 0.65 + jitter[7]} ${size * 0.4}
                L ${size - 10} ${size - 14 + jitter[8]}
              `}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth - 0.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Sonne */}
            <circle
              cx={size * 0.7}
              cy={size * 0.3}
              r={size * 0.08}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth - 0.5}
            />
          </>
        );

      case "clock":
        return (
          <>
            {/* Uhr-Kreis */}
            <path
              d={(() => {
                let path = "";
                const segments = 24;
                const cx = size / 2;
                const cy = size / 2;
                const r = size / 2 - 6;
                for (let i = 0; i <= segments; i++) {
                  const angle = (i / segments) * Math.PI * 2 - Math.PI / 2;
                  const wobble = r * 0.04 * (jitter[i % 10] || 0);
                  const x = cx + (r + wobble) * Math.cos(angle);
                  const y = cy + (r + wobble) * Math.sin(angle);
                  path += (i === 0 ? "M " : "L ") + `${x} ${y} `;
                }
                return path + "Z";
              })()}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* Stundenzeiger */}
            <path
              d={`
                M ${size / 2 + jitter[0]} ${size / 2}
                L ${size / 2 - size * 0.15 + jitter[1]} ${size / 2 - size * 0.15}
              `}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* Minutenzeiger */}
            <path
              d={`
                M ${size / 2} ${size / 2 + jitter[2]}
                L ${size / 2 + size * 0.2} ${size / 2 - size * 0.25 + jitter[3]}
              `}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* Mitte */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={3}
              fill={color}
            />
          </>
        );

      case "key":
        return (
          <>
            {/* Schlüsselkopf */}
            <path
              d={(() => {
                let path = "";
                const segments = 16;
                const cx = size * 0.3;
                const cy = size * 0.35;
                const r = size * 0.2;
                for (let i = 0; i <= segments; i++) {
                  const angle = (i / segments) * Math.PI * 2;
                  const wobble = r * 0.06 * (jitter[i % 10] || 0);
                  const x = cx + (r + wobble) * Math.cos(angle);
                  const y = cy + (r + wobble) * Math.sin(angle);
                  path += (i === 0 ? "M " : "L ") + `${x} ${y} `;
                }
                return path + "Z";
              })()}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
            />
            {/* Innerer Kreis */}
            <circle
              cx={size * 0.3}
              cy={size * 0.35}
              r={size * 0.08}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth - 0.5}
            />
            {/* Schaft */}
            <path
              d={`
                M ${size * 0.45 + jitter[0]} ${size * 0.45}
                L ${size - 8 + jitter[1]} ${size - 10}
              `}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* Zähne */}
            <path
              d={`
                M ${size * 0.65 + jitter[2]} ${size * 0.6}
                L ${size * 0.72} ${size * 0.68 + jitter[3]}
                M ${size * 0.75} ${size * 0.7 + jitter[4]}
                L ${size * 0.82 + jitter[5]} ${size * 0.78}
              `}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          </>
        );

      case "cloud":
        return (
          <path
            d={`
              M ${size * 0.25 + jitter[0]} ${size * 0.65}
              Q ${size * 0.1} ${size * 0.65}, ${size * 0.1 + jitter[1]} ${size * 0.5}
              Q ${size * 0.1} ${size * 0.35}, ${size * 0.25} ${size * 0.35 + jitter[2]}
              Q ${size * 0.3} ${size * 0.2}, ${size * 0.45 + jitter[3]} ${size * 0.2}
              Q ${size * 0.55} ${size * 0.15 + jitter[4]}, ${size * 0.65} ${size * 0.25}
              Q ${size * 0.8} ${size * 0.2}, ${size * 0.85 + jitter[5]} ${size * 0.35}
              Q ${size * 0.95} ${size * 0.4 + jitter[6]}, ${size * 0.9} ${size * 0.55}
              Q ${size * 0.95} ${size * 0.65}, ${size * 0.8 + jitter[7]} ${size * 0.65}
              Z
            `}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );

      case "folder":
        return (
          <>
            {/* Ordner-Lasche */}
            <path
              d={`
                M ${8 + jitter[0]} ${size * 0.35}
                L ${8} ${size * 0.25 + jitter[1]}
                L ${size * 0.35 + jitter[2]} ${size * 0.25}
                L ${size * 0.4} ${size * 0.35 + jitter[3]}
              `}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Ordner-Körper */}
            <path
              d={`
                M ${8 + jitter[4]} ${size * 0.35}
                L ${size - 8 + jitter[5]} ${size * 0.35}
                L ${size - 8} ${size - 10 + jitter[6]}
                L ${8 + jitter[7]} ${size - 10}
                Z
              `}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case "check":
        return (
          <path
            d={`
              M ${size * 0.2 + jitter[0]} ${size * 0.5}
              L ${size * 0.4 + jitter[1]} ${size * 0.7 + jitter[2]}
              L ${size * 0.8 + jitter[3]} ${size * 0.3}
            `}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth + 1}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );

      case "warning":
        return (
          <>
            {/* Dreieck */}
            <path
              d={`
                M ${size / 2 + jitter[0]} ${8}
                L ${size - 8 + jitter[1]} ${size - 10}
                L ${8 + jitter[2]} ${size - 10}
                Z
              `}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Ausrufezeichen */}
            <path
              d={`
                M ${size / 2 + jitter[3]} ${size * 0.35}
                L ${size / 2} ${size * 0.55 + jitter[4]}
              `}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx={size / 2}
              cy={size * 0.7}
              r={2.5}
              fill={color}
            />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      <defs>
        <filter id={`icon-rough-${icon}`} x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.03"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="0.5"
          />
        </filter>
      </defs>
      <g style={{ filter: `url(#icon-rough-${icon})` }}>
        {renderIcon()}
      </g>
    </svg>
  );
}
