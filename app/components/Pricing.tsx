"use client";

import { useState } from "react";
import { Check, Info, Sparkles, Zap } from "lucide-react";
import { getLocalizedPrice, BASE_PRICES, isNonStandardCurrency } from "@/lib/pricing";

interface PricingProps {
  currency?: string;
}

const SCAN_PACKS = [
  { scans: 5, gbpPrice: BASE_PRICES.scan5, label: "Starter Pack" },
  { scans: 10, gbpPrice: BASE_PRICES.scan10, label: "Explorer Pack", popular: true },
  { scans: 20, gbpPrice: BASE_PRICES.scan20, label: "Power Pack" },
];

const FREE_FEATURES = [
  "5 scan credits each month",
  "1 Garden Space",
  "20 rooms",
  "Care Compass detailed care guides",
  "Rhythm Reminders",
  "Discover for You",
  "Plant Journal",
  "Care Today checklist",
];

const PRO_FEATURES = [
  "30 scan credits each month",
  "Richer Plant Checkup reports",
  "Adaptive Reminders",
  "Weather Watch alerts and checklists",
  "Monthly Plant Notes",
  "Up to 5 Garden Spaces",
  "20 rooms included",
  "Priority support",
];

export default function Pricing({ currency = "GBP" }: PricingProps) {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const showDisclaimer = isNonStandardCurrency(currency);

  const monthlyPrice = getLocalizedPrice(currency, BASE_PRICES.proMonthly);
  const yearlyPrice = getLocalizedPrice(currency, BASE_PRICES.proYearly);
  const yearlyPerMonth = getLocalizedPrice(currency, BASE_PRICES.proYearly / 12);

  const savings = Math.round(
    ((BASE_PRICES.proMonthly * 12 - BASE_PRICES.proYearly) / (BASE_PRICES.proMonthly * 12)) * 100
  );

  return (
    <section id="pricing" className="section-pad relative overflow-hidden bg-white -mt-10">
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-[#16A34A] text-sm font-semibold shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#16A34A]" />
            <span>Simple, transparent pricing</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-gray-900 mb-6 tracking-tight leading-[1.1]">
            Start free. <br className="sm:hidden" /><br></br>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A34A] to-[#4ADE80]">Upgrade for smarter care.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            The free plan covers identification, detailed care guides, basic reminders, rooms, and
            personalised discovery. Pro unlocks the adaptive layer: Weather Watch, Monthly Plant
            Notes, Adaptive Reminders, richer checkups, and more scans.
          </p>

          <div className="mt-10 inline-flex items-center p-1.5 bg-gray-100/80 backdrop-blur-md rounded-full border border-gray-200/50 shadow-inner">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${billing === "monthly"
                ? "bg-white text-gray-900 shadow-sm ring-1 ring-black/5"
                : "text-gray-500 hover:text-gray-900"
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${billing === "yearly"
                ? "bg-white text-gray-900 shadow-sm ring-1 ring-black/5"
                : "text-gray-500 hover:text-gray-900"
                }`}
            >
              Yearly
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors ${billing === "yearly" ? "bg-[#DCFCE7] text-[#166534]" : "bg-gray-200 text-gray-600"
                  }`}
              >
                Save {savings}%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-24 items-stretch relative">

          {/* Free Tier */}
          <div className="bg-[#ffffff] flex flex-col h-full rounded-[2.5rem] p-8 sm:p-10 border border-[#4ADE80] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-0 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
            <div className="mb-8">
              <h3 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">Free</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-heading text-5xl font-extrabold text-gray-900">£0</span>
                <span className="text-gray-400 font-medium">forever</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed min-h-[48px]">
                Identify plants, explore detailed care guides, use basic reminders, organise rooms,
                and discover better plant picks.
              </p>
            </div>

            <a
              href="#waitlist"
              className="block w-full text-center py-4 rounded-2xl bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold text-sm transition-colors mb-8 ring-1 ring-inset ring-gray-200"
            >
              Join waitlist
            </a>

            <ul className="space-y-4">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-gray-300 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Tier (Dark Mode) */}
          <div className="relative flex flex-col h-full rounded-[2.5rem] p-8 sm:p-10 bg-gradient-to-br from-[#0A3F20] to-[#052E16] text-white shadow-[0_0_40px_rgba(22,163,74,0.15)] z-10 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(22,163,74,0.3)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ADE80]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#16A34A]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-white/10 rounded-[2.5rem] pointer-events-none" />

            <div className="relative">
              <div className="flex items-start justify-between mb-8 flex-col sm:flex-row gap-4 sm:gap-0">
                <div>
                  <h3 className="text-base font-bold text-[#4ADE80] mb-2 flex items-center gap-2 uppercase tracking-wide">
                    <Zap className="w-4 h-4" /> Pro
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-heading text-5xl font-extrabold tracking-tight text-white">
                      {billing === "monthly" ? monthlyPrice : yearlyPerMonth}
                    </span>
                    <span className="text-gray-400 font-medium">/month</span>
                  </div>
                  <p className="text-sm text-gray-400 min-h-[48px]">
                    {billing === "yearly" ? `Billed annually at ${yearlyPrice}` : "Billed monthly"}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#16A34A]/20 border border-[#16A34A]/50 text-[#4ADE80] text-xs font-bold tracking-wide uppercase shrink-0">
                  Most Popular
                </span>
              </div>

              <a
                href="#waitlist"
                className="block w-full text-center py-4 rounded-2xl bg-[#16A34A] text-white hover:bg-[#15803d] font-bold text-sm transition-all duration-300 mb-8 shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:shadow-[0_0_25px_rgba(22,163,74,0.5)]"
              >
                Join Pro waitlist
              </a>

              <ul className="space-y-4">
                {PRO_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-[#4ADE80] flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Scan Packs */}
        <div className="max-w-4xl mx-auto pt-8">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-extrabold text-gray-900 mb-3">
              Need extra scans?
            </h3>
            <p className="text-base text-gray-500">
              Top up for extra Snap & Know identifications or Plant Checkups. No subscription
              needed.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
            {SCAN_PACKS.map((pack) => (
              <div
                key={pack.scans}
                className={`relative bg-white rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center justify-center ${pack.popular
                  ? "border-2 border-[#4ADE80] shadow-[0_8px_30px_rgba(74,222,128,0.15)] bg-white"
                  : "border border-[#4ADE80] shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-gray-200"
                  }`}
              >
                {pack.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full bg-[#16A34A] text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
                      Best Value
                    </span>
                  </div>
                )}
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  {pack.label}
                </p>
                <div className="mb-4">
                  <span className="font-heading text-4xl font-extrabold text-gray-900 tracking-tight">
                    {getLocalizedPrice(currency, pack.gbpPrice)}
                  </span>
                </div>
                <p className="text-lg font-extrabold text-[#16A34A] w-full">
                  {pack.scans} credits
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          {showDisclaimer && (
            <div className="inline-flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-full px-4 py-2 border border-gray-100 mb-4 shadow-sm">
              <Info className="w-4 h-4 flex-shrink-0" />
              Prices shown are estimates based on GBP.
            </div>
          )}
          <p className="text-xs text-gray-400">
            Final in-app pricing may vary by region and app store.
          </p>
        </div>
      </div>
    </section>
  );
}
