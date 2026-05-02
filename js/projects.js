/**
 * projects.js — Renders numbered project list with expand/collapse toggle.
 * Updated for the editorial list layout.
 */

(function () {
  'use strict';

  let activeFilter = 'all';

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Map tagColor name to CSS tag class
  const TAG_COLOR_MAP = {
    primary: 'lime',
    violet:  'violet',
    amber:   'sky',
    rose:    'coral',
  };

  function buildFilters() {
    const filterEl = document.getElementById('projects-filter');
    if (!filterEl) return;

    const html = PORTFOLIO_DATA.projectCategories.map(function (cat) {
      const active = cat.id === 'all' ? 'active' : '';
      return `<button class="filter-btn ${active}" data-filter="${escHtml(cat.id)}" id="filter-${escHtml(cat.id)}">${escHtml(cat.label)}</button>`;
    }).join('');

    filterEl.innerHTML = html;

    filterEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      activeFilter = btn.dataset.filter;
      filterEl.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderCards();
    });
  }

  function buildCard(project, displayIndex) {
    const tagClass = TAG_COLOR_MAP[project.tagColor] || 'lime';
    const tagsHtml = project.tags.map(function (t) {
      return `<span class="tag tag-${tagClass}">${escHtml(t)}</span>`;
    }).join('');

    const highlightsHtml = project.highlights.map(function (h) {
      return `<li>${escHtml(h)}</li>`;
    }).join('');

    const featured = project.featured
      ? `<span class="project-featured-badge">★ Featured</span>` : '';

    const githubBtn = project.github
      ? `<a href="${escHtml(project.github)}" target="_blank" rel="noopener"
            class="project-link-btn" title="GitHub" id="github-${escHtml(project.id)}">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        </a>` : '';

    const numStr = String(displayIndex + 1).padStart(2, '0');

    return `
      <div class="project-card" id="project-${escHtml(project.id)}" data-id="${escHtml(project.id)}">
        <div class="project-number">${numStr}</div>
        <div class="project-body">
          <div class="project-header">
            <h3 class="project-title">${escHtml(project.title)}</h3>
            ${featured}
          </div>
          <p class="project-desc">${escHtml(project.description)}</p>
          <ul class="project-highlights">${highlightsHtml}</ul>
          <div class="project-tags">${tagsHtml}</div>
        </div>
        <div class="project-links">
          ${githubBtn}
          <button class="project-toggle" title="Toggle details" aria-expanded="false">+</button>
        </div>
      </div>`;
  }

  function renderCards() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const filtered = PORTFOLIO_DATA.projects.filter(function (p) {
      return activeFilter === 'all' || p.category === activeFilter;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '<p style="color:var(--color-text-muted);padding:3rem 0;font-size:0.9rem">No projects in this category yet.</p>';
      return;
    }

    grid.innerHTML = filtered.map(buildCard).join('');

    // Attach expand toggle listeners
    grid.querySelectorAll('.project-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const card = btn.closest('.project-card');
        const expanded = card.classList.toggle('expanded');
        btn.textContent = expanded ? '−' : '+';
        btn.setAttribute('aria-expanded', expanded);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    buildFilters();
    renderCards();
  });
})();
