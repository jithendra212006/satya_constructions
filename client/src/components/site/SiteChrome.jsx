"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export default function SiteChrome({ children }) {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin") || pathname.startsWith("/auth");

  return (
    <>
      {!isAdmin && <Navbar />}

      {children}

      {!isAdmin && <Footer />}
    </>
  );
}
