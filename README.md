# 🎮 Portafolio 2.0 — Pixel Art Developer Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3.8-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![i18n](https://img.shields.io/badge/i18n-EN%20%7C%20ES-FFD700?style=for-the-badge)

A modern developer portfolio built with **Next.js 15**, featuring a pixel art aesthetic, responsive bento-grid layout, and a custom internationalization system (English/Spanish) powered by JSON-based translations.

[Live Demo](#) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## 📸 Features

- **Pixel Art Design** — Custom retro aesthetic with pixel borders, Pixelify Sans font, and glowing effects
- **Bento Grid Layout** — Responsive card-based grid system using CSS Grid & Tailwind
- **Internationalization (i18n)** — Full English/Spanish support with a single click, no page reload
- **Dynamic CV Link** — PDF switches between EN/ES version based on selected language
- **Multi-page Architecture** — Home, Portfolio, Education, and Projects pages with shared navigation
- **Mobile-First** — Fully responsive with hamburger navigation on mobile
- **Optimized Images** — AVIF format for fast loading
- **Turbopack** — Lightning-fast development builds

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS 4 |
| Icons | React Icons |
| Fonts | Pixelify Sans, Geist, Geist Mono |
| Bundler | Turbopack (dev) |
| Linting | ESLint 9 |

---

## 📁 Project Structure

```
src/
├── app/                              # Next.js App Router pages
│   ├── page.jsx                      # Home page (/)
│   ├── layout.js                     # Root layout (fonts, providers)
│   ├── globals.css                   # Global styles & pixel borders
│   ├── education/
│   │   ├── page.jsx                  # Education listing (/education)
│   │   └── [id]/page.jsx            # Dynamic education detail (/education/[id])
│   ├── portfolio/
│   │   └── page.jsx                  # Portfolio page (/portfolio)
│   └── projects-in-services/
│       └── page.jsx                  # Projects & Services (/projects-in-services)
│
├── components/                       # Reusable UI components
│   ├── home/
│   │   ├── home.jsx                  # Home layout wrapper
│   │   ├── frist-colum/              # Profile card + Education link
│   │   ├── second-colum/            # Discord, Portfolio, Projects cards
│   │   └── third-colum/             # Social links (Gmail, Instagram, GitHub, LinkedIn)
│   ├── education/
│   │   ├── education.jsx            # Education page wrapper
│   │   ├── description-education/   # Education cards grid
│   │   └── info-education/          # Education detail template + static data
│   ├── portfolio/
│   │   ├── portfolio.jsx            # Portfolio page wrapper
│   │   ├── description/             # Profile, bio, work info, social links
│   │   └── skills/                  # Skills grid sections
│   ├── project-in-services/
│   │   ├── project-in-services.jsx  # Page wrapper
│   │   ├── services/                # Services showcase (2 sections)
│   │   ├── project/                 # Personal projects grid
│   │   └── jobs/                    # Professional work grid
│   ├── page-navigation/             # Shared navigation (desktop back + mobile menu)
│   └── language-switcher/           # i18n toggle button (floating bottom-right)
│
├── context/
│   └── LanguageContext.jsx           # React Context for language state management
│
└── locales/                          # 🌐 Internationalization JSON files
    ├── common/                       # Shared translations (navigation labels)
    │   ├── en.json
    │   └── es.json
    ├── home/                         # Home page texts
    │   ├── en.json
    │   └── es.json
    ├── education/                    # Education page texts
    │   ├── en.json
    │   └── es.json
    ├── portfolio/                    # Portfolio + Skills page texts
    │   ├── en.json
    │   └── es.json
    └── projects-in-services/         # Services, Projects & Jobs texts
        ├── en.json
        └── es.json

public/
├── documents/                        # PDF files (CV in EN & ES)
│   ├── Javier-Bernal-Acosta-EN.pdf
│   ├── Javier-Bernal-Acosta-ES.pdf
│   └── education/                    # Education certificates (Platzi, Idat)
└── img/                              # Images (AVIF format)
    ├── profile-pixel.avif
    ├── discord-pixel.avif
    ├── icons/                        # Social & skill icons
    ├── education/                    # Certificate previews
    └── project-in-services/          # Project screenshots
```

---

## 🌐 Internationalization (i18n) System

The project uses a custom-built i18n system without external dependencies. Translations are stored in JSON files organized by page section.

### How it works

```
┌─────────────────────────────────────────────────────┐
│                  LanguageContext                      │
│                                                      │
│  ┌─────────┐    ┌──────────┐    ┌──────────────┐   │
│  │ common/ │    │  home/   │    │  portfolio/  │   │
│  │ en/es   │ +  │  en/es   │ +  │    en/es     │   │
│  └─────────┘    └──────────┘    └──────────────┘   │
│        +                                             │
│  ┌──────────────┐    ┌─────────────────────────┐   │
│  │  education/  │ +  │  projects-in-services/  │   │
│  │    en/es     │    │         en/es            │   │
│  └──────────────┘    └─────────────────────────┘   │
│                                                      │
│              ══════════════════                       │
│              Combined into → t                       │
└─────────────────────────────────────────────────────┘
```

1. **JSON Files** — Each page has its own `en.json` and `es.json` inside `src/locales/`
2. **LanguageContext** — Imports all JSONs, merges them via spread operator, and exposes `t` (translations object)
3. **Components** — Use `const { t } = useLanguage()` to access translated text
4. **Persistence** — Language preference is saved in `localStorage`
5. **HTML lang** — `<html lang="">` updates dynamically

### Usage in components

```jsx
"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function MyComponent() {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <div>
      <h1>{t.home.greeting}</h1>        {/* "Hello!" or "¡Hola!" */}
      <p>{t.home.description}</p>
      <a href={t.portfolio.cvLink}>CV</a> {/* Dynamic PDF link */}
    </div>
  );
}
```

### Adding a new language

1. Create a new JSON file in each `src/locales/[section]/` folder (e.g., `pt.json`)
2. Add the import and spread it in `LanguageContext.jsx`
3. Update `toggleLanguage` logic to cycle through languages

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Wilz0n/Portafolio.git
cd Portafolio

# Install dependencies
npm install

# Run development server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📄 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Main bento-grid layout with profile, social links, and navigation cards |
| `/portfolio` | Portfolio | Detailed bio, skills grid, work info, and social links |
| `/education` | Education | Education institutions listing with certificate links |
| `/education/[id]` | Education Detail | Dynamic page showing institution details and certificates |
| `/projects-in-services` | Projects & Services | Services offered, personal projects, and professional work |

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0a0a0a` | Page background |
| Card background | `#252525` | All card containers |
| Border gold | `#8b7355` | Card borders, input borders |
| Accent gold | `#d4a574` | Hover states, highlights, section titles |
| Text primary | `#E2E2E2` | Main body text |
| Text muted | `#a8a8a8` | Secondary descriptions |

### Typography

- **Pixelify Sans** — Primary font (headings and body), pixel art aesthetic
- **Geist Sans** — Secondary sans-serif
- **Geist Mono** — Monospace accents

### Pixel Border Effect

Custom CSS creates a glowing pixel-art border around cards:

```css
.pixel-border::before {
  background-image:
    repeating-linear-gradient(0deg, #FF003C, #FF003C 2px, #000 2px, #000 4px),
    repeating-linear-gradient(90deg, #FF003C, #FF003C 2px, #000 2px, #000 4px);
  border: 4px solid #FF003C;
  box-shadow: 0 0 8px #FF003C;
}
```

---

## 🔧 Customization Guide

### Replacing content

1. **Personal info** — Edit JSON files in `src/locales/` (name, descriptions, links)
2. **Images** — Replace files in `public/img/` (keep AVIF format for performance)
3. **CV/PDF** — Replace files in `public/documents/`
4. **Social links** — Update `href` values in the column components and JSON files
5. **Projects/Jobs** — Edit the `items` arrays in `src/locales/projects-in-services/`

### Adding a new project card

Add a new entry to the `projects.items` array in both `en.json` and `es.json`:

```json
{
  "title": "My New Project",
  "description": "Description of the project."
}
```

Then add the corresponding image path and links in the component (`project.jsx`).

### Adding a new education entry

1. Add the card data in `src/locales/education/en.json` and `es.json` (under `cards` and `data`)
2. Add certificate static data in `src/components/education/info-education/education-data.jsx`
3. Place certificate images in `public/img/education/` and PDFs in `public/documents/education/`

---

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository directly on [vercel.com](https://vercel.com).

### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm ci --production
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available for learning purposes. Feel free to use it as a template for your own portfolio.

---

<div align="center">

Made with ☕ by [Wilson](https://github.com/Wilz0n)

</div>
