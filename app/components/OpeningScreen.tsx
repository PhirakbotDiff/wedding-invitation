"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OpeningScreen({
  onOpen,
}: {
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
    >
      {/* 🌿 Background */}
      <Image
        src="/frame/bg1.png"
        alt="background"
        fill
        priority
        className="object-cover object-center scale-105"
      />

      {/* 🌫 Soft Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />

      {/* ✨ Content */}
      <div className="relative z-10 text-center px-6">

        {/* Title */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl text-[#535C39] mb-8 drop-shadow-sm"
        >
          Phirakbot & Maly
        </motion.h1>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpen}
          className="
            bg-[#A8B58A]
            text-white
            px-10
            py-4
            rounded-full
            shadow-[0_10px_30px_rgba(0,0,0,0.15)]
            backdrop-blur-md
            transition
            duration-300
          "
        >
          Open Invitation
        </motion.button>
      </div>

      {/* 🌿 Floating Ambient Glow */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#9CAF88]/20 blur-[120px] rounded-full" />
    </motion.div>
  );
}