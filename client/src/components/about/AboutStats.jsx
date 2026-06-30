"use client";

import { ebGaramond } from "@/lib/fonts";

const stats = [
  {
    value: "200+",
    label: "Projects Worked On",
  },
  {
    value: "5,000+",
    label: "Clients Consulted",
  },
  {
    value: "30+",
    label: "Years Experience",
  },
  {
    value: "12,00,000+",
    label: "Sq Ft Developed",
  },
];

export default function AboutStats() {
  return (
    <section className="bg-gold py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3
                className={`${ebGaramond.className} text-3xl sm:text-4xl md:text-6xl text-white`}
              >
                {stat.value}
              </h3>

              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
