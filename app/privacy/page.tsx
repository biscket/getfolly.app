import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Folly Plant Care privacy policy - how we collect and use your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm text-[#16A34A] hover:underline mb-8 inline-block">
          Back to home
        </Link>
        <h1 className="font-heading text-4xl font-extrabold text-[#1C1C1E] mb-4">
          Privacy Policy
        </h1>
        <p className="text-[#6B7280] mb-8">
          Last updated: {new Date().toLocaleDateString("en-GB", { dateStyle: "long" })}
        </p>
        <div className="prose prose-green max-w-none text-[#374151] leading-relaxed space-y-4">
          <p>
            Folly Plant Care (&ldquo;Folly&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) takes your privacy
            seriously. This page will contain our full privacy policy before launch.
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
