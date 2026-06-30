"use client";

import Link from "next/link";
import { ebGaramond } from "@/lib/fonts";
import Marquee from "@/components/site/Marquee";

const properties = [
  {
    id: 1,
    title: "Elite Homes",
    location: "Nidamanuru",
    image: "/main/elite-homes.jpg",
    type: "3 BHK",
  },
  {
    id: 2,
    title: "Hycon Elite",
    location: "Secunderabad",
    image: "/main/hycon-elite-secunderabad.jpg",
    type: "3 BHK",
  },
  {
    id: 3,
    title: "Sri Nilayam",
    location: "Poranki",
    image: "/main/sri-nilayam.jpg",
    type: "3 BHK",
  },
  {
    id: 4,
    title: "ICON city villas",
    location: "Kankipadu",
    image: "/main/icon-city-villas.jpg",
    type: "4 BHK",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="bg-rich-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <p className="text-[10px] uppercase tracking-[0.35em] text-gold text-center mb-4">
          Featured Properties
        </p>

        <h2
          className={`${ebGaramond.className} text-white text-center text-2xl md:text-6xl`}
        >
          Current Opportunities
        </h2>
      </div>

      {/* Added speed="40s" here to make this specific marquee faster */}
      <Marquee direction="left" speed="40s">
        {properties.map((property) => (
          <Link
            key={property.id}
            href="/projects"
            className="group w-[360px] bg-black/40 border border-white/10 overflow-hidden rounded-2xl hover:border-gold/40 transition-all duration-500 shrink-0"
          >
            <div className="overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-2">
                {property.location}
              </p>

              <h3
                className={`${ebGaramond.className} text-white text-3xl mb-4`}
              >
                {property.title}
              </h3>

              <div className="flex justify-between items-center text-sm">
                <span className="text-white/60">{property.type}</span>

                <span className="text-gold font-semibold">
                  Price on Request
                </span>
              </div>

              <div className="mt-5 pt-5 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 group-hover:text-gold transition-colors">
                  View Project Details →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </Marquee>
    </section>
  );
}
