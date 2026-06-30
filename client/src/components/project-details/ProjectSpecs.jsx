"use client";

import { Building2, Ruler, Home, Bath, Activity } from "lucide-react";

import { ebGaramond } from "@/lib/fonts";

export default function ProjectSpecs({ project }) {
  const specs = [
    {
      icon: Building2,
      label: "Units",
      value: project.units,
    },
    {
      icon: Ruler,
      label: "Area",
      value: project.area_sqft,
    },
    {
      icon: Home,
      label: "Configuration",
      value: project.bhk_type,
    },
    {
      icon: Bath,
      label: "Bathrooms",
      value: project.bathrooms,
    },
    {
      icon: Activity,
      label: "Status",
      value: project.status,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
        {specs.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                rounded-[28px]
                border border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                p-6
                hover:border-violet-500/30
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
                <Icon className="w-5 h-5 text-violet-400" />
              </div>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                  mb-2
                "
              >
                {item.label}
              </p>

              <h3
                className={`
                  ${ebGaramond.className}
                  text-2xl
                  lg:text-3xl
                  leading-tight
                  capitalize
                `}
              >
                {item.value}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
