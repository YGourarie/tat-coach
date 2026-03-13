# TAT Coaching Landing Page Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static landing page for Dini Gourarie's TAT Coaching business — warm, modern, readable by a non-frontend developer.

**Architecture:** Three files at the project root: `index.html` owns structure and content, `styles.css` owns all visual styling (organized by section with clear comments), `main.js` owns all animation logic. CSS defines animation states (hidden/visible); JavaScript decides when to apply them.

**Tech Stack:** Vanilla HTML5, CSS3, JavaScript (ES6). Google Fonts (Cormorant Garamond + DM Sans) via CDN link. No build step, no frameworks, no libraries.

---

## File Structure

```
index.html   — doctype, head (meta/fonts/links), semantic section elements with IDs and placeholder copy
styles.css   — CSS custom properties (color/font variables), layout, per-section styles, animation states
main.js      — hero entrance animation (staggered setTimeout), scroll reveal (IntersectionObserver)
```

---

## Chunk 1: HTML + CSS

### Task 1: Project scaffold — `index.html` skeleton

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create `index.html` with the full document skeleton**

  Write the file with this exact content:

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="TAT Coaching with Dini Gourarie — a gentle, powerful approach to healing and transformation.">
    <title>Dini Gourarie TAT Coaching</title>

    <!-- Fonts: Cormorant Garamond for headings, DM Sans for body text -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="styles.css">
  </head>
  <body>

    <!-- ==============================
         HEADER — business name only
    ============================== -->
    <header>
      <p class="site-name">Dini Gourarie TAT Coaching</p>
    </header>

    <!-- ==============================
         HERO — tagline + CTA
    ============================== -->
    <section id="hero">
      <h1 class="hero-heading">Placeholder tagline goes here</h1>
      <p class="hero-subtext">
        A short supporting sentence or two about what TAT coaching offers.
        Warm, grounded, and inviting.
      </p>
      <a href="#contact" class="button">Book a Session</a>
    </section>

    <!-- ==============================
         ABOUT — photo + bio
    ============================== -->
    <section id="about">
      <div class="about-photo" aria-hidden="true"></div>
      <div class="about-text">
        <h2>About Dini</h2>
        <p>
          Placeholder bio copy. Dini's background, her path to TAT coaching,
          what drives her work, and what clients can expect when they work with her.
        </p>
      </div>
    </section>

    <!-- ==============================
         OFFERING — what TAT is
    ============================== -->
    <section id="offering">
      <h2>What is TAT?</h2>
      <p>
        Placeholder copy explaining what TAT (Tapas Acupressure Technique) is,
        what a session looks and feels like, and who it is for.
      </p>
    </section>

    <!-- ==============================
         CONTACT — calendar + email
    ============================== -->
    <section id="contact">
      <h2>Ready to Begin?</h2>
      <p>Book a session directly or reach out by email.</p>
      <a href="#" class="button">Schedule a Session</a>
      <p class="contact-email">
        Or email: <a href="mailto:placeholder@example.com">placeholder@example.com</a>
      </p>
    </section>

    <script src="main.js"></script>
  </body>
  </html>
  ```

- [ ] **Step 2: Open `index.html` in a browser**

  Expected: unstyled HTML, all five sections visible, no errors in the browser console.

- [ ] **Step 3: Commit**

  ```bash
  git add index.html
  git commit -m "feat: add index.html skeleton with all five sections"
  ```

---

### Task 2: Base styles — `styles.css`

**Files:**
- Create: `styles.css`

- [ ] **Step 1: Create `styles.css` with global variables, reset, and typography**

  ```css
  /* ============================================================
     DESIGN TOKENS
     Change colors and fonts here — they apply everywhere below.
  ============================================================ */
  :root {
    --color-bg:           #FAF7F2;  /* warm cream — default section background */
    --color-bg-alt:       #F2EDE6;  /* slightly deeper cream — alternating sections */
    --color-text:         #3D2E2A;  /* deep warm brown — all body text */
    --color-accent:       #C49A8A;  /* dusty rose — buttons and links */
    --color-accent-hover: #B58878;  /* slightly deeper rose — button hover state */

    --font-heading: 'Cormorant Garamond', Georgia, serif;
    --font-body:    'DM Sans', system-ui, sans-serif;

    --max-width:    720px;
    --section-pad:  80px 24px;
  }


  /* ============================================================
     RESET & BASE
     Remove browser defaults so our styles start from a clean slate.
  ============================================================ */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-body);
    font-size: 17px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    font-family: var(--font-heading);
    font-weight: 500;
    line-height: 1.2;
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
  }

  a:hover {
    color: var(--color-accent-hover);
  }


  /* ============================================================
     LAYOUT UTILITY
     Centers content and constrains width across all sections.
  ============================================================ */
  .section-inner {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--section-pad);
  }


  /* ============================================================
     BUTTON
  ============================================================ */
  .button {
    display: inline-block;
    background-color: var(--color-accent);
    color: var(--color-bg);
    font-family: var(--font-body);
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.04em;
    padding: 14px 36px;
    border-radius: 999px;
    transition: background-color 0.2s ease;
  }

  .button:hover {
    background-color: var(--color-accent-hover);
    color: var(--color-bg);
  }


  /* ============================================================
     HEADER
  ============================================================ */
  header {
    background-color: var(--color-bg);
    text-align: center;
    padding: 32px 24px;
  }

  .site-name {
    font-family: var(--font-heading);
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-text);
  }


  /* ============================================================
     HERO
  ============================================================ */
  #hero {
    background-color: var(--color-bg-alt);
    text-align: center;
  }

  #hero .section-inner {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .hero-heading {
    font-size: clamp(2.4rem, 6vw, 3.8rem);
    margin-bottom: 20px;
  }

  .hero-subtext {
    font-size: 18px;
    font-weight: 300;
    /* Use a muted color directly rather than opacity, so the JS
       animation (which also uses opacity) doesn't conflict. */
    color: rgba(61, 46, 42, 0.75);
    max-width: 560px;
    margin: 0 auto 40px;
  }


  /* ============================================================
     ABOUT
  ============================================================ */
  #about {
    background-color: var(--color-bg);
  }

  #about .section-inner {
    display: flex;
    gap: 48px;
    align-items: flex-start;
  }

  .about-photo {
    width: 160px;
    height: 160px;
    min-width: 160px;      /* prevents it from shrinking in flex layout */
    border-radius: 50%;
    background-color: var(--color-bg-alt);
  }

  .about-text h2 {
    font-size: 2rem;
    margin-bottom: 16px;
  }


  /* ============================================================
     OFFERING
  ============================================================ */
  #offering {
    background-color: var(--color-bg-alt);
    text-align: center;
  }

  #offering .section-inner {
    max-width: 620px;
  }

  #offering h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }


  /* ============================================================
     CONTACT
  ============================================================ */
  #contact {
    background-color: var(--color-bg);
    text-align: center;
  }

  #contact h2 {
    font-size: 2rem;
    margin-bottom: 12px;
  }

  #contact p {
    margin-bottom: 28px;
  }

  .contact-email {
    margin-top: 20px;
    font-size: 15px;
    opacity: 0.75;
  }


  /* ============================================================
     ANIMATIONS
     JS adds the class "visible" to trigger these transitions.
     Elements start hidden (opacity 0, shifted down) and
     transition to visible (opacity 1, natural position).
  ============================================================ */
  .animate {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .animate.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Sections use a slightly shorter duration for the scroll reveal */
  section.animate {
    transition-duration: 0.5s;
  }
  ```

- [ ] **Step 2: Wrap each section's content in `<div class="section-inner">` in `index.html`**

  Every `<section>` needs its content wrapped so the max-width and padding apply. Update `index.html`:

  ```html
  <header>
    <p class="site-name">Dini Gourarie TAT Coaching</p>
  </header>

  <section id="hero">
    <div class="section-inner">
      <h1 class="hero-heading">Placeholder tagline goes here</h1>
      <p class="hero-subtext">
        A short supporting sentence or two about what TAT coaching offers.
        Warm, grounded, and inviting.
      </p>
      <a href="#contact" class="button">Book a Session</a>
    </div>
  </section>

  <section id="about">
    <div class="section-inner">
      <div class="about-photo" aria-hidden="true"></div>
      <div class="about-text">
        <h2>About Dini</h2>
        <p>
          Placeholder bio copy. Dini's background, her path to TAT coaching,
          what drives her work, and what clients can expect when they work with her.
        </p>
      </div>
    </div>
  </section>

  <section id="offering">
    <div class="section-inner">
      <h2>What is TAT?</h2>
      <p>
        Placeholder copy explaining what TAT (Tapas Acupressure Technique) is,
        what a session looks and feels like, and who it is for.
      </p>
    </div>
  </section>

  <section id="contact">
    <div class="section-inner">
      <h2>Ready to Begin?</h2>
      <p>Book a session directly or reach out by email.</p>
      <a href="#" class="button">Schedule a Session</a>
      <p class="contact-email">
        Or email: <a href="mailto:placeholder@example.com">placeholder@example.com</a>
      </p>
    </div>
  </section>
  ```

- [ ] **Step 3: Open `index.html` in a browser**

  Expected:
  - Warm cream background
  - Cormorant Garamond headings, DM Sans body text
  - Sections alternate between `#FAF7F2` and `#F2EDE6`
  - Dusty rose pill button in the hero and contact sections
  - Circular photo placeholder in the About section
  - Page content is horizontally centered and width-constrained

- [ ] **Step 4: Commit**

  ```bash
  git add index.html styles.css
  git commit -m "feat: add styles — layout, typography, colors, all sections"
  ```

---

## Chunk 2: JavaScript Animations

### Task 3: Animation logic — `main.js`

**Files:**
- Create: `main.js`
**`main.js` adds the `animate` class at runtime. This means if JS fails to load, the page is still fully readable — elements only start invisible once JS is running and ready to reveal them.**

- [ ] **Step 1: Verify `index.html` has no `animate` class in the HTML**

  The hero children and sections should have only their semantic classes — no `animate` in the markup. For example:

  ```html
  <h1 class="hero-heading">Placeholder tagline goes here</h1>
  <section id="hero">
  ```

  The `<script src="main.js">` tag is already at the bottom of `<body>` from Task 1. No HTML changes needed in this task.

- [ ] **Step 2: Create `main.js`**

  ```javascript
  // ============================================================
  // ANIMATIONS
  //
  // Two things happen here:
  //   1. Hero elements fade in on page load, one after another.
  //   2. Each section fades in as you scroll it into view.
  //
  // How it works:
  //   CSS gives every .animate element opacity 0 and a slight
  //   downward offset. Adding the class "visible" triggers a
  //   CSS transition that brings it to full opacity at its
  //   natural position.
  // ============================================================


  // ---- 1. HERO ENTRANCE (fires on page load) ----------------
  //
  // Grab the three hero elements and reveal them one by one,
  // 150ms apart, so they feel like they arrive in sequence.

  function animateHeroEntrance() {
    const heroElements = [
      document.querySelector('.hero-heading'),
      document.querySelector('.hero-subtext'),
      document.querySelector('#hero .button'),
    ];

    // Mark each hero element as animate (starts it invisible),
    // then reveal them one by one, 150ms apart.
    // Filter out nulls in case a selector ever fails to match.
    heroElements.filter(Boolean).forEach(function(element, index) {
      element.classList.add('animate');

      const delayInMilliseconds = index * 150;
      setTimeout(function() {
        element.classList.add('visible');
      }, delayInMilliseconds);
    });
  }


  // ---- 2. SCROLL REVEAL (fires as sections enter the viewport) ----
  //
  // IntersectionObserver watches every <section> on the page.
  // When a section becomes visible in the browser window,
  // we add "visible" to it and stop watching it (no re-animation).

  function setupScrollReveal() {
    const options = {
      threshold: 0.15,  // trigger when 15% of the section is in view
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);  // animate once, then done
        }
      });
    }, options);

    // For each non-hero section: if it's already in the viewport when
    // the page loads, leave it alone (no animation needed — it's already
    // visible). If it's below the fold, mark it invisible and let the
    // observer reveal it when the user scrolls to it.
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(function(section) {
      const bounds = section.getBoundingClientRect();
      const isAlreadyVisible = bounds.top < window.innerHeight && bounds.bottom > 0;

      if (isAlreadyVisible) {
        return;  // skip — no animation, just show it
      }

      section.classList.add('animate');
      observer.observe(section);
    });
  }


  // ---- KICK EVERYTHING OFF ----------------------------------
  //
  // Wait for the HTML to be fully parsed before touching the DOM.

  document.addEventListener('DOMContentLoaded', function() {
    animateHeroEntrance();
    setupScrollReveal();
  });
  ```

- [ ] **Step 3: Open `index.html` in a browser and verify hero animation**

  Expected:
  - On page load, the hero heading fades and drifts up into position
  - 150ms later the subtext appears the same way
  - 150ms after that the button appears
  - Everything else on the page is visible immediately (no flash of invisible content on sections already in view)

- [ ] **Step 4: Verify scroll reveal**

  Scroll down the page slowly.

  Expected:
  - The About, Offering, and Contact sections each fade and drift in as they enter the viewport
  - No section re-animates if you scroll back up

- [ ] **Step 5: Check browser console for errors**

  Open DevTools → Console.
  Expected: no errors, no warnings.

- [ ] **Step 6: Commit**

  `index.html` does not need changes in this task (the `<script>` tag was added in Task 1).

  ```bash
  git add main.js
  git commit -m "feat: add JS animations — hero entrance and scroll reveal"
  ```
