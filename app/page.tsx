"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

    {/* 🌿 Background Image */}
      <Image
        src="/frame/bg1.png"
        alt="background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* 🌫 Overlay for readability */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      {/* 🌿 Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#F6F5F0] to-[#EDEBE4]" /> */}

      {/* 🌿 Subtle Pattern Overlay */}
      {/* <div className="absolute inset-0 opacity-[0.05] bg-[url('/pattern.png')] bg-cover" /> */}

      {/* ✨ Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* 🏵 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl text-[#535C39] mb-6 tracking-wide"
        >
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </motion.h1>

        {/* 🌿 Monogram / Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <div className="relative">
            <Image
              src="/frame/f2.png"
              alt="frame"
              width={260}
              height={260}
              className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
            />

            {/* ✨ Soft Glow */}
            <div className="absolute inset-0 rounded-full blur-xl opacity-20 bg-[#9CAF88]" />
          </div>
        </motion.div>

        {/* ✨ Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-[#535C39]/80 mb-10"
        >
          សូមគោរពអញ្ជើញ
        </motion.p>

        {/* 💚 CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/invite/G001"
            className="relative inline-block px-8 py-3 text-white text-lg rounded-full 
            bg-gradient-to-r from-[#9CAF88] to-[#7E9270] 
            shadow-[0_8px_25px_rgba(0,0,0,0.2)]
            transition duration-300 hover:scale-105 hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
          >
            សូមចុចដើម្បីមើលការអញ្ជើញរបស់អ្នក
          </Link>
        </motion.div>

      </div>

      {/* 🌑 Floating Music Button (Optional UI Upgrade) */}
      <div className="absolute bottom-6 left-6 w-12 h-12 bg-black/80 rounded-full flex items-center justify-center text-white shadow-lg">
        N
      </div>

    </main>
  );
}