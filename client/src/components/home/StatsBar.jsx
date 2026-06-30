"use client";

import { motion } from "framer-motion";
import { ebGaramond } from "@/lib/fonts";

const stats = [
  {
    value: "30+",
    label: "Years Experience",
  },
  {
    value: "5,000+",
    label: "Client Consulted",
  },
  {
    value: "12,00,000+",
    label: "Sq Ft Developed",
  },
  {
    value: "200+",
    label: "Projects Delivered",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-gold py-14 md:py-18">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="text-center"
            >
              <h3
                className={`${ebGaramond.className} text-rich-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-none italic`}
              >
                {stat.value}
              </h3>

              <div className="w-12 h-px bg-rich-black/30 mx-auto my-4" />

              <p className="text-rich-black/80 text-[10px] md:text-xs uppercase tracking-[0.35em] font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
