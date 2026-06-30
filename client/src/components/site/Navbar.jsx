"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Cormorant_Garamond } from "next/font/google";
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-rich-black/85 backdrop-blur-xl border-b border-gold/15 py-3"
          : "bg-rich-black/40 backdrop-blur-md py-5"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}

        <Link href="/" className="flex flex-col leading-none">
          <span
            className={`${cormorant.className} text-3xl lg:text-4xl tracking-[0.25em] text-gold`}
          >
            SATYA
          </span>
          <span className="text-[10px] uppercase tracking-[0.45em] text-white/60 ml-1">
            CONSTRUCTIONS
          </span>
        </Link>

        {/* Desktop Nav */}

        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.25em] font-light">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-gold ${
                pathname === link.href ? "text-gold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex border border-gold/60 text-gold px-5 py-2 text-[10px] uppercase tracking-[0.25em] hover:bg-gold hover:text-rich-black transition-all"
          >
            Enquire
          </Link>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Open Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden bg-rich-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-sm uppercase tracking-[0.25em]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
