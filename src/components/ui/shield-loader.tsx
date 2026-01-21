import type React from "react";
import "./shield-loader.css";
import { Image } from "lucide-react";

/**
 * Ein Ladebildschirm, der ein Schild aus vielen einzelnen Partikeln aufbaut.
 * Jedes Partikel erscheint mit einer leichten Verzögerung und einem "Rauch"-Effekt,
 * um einen dynamischen und modernen Ladeeffekt zu erzeugen.
 */
const ShieldLoader: React.FC = () => {
  // Anzahl der Partikel, aus denen das Schild aufgebaut wird.
  const particleCount = 150;

  return (
    // Der Hauptcontainer, der den gesamten Bildschirm einnimmt
    <div className="loader-container">
      {/* Das Photo-Icon, das hinter dem Schild hervorlugt */}
      <div className="peeking-photo-icon">
        <Image strokeWidth={1.5} />
      </div>

      {/* Der Container, der die Form des Schildes hat und die Partikel enthält */}
      <div className="shield-container">
        {/* Generiert die Partikel-Elemente */}
        {Array.from({ length: particleCount }).map((_, i) => (
          <div
            key={i}
            className="particle"
            // Deterministische Verzögerung (SPEED UP: Faktor 0.25 -> 0.1, 0.05 -> 0.02)
            style={{
              animationDelay: `${(i % 10) * 0.1 + Math.floor(i / 10) * 0.02}s`,
            }}
          />
        ))}
        {/* Strukturlinien für das Schild */}
        <div className="shield-structure">
          <div className="structure-line line-1" />
          <div className="structure-line line-2" />
          <div className="structure-line line-3" />
          <div className="structure-line line-4" />
        </div>
      </div>
      {/* Der Text, der nach einer kurzen Verzögerung in der Mitte erscheint */}
      <div className="loading-text">LÄDT...</div>
    </div>
  );
};

export default ShieldLoader;
