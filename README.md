# HyperNovix — React (JSX) Version

A premium, futuristic, animated business website for HyperNovix — built with
**plain React + JavaScript (JSX)**, Vite, Tailwind CSS v4 and lucide-react.

## Run

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Stack
- React 18 (JSX, no TypeScript)
- Vite 5
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- lucide-react icons

## Structure
```
src/
  App.jsx              ← composes all sections
  main.jsx             ← React entry
  styles.css           ← Tailwind v4 theme + custom design tokens
  assets/hero-orb.jpg  ← AI orb hero image
  hooks/use-reveal.js  ← scroll-reveal hook
  components/
    Navbar.jsx  Hero.jsx  About.jsx  Services.jsx  Work.jsx
    WhyUs.jsx   Process.jsx  Testimonials.jsx  TechStack.jsx
    Contact.jsx Footer.jsx  CursorGlow.jsx
```
