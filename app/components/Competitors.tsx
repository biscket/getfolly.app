import { Check, Minus, ShieldCheck } from "lucide-react";

type Cell = "included" | "varies";

const COLUMNS = ["Folly", "Typical ID-first apps", "Typical reminder apps"];

const COMPARISON: { feature: string; values: Cell[] }[] = [
  {
    feature: "Plant identification",
    values: ["included", "included", "varies"],
  },
  {
    feature: "Plant health check with next steps",
    values: ["included", "included", "varies"],
  },
  {
    feature: "Adaptive care by site, room, season, and setup",
    values: ["included", "varies", "varies"],
  },
  {
    feature: "Weather Watch alerts and checklists",
    values: ["included", "varies", "varies"],
  },
  {
    feature: "Personalised discovery",
    values: ["included", "varies", "varies"],
  },
  {
    feature: "Garden Spaces and rooms",
    values: ["included", "varies", "varies"],
  },
  {
    feature: "Care Today and reminders",
    values: ["included", "varies", "included"],
  },
  {
    feature: "Plant Journal",
    values: ["included", "varies", "included"],
  },
  {
    feature: "GBP-first launch pricing",
    values: ["included", "varies", "varies"],
  },
];

function Cell({ value, isFolly }: { value: Cell; isFolly: boolean }) {
  if (value === "included") {
    return (
      <div className="flex justify-center">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${isFolly
              ? "bg-[#16A34A] shadow-md shadow-[#16A34A]/20"
              : "border border-[#16A34A]/50 bg-[#DCFCE7]"
            }`}
        >
          <Check
            className={`h-4 w-4 ${isFolly ? "text-white" : "text-[#16A34A]"}`}
            strokeWidth={3}
          />
        </span>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#F59E0B]/50 bg-[#FEF3C7]">
        <Minus className="h-4 w-4 text-[#D97706]" strokeWidth={3} />
      </span>
    </div>
  );
}

export default function Competitors() {
  return (
    <section id="compare" className="relative overflow-hidden bg-[#FAFAFA] py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-14 text-center lg:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#16A34A] shadow-sm">
            <ShieldCheck className="h-4 w-4 text-[#16A34A]" />
            <span>How Folly compares</span>
          </div>
          <h2 className="mb-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1C1C1E] sm:text-5xl lg:text-[3.25rem]">
            Identification is table stakes. Ongoing care is where Folly stands out.
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-500 sm:text-xl">
            Many plant apps can name a plant or send a reminder. Folly connects scans, checkups,
            weather, rooms, sites, care history, and recommendations.
          </p>
        </div>

        <div className="overflow-x-auto rounded-[2rem] border border-gray-100 bg-white shadow-[0_8px_40px_rgb(0,0,0,0.04)]">
          <table className="w-full min-w-[760px] border-collapse">
            <thead>
              <tr>
                <th className="w-[38%] border-b border-gray-200 px-8 py-8 text-left text-sm font-bold uppercase tracking-widest text-gray-400">
                  Care capability
                </th>
                {COLUMNS.map((name, index) => (
                  <th
                    key={name}
                    className={`border-b border-gray-200 px-4 py-8 text-center text-sm font-bold sm:text-base ${index === 0 ? "bg-[#F0FDF4]/70 text-[#16A34A]" : "text-[#1C1C1E]"
                      }`}
                  >
                    {index === 0 ? (
                      <span className="flex flex-col items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1C1C1E] text-xs font-black tracking-tighter text-white">
                          F
                        </span>
                        <span className="text-lg">{name}</span>
                      </span>
                    ) : (
                      name
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, rowIndex) => (
                <tr key={row.feature} className="group transition-colors hover:bg-gray-50/50">
                  <td
                    className={`border-b border-gray-200 px-8 py-5 text-sm font-medium text-gray-700 sm:text-base ${rowIndex === COMPARISON.length - 1 ? "border-b-0" : ""
                      }`}
                  >
                    {row.feature}
                  </td>
                  {row.values.map((value, index) => (
                    <td
                      key={`${row.feature}-${index}`}
                      className={`border-b border-gray-200 px-4 py-5 text-center transition-colors ${index === 0 ? "bg-[#F0FDF4]/60 group-hover:bg-[#F0FDF4]" : ""
                        } ${rowIndex === COMPARISON.length - 1 ? "border-b-0" : ""}`}
                    >
                      <Cell value={value} isFolly={index === 0} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-6 text-sm font-medium text-gray-500 sm:flex-row">
          <span className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#16A34A]/50 bg-[#DCFCE7]">
              <Check className="h-3 w-3 text-[#16A34A]" strokeWidth={3} />
            </span>
            Included
          </span>
          <span className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#F59E0B]/50 bg-[#FEF3C7]">
              <Minus className="h-3 w-3 text-[#D97706]" strokeWidth={3} />
            </span>
            Varies by app or plan
          </span>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-gray-400">
          This is a positioning summary based on public app-store and website descriptions reviewed
          in June 2026. Competitor features, pricing, and plan limits may change.
        </p>
      </div>
    </section>
  );
}
