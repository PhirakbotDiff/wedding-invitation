import { CalendarDays, ImageIcon, MapPin, MessageSquare, Volume2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ClassicKhmerInvitationCardProps {
  guestName: string;
}

export default function ClassicKhmerInvitationCard({ guestName }: ClassicKhmerInvitationCardProps) {
  return (
    <section className="relative mx-auto w-full max-w-sm pt-16">
      <div className="pointer-events-none absolute inset-x-2 top-2 z-30">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-r from-emerald-100/65 via-white/65 to-amber-100/65 px-4 py-3 shadow-[0_12px_30px_rgba(54,83,65,0.2)] backdrop-blur-md"
        >
          <motion.div
            aria-hidden
            animate={{ x: [0, 10, 0], y: [0, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 -top-7 h-16 w-16 rounded-full bg-emerald-200/50 blur-xl"
          />
          <motion.div
            aria-hidden
            animate={{ x: [0, -12, 0], y: [0, 3, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 -bottom-8 h-20 w-20 rounded-full bg-amber-200/40 blur-xl"
          />

          <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-2">
            <motion.svg
              viewBox="0 0 80 60"
              className="h-8 w-10 text-emerald-700/80"
              animate={{ y: [0, -2, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M7 42c16-7 25-16 31-31" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M21 29c6-1 10-4 13-10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <ellipse cx="24" cy="27" rx="4" ry="6" fill="currentColor" opacity=".35"/>
              <ellipse cx="33" cy="17" rx="3" ry="5" fill="currentColor" opacity=".35"/>
            </motion.svg>

            <p className="text-center text-xs font-medium tracking-[0.2em] text-[#6f5d42]">NATURE BLOOM WEDDING</p>

            <motion.svg
              viewBox="0 0 80 60"
              className="h-8 w-10 text-rose-700/70"
              animate={{ y: [0, -3, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M72 42C56 35 47 26 41 11" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <circle cx="50" cy="24" r="5" fill="currentColor" opacity=".32"/>
              <circle cx="44" cy="17" r="4" fill="currentColor" opacity=".25"/>
              <path d="M58 31c-5 0-9-3-12-8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </motion.svg>
          </div>
        </motion.div>
      </div>
      <div className="absolute right-4 top-4 z-20 rounded-xl bg-white/90 p-2 text-[#8b6b42] shadow-md">
        <Volume2 className="h-5 w-5" />
      </div>

      <div className="relative overflow-hidden rounded-[1.8rem] border border-[#a48a62]/45 bg-[url('/frame/bg1.png')] bg-cover bg-center p-4">
        <div className="absolute inset-0 bg-white/65" />

        <div className="relative z-10 rounded-[1.5rem] px-4 pb-4 pt-10 text-center shadow-inner">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 to-transparent" />

          {/* <h2 className="mt-3 text-3xl leading-tight text-[#7a5a34]">សិរីមង្គលអាពាហ៍ពិពាហ៍</h2> */}
          <p className="text-2xl text-[#6d5130]">មានកិត្តិយសសូមគោរពអញ្ជើញ</p>

          <div className="mt-4 grid grid-cols-2 gap-3 text-[#6d5130]">
            <div className="rounded-xl bg-white/50 px-3 py-2">
              <p className="text-xs font-medium">គ្រួសារកូនប្រុស</p>
              <p className="mt-1 text-sm">ឪពុក៖ ឈឿន សុភាព</p>
              <p className="text-sm">ម្ដាយ៖ ឡុង សុជាតា</p>
            </div>
            <div className="rounded-xl bg-white/50 px-3 py-2">
              <p className="text-xs font-medium">គ្រួសារកូនស្រី</p>
              <p className="mt-1 text-sm">ឪពុក៖ ប៉ែន សុខា</p>
              <p className="text-sm">ម្ដាយ៖ ឆាយ សុភា</p>
            </div>
          </div>

          <p className="mt-6 mb-6 text-sm leading-7 text-[#695338]">
            ឯកឧត្តម អ្នកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា អញ្ជើញចូលរួមជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យសិរីមង្គលក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍កូនប្រុសស្រីរបស់យើងខ្ញុំ
          </p>

          <motion.div
            initial={{ scale: 0.88, opacity: 0, rotate: -8 }}
            animate={{
              scale: [0.95, 1.03, 1],
              opacity: 1,
              rotate: [-6, 4, 0],
              borderRadius: [
                "28% 72% 65% 35% / 35% 35% 65% 65%",
                "63% 37% 42% 58% / 47% 64% 36% 53%",
                "42% 58% 59% 41% / 46% 42% 58% 54%",
              ],
            }}
            transition={{ duration: 1.6, delay: 0.1, ease: "easeOut" }}
            className="mx-auto mb-6 h-40 w-40 overflow-hidden border-4 border-white/80 shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
          >
            <Image
              src="/cover.png"
              alt="Bride and groom"
              width={160}
              height={160}
              className="h-full w-full object-cover"
              priority
            />
          </motion.div>

          <div className="mb-6 text-[#7a5a34]">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center">
              <p className="text-base font-medium">កូនប្រុសនាម</p>
              <motion.span
                aria-label="heart"
                initial={{ scale: 0.9, opacity: 0.7 }}
                animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="text-2xl text-rose-500"
              >
                ♥
              </motion.span>
              <p className="text-base font-medium">កូនស្រីនាម</p>
            </div>
            <div className="mt-1 grid grid-cols-2 gap-3 text-center">
              <p className="text-lg font-semibold leading-relaxed">ឈឿន គង្គាភិរុណភិរក្សបុត្រ</p>
              <p className="text-lg font-semibold leading-relaxed">ប៉ែន សុមាលី</p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-[#695338]">
            ដែលនឹងប្រារពនៅ ថ្ងៃអាទិត្យ ទី២៥ ខែមករា ឆ្នាំ២០២៦ ត្រូវនឹងថ្ងៃ ៧កើត ខែមាឃ សប្តស័ក ព.ស. ២៥៦៩ នៅវេលាម៉ោង ៥ល្ងាច នៅគេហដ្ឋានខាងស្រី ដោយមេត្រីភាព។
          </p>

          <div className="mt-7 space-y-2 text-[#54432e]">
            <p className="text-sm">ថ្ងៃសៅរ៍ ទី១៦ ខែមករា ឆ្នាំ២០២៧</p>
            <p className="text-sm">ចាប់ផ្តើម ៥:០០ ល្ងាច</p>
            <p className="text-sm">Phnom Penh Grand Ballroom</p>
          </div>

        </div>

      </div>
    </section>
  );
}
