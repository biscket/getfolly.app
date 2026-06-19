"use client";

import { useState, useRef } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type State = "idle" | "loading" | "success" | "error";

export default function Waitlist() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = inputRef.current?.value?.trim();
    if (!email) return;

    setState("loading");
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setState("success");
    } catch (err: unknown) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="waitlist" className="section-pad bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="relative bg-[#101112] rounded-[2.5rem] overflow-hidden p-8 sm:p-12 lg:p-16 lg:py-32 shadow-[0_8px_40px_rgb(0,0,0,0.12)] border border-gray-800">

          <div className="relative max-w-2xl mx-auto text-center">
            {state === "success" ? (
              <div className="animate-fadeinup">
                <div className="w-16 h-16 rounded-full bg-[#4ADE80]/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#4ADE80]" />
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-3">
                  You&apos;re on the list.
                </h2>
                <p className="text-[#9CA3AF] text-lg">
                  We&apos;ll let you know the moment Folly is ready. Check your inbox for a
                  confirmation email.
                </p>
              </div>
            ) : (
              <>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/20 text-[#4ADE80] text-sm font-semibold shadow-sm mb-6">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ADE80]"></span>
                  </span>
                  <span>Early access now open</span>
                </div>

                <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Join the early Folly list.
                </h2>

                <p className="text-[#9CA3AF] text-lg mb-8">
                  Get launch updates and early access when Folly opens on iOS and Android.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
                  <input
                    ref={inputRef}
                    type="email"
                    required
                    placeholder="your@email.com"
                    disabled={state === "loading"}
                    className="flex-1 px-4 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-[#6B7280] text-sm outline-none focus:border-[#4ADE80]/50 focus:bg-white/15 transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-b from-[#4ADE80] to-[#16A34A] hover:from-[#16A34A] hover:to-[#0F7138] text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-[#4ADE80]/20 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                  >
                    {state === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Join waitlist
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                {state === "error" && <p className="mt-3 text-sm text-red-400">{error}</p>}

                <p className="mt-4 text-xs text-[#6B7280]">No spam. Just launch news.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
