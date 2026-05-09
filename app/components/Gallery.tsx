"use client";

import { motion } from "framer-motion";

const images = [
  "/cover.png",
  "/cover.png",
  "/cover.png",
];

export default function Gallery() {
  return (
    <section className="py-10 px-6">
      <h2 className="text-3xl text-[#535C39] text-center leading-relaxed mb-12">
        Pre-Wedding Moments
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={src}
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
