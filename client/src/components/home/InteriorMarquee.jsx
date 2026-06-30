"use client";

import { ebGaramond } from "@/lib/fonts";
import Marquee from "@/components/site/Marquee";

// Automatically generate arrays of 25 items each
// Row 1 will use images 1.webp to 25.webp
const rowOneImages = Array.from(
  { length: 25 },
  (_, i) => `/interior/${i + 1}.webp`,
);

// Row 2 will use images 26.webp to 50.webp
const rowTwoImages = Array.from(
  { length: 25 },
  (_, i) => `/interior/${i + 26}.webp`,
);

export default function InteriorMarquee() {
  return (
    <section className="bg-rich-black py-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <p className="text-[10px] uppercase tracking-[0.35em] text-gold text-center mb-4">
          Interior Design
        </p>

        <h2
          className={`${ebGaramond.className} text-white text-center text-5xl md:text-6xl`}
        >
          Crafted For Living
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {/* TOP MARQUEE: Left to Right */}
        <Marquee direction="right">
          {rowOneImages.map((src, index) => (
            <div
              key={`row1-${index}`}
              className="group relative w-[340px] overflow-hidden rounded-2xl shrink-0"
            >
              <img
                src={src}
                alt={`Interior layout ${index + 1}`}
                className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </Marquee>

        {/* BOTTOM MARQUEE: Right to Left */}
        <Marquee direction="left">
          {rowTwoImages.map((src, index) => (
            <div
              key={`row2-${index}`}
              className="group relative w-[340px] overflow-hidden rounded-2xl shrink-0"
            >
              <img
                src={src}
                alt={`Interior layout ${index + 26}`}
                className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
