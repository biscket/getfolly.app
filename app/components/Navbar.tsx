"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Leaf, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Smart Care", href: "#smart-care" },
  { label: "Weather Watch", href: "#weather-watch" },
  { label: "Checkup", href: "#checkup" },
  { label: "Discover", href: "#discover" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${scrolled ? "bg-white/70 backdrop-blur-xl shadow-sm shadow-black/5 border-black/5" : "bg-transparent border-transparent"
        }`}
    >
      <nav
        className="max-w-[1440px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-heading font-bold text-xl text-[#1C1C1E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80] rounded-lg"
          aria-label="Folly Plant Care home"
        >
          <span
            className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#4ADE80] to-[#16A34A] flex items-center justify-center shadow-md shadow-[#4ADE80]/20"
            aria-hidden="true"
          >
            <Leaf className="w-4 h-4 text-white" strokeWidth={2.5} />
          </span>
          <span>Folly</span>
        </Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-bold text-[#6B7280] hover:text-[#16A34A] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80] rounded-md px-1"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNav("#waitlist")}
            className="px-6 py-2 rounded-full bg-gradient-to-b from-[#16A34A] to-[#159643] hover:from-[#159643] hover:to-[#0F7138] text-white font-semibold transition-all duration-300 shadow-md shadow-[#16A34A]/20 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#16A34A]"
          >
            Join waitlist
          </button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-[#6B7280] hover:text-[#16A34A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80]"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden bg-white border-b border-[#E5E7EB] shadow-md overflow-hidden transition-all duration-200 ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        aria-hidden={!open}
      >
        <div className="px-4 pb-4 pt-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              tabIndex={open ? 0 : -1}
              className="block w-full text-left py-3 text-sm font-medium text-[#6B7280] hover:text-[#16A34A] border-b border-[#F0FDF4] last:border-0 cursor-pointer focus-visible:outline-none focus-visible:text-[#16A34A]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#waitlist")}
            tabIndex={open ? 0 : -1}
            className="mt-3 w-full px-4 py-2.5 rounded-xl bg-gradient-to-b from-[#16A34A] to-[#159643] hover:from-[#159643] hover:to-[#0F7138] text-white text-sm font-semibold transition-all duration-300 shadow-md shadow-[#16A34A]/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#16A34A]"
          >
            Join waitlist
          </button>
        </div>
      </div>
    </header>
  );
}
