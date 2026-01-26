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
        <label className="block font-['Google Sans',_sans-serif] text-xl text-[#1E40AF] mb-2">
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
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
          <path
            d="M0,0 L${width},0 L${width},${height} L0,${height} Z"
            className="stroke-[#2563EB] stroke-[3] fill-none"
            filter="url(#input-rough)"
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
             font-['Google Sans',_sans-serif] text-xl text-[#1E40AF]
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
        <label className="block font-['Google Sans',_sans-serif] text-xl text-[#1E40AF] mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
        >
          <defs>
            <filter
              id="textarea-rough"
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
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="1"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
          <path
            d="M0,0 L${width},0 L${width},${height} L0,${height} Z"
            className="stroke-[#2563EB] stroke-[3] fill-none"
            filter="url(#textarea-rough)"
          />
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
             font-['Google Sans',_sans-serif] text-xl text-[#1E40AF]
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
