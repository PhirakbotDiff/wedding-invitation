"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function normalizeInviteCode(value: string | null | undefined): string | null {
  if (!value) return null;

  try {
    const cleaned = decodeURIComponent(value).trim().toUpperCase();
    return cleaned || null;
  } catch {
    const cleaned = value.trim().toUpperCase();
    return cleaned || null;
  }
}

function getInviteCodeFromUrl(): string | null {
  const query = new URLSearchParams(window.location.search);

  const fromSearch =
    query.get("code") ||
    query.get("invite") ||
    query.get("startapp") ||
    query.get("tgWebAppStartParam");

  if (fromSearch) return fromSearch;

  const rawHash = window.location.hash.startsWith("#")
    ? window.location.hash.slice(1)
    : window.location.hash;

  if (!rawHash) return null;

  const hashParams = new URLSearchParams(rawHash);
  return (
    hashParams.get("code") ||
    hashParams.get("invite") ||
    hashParams.get("startapp") ||
    hashParams.get("tgWebAppStartParam")
  );
}

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void;
        initDataUnsafe?: {
          start_param?: string;
        };
      };
    };
  }
}

export default function Home() {
  const [inviteCode, setInviteCode] = useState<string | null>(null);

  useEffect(() => {
    const byQuery = normalizeInviteCode(getInviteCodeFromUrl());

    const tgStartParam = normalizeInviteCode(
      window.Telegram?.WebApp?.initDataUnsafe?.start_param
    );

    const resolvedCode = tgStartParam ?? byQuery;

    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
    }

    if (resolvedCode) {
      setInviteCode(resolvedCode);
      window.location.replace(`/invite/${encodeURIComponent(resolvedCode)}`);
    }
  }, []);

  const inviteHref = useMemo(() => {
    return inviteCode ? `/invite/${encodeURIComponent(inviteCode)}` : "/invite/G001";
  }, [inviteCode]);

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
            href={inviteHref}
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
