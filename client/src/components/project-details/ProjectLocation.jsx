"use client";

import { MapPin } from "lucide-react";
import { ebGaramond } from "@/lib/fonts";

export default function ProjectLocation({ project }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <p className="text-violet-400 uppercase tracking-[0.35em] text-xs mb-4">
        Location
      </p>

      <h2
        className={`${ebGaramond.className} text-4xl md:text-5xl leading-[1.1] mb-14`}
      >
        Project Location
      </h2>

      {/* Full-width Map Container */}
      <div
        className="
          w-full
          h-[450px] md:h-[600px]
          rounded-[32px]
          border border-white/10
          bg-white/[0.02]
          backdrop-blur-xl
          flex items-center justify-center
          overflow-hidden
        "
      >
        {project.google_maps_link ? (
          <iframe
            src={project.google_maps_link}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="md:grayscale md:hover:grayscale-0 transition-all duration-700"
          ></iframe>
        ) : (
          <div className="text-center">
            <MapPin size={52} className="mx-auto text-violet-400 mb-4" />
            <p className="text-white/70">Map coming soon</p>
          </div>
        )}
      </div>
    </section>
  );
}
