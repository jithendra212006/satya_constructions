"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ebGaramond } from "@/lib/fonts";

export default function AboutCTA() {
  return (
    <section className="bg-[#f5f5f7] py-28 lg:py-36">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2
          className={`${ebGaramond.className} text-rich-black text-5xl md:text-6xl lg:text-7xl`}
        >
          Ready to explore our projects?
        </h2>

        <Link
          href="/projects"
          className="
            inline-flex
            items-center
            gap-3
            mt-12
            bg-rich-black
            text-white
            px-12
            py-5
            text-xs
            font-semibold
            uppercase
            tracking-[0.3em]
            hover:bg-gold
            hover:text-rich-black
            transition-all
            duration-500
          "
        >
          Explore Our Projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
