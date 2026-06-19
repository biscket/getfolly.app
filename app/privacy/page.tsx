import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Folly Plant Care privacy policy - how we collect and use your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow max-w-3xl w-full mx-auto px-6 py-32">
        <h1 className="font-heading text-4xl font-extrabold text-[#1C1C1E] mb-4">
          Privacy Policy
        </h1>
        <p className="text-[#6B7280] mb-8">
          Last updated: 19 June 2026
        </p>
        <div className="prose prose-green max-w-none text-[#374151] leading-relaxed space-y-4">
          <p>
            This Privacy Policy explains how Zohho Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;) collects, uses, and protects your personal data when you use the
            Folly mobile app (&ldquo;Folly&rdquo; or the &ldquo;App&rdquo;). Zohho Ltd is a
            company registered in the United Kingdom and is the data controller for the purposes of
            UK data protection law (UK GDPR and the Data Protection Act 2018).
          </p>
          <p>
            If you have any questions, contact us at{" "}
            <a href="mailto:support@getfolly.app" className="text-[#16A34A] hover:underline">
              support@getfolly.app
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">1. Information we collect</h2>
          <p>We collect the following categories of data, depending on how you use Folly:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Account information</strong> — your email address, display name, and a
              provider identifier when you sign in with email, Google, or Apple. Authentication is
              handled by Supabase.
            </li>
            <li>
              <strong>Content you provide</strong> — plant photos you capture or upload, plus the
              plants, sites, notes, and care details you add. Photos are processed to identify
              plants and diagnose issues (see Section 3).
            </li>
            <li>
              <strong>Location data</strong> — if you grant permission, your approximate or precise
              location is used to provide local weather, climate, and site-specific care features.
              You can decline or revoke this at any time in your device settings.
            </li>
            <li>
              <strong>Device and notification data</strong> — a push notification token (via Expo)
              so we can send care reminders and weather alerts you have enabled, and basic device
              information.
            </li>
            <li>
              <strong>Purchase and subscription data</strong> — your subscription status,
              entitlements, and transaction identifiers, processed through RevenueCat and the Google
              Play or Apple App Store. We never receive or store your full payment card details;
              those are handled by the app store.
            </li>
            <li>
              <strong>Usage and diagnostics</strong> — app analytics events (via Google Firebase)
              and crash and error reports (via Sentry) to keep Folly stable and improve it.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">2. How we use your data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Provide and operate Folly, including plant identification, diagnosis, and care plans.
            </li>
            <li>Send the care reminders and weather alerts you choose to enable.</li>
            <li>Process and manage subscriptions, trials, and scan credits.</li>
            <li>Provide customer support and respond to your requests.</li>
            <li>Maintain security, prevent abuse, and comply with our legal obligations.</li>
            <li>Understand usage and improve features and reliability.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">3. Photos and AI processing</h2>
          <p>
            When you scan or upload a plant photo, the image and limited related data are sent to
            our processing providers — Plant.id (Kindwise) for plant identification and health
            assessment, and OpenAI for diagnosis and care guidance. These providers process the
            image to return results to you and act under our instructions as processors.
            AI-generated results are for general informational purposes only and may be inaccurate
            (see our Terms of Service).
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">
            4. Service providers and sharing
          </h2>
          <p>
            We do not sell your personal data. We share data only with providers that help us run
            Folly, under appropriate data protection terms:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Supabase — authentication, database, and storage (backend).</li>
            <li>Plant.id (Kindwise) and OpenAI — plant identification and diagnosis.</li>
            <li>RevenueCat, Google Play, and Apple — subscription processing.</li>
            <li>Google Firebase — analytics; Sentry — crash and error reporting.</li>
            <li>Expo — push notification delivery.</li>
            <li>
              Open-Meteo, OpenWeatherMap, and OpenStreetMap (Nominatim) — weather, climate, and
              geocoding from location data.
            </li>
          </ul>
          <p>
            We may also disclose data where required by law or to protect our rights, users, or the
            public.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">
            5. Legal bases for processing
          </h2>
          <p>
            Under UK GDPR we rely on: performance of our contract with you (to provide the App and
            your subscription); our legitimate interests (to secure, maintain, and improve the App);
            your consent (for location access, push notifications, and photo processing, which you
            can withdraw at any time); and compliance with legal obligations.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">6. International transfers</h2>
          <p>
            Some of our providers process data outside the United Kingdom. Where data is transferred
            internationally, we rely on appropriate safeguards such as UK adequacy regulations or
            standard contractual clauses (the UK International Data Transfer Agreement or Addendum).
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">7. Data retention</h2>
          <p>
            We keep your personal data for as long as your account is active and as needed to
            provide the App. If you delete your account, we delete or anonymise your personal data
            within a reasonable period, except where we must retain certain records to meet legal,
            accounting, or security obligations.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">8. Your rights</h2>
          <p>
            Subject to UK GDPR, you have the right to access, correct, delete, restrict, or object
            to the processing of your personal data, and the right to data portability. Where we
            rely on consent, you may withdraw it at any time. To exercise these rights, contact{" "}
            <a href="mailto:support@getfolly.app" className="text-[#16A34A] hover:underline">
              support@getfolly.app
            </a>
            . You also have the right to complain to the UK Information Commissioner&rsquo;s Office
            (ICO) at{" "}
            <a
              href="https://ico.org.uk"
              className="text-[#16A34A] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ico.org.uk
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">
            9. Deleting your account and data
          </h2>
          <p>
            You can request deletion of your account and associated personal data at any time from
            within the App, or by emailing{" "}
            <a href="mailto:support@getfolly.app" className="text-[#16A34A] hover:underline">
              support@getfolly.app
            </a>
            . We will process your request in line with applicable law.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">10. Children</h2>
          <p>
            Folly is not directed to children under 13, and we do not knowingly collect data from
            them. If you believe a child has provided us with personal data, please contact us so we
            can remove it.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">11. Security</h2>
          <p>
            We use technical and organisational measures to protect your data, including encryption
            in transit and access controls. No method of transmission or storage is completely
            secure, so we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">12. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post the updated version
            with a new &ldquo;Last updated&rdquo; date and, where appropriate, notify you in the
            App.
          </p>

          <h2 className="text-xl font-bold text-[#1C1C1E] mt-8 mb-4">13. Contact us</h2>
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
