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

    // requestAnimationFrame ensures the browser has painted the hidden
    // state before we queue the reveal — without this, the first element
    // (0ms delay) could get both classes in the same frame and skip the transition.
    requestAnimationFrame(function() {
      const delayInMilliseconds = index * 150;
      setTimeout(function() {
        element.classList.add('visible');
      }, delayInMilliseconds);
    });
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

  // For each non-hero section: if it's already in the viewport on load,
  // animate it in after a delay so it doesn't just appear while the hero
  // is still doing its entrance. The delay matches when the hero finishes
  // (300ms stagger + 600ms transition = ~900ms, so we start at 800ms to
  // overlap slightly and feel like one continuous sequence).
  // Sections below the fold are handled by the observer as normal.
  const sections = document.querySelectorAll('section:not(#hero)');
  sections.forEach(function(section) {
    const bounds = section.getBoundingClientRect();
    const isAlreadyVisible = bounds.top < window.innerHeight && bounds.bottom > 0;

    section.classList.add('animate');

    if (isAlreadyVisible) {
      setTimeout(function() {
        section.classList.add('visible');
      }, 800);
    } else {
      observer.observe(section);
    }
  });
}


// ---- KICK EVERYTHING OFF ----------------------------------
//
// Wait for the HTML to be fully parsed before touching the DOM.

document.addEventListener('DOMContentLoaded', function() {
  animateHeroEntrance();
  setupScrollReveal();
});
