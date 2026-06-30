"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ebGaramond } from "@/lib/fonts";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const scrollRef = useRef(null);

  // Fetch testimonials from the database
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/testimonials");
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);

  // Slider function for the buttons
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Adjust based on card width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (testimonials.length === 0) return null;

  return (
    <section className="bg-rich-black py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header and Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-violet-400 mb-4">
              Testimonials
            </p>
            <h2
              className={`${ebGaramond.className} text-white text-5xl md:text-6xl lg:text-7xl`}
            >
              Words From Our Families
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-violet-500/50 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-violet-500/50 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Sliding Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((item) => (
            <div
              key={item._id}
              className="
                snap-start
                shrink-0
                w-full 
                md:w-[400px] 
                border border-white/10 
                bg-white/[0.02]
                p-8 
                rounded-2xl 
                hover:border-violet-500/40 
                transition-all 
                duration-300
                flex flex-col justify-between
              "
            >
              <div>
                <div className="text-violet-500 text-4xl font-serif leading-none mb-6">
                  ❝
                </div>
                <p className="text-white/70 leading-relaxed mb-8">
                  {item.review}
                </p>
              </div>

              <div className="border-t border-white/10 pt-5 mt-auto">
                <h3 className="text-white font-semibold">{item.name}</h3>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
