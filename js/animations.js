/**
 * animations.js — Intersection Observer scroll-reveal for sections and timeline
 */

(function () {
  'use strict';

  // Elements to reveal on scroll
  const SELECTORS = [
    '.reveal',
    '.reveal-left',
    '.reveal-right',
    '.reveal-stagger',
    '.timeline-item',
    '.project-card',
    '.cert-card',
    '.skill-category',
    '.highlight-item',
    '.contact-item',
  ];

  function observeElements() {
    if (!window.IntersectionObserver) {
      // Fallback: make everything visible immediately
      document.querySelectorAll(SELECTORS.join(',')).forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once revealed, no need to re-observe
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Observe with a tiny delay to ensure DOM is fully rendered
    setTimeout(function () {
      document.querySelectorAll(SELECTORS.join(',')).forEach(function (el) {
        observer.observe(el);
      });
    }, 100);
  }

  // Re-observe after dynamic content renders
  document.addEventListener('DOMContentLoaded', function () {
    // Wait for all renderers to finish
    setTimeout(observeElements, 200);
  });
})();
