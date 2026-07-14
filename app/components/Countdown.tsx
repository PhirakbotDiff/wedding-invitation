"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/app/context/LanguageContext";
import { t } from "@/app/lib/i18n";

const WEDDING_DATE = new Date("2027-01-16T15:00:00").getTime();

function formatTimeLeft(ms: number) {
  const safe = Math.max(ms, 0);
  const days = Math.floor(safe / (1000 * 60 * 60 * 24));
  const hours = Math.floor((safe / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((safe / (1000 * 60)) % 60);
  const seconds = Math.floor((safe / 1000) % 60);
  return { days, hours, minutes, seconds };
}

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const calendarDays = [
  "", "", "", "", "",
  ...Array.from({ length: 31 }, (_, i) => String(i + 1)),
];

export default function Countdown() {
  const { lang } = useLang();
  const tx = t(lang);

  const [timeLeft, setTimeLeft] = useState(WEDDING_DATE - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(WEDDING_DATE - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const countdown = useMemo(() => formatTimeLeft(timeLeft), [timeLeft]);

  const units = [
    { label: tx.days, value: countdown.days },
    { label: tx.hours, value: countdown.hours },
    { label: tx.minutes, value: countdown.minutes },
    { label: tx.seconds, value: countdown.seconds },
  ];

  return (
    <section className="relative overflow-hidden rounded-[30px] border-white/50 px-4 py-4">
      <div className="absolute -left-10 top-6 text-4xl opacity-40">❀</div>
      <div className="absolute -right-4 top-1/2 text-3xl opacity-40">❦</div>
      <div className="absolute inset-x-10 top-0 h-24 rounded-full blur-3xl" />

      <div className="relative z-10 text-center">
        <p className="mb-2 text-xs tracking-[4px] text-[#8A9273] uppercase">{tx.countdown_overline}</p>
        <h2 className="mb-6 text-3xl text-[#5C6445]">{tx.countdown_title}</h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {units.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-[#E6DEC9] bg-white/60 px-3 py-4"
            >
              <p className="text-3xl font-light text-[#A67C52]">{String(item.value).padStart(2, "0")}</p>
              <p className="mt-1 text-[11px] tracking-[3px] text-[#8A9273] uppercase">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-sm rounded-3xl border border-[#E6DEC9] bg-white/70 p-4 text-left">
          <p className="text-center text-xs tracking-[4px] uppercase text-[#8A9273]">{tx.calendar_label}</p>
          <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] text-[#7D8663]">
            {weekDays.map((day) => (
              <span key={day} className="py-1 font-medium">{day}</span>
            ))}
            {calendarDays.map((day, index) => {
              const isWeddingDay = day === "16";
              return (
                <span
                  key={`${day}-${index}`}
                  className={`rounded-md py-1 ${
                    isWeddingDay
                      ? "bg-[#A67C52] text-white shadow"
                      : day
                        ? "bg-[#F6F1E6]"
                        : ""
                  }`}
                >
                  {day}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
