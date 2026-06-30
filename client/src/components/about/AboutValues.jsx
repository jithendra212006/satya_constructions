"use client";

import { ShieldCheck, Eye, Clock, Compass, Leaf, Heart } from "lucide-react";

import { ebGaramond } from "@/lib/fonts";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Upholding the highest ethical standards in all our dealings.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Clear communication and processes from start to finish.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "Committed to completing projects on schedule.",
  },
  {
    icon: Compass,
    title: "Precision Engineering",
    desc: "Meticulous attention to detail and quality in every aspect.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Eco-friendly practices and materials wherever possible.",
  },
  {
    icon: Heart,
    title: "Client Satisfaction",
    desc: "Ensuring every client's vision becomes reality.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-rich-black py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}

        <div className="text-center mb-20">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">
            Our Values
          </p>

          <h2
            className={`${ebGaramond.className} text-white text-5xl md:text-7xl tracking-[-0.02em]`}
          >
            Built On Values
          </h2>

          <p className="text-white/50 mt-6 max-w-2xl mx-auto">
            The principles that guide every project, every decision, and every
            relationship we build.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="
                group
                border border-white/10
                hover:border-gold/50
                hover:-translate-y-2
                transition-all duration-500
                p-8
                bg-white/[0.02]
                rounded-3xl
              "
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-gold" />
                </div>

                <h3 className="text-white text-2xl font-semibold tracking-tight mb-4">
                  {value.title}
                </h3>

                <p className="text-white/60 leading-relaxed">{value.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
