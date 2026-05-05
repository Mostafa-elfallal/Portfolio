/**
 * hero.js — Ticker marquee, typed text animation
 */

(function () {
  'use strict';

  // ---- Typed text animation ----
  const el = document.getElementById('typed-text');
  const strings = PORTFOLIO_DATA.typedStrings;
  let stringIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    if (!el) return;
    const current = strings[stringIdx % strings.length];
    const speed = isDeleting ? 55 : 100;

    el.textContent = isDeleting
      ? current.substring(0, charIdx--)
      : current.substring(0, charIdx++);

    if (!isDeleting && charIdx > current.length) {
      isDeleting = true;
      setTimeout(type, 2000);
      return;
    }

    if (isDeleting && charIdx < 0) {
      isDeleting = false;
      charIdx = 0;
      stringIdx++;
    }

    setTimeout(type, speed);
  }

  // ---- Ticker marquee ----
  function buildTicker() {
    const inner = document.getElementById('ticker-inner');
    if (!inner || !PORTFOLIO_DATA.tickerItems) return;

    const items = PORTFOLIO_DATA.tickerItems;

    // Duplicate for seamless loop
    const markup = [...items, ...items, ...items].map(function (item) {
      return `<span class="ticker-item">${item}</span>`;
    }).join('');

    inner.innerHTML = markup;
  }

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', function () {
    buildTicker();
    setTimeout(type, 600);
  });
})();
