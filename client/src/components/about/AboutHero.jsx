"use client";

import { ebGaramond } from "@/lib/fonts";

export default function AboutHero() {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden bg-rich-black">
      {/* Background Image */}
      <img
        src="/about-bg.jpeg"
        alt="Blueprint"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Purple Glow */}
      <div className="absolute inset-0 bg-aurora opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gold mb-8">
          WHO WE ARE
        </p>

        <h1
          className={`${ebGaramond.className} text-white text-5xl md:text-7xl lg:text-8xl leading-none`}
        >
          About Satya Constructions
        </h1>

        <p className="mt-10 text-lg md:text-xl uppercase tracking-[0.35em] text-gold font-light">
          Building Trust Through Excellence
        </p>
      </div>
    </section>
  );
}
