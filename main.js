// ============================================================
// SCROLL REVEAL
//
// The hero entrance and about section are animated by CSS
// keyframe animations in styles.css — they need no JavaScript
// and start invisible from the very first paint (no flash).
//
// This file handles only sections that start below the fold:
// when one scrolls into view, we add "visible" to trigger
// the CSS transition defined in styles.css.
// ============================================================

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

  // Skip hero and about — those are handled by CSS animations.
  // For everything else: if it's below the fold, mark it invisible
  // and let the observer reveal it when the user scrolls to it.
  const sections = document.querySelectorAll('section:not(#hero):not(#about)');
  sections.forEach(function(section) {
    const bounds = section.getBoundingClientRect();
    const isAlreadyVisible = bounds.top < window.innerHeight && bounds.bottom > 0;

    if (isAlreadyVisible) {
      return;  // already on screen — leave it alone
    }

    section.classList.add('animate');
    observer.observe(section);
  });
}

document.addEventListener('DOMContentLoaded', setupScrollReveal);
