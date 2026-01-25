"use client";

import React, { useMemo } from "react";

interface SketchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  label?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export function SketchInput({
  value,
  onChange,
  placeholder = "",
  type = "text",
  label,
  icon,
  disabled = false,
  className = "",
}: SketchInputProps) {
  // Jitter für handgezeichneten Effekt
  const jitter = useMemo(() => {
    return Array.from({ length: 8 }, () => (Math.random() - 0.5) * 4);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block font-['Architects Daughter',_cursive] text-xl text-[#1E40AF] mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="input-rough" x="-5%" y="-5%" width="110%" height="110%">
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

          {/* Handgezeichneter Rahmen */}
          <path
            d={`
              M ${3 + jitter[0]}% ${10 + jitter[1]}%
              Q ${25}% ${-2}%, ${50}% ${8 + jitter[2]}%
              Q ${75}% ${-2}%, ${97 + jitter[3]}% ${10}%
              Q ${102}% ${30}%, ${98}% ${50}%
              Q ${102}% ${70}%, ${97 + jitter[4]}% ${90}%
              Q ${75}% ${102}%, ${50}% ${92 + jitter[5]}%
              Q ${25}% ${102}%, ${3 + jitter[6]}% ${90}%
              Q ${-2}% ${70}%, ${2}% ${50}%
              Q ${-2}% ${30}%, ${3 + jitter[7]}% ${10}%
              Z
            `}
            fill="#FFFFFF"
            stroke="#2563EB"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{ filter: "url(#input-rough)" }}
          />

          {/* Innere Linie */}
          <path
            d={`
              M ${5}% ${15}%
              Q ${25}% ${5}%, ${50}% ${12}%
              Q ${75}% ${5}%, ${95}% ${15}%
            `}
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1"
            opacity="0.3"
            strokeLinecap="round"
          />
        </svg>

        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            relative z-10
            w-full
            ${icon ? "pl-12" : "px-5"} py-4
            bg-transparent
            font-['Architects Daughter',_cursive] text-xl text-[#1E40AF]
            placeholder:text-[#9CA3AF]
            focus:outline-none
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
        />
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-[#2563EB]/40">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

// Textarea Variante
interface SketchTextareaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  rows?: number;
  disabled?: boolean;
  className?: string;
}

export function SketchTextarea({
  value,
  onChange,
  placeholder = "",
  label,
  rows = 4,
  disabled = false,
  className = "",
}: SketchTextareaProps) {
  const jitter = useMemo(() => {
    return Array.from({ length: 8 }, () => (Math.random() - 0.5) * 4);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block font-['Architects Daughter',_cursive] text-xl text-[#1E40AF] mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="textarea-rough" x="-5%" y="-5%" width="110%" height="110%">
              <feTurbulence
                type="turbulence"
                baseFrequency="0.03"
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

          {/* Handgezeichneter Rahmen */}
          <path
            d={`
              M ${3 + jitter[0]}% ${3 + jitter[1]}%
              Q ${25}% ${-1}%, ${50}% ${2 + jitter[2]}%
              Q ${75}% ${-1}%, ${97 + jitter[3]}% ${3}%
              Q ${101}% ${25}%, ${98}% ${50}%
              Q ${101}% ${75}%, ${97 + jitter[4]}% ${97}%
              Q ${75}% ${101}%, ${50}% ${98 + jitter[5]}%
              Q ${25}% ${101}%, ${3 + jitter[6]}% ${97}%
              Q ${-1}% ${75}%, ${2}% ${50}%
              Q ${-1}% ${25}%, ${3 + jitter[7]}% ${3}%
              Z
            `}
            fill="#FFFFFF"
            stroke="#2563EB"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{ filter: "url(#textarea-rough)" }}
          />

          {/* Linien im Hintergrund (wie Notizpapier) */}
          {Array.from({ length: rows }).map((_, i) => (
            <path
              key={i}
              d={`
                M ${8}% ${20 + (i * 70) / rows}%
                Q ${50}% ${18 + (i * 70) / rows + (Math.random() - 0.5) * 2}%, ${92}% ${20 + (i * 70) / rows}%
              `}
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="1"
              strokeLinecap="round"
            />
          ))}
        </svg>

        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          className={`
            relative z-10
            w-full
            px-5 py-4
            bg-transparent
            font-['Architects Daughter',_cursive] text-xl text-[#1E40AF]
            placeholder:text-[#9CA3AF]
            focus:outline-none
            resize-none
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
        />
      </div>
    </div>
  );
}
