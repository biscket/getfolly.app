# Folly Plant Care - Phase 1 Website Plan

**Brand:** Folly Plant Care  
**Domain:** `getfolly.app`  
**Stack:** Next.js App Router on Google Cloud Run  
**Phase:** 1 - Marketing site and waitlist

## Goals

1. Build a premium light-mode marketing site for Folly Plant Care.
2. Capture waitlist signups with Resend email confirmation.
3. Display GBP-first pricing with locale-based currency detection.
4. Position Folly against plant identification and plant care apps without brittle competitor claims.
5. Provide a strong SEO foundation for launch.

## Brand Guidelines

### Palette

| Token | Hex | Usage |
|---|---|---|
| White | `#FFFFFF` | Background |
| Soft green | `#F0FDF4` | Section backgrounds |
| Primary green | `#4ADE80` | CTAs, icons, accents |
| Deep green | `#16A34A` | Hover states, headings |
| Charcoal | `#1C1C1E` | Body text, dark sections |
| Muted | `#6B7280` | Secondary text |
| Border | `#E5E7EB` | Borders, dividers |
| Warm | `#FEF3C7` | Coming soon badges |

### Typography

- **Headings:** Plus Jakarta Sans
- **Body:** Inter
- Load fonts via `next/font/google` for stable rendering.

### Voice

- Friendly, knowledgeable, calm, and practical.
- Do not market the product with technical intelligence terminology.
- Focus on outcomes: identify plants, spot problems early, and keep care on track.

## Public Language Rule

Avoid public marketing terms such as:

- AI
- artificial intelligence
- machine learning
- algorithmic magic

Use these alternatives:

- smart
- adaptive
- personalised
- photo-powered
- weather-aware
- guided
- feature names such as Snap & Know, Plant Checkup, and Care Compass

## Features

| Feature | Description |
|---|---|
| Snap & Know | Photo plant identification with care context. Uses scan credits. |
| Plant Checkup | Problem checks for sick plants, damaged leaves, pests, and care issues. Uses scan credits. |
| Care Compass | Detailed care guides for water, light, soil, humidity, toxicity, growth, and more. Free. |
| Rhythm Reminders | Basic care reminders. Free. |
| Adaptive Reminders | Pro reminders that adjust around weather, room, site, season, pot, and light. |
| Weather Watch | Pro weather alerts with plant-risk briefings and action checklists. |
| Monthly Plant Notes | Pro monthly care guidance tailored to season, site, and plants. |
| Discover for You | Free personalised discovery recommendations. |
| Garden Spaces | 1 site free; up to 5 sites on Pro. |
| Room-by-Room Care | Up to 20 rooms included. |
| Plant Journal | Notes, photos, observations, scan history, and activity. |
| Care Today | Daily dashboard for due tasks and care status. |

### Coming Soon

- Light Finder
- Water Sense
- Smart Plant Match

## Pricing

Base prices are GBP-first and informational for the website. Store billing remains authoritative.

| Product | GBP Price |
|---|---|
| Pro monthly | GBP 7.99/mo |
| Pro yearly | GBP 35.99/yr |
| Scan Pack 5 | GBP 2.99 |
| Scan Pack 10 | GBP 4.99 |
| Scan Pack 20 | GBP 7.99 |

### Localisation

- Default: GBP
- UK locales: GBP
- EU locales: EUR using predefined map
- US locales: USD using predefined map
- Other: GBP with local pricing disclaimer
- Always show: "Final in-app pricing may vary by region and app store."

The predefined currency map is acceptable for Phase 1. Do not hard-code converted prices outside the pricing component.

## Site Structure

```text
/              Landing page
/privacy       Privacy policy placeholder
/terms         Terms of use placeholder
/api/waitlist  Waitlist submission endpoint
/sitemap.xml   Auto-generated
/robots.txt    Auto-generated
```

Home page sections:

- Navbar
- Hero
- Features
- Why Folly feels different
- Pricing
- Waitlist
- Footer

## Safer Comparison Strategy

Avoid exact competitor yes/no matrices unless every cell is sourced and dated.

Use a safer category comparison:

- Folly
- Typical ID-first apps
- Typical care-reminder apps

Recommended comparison rows:

- Photo plant identification
- Plant problem check with next steps
- Detailed plant care guides
- Basic reminders on the free plan
- Adaptive reminders for home conditions
- Weather Watch alerts and checklists
- Room and site organisation
- Personalised discovery recommendations
- Transparent GBP-first launch pricing

Include the disclaimer:

> This is a positioning summary based on public app-store and website descriptions reviewed in June 2026. Competitor features, pricing, and plan limits may change.

## SEO

- Title: `Folly Plant Care - Know Your Plants`
- Description: `Folly Plant Care helps you identify plants, spot problems early, and build personalised care routines. Join the early access waitlist.`
- Keywords: plant care app, plant identifier, houseplant care, plant health, plant journal
- Use semantic heading hierarchy.
- Add Open Graph and Twitter metadata.
- Add sitemap and robots routes.

## Acceptance Criteria

- Waitlist form submits and user receives confirmation email.
- Pricing shows GBP by default, EUR for EU locales, and USD for US locales.
- Free plan says 5 scan credits/month, 1 Garden Space, and 20 rooms.
- Pro plan says 30 scan credits/month and up to 5 Garden Spaces.
- No unsupported social proof or fake user counts.
- No public technical intelligence terminology in UI copy.
- Competitor comparison uses broad app categories or includes sourced, dated claims.
- `npm run lint` passes.
- `npm run build` passes.
- Mobile and desktop layouts have no overlapping text.

## Out Of Scope

- Supabase waitlist storage
- Blog / SEO article engine
- Admin / control panel
- App Store / Google Play links
- Dark mode

## Notes

- Do not modify `docs/paywall-implementation-plan.md` in the mobile app repo.
- Website currency conversion is informational and does not override App Store or Google Play billing.
