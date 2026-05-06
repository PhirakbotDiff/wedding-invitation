"use client";

import { motion } from "framer-motion";

export default function FloatingFlowers() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, x: Math.random() * 1000 }}
          animate={{ y: "110vh" }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute text-sage opacity-30 text-2xl"
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
}
