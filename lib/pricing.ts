// Informational website exchange rates. Store billing remains authoritative.
export const RATES: Record<string, number> = {
  GBP: 1,
  EUR: 1.17,
  USD: 1.27,
};

export const CURRENCY_SYMBOLS: Record<string, string> = {
  GBP: "GBP ",
  EUR: "EUR ",
  USD: "$",
};

export const CURRENCY_LOCALES: Record<string, string> = {
  GBP: "en-GB",
  EUR: "de-DE",
  USD: "en-US",
};

export type Currency = "GBP" | "EUR" | "USD";

export const BASE_PRICES = {
  proMonthly: 7.99,
  proYearly: 35.99,
  scan5: 2.99,
  scan10: 4.99,
  scan20: 7.99,
} as const;

export function getLocalizedPrice(currency: string, gbpPrice: number): string {
  const curr = (currency as Currency) in RATES ? (currency as Currency) : "GBP";
  const rate = RATES[curr];
  const converted = gbpPrice * rate;

  try {
    return new Intl.NumberFormat(CURRENCY_LOCALES[curr], {
      style: "currency",
      currency: curr,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(converted);
  } catch {
    return `${CURRENCY_SYMBOLS[curr]}${converted.toFixed(2)}`;
  }
}

export function isNonStandardCurrency(currency: string): boolean {
  return !(currency in RATES);
}
