"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ebGaramond } from "@/lib/fonts";

const projects = [
  {
    id: 1,
    title: "ICON city villas",
    location: "Kankipadu",
    image: "/CompletedProjects/icon-city-villas.jpg",
    year: "2024",
  },
  {
    id: 2,
    title: "Sai Nilayam",
    location: "Poranki",
    image: "/CompletedProjects/sai-nilayam.jpg",
    year: "2023",
  },
  {
    id: 3,
    title: "Usha Villa",
    location: "Poranki",
    image: "/CompletedProjects/usha-villa.jpg",
    year: "2022",
  },
];

export default function CompletedProjects() {
  return (
    <section className="bg-rich-black py-24 lg:py-32">
      {" "}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        ```
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">
              Portfolio
            </p>

            <h2
              className={`${ebGaramond.className} text-white text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em]`}
            >
              Iconic Completions
            </h2>
          </div>

          <Link
            href="/projects"
            className="text-xs uppercase tracking-[0.25em] border-b border-gold text-white/70 pb-2 hover:text-gold transition-colors"
          >
            View Full Portfolio
          </Link>
        </div>
        {/* Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[760px]">
          {/* Main Project */}

          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-8 relative overflow-hidden rounded-2xl group"
          >
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
              <p className="text-gold text-[10px] uppercase tracking-[0.35em] mb-3">
                {projects[0].location}
              </p>

              <h3
                className={`${ebGaramond.className} text-white text-4xl md:text-5xl`}
              >
                {projects[0].title}
              </h3>

              <p className="text-white/60 mt-2 text-sm">
                Delivered {projects[0].year}
              </p>
            </div>
          </motion.div>

          {/* Side Projects */}

          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            {projects.slice(1).map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-2xl group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                <div className="absolute bottom-0 p-6">
                  <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-2">
                    {project.location}
                  </p>

                  <h4 className={`${ebGaramond.className} text-white text-3xl`}>
                    {project.title}
                  </h4>

                  <p className="text-white/50 text-xs mt-1">
                    Delivered {project.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
