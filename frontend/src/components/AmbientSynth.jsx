import { useEffect, useRef } from "react";

export default function AmbientSynth({ play }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (play) {
      audioRef.current.volume = 0.15;
      audioRef.current.loop = true;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [play]);

  return (
    <audio
      ref={audioRef}
      src="/ambient-synth-loop.mp3" // Add your ambient synth loop MP3 here in public folder
      preload="auto"
      aria-hidden="true"
    />
  );
}
