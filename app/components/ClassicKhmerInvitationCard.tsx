import { CalendarDays, ImageIcon, MapPin, MessageSquare, Volume2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ClassicKhmerInvitationCardProps {
  guestName: string;
}

export default function ClassicKhmerInvitationCard({ guestName }: ClassicKhmerInvitationCardProps) {
  return (
    <section className="relative mx-auto w-full max-w-sm pt-4">
      
      {/* <div className="absolute right-4 top-4 z-20 rounded-xl bg-white/90 p-2 text-[#8b6b42] shadow-md">
        <Volume2 className="h-5 w-5" />
      </div> */}

      <div className="relative overflow-hidden rounded-[1.8rem] border border-[#a48a62]/45 bg-[url('/frame/bg1.png')] bg-cover bg-center p-2">
        <div className="absolute inset-0 bg-white/65" />

        <div className="relative z-10 rounded-[1.5rem] px-4 pb-4 pt-10 text-center shadow-inner">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 to-transparent" />

          <h2 className="mt-3 text-3xl leading-tight text-[#7a5a34]">សិរីមង្គលអាពាហ៍ពិពាហ៍</h2>

          <div className="mt-4 grid grid-cols-2 gap-3 text-[#6d5130]">
            <div className="rounded-xl bg-white/50 px-3 py-2">
              <p className="text-sm font-bold">គ្រួសារកូនប្រុស</p>
              <p className="mt-1 text-sm">ឪពុក៖ ឈឿន សុភាព</p>
              <p className="text-sm">ម្ដាយ៖ ឡុង សុជាតា</p>
            </div>
            <div className="rounded-xl bg-white/50 px-3 py-2">
              <p className="text-sm font-bold">គ្រួសារកូនស្រី</p>
              <p className="mt-1 text-sm">ឪពុក៖ ប៉ែន សុខា</p>
              <p className="text-sm">ម្ដាយ៖ ឆាយ សុភា</p>
            </div>
          </div>

          <p className="mt-2 text-2xl text-[#6d5130]">មានកិត្តិយសសូមគោរពអញ្ជើញ</p>

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
              <p className="text-md font-semibold leading-relaxed">ឈឿន គង្គាភិរុណភិរក្សបុត្រ</p>
              <p className="text-lg font-semibold leading-relaxed">ប៉ែន សុមាលី</p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-[#695338]">
            ដែលនឹងប្រារពនៅ ថ្ងៃសៅរ៍ ទី១៦ ខែមករា ឆ្នាំ២០២៧ ត្រូវនឹងថ្ងៃ ៧កើត ខែមាឃ សប្តស័ក ព.ស. ២៥៦៩ នៅវេលាម៉ោង ៥ល្ងាច នៅគេហដ្ឋានខាងស្រី ដោយមេត្រីភាព។
          </p>

        </div>

      </div>
    </section>
  );
}
