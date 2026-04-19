# Audit Findings — comunidade.maestrosdaia.com

Date: 2026-04-19

## CRITICAL (Structural / Conversion-Killing)

### 1. Header, FloatingCTA, WhatsAppButton not rendered
- `Header.tsx`, `FloatingCTA.tsx`, `WhatsAppButton.tsx` exist as components but are NOT imported in `page.tsx`
- Page has NO navigation, NO sticky header, NO mobile floating CTA
- **Hits**: Structural #4 (no nav), Interaction #28-30 (missing states), A11y #47 (no keyboard nav on missing elements)
- **Priority**: CRITICAL
- **Fix**: Import and render Header, FloatingCTA, WhatsAppButton in page.tsx

### 2. Hero has NO CTA button
- Hero shows stats bar but zero call-to-action buttons
- Per hero-builder skill: "Never ship hero without CTA" — this is the #1 conversion killer
- **Hits**: Copy #37 (no action-oriented CTA), Hero anti-slop #8 (no trust signal beyond stats)
- **Priority**: CRITICAL
- **Fix**: Add primary CTA "Garantir Minha Vaga" + secondary "Ver o que inclui →" to Hero

### 3. Hero stat inconsistency
- Hero shows: 20h+ content, 500+ members, 7 trails
- But GSAP counter animates from 0 on load, and some snapshots captured mid-animation (17h, 386, 4)
- FinalCTA says "+500 membros" — inconsistent with Hero "302+" at certain moments
- **Fix**: Ensure counters show final values and are consistent across page

### 4. SupportSection counters show "0%"
- `StatCounter` uses `gsap.from()` which sets initial value to 0 and animates TO textContent
- If ScrollTrigger hasn't fired, users see "0%" / "0/7"
- **Hits**: Motion #18 (text visibility depends on JS timeline)
- **Priority**: HIGH
- **Fix**: Use `gsap.fromTo()` pattern or ensure initial display shows final value

## HIGH (SEO / Meta / Performance)

### 5. No `metadataBase` in metadata
- Missing `metadataBase: new URL("https://comunidade.maestrosdaia.com")`
- OG URLs won't resolve correctly
- **Priority**: HIGH
- **Fix**: Add metadataBase to layout.tsx metadata

### 6. No OG image
- Metadata has no `images` field in openGraph
- Social sharing shows no preview image
- **Hits**: Meta #41 (no custom OG image)
- **Fix**: Add static OG image or reference existing asset

### 7. No JSON-LD structured data
- No Organization, FAQPage, or Course schema
- **Hits**: Meta #45
- **Fix**: Add JSON-LD scripts to layout.tsx

### 8. Font subsets missing `latin-ext`
- PT-BR characters (ç, ã, õ, á, é) need `latin-ext` subset
- Current: `subsets: ["latin"]` only
- **Priority**: HIGH
- **Fix**: Add `"latin-ext"` to font subset arrays

### 9. No `display: "swap"` on fonts
- `Space_Grotesk` and `Inter` font configs don't specify `display: "swap"`
- May cause invisible text during font load
- **Fix**: Add `display: "swap"` to both font configs

### 10. No favicon suite
- Public directory has only default Next.js SVGs (file.svg, globe.svg, etc.)
- No favicon.ico, icon.svg, apple-touch-icon.png
- **Hits**: Meta #42 (no dark-mode favicon)
- **Fix**: Note as v2 item (requires design assets)

### 11. Colors use hex, not OKLCH
- globals.css uses hex values (#09090B, #F5A623, etc.)
- Per design-tokens-and-typography skill: should use OKLCH for predictable lightness
- **Priority**: MEDIUM (functional but not ideal)
- **Fix**: Migrate @theme block to OKLCH values

## MEDIUM (Accessibility / Quality)

### 12. No skip-to-content link
- Long page (13 sections) with no skip link for keyboard users
- **Hits**: A11y #47 (keyboard nav)
- **Fix**: Add skip-to-content link in layout.tsx

### 13. Hero SplitText lacks sr-only text
- Characters are individually wrapped in spans; screen reader reads "A C o m u n i d a d e..."
- **Hits**: A11y #49 (animated text DOM duplication)
- **Fix**: Add sr-only span with full text, aria-hidden on animated version

### 14. No `aria-labelledby` on sections
- Sections use `<section>` without `aria-labelledby` linking to their headings
- **Fix**: Add `id` to h2 elements and `aria-labelledby` to section elements

### 15. Section padding too uniform
- Most sections use `py-16 md:py-24`; hero uses `min-h-screen` (fine)
- Only Pricing varies (`py-20 md:py-28`)
- **Hits**: Structural #5 (section padding varies)
- **Fix**: Vary: Hero stays, major sections py-24 md:py-32, minor sections py-16 md:py-24, FAQ py-12 md:py-16

### 16. Focus ring styling missing
- No custom `:focus-visible` styles in globals.css
- Default browser rings or none
- **Hits**: Interaction #30 (focus rings visible and brand-styled)
- **Fix**: Add focus-visible ring styles to globals.css

### 17. `framer-motion` import instead of `motion/react`
- All components import from `"framer-motion"` (old package name)
- Package.json has `"framer-motion": "^12.38.0"`
- Not a functional issue (alias still works) but should be updated
- **Priority**: LOW
- **Fix**: Note for v2

### 18. Entire page.tsx is "use client"
- Makes entire page client-rendered, hurting SSR/static generation
- For static export this is less impactful but still suboptimal
- **Priority**: MEDIUM
- **Fix**: Move page.tsx to server component, keep SmoothScroll as client wrapper

### 19. Missing `prefers-reduced-motion` in JS animations
- CSS media query exists in globals.css (good)
- But framer-motion/GSAP animations don't check useReducedMotion
- **Fix**: Note as v2 — CSS rule catches most cases

### 20. robots.txt is bare
- Check content of public/robots.txt
- **Fix**: Verify and enhance if needed

## LOW (Polish)

### 21. No `active:scale` on CTA buttons
- Pricing CTA uses motion whileTap (good)
- Other interactive elements may lack press states
- **Fix**: Already mostly handled via motion whileTap

### 22. Footer is minimal but acceptable
- Single row with brand, social links, phone
- **Hits**: Copy #36 says "curated" which this is — minimal is fine for community LP

### 23. `scroll-behavior: auto` set twice
- Both `*` and `html` selectors set scroll-behavior: auto
- Redundant but harmless
- **Fix**: Remove duplicate

## Anti-Slop Checklist Summary (Before)

- **Structural**: 5/8 pass (missing: #4 hero CTAs, #5 padding varies, #3 icons everywhere)
- **Visual**: 7/9 pass (missing: #15 raw values in some places, #16 shadows could be stacked better)
- **Motion**: 8/10 pass (missing: #18 text visibility risk in SupportSection, #26 reduced motion JS)
- **Interaction**: 3/5 pass (missing: #30 focus rings, #29 active states on some elements)
- **Copy**: 4/5 pass (missing: #34 social proof above fold)
- **Performance**: Need Lighthouse run
- **Meta**: 1/5 pass (missing: #41 OG, #42 favicon, #43 title OK, #44 meta desc OK, #45 JSON-LD)
- **Accessibility**: 3/5 pass (missing: #47 keyboard nav, #49 sr-only text)

**Estimated anti-slop score: ~30/50 hits remaining → target: <10/50**
