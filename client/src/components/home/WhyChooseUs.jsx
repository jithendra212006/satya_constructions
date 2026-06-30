"use client";

import {
  ShieldCheck,
  Clock,
  Award,
  Leaf,
  Building2,
  Users,
} from "lucide-react";

import { ebGaramond } from "@/lib/fonts";

const features = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Upholding the highest ethical standards in all our dealings.",
  },
  {
    icon: Building2,
    title: "Transparency",
    description: "Clear communication and processes from start to finish.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Committed to completing projects on schedule.",
  },
  {
    icon: Award,
    title: "Precision Engineering",
    description: "Meticulous attention to detail and quality in every aspect.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Employing eco-friendly practices and materials whenever possible.",
  },
  {
    icon: Users,
    title: "Client Satisfaction",
    description: "Ensuring every client’s vision becomes reality.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}

        <div className="text-center mb-20">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">
            Why Choose Us
          </p>

          <h2
            className={`${ebGaramond.className} text-5xl md:text-6xl lg:text-7xl text-rich-black`}
          >
            Built On Values
          </h2>

          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            Strong foundations are not just built with concrete. They are built
            with trust, transparency and commitment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}

          <div className="relative">
            <img
              src="/built_on_values.jpg"
              alt="Satya Construction"
              className="w-full h-[700px] object-cover rounded-3xl"
            />

            <div className="absolute -bottom-8 -left-8 bg-gold text-white p-8 rounded-2xl shadow-2xl">
              <h3 className={`${ebGaramond.className} text-3xl`}>10+ Years</h3>

              <p className="text-sm mt-2">Building Dreams Into Landmarks</p>
            </div>
          </div>

          {/* Right Features */}

          <div className="grid gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="flex gap-5 border-b border-gray-200 pb-6"
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl text-rich-black mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
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
