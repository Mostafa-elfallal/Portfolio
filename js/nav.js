/**
 * nav.js — Navigation: scroll spy, scroll class, mobile toggle
 */

(function () {
  'use strict';

  const navbar   = document.getElementById('navbar');
  const toggle   = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const links    = document.querySelectorAll('.nav-link[data-section]');

  // ---- Scroll class ----
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
  }, { passive: true });

  // ---- Mobile toggle ----
  toggle.addEventListener('click', function () {
    toggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close on link click
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) {
      toggle.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });

  // ---- Scroll spy ----
  function updateActiveLink() {
    const scrollY = window.scrollY + 100;

    links.forEach(function (link) {
      const sectionId = link.dataset.section;
      const section = document.getElementById(sectionId);
      if (!section) return;

      const top    = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollY >= top && scrollY < bottom) {
        links.forEach(function (l) { l.classList.remove('active'); });
        link.classList.add('active');
      }
    });
  }

  // Initial call
  document.addEventListener('DOMContentLoaded', updateActiveLink);
})();
