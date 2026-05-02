# Mostafa ElFallal - Professional Portfolio

A sleek, highly modular portfolio website designed to showcase a transition from Embedded Systems Engineering to QA Automation Testing. Built with vanilla HTML, CSS, and JavaScript, prioritizing maintainability and a bold "editorial" design aesthetic without relying on heavy frameworks.


## Key Features

- **Single Source of Truth (`data.js`)**: All portfolio content (skills, experience, projects, certifications) is driven by a single JavaScript data object. To update the website, simply modify `data.js`—no need to touch the HTML or CSS.
- **Editorial Design Language**: Moving away from generic "AI-generated" templates, this portfolio features a unique bento-box grid hero section, stark typography, a noise-grain texture overlay, and a muted pastel-on-charcoal color palette (`#0e0e0e` background with `#c8ff00` lime accents).
- **Dynamic Content Generation**:
  - **Skills Table**: Renders tagged skills categorized logically.
  - **Experience Timeline**: A responsive vertical timeline displaying career progression.
  - **Project Grid**: Numbered editorial-style project cards with integrated filtering (Automation, API, Embedded QA) and conditional GitHub link rendering.
- **Micro-Interactions**: Features a scrolling marquee ticker, typed text animations, and scroll-reveal triggers using the `IntersectionObserver` API.
- **Fully Responsive**: Adapts seamlessly to mobile, tablet, and desktop viewing environments.

## Repository Structure

```text
├── index.html              # Main HTML entry point
├── css/
│   ├── animations.css      # Keyframes and scroll-reveal utilities
│   ├── base.css            # Reset, typography, and core utilities
│   ├── cards.css           # Project and certification card styling
│   ├── contact.css         # Contact form and footer styling
│   ├── hero.css            # Bento grid hero layout
│   ├── nav.css             # Sticky navigation bar
│   ├── sections.css        # About section layout
│   ├── skills.css          # Tag clouds and category layout
│   ├── timeline.css        # Experience timeline styling
│   └── variables.css       # Global design tokens (colors, fonts, spacing)
└── js/
    ├── animations.js       # IntersectionObserver setup
    ├── certifications.js   # Certifications rendering logic
    ├── contact.js          # Contact form validation logic
    ├── data.js             # CENTRAL CONTENT STORE - Edit this to update site content
    ├── experience.js       # Timeline rendering logic
    ├── hero.js             # Marquee ticker and typed text logic
    ├── main.js             # Global utilities
    ├── nav.js              # Scroll spy and mobile menu logic
    ├── projects.js         # Project card generation and filtering
    └── skills.js           # Skills category generation
```

## How to Update Content

You never need to edit the HTML to add a new job, project, or skill. 

1. Open `js/data.js`.
2. Locate the relevant array (e.g., `experience`, `projects`, `skills`, `certifications`).
3. Add a new object to the array following the existing schema.
4. Save the file. The JavaScript rendering engine will automatically build the HTML on page load.

**Example: Adding a Project**
```javascript
{
  id: 'new-project',
  title: 'My Awesome Framework',
  description: 'A brief description of what this project does.',
  highlights: [
    'Bullet point 1',
    'Bullet point 2'
  ],
  tags: ['Java', 'Selenium', 'TestNG'],
  tagColor: 'primary',    // 'primary'(lime), 'violet', 'sky', or 'coral'
  category: 'automation', // Matches IDs in projectCategories array
  featured: true,
  github: 'https://github.com/Mostafa-elfallal/repo', // Leave empty string for private projects
  date: '2026',
}
```

## Design Customization

The entire visual language is controlled by CSS variables located in `css/variables.css`.

- **To change the primary accent color**: Update `--color-lime: #c8ff00;`
- **To change the background**: Update `--color-bg: #0e0e0e;`
- **Typography**: Currently uses Google Fonts `Inter` (sans-serif) and `JetBrains Mono` (monospace).

## Deployment

This site consists of entirely static assets. It can be hosted for free on any static hosting provider, such as:
- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

Simply deploy the root directory containing `index.html`.

## License
This project is open-source and available under the [MIT License](LICENSE).
