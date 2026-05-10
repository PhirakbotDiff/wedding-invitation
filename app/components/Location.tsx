import Image from "next/image";

export default function Location() {
  return (
    <section className="relative mt-10 overflow-hidden rounded-[30px] border border-white/45 p-6">
      <p className="text-center text-xs tracking-[4px] uppercase text-[#7D8663]">Location</p>
      <h3 className="mt-2 text-center text-3xl leading-relaxed text-[#5C6445]">Venue & Map</h3>

      <div className="mt-6 rounded-2xl border border-[#E8E2D2] bg-white/80 p-4">
        <p className="text-sm tracking-[3px] uppercase text-[#A67C52]">Phnom Penh Grand Ballroom</p>
        <p className="mt-2 text-[#6D7456]">Phnom Penh, Cambodia</p>

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
      </div>
    </section>
  );
}
