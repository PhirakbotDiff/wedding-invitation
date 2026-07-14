"use client";

import Image from "next/image";
import { useLang } from "@/app/context/LanguageContext";
import { t } from "@/app/lib/i18n";

const MAP_LINK = "https://maps.app.goo.gl/xUz89bCcNzkkYVHA6";

export default function Location() {
  const { lang } = useLang();
  const tx = t(lang);

  return (
    <section className="relative mt-10 overflow-hidden rounded-[30px] border border-white/45 p-6">
      <p className="text-center text-xs tracking-[4px] uppercase text-[#7D8663]">{tx.location_overline}</p>
      <h3 className="mt-2 text-center text-3xl leading-relaxed text-[#5C6445]">{tx.location_title}</h3>

      <div className="mt-6 rounded-2xl border border-[#E8E2D2] bg-white/80 p-4">
        <p className="text-sm tracking-[3px] uppercase text-[#A67C52]">{tx.location_name}</p>
        <p className="mt-2 text-[#6D7456]">{tx.location_city}</p>

        <div className="mt-4 overflow-hidden rounded-xl border border-[#E8E2D2]">
          <Image
            src="/location.png"
            alt="Wedding location map"
            width={900}
            height={600}
            className="h-auto w-full object-cover"
            priority={false}
          />
        </div>

        <a
          href={MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#7E9270] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#6D8160]"
        >
          {tx.location_map_btn}
        </a>
      </div>
    </section>
  );
}
