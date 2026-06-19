"use client";

import { motion } from "framer-motion";
import {
  Bell,
  BookOpen,
  Camera,
  CheckCircle2,
  Clock,
  CloudSun,
  Compass,
  Droplets,
  Flashlight,
  Home,
  LayoutGrid,
  ScrollText,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Wand2,
} from "lucide-react";

const PILLARS = [
  {
    id: "weather-watch",
    icon: CloudSun,
    chip: "Weather Watch",
    title: "Weather alerts that know which plants are at risk.",
    body: "Folly watches your plant sites and surfaces alerts when local conditions may affect the plants you keep.",
    detail:
      "Weather risks are matched to plant tolerances where possible, with calm in-app cards when conditions are normal and action checklists when they are not.",
    visual: "weather",
  },
  {
    id: "checkup",
    icon: Stethoscope,
    chip: "Plant Checkup",
    title: "A health report with next steps.",
    body: "Scan troubled leaves or stems to see likely causes, symptom notes, care tips, and recovery guidance.",
    detail:
      "Folly uses careful, practical language: likely causes, signs to watch, and suggested care actions.",
    visual: "checkup",
  },
  {
    id: "discover",
    icon: Search,
    chip: "Discover for You",
    title: "Better plant ideas for your actual space.",
    body: "Get personalised plant picks shaped by light, care difficulty, pet safety, site, season, and your growing collection.",
    detail:
      "Discovery is free and should feel useful before the user even adds another plant.",
    visual: "discover",
  },
];

const SUPPORTING = [
  {
    icon: Camera,
    name: "Snap & Know",
    description: "Identify a plant, then open care guidance that connects to your garden.",
  },
  {
    icon: Compass,
    name: "Care Compass",
    description: "Detailed care guides for water, light, soil, humidity, toxicity, growth, and more.",
  },
  {
    icon: Bell,
    name: "Rhythm Reminders",
    description: "Basic reminders are free. Pro adds adaptive timing around plant needs and conditions.",
  },
  {
    icon: LayoutGrid,
    name: "Garden Spaces",
    description: "Manage one site for free, or up to five homes and growing spaces with Pro.",
  },
  {
    icon: Home,
    name: "Room-by-Room Care",
    description: "Organise plants across up to 20 rooms for easier filtering and care.",
  },
  {
    icon: ScrollText,
    name: "Plant Journal",
    description: "A private diary for each plant: photos, notes, observations, and scan history.",
  },
  {
    icon: CheckCircle2,
    name: "Care Today",
    description: "A crisp daily checklist of every care task across your entire collection.",
  },
  {
    icon: BookOpen,
    name: "Monthly Plant Notes",
    description: "Pro monthly guidance for seasonal care, prevention, and changing conditions.",
  },
];

const COMING_SOON = [
  {
    icon: Flashlight,
    name: "Light Finder",
    description: "Measure light levels and match plants to the right spot.",
  },
  {
    icon: Droplets,
    name: "Water Sense",
    description: "Water guidance that accounts for plant, pot, room, and growing conditions.",
  },
  {
    icon: Wand2,
    name: "Smart Plant Match",
    description: "Location-, room-, and garden-aware suggestions for what to grow next.",
  },
];

function FeatureVisual({ type }: { type: string }) {
  if (type === "weather") {
    return (
      <div className="rounded-[1.75rem] bg-gradient-to-br from-sky-50 to-white p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-sky-700">London site</p>
            <h4 className="mt-1 font-heading text-2xl font-extrabold text-[#1C1C1E]">Weather Watch</h4>
          </div>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
            Risk detected
          </span>
        </div>
        <div className="rounded-3xl border border-sky-100 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <CloudSun className="h-8 w-8 text-sky-600" />
            <div>
              <p className="font-heading text-xl font-extrabold text-[#1C1C1E]">
                Cold night expected
              </p>
              <p className="text-sm text-[#6B7280]">3 outdoor plants may need attention.</p>
            </div>
          </div>
          <div className="mt-4 grid gap-2">
            {["Move tender pots closer to shelter", "Check exposed balcony plants", "Review morning frost signs"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl bg-sky-50 px-3 py-2 text-sm font-medium text-sky-900">
                <CheckCircle2 className="h-4 w-4 text-sky-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "checkup") {
    return (
      <div className="rounded-[1.75rem] bg-gradient-to-br from-amber-50 to-white p-5">
        <div className="mb-4">
          <p className="text-xs font-extrabold uppercase tracking-widest text-amber-700">Plant Checkup</p>
          <h4 className="mt-1 font-heading text-2xl font-extrabold text-[#1C1C1E]">Possible stress signs</h4>
        </div>
        <div className="space-y-3">
          <div className="rounded-3xl border border-amber-100 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-bold text-[#1C1C1E]">Health report</span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                Needs attention
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-amber-400 to-[#16A34A]" />
            </div>
          </div>
          {["Likely underwatering pattern", "Leaf-edge browning noted", "Adjust care and watch new growth"].map((item) => (
            <div key={item} className="rounded-2xl border border-amber-100 bg-white px-4 py-3 text-sm font-semibold text-[#374151] shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[1.75rem] bg-gradient-to-br from-[#F0FDF4] to-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#16A34A]">Discover feed</p>
          <h4 className="mt-1 font-heading text-2xl font-extrabold text-[#1C1C1E]">Picks for your home</h4>
        </div>
        <Sparkles className="h-7 w-7 text-[#16A34A]" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["Calathea", "Fits your bathroom"],
          ["Hoya", "Good for bright indirect light"],
          ["Parlour Palm", "Easy care"],
          ["Peperomia", "Pet-safe option"],
        ].map(([name, reason]) => (
          <div key={name} className="rounded-3xl border border-[#16A34A]/10 bg-white p-4 shadow-sm">
            <div className="mb-3 h-24 rounded-2xl bg-gradient-to-br from-[#DCFCE7] to-[#FEF3C7]" />
            <p className="font-heading font-extrabold text-[#1C1C1E]">{name}</p>
            <p className="mt-1 text-xs font-bold text-[#16A34A]">{reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="section-pad relative overflow-hidden bg-white">
      <div className="absolute inset-0 leaf-pattern opacity-70" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#16A34A] shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            <span>Smarter ongoing care</span>
          </div>
          <h2 className="mb-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1C1C1E] sm:text-5xl lg:text-[3.25rem]">
            Identification starts the story. Smart care is the reason to stay.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#6B7280]">
            Folly brings the strongest care signals together: plant health, rooms, sites, weather,
            reminders, notes, and personalised recommendations.
          </p>
        </div>

        <div className="space-y-8">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            const flip = index % 2 === 1;
            return (
              <motion.article
                key={pillar.id}
                id={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55 }}
                className="grid gap-6 rounded-[2rem] border border-[#16A34A]/10 bg-white/85 p-5 shadow-[0_16px_60px_rgba(22,163,74,0.08)] backdrop-blur lg:grid-cols-2 lg:p-8"
              >
                <div className={`flex flex-col justify-center ${flip ? "lg:order-2" : ""}`}>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0FDF4]">
                    <Icon className="h-6 w-6 text-[#16A34A]" />
                  </div>
                  <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-[#16A34A]">
                    {pillar.chip}
                  </p>
                  <h3 className="font-heading text-3xl font-extrabold leading-tight text-[#1C1C1E] sm:text-4xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-[#4B5563]">{pillar.body}</p>
                  <p className="mt-4 text-base leading-relaxed text-[#6B7280]">{pillar.detail}</p>
                </div>
                <FeatureVisual type={pillar.visual} />
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPORTING.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.42, delay: (index % 4) * 0.04 }}
                className="rounded-3xl border border-[#16A34A]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#16A34A]/25 hover:shadow-xl hover:shadow-[#16A34A]/10"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0FDF4]">
                  <Icon className="h-5 w-5 text-[#16A34A]" />
                </div>
                <h3 className="mb-2 font-heading font-extrabold text-[#1C1C1E]">{feature.name}</h3>
                <p className="text-sm leading-relaxed text-[#6B7280]">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2rem] border border-dashed border-amber-200 bg-[#FFFBEB] p-6">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
                <Clock className="h-4 w-4" />
                <span>Coming soon</span>
              </div>
              <h3 className="font-heading text-3xl font-extrabold text-[#1C1C1E]">
                More ways to understand your space.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-amber-900/70">
              Planned features are shown separately so launch promises stay clear.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {COMING_SOON.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.name} className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FEF3C7]">
                    <Icon className="h-5 w-5 text-amber-700" />
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <h4 className="font-heading font-extrabold text-[#1C1C1E]">{feature.name}</h4>
                    <span className="rounded-full bg-[#FEF3C7] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#92400E]">
                      Soon
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#6B7280]">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
