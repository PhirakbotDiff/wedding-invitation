import { CalendarDays, ImageIcon, MapPin, MessageSquare, Volume2 } from "lucide-react";

interface ClassicKhmerInvitationCardProps {
  guestName: string;
}

export default function ClassicKhmerInvitationCard({ guestName }: ClassicKhmerInvitationCardProps) {
  return (
    <section className="relative mx-auto w-full max-w-sm">
      <div className="absolute right-4 top-4 z-20 rounded-xl bg-white/90 p-2 text-[#8b6b42] shadow-md">
        <Volume2 className="h-5 w-5" />
      </div>

      <div className="relative overflow-hidden rounded-[1.8rem] border border-[#a48a62]/45 bg-[url('/frame/bg1.png')] bg-cover bg-center p-4">
        <div className="absolute inset-0 bg-white/65" />

        <div className="relative z-10 rounded-[1.5rem] px-6 pb-7 pt-10 text-center shadow-inner">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 to-transparent" />

          <h2 className="mt-3 text-3xl leading-tight text-[#7a5a34]">សិរីមង្គលអាពាហ៍ពិពាហ៍</h2>

          <p className="mt-6 text-base leading-relaxed text-[#57462f]">សូមគោរពអញ្ជើញ</p>
          <p className="text-2xl text-[#6d5130]">{guestName}</p>

          <div className="mt-7 space-y-2 text-[#54432e]">
            <p className="text-sm">ថ្ងៃសៅរ៍ ទី១៦ ខែមករា ឆ្នាំ២០២៧</p>
            <p className="text-sm">ចាប់ផ្តើម ៥:០០ ល្ងាច</p>
            <p className="text-sm">Phnom Penh Grand Ballroom</p>
          </div>

          <p className="mt-6 text-sm leading-7 text-[#695338]">
            វត្តមានរបស់អ្នកគឺជាកិត្តិយសដ៏ធំធេងសម្រាប់គ្រួសារយើងខ្ញុំ។
            សូមអរគុណសម្រាប់ក្តីស្រឡាញ់ និងការជូនពរ។
          </p>
        </div>

      </div>
    </section>
  );
}
