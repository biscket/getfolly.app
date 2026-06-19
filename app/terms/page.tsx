import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Folly Plant Care terms of use.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm text-[#16A34A] hover:underline mb-8 inline-block">
          Back to home
        </Link>
        <h1 className="font-heading text-4xl font-extrabold text-[#1C1C1E] mb-4">
          Terms of Use
        </h1>
        <p className="text-[#6B7280] mb-8">
          Last updated: {new Date().toLocaleDateString("en-GB", { dateStyle: "long" })}
        </p>
        <div className="prose max-w-none text-[#374151] leading-relaxed space-y-4">
          <p>
            By using Folly Plant Care (&ldquo;the App&rdquo; or &ldquo;the Site&rdquo;), you agree to
            these terms. Full terms will be published before launch.
          </p>
          <p>
            For questions, contact us at{" "}
            <a href="mailto:hello@getfolly.app" className="text-[#16A34A] hover:underline">
              hello@getfolly.app
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
