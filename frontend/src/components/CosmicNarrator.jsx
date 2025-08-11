import { useState, useEffect } from "react";
import AITTSPlayer from "./AITTSPlayer";
import SyncGlowingEyesAvatar from "./SyncGlowingEyesAvatar";
import AmbientSynth from "./AmbientSynth";

const captions = [
  'Zylox from Orion: “The horizon whispers secrets only the stars can hear.”',
  'Nira of the Azure Veil: “Morning dawns over alien skies, awakening endless possibilities.”',
  'Kex’thar the Luminary: “In neon light, we find the pulse of the cosmos.”',
];

export default function CosmicNarrator() {
  const [index, setIndex] = useState(0);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    if (speaking) return; // wait for speech to finish
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % captions.length);
    }, 20000);
    return () => clearTimeout(timer);
  }, [index, speaking]);

  return (
    <>
      <AmbientSynth play={speaking} />
      <SyncGlowingEyesAvatar speaking={speaking} />
      <div
        style={{
          color: "#00ffff",
          fontFamily: "Orbitron, monospace",
          marginTop: "1rem",
          textAlign: "center",
          maxWidth: 600,
          userSelect: "none",
          textShadow: "0 0 12px #00ffff",
        }}
      >
        {captions[index]}
      </div>
      <AITTSPlayer
        text={captions[index]}
        onStart={() => setSpeaking(true)}
        onEnd={() => setSpeaking(false)}
      />
    </>
  );
}
