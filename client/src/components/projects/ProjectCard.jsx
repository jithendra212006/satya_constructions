"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { ebGaramond } from "@/lib/fonts";

const statusStyles = {
  ongoing: "bg-violet-500 text-white",
  upcoming: "bg-white text-black",
  completed: "bg-rich-black border border-violet-500 text-violet-400",
  sold_out: "bg-red-500 text-white",
};

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-rich-black
        hover:border-violet-500/40
        transition-all duration-500
      "
    >
      <Link href={`/projects/${project.slug}`}>
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          {project.cover_image && (
            <img
              src={project.cover_image}
              alt={project.name}
              className="
                w-full h-full object-cover
                transition-transform duration-700
                group-hover:scale-105
              "
            />
          )}

          {/* Status Badge */}
          <span
            className={`
              absolute top-4 left-4
              px-3 py-1
              text-[10px]
              uppercase
              tracking-[0.25em]
              font-semibold
              rounded-full
              ${statusStyles[project.status]}
            `}
          >
            {project.status.replace("_", " ")}
          </span>

          {/* Vastu Badge */}
          {/* UPDATED: Changed from project.vastu to project.vastu_compliant */}
          {project.vastu_compliant && (
            <span
              className="
                absolute top-4 right-4
                px-3 py-1
                rounded-full
                bg-black/70
                backdrop-blur-md
                text-violet-300
                text-[10px]
                uppercase
                tracking-[0.2em]
              "
            >
              Vastu
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className={`${ebGaramond.className} text-3xl text-white group-hover:text-violet-400 transition-colors`}
          >
            {project.name}
          </h3>

          <p
            className="
              mt-3
              flex items-center gap-2
              text-xs
              uppercase
              tracking-[0.2em]
              text-white/50
            "
          >
            <MapPin className="w-3 h-3" />
            {project.location}
          </p>

          {/* Specs */}
          <div
            className="
              mt-6
              pt-5
              border-t border-white/10
              flex justify-between items-end
            "
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Starting
              </p>

              <p className={`${ebGaramond.className} text-xl text-violet-400`}>
                {/* UPDATED: Changed from project.price to project.starting_price */}
                {project.starting_price}
              </p>
            </div>

            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                {/* UPDATED: Changed from project.configuration to project.bhk_type */}
                {project.bhk_type}
              </p>

              {/* UPDATED: Changed from project.area to project.area_sqft */}
              <p className="text-xs text-white/60">{project.area_sqft}</p>
            </div>
          </div>

          {/* CTA */}
          <div
            className="
              mt-6
              flex items-center gap-2
              text-xs
              uppercase
              tracking-[0.25em]
              text-violet-400
              group-hover:gap-4
              transition-all
            "
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
