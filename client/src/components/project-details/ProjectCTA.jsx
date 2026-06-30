"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { ebGaramond } from "@/lib/fonts";

export default function ProjectCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border border-white/10
          bg-white/[0.02]
          backdrop-blur-xl
          p-10 md:p-16
        "
      >
        {/* Glow */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-violet-500/10 blur-[120px]" />

        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-500/10 blur-[120px]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-violet-400 uppercase tracking-[0.35em] text-xs mb-5">
            Schedule A Visit
          </p>

          <h2
            className={`${ebGaramond.className} text-4xl md:text-6xl leading-[1.05] mb-6`}
          >
            Experience The Project
            <br />
            Before You Decide
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Connect with our team to receive detailed pricing, floor plans,
            brochures and schedule a personalized site visit.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/916302395244"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-gradient-to-r
                from-violet-500
                to-purple-500
                px-8
                py-4
                text-white
                font-medium
                hover:scale-[1.02]
                transition-all
              "
            >
              <MessageCircle size={18} />
              Enquire On WhatsApp
            </a>

            <a
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border border-white/10
                px-8
                py-4
                text-white
                hover:border-violet-500/40
                transition-all
              "
            >
              Contact Us
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
