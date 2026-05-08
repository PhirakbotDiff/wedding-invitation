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
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/frame/bg1.png"
        alt="background"
        fill
        priority
        className="object-cover object-center scale-105"
      />

      <div className="absolute inset-0 bg-white/45 backdrop-blur-[2px]" />

      <div className="relative z-10 mx-6 w-full max-w-md rounded-[32px] border border-white/50 bg-white/70 px-8 py-12 text-center shadow-[0_20px_55px_rgba(0,0,0,0.14)] backdrop-blur-xl">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-3 text-xs tracking-[5px] text-[#8A9273] uppercase"
        >
          The Wedding Invitation
        </motion.p>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-4 text-4xl text-[#535C39] drop-shadow-sm"
        >
          Phirakbot &amp; Maly
        </motion.h1>

        <motion.p
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mb-8 text-[#6D7456]"
        >
          Save the Date • <span className="text-[#A67C52]">16/Jan/2027</span>
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpen}
          className="rounded-full bg-gradient-to-r from-[#A8B58A] to-[#7E9270] px-10 py-4 text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition duration-300"
        >
          Open Invitation
        </motion.button>
      </div>

      <div className="absolute right-[-100px] bottom-[-100px] h-[300px] w-[300px] rounded-full bg-[#9CAF88]/20 blur-[120px]" />
    </motion.div>
  );
}
