"use client";

import { ebGaramond } from "@/lib/fonts";

export default function ProjectsHero() {
  return (
    <section className="pt-32 sm:pt-40 pb-20 lg:pb-28 bg-rich-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-[10px] uppercase tracking-[0.4em] text-violet-400 mb-4">
          Portfolio
        </p>

        <h1
          className={`${ebGaramond.className} text-5xl md:text-7xl lg:text-8xl leading-none`}
        >
          Our Projects
        </h1>

        <p className="text-white/60 max-w-2xl mt-6 text-base md:text-lg leading-relaxed">
          A curated portfolio of residential communities, luxury villas,
          commercial developments, and landmark projects shaping the future of
          Vijayawada.
        </p>
      </div>
    </section>
  );
}
