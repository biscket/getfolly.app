import Image from "next/image";
import {
  ArrowRight,
  Bell,
  Camera,
  CheckCircle2,
  CloudSun,
  Compass,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1525498128493-380d1990a112?w=1200&q=80&auto=format&fit=crop";

const PROOF = [
  { icon: Compass, label: "Adaptive care" },
  { icon: CloudSun, label: "Weather-aware alerts" },
  { icon: Stethoscope, label: "Richer checkups" },
  { icon: Sparkles, label: "Personalised picks" },
];

const MOCK_CARDS = [
  {
    icon: Stethoscope,
    title: "Plant Checkup",
    body: "Likely stress signs found",
    tone: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: CloudSun,
    title: "Weather Watch",
    body: "3 plants may need attention",
    tone: "bg-sky-50 text-sky-700 border-sky-200",
  },
  {
    icon: Bell,
    title: "Adaptive Reminder",
    body: "Watering moved by 2 days",
    tone: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0 leaf-pattern" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#F0FDF4] blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-24 h-[420px] w-[420px] translate-x-1/3 rounded-full bg-[#FEF3C7]/70 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="animate-fadeinup max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#16A34A]/15 bg-white/80 px-4 py-2 text-sm font-semibold text-[#16A34A] shadow-sm backdrop-blur">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ADE80] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16A34A]" />
            </span>
            <span>Not just another plant app</span>
          </div>

          <h1 className="mb-7 font-heading text-5xl font-extrabold leading-[1.04] tracking-tight text-[#1C1C1E] sm:text-6xl lg:text-[5rem]">
            Plant care that keeps{" "}
            <span className="gradient-text">adapting</span>
          </h1>

          <p className="mb-5 max-w-2xl text-lg leading-relaxed text-[#4B5563] sm:text-xl">
            Folly identifies your plant, checks its health, then builds care around its room, site,
            weather, setup, and care history.
          </p>


          <div className="flex flex-col gap-4 sm:flex-row pt-8">
            <a
              href="#waitlist"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1C1C1E] px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2d2d2d] hover:shadow-2xl hover:shadow-black/20"
            >
              Join the waitlist
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#smart-care"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white/70 px-8 py-4 text-lg font-semibold text-gray-900 backdrop-blur transition-all duration-300 hover:border-[#16A34A]/40 hover:text-[#16A34A]"
            >
              How it Works <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px] animate-fadeinup lg:mr-0" style={{ animationDelay: "0.16s" }}>
          <div className="absolute -left-6 top-10 z-20 hidden w-56 animate-float-slow rounded-3xl border border-white bg-white/90 p-4 shadow-2xl shadow-[#16A34A]/15 backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F0FDF4]">
                <Camera className="h-5 w-5 text-[#16A34A]" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-[#1C1C1E]">Snap & Know</p>
                <p className="text-xs text-[#6B7280]">Scan becomes care context</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 bottom-10 z-20 hidden w-60 animate-float rounded-3xl border border-white bg-white/90 p-4 shadow-2xl shadow-black/10 backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FEF3C7]">
                <Sparkles className="h-5 w-5 text-[#D97706]" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-[#1C1C1E]">Discover pick</p>
                <p className="text-xs text-[#6B7280]">Fits bright indirect light</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-[0_28px_80px_rgba(22,163,74,0.18)] sm:rounded-[2.5rem]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#F0FDF4] sm:rounded-[2rem]">
              <Image
                src={HERO_IMAGE}
                alt="A bright indoor plant care scene"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 620px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/65 via-[#1C1C1E]/5 to-white/5" />
              <div className="animate-scan-line absolute left-8 right-8 top-12 h-16 rounded-full bg-gradient-to-b from-[#4ADE80]/5 via-[#4ADE80]/40 to-[#4ADE80]/5 blur-sm" />

              <div className="absolute left-4 right-4 top-4 rounded-3xl border border-white/70 bg-white/88 p-4 shadow-xl backdrop-blur sm:left-8 sm:right-8 sm:top-8">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-[#16A34A]">
                    Care Today
                  </p>
                  <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-bold text-[#166534]">
                    On track
                  </span>
                </div>
                <div className="space-y-2">
                  {["Check leaf tips", "Water photos", "Review weather"].map((task) => (
                    <div key={task} className="flex items-center gap-2 rounded-2xl bg-white/85 px-3 py-2">
                      <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                      <span className="text-sm font-medium text-[#374151]">{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 grid gap-2 sm:bottom-8 sm:left-8 sm:right-8 sm:grid-cols-3">
                {MOCK_CARDS.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className={`rounded-2xl border p-3 shadow-lg backdrop-blur ${card.tone}`}
                    >
                      <Icon className="mb-2 h-4 w-4" />
                      <p className="text-xs font-extrabold">{card.title}</p>
                      <p className="mt-1 text-[11px] leading-snug opacity-80">{card.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
