/**
 * certifications.js — Render certifications grid from data.js
 */

(function () {
  'use strict';

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function buildCard(cert, idx) {
    const statusLabel = cert.status === 'completed' ? '✓ Completed' : '⟳ In Progress';
    return `
      <div class="cert-card" id="cert-${idx}" style="animation-delay:${idx * 60}ms">
        <div class="cert-body">
          <div class="cert-title">${escHtml(cert.title)}</div>
          <div class="cert-org">${escHtml(cert.org)}</div>
          <div class="cert-date">${escHtml(cert.date)}</div>
          <div class="cert-desc">${escHtml(cert.description)}</div>
          <span class="cert-status ${cert.status}">${statusLabel}</span>
        </div>
      </div>`;
  }

  function renderCertifications() {
    const grid = document.getElementById('cert-grid');
    if (!grid) return;
    grid.innerHTML = PORTFOLIO_DATA.certifications.map(buildCard).join('');
  }

  document.addEventListener('DOMContentLoaded', renderCertifications);
})();
