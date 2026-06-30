import Link from "next/link";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-rich-black text-white pt-16 sm:pt-20 pb-10 px-5 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-12 gap-y-10 gap-x-6 sm:gap-12 border-t border-white/10 pt-12 sm:pt-16">
        <div className="col-span-2 md:col-span-5">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl italic leading-tight">
            Let&apos;s build something <br />
            <span className="text-gold not-italic">extraordinary.</span>
          </h2>

          <p className="text-white/40 max-w-sm mt-6 text-sm leading-relaxed">
            Visit our experience centre in Vijayawada to witness the
            craftsmanship of Satya Constructions firsthand.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex bg-white text-rich-black px-10 py-4 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-gold transition-colors"
          >
            Book a Site Visit
          </Link>
        </div>

        <div className="col-span-2 md:col-span-3">
          <h6 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
            Visit
          </h6>

          <address className="not-italic text-sm text-white/60 space-y-3 leading-relaxed">
            <p>
              GSR NIRMAN
              <br></br>
              Royal oak garden Apartments
              <br />
              Flat - G-03
              <br />
              Tadigatapa 100 feet road, Poranki
            </p>

            <p className="pt-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=depanarayan@yahoo.com"
                className="hover:text-gold"
              >
                depanarayan@yahoo.com
              </a>
            </p>

            <p>
              <a
                href="https://wa.me/916302395244"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                +91 63023 95244
              </a>
            </p>
          </address>
        </div>

        <div className="md:col-span-2">
          <h6 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
            Explore
          </h6>

          <ul className="space-y-3 text-sm text-white/60">
            <li>
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-gold">
                About
              </Link>
            </li>

            <li>
              <Link href="/projects" className="hover:text-gold">
                Projects
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h6 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
            Follow
          </h6>

          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/satyaconstructions_official/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <FaInstagram className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/916302395244"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between gap-3 text-[10px] uppercase tracking-[0.25em] text-white/30">
        <p>© 2026 Satya Constructions. All Rights Reserved.</p>

        <p>Building Dreams Into Landmarks.</p>
      </div>
    </footer>
  );
}
