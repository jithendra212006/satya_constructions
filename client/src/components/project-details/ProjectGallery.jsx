"use client";

import { ImageIcon } from "lucide-react";
import { ebGaramond } from "@/lib/fonts";

export default function ProjectGallery({ project }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <p className="text-violet-400 uppercase tracking-[0.35em] text-xs mb-4">
        Visual Tour
      </p>

      <h2
        className={`${ebGaramond.className} text-4xl md:text-5xl leading-[1.1] mb-14`}
      >
        Project Gallery
      </h2>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Featured Image */}
        <div
          className="
            lg:col-span-2
            h-[450px]
            rounded-[32px]
            border border-white/10
            bg-white/[0.02]
            backdrop-blur-xl
            overflow-hidden
          "
        >
          {project.gallery?.[0] ? (
            <img
              src={project.gallery[0]}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-white/30">
              <ImageIcon size={50} />
              <p className="mt-4 uppercase tracking-[0.3em] text-xs">
                Featured Image
              </p>
            </div>
          )}
        </div>

        {/* Side Images */}
        <div className="grid gap-5">
          {[1, 2].map((index) => (
            <div
              key={index}
              className="
                h-[212px]
                rounded-[32px]
                border border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                overflow-hidden
              "
            >
              {project.gallery?.[index] ? (
                <img
                  src={project.gallery[index]}
                  alt={`${project.name}-${index}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/30">
                  <ImageIcon size={36} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Images */}
      <div className="grid md:grid-cols-3 gap-5 mt-5">
        {[3, 4, 5].map((index) => (
          <div
            key={index}
            className="
              h-[250px]
              rounded-[32px]
              border border-white/10
              bg-white/[0.02]
              backdrop-blur-xl
              overflow-hidden
            "
          >
            {project.gallery?.[index] ? (
              <img
                src={project.gallery[index]}
                alt={`${project.name}-${index}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/30">
                <ImageIcon size={36} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
