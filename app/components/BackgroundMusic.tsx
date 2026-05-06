"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playMusic = () => {
      audioRef.current?.play();
    };

    document.addEventListener("click", playMusic, { once: true });

    return () => {
      document.removeEventListener("click", playMusic);
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/music.mp3" type="audio/mpeg" />
    </audio>
  );
}
