# Dini Gourarie TAT Coaching — Landing Page Design Spec

**Date:** 2026-03-13
**Status:** Approved

---

## Overview

A single-page landing site for Dini Gourarie's TAT coaching business. The goal is a calm, readable presence that communicates who Dini is, what TAT coaching is, and gives visitors one clear path to book a session or get in touch. No JavaScript. No frameworks. Built for a non-frontend developer to read and maintain easily.

---

## Files

```
index.html     — all page content and structure
styles.css     — all visual styling, organized by section
```

No build step. No dependencies beyond a Google Fonts import in the `<head>`.

---

## Page Sections

### 1. Header
- Displays the business name: **Dini Gourarie TAT Coaching**
- Minimal — no navigation links needed at this stage
- Sits at the top of the page, centered

### 2. Hero
- Large tagline (placeholder copy)
- Short supporting subtext (1–2 sentences, placeholder)
- A single CTA button: **"Book a Session"** — anchor link to the contact section

### 3. About Dini
- A photo placeholder (a styled `<div>` with a soft background)
- A short biographical paragraph (placeholder copy)

### 4. The Offering — What is TAT?
- A section explaining what TAT coaching is and what a session looks like
- All placeholder copy for now; Dini will supply final text

### 5. Contact / Book
- A **calendar link button** — links to an external booking URL (placeholder `#` for now)
- An **email address** displayed as a `mailto:` link (placeholder for now)

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

### Buttons
- Pill-shaped (`border-radius: 999px`)
- Dusty rose background, cream text
- CSS `:hover` color shift only — no animations, no shadows

---

## Constraints & Decisions

- **No JavaScript** — the site is purely HTML + CSS
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
