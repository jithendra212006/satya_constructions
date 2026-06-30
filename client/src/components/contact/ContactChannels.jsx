"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, ArrowUpRight } from "lucide-react";

const channels = [
  {
    icon: Phone,
    label: "Call Us",
    primary: "+91 63023 95244",
    href: "tel:+916302395244",
    desc: "Mon — Sat, 10:00 AM to 7:00 PM",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    primary: "Instant Chat",
    href: "https://wa.me/916302395244",
    desc: "Typical reply within 10 minutes",
  },
  {
    icon: Mail,
    label: "Email",
    primary: "depanarayan@yahoo.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=depanarayan@yahoo.com",
    desc: "Response within 24 hours",
  },
];

export default function ContactChannels() {
  return (
    <section className="relative -mt-16 sm:-mt-20 px-6 lg:px-10 max-w-7xl mx-auto z-10">
      <div className="grid md:grid-cols-3 gap-4">
        {channels.map((channel, index) => {
          const Icon = channel.icon;

          return (
            <motion.a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              whileHover={{ y: -8 }}
              className="
                group
                glass-dark
                rounded-3xl
                p-8
                block
                relative
                overflow-hidden
              "
            >
              {/* Hover Glow */}

              <div
                className="
                absolute inset-0
                bg-gradient-to-br
                from-gold/0
                via-gold/0
                to-gold/0
                group-hover:from-gold/15
                group-hover:to-transparent
                transition-all duration-500
              "
              />

              <div className="relative">
                <div className="flex justify-between items-start mb-8">
                  <div
                    className="
                    w-12 h-12
                    rounded-xl
                    bg-gold/15
                    border border-gold/30
                    flex items-center justify-center
                    text-gold
                  "
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <ArrowUpRight
                    className="
                    w-5 h-5
                    text-white/30
                    group-hover:text-gold
                    group-hover:rotate-45
                    transition-all duration-300
                  "
                  />
                </div>

                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
                  {channel.label}
                </p>

                <p className="font-display text-2xl text-white mb-2">
                  {channel.primary}
                </p>

                <p className="text-xs text-white/40">{channel.desc}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
