"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2027-01-16T15:00:00").getTime();

function formatTimeLeft(ms: number) {
  const safe = Math.max(ms, 0);
  const days = Math.floor(safe / (1000 * 60 * 60 * 24));
  const hours = Math.floor((safe / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((safe / (1000 * 60)) % 60);
  const seconds = Math.floor((safe / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(WEDDING_DATE - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(WEDDING_DATE - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdown = useMemo(() => formatTimeLeft(timeLeft), [timeLeft]);

  const units = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Minutes", value: countdown.minutes },
    { label: "Seconds", value: countdown.seconds },
  ];

  return (
    <section className="relative overflow-hidden rounded-[30px] border border-white/50 px-6 py-8 backdrop-blur-xl">
      <div className="absolute inset-x-10 top-0 h-24 rounded-full blur-3xl" />

      <div className="relative z-10 text-center">
        <p className="mb-2 text-xs tracking-[4px] text-[#8A9273] uppercase">Wedding Countdown</p>
        <h2 className="mb-6 text-3xl text-[#5C6445]">Counting Every Precious Moment</h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {units.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-[#E6DEC9] px-3 py-4"
            >
              <p className="text-3xl font-light text-[#A67C52]">{String(item.value).padStart(2, "0")}</p>
              <p className="mt-1 text-[11px] tracking-[3px] text-[#8A9273] uppercase">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
