/**
 * experience.js — Renders experience in two-column editorial timeline.
 * Updated for new layout: left = meta, right = card with border-left.
 */

(function () {
  'use strict';

  const FOCUS_CLASS = {
    QA:         'badge-qa',
    Leadership: 'badge-leadership',
    Embedded:   'badge-embedded',
  };

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderExperience() {
    const timeline = document.getElementById('experience-timeline');
    if (!timeline) return;

    const html = PORTFOLIO_DATA.experience.map(function (job, idx) {
      const badgeClass = FOCUS_CLASS[job.focus] || 'badge-qa';
      const bullets = job.bullets.map(function (b) {
        return `<li>${escHtml(b)}</li>`;
      }).join('');

      return `
        <div class="timeline-item reveal" style="transition-delay:${idx * 100}ms">
          <div class="timeline-meta">
            <span class="timeline-date">${escHtml(job.date)}</span>
            <div class="timeline-company">${escHtml(job.company)}</div>
            <div class="timeline-location">${escHtml(job.location)}</div>
          </div>
          <div class="timeline-card">
            <div class="timeline-title">${escHtml(job.title)}</div>
            <ul class="timeline-bullets">${bullets}</ul>
          </div>
        </div>`;
    }).join('');

    timeline.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', renderExperience);
})();
