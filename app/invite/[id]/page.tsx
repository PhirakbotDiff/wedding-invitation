'use client'

import * as React from 'react'
import { useMemo, useState } from "react";

import OpeningScreen from "@/app/components/OpeningScreen";
import Countdown from "@/app/components/Countdown";
import FloatingFlowers from "@/app/components/FloatingFlowers";
import Gallery from "@/app/components/Gallery";
import FloralFrame from "@/app/components/FloralFrame";
import WeddingTimeline from "@/app/components/WeddingTimeline";
import ClassicKhmerInvitationCard from "@/app/components/ClassicKhmerInvitationCard";
import Location from "@/app/components/Location";

import { motion } from "framer-motion";
import { Home, Gem, Heart, ImageIcon, MapPin, Gift, Sparkles, Crown, Church, Wine, ChevronDown, type LucideIcon } from "lucide-react";

import Image from "next/image";
import { useParams } from "next/navigation";
import { getGuestByInviteId } from "@/app/lib/guests";
import { LanguageProvider, useLang } from "@/app/context/LanguageContext";
import { t } from "@/app/lib/i18n";


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


type MenuSection = {
  id: string;
  label: string;
  icon: LucideIcon;
};

function StickyTopFloralFrame({
  isPlaying,
  onToggleMusic,
}: {
  isPlaying: boolean;
  onToggleMusic: () => void;
}) {
  const { lang, toggleLang } = useLang();
  const tx = t(lang);

  return (
    <div className="sticky top-0 z-30 px-3 pt-3">
      <div className="relative overflow-hidden rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-[0_10px_28px_rgba(74,84,53,0.18)] backdrop-blur-md">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A67C52]/60 to-transparent" />
        <div className="relative flex items-center justify-between gap-2">
          <AnimatedLeafCluster side="left" />
          <p className="flex-1 min-w-0 truncate px-1 text-center text-[10px] tracking-[3px] text-[#66724D] uppercase">
            {tx.our_wedding_day}
          </p>
          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={toggleLang}
              aria-label="Toggle language"
              className="flex h-9 items-center justify-center rounded-full border border-[#9CAF88]/60 bg-white/85 px-2.5 text-[10px] font-medium tracking-wide text-[#5C6445] shadow-sm transition hover:bg-white"
            >
              {tx.lang_toggle}
            </button>
            <button
              type="button"
              onClick={onToggleMusic}
              aria-label={isPlaying ? "Pause music" : "Play music"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#9CAF88]/60 bg-white/85 text-[#5C6445] shadow-sm transition hover:bg-white"
            >
              <span aria-hidden>{isPlaying ? "⏸" : "▶"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomSectionMenu({
  onMenuSelect,
  menuItems,
}: {
  onMenuSelect: (sectionId: string) => void;
  menuItems: MenuSection[];
}) {
  const [activeSection, setActiveSection] = React.useState(menuItems[0]?.id ?? "");

  return (
    <div className="fixed inset-x-3 bottom-4 z-40">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-[32px] bg-[#9CAF88]/15 blur-xl" />

      <nav
        aria-label="Section navigation"
        className="relative rounded-[28px] border border-white/70 bg-white/75 shadow-[0_24px_64px_rgba(74,84,53,0.28),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl"
      >
        {/* Top shimmer */}
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

        <ul className="flex items-stretch justify-evenly px-2 py-3">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <li key={item.id} className="flex flex-1">
                <motion.button
                  type="button"
                  onClick={() => {
                    setActiveSection(item.id);
                    onMenuSelect(item.id);
                  }}
                  aria-label={item.label}
                  whileTap={{ scale: 0.82 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="flex flex-1 flex-col items-center justify-center gap-0 focus:outline-none"
                >
                  {/* Orb + icon — fixed 44×44 container */}
                  <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center">
                    {isActive && (
                      <>
                        <motion.div
                          layoutId="nav-halo"
                          className="absolute -inset-1 rounded-full bg-[#9CAF88]/30 blur-[10px]"
                          transition={{ type: "spring", stiffness: 360, damping: 28 }}
                        />
                        <motion.div
                          layoutId="nav-orb"
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#B0C89A] via-[#9CAF88] to-[#6B8B5E] shadow-[0_8px_24px_rgba(107,139,94,0.55),inset_0_1px_0_rgba(255,255,255,0.45)]"
                          transition={{ type: "spring", stiffness: 360, damping: 28 }}
                        >
                          <div className="absolute inset-x-2 top-1.5 h-[40%] rounded-full bg-gradient-to-b from-white/50 to-transparent" />
                        </motion.div>
                      </>
                    )}
                    <motion.div
                      aria-hidden
                      animate={isActive ? { scale: 1.15, y: -1 } : { scale: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 420, damping: 22 }}
                      className="relative z-10"
                    >
                      <Icon
                        size={20}
                        strokeWidth={isActive ? 2.2 : 1.6}
                        className={isActive ? "text-white" : "text-[#8A9A74]"}
                      />
                    </motion.div>
                  </div>

                  {/* Label — always in layout, opacity controls visibility */}
                  <motion.span
                    animate={{ opacity: isActive ? 1 : 0.45 }}
                    transition={{ duration: 0.18 }}
                    className={`mt-1.5 text-[10px] font-semibold uppercase leading-none tracking-wider ${
                      isActive ? "text-[#4A5A36]" : "text-[#8A9273]"
                    }`}
                  >
                    {item.label}
                  </motion.span>

                  {/* Indicator dot — always reserves space */}
                  <div className="mt-1.5 flex h-1 items-center justify-center">
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="h-[3px] w-4 rounded-full bg-gradient-to-r from-[#9CAF88] to-[#A67C52]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </div>
                </motion.button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

function AnimatedLeafCluster({ side = "left" }: { side?: "left" | "right" }) {
  const xDirection = side === "left" ? -1 : 1;

  return (
    <motion.svg
      viewBox="0 0 120 42"
      aria-hidden
      className={`h-10 w-28 shrink-0 ${side === "right" ? "-scale-x-100" : ""}`}
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


function useTelegramScrollGuard(enabled: boolean) {
  const scrollRootRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    if (!enabled) {
      htmlEl.classList.remove("tg-webview");
      bodyEl.classList.remove("tg-webview");
      return;
    }

    const el = scrollRootRef.current;
    if (!el) return;

    htmlEl.classList.add("tg-webview");
    bodyEl.classList.add("tg-webview");

    const syncViewportHeight = () => {
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
      el.style.height = `${Math.round(viewportHeight)}px`;
    };

    syncViewportHeight();
    window.visualViewport?.addEventListener("resize", syncViewportHeight);
    window.addEventListener("resize", syncViewportHeight);

    return () => {
      window.visualViewport?.removeEventListener("resize", syncViewportHeight);
      window.removeEventListener("resize", syncViewportHeight);
      htmlEl.classList.remove("tg-webview");
      bodyEl.classList.remove("tg-webview");
      el.style.height = "";
    };
  }, [enabled]);

  return scrollRootRef;
}

const giftInfo = {
  accountName: "ឈឿន គង្គាភិរុណភិរក្សបុត្រ",
  contact: "+855 12 345 678",
  qrImage: "/cover.png",
};

function InvitePageInner({ id, guest }: { id: string; guest: { name: string; allowed: number } }) {
  const { lang } = useLang();
  const tx = t(lang);

  const [opened, setOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const isTelegramWebView = useMemo(() => typeof window !== "undefined" && Boolean(window.Telegram?.WebApp), []);
  const scrollRootRef = useTelegramScrollGuard(isTelegramWebView);

  const menuSections: MenuSection[] = [
    { id: "invitation-hero",  label: tx.menu_hero,      icon: Home      },
    { id: "wedding-details",  label: tx.menu_details,   icon: Gem       },
    { id: "love-story",       label: tx.menu_love,      icon: Heart     },
    { id: "gallery",          label: tx.menu_gallery,   icon: ImageIcon },
    { id: "location",         label: tx.menu_location,  icon: MapPin    },
    { id: "wedding-gift",     label: tx.menu_gift,      icon: Gift      },
  ];

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsMusicPlaying(true);
    const onPause = () => setIsMusicPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [opened]);

  const toggleMusic = React.useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setIsMusicPlaying(false);
      }
      return;
    }

    audio.pause();
  }, []);

  const handleMenuSelect = React.useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  if (!opened) {
    return <OpeningScreen onOpen={() => setOpened(true)} guestName={guest.name} />;
  }

  return (
    <div ref={scrollRootRef} className={`relative min-h-dvh overflow-x-hidden ${isTelegramWebView ? "tg-scroll-root" : "invite-scroll-root"}`}>

      {/* Background */}
      <Image
        src="/frame/bg1.png"
        alt="background"
        fill
        priority
        className="object-cover object-center scale-105"
      />

      {/* Soft Overlay */}
      <div className={`absolute inset-0 bg-white/${isTelegramWebView ? "70" : "55"} ${isTelegramWebView ? "" : "backdrop-blur-[2px]"}`} />

      {/* Ambient Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[260px] h-[260px] bg-[#DDE6CC]/40 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#9CAF88]/20 blur-[120px] rounded-full" />

      <StickyTopFloralFrame isPlaying={isMusicPlaying} onToggleMusic={toggleMusic} />
      <BottomSectionMenu onMenuSelect={handleMenuSelect} menuItems={menuSections} />
      {!isTelegramWebView && <FloralFrame />}
      <audio ref={audioRef} loop><source src="/music.mp3" type="audio/mpeg" /></audio>
      {!isTelegramWebView && <FloatingFlowers />}
      <div className="absolute left-3 top-40 z-10 text-3xl text-[#9CAF88]/60">❁</div>
      <div className="absolute right-5 top-[28rem] z-10 -rotate-12 text-4xl text-[#A67C52]/40">❋</div>
      <div className="absolute left-2 bottom-40 z-10 rotate-12 text-4xl text-[#7D8663]/40">❀</div>
      <div className="absolute right-3 bottom-60 z-10 text-3xl text-[#9CAF88]/50">❧</div>

      {/* Main Content */}
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

        {/* Hero */}
        <motion.div
          id="invitation-hero"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 1 }}
          className="relative mb-10 overflow-hidden rounded-[30px] border border-white/50 text-center shadow-[0_16px_48px_rgba(74,84,53,0.14)]"
        >
          {/* Full-bleed cover photo */}
          <div className="relative h-60 w-full overflow-hidden">
            <Image
              src="/cover.png"
              alt="Couple portrait"
              fill
              priority
              className="object-cover object-center scale-105"
            />
            {/* Bottom fade into card */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent" />
            {/* Top vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
          </div>

          {/* Floating medallion overlapping photo */}
          <div className="relative -mt-7 flex justify-center">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#D8C7A0]/70 bg-white/95 shadow-[0_8px_24px_rgba(166,124,82,0.2)]"
            >
              <span className="text-2xl text-[#A67C52]">❁</span>
            </motion.div>
          </div>

          {/* Text content */}
          <div className="px-6 pb-7 pt-4">

            {/* Overline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[10px] tracking-[5px] text-[#7D8663] uppercase"
            >
              {tx.invitation_label}
            </motion.p>

            {/* Divider */}
            <div className="mx-auto my-3 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#D8C7A0]/60" />
              <span className="text-xs text-[#A67C52]/70">✦</span>
              <div className="h-px flex-1 bg-[#D8C7A0]/60" />
            </div>

            {/* Khmer names */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              <p className="text-xl leading-relaxed text-[#535C39]">ឈឿន គង្គាភិរុណភិរក្សបុត្រ</p>
            </motion.div>

            {/* Animated heart divider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="my-2 flex items-center gap-2"
            >
              <div className="h-px flex-1 bg-[#D8C7A0]/40" />
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-lg text-[#A67C52]"
              >
                ♥
              </motion.span>
              <div className="h-px flex-1 bg-[#D8C7A0]/40" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <p className="text-xl leading-relaxed text-[#535C39]">ប៉ែន សុម៉ាលី</p>
            </motion.div>

            {/* English names */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="mt-2 text-xs tracking-[4px] text-[#7D8663] uppercase"
            >
              Phirakbot &amp; Maly
            </motion.p>

            {/* Date badge */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D8C7A0]/60 bg-[#D8C7A0]/20 px-4 py-1.5"
            >
              <div className="h-1 w-1 rounded-full bg-[#A67C52]" />
              <span className="text-[10px] tracking-[3px] text-[#A67C52] uppercase">16 · January · 2027</span>
              <div className="h-1 w-1 rounded-full bg-[#A67C52]" />
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="pb-4"
          >
            <ChevronDown size={18} className="mx-auto text-[#9CAF88]/50" />
          </motion.div>
        </motion.div>

        {/* Classic Khmer Card */}
        <motion.div
          id="wedding-details"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="mb-10"
        >
          <ClassicKhmerInvitationCard guestName={guest.name} />
        </motion.div>

        {/* Countdown */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="relative mb-10 overflow-hidden rounded-[28px] border border-white/40 p-4"
        >
          <SectionFlower side="right" />
          <Countdown />
        </motion.div>

        {/* Wedding Details Card */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="relative border rounded-[32px] p-8 overflow-hidden"
        >
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[250px] h-[250px] rounded-full" />
          </div>

          <SectionFlower side="left" />
          <div className="relative z-10">

            <p className="text-lg text-[#7D8663] text-center mb-3">
              {tx.wedding_details_overline}
            </p>

            <h2 className="text-3xl text-[#A67C52] text-center mb-3">
              {tx.wedding_details_title}
            </h2>

            <p className="mb-7 text-center text-[#7D8663]">{tx.wedding_details_subtitle}</p>

            <div className="grid gap-4 text-[#6D7456] sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E8E2D2] bg-white/80 p-4 text-left">
                <p className="text-xs tracking-[3px] uppercase text-[#A67C52]">{tx.date_label}</p>
                <p className="mt-2 text-lg">{tx.date_value}</p>
              </div>
              <div className="rounded-2xl border border-[#E8E2D2] bg-white/80 p-4 text-left">
                <p className="text-xs tracking-[3px] uppercase text-[#A67C52]">{tx.time_label}</p>
                <p className="mt-2 text-lg">{tx.time_value}</p>
              </div>
              <div className="rounded-2xl border border-[#E8E2D2] bg-white/80 p-4 text-left sm:col-span-2">
                <p className="text-xs tracking-[3px] uppercase text-[#A67C52]">{tx.venue_label}</p>
                <p className="mt-2 text-lg">{tx.venue_value}</p>
                <p className="mt-1 text-sm text-[#8A9273]">{tx.dress_code}</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Love Story */}
        {(() => {
          const MILESTONE_ICONS = [Sparkles, Heart, Gem, Crown] as const;
          const isLast = (i: number) => i === tx.love_story_items.length - 1;

          return (
            <section id="love-story" className="relative mt-10 overflow-hidden rounded-[30px] border border-white/45 px-6 py-10">

              {/* Ambient glows */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#D8C7A0]/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#9CAF88]/15 blur-3xl" />

              <SectionFlower side="right" />

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.18, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-3 inline-block text-2xl text-rose-400"
                >
                  ♥
                </motion.div>
                <p className="mb-1 text-xs tracking-[4px] uppercase text-[#7D8663]">
                  {tx.love_story_title}
                </p>
                <div className="mx-auto mt-3 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D8C7A0]/60" />
                  <span className="text-[10px] tracking-[3px] text-[#A67C52] uppercase">our journey</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D8C7A0]/60" />
                </div>
                <p className="mx-auto mt-4 max-w-xs text-center text-sm leading-7 text-[#7D8663]">
                  {tx.love_story_subtitle}
                </p>
              </motion.div>

              {/* Timeline */}
              <div className="relative mt-10 space-y-5 pl-10">

                {/* Vertical line */}
                <div className="absolute bottom-4 left-[18px] top-2 w-px bg-gradient-to-b from-[#D8C7A0]/10 via-[#D8C7A0]/70 to-[#D8C7A0]/10" />

                {tx.love_story_items.map((item, i) => {
                  const Icon = MILESTONE_ICONS[i] ?? Heart;
                  const last = isLast(i);

                  return (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                      className="relative"
                    >
                      {/* Timeline node */}
                      <div className={`absolute -left-10 top-5 flex h-9 w-9 items-center justify-center rounded-full border-2 shadow-md ${
                        last
                          ? "border-[#A67C52]/60 bg-gradient-to-br from-[#D8C7A0] to-[#A67C52] shadow-[0_4px_16px_rgba(166,124,82,0.4)]"
                          : "border-[#D8C7A0]/70 bg-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                      }`}>
                        {last && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-[#A67C52]/30"
                            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        )}
                        <Icon
                          size={15}
                          strokeWidth={1.8}
                          className={last ? "text-white" : "text-[#A67C52]"}
                        />
                      </div>

                      {/* Card */}
                      <div className={`overflow-hidden rounded-2xl border p-5 shadow-[0_8px_28px_rgba(0,0,0,0.07)] ${
                        last
                          ? "border-[#D8C7A0]/50 bg-[#D8C7A0]/15"
                          : "border-white/60 bg-white/75"
                      }`}>

                        {/* Year badge */}
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-[2px] uppercase ${
                          last
                            ? "bg-[#A67C52]/10 text-[#A67C52]"
                            : "bg-[#9CAF88]/15 text-[#5C6445]"
                        }`}>
                          {item.year}
                        </span>

                        <h3 className={`mt-2 text-xl leading-snug ${last ? "text-[#A67C52]" : "text-[#5C6445]"}`}>
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-6 text-[#6D7456]">{item.desc}</p>

                        {/* Wedding day special footer */}
                        {last && (
                          <div className="mt-3 flex items-center gap-2 border-t border-[#D8C7A0]/40 pt-3">
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                              className="text-[#A67C52]"
                            >
                              ♥
                            </motion.span>
                            <span className="text-[10px] tracking-[3px] text-[#A67C52] uppercase">16 · 01 · 2027</span>
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                              className="text-[#A67C52]"
                            >
                              ♥
                            </motion.span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          );
        })()}

        {/* Ceremony Highlights */}
        <section className="relative mt-10 overflow-hidden rounded-[30px] border border-white/45 px-6 py-10">

          {/* Ambient glows */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-[#D8C7A0]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-[#9CAF88]/15 blur-3xl" />

          <SectionFlower side="left" />

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="mb-1 text-xs tracking-[4px] uppercase text-[#7D8663]">{tx.ceremony_title}</p>
            <h2 className="text-3xl leading-relaxed text-[#535C39]">ពិធីការ</h2>
            <div className="mx-auto mt-3 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D8C7A0]/60" />
              <span className="text-lg text-[#A67C52]/70">✦</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D8C7A0]/60" />
            </div>
          </motion.div>

          {/* Cards */}
          <div className="mt-8 space-y-4">

            {/* Blessing — morning / gold tone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl border border-[#E8E2D2] bg-white/80"
            >
              <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gradient-to-b from-[#D8C7A0] to-[#A67C52]" />

              <div className="flex items-start gap-4 px-5 py-5 pl-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D8C7A0]/50 bg-[#D8C7A0]/25 shadow-[0_4px_16px_rgba(166,124,82,0.12)]">
                  <Church size={22} strokeWidth={1.6} className="text-[#A67C52]" />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="inline-flex rounded-full bg-[#A67C52]/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-[2px] uppercase text-[#A67C52]">
                    Morning
                  </span>
                  <h3 className="mt-1.5 text-lg text-[#535C39]">{tx.ceremony_blessing_label}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#6D7456]">{tx.ceremony_blessing_desc}</p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-[#D8C7A0]/50 to-transparent" />
            </motion.div>

            {/* Reception — evening / sage tone */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl border border-[#E8E2D2] bg-white/80"
            >
              <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-gradient-to-b from-[#9CAF88] to-[#7E9270]" />

              <div className="flex items-start gap-4 px-5 py-5 pl-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#9CAF88]/40 bg-[#9CAF88]/20 shadow-[0_4px_16px_rgba(107,139,94,0.12)]">
                  <Wine size={22} strokeWidth={1.6} className="text-[#5C6445]" />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="inline-flex rounded-full bg-[#9CAF88]/20 px-2.5 py-0.5 text-[10px] font-semibold tracking-[2px] uppercase text-[#5C6445]">
                    Evening
                  </span>
                  <h3 className="mt-1.5 text-lg text-[#535C39]">{tx.ceremony_reception_label}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#6D7456]">{tx.ceremony_reception_desc}</p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-[#9CAF88]/40 to-transparent" />
            </motion.div>
          </div>

          {/* Date footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-2"
          >
            <div className="h-px w-8 bg-[#D8C7A0]/60" />
            <span className="text-[10px] tracking-[3px] text-[#A67C52] uppercase">16 · January · 2027</span>
            <div className="h-px w-8 bg-[#D8C7A0]/60" />
          </motion.div>
        </section>

        {/* Gallery */}
        <motion.div
          id="gallery"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="mt-10"
        >
          <Gallery />
        </motion.div>

        <WeddingTimeline />

        <div id="location">
          <Location />
        </div>

        {/* Wedding Gift */}
        <motion.section
          id="wedding-gift"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="relative mt-10 overflow-hidden rounded-[28px] border border-white/45 p-8"
        >
          <SectionFlower side="left" />
          <p className="mb-2 text-center text-xs tracking-[4px] text-[#7D8663] uppercase">{tx.gift_overline}</p>
          <h3 className="mb-6 text-center text-3xl text-[#5C6445] leading-relaxed">{tx.gift_title}</h3>

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
            <p className="text-[#A67C52] text-sm">{tx.gift_qr}</p>
            <p className="text-[#5C6445] text-lg">{giftInfo.accountName}</p>
            <p className="text-[#6D7456]">{tx.gift_contact} {giftInfo.contact}</p>
          </div>
        </motion.section>

        {/* Thank You */}
        <motion.section
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="relative mt-10 overflow-hidden rounded-[28px] border border-white/45 p-8 text-center"
        >
          <SectionFlower side="right" />
          <p className="mb-2 text-xs tracking-[4px] text-[#7D8663] uppercase">{tx.thank_you_overline}</p>
          <h3 className="mb-4 text-3xl text-[#5C6445] leading-relaxed">{tx.thank_you_title}</h3>
          <p className="mx-auto max-w-md leading-8 text-[#6D7456]">{tx.thank_you_text}</p>
        </motion.section>

        {/* Apology */}
        <motion.section
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="relative mt-10 overflow-hidden rounded-[28px] border border-white/45 p-8 text-center"
        >
          <SectionFlower side="right" />
          <p className="mb-2 text-xs tracking-[4px] text-[#7D8663] uppercase">{tx.apology_overline}</p>
          <h3 className="mb-4 text-3xl text-[#5C6445] leading-relaxed">{tx.apology_title}</h3>
          <p className="mx-auto max-w-md leading-8 text-[#6D7456]">{tx.apology_text}</p>
        </motion.section>

      </motion.div>
    </div>
  );
}

export default function InvitePage() {
  const { id } = useParams<{ id: string }>();
  const guest = getGuestByInviteId(id);

  if (!guest) {
    return (
      <LanguageProvider>
        <div className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
          <div className="max-w-md rounded-2xl border border-[#d8decf] bg-white/90 p-6 shadow-sm">
            <h1 className="mb-3 text-2xl text-[#535C39]">Invitation Not Found</h1>
            <p className="mb-5 text-[#6D7456]">
              Your invite link looks invalid or expired. Please reopen the invitation from Telegram chat.
            </p>
            <a href="/" className="inline-block rounded-full bg-[#7E9270] px-6 py-3 text-white">
              Back to Home
            </a>
          </div>
        </div>
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <InvitePageInner id={id} guest={guest} />
    </LanguageProvider>
  );
}
