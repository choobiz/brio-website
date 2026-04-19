# GHL Router Workflow Runbook

**Date:** 2026-04-19
**Author:** Amir Omidvar
**Status:** Ready to build in GHL
**Audience:** Whoever maintains the GHL account (you)

This runbook describes how to evolve the existing GHL setup (Workflow #1 "Speed to Lead" — built around bathroom leads) into a **scalable dispatcher pattern** that handles every lead type — every service page on the website, every Google Ads campaign, every Meta Ads campaign, and any future channels — through a single inbound webhook.

You can do everything in this runbook inside the GHL UI. No code changes are required.

---

## Why we need this

You have one webhook URL receiving leads from:

- 15 form locations on the website (`brio-website-five.vercel.app` → soon `builtbybrio.com`)
- All Google Ads campaigns (currently bathroom; more coming)
- All Meta Ads campaigns (planned)

Right now Workflow #1 was hand-built around the bathroom payload. It works for bathroom leads, but if a kitchen lead comes in it would still trigger bathroom-specific SMS/email templates — wrong messaging, wrong opportunity pipeline, wrong follow-ups.

The fix: **don't put service-specific logic in the workflow that receives the webhook**. Instead, have one *Router* workflow that:

1. Receives every lead
2. Parses the payload into custom fields
3. Tags the contact for reporting
4. Decides which downstream nurture to dispatch to based on `service` and `source`

Then each service line (bathroom, kitchen, basement, etc.) has its own dedicated set of nurture workflows triggered by "Contact added to workflow" — so the Router doesn't need to know how each one works internally.

---

## Architecture overview

```
                  one webhook URL
                  (already configured)
                          │
                          ▼
          ┌─────────────────────────────────────┐
          │ WF 0 — Inbound Lead Router (NEW)    │
          │  • Set custom fields from payload   │
          │  • Apply tags (src-, svc-, ch-)     │
          │  • Apply UTM attribution            │
          │  • Branch by `service` field        │
          │  • End by "Add to Workflow" → child │
          └─────────────────────────────────────┘
                          │
        ┌─────────┬───────┴──────┬─────────────┬─────────────┐
        ▼         ▼              ▼             ▼             ▼
  Bathroom   Kitchen      Basement / etc   Financing    Generic
  Speed-to-  Speed-to-    (later)          Speed-to-    Renovation
  Lead       Lead                          Lead         Speed-to-Lead
  + 6 more   + 6 more                                    + 6 more
  bathroom   kitchen
  nurtures   nurtures

  ─────────────────────────────────────────────────────────────────
  Shared (regardless of service):
  • [Brio] Missed Call — SMS Back     ← already built
  • [Brio] Generic No-Show Recovery   ← clone if needed
```

**Phase-1 scope (this runbook):**

- Build the Router (1 new workflow)
- Keep the existing bathroom workflows as-is
- Clone the bathroom set into ONE "Generic Renovation" nurture set (handles kitchen, basement, custom home, additions, laneway, painting, etc.) — parameterised via merge fields so the same workflow speaks correctly to any service
- Add a Financing-specific Speed-to-Lead (different messaging — leads ask about money, not renovations)

Total workflows after Phase 1: **15** (Router + 7 Bathroom + 7 Generic + 1 Financing Speed-to-Lead, with the rest of Financing nurtures shared with Generic).

Add more service-specific clones later as those service lines actually run paid ad campaigns and need bespoke messaging.

---

## Phase 0 — Custom fields setup (one-time, ~10 min)

GHL → Settings → **Custom Fields** → Contacts. Add the following fields if they don't already exist. Each one stores a payload value the Router will use for tagging, segmentation, and merge tags in messages.

| Field name | Type | Field key | Why |
|---|---|---|---|
| Lead Source | Single Line | `lead_source` | Page slug or campaign id (e.g. `bathroom-remodeling`, `google-ads-bath-c1`) |
| Lead Channel | Single Line | `lead_channel` | `website` \| `google-ads` \| `meta-ads` \| `referral` |
| Service | Single Line | `service` | Bucket: `bathroom`, `kitchen`, `basement`, `custom-home`, `financing`, etc. |
| City | Single Line | `city` | Greater Vancouver city, where known |
| Campaign | Single Line | `campaign` | Campaign id for ad leads |
| Page URL | Single Line | `page_url` | Full URL the form was submitted from |
| Page Path | Single Line | `page_path` | Pathname only — easier to filter on |
| Page Title | Single Line | `page_title` | Human-readable page name |
| Referrer | Single Line | `referrer` | Where the visitor came from |
| Project Type | Single Line | `project_type` | (already exists, keep) |
| Project Address | Single Line | `project_address` | (already exists, keep) |
| Estimated Budget | Single Line | `estimated_budget` | (already exists, keep) |
| UTM Source | Single Line | `utm_source` | (already exists, keep) |
| UTM Medium | Single Line | `utm_medium` | First-touch attribution |
| UTM Campaign | Single Line | `utm_campaign` | First-touch attribution |
| UTM Content | Single Line | `utm_content` | Ad creative variant |
| UTM Term | Single Line | `utm_term` | Search keyword that triggered the click |
| Google Click ID | Single Line | `gclid` | Required for Google Ads conversion upload |
| Facebook Click ID | Single Line | `fbclid` | Required for Meta CAPI conversion upload |

**Tip:** when you create each field, GHL asks for a "Field key" — use the snake_case keys above so they match the webhook payload key-for-key.

---

## Phase 1 — Build the Router workflow (~20 min)

### Step 1.1: Create the workflow

1. GHL → Automations → **+ Create Workflow** → Start from scratch
2. Name: **`[ROUTER] Inbound Lead Dispatcher`**
3. Save

### Step 1.2: Add the trigger

1. Click **Add Trigger** → **Inbound Webhook** (premium trigger)
2. Workflow Trigger Name: `Inbound Webhook`
3. Copy the webhook URL — it will be the same as the existing one (`https://services.leadconnectorhq.com/hooks/7Z5Zm3czsuWjz4zwmsFr/webhook-trigger/d8c59051-0df7-49bc-a6e7-8aee4735ec38`)
4. Mapping Reference: pick a recent live request (it should already include all the fields we send)
5. **Save Trigger**

### Step 1.3: Create / Update Contact

1. + Add action → **Create / Update Contact**
2. Map the fields:

| Contact field | Bind to |
|---|---|
| First Name | `{{trigger.firstName}}` |
| Last Name | `{{trigger.lastName}}` |
| Email | `{{trigger.email}}` |
| Phone | `{{trigger.phone}}` |
| Project Type | `{{trigger.project_type}}` |
| Project Address | `{{trigger.project_address}}` |
| Estimated Budget | `{{trigger.estimated_budget}}` |
| Lead Source | `{{trigger.source}}` |
| Lead Channel | `{{trigger.utm_source}}` (we'll override this in branch logic for paid traffic) |
| Service | `{{trigger.service}}` |
| City | `{{trigger.city}}` |
| Campaign | `{{trigger.campaign_name}}` |
| Page URL | `{{trigger.page_url}}` |
| Page Path | `{{trigger.page_path}}` |
| Page Title | `{{trigger.page_title}}` |
| Referrer | `{{trigger.referrer}}` |
| UTM Source | `{{trigger.utm_source}}` |
| UTM Medium | `{{trigger.utm_medium}}` |
| UTM Campaign | `{{trigger.utm_campaign}}` |
| UTM Content | `{{trigger.utm_content}}` |
| UTM Term | `{{trigger.utm_term}}` |
| Google Click ID | `{{trigger.gclid}}` |
| Facebook Click ID | `{{trigger.fbclid}}` |

3. Save action.

### Step 1.4: Apply universal tags

The website forms send a `tags[]` array, but GHL's "Add Tags" action also lets you apply tags from the workflow. Use this step to apply tags that depend on logic (e.g. derive channel from UTM source).

1. + Add action → **Add Contact Tag**
2. Tags (dynamic):
   - `src-{{trigger.source}}`
   - `svc-{{trigger.service}}`
3. Save action.

### Step 1.5: Branch on `gclid` to set channel = google-ads

If the lead has a `gclid`, they came from Google Ads regardless of what `utm_source` says.

1. + Add action → **If/Else**
2. Condition: `Contact Field — Google Click ID` **is not empty**
3. **YES branch** → Add Contact Tag → `ch-google-ads` (and update Lead Channel = `google-ads` via Update Contact)
4. **NO branch** → continue

### Step 1.6: Branch on `fbclid` to set channel = meta-ads

1. + Add action (inside the previous "NO" branch) → **If/Else**
2. Condition: `Contact Field — Facebook Click ID` **is not empty**
3. **YES branch** → Add Tag `ch-meta-ads`, set Lead Channel = `meta-ads`
4. **NO branch** → Add Tag `ch-website`, set Lead Channel = `website`

### Step 1.7: Branch on `service` and dispatch to the correct nurture

This is the core of the router. Use a single If/Else action with multiple conditions, OR a series of If/Else actions, depending on what GHL allows. Here's the matrix:

| If `service` equals | Add to workflow |
|---|---|
| `bathroom` | `[Bath] New Lead — Speed to Lead` (already built) |
| `financing` | `[Financing] New Lead — Speed to Lead` (build in Phase 3) |
| anything else (kitchen, basement, custom-home, additions, laneway, painting, etc.) | `[Generic] New Lead — Speed to Lead` (build in Phase 2) |

**To do this in GHL:**

1. + Add action → **If/Else**
2. Condition: `Contact Field — Service` **equals** `bathroom`
3. **YES branch** → Add action → **Add to Workflow** → pick `[Bath] New Lead — Speed to Lead`
4. **NO branch** → another If/Else: `Service equals financing`
   - **YES** → Add to Workflow → `[Financing] New Lead — Speed to Lead`
   - **NO** → Add to Workflow → `[Generic] New Lead — Speed to Lead` (default)

End the router workflow after the dispatch — the child workflow takes over from here.

### Step 1.8: Publish the Router

Top-right toggle: flip from Draft → **Publish**. Save.

---

## Phase 2 — Clone Bathroom workflows into a Generic Renovation set (~30 min)

The existing 7 bathroom workflows have proven SMS / email cadence. The fastest way to handle non-bathroom services without rewriting everything: clone them once and parameterise with the `Service` custom field.

### Step 2.1: Clone the workflow

For each of the 7 bathroom workflows:

1. Open the workflow → right-click on its name in the workflow list → **Clone**
2. Rename: `[Bath] X` → `[Generic] X`
3. Rename internal references (e.g. notification text, subject lines, opportunity name) to use `{{custom_field.service|home renovation}}` instead of hard-coded "bathroom".

The 7 to clone:

| Original | Cloned name |
|---|---|
| `[Bath] New Lead — Speed to Lead` | `[Generic] New Lead — Speed to Lead` |
| `[Bath] No Response Nurture` | `[Generic] No Response Nurture` |
| `[Bath] Consultation Booked — Pre-Appointment` | `[Generic] Consultation Booked — Pre-Appointment` |
| `[Bath] Post-Consultation Follow-Up` | `[Generic] Post-Consultation Follow-Up` |
| `[Bath] Long-Term Nurture` | `[Generic] Long-Term Nurture` |
| `[Bath] No-Show Recovery` | `[Generic] No-Show Recovery` |

(`[Brio] Missed Call — SMS Back` stays shared — it's already service-agnostic.)

### Step 2.2: Update the trigger of each cloned workflow

Each child nurture workflow should be triggered by **"Contact Added to Workflow"** — NOT by Inbound Webhook. The Router is the only workflow that listens to the inbound webhook.

For each cloned workflow:

1. Delete the existing Inbound Webhook trigger
2. Add new trigger → **Workflow / Trigger Action** → "Contact added to workflow" — this is what fires when the Router calls "Add to Workflow → [Generic] ..."

### Step 2.3: Replace bathroom-specific copy with merge tags

Open each cloned workflow's SMS, email, and notification templates. Anywhere you see "bathroom" or "bathroom renovation", replace with:

```
{{custom_field.service|home renovation}}
```

The `|home renovation` is a **default value** — if the Service field is empty for some reason, the message reads naturally instead of being blank.

Examples:

- ❌ "Hi {{firstName}}, thanks for reaching out about your bathroom renovation."
- ✅ "Hi {{firstName}}, thanks for reaching out about your {{custom_field.service|home renovation}} project."

- ❌ Subject: "Your bathroom estimate from BRIO Construction"
- ✅ Subject: "Your {{custom_field.service|renovation}} estimate from BRIO Construction"

- ❌ Opportunity name: "Bathroom Reno — {{contact.full_name}}"
- ✅ Opportunity name: "{{custom_field.service|Renovation}} — {{contact.full_name}}"

### Step 2.4: Pipeline routing for opportunities

If you have a Bathroom-specific opportunity pipeline, you'll need either:
- A single "Renovation" pipeline that all services share, OR
- One pipeline per service, with the Generic workflow choosing based on `{{custom_field.service}}`

Easiest start: one shared "Renovations" pipeline with stages like Lead → Consultation Booked → Estimate Sent → Won / Lost. Add service-specific pipelines later only when reporting needs them separately.

### Step 2.5: Publish each cloned workflow

Flip Draft → Publish on each. Save.

---

## Phase 3 — Add Financing Speed-to-Lead (~10 min)

Financing leads are different — they're asking about money, not renovation scope. They need different messaging. Just one new workflow for now (the rest of the financing journey can fall back to the Generic nurtures).

### Step 3.1: Clone `[Generic] New Lead — Speed to Lead` → rename `[Financing] New Lead — Speed to Lead`

### Step 3.2: Update the messaging

- SMS: "Hi {{firstName}}, this is BRIO. Your financing pre-approval request is in. We'll send you Financeit's 2-min application within the next few minutes — keep an eye on your inbox at {{contact.email}}. Reply STOP to opt out."
- Email subject: "Your BRIO financing pre-approval is on its way"
- Email body: link to Financeit application, mention 0% promotional offers, set expectation that pre-approval is instant
- Internal notification: "FINANCING LEAD — {{contact.full_name}} ({{contact.phone}}) — needs Financeit link"

### Step 3.3: Publish

### Step 3.4: Wire it up in the Router

In the Router workflow's dispatch If/Else (Phase 1, Step 1.7), make sure the `service equals financing` branch routes to this new workflow.

---

## Phase 4 — Tag scheme & reporting

The Router applies these tags automatically. Use them to build smart lists in GHL for fast filtering.

### Tag conventions

| Tag prefix | Example | Purpose |
|---|---|---|
| `src-` | `src-bathroom-remodeling`, `src-financing-page`, `src-google-ads-bath-c1` | Where the lead came from (page slug or campaign id) |
| `svc-` | `svc-bathroom`, `svc-kitchen`, `svc-financing` | Service bucket |
| `ch-` | `ch-website`, `ch-google-ads`, `ch-meta-ads` | Channel |
| `city-` | `city-vancouver`, `city-north-vancouver` | Geo (only on city page submissions) |
| `cmp-` | `cmp-bathroom-north-van`, `cmp-financing-q4-2026` | Specific campaign id (for ads) |

### Useful GHL smart lists to build

| Smart list | Filter |
|---|---|
| New leads — last 7 days | Tag contains `ch-` AND created < 7 days ago |
| Bathroom leads not responded in 48h | Tag `svc-bathroom` AND no SMS reply AND created < 48h ago |
| Google Ads leads — this month | Tag `ch-google-ads` AND created in current month |
| Financing pipeline | Tag `svc-financing` |
| North Van — all services | Tag `city-north-vancouver` |
| Cost per lead by service | Group leads by `svc-*` tag, divide by ad spend |

---

## Adding a new service line later (one-page guide)

When a new service starts running paid ad campaigns and needs its own messaging:

1. **Clone** `[Generic] New Lead — Speed to Lead` → rename `[ServiceName] New Lead — Speed to Lead`
2. **Edit the messaging** — replace `{{custom_field.service|home renovation}}` with the specific service language where it improves the message
3. **Update the trigger** to "Contact added to workflow"
4. **Publish**
5. **Edit the Router workflow's dispatch If/Else** → add a new branch: `service equals new-service-slug` → Add to Workflow → `[ServiceName] New Lead — Speed to Lead`
6. **Save & publish** the Router

That's it. The website + ads need no code changes — they already pass `service` correctly. Adding the new service to the Router is the only switch.

---

## Pre-flight test checklist

Before flipping the website DNS to production, run these tests against the live webhook:

- [ ] Submit on `/bathroom-remodeling` → contact created with `svc-bathroom` tag, enrolled in `[Bath] New Lead — Speed to Lead`
- [ ] Submit on `/kitchen-remodeling` → contact created with `svc-kitchen` tag, enrolled in `[Generic] New Lead — Speed to Lead`, generic SMS reads "Hi X, thanks for reaching out about your kitchen project."
- [ ] Submit on `/financing` → contact created with `svc-financing` tag, enrolled in `[Financing] New Lead — Speed to Lead`, gets the Financeit-specific SMS
- [ ] Submit on `/vancouver` → contact has `city-vancouver` tag and `svc-city`
- [ ] Submit on a city page after appending `?utm_source=google&utm_campaign=test&gclid=fakegclid123` to the URL → contact has `gclid` populated and `ch-google-ads` tag, NOT `ch-website`

If all five pass, you're good to flip DNS.

---

## Future enhancements (not in this runbook)

- **Financing-specific nurture set** (after Speed-to-Lead) — currently falls back to Generic. Build it when financing volume justifies bespoke follow-up.
- **City-specific nurture variants** — e.g. mention local building permits in West Vancouver vs. Burnaby. Probably not worth doing until you see the volume.
- **Lost-lead reactivation** — quarterly re-engagement workflow for contacts that went cold.
- **Conversion API uplift** — once `gclid` and `fbclid` are flowing into GHL, set up an export job that feeds them back to Google Ads / Meta to improve attribution and bidding.

---

**Total build time estimate:** ~70–90 min for an experienced GHL operator. The Router is the slow part because of the field mapping; cloning + rebranding the bathroom workflows is mostly find-and-replace work.

Once Phase 1–3 are live, end-to-end test from the website pages, then flip DNS.
