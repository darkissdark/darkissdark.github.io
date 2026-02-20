# Viktor Medvid – Frontend Developer Portfolio

A modern, responsive portfolio built with **Nuxt 3**, **Vue 3**, and **Tailwind CSS**. Features animated hero section, project grid, education cards, and accessibility best practices. Deployed on GitHub Pages.

---

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Generate static site (for GitHub Pages)
yarn generate
```

---

## 📁 Project Structure

- `components/hero/` – Hero section, animated intro, code card
- `components/projects/` – Projects grid (with tags, links, images)
- `components/education/` – Education & certifications (card style)
- `components/contacts/` – Social/contact icons (fixed bottom)
- `components/common/AnimatedText.vue` – Animated gradient text with stars
- `icons/` – SVG icons (social, resume, education, etc.)
- `public/images/projects/` – Optimized webp/png images for projects
- `pages/index.vue` – Main page layout
- `scripts/updateLastUpdate.cjs` – Auto-update last commit date
- `.github/workflows/deploy.yml` – GitHub Pages deploy workflow

---

## 🧩 Main Components

- **HeroProfile.vue** – Animated intro, avatar, "Get Resume" button
- **HeroCard.vue** – Code-style info card (with auto-updated last commit date)
- **ProjectsSection.vue** – Responsiv swiper of project cards with tags, links, and images
- **EducationSection.vue** – Modern education/certification cards with icon
- **Contacts.vue** – Social/contact icons (GitHub, Telegram, Email, LinkedIn)
- **AnimatedText.vue** – Gradient text, animated shine, floating stars

---

## 🕒 Auto-updated Last Commit Date

- The file `lastUpdate.js` is automatically updated before every commit and deploy (see `scripts/updateLastUpdate.cjs` and Husky pre-commit hook).
- You can use this date in any component (e.g. HeroCard.vue) to show the last update.

---

## 🌐 Deployment (GitHub Pages)

- Static site is generated with `yarn generate` and deployed via GitHub Actions (`.github/workflows/deploy.yml`).
- All images must be optimized and placed in `public/images/projects/` (webp/png/jpg).
- **@nuxt/image** is used for all images – with `ipxStatic` provider for static generation (GitHub Pages).

---

## 🎨 Styling & Formatting

- **Tailwind CSS** for all layout and utility classes
- **Prettier** config in `.prettierrc` (4 spaces, single quotes, trailing commas)
- Custom utility classes (e.g. `.text-shadow`, `.size18`) in SASS or global CSS

---

## 🤝 Accessibility & Best Practices

- High-contrast buttons and text
- Responsive/adaptive layout
- Semantic HTML and ARIA labels
- Keyboard and screen reader friendly

---

## 📝 License

MIT. Feel free to use, fork, and adapt!
