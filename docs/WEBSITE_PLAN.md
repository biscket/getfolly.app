# Write Folly Website Plan To Docs

## Summary

Create a new Markdown document at `docs/folly-plant-care-website-plan.md` containing the Phase 1 website plan for **Folly Plant Care**.

Update the plan so public pricing is **GBP-first** and supports **location-based currency display** on the website.

## Pricing Changes

Use pounds as the default site pricing:

- Pro monthly: **£7.99/mo**
- Pro yearly: **£35.99/yr**
- Scan pack 5: **£2.99**
- Scan pack 10: **£4.99**
- Scan pack 20: **£7.99**

Add a pricing-localization requirement:

- Default currency is `GBP`.
- Detect visitor locale/country from request headers or Cloud Run edge/proxy metadata where available.
- Display localized currency using `Intl.NumberFormat`.
- Use a small server-side pricing config as the source of truth.
- For launch, support:
  - UK: GBP
  - EU countries: EUR converted from GBP
  - US: USD converted from GBP
  - Other countries: show GBP with “estimated local pricing may vary”
- Use exchange-rate conversion for the website estimate only.
- Add disclaimer: “Final in-app pricing may vary by region and app store.”

Recommended implementation detail:

- Store base prices in GBP.
- Add a `getLocalizedPrice(countryCode, baseGbpPrice)` helper.
- Cache exchange rates daily.
- Fail safely to GBP if country or rate lookup is unavailable.
- Do not hard-code converted prices into marketing copy outside the pricing component.

## Document Content

The doc should include:

- Brand: **Folly Plant Care**
- Domain: `getfolly.app`
- Stack: Next.js on Google Cloud Run
- CTA: waitlist
- Public language rule: do not market with “AI”
- Feature names:
  - Snap & Know
  - Plant Checkup
  - Care Compass
  - Rhythm Reminders
  - Adaptive Reminders
  - Weather Watch
  - Monthly Plant Notes
  - Discover for You
  - Garden Spaces
  - Room-by-Room Care
  - Plant Journal
  - Care Today
- Coming soon:
  - Light Finder
  - Water Sense
  - Smart Plant Match
- Light-mode visual direction using the current app palette:
  - white background
  - soft green `#F0FDF4`
  - primary green `#4ADE80`
  - deep green `#16A34A`
  - charcoal text
  - muted neutral borders
  - warm accent
- Fonts:
  - Plus Jakarta Sans for headings
  - Inter for body
- Placeholder imagery guidance:
  - use current app screenshots where available
  - use Unsplash/Pexels plant imagery temporarily
  - replace with original app/product photography later
- Competitor positioning against Planta, PictureThis, Blossom, and PlantIn.
- SEO routes and technical requirements.
- Test plan and acceptance criteria.

## File Placement

Add one new file:

- `docs/folly-plant-care-website-plan.md`

Do not modify the existing `docs/paywall-implementation-plan.md`; that remains the app/paywall source of truth.

## Assumptions

- GBP pricing is the public default for now.
- Website currency conversion is informational and should not override App Store or Google Play localized billing.
- The main site remains Phase 1; control panel and SEO article engine stay future work.
