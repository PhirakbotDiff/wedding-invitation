"use client";

import { motion } from "framer-motion";

import {
  Church,
  Crown,
  Scissors,
  UtensilsCrossed,
  Wine,
  LucideIcon,
} from "lucide-react";

interface TimelineItem {
  time: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const timeline: TimelineItem[] = [
  {
    time: "06:00 ព្រឹក",
    title: "ពិធីសូត្រមន្ត",
    description: "ចាប់ផ្តើមពិធីដោយសូត្រមន្តសុំសិរីសួស្តី និងពរជ័យ។",
    icon: Church,
  },
  {
    time: "08:00 ព្រឹក",
    title: "ពិធីហែជំនូន",
    description: "ហែជំនូនតាមប្រពៃណី ជាមួយក្តីរំភើប និងអំណរ។",
    icon: Crown,
  },
  {
    time: "10:00 ព្រឹក",
    title: "ពិធីកាត់សក់",
    description: "ពិធីប្រពៃណីតំណាងឱ្យពរជ័យសម្រាប់ជីវិតគូថ្មី។",
    icon: Scissors,
  },
  {
    time: "12:00 ថ្ងៃត្រង់",
    title: "ពិសារអាហារ",
    description: "អញ្ជើញភ្ញៀវកិត្តិយសពិសារអាហារថ្ងៃត្រង់ជុំគ្នា។",
    icon: UtensilsCrossed,
  },
  {
    time: "06:00 ល្ងាច",
    title: "ពិធីជប់លៀង",
    description: "អបអរសាទរពិធីមង្គលការជាមួយតន្ត្រី និងការរាំលេង។",
    icon: Wine,
  },
];

export default function WeddingTimeline() {
  return (
    <section className="relative overflow-hidden py-10">
      {/* 🌿 Ambient Background Glow */}
      <div
        className="
          absolute top-0 left-0
          h-[300px] w-[300px]
          rounded-full
          bg-[#DDE6CC]/30
          blur-[120px]
        "
      />

      <div
        className="
          absolute right-0 bottom-0
          h-[300px] w-[300px]
          rounded-full
          bg-[#9CAF88]/20
          blur-[120px]
        "
      />

      {/* ✨ Decorative Sparkles */}
      <div className="absolute top-32 left-10 text-[#D8C7A0] opacity-50">✧</div>
      <div className="absolute top-96 right-12 text-[#D8C7A0] opacity-40">✦</div>
      <div className="absolute bottom-52 left-16 text-[#D8C7A0] opacity-40">✧</div>

      {/* 🌟 Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 mb-24 text-center"
      >
        <p className="mb-5 text-xs tracking-[6px] text-[#8A9273] uppercase">
          Wedding Timeline
        </p>

        <h2 className="mb-4 text-5xl leading-relaxed text-[#5C6445]">កម្មវិធីមង្គលការ</h2>

        <p className="text-sm tracking-[4px] text-[#8A9273] uppercase">Phirakbot × Somaly</p>
      </motion.div>

      {/* 💎 Timeline Items */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-10">
        <div className="absolute top-0 bottom-0 left-9 w-px bg-gradient-to-b from-[#D8C7A0]/10 via-[#D8C7A0]/60 to-[#D8C7A0]/10 md:left-1/2 md:-translate-x-1/2" />

        <div className="flex flex-col gap-10">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative grid grid-cols-[72px_1fr] items-center gap-4 md:grid-cols-2 md:gap-12"
              >
                <div className={`hidden md:block ${isEven ? "order-1 text-right" : "order-2 text-left"}`}>
                  <div className="inline-block max-w-sm rounded-3xl border border-white/55 bg-white/70 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.08)] backdrop-blur-xl">
                    <p className="mb-2 text-xs tracking-[3px] text-[#B08B57] uppercase">{item.time}</p>
                    <h3 className="mb-3 text-3xl leading-relaxed text-[#5C6445]">{item.title}</h3>
                    <p className="text-base leading-relaxed text-[#6C725A]">{item.description}</p>
                  </div>
                </div>

                <div className="relative z-20 col-start-1 row-start-1 flex justify-center md:col-start-auto md:row-start-auto">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="flex h-18 w-18 items-center justify-center rounded-full border border-white/50"
                  >
                    <Icon size={34} strokeWidth={1.2} className="text-[#B08B57]" />
                  </motion.div>
                </div>

                <div className="col-start-2 md:hidden">
                  <p className="mb-2 text-xs tracking-[3px] text-[#B08B57] uppercase">{item.time}</p>
                  <h3 className="mb-2 text-2xl leading-relaxed text-[#5C6445]">{item.title}</h3>
                  <p className="text-base leading-relaxed text-[#6C725A]">{item.description}</p>
                </div>

                <div className={`hidden md:block ${isEven ? "order-2" : "order-1"}`} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
