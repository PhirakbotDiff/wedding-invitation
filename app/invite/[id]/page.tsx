'use client'

import * as React from 'react'
import { useState } from 'react'

import OpeningScreen from '@/app/components/OpeningScreen'
import Countdown from '@/app/components/Countdown'
import BackgroundMusic from '@/app/components/BackgroundMusic'
import FloatingFlowers from '@/app/components/FloatingFlowers'
import Gallery from '@/app/components/Gallery'
import FloralFrame from '@/app/components/FloralFrame'
import WeddingTimeline from '@/app/components/WeddingTimeline'

import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'

import Image from 'next/image'
import { notFound } from 'next/navigation'

const guests: Record<string, { name: string; allowed: number }> = {
  G001: { name: 'Sokha', allowed: 2 },
  G002: { name: 'Dara', allowed: 1 },
}

interface PageProps {
  params: Promise<{ id: string }>
}

const giftInfo = {
  accountName: 'ឈឿន គង្គាភិរុណភិរក្សបុត្រ',
  contact: '+855 12 345 678',
  qrImage: '/cover.png',
}

const sectionMotion = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

function InvitationCard({
  children,
  className = '',
  ornament = true,
}: {
  children: React.ReactNode
  className?: string
  ornament?: boolean
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[34px] border border-[#e5d7b5]/80 bg-gradient-to-b from-[#fffdf6]/95 via-[#f8f1de]/90 to-[#f3ead2]/95 p-[1px] shadow-[0_24px_80px_rgba(44,56,31,0.22)] ${className}`}
    >
      <div className="relative rounded-[33px] border border-[#fff8eb]/70 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(251,245,228,0.9)_40%,_rgba(236,225,194,0.86)_100%)] px-6 py-9 sm:px-8">
        {ornament && (
          <>
            <div className="pointer-events-none absolute left-3 top-3 text-2xl text-[#8c9a68]/70">❦</div>
            <div className="pointer-events-none absolute right-3 top-3 -rotate-12 text-2xl text-[#b39a65]/70">❋</div>
            <div className="pointer-events-none absolute bottom-3 left-3 rotate-6 text-xl text-[#7f8d5f]/60">❁</div>
            <div className="pointer-events-none absolute bottom-3 right-3 text-xl text-[#b39a65]/60">❧</div>
          </>
        )}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}

export default function InvitePage({ params }: PageProps) {
  const [opened, setOpened] = useState(false)

  if (!opened) {
    return <OpeningScreen onOpen={() => setOpened(true)} />
  }

  const { id } = React.use(params)
  const guest = guests[id]

  if (!guest) return notFound()

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Image src="/frame/bg1.png" alt="background" fill priority className="object-cover object-center scale-105" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(46,61,34,0.58)_0%,rgba(68,84,50,0.48)_30%,rgba(239,231,207,0.84)_100%)]" />
      <div className="absolute inset-0 bg-[url('/frame/paper.png')] opacity-20 mix-blend-multiply" />

      <div className="absolute left-0 top-0 h-44 w-44 bg-[#d6c28f]/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-52 w-52 bg-[#8f9f6f]/45 blur-3xl" />

      <FloralFrame />
      <BackgroundMusic />
      <FloatingFlowers />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
        className="relative z-10 mx-auto max-w-md space-y-10 px-4 pb-28 pt-20"
      >
        <motion.div variants={sectionMotion} transition={{ duration: 0.9 }}>
          <InvitationCard className="backdrop-blur-md">
            <p className="mb-4 text-center text-xs uppercase tracking-[0.45em] text-[#7d8b59]">Wedding Invitation</p>
            <h1 className="text-center text-4xl leading-relaxed text-[#4e5b35]">
              ឈឿន គង្គាភិរុណភិរក្សបុត្រ
              <br />
              <span className="text-[#ac8d56]">&</span>
              <br />
              ប៉ែន សុម៉ាលី
            </h1>
            <div className="mx-auto my-5 h-px w-44 bg-gradient-to-r from-transparent via-[#b89d68] to-transparent" />
            <p className="text-center text-xs uppercase tracking-[0.35em] text-[#8b946f]">Together with our families</p>
            <p className="mt-4 text-center text-lg text-[#65724a]">Welcome Dear {guest.name} 💚</p>
          </InvitationCard>
        </motion.div>

        <motion.div variants={sectionMotion}>
          <InvitationCard className="bg-gradient-to-b from-[#fdf8ea]/95 to-[#e9dcc0]/90" ornament={false}>
            <p className="mb-2 text-center text-xs uppercase tracking-[0.35em] text-[#8b946f]">Countdown to our day</p>
            <Countdown />
          </InvitationCard>
        </motion.div>

        <motion.div variants={sectionMotion}>
          <InvitationCard>
            <p className="text-center text-lg text-[#7c875f]">សិរីមង្គលអាពាហ៍ពិពាហ៍</p>
            <h2 className="mb-3 text-center text-3xl text-[#ab8a53]">Formal Event Details</h2>
            <p className="mb-7 text-center text-[#6e7952]">We are honored to celebrate this joyful day with you.</p>

            <div className="grid gap-4 text-[#5e6744] sm:grid-cols-2">
              <div className="rounded-2xl border border-[#dfceab] bg-[#fffef9]/90 p-4 shadow-inner">
                <p className="text-xs uppercase tracking-[0.3em] text-[#ab8a53]">Date</p>
                <p className="mt-2 text-lg">Saturday, 16 January 2027</p>
              </div>
              <div className="rounded-2xl border border-[#dfceab] bg-[#fffef9]/90 p-4 shadow-inner">
                <p className="text-xs uppercase tracking-[0.3em] text-[#ab8a53]">Time</p>
                <p className="mt-2 text-lg">Reception starts at 3:00 PM</p>
              </div>
              <div className="rounded-2xl border border-[#dfceab] bg-[#fffef9]/90 p-4 shadow-inner sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.3em] text-[#ab8a53]">Venue</p>
                <p className="mt-2 text-lg">Phnom Penh Grand Ballroom, Phnom Penh</p>
                <p className="mt-1 text-sm text-[#889268]">Dress code: Elegant Traditional / Formal Attire</p>
              </div>
            </div>

            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[#b89d68] to-transparent" />

            <div className="rounded-3xl border border-[#ddcca8] bg-[#fef9ec]/90 p-6 text-center">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#8b946f]">Attendance Confirmation</p>
              <form action="/api/rsvp" method="POST" className="flex flex-col gap-4 text-left">
                <input type="hidden" name="id" value={id} />
                <select
                  name="attending"
                  className="rounded-2xl border border-[#d7c7a3] bg-white/95 p-3 text-[#4d5b35] outline-none focus:ring-2 focus:ring-[#93a26f]/60"
                >
                  <option value="yes">✅ Accept with pleasure</option>
                  <option value="no">🙏 Regretfully decline</option>
                </select>
                <button
                  type="submit"
                  className="rounded-2xl bg-gradient-to-r from-[#8f9f6f] to-[#768858] py-3 text-white shadow-[0_12px_30px_rgba(58,77,42,0.35)] transition duration-300 hover:scale-[1.02]"
                >
                  Confirm Attendance
                </button>
              </form>
              <p className="mt-4 text-sm text-[#7f8d5f]">Allowed seats for your invitation: {guest.allowed}</p>
            </div>
          </InvitationCard>
        </motion.div>

        <Parallax speed={-8}>
          <section>
            <InvitationCard className="bg-gradient-to-b from-[#fbf5e7]/95 to-[#ede0c2]/90">
              <p className="mb-2 text-center text-xs uppercase tracking-[0.35em] text-[#8b946f]">Timeline</p>
              <h2 className="text-center text-4xl text-[#4f5c36]">Our Love Story</h2>
              <p className="mx-auto mt-4 max-w-md text-center leading-7 text-[#6c7650]">
                A beautiful journey began with friendship, grew with trust, and today blossoms into a lifetime promise.
              </p>
              <div className="relative mt-8 space-y-5 pl-8">
                <div className="absolute bottom-0 left-2 top-1 w-px bg-gradient-to-b from-[#cfb480]/20 via-[#bc9f67] to-[#cfb480]/20" />
                {[
                  { year: '2018', title: 'First Meeting', desc: 'We met as friends and discovered a calm joy in every conversation.' },
                  { year: '2020', title: 'Growing Together', desc: 'From shared dreams to difficult days, we learned what commitment truly means.' },
                  { year: '2022', title: 'Promise of Forever', desc: 'We promised to walk through every season hand in hand with faith and kindness.' },
                  { year: '2027', title: 'Wedding Day', desc: 'With grateful hearts, we celebrate the beginning of our forever as husband and wife.' },
                ].map((item) => (
                  <div key={item.year} className="relative rounded-2xl border border-[#e1d2b4] bg-[#fffdf7]/90 p-5 shadow-sm">
                    <span className="absolute -left-[1.95rem] top-6 h-4 w-4 rounded-full border-2 border-[#b89d68] bg-[#fffdf7]" />
                    <p className="text-xs uppercase tracking-[0.3em] text-[#aa8952]">{item.year}</p>
                    <h3 className="mt-2 text-2xl text-[#5c6642]">{item.title}</h3>
                    <p className="mt-2 text-[#68734d]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </InvitationCard>
          </section>
        </Parallax>

        <motion.section variants={sectionMotion}>
          <InvitationCard>
            <p className="text-center text-xs uppercase tracking-[0.35em] text-[#8b946f]">Ceremony Infographic</p>
            <h2 className="mt-2 text-center text-4xl text-[#4f5c36]">Ceremony Highlights</h2>
            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-[#e1d2b4] bg-[#fffef8]/95 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[#ab8a53]">Blessing Ceremony</p>
                <p className="mt-2 text-[#69754e]">Traditional blessing and family honoring ceremony in the morning.</p>
              </div>
              <div className="rounded-2xl border border-[#e1d2b4] bg-[#fffef8]/95 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[#ab8a53]">Reception & Toast</p>
                <p className="mt-2 text-[#69754e]">An evening reception with dinner, music, speeches, and joyful celebration.</p>
              </div>
            </div>
          </InvitationCard>
        </motion.section>

        <motion.div variants={sectionMotion}>
          <InvitationCard className="overflow-visible" ornament={false}>
            <p className="mb-5 text-center text-xs uppercase tracking-[0.35em] text-[#8b946f]">Framed Gallery</p>
            <Gallery />
          </InvitationCard>
        </motion.div>

        <motion.div variants={sectionMotion}>
          <InvitationCard className="bg-gradient-to-b from-[#faf3e4]/95 to-[#e6d6b5]/90" ornament={false}>
            <WeddingTimeline />
          </InvitationCard>
        </motion.div>

        <motion.section variants={sectionMotion}>
          <InvitationCard>
            <p className="mb-2 text-center text-xs uppercase tracking-[0.35em] text-[#7d8b59]">Family Gratitude</p>
            <h3 className="mb-4 text-center text-3xl text-[#5a6540]">សូមអរគុណពីដួងចិត្ត</h3>
            <p className="mx-auto max-w-md text-center leading-8 text-[#69734d]">
              សូមអរគុណចំពោះក្តីស្រឡាញ់ ការគាំទ្រ និងការចំណាយពេលវេលាមកចូលរួមថ្ងៃពិសេសរបស់យើង។
              វត្តមានរបស់អ្នកគឺជាអំណោយដ៏មានតម្លៃបំផុតសម្រាប់គ្រួសារថ្មីរបស់យើង។
            </p>
          </InvitationCard>
        </motion.section>

        <motion.section variants={sectionMotion}>
          <InvitationCard>
            <p className="mb-2 text-center text-xs uppercase tracking-[0.35em] text-[#7d8b59]">Wedding Gift from Attendees</p>
            <h3 className="mb-6 text-center text-3xl text-[#5a6540]">ជូនពរ និងអំណោយ</h3>
            <div className="mx-auto flex max-w-sm flex-col items-center gap-4 text-center">
              <div className="rounded-2xl border border-[#d7c39a] bg-white p-3 shadow-md">
                <Image
                  src={giftInfo.qrImage}
                  alt="Gift QR Code"
                  width={180}
                  height={180}
                  className="h-[180px] w-[180px] rounded-xl object-cover"
                />
              </div>
              <p className="text-sm text-[#ab8a53]">Scan QR for wedding gift</p>
              <p className="text-lg text-[#5a6540]">{giftInfo.accountName}</p>
              <p className="text-[#69734d]">Contact: {giftInfo.contact}</p>
            </div>
          </InvitationCard>
        </motion.section>
      </motion.div>
    </div>
  )
}
