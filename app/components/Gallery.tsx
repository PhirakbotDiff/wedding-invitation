"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { useLang } from "@/app/context/LanguageContext";
import { t } from "@/app/lib/i18n";

const images = [
  { src: "/cover.png", span: "large" },
  { src: "/cover.png", span: "small" },
  { src: "/cover.png", span: "small" },
];

export default function Gallery() {
  const { lang } = useLang();
  const tx = t(lang);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section className="relative overflow-hidden rounded-[30px] border border-white/45 px-5 py-8">

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#D8C7A0]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#9CAF88]/20 blur-3xl" />

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-center"
        >
          <p className="mb-1 text-xs tracking-[4px] uppercase text-[#7D8663]">
            {tx.gallery_title}
          </p>
          <h2 className="text-3xl leading-relaxed text-[#535C39]">
            ❁ &nbsp;Memories&nbsp; ❁
          </h2>
          <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-[#A67C52]/50 to-transparent" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3" style={{ gridTemplateRows: "180px 140px" }}>

          {/* Featured — spans 2 rows on the left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative row-span-2 cursor-pointer overflow-hidden rounded-2xl border border-white/60 shadow-[0_12px_32px_rgba(0,0,0,0.13)]"
            onClick={() => setLightbox(images[0].src)}
          >
            <img
              src={images[0].src}
              alt="Wedding photo 1"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="rounded-full bg-black/40 px-2.5 py-1 text-[10px] tracking-widest text-white/90 uppercase backdrop-blur-sm">
                01
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <ZoomIn size={13} className="text-white" />
              </div>
            </div>
          </motion.div>

          {/* Top-right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.10)]"
            onClick={() => setLightbox(images[1].src)}
          >
            <img
              src={images[1].src}
              alt="Wedding photo 2"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <ZoomIn size={11} className="text-white" />
            </div>
          </motion.div>

          {/* Bottom-right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.10)]"
            onClick={() => setLightbox(images[2].src)}
          >
            <img
              src={images[2].src}
              alt="Wedding photo 3"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* Photo count badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-1 rounded-2xl bg-black/35 px-4 py-2.5 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn size={14} className="text-white" />
                <span className="text-[10px] tracking-widest text-white/90 uppercase">View</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Photo count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-center text-[10px] tracking-[3px] text-[#8A9273] uppercase"
        >
          {images.length} photos • tap to expand
        </motion.p>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
              className="relative w-full max-w-sm overflow-hidden rounded-[28px] border border-white/20 shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox}
                alt="Wedding photo expanded"
                className="w-full object-cover"
              />
              {/* Gradient footer */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>

            {/* Close button */}
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close photo"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
