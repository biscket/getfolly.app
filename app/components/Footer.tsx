import Link from "next/link";
import { Leaf } from "lucide-react";

const LINKS = [
  { label: "Smart Care", href: "#smart-care" },
  { label: "Weather Watch", href: "#weather-watch" },
  { label: "Checkup", href: "#checkup" },
  { label: "Discover", href: "#discover" },
  { label: "Pricing", href: "#pricing" },
  { label: "Compare", href: "#compare" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1E] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#4ADE80] to-[#16A34A] flex items-center justify-center shadow-md">
                <Leaf className="w-4 h-4 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-heading font-bold text-xl">Folly Plant Care</span>
            </Link>
            <p className="text-sm text-[#9CA3AF] max-w-xs leading-relaxed">
              Smarter plant care after the scan. Coming soon to iOS and Android at getfolly.app.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[#9CA3AF] hover:text-[#4ADE80] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6B7280]">
            Copyright {year} Folly Plant Care. All rights reserved.
          </p>
          <p className="text-xs text-[#6B7280]">Made in London</p>
        </div>
      </div>
    </footer>
  );
}
