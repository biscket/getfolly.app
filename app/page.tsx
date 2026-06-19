import { headers } from "next/headers";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import ProductStory from "@/app/components/ProductStory";
import Features from "@/app/components/Features";
import Pricing from "@/app/components/Pricing";
import Competitors from "@/app/components/Competitors";
import Waitlist from "@/app/components/Waitlist";
import Footer from "@/app/components/Footer";

export default async function Home() {
  // Server-side currency detection via middleware header
  const headersList = await headers();
  const currency = headersList.get("x-folly-currency") ?? "GBP";

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductStory />
      <Features />
      <Pricing currency={currency} />
      <Competitors />
      <Waitlist />
      <Footer />
    </main>
  );
}
