/**
 * skills.js — Render skill categories in table-row layout
 */

(function () {
  'use strict';

  // Map category color to hover class
  const COLOR_CLASS = {
    primary: '',       /* default lime hover */
    violet:  'violet',
    amber:   'sky',
    rose:    'coral',
  };

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    const categories = PORTFOLIO_DATA.skills;
    const html = `<div class="skills-categories reveal-stagger">` +
      categories.map(function (cat) {
        const colorClass = COLOR_CLASS[cat.color] || '';
        const tagsHtml = cat.items.map(function (item) {
          return `<span class="skill-tag ${colorClass}">${escHtml(item)}</span>`;
        }).join('');

        return `
          <div class="skill-category">
            <div class="skill-category-label">
              <div>
                <div class="skill-category-title">${escHtml(cat.category)}</div>
                <div class="skill-category-subtitle">${escHtml(cat.subtitle)}</div>
              </div>
            </div>
            <div class="skill-tags-grid">${tagsHtml}</div>
          </div>`;
      }).join('') +
    `</div>`;

    container.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', renderSkills);
})();
