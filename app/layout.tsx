import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getfolly.app"),
  title: {
    default: "Folly Plant Care - Smarter Care After the Scan",
    template: "%s | Folly Plant Care",
  },
  description:
    "Folly identifies plants, checks plant health, and builds adaptive care routines with weather-aware alerts, reminders, and personalised recommendations.",
  keywords: [
    "plant care app",
    "smart plant care app",
    "plant health check app",
    "plant care reminders",
    "weather alerts for plants",
    "personalised plant recommendations",
  ],
  authors: [{ name: "Folly Plant Care" }],
  creator: "Folly Plant Care",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://getfolly.app",
    siteName: "Folly Plant Care",
    title: "Folly Plant Care - Smarter Care After the Scan",
    description:
      "Adaptive reminders, weather-aware alerts, richer checkups, and personalised recommendations for your plants.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Folly Plant Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Folly Plant Care - Smarter Care After the Scan",
    description:
      "Adaptive reminders, weather-aware alerts, richer checkups, and personalised recommendations for your plants.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="antialiased bg-white text-[#1C1C1E]">{children}</body>
    </html>
  );
}
