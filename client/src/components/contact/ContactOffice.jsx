"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function ContactOffice() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="lg:col-span-2 space-y-6"
    >
      {/* Office Card */}
      <div className="bg-rich-black text-white rounded-3xl p-8 border border-white/10">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">
          Visit Us
        </p>

        <h3 className="font-display text-4xl mb-8">Our Office</h3>

        <div className="space-y-6">
          <div className="flex gap-4">
            <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
            <div>
              <p className="text-white/70 leading-relaxed">
                GSR NIRMAN
                <br></br>
                Royal oak garden Apartments
                <br />
                Flat - G-03
                <br />
                Tadigatapa 100 feet road, Poranki
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="w-5 h-5 text-gold shrink-0" />
            <a
              href="tel:+916302395244"
              className="text-white/70 hover:text-gold transition-colors"
            >
              +91 63023 95244
            </a>
          </div>

          <div className="flex gap-4">
            <Mail className="w-5 h-5 text-gold shrink-0" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=depanarayan@yahoo.com"
              className="text-white/70 hover:text-gold transition-colors break-all"
            >
              depanarayan@yahoo.com
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className="flex gap-3 pt-8 mt-8 border-t border-white/10">
          <a
            href="https://www.instagram.com/satyaconstructions_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all"
          >
            <FaInstagram className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/916302395244"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Map */}
      <a
        href="https://maps.app.goo.gl/UK9kJbsQuSzatnyn8"
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-3xl border border-white/10 h-[350px]"
      >
        <iframe
          title="Satya Constructions Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.5032117785568!2d80.7048765!3d16.500674099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb534301b757%3A0x6515edea374caf02!2sGSR%20Nirman%20Royal%20OAK!5e0!3m2!1sen!2sin!4v1782813708281!5m2!1sen!2sin"
          className="w-full h-full pointer-events-none" // pointer-events-none is CRITICAL
          loading="lazy"
        />
      </a>
    </motion.div>
  );
}
