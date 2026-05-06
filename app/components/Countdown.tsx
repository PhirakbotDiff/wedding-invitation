"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-12-12T15:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(weddingDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(weddingDate - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return (
    <div className="text-2xl text-sage-dark mt-6 justify-center items-center flex flex-col">
      {/* {days} Days Until Our Wedding 💚 */}

    <h2 className="text-[#5C6445] text-4xl font-light">
      219
    </h2>

    <p className="uppercase tracking-[4px] text-xs text-[#8A9273] mt-2">
      Days Until Our Wedding
    </p>
    </div>
  );
}
