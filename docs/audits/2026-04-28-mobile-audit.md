# BRIO Website Mobile Optimization Audit

**Date:** 2026-04-28
**Stack:** Next.js 16.2.3, React 19.2.4, Tailwind v4
**Scope:** Every page in `app/`, every component in `components/`
**Method:** Static code audit (no live device testing). Findings need verification on a real 375px device before final fix decisions.

---

## Executive Summary

The site is **partially mobile-ready** but has multiple issues that hurt conversion on phones (375px–480px). It uses modern responsive patterns and `next/image` properly, but compact form grids, nav dropdown sizing, and hero text scaling are problems.

**Overall readiness:** 6/10 — functional but blocked by several P0 issues.

**Top fixes (priority order):**
1. **Compact LeadForm uses `grid-cols-2` at all widths** (`components/shared/LeadForm.tsx:165–170, 178–184`). Crushes phone/email and budget/start-date inputs to ~150px each on 375px screens.
2. **Navbar mega-dropdowns sized `min-w-[420px]` / `min-w-[480px]`** (`components/shared/Navbar.tsx:106–132`). Need verification — should be hidden behind `lg:` breakpoint, but if they leak through they overflow mobile viewport.
3. **Hero H1 has no mobile size** (`components/home/Hero.tsx:65` per audit) — `text-[42px] md:text-[56px]` skips a smaller mobile size.

**Effort:** ~4–6 hours to clear P0+P1.

---

## P0 — Breaks Mobile UX

| File:Line | Issue | Fix |
|---|---|---|
| `components/shared/Navbar.tsx:106–132` | Desktop dropdown menus (`min-w-[420px]` / `min-w-[480px]`) — needs verification whether ancestor hides them on mobile. If not, they overflow viewport. | If unhidden on mobile: add `hidden lg:block` on dropdown wrappers. |
| `components/shared/LeadForm.tsx:165–170, 178–184` | Compact variant uses `grid-cols-2` at all widths. At 375px → each input ~171px wide; selects unreadably narrow. | Change to `grid-cols-1 sm:grid-cols-2`. |
| `components/home/Hero.tsx` (H1) | `text-[42px] md:text-[56px]` — no mobile-specific size. 42px H1 with drop shadow on 375px viewport overflows or wraps to 4–5 lines. | `text-[32px] sm:text-[42px] md:text-[56px]` |
| `components/shared/Footer.tsx:38, 48` | Areas/Services link sub-grids use `grid-cols-2` at all widths. At 375px each column ~150px → 13px link text squeezed. | Wrap inner sub-grids: `grid-cols-1 sm:grid-cols-2`. NB: outer footer column grid already stacks correctly. |

---

## P1 — Hurts Conversion

| File:Line | Issue | Fix |
|---|---|---|
| `components/shared/LeadForm.tsx:206` | After keyboard opens on mobile, submit button can scroll off-screen. | Add bottom padding spacer or sticky form-footer wrapper for mobile. |
| `components/shared/Navbar.tsx:203–217` | Phone icon and hamburger are 40×40 — at iOS HIG minimum but borderline. Phone is icon-only, no label. | Bump to 48×48 (`w-12 h-12`). Add inline phone text on mobile or make icon larger. |
| `components/home/ServicesGrid.tsx:30` | `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4` — 2-col cards at 375px = ~150px wide; 40px icon is borderline. | Bump icon size on mobile or increase card padding. |
| `components/service/BeforeAfterSlider.tsx:82` | 40px drag handle borderline for touch on iOS Safari. | Bump to 48px on mobile or add visual feedback on drag. |
| `components/shared/LeadForm.tsx` textarea | Fixed `rows={4}` adds ~180px on mobile, lengthening already-long form. | `rows={3} md:rows={4}` |
| `components/shared/TrustBadgeStrip.tsx:126` (just shipped in Pilot 1) | At 375px, `gap-x-10` is generous; 6 badges may wrap to 2/row instead of 3. | Tighten: `gap-x-6 max-md:gap-x-4`. |
| `components/city/CityPageLayout.tsx` (carousel buttons) | 32px buttons (`w-8 h-8`) below thumb-friendly minimum. | Bump to 44px on mobile. |

---

## P2 — Polish / Recon-pattern gaps

| Pattern | Status | Recommendation |
|---|---|---|
| Sticky bottom tap-to-call bar | **DONE** in Pilot 2 (`components/shared/StickyMobileCTA.tsx`, wired in `app/layout.tsx`). | Verify on live device after Vercel deploy. |
| Click-to-call button in hero (alongside form CTA) | Missing | Add inline `tel:` button on hero alongside "Book Consultation." Mobile-only. |
| Swipeable city carousel | Buttons-only navigation (no touch swipe) | Add swipe gestures via Framer Motion `onDragEnd` or `react-swipeable`. |
| Sticky promo banner with urgency | Missing on mobile | Optional — would conflict with Pilot 4 ($1,500 dated offer banner). Hold until Pilot 4 decision. |
| Form placeholder contrast | Default browser greys, possibly below WCAG 4.5:1 | Audit + custom `::placeholder` colour. |
| Hero slideshow autoplay | Runs every 5s on mobile, slight battery drain | Pause-on-blur or auto-pause after 1 cycle. |

---

## Per-Route Mobile Assessment

| Route | Readiness | Notes |
|---|---|---|
| `/` (Home) | 7/10 | Hero h1 is the main issue. Services grid, FAQ, testimonials, partners carousel all work. |
| `/bathroom-remodeling` | 7/10 | Stacked LeadForm variant works (good). Same hero sizing issue. Pilot 1 changes shipped here. |
| `/kitchen-remodeling` | 7/10 | Same as bathroom. |
| `/about-us` | 8/10 | Best-designed mobile page. Hero uses aspect-ratio + responsive H1 sizes. Core values + Instagram grid stack cleanly. |
| `/projects` | 7/10 | Filter pills may wrap awkwardly at 375px; cards responsive. |
| `/blog` | 8/10 | Category pills are `overflow-x-auto` (good). Featured post + grid responsive. |
| `/blog/[slug]` | 9/10 | Best mobile page on the site. Mobile TOC accordion + sticky share bar already implemented. |
| `/financing` | 7/10 | Application form `grid-cols-1 md:grid-cols-2` correct. |
| `/[city]/` (city pages) | 7/10 | Hero scales; carousel needs swipe. Form stacks correctly. |

**Average:** ~7.2/10.

---

## Code-Quality Observations (positive)

- **Image optimization:** all `<Image>` use `next/image` with proper `sizes`. No CLS.
- **Client components:** ~19 `"use client"` files, all justified (interactive forms, sliders, nav).
- **Font loading:** Open Sans via Next.js Google Fonts with `display: "swap"`.
- **Form handling:** `submitLead()` server action — no inline submit logic.

---

## Caveats

This audit was static-code only. Some claims (especially P0-1 navbar dropdowns) need real-device verification before fixes — the agent may have flagged a false positive if ancestors hide the dropdown on mobile. Verify the dropdowns actually leak through to the mobile viewport at 375px before changing.

Likewise, the form grid claim (P0-2) must be verified — the audit specifies the *compact* variant; if no page actually uses the compact variant on mobile, the issue is theoretical.

---

## Post-Audit Verification + Fixes Shipped (2026-04-28)

Verified each P0 claim before touching code:

| Claim | Verification | Action |
|---|---|---|
| P0-1 — Navbar dropdowns leak | **FALSE POSITIVE.** `DesktopDropdown` is rendered inside `<div className="hidden lg:flex">` (Navbar.tsx:173). Mobile viewport never sees the `min-w-[420px]` / `min-w-[480px]` dropdowns. | None needed. |
| P0-2 — LeadForm `grid-cols-2` | **CONFIRMED.** Lines 165 + 170 use `grid-cols-2 gap-4` with no responsive prefix. | Changed both to `grid-cols-1 sm:grid-cols-2 gap-4`. |
| P0-3 — Hero h1 sizing | **CONFIRMED.** `text-[42px] md:text-[56px] lg:text-[68px]` skipped a mobile size. | Changed to `text-[32px] sm:text-[42px] md:text-[56px] lg:text-[68px]`. |
| P0-4 — Footer inner sub-grids | **CONFIRMED but mild.** Outer column grid stacks correctly; only the link sub-grids forced 2 columns at all widths. | Changed both Areas + Services sub-grids to `grid-cols-1 sm:grid-cols-2`. |
| P1 — Navbar mobile button size | **CONFIRMED.** Phone + hamburger were 40×40 (iOS HIG borderline). | Bumped both to 48×48 (`w-12 h-12`). |

Build clean, type-check clean.
