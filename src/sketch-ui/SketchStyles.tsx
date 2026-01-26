"use client";

import React from "react";

/**
 * Sketch UI Design System
 * ========================
 * Handgezeichneter blauer Linien-Stil
 *
 * FARBEN:
 * - Primär: #2563EB (Kräftiges Blau)
 * - Linien: #3B82F6 (Helleres Blau für Striche)
 * - Hintergrund: #FAFBFC (Fast-Weiß)
 * - Text: #1E40AF (Dunkles Blau)
 *
 * STIL-EIGENSCHAFTEN:
 * - Variable Strichstärke (2-4px)
 * - Leichte Rotation für Handgezeichneten-Effekt
 * - Raue, organische Linien
 * - Jitter/Wobble durch SVG Filter
 */

// SVG Filter für den "Handgezeichnet"-Effekt
export const SketchFilter = () => (
  <svg width="0" height="0" style={{ position: "absolute" }}>
    <defs>
      <filter id="sketch-filter" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.02"
          numOctaves="3"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="2"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
      <filter id="rough-edge" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence
          type="turbulence"
          baseFrequency="0.05"
          numOctaves="2"
          result="noise"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
      </filter>
    </defs>
  </svg>
);

// CSS Klassen für Sketch-Stil
export const sketchClasses = {
  // Container mit handgezeichnetem Rand
  container: "relative bg-[#FAFBFC]",

  // Text-Stile
  heading: "font-['Google Sans',_sans-serif] text-[#1E40AF] text-3xl font-bold",
  subheading: "font-['Google Sans',_sans-serif] text-[#3B82F6] text-xl",
  body: "font-['Google Sans',_sans-serif] text-[#1E40AF] text-lg",

  // Interaktive Elemente
  button:
    "relative cursor-pointer transition-transform hover:scale-105 active:scale-95",

  // Linien
  line: "stroke-[#2563EB] stroke-[3] fill-none",
};

// Wiederverwendbare SVG-Pfade für verschiedene Formen
export const sketchPaths = {
  // Rechteck mit unregelmäßigen Linien
  rectangle: (width: number, height: number, jitter = 3) => {
    const j = () => (Math.random() - 0.5) * jitter;
    return `
      M ${j()} ${j()}
      L ${width + j()} ${j()}
      L ${width + j()} ${height + j()}
      L ${j()} ${height + j()}
      Z
    `;
  },

  // Kreis mit leichter Unregelmäßigkeit
  circle: (cx: number, cy: number, r: number, segments = 24) => {
    let path = "";
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const jitter = r * 0.03 * (Math.random() - 0.5);
      const x = cx + (r + jitter) * Math.cos(angle);
      const y = cy + (r + jitter) * Math.sin(angle);
      path += (i === 0 ? "M " : "L ") + `${x} ${y} `;
    }
    return path + "Z";
  },
};
