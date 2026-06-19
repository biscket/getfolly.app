import { NextRequest, NextResponse } from "next/server";

// EU locale prefixes
const EU_LOCALES = new Set([
  "de", "fr", "es", "it", "nl", "pt", "pl", "sv", "da", "fi",
  "nb", "cs", "ro", "hu", "sk", "sl", "hr", "bg", "el", "lt",
  "lv", "et", "mt", "ga", "lb", "ca", "eu", "gl",
]);

function detectCurrency(acceptLanguage: string | null): string {
  if (!acceptLanguage) return "GBP";

  // Parse first preferred locale, e.g. "en-GB,en;q=0.9"
  const firstLocale = acceptLanguage.split(",")[0].trim().toLowerCase();
  const [lang, region] = firstLocale.split("-");

  if (region === "gb") return "GBP";
  if (firstLocale === "en-us" || (lang === "en" && region === "us")) return "USD";
  if (EU_LOCALES.has(lang)) return "EUR";

  return "GBP";
}

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const acceptLanguage = request.headers.get("accept-language");
  const currency = detectCurrency(acceptLanguage);

  // Pass currency as a response header for server components
  response.headers.set("x-folly-currency", currency);

  // Also set a cookie for client components (1 day)
  response.cookies.set("folly-currency", currency, {
    maxAge: 86400,
    sameSite: "lax",
    path: "/",
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};
