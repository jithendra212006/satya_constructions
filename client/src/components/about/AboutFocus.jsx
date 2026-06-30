"use client";

import { ebGaramond } from "@/lib/fonts";

const focusAreas = [
  "Apartments & Flats",
  "Luxury Villas",
  "Design-Build Services",
  "Renovation & Remodeling",
  "Project Management",
  "Civil & Structural Work",
];

export default function AboutFocus() {
  return (
    <section className="bg-rich-black py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">
            Our Core Focus
          </p>

          <h2
            className={`${ebGaramond.className} text-white text-5xl md:text-7xl`}
          >
            What We Build
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((item, index) => (
            <div
              key={item}
              className="
  group
  border border-white/10
  hover:border-gold/50
  hover:bg-white/[0.04]
  hover:-translate-y-2
  transition-all duration-500
  p-8
  bg-white/[0.02]
  rounded-3xl
"
            >
              <p className="text-gold text-5xl font-light mb-5 group-hover:scale-110 transition-transform duration-500">
                0{index + 1}
              </p>

              <h3 className="text-white text-2xl font-semibold tracking-tight leading-snug">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
