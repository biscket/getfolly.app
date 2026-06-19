import Link from "next/link";
import { Leaf } from "lucide-react";

const FOOTER_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Smart Care", href: "/#smart-care" },
      { label: "Weather Watch", href: "/#weather-watch" },
      { label: "Checkup", href: "/#checkup" },
      { label: "Discover", href: "/#discover" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Pricing", href: "/#pricing" },
      { label: "Compare", href: "/#compare" },
      { label: "Contact", href: "mailto:hello@getfolly.app" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1E] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#4ADE80] to-[#16A34A] flex items-center justify-center shadow-md">
                <Leaf className="w-4 h-4 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-heading font-bold text-xl">Folly Plant Care</span>
            </Link>
            <p className="text-sm text-[#9CA3AF] max-w-xs leading-relaxed">
              Smarter plant care after the scan. Coming soon to iOS and Android at getfolly.app.
            </p>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="font-semibold text-white mb-4">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#9CA3AF] hover:text-[#4ADE80] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B7280]">
            Copyright {year} Folly Plant Care. All rights reserved.
          </p>
          <p className="text-xs text-[#6B7280]">Made in London</p>
        </div>
      </div>
    </footer>
  );
}
