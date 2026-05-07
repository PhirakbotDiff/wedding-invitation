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


const giftInfo = {
  accountName: "ឈឿន គង្គាភិរុណភិរក្សបុត្រ",
  contact: "+855 12 345 678",
  qrImage: "/cover.png",
};

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
          className="mb-16 rounded-[30px] border border-white/45 bg-white/70 px-6 py-10 text-center shadow-[0_16px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl"
        >
          <p className="mb-4 text-xs tracking-[5px] text-[#7D8663] uppercase">
            Wedding Invitation
          </p>

          <h1 className="mb-4 text-4xl leading-relaxed text-[#535C39]">
            ឈឿន គង្គាភិរុណភិរក្សបុត្រ
            <br />
            <span className="text-[#A67C52]">&</span>
            <br />
            ប៉ែន សុម៉ាលី
          </h1>

          <p className="text-sm tracking-[3px] text-[#8A9273] uppercase">Together with our families</p>
          <p className="mt-4 text-lg text-[#6D7456]">Welcome Dear {guest.name} 💚</p>
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

            <h2 className="text-3xl text-[#A67C52] text-center mb-3">
              Wedding Details
            </h2>

            <p className="mb-7 text-center text-[#7D8663]">We are honored to celebrate this joyful day with you.</p>

            <div className="space-y-4 text-center text-[#6D7456]">
              <p>📅 16 January 2027</p>
              <p>⏰ 3:00 PM</p>
              <p>📍 Phnom Penh</p>
            </div>

            {/* RSVP */}
            <div className="mt-10 rounded-3xl border border-[#E8E2D2] bg-white/70 p-5">
              <p className="mb-4 text-center text-xs tracking-[4px] text-[#8A9273] uppercase">Attendance Confirmation</p>

              <form
                action="/api/rsvp"
                method="POST"
                className="flex flex-col gap-4"
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
                  bg-white/85
                  backdrop-blur-md
                  text-[#535C39]
                  outline-none
                "
              >
                <option value="yes">✅ Accept with pleasure</option>
                <option value="no">🙏 Regretfully decline</option>
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
                Confirm Attendance
              </button>
              </form>

              <p className="mt-3 text-center text-sm text-[#8A9273]">Allowed seats for your invitation: {guest.allowed}</p>
            </div>

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

        {/* 🙏 Wedding Thank You */}
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="mt-20 rounded-[28px] border border-white/45 bg-white/75 p-8 text-center shadow-[0_18px_45px_rgba(0,0,0,0.1)] backdrop-blur-xl"
        >
          <p className="mb-2 text-xs tracking-[4px] text-[#7D8663] uppercase">Wedding Thank You</p>
          <h3 className="mb-4 text-3xl text-[#5C6445] leading-relaxed">សូមអរគុណពីដួងចិត្ត</h3>
          <p className="mx-auto max-w-md leading-8 text-[#6D7456]">
            សូមអរគុណចំពោះក្តីស្រឡាញ់ ការគាំទ្រ និងការចំណាយពេលវេលាមកចូលរួមថ្ងៃពិសេសរបស់យើង។
            វត្តមានរបស់អ្នកគឺជាអំណោយដ៏មានតម្លៃបំផុតសម្រាប់គ្រួសារថ្មីរបស់យើង។
          </p>
        </motion.section>

        {/* 🎁 Wedding Gift from Attendees */}
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="mt-10 rounded-[28px] border border-white/45 bg-white/75 p-8 shadow-[0_18px_45px_rgba(0,0,0,0.1)] backdrop-blur-xl"
        >
          <p className="mb-2 text-center text-xs tracking-[4px] text-[#7D8663] uppercase">Wedding Gift from Attendees</p>
          <h3 className="mb-6 text-center text-3xl text-[#5C6445] leading-relaxed">ជូនពរ និងអំណោយ</h3>

          <div className="mx-auto flex max-w-sm flex-col items-center gap-4 text-center">
            <div className="rounded-2xl border border-[#DCCBA6] bg-white p-3 shadow-sm">
              <Image
                src={giftInfo.qrImage}
                alt="Gift QR Code"
                width={180}
                height={180}
                className="h-[180px] w-[180px] rounded-xl object-cover"
              />
            </div>
            <p className="text-[#A67C52] text-sm">Scan QR for wedding gift</p>
            <p className="text-[#5C6445] text-lg">{giftInfo.accountName}</p>
            <p className="text-[#6D7456]">Contact: {giftInfo.contact}</p>
          </div>
        </motion.section>

        {/* 💌 Love Story */}
        <Parallax speed={-10}>
          <section className="mt-32 rounded-[30px] border border-white/45 bg-white/70 px-8 py-10 text-center shadow-[0_16px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl">
            <p className="mb-2 text-xs tracking-[4px] text-[#8A9273] uppercase">Our Love Story</p>
            <h1 className="text-5xl text-[#535C39] leading-relaxed">
              Our Love Story
            </h1>

            <p className="mt-6 leading-8 text-[#7D8663]">
              A beautiful journey began with friendship,
              grew with trust, and blossoms today with endless love.
            </p>

            <div className="mt-7 space-y-3 text-[#6D7456]">
              <p>2018 • We first met and became close friends.</p>
              <p>2022 • We promised to walk every season together.</p>
              <p>2027 • We begin our forever as husband and wife.</p>
            </div>
          </section>
        </Parallax>

      </motion.div>
    </div>
  );
}