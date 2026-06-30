"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 bg-rich-black text-white overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 bg-aurora opacity-60" />

      {/* Left Glow */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-gold/20 blur-[120px] animate-aurora"
        aria-hidden
      />

      {/* Right Glow */}
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/15 blur-[120px] animate-aurora"
        style={{ animationDelay: "4s" }}
        aria-hidden
      />

      {/* Noise */}
      <div className="absolute inset-0 noise opacity-[0.04]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold mb-6">
            Get In Touch
          </p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[1.02] max-w-5xl">
            Let&apos;s craft
            <br />
            <span className="italic text-gold">something timeless.</span>
          </h1>

          <p className="text-white/60 max-w-xl mt-10 text-lg leading-relaxed font-light">
            Whether it&apos;s a private residence, a commercial floor, or a
            township vision — our team is ready to listen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
