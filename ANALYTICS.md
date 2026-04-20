# Analytics — Comunidade Maestros da IA

PostHog Cloud integration for full-funnel analytics on comunidade.maestrosdaia.com.

## Events Captured

| Event | Type | Properties | Source |
|---|---|---|---|
| `$pageview` | Auto | URL, referrer, UTM params | PostHog autocapture |
| `$pageleave` | Auto | Time on page | PostHog autocapture |
| `$autocapture` | Auto | Element tag, classes, text, `cta` | PostHog autocapture |
| `section_viewed` | Custom | `section` (string) | `useTrackSection` hook |
| `section_dwell` | Custom | `section`, `dwell_ms` (number) | `useTrackSection` hook |

### Section Names

`hero`, `problem`, `pillars`, `knowledge`, `lives`, `support`, `updates`, `testimonials`, `founders`, `pricing`, `faq`, `final_cta`

### CTA Tracking Attributes

Key conversion buttons have explicit `data-ph-capture-attribute-cta` values:

| CTA | Value | Location |
|---|---|---|
| Pricing card checkout | `pricing_main_checkout` | Pricing.tsx |
| Bottom CTA checkout | `final_cta_checkout` | FinalCTA.tsx |

All other clicks (nav links, FAQ toggles, video plays) are tracked via autocapture with auto-generated names.

## Session Replay

Enabled with privacy defaults:
- All form inputs masked (`maskAllInputs: true`)
- Elements with `data-sensitive` attribute masked
- DNT (Do-Not-Track) respected — no tracking if browser DNT is on

## Starter Dashboards (create in PostHog UI)

### 1. Section Engagement Funnel

**Type**: Funnel  
**Steps**: `section_viewed` where `section` = `hero` → `problem` → `pillars` → `pricing` → `final_cta`  
**Shows**: Where visitors drop off in the page scroll journey.

### 2. Button Conversion

**Type**: Bar chart  
**Event**: `$autocapture` grouped by `cta` property  
**Shows**: Which CTAs get the most clicks. Filter for `cta is set` to see only tagged buttons.

### 3. Hero → Checkout Funnel

**Type**: Funnel  
**Steps**: `section_viewed` (section = hero) → `$autocapture` (cta = `pricing_main_checkout` OR `final_cta_checkout`)  
**Shows**: Conversion rate from hero view to checkout click.

## Querying Events via API

```bash
curl -X POST 'https://us.i.posthog.com/api/projects/@current/query/' \
  -H "Authorization: Bearer phx_YOUR_PERSONAL_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "query": {
      "kind": "HogQLQuery",
      "query": "SELECT properties.section, count() FROM events WHERE event = '\''section_viewed'\'' AND timestamp > now() - interval 7 day GROUP BY properties.section ORDER BY count() DESC"
    }
  }'
```

## Cost Notes

- Free tier: 1M events/mo, 5K session recordings/mo — covers ~5-10K monthly visits comfortably.
- If hitting limits, reduce replay sampling: set `session_recording: { sampleRate: 0.2 }` in PostHogProvider.

## LGPD Compliance

- Respects browser Do-Not-Track (DNT) header — no PostHog init if DNT=1.
- All input fields masked in session replays.
- `[data-sensitive]` elements masked in replays.
- `person_profiles: 'identified_only'` — no PII collected unless `posthog.identify()` is explicitly called (not used on this page).
- No cookies set when `NEXT_PUBLIC_POSTHOG_KEY` is absent.

## Environment Variables

| Variable | Required | Default | Description |
|---|---|---|---|
| `NEXT_PUBLIC_POSTHOG_KEY` | Yes | — | PostHog project API key (starts with `phc_`) |
| `NEXT_PUBLIC_POSTHOG_HOST` | No | `https://us.i.posthog.com` | PostHog ingest endpoint |

Set via Netlify dashboard or CLI:
```bash
netlify env:set NEXT_PUBLIC_POSTHOG_KEY phc_xxx --site lp-comunidade-maestros
```
