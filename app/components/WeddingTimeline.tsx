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
  icon: LucideIcon;
}

const timeline: TimelineItem[] = [
  {
    time: "06:00 ព្រឹក",
    title: "ពិធីសូត្រមន្ត",
    icon: Church,
  },
  {
    time: "08:00 ព្រឹក",
    title: "ពិធីហែជំនូន",
    icon: Crown,
  },
  {
    time: "10:00 ព្រឹក",
    title: "ពិធីកាត់សក់",
    icon: Scissors,
  },
  {
    time: "12:00 ថ្ងៃត្រង់",
    title: "ពិសារអាហារ",
    icon: UtensilsCrossed,
  },
  {
    time: "06:00 ល្ងាច",
    title: "ពិធីជប់លៀង",
    icon: Wine,
  },
];

export default function WeddingTimeline() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🌿 Ambient Background Glow */}
      <div
        className="
          absolute top-0 left-0
          w-[300px] h-[300px]
          bg-[#DDE6CC]/30
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          absolute bottom-0 right-0
          w-[300px] h-[300px]
          bg-[#9CAF88]/20
          blur-[120px]
          rounded-full
        "
      />

      {/* ✨ Decorative Sparkles */}
      <div className="absolute top-32 left-10 text-[#D8C7A0] opacity-50">
        ✧
      </div>

      <div className="absolute top-96 right-12 text-[#D8C7A0] opacity-40">
        ✦
      </div>

      <div className="absolute bottom-52 left-16 text-[#D8C7A0] opacity-40">
        ✧
      </div>

      {/* 🌟 Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-24 relative z-10"
      >
        <p
          className="
            tracking-[6px]
            uppercase
            text-xs
            text-[#8A9273]
            mb-5
          "
        >
          Wedding Timeline
        </p>

        <h2
          className="
            text-5xl
            leading-relaxed
            text-[#5C6445]
            mb-4
          "
        >
          កម្មវិធីមង្គលការ
        </h2>

        <p
          className="
            text-[#8A9273]
            tracking-[4px]
            uppercase
            text-sm
          "
        >
          Phirakbot × Somaly
        </p>
      </motion.div>

      {/* 💎 Timeline Items */}
      <div
        className="
          relative z-10
          max-w-md
          mx-auto
          flex flex-col
          items-center
          gap-20
        "
      >
        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="text-center"
            >

              {/* ✨ Icon Circle */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                className="
                  w-24 h-24
                  rounded-full
                  bg-white/70
                  backdrop-blur-xl
                  border border-white/50
                  shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                  flex items-center justify-center
                  mx-auto mb-6
                "
              >
                <Icon
                  size={42}
                  strokeWidth={1}
                  className="text-[#B08B57]"
                />
              </motion.div>

              {/* 🌿 Time */}
              <p
                className="
                  text-[#B08B57]
                  tracking-[3px]
                  text-sm
                  uppercase
                  mb-3
                "
              >
                {item.time}
              </p>

              {/* 💚 Title */}
              <h3
                className="
                  text-[#5C6445]
                  text-3xl
                  leading-relaxed
                "
              >
                {item.title}
              </h3>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}