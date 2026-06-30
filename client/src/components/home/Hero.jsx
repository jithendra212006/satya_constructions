"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-rich-black py-28">
      {/* Background Image */}
      <img
        src="/hero-building.jpeg"
        alt="Satya Constructions"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Aurora */}
      <div className="absolute inset-0 bg-aurora opacity-70" />

      <motion.div className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full bg-gold/25 blur-[140px] animate-aurora" />

      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/20 blur-[140px] animate-aurora"
        style={{ animationDelay: "5s" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-rich-black/30 via-transparent to-rich-black" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-6xl"
      >
        <p className="text-[10px] uppercase tracking-[0.5em] text-gold mb-8 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-gold" />
          Vijayawada • Est. 2020
          <span className="w-8 h-px bg-gold" />
        </p>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-none">
          Building Dreams
          <br />
          Into{" "}
          <span
            className="italic"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.85 0.15 290) 0%, oklch(0.65 0.25 295) 50%, oklch(0.55 0.28 305) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Landmarks
          </span>
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto mt-10 text-lg">
          Premium apartments, villas and commercial projects built with quality,
          trust and engineering excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
          <Link
            href="/projects"
            className="bg-gold text-rich-black px-12 py-5 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-white transition-all inline-flex items-center justify-center gap-3"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="glass-dark text-white px-12 py-5 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-white/10 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold to-transparent animate-float-slow" />
      </div>
    </section>
  );
}
