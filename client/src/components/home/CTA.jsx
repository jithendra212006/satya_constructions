"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ebGaramond } from "@/lib/fonts";

export default function CTA() {
  return (
    <section className="bg-gold py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] text-white/80 mb-6">
          Start Your Journey
        </p>

        <h2
          className={`${ebGaramond.className} text-5xl md:text-6xl lg:text-7xl text-white leading-tight`}
        >
          Let&apos;s Build Something
          <br />
          Extraordinary Together
        </h2>

        <p className="mt-8 text-white/80 max-w-2xl mx-auto text-lg">
          Whether you&apos;re looking for your dream home, a luxury villa, or a
          commercial investment, Satya Constructions is ready to turn your
          vision into reality.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 mt-12 bg-white text-rich-black px-10 py-5 rounded-full text-xs font-semibold uppercase tracking-[0.25em] hover:scale-105 transition-all duration-300"
        >
          Contact Us
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
