# Modern Dev Portfolio Template

![Built with React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green)

A clean, animated developer portfolio template built with React, Vite, Tailwind CSS, and Framer Motion. Fork it, edit one config file, and deploy your own portfolio in minutes.

**[Live Demo →](#)** _(deploy your own to add a link here)_

---

## Features

- **Two-page layout** — single-page home with smooth scroll + dedicated projects page with filtering
- **One config file** — all personal content lives in `src/config/portfolio.config.js`
- **12+ sample projects** with category tabs, tech tag filters, and load-more pagination
- **Shareable filter URLs** — filtered project views use query params (`?category=work&tags=React`)
- **Framer Motion animations** — staggered reveals, page transitions, card tilts, AnimatePresence
- **Dot-grid background** with mouse-following spotlight effect
- **Custom cursor** with spring physics
- **Magnetic card tilt** on hover
- **Fully responsive** — mobile hamburger nav, horizontal scroll filters, stacked timeline
- **Touch-device aware** — all mouse effects automatically disabled on touch screens
- **Google Fonts** — Instrument Serif, Figtree, DM Mono

## Quick Start

```bash
# Clone the template
git clone https://github.com/YOUR_USERNAME/modern-dev-portfolio-template.git
cd modern-dev-portfolio-template

# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

## Personalization

### Content — `src/config/portfolio.config.js`

This is the only file you need to edit. It exports a single object with every piece of content:

| Field | Type | Description |
|---|---|---|
| `name` | `string` | Your full name (hero + navbar) |
| `title` | `string` | Your professional title |
| `tagline` | `string` | Short hero subtitle |
| `heroCtaPrimary` | `string` | Label for the primary CTA button |
| `heroCtaSecondary` | `string` | Label for the secondary CTA button |
| `bio` | `string` | About section paragraph(s). Use `\n` for line breaks |
| `skills` | `string[]` | Tech/skill tags shown in the About section |
| `experience` | `object[]` | Work history entries with `role`, `company`, `dates`, `bullets` |
| `projects` | `object[]` | All projects (see project shape below) |
| `projectsPageSubtitle` | `string` | Subtitle on the /projects page |
| `social` | `object` | Links: `email`, `github`, `linkedin`, `twitter` |

#### Project shape

```js
{
  title: "Project Name",
  description: "Short description shown on the card.",
  longDescription: "Optional longer description for future detail view.",
  featured: true,               // Show on home page + highlight on /projects
  category: "open-source",      // "work" | "personal" | "open-source"
  tags: ["React", "Node.js"],   // Tech stack tags
  year: 2024,                   // Year built
  github: "https://github.com/...",
  demo: "https://...",          // Optional live demo URL
}
```

### Theme — `src/config/theme.config.js`

Adjust the accent color, dot grid density, spotlight effect, and font families.

| Field | Description |
|---|---|
| `accentColor` | Primary accent color (buttons, highlights, active states) |
| `backgroundColor` | Page background color |
| `dotGrid.spacing` | Distance between dots in pixels |
| `dotGrid.opacity` | Dot visibility (0–1) |
| `spotlight.radius` | Cursor spotlight size in pixels |
| `fonts.*` | Font family strings for display, body, and mono |

## Project Structure

```
src/
  config/
    portfolio.config.js   ← All personal content
    theme.config.js       ← Colors, fonts, dot grid settings
  components/
    sections/             ← Hero, About, Experience, ProjectsPreview, Contact
    ui/                   ← Navbar, Card, Tag, Timeline, Footer, FilterBar, ProjectCard, Icons
  hooks/
    useMousePosition.js   ← Cursor tracking hook
    useActiveSection.js   ← Intersection Observer for nav highlighting
  pages/
    Home.jsx              ← Main single-page portfolio
    Projects.jsx          ← Dedicated projects page with filtering
  App.jsx                 ← Routing + layout + cursor effects
  main.jsx                ← Entry point
  index.css               ← Tailwind imports + dot grid + cursor styles
```

## Pages & Routing

| Route | Page | Description |
|---|---|---|
| `/` | Home | Single-page portfolio with smooth-scrolling sections |
| `/projects` | Projects | Full project listing with category tabs, tag filters, and pagination |

## Deployment

This is a fully static site — deploy anywhere that serves static files:

- **Vercel**: `npm run build` → deploy `dist/`
- **Netlify**: Set build command to `npm run build`, publish directory to `dist/`
- **GitHub Pages**: Use a GitHub Action to build and deploy

> For client-side routing to work on refresh, configure your host to redirect all paths to `index.html`.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

[MIT](./LICENSE) — use it however you like.
