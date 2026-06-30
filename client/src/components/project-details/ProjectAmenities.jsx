"use client";

import { CheckCircle2 } from "lucide-react";
import { ebGaramond } from "@/lib/fonts";

export default function ProjectAmenities({ project }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <p className="text-violet-400 uppercase tracking-[0.35em] text-xs mb-4">
        Lifestyle
      </p>

      <h2
        className={`${ebGaramond.className} text-4xl md:text-5xl leading-[1.1] mb-14`}
      >
        Amenities
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {project.amenities.map((amenity) => (
          <div
            key={amenity}
            className="
              rounded-[28px]
              border border-white/10
              bg-white/[0.02]
              backdrop-blur-xl
              p-6
              hover:border-violet-500/30
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <div
              className="
                w-11 h-11
                rounded-xl
                bg-violet-500/10
                border border-violet-500/20
                flex items-center justify-center
                mb-5
              "
            >
              <CheckCircle2 size={18} className="text-violet-400" />
            </div>

            <h3 className="text-white text-base leading-relaxed">{amenity}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
