"use client";

import React, { useState } from "react";
import { SketchFilter } from "./SketchStyles";
import { SketchButton } from "./SketchButton";
import { SketchCard } from "./SketchCard";
import { SketchToggle } from "./SketchToggle";
import { SketchIcon } from "./SketchIcon";
import { SketchProgress, SketchCircularProgress } from "./SketchProgress";
import { SketchInput, SketchTextarea } from "./SketchInput";

export function SketchDemo() {
  const [toggleState, setToggleState] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [progress, setProgress] = useState(65);

  return (
    <div className="min-h-screen bg-[#FAFBFC] p-8">
      {/* SVG Filter Definitionen (einmal einbinden) */}
      <SketchFilter />

      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <h1 className="font-['Architects Daughter',_cursive] text-5xl text-[#1E40AF] text-center mb-2">
          Sketch UI Komponenten
        </h1>
        <p className="font-['Architects Daughter',_cursive] text-2xl text-[#3B82F6] text-center mb-12">
          Handgezeichneter Stil mit blauen Linien
        </p>

        {/* Icons Section */}
        <section className="mb-12">
          <h2 className="font-['Architects Daughter',_cursive] text-3xl text-[#1E40AF] mb-6">
            Icons
          </h2>
          <SketchCard>
            <div className="flex flex-wrap gap-6 items-center justify-center">
              <SketchIcon icon="shield" size={48} />
              <SketchIcon icon="photo" size={48} />
              <SketchIcon icon="clock" size={48} />
              <SketchIcon icon="key" size={48} />
              <SketchIcon icon="cloud" size={48} />
              <SketchIcon icon="folder" size={48} />
              <SketchIcon icon="check" size={48} />
              <SketchIcon icon="warning" size={48} color="#EF4444" />
            </div>
          </SketchCard>
        </section>

        {/* Buttons Section */}
        <section className="mb-12">
          <h2 className="font-['Architects Daughter',_cursive] text-3xl text-[#1E40AF] mb-6">
            Buttons
          </h2>
          <SketchCard>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <SketchButton variant="primary" size="sm">
                Klein
              </SketchButton>
              <SketchButton variant="primary" size="md">
                Normal
              </SketchButton>
              <SketchButton variant="primary" size="lg">
                Groß
              </SketchButton>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-center mt-6">
              <SketchButton variant="primary">Primär</SketchButton>
              <SketchButton variant="secondary">Sekundär</SketchButton>
              <SketchButton variant="outline">Outline</SketchButton>
            </div>
            <div className="flex justify-center mt-6">
              <SketchButton disabled>Deaktiviert</SketchButton>
            </div>
          </SketchCard>
        </section>

        {/* Cards Section */}
        <section className="mb-12">
          <h2 className="font-['Architects Daughter',_cursive] text-3xl text-[#1E40AF] mb-6">
            Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SketchCard variant="default">
              <div className="text-center">
                <SketchIcon icon="shield" size={40} className="mx-auto mb-3" />
                <h3 className="font-['Architects Daughter',_cursive] text-2xl text-[#1E40AF] mb-2">
                  Default Card
                </h3>
                <p className="font-['Architects Daughter',_cursive] text-lg text-[#6B7280]">
                  Standard Rahmen
                </p>
              </div>
            </SketchCard>

            <SketchCard variant="elevated">
              <div className="text-center">
                <SketchIcon icon="cloud" size={40} className="mx-auto mb-3" />
                <h3 className="font-['Architects Daughter',_cursive] text-2xl text-[#1E40AF] mb-2">
                  Elevated Card
                </h3>
                <p className="font-['Architects Daughter',_cursive] text-lg text-[#6B7280]">
                  Mit Schatten-Effekt
                </p>
              </div>
            </SketchCard>

            <SketchCard variant="outline">
              <div className="text-center">
                <SketchIcon icon="key" size={40} className="mx-auto mb-3" />
                <h3 className="font-['Architects Daughter',_cursive] text-2xl text-[#1E40AF] mb-2">
                  Outline Card
                </h3>
                <p className="font-['Architects Daughter',_cursive] text-lg text-[#6B7280]">
                  Transparenter Hintergrund
                </p>
              </div>
            </SketchCard>
          </div>
        </section>

        {/* Toggle Section */}
        <section className="mb-12">
          <h2 className="font-['Architects Daughter',_cursive] text-3xl text-[#1E40AF] mb-6">
            Toggle Switch
          </h2>
          <SketchCard>
            <div className="flex flex-col gap-4 items-center">
              <SketchToggle
                checked={toggleState}
                onChange={setToggleState}
                label="Backup aktivieren"
              />
              <p className="font-['Architects Daughter',_cursive] text-lg text-[#6B7280]">
                Status: {toggleState ? "An" : "Aus"}
              </p>
            </div>
          </SketchCard>
        </section>

        {/* Progress Section */}
        <section className="mb-12">
          <h2 className="font-['Architects Daughter',_cursive] text-3xl text-[#1E40AF] mb-6">
            Progress Bars
          </h2>
          <SketchCard>
            <div className="space-y-8">
              {/* Linear Progress */}
              <div>
                <p className="font-['Architects Daughter',_cursive] text-xl text-[#1E40AF] mb-3">
                  Linear Progress
                </p>
                <div className="space-y-4">
                  <SketchProgress value={25} size="sm" />
                  <SketchProgress value={progress} size="md" />
                  <SketchProgress value={90} size="lg" />
                </div>
              </div>

              {/* Circular Progress */}
              <div>
                <p className="font-['Architects Daughter',_cursive] text-xl text-[#1E40AF] mb-3">
                  Circular Progress
                </p>
                <div className="flex gap-6 justify-center">
                  <SketchCircularProgress value={25} size={60} />
                  <SketchCircularProgress value={progress} size={80} />
                  <SketchCircularProgress value={90} size={100} />
                </div>
              </div>

              {/* Slider */}
              <div>
                <p className="font-['Architects Daughter',_cursive] text-xl text-[#1E40AF] mb-3">
                  Wert anpassen: {progress}%
                </p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(e) => setProgress(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </SketchCard>
        </section>

        {/* Input Section */}
        <section className="mb-12">
          <h2 className="font-['Architects Daughter',_cursive] text-3xl text-[#1E40AF] mb-6">
            Input Felder
          </h2>
          <SketchCard>
            <div className="space-y-6 max-w-md mx-auto">
              <SketchInput
                label="Benutzername"
                value={inputValue}
                onChange={setInputValue}
                placeholder="Dein Name..."
              />

              <SketchTextarea
                label="Notizen"
                value={textareaValue}
                onChange={setTextareaValue}
                placeholder="Schreibe hier deine Notizen..."
                rows={4}
              />
            </div>
          </SketchCard>
        </section>

        {/* Kombiniertes Beispiel */}
        <section className="mb-12">
          <h2 className="font-['Architects Daughter',_cursive] text-3xl text-[#1E40AF] mb-6">
            Kombiniertes Beispiel: Backup Status
          </h2>
          <SketchCard variant="elevated">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <SketchIcon
                  icon={toggleState ? "shield" : "warning"}
                  size={64}
                  color={toggleState ? "#22C55E" : "#EF4444"}
                />
              </div>
              
              <h3 className="font-['Architects Daughter',_cursive] text-3xl text-[#1E40AF] mb-2">
                {toggleState ? "Backup Aktiv" : "Backup Inaktiv"}
              </h3>
              
              <p className="font-['Architects Daughter',_cursive] text-xl text-[#6B7280] mb-6">
                {toggleState
                  ? "Deine Fotos werden geschützt"
                  : "Aktiviere Backup für Schutz"}
              </p>

              {toggleState && (
                <div className="w-full max-w-xs mb-6">
                  <SketchProgress value={78} size="md" color="#22C55E" />
                  <p className="font-['Architects Daughter',_cursive] text-lg text-[#6B7280] mt-2">
                    2.847 Fotos gesichert
                  </p>
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <SketchToggle
                  checked={toggleState}
                  onChange={setToggleState}
                />
                <span className="font-['Architects Daughter',_cursive] text-xl text-[#1E40AF]">
                  {toggleState ? "Deaktivieren" : "Aktivieren"}
                </span>
              </div>

              <SketchButton
                variant={toggleState ? "secondary" : "primary"}
                size="lg"
                onClick={() => console.log("Backup action")}
              >
                {toggleState ? "Jetzt Sichern" : "Backup Starten"}
              </SketchButton>
            </div>
          </SketchCard>
        </section>

        {/* Footer */}
        <footer className="text-center py-8">
          <p className="font-['Architects Daughter',_cursive] text-xl text-[#9CA3AF]">
            Handgezeichnet mit 💙
          </p>
        </footer>
      </div>
    </div>
  );
}
