/**
 * main.js — Application bootstrap and global utilities
 */

(function () {
  'use strict';

  // ---- Section background alternation (ensure correct bg color) ----
  // Already handled by CSS section classes, this is just for potential future use.

  // ---- Smooth scroll for all anchor links ----
  document.addEventListener('click', function (e) {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const targetId = anchor.getAttribute('href').slice(1);
    const target   = document.getElementById(targetId);
    if (!target) return;

    e.preventDefault();
    const offsetTop = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  });

  // ---- Console easter egg ----
  console.log('%c👋 Hey there!', 'color:#63e8db;font-size:24px;font-weight:bold;');
  console.log(
    '%cMostafa ElFallal — Embedded Software Engineer\nFeel free to reach out: mostafaelfallal90@gmail.com',
    'color:#a78bfa;font-size:13px;'
  );

  // ---- Current year in footer (if element exists) ----
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
