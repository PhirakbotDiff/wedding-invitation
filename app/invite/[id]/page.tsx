'use client'

import * as React from 'react'
import { useState } from "react";

import OpeningScreen from "@/app/components/OpeningScreen";
import Countdown from "@/app/components/Countdown";
import BackgroundMusic from "@/app/components/BackgroundMusic";
import FloatingFlowers from "@/app/components/FloatingFlowers";
import Gallery from "@/app/components/Gallery";
import FloralFrame from "@/app/components/FloralFrame";
import WeddingTimeline from "@/app/components/WeddingTimeline";

import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

import Image from "next/image";
import { notFound } from "next/navigation";

const guests: Record<string, { name: string; allowed: number }> = {
  G001: { name: "Sokha", allowed: 2 },
  G002: { name: "Dara", allowed: 1 },
};

interface PageProps {
  params: Promise<{ id: string }>
}

export default function InvitePage({ params }: PageProps) {

  const [opened, setOpened] = useState(false);

  if (!opened) {
    return <OpeningScreen onOpen={() => setOpened(true)} />;
  }

  const { id } = React.use(params);
  const guest = guests[id];

  if (!guest) return notFound();

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 🌿 Background */}
      <Image
        src="/frame/bg1.png"
        alt="background"
        fill
        priority
        className="object-cover object-center scale-105"
      />

      {/* 🌫 Soft Overlay */}
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[2px]" />

      {/* ✨ Ambient Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[260px] h-[260px] bg-[#DDE6CC]/40 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#9CAF88]/20 blur-[120px] rounded-full" />

      <FloralFrame />
      <BackgroundMusic />
      <FloatingFlowers />

      {/* 🌟 Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="relative z-10 max-w-md mx-auto pt-24 pb-32 px-4"
      >

        {/* 💚 Hero */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-[#7D8663] tracking-[4px] uppercase text-xs mb-4">
            Wedding Invitation
          </p>

          <h1 className="text-4xl leading-relaxed text-[#535C39] mb-6">
            ឈឿន គង្គាភិរុណភិរក្សបុត្រ
            <br />
            &
            <br />
            ប៉ែន សុម៉ាលី
          </h1>

          <p className="text-[#7D8663] text-lg">
            Welcome Dear {guest.name} 💚
          </p>
        </motion.div>

        {/* ⏳ Countdown */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="mb-16"
        >
          <Countdown />
        </motion.div>

        {/* 💎 Wedding Card */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="
            relative
            bg-white/75
            backdrop-blur-xl
            border border-white/40
            rounded-[32px]
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            p-8
            overflow-hidden
          "
        >

          {/* 🌿 Soft Inner Glow */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[250px] h-[250px] bg-[#9CAF88]/10 blur-[100px] rounded-full" />
          </div>

          <div className="relative z-10">

            <p className="text-lg text-[#7D8663] text-center mb-3">
              សិរីមង្គលអាពាហ៍ពិពាហ៍
            </p>

            <h2 className="text-3xl text-[#A67C52] text-center mb-8">
              Wedding Details
            </h2>

            <div className="space-y-4 text-center text-[#6D7456]">
              <p>📅 12 December 2026</p>
              <p>⏰ 3:00 PM</p>
              <p>📍 Phnom Penh</p>
            </div>

            {/* RSVP */}
            <form
              action="/api/rsvp"
              method="POST"
              className="flex flex-col gap-4 mt-10"
            >
              <input
                type="hidden"
                name="id"
                value={id}
              />

              <select
                name="attending"
                className="
                  border border-[#D9D9D9]
                  rounded-2xl
                  p-3
                  bg-white/70
                  backdrop-blur-md
                  text-[#535C39]
                  outline-none
                "
              >
                <option value="yes">Accept with pleasure</option>
                <option value="no">Regretfully decline</option>
              </select>

              <button
                type="submit"
                className="
                  bg-gradient-to-r
                  from-[#9CAF88]
                  to-[#7E9270]
                  text-white
                  py-3
                  rounded-2xl
                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  hover:scale-[1.02]
                  transition
                  duration-300
                "
              >
                Confirm RSVP
              </button>
            </form>

          </div>
        </motion.div>

        {/* 🖼 Gallery */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="mt-24"
        >
          <Gallery />
        </motion.div>

        <WeddingTimeline />

        {/* 💌 Love Story */}
        <Parallax speed={-10}>
          <div className="mt-32 text-center">
            <h1 className="text-5xl text-[#535C39] leading-relaxed">
              Our Love Story
            </h1>

            <p className="text-[#7D8663] mt-6 leading-8">
              A beautiful journey begins with love,
              trust, and endless memories together.
            </p>
          </div>
        </Parallax>

      </motion.div>
    </div>
  );
}