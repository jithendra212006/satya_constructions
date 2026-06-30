"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, MessageCircle } from "lucide-react";
import { ebGaramond } from "@/lib/fonts";

export default function ProjectHero({ project }) {
  return (
    <section className="relative overflow-hidden">
      {/* Placeholder Banner */}
      <div className="absolute inset-0">
        {project.cover_image ? (
          <img
            src={project.cover_image}
            alt={project.name}
            className="w-full h-full object-cover opacity-90"
          />
        ) : (
          <div
            className="
              w-full h-full
              bg-gradient-to-br
              from-violet-950/40
              via-black
              to-black
            "
          />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24">
        <Link
          href="/projects"
          className="
            inline-flex
            items-center
            gap-2
            text-white/50
            hover:text-violet-400
            transition
            mb-10
          "
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <div className="flex flex-wrap gap-3 mb-6">
          <span
            className="
              px-4 py-2
              rounded-full
              bg-violet-500/20
              border border-violet-500/30
              text-violet-300
              text-xs
              uppercase
              tracking-[0.25em]
            "
          >
            {project.status}
          </span>

          {project.vastu && (
            <span
              className="
                px-4 py-2
                rounded-full
                border border-white/10
                text-white/60
                text-xs
                uppercase
                tracking-[0.25em]
              "
            >
              Vastu Compliant
            </span>
          )}
        </div>

        <h1
          className={`
            ${ebGaramond.className}
            text-5xl
            md:text-6xl
            lg:text-7xl
            leading-none
            max-w-4xl
          `}
        >
          {project.name}
        </h1>

        <div className="flex items-center gap-2 mt-6 text-white/60">
          <MapPin size={16} />
          {project.location}
        </div>

        {/* Pricing Card */}
        <div
          className="
            mt-12
            max-w-3xl
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
          "
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-violet-400 uppercase tracking-[0.3em] text-xs mb-3">
                Pricing
              </p>

              <h3 className={`${ebGaramond.className} text-3xl md:text-4xl`}>
                Price On Request
              </h3>

              <p className="text-white/50 mt-3">
                Contact our team for pricing, floor plans and brochure.
              </p>
            </div>

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
                whitespace-nowrap
              "
            >
              <MessageCircle size={18} />
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
