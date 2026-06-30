"use client";

import { Building2, Car, BedDouble, ShieldCheck } from "lucide-react";
import { ebGaramond } from "@/lib/fonts";

export default function ProjectOverview({ project }) {
  const info = [
    {
      icon: Building2,
      label: "Units",
      value: project.units,
    },
    {
      icon: BedDouble,
      label: "Configuration",
      value: project.bhk_type,
    },
    {
      icon: Car,
      label: "Parking",
      value: "Available",
    },
    {
      icon: ShieldCheck,
      label: "Vastu",
      value: project.vastu ? "Compliant" : "Standard",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
        {/* LEFT */}
        <div className="lg:col-span-2">
          <p className="text-violet-400 uppercase tracking-[0.35em] text-xs mb-4">
            Project Overview
          </p>

          <h2
            className={`${ebGaramond.className} text-4xl md:text-5xl leading-[1.1] mb-12`}
          >
            Crafted For Modern Living
          </h2>

          <p className="text-white/65 text-lg leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* RIGHT CARD */}
        <div
          className="
            rounded-[32px]
            border border-white/10
            bg-white/[0.02]
            backdrop-blur-xl
            p-8
            h-fit
          "
        >
          <p className="text-violet-400 uppercase tracking-[0.3em] text-xs mb-8">
            Project Information
          </p>

          <div className="space-y-6">
            {info.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="
                      w-11 h-11
                      rounded-xl
                      bg-violet-500/10
                      border border-violet-500/20
                      flex items-center justify-center
                      flex-shrink-0
                    "
                  >
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>

                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-[0.2em]">
                      {item.label}
                    </p>

                    <p className="text-white mt-1">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
