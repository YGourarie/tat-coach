# Dini Gourarie TAT Coaching — Landing Page Design Spec

**Date:** 2026-03-13
**Status:** Approved

---

## Overview

A single-page landing site for Dini Gourarie's TAT coaching business. The goal is a calm, readable presence that communicates who Dini is, what TAT coaching is, and gives visitors one clear path to book a session or get in touch. Sleek and modern in feel, warm in tone. Built for a non-frontend developer to read and maintain easily.

---

## Files

```
index.html     — all page content and structure
styles.css     — all visual styling, organized by section
main.js        — all animation logic (page load + scroll reveals)
```

No build step. No dependencies beyond a Google Fonts import in the `<head>`.

`index.html` must include standard `<meta>` tags in `<head>`:
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` (ensures correct rendering on phones)
- `<meta name="description" content="...">` (placeholder description)
- `<title>Dini Gourarie TAT Coaching</title>`

---

## Page Sections

### 1. Header
- Displays the business name: **Dini Gourarie TAT Coaching**
- Minimal — no navigation links needed at this stage
- Sits at the top of the page, centered

### 2. Hero
- Large tagline (placeholder copy)
- Short supporting subtext (1–2 sentences, placeholder)
- A single CTA button: **"Book a Session"** — `href="#contact"`, anchors to the Contact section

### 3. About Dini
- A photo placeholder (a styled `<div>`, 160×160px, circular via `border-radius: 50%`, soft `#F2EDE6` background)
- A short biographical paragraph (placeholder copy)

### 4. The Offering — What is TAT?
- A section explaining what TAT coaching is and what a session looks like
- All placeholder copy for now; Dini will supply final text

### 5. Contact / Book (`id="contact"`)
- A **calendar link button** — links to an external booking URL (placeholder `#` for now)
- An **email address** displayed as a `mailto:` link (placeholder `placeholder@example.com` for now)

---

## Visual Style

### Color Palette
| Role                    | Value     | Description               |
|-------------------------|-----------|---------------------------|
| Page background         | `#FAF7F2` | Warm cream                |
| Alternate section bg    | `#F2EDE6` | Slightly deeper cream     |
| Primary text            | `#3D2E2A` | Deep warm brown           |
| Accent (buttons, links) | `#C49A8A` | Dusty rose                |
| Button hover            | `#B58878` | Slightly deeper rose      |

### Typography
Both fonts loaded via a single Google Fonts import in `<head>`.

| Role     | Font               | Notes                              |
|----------|--------------------|------------------------------------|
| Headings | Cormorant Garamond | Elegant serif, warm and grounded   |
| Body     | DM Sans            | Clean, modern, readable at small sizes |

### Layout
- Single centered column
- Max-width: `720px`
- Generous vertical padding between sections (`80px`)
- Sections alternate background color for gentle visual rhythm — no hard borders or dividers
  - Odd sections (Header, About, Contact): `#FAF7F2`
  - Even sections (Hero, Offering): `#F2EDE6`

### Buttons
- Pill-shaped (`border-radius: 999px`)
- Dusty rose (`#C49A8A`) background, cream (`#FAF7F2`) text
- CSS `:hover` color shift only — no extra animations, no shadows

---

## Animations

All animation is driven by `main.js`. CSS defines the visual states; JavaScript decides when to trigger them.

### Approach
- Elements that animate have two CSS classes: a default "hidden" state (`opacity: 0`, shifted down `20px`) and a `.visible` state (`opacity: 1`, `translateY(0)`)
- `styles.css` defines the CSS `transition` on those elements (duration, easing)
- `main.js` adds the `.visible` class at the right moment — JS owns the timing, CSS owns the look

### Hero entrance (page load)
- On `DOMContentLoaded`, JS adds `.visible` to hero elements in sequence with `setTimeout` staggering:
  - `0ms` — hero heading
  - `150ms` — hero subtext
  - `300ms` — CTA button
- Easing: `ease-out` | Duration: `0.6s`

### Section scroll reveals (`IntersectionObserver`)
- JS sets up one `IntersectionObserver` that watches all `<section>` elements
- When a section enters the viewport, the observer adds `.visible` to it
- Once visible, the observer stops watching that section (no re-animation)
- Easing: `ease-out` | Duration: `0.5s`

### `main.js` structure (plain English comments throughout)
```
// 1. Animate the hero elements in on page load
// 2. Set up a scroll observer to reveal sections as they come into view
```
~25 lines total, no libraries.

---

## Constraints & Decisions

- **JavaScript for animations** — JS drives timing; CSS drives appearance. Readable, separated concerns.
- **No frameworks** — not even Tailwind; raw CSS with named class selectors
- **Code readability first** — CSS organized with clear section comments (e.g., `/* === HERO === */`), HTML uses semantic elements and clear id/class names so a non-frontend developer can navigate and edit with confidence
- **Placeholder copy throughout** — all text is placeholder until Dini supplies final copy
- **Placeholder links** — calendar URL and email address use `#` / `placeholder@example.com` until real values are provided
- **One external dependency** — Google Fonts via `<link>` in `<head>`; can be removed by swapping to system fonts if needed

---

## Out of Scope (for now)

- Mobile responsiveness beyond basic single-column layout
- A contact form (email link is sufficient)
- Multiple pages
- Any CMS or dynamic content
- Analytics
