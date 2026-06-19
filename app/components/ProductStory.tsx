"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Camera,
  CheckCircle2,
  CloudSun,
  Compass,
  Home,
  Search,
  Sprout,
  Stethoscope,
} from "lucide-react";

const FLOW = [
  {
    icon: Camera,
    label: "Scan",
    title: "Identify the plant",
    copy: "Start with a photo and turn the result into care context.",
  },
  {
    icon: Stethoscope,
    label: "Checkup",
    title: "Understand the signs",
    copy: "See likely causes, care tips, and practical next steps.",
  },
  {
    icon: Compass,
    label: "Smart Care",
    title: "Match the real setup",
    copy: "Use room, site, pot, light, soil, season, and care history.",
  },
  {
    icon: CloudSun,
    label: "Weather Watch",
    title: "Smart weather alerts",
    copy: "Show alerts when local conditions may affect your plants.",
  },
  {
    icon: Search,
    label: "Discover",
    title: "Find better fits",
    copy: "Recommend plants shaped by your space and collection.",
  },
];

const CARE_FIELDS = [
  "Bright indirect light",
  "Well-draining soil",
  "Ceramic pot",
  "Living room",
  "London site",
  "Spring growth",
];

export default function ProductStory() {
  return (
    <section id="smart-care" className="relative overflow-hidden bg-[#FAFAFA] py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#16A34A] shadow-sm">
            <Sprout className="h-4 w-4" />
            <span>Why Folly feels different</span>
          </div>
          <h2 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1C1C1E] sm:text-5xl lg:text-[3.25rem]">
            Most apps stop at the scan. Folly keeps going.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6B7280]">
            A scan becomes a care plan, a reminder rhythm, a weather safety net, and better
            recommendations over time.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          {FLOW.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className="relative rounded-3xl border border-[#16A34A]/10 bg-white p-5 shadow-sm"
              >
                {index < FLOW.length - 1 && (
                  <div className="absolute -right-4 top-12 z-10 hidden h-px w-8 bg-[#16A34A]/20 lg:block" />
                )}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0FDF4]">
                  <Icon className="h-6 w-6 text-[#16A34A]" />
                </div>
                <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-[#16A34A]">
                  {step.label}
                </p>
                <h3 className="mb-2 font-heading text-lg font-extrabold text-[#1C1C1E]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6B7280]">{step.copy}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#16A34A]/15 bg-white px-4 py-2 text-sm font-semibold text-[#16A34A] shadow-sm">
              <Compass className="h-4 w-4" />
              <span>Care Compass</span>
            </div>
            <h2 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1C1C1E] sm:text-5xl">
              Care matched to the plant and the place.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#6B7280]">
              Folly connects plant data, site data, room context, weather, care history, and
              discovery signals so advice feels specific instead of generic.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#6B7280]">
              Free users get useful care guidance and basic reminders. Pro unlocks the adaptive
              layer for smarter schedules.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-[#16A34A]/10 bg-white p-5 shadow-[0_20px_60px_rgba(22,163,74,0.10)]"
          >
            <div className="rounded-[1.5rem] bg-[#F0FDF4] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-[#16A34A]">
                    Smart Care setup
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-extrabold text-[#1C1C1E]">
                    Monstera Deliciosa
                  </h3>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#16A34A] shadow-sm">
                  Pro adaptive
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {CARE_FIELDS.map((field) => (
                  <div key={field} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#16A34A]" />
                    <span className="text-sm font-semibold text-[#374151]">{field}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-amber-200 bg-[#FEF3C7] p-4">
                  <Bell className="mb-2 h-5 w-5 text-amber-700" />
                  <p className="text-sm font-extrabold text-amber-900">Next reminder</p>
                  <p className="mt-1 text-sm text-amber-800">Watering shifted after cooler weather.</p>
                </div>
                <div className="rounded-2xl border border-[#16A34A]/15 bg-white p-4">
                  <Home className="mb-2 h-5 w-5 text-[#16A34A]" />
                  <p className="text-sm font-extrabold text-[#1C1C1E]">Real-home context</p>
                  <p className="mt-1 text-sm text-[#6B7280]">Room and site stay part of care.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
