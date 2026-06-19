import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Folly Plant Care terms of use.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow max-w-3xl w-full mx-auto px-6 py-32">
        <h1 className="font-heading text-4xl font-extrabold text-[#1C1C1E] mb-4">
          Terms of Service
        </h1>
        <p className="text-[#6B7280] mb-8">
          Last updated: 19 June 2026
        </p>
        <div className="prose max-w-none text-[#374151] leading-relaxed space-y-4">
          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">1. Introduction</h2>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Folly
            mobile app (the &ldquo;App&rdquo;), provided by Zohho Ltd (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, &ldquo;our&rdquo;), a company registered in the United Kingdom. By
            downloading, accessing, or using Folly, you agree to be bound by these Terms. If you do
            not agree, do not use the App.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">2. Eligibility</h2>
          <p>
            You must be at least 13 years old to use Folly. If you are under the age of majority
            where you live, you may use the App only with the involvement of a parent or guardian.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">3. The service</h2>
          <p>
            Folly helps you identify, organise, and care for plants, including AI-assisted plant
            identification and diagnosis, care reminders, and weather-based guidance.
            Identification, diagnosis, and care suggestions are generated automatically and are
            provided for general informational purposes only. They may be inaccurate or incomplete
            and are not professional, horticultural, medical, or safety advice. Do not rely on Folly
            to determine whether a plant is edible, toxic, or safe for people or animals.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">4. Your account</h2>
          <p>
            You are responsible for the information you provide and for activity under your account.
            Keep your login credentials secure and notify us promptly of any unauthorised use.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">
            5. Subscriptions and purchases
          </h2>
          <p>
            Folly offers an optional paid subscription (&ldquo;Folly Pro&rdquo;) and one-time
            purchases such as scan credits. Prices are shown in the App and at checkout in your
            local currency, including any applicable taxes.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Billing</strong> — purchases are processed by the Google Play Store or Apple
              App Store under their terms. Subscriptions renew automatically for the same period and
              at the then-current price unless cancelled at least 24 hours before the end of the
              current period.
            </li>
            <li>
              <strong>Managing and cancelling</strong> — you can manage or cancel your subscription
              at any time in your Google Play or Apple App Store account settings. Cancelling stops
              future renewals; access continues until the end of the paid period.
            </li>
            <li>
              <strong>Trials</strong> — if a free trial is offered, any unused portion ends when you
              start a paid subscription.
            </li>
            <li>
              <strong>Refunds</strong> — purchases are generally non-refundable except where
              required by law. Refund requests are handled by the relevant app store under its
              policies. Scan credits and other consumables are non-refundable once used.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">6. Acceptable use</h2>
          <p>
            You agree not to misuse Folly, including by attempting to disrupt or reverse engineer
            the App, accessing it through unauthorised means, uploading unlawful or infringing
            content, or using it in breach of applicable law.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">7. Your content</h2>
          <p>
            You retain ownership of the photos, notes, and other content you add to Folly. You grant
            us a limited licence to host, process, and display that content solely to operate and
            provide the App to you (including sending images to our identification and diagnosis
            providers). You are responsible for ensuring you have the right to upload the content
            you provide.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">8. Intellectual property</h2>
          <p>
            The App, its software, branding, and content (other than your content) are owned by
            Zohho Ltd or our licensors and are protected by intellectual property laws. We grant you
            a personal, non-exclusive, non-transferable, revocable licence to use the App for your
            own non-commercial use, subject to these Terms.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">9. Disclaimers</h2>
          <p>
            The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
            warranties of any kind, whether express or implied, to the fullest extent permitted by
            law. We do not warrant that the App will be uninterrupted, error-free, or that any
            identification, diagnosis, or guidance will be accurate or suitable for your situation.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">
            10. Limitation of liability
          </h2>
          <p>
            Nothing in these Terms excludes or limits our liability where it would be unlawful to do
            so, including liability for death or personal injury caused by negligence or for fraud.
            Subject to that, we are not liable for indirect or consequential losses, loss of data,
            or losses arising from your reliance on AI-generated results, and our total liability is
            limited to the amount you paid us for the App in the 12 months before the claim.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">11. Termination</h2>
          <p>
            You may stop using Folly and delete your account at any time. We may suspend or
            terminate your access if you breach these Terms or where necessary to protect the App or
            other users.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">12. Changes</h2>
          <p>
            We may update the App or these Terms from time to time. We will post the updated Terms
            with a new &ldquo;Last updated&rdquo; date. Continued use of the App after changes take
            effect constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">13. Governing law</h2>
          <p>
            These Terms are governed by the laws of England and Wales, and the courts of England and
            Wales have non-exclusive jurisdiction, without affecting any mandatory consumer rights
            you have in your country of residence.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">14. Contact</h2>
          <p>
            Zohho Ltd, United Kingdom. Email:{" "}
            <a href="mailto:support@getfolly.app" className="text-[#16A34A] hover:underline">
              support@getfolly.app
            </a>
          </p>

        </div>
      </div>
      <Footer />
    </main>
  );
}
