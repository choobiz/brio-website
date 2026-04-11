# builtbybrio.com — Extracted Design Tokens

## Typography

### Headings (H1, H2)
- **Font:** "Times New Roman", sans-serif (Elementor renders Poppins but falls back)
- **H1 Size:** 68px (desktop)
- **H1 Weight:** 600 (SemiBold)
- **H1 Color:** rgb(255, 255, 255) — white on dark background
- **H2 Size:** 42px (desktop)
- **H2 Weight:** 600 (SemiBold)
- **H2 Color:** rgb(29, 49, 70) — #1D3146 (BRIO Navy)

### Body Text
- **Font:** "Open Sans", sans-serif
- **Size:** 20px
- **Color:** rgb(255, 255, 255) on hero / varies on other sections

## Colors

| Token | RGB | Hex | Usage |
|-------|-----|-----|-------|
| BRIO Navy | rgb(29, 49, 70) | #1D3146 | H2 headings, buttons, dark sections |
| Light Gray BG | rgb(245, 245, 245) | #F5F5F5 | Section backgrounds (partners, process, trust, FAQ, footer) |
| White | rgb(255, 255, 255) | #FFFFFF | Default background, text on dark |
| FAQ BG | rgb(249, 249, 249) | #F9F9F9 | FAQ section background |

## Buttons
- **Background:** rgb(29, 49, 70) — #1D3146 (Navy)
- **Text:** rgb(255, 255, 255) — White
- **Border Radius:** 0px (square corners!)
- **Font:** Same as body

## Navbar
- **Background:** rgba(0, 0, 0, 0) — Transparent (overlay on hero)
- **Height:** 76px
- **Style:** White logo on transparent bg over hero image

## Section Order (Homepage)
1. **Navbar** — transparent, overlaying hero
2. **Hero** — full-width image with text overlay, H1 "From Concept to Completion—Together"
3. **Partners bar** — #F5F5F5 bg, logo carousel (13 partner logos in a swiper)
4. **Building Confidence** — white bg, centered text with image on right (bg image: R2797323-6.jpg), 95px padding
5. **Our Latest Projects** — project carousel (6 projects), each in #F5F5F5 card with 30px padding
6. **Our Services** — #F5F5F5 bg, 12 service cards in 4-column grid with images and titles
7. **The Brio Process** — white bg with #F5F5F5 step cards, 6 steps in 3-column grid, 30px padding per card
8. **Build with Confidence** — #F5F5F5 bg, 9 trust icons in 3-column grid
9. **FAQ** — #F9F9F9 bg, accordion with 5 questions
10. **Related Content** — 3 cards
11. **Newsletter** — white bg, 2-column (form + image of person)
12. **Footer** — #F5F5F5 bg, 4 columns (brand/social, areas, services, get in touch)

## Images Used
- Hero background with overlay
- Partner logos carousel (13 logos)
- Building confidence section: R2797323-6.jpg (background image)
- Service cards: each has a small image icon/illustration
- Project cards: project photos as thumbnails
- Newsletter: Untitled-design-3-e1743026867245-1022x1024.png (person photo)
- Footer: Logo (white version on #F5F5F5 bg)

## Key Differences from My First Build
1. ❌ I used Sora/Inter → ✅ Site uses Times New Roman headings + Open Sans body
2. ❌ I used navy dark hero → ✅ Site has transparent navbar over photo hero  
3. ❌ I used icon-based service cards → ✅ Site uses image-based service cards in 4-col grid
4. ❌ I used brio-blue (#0068A0) CTA → ✅ Site uses navy (#1D3146) square buttons
5. ❌ I skipped partners carousel → ✅ Site has 13-logo partner carousel
6. ❌ I used card-style projects → ✅ Site has horizontal scroll carousel with project cards
7. ❌ I used navy footer → ✅ Site uses light gray #F5F5F5 footer
8. ❌ I skipped newsletter section → ✅ Site has newsletter + person photo section
