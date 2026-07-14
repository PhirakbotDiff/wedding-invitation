"use client";

import { motion } from "framer-motion";
import { Church, Crown, Scissors, UtensilsCrossed, Wine, LucideIcon } from "lucide-react";
import { useLang } from "@/app/context/LanguageContext";
import { t } from "@/app/lib/i18n";

const ICONS: LucideIcon[] = [Church, Crown, Scissors, UtensilsCrossed, Wine];

export default function WeddingTimeline() {
  const { lang } = useLang();
  const tx = t(lang);

  return (
    <section className="relative overflow-hidden py-10">
      <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-[#DDE6CC]/30 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-[#9CAF88]/20 blur-[120px]" />

      <div className="absolute top-32 left-10 text-[#D8C7A0] opacity-50">✧</div>
      <div className="absolute top-96 right-12 text-[#D8C7A0] opacity-40">✦</div>
      <div className="absolute bottom-52 left-16 text-[#D8C7A0] opacity-40">✧</div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 mb-12 text-center"
      >
        <p className="mb-5 text-xs tracking-[6px] text-[#8A9273] uppercase">{tx.timeline_overline}</p>
        <h2 className="mb-4 text-5xl leading-relaxed text-[#5C6445]">{tx.timeline_title}</h2>
        <p className="text-sm tracking-[4px] text-[#8A9273] uppercase">{tx.timeline_subtitle}</p>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-10">
        <div className="absolute top-0 bottom-0 left-9 w-px bg-gradient-to-b from-[#D8C7A0]/10 via-[#D8C7A0]/60 to-[#D8C7A0]/10 md:left-1/2 md:-translate-x-1/2" />

        <div className="flex flex-col gap-10">
          {tx.timeline_items.map((item, index) => {
            const Icon = ICONS[index];
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
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50"
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
