'use client'

import * as React from 'react'
import { useMemo, useState } from "react";

import OpeningScreen from "@/app/components/OpeningScreen";
import Countdown from "@/app/components/Countdown";
import BackgroundMusic from "@/app/components/BackgroundMusic";
import FloatingFlowers from "@/app/components/FloatingFlowers";
import Gallery from "@/app/components/Gallery";
import FloralFrame from "@/app/components/FloralFrame";
import WeddingTimeline from "@/app/components/WeddingTimeline";
import ClassicKhmerInvitationCard from "@/app/components/ClassicKhmerInvitationCard";
import Location from "@/app/components/Location";

import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

import Image from "next/image";
import { useParams } from "next/navigation";
import { getGuestByInviteId } from "@/app/lib/guests";



function SectionFlower({ side = "left" }: { side?: "left" | "right" }) {
  const positionClass = side === "left"
    ? "-left-12 top-1/2 -translate-y-1/2"
    : "-right-12 top-1/2 -translate-y-1/2";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${positionClass} opacity-35`}
    >
      <svg
        viewBox="0 0 180 180"
        className={`h-32 w-32 ${side === "right" ? "-scale-x-100" : ""}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#9CAF88" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M91 166V96" />
          <path d="M91 120C79 116 73 106 73 94C83 94 90 100 91 111" />
          <path d="M91 132C103 128 109 118 109 106C99 106 92 112 91 123" />
          <path d="M90 72C72 72 58 58 58 40C76 40 90 54 90 72Z" />
          <path d="M90 72C108 72 122 58 122 40C104 40 90 54 90 72Z" />
          <path d="M72 90C54 90 40 76 40 58C58 58 72 72 72 90Z" />
          <path d="M108 90C126 90 140 76 140 58C122 58 108 72 108 90Z" />
          <circle cx="90" cy="82" r="10" fill="#D8C7A0" stroke="#A67C52" />
        </g>
      </svg>
    </div>
  );
}


function StickyTopFloralFrame() {
  return (
    <div className="sticky top-0 z-30 px-3 pt-3">
      <div className="relative overflow-hidden rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-[0_10px_28px_rgba(74,84,53,0.18)] backdrop-blur-md">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A67C52]/60 to-transparent" />
        <div className="relative flex items-center justify-between">
          <AnimatedLeafCluster side="left" />
          <p className="px-3 text-center text-[11px] tracking-[4px] text-[#66724D] uppercase">Our Wedding Day</p>
          <AnimatedLeafCluster side="right" />
        </div>
      </div>
    </div>
  );
}

function AnimatedLeafCluster({ side = "left" }: { side?: "left" | "right" }) {
  const xDirection = side === "left" ? -1 : 1;

  return (
    <motion.svg
      viewBox="0 0 120 42"
      aria-hidden
      className={`h-10 w-28 ${side === "right" ? "-scale-x-100" : ""}`}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M7 35C26 31 37 19 52 10C66 2 82 4 111 10"
        stroke="#8FA37D"
        strokeWidth="2.4"
        strokeLinecap="round"
        initial={{ pathLength: 0.2, opacity: 0.5 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.1, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      {[16, 35, 54, 76].map((x, idx) => (
        <motion.path
          key={`leaf-${x}`}
          d={`M${x} 28C${x + (8 * xDirection)} 20 ${x + (17 * xDirection)} 18 ${x + (24 * xDirection)} 21C${x + (16 * xDirection)} 30 ${x + (9 * xDirection)} 33 ${x} 28Z`}
          fill={idx % 2 === 0 ? "#9CAF88" : "#B7C7A8"}
          fillOpacity="0.95"
          animate={{
            rotate: [-3, 3, -3],
            y: [0, -1.5, 0],
          }}
          transition={{
            duration: 2.6 + idx * 0.4,
            delay: idx * 0.16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ originX: "50%", originY: "70%" }}
        />
      ))}

      {[22, 64, 92].map((x, idx) => (
        <motion.circle
          key={`flower-${x}`}
          cx={x}
          cy={idx % 2 ? 16 : 18}
          r="2.1"
          fill="#D8C7A0"
          animate={{ scale: [1, 1.2, 1], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 2 + idx * 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </motion.svg>
  );
}

const giftInfo = {
  accountName: "ឈឿន គង្គាភិរុណភិរក្សបុត្រ",
  contact: "+855 12 345 678",
  qrImage: "/cover.png",
};

export default function InvitePage() {

  const [opened, setOpened] = useState(false);
  const isTelegramWebView = useMemo(() => typeof window !== "undefined" && Boolean(window.Telegram?.WebApp), []);
  const { id } = useParams<{ id: string }>();
  const guest = getGuestByInviteId(id);

  if (!guest) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
        <div className="max-w-md rounded-2xl border border-[#d8decf] bg-white/90 p-6 shadow-sm">
          <h1 className="mb-3 text-2xl text-[#535C39]">Invitation Not Found</h1>
          <p className="mb-5 text-[#6D7456]">
            Your invite link looks invalid or expired. Please reopen the invitation from Telegram chat.
          </p>
          <a
            href="/"
            className="inline-block rounded-full bg-[#7E9270] px-6 py-3 text-white"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  if (!opened) {
    return <OpeningScreen onOpen={() => setOpened(true)} guestName={guest.name} />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* 🌿 Background */}
      <Image
        src="/frame/bg1.png"
        alt="background"
        fill
        priority
        className="object-cover object-center scale-105"
      />

      {/* 🌫 Soft Overlay */}
      <div className={`absolute inset-0 bg-white/${isTelegramWebView ? "70" : "55"} ${isTelegramWebView ? "" : "backdrop-blur-[2px]"}`} />

      {/* ✨ Ambient Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[260px] h-[260px] bg-[#DDE6CC]/40 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#9CAF88]/20 blur-[120px] rounded-full" />

      <StickyTopFloralFrame />
      {!isTelegramWebView && <FloralFrame />}
      <BackgroundMusic />
      {!isTelegramWebView && <FloatingFlowers />}
      <div className="absolute left-3 top-40 z-10 text-3xl text-[#9CAF88]/60">❁</div>
      <div className="absolute right-5 top-[28rem] z-10 -rotate-12 text-4xl text-[#A67C52]/40">❋</div>
      <div className="absolute left-2 bottom-40 z-10 rotate-12 text-4xl text-[#7D8663]/40">❀</div>
      <div className="absolute right-3 bottom-60 z-10 text-3xl text-[#9CAF88]/50">❧</div>

      {/* 🌟 Main Content */}
      <motion.div
        initial={isTelegramWebView ? false : "hidden"}
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: isTelegramWebView ? 0.06 : 0.2
            }
          }
        }}
        className="relative z-10 max-w-md mx-auto pt-10 pb-32 px-4"
      >

        {/* 💚 Hero */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1 }}
          className="relative mb-10 overflow-hidden rounded-[30px] border border-white/45 px-6 py-10 text-center"
        >
          <SectionFlower side="left" />
          <p className="mb-4 text-xs tracking-[5px] text-[#7D8663] uppercase">
            Wedding Invitation
          </p>

          <h3 className="mb-4 text-2xl leading-relaxed text-[#535C39]">
            ឈឿន គង្គាភិរុណភិរក្សបុត្រ
            <br />
            <span className="text-[#A67C52]">&</span>
            <br />
            ប៉ែន សុម៉ាលី
          </h3>

          <div className="mx-auto mb-2 w-full max-w-[240px] overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-1 shadow-[0_12px_35px_rgba(0,0,0,0.12)]">
            <Image
              src="/cover.png"
              alt="Couple portrait"
              width={480}
              height={320}
              className="h-auto w-full rounded-xl object-cover"
              priority={false}
            />
          </div>

        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="mb-2"
        >
          <ClassicKhmerInvitationCard guestName={guest.name} />
        </motion.div>

      {/* ⏳ Countdown */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="relative mb-10 overflow-hidden rounded-[28px] border border-white/40 p-4"
      >
        <SectionFlower side="right" />
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
            border
            rounded-[32px]
            p-8
            overflow-hidden
          "
        >

          {/* 🌿 Soft Inner Glow */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[250px] h-[250px] rounded-full" />
          </div>

          <SectionFlower side="left" />
          <div className="relative z-10">

            <p className="text-lg text-[#7D8663] text-center mb-3">
              សិរីមង្គលអាពាហ៍ពិពាហ៍
            </p>

            <h2 className="text-3xl text-[#A67C52] text-center mb-3">
              Wedding Details
            </h2>

            <p className="mb-7 text-center text-[#7D8663]">We are honored to celebrate this joyful day with you.</p>

            <div className="grid gap-4 text-[#6D7456] sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E8E2D2] bg-white/80 p-4 text-left">
                <p className="text-xs tracking-[3px] uppercase text-[#A67C52]">Date</p>
                <p className="mt-2 text-lg">Saturday, 16 January 2027</p>
              </div>
              <div className="rounded-2xl border border-[#E8E2D2] bg-white/80 p-4 text-left">
                <p className="text-xs tracking-[3px] uppercase text-[#A67C52]">Time</p>
                <p className="mt-2 text-lg">Reception starts at 3:00 PM</p>
              </div>
              <div className="rounded-2xl border border-[#E8E2D2] bg-white/80 p-4 text-left sm:col-span-2">
                <p className="text-xs tracking-[3px] uppercase text-[#A67C52]">Venue</p>
                <p className="mt-2 text-lg">Phnom Penh Grand Ballroom, Phnom Penh</p>
                <p className="mt-1 text-sm text-[#8A9273]">Dress code: Elegant Traditional / Formal Attire</p>
              </div>
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

        {/* 💌 Love Story */}
        <Parallax speed={isTelegramWebView ? 0 : -10} disabled={isTelegramWebView}>
          <section className="relative mt-10 overflow-hidden rounded-[30px] border border-white/45 px-8 py-10">
            <SectionFlower side="right" />
            <h2 className="text-center text-3xl text-[#535C39] leading-relaxed">
              Our Love Story
            </h2>

            <p className="mx-auto mt-5 max-w-md text-center leading-8 text-[#7D8663]">
              A beautiful journey began with friendship, grew with trust, and today blossoms into a lifetime promise.
            </p>

            <div className="relative mt-10 space-y-6 pl-8">
              <div className="absolute bottom-0 left-2 top-1 w-px bg-gradient-to-b from-[#D8C7A0]/20 via-[#D8C7A0] to-[#D8C7A0]/20" />

              {[
                { year: "2018", title: "First Meeting", desc: "We met as friends and discovered a calm joy in every conversation." },
                { year: "2020", title: "Growing Together", desc: "From shared dreams to difficult days, we learned what commitment truly means." },
                { year: "2022", title: "Promise of Forever", desc: "We promised to walk through every season hand in hand with faith and kindness." },
                { year: "2027", title: "Wedding Day", desc: "With grateful hearts, we celebrate the beginning of our forever as husband and wife." },
              ].map((item) => (
                <div key={item.year} className="relative rounded-2xl border border-white/60 bg-white/75 p-5 shadow-[0_12px_35px_rgba(0,0,0,0.07)]">
                  <span className="absolute -left-[1.95rem] top-6 h-4 w-4 rounded-full border-2 border-[#D8C7A0] bg-white" />
                  <p className="text-xs tracking-[3px] text-[#A67C52] uppercase">{item.year}</p>
                  <h3 className="mt-2 text-2xl leading-relaxed text-[#5C6445]">{item.title}</h3>
                  <p className="mt-2 text-[#6D7456]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </Parallax>

        {/* 💍 Wedding Section */}
        <motion.section
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="relative mt-10 overflow-hidden rounded-[30px] border border-white/45 p-8"
        >
          <div className="absolute -left-4 top-4 text-3xl text-[#9CAF88]/50">❁</div>
          <div className="absolute -right-3 bottom-4 text-3xl text-[#A67C52]/40">❋</div>
          <SectionFlower side="left" /> 
          <h2 className="mt-2 text-center text-4xl text-[#535C39] leading-relaxed">Ceremony Highlights</h2>
          <div className="mt-8 grid gap-4">
            <div className="rounded-2xl border border-[#E8E2D2] bg-white/80 p-4">
              <p className="text-xs tracking-[3px] uppercase text-[#A67C52]">Blessing Ceremony</p>
              <p className="mt-2 text-[#6D7456]">Traditional blessing and family honoring ceremony in the morning.</p>
            </div>
            <div className="rounded-2xl border border-[#E8E2D2] bg-white/80 p-4">
              <p className="text-xs tracking-[3px] uppercase text-[#A67C52]">Reception & Toast</p>
              <p className="mt-2 text-[#6D7456]">An evening reception with dinner, music, speeches, and joyful celebration.</p>
            </div>
          </div>
        </motion.section>

        {/* 🖼 Gallery */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="mt-10"
        >
          <Gallery />
        </motion.div>

        <WeddingTimeline />

        <Location />

        {/* 🎁 Wedding Gift from Attendees */}
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="relative mt-10 overflow-hidden rounded-[28px] border border-white/45"
        >
          <SectionFlower side="left" />
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

        {/* 🙏 Wedding Thank You */}
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="relative mt-20 overflow-hidden rounded-[28px] border border-white/45 p-8 text-center"
        >
          <SectionFlower side="right" />
          <p className="mb-2 text-xs tracking-[4px] text-[#7D8663] uppercase">Wedding Thank You</p>
          <h3 className="mb-4 text-3xl text-[#5C6445] leading-relaxed">សូមអរគុណពីដួងចិត្ត</h3>
          <p className="mx-auto max-w-md leading-8 text-[#6D7456]">
            សូមអរគុណចំពោះក្តីស្រឡាញ់ ការគាំទ្រ និងការចំណាយពេលវេលាមកចូលរួមថ្ងៃពិសេសរបស់យើង។
            វត្តមានរបស់អ្នកគឺជាអំណោយដ៏មានតម្លៃបំផុតសម្រាប់គ្រួសារថ្មីរបស់យើង។
            
          </p>
        </motion.section>


        {/* 🙏 Wedding Apology */}
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="relative mt-20 overflow-hidden rounded-[28px] border border-white/45 p-8 text-center"
        >
          <SectionFlower side="right" />
          <p className="mb-2 text-xs tracking-[4px] text-[#7D8663] uppercase">Wedding Apology</p>
          <h3 className="mb-4 text-3xl text-[#5C6445] leading-relaxed">លខិតសុំអភ័យទោស</h3>
          <p className="mx-auto max-w-md leading-8 text-[#6D7456]">
            សូមអរគុណចំពោះក្តីស្រឡាញ់ ការគាំទ្រ និងការចំណាយពេលវេលាមកចូលរួមថ្ងៃពិសេសរបស់យើង។
            វត្តមានរបស់អ្នកគឺជាអំណោយដ៏មានតម្លៃបំផុតសម្រាប់គ្រួសារថ្មីរបស់យើង។
            
          </p>
        </motion.section>

      </motion.div>
    </div>
  );
}
