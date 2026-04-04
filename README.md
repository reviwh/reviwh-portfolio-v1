# Revi Wardana Putra's Portfolio Website

![GitHub repo size](https://img.shields.io/github/repo-size/reviwh/reviwh-portfolio-v1)
![GitHub contributors](https://img.shields.io/github/contributors/reviwh/reviwh-portfolio-v1)
![GitHub last commit](https://img.shields.io/github/last-commit/reviwh/reviwh-portfolio-v1)
![GitHub License](https://img.shields.io/github/license/reviwh/reviwh-portfolio-v1)

## About

A modern, fully responsive portfolio website showcasing my work and expertise as a software developer. Built with **SvelteKit** and **Tailwind CSS**, featuring an elegant dark theme with cyan accents, smooth animations, and engaging interactions.

🌐 **Live Website:** [https://portfolio-reviwh.vercel.app](https://portfolio-reviwh.vercel.app)

## ✨ Features

- **Hero Section** - Animated typing effect cycling through professional titles with floating hero image
- **About Section** - Personal background, education at Padang Polytechnic, and professional experience at PT Aplikanusa Lintasarta
- **Skills Showcase** - Comprehensive tech stack organized into 4 categories: Web Development, Mobile Development, Database, and Graphic Design
- **Portfolio Gallery** - 6 featured projects spanning multiple platforms (Kotlin, Flutter, Unity, PHP/Laravel) with interactive hover effects
- **Contact Form** - Functional contact form with Web3Forms integration for direct message delivery
- **Fully Responsive** - Optimized design that looks perfect on mobile, tablet, and desktop devices
- **Smooth Animations** - Scroll-based active navigation, hover transitions, and interactive UI elements
- **Dark Theme with Cyan Accents** - Modern color scheme with custom scrollbar styling and glowing effects
- **SEO Optimized** - JSON-LD schema, OpenGraph tags, and Twitter Card metadata for better discoverability

## 🛠️ Tech Stack

**Frontend Framework:**

- **SvelteKit 2.0** - Server-side rendering and static generation framework
- **Svelte 4.2** - Reactive UI component framework
- **Vite 5.4** - Next-generation build tool for lightning-fast development

**Styling & Design:**

- **Tailwind CSS 3.4** - Utility-first CSS framework
- **PostCSS 8.4** - CSS transformation and optimization
- **Custom CSS Variables** - For cohesive theming and responsive design

**Icons & Assets:**

- **@iconify/svelte 4.2** - Material Design Icons library
- **WebP Images** - Optimized image formats for faster loading

**Development Tools:**

- **TypeScript 5.3** - Static type checking for safer code
- **svelte-check 3.6** - Svelte compiler validation and diagnostics

**Deployment:**

- **@sveltejs/adapter-static 2.0** - Static site generation and deployment
- **Vercel** - Hosting platform for production deployment

## 🚀 Quick Start

### Prerequisites

- Node.js v16 or higher
- npm, yarn, pnpm, or bun package manager

### Installation & Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/reviwh/reviwh-portfolio-v1.git
   cd reviwh-portfolio-v1
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser. The page will auto-reload as you make changes.

4. **Build for production:**

   ```bash
   npm run build
   ```

   This generates a static site in the `build/` directory ready for deployment.

5. **Preview production build (optional):**
   ```bash
   npm run preview
   ```
   Test the production build locally before deploying.

## 📁 Project Structure

```
reviwh-portfolio-v1/
├── src/
│   ├── app.html                 # HTML template
│   ├── app.css                  # Global styles & Tailwind imports
│   ├── main.js                  # Legacy entry point
│   ├── components/
│   │   ├── Header.svelte       # Navigation with mobile menu
│   │   ├── Home.svelte         # Hero section with typing animation
│   │   ├── About.svelte        # About me & background
│   │   ├── Skills.svelte       # Technical skills showcase
│   │   ├── Portfolio.svelte    # Project gallery
│   │   ├── Contact.svelte      # Contact form with Web3Forms
│   │   └── Footer.svelte       # Footer with scroll-to-top
│   └── routes/
│       ├── +layout.svelte      # Root layout wrapper
│       └── +page.svelte        # Home page
├── static/
│   └── images/                 # Image assets (about.webp, hero.webp, etc.)
├── svelte.config.js            # SvelteKit + Static adapter config
├── vite.config.js              # Vite configuration
├── tailwind.config.cjs         # Tailwind CSS theme customization
├── postcss.config.cjs          # PostCSS plugins configuration
├── tsconfig.json               # TypeScript compiler options
├── package.json                # Dependencies and scripts
├── .env                        # Environment variables
└── LICENSE                     # MIT License
```

## 📜 Available Scripts

| Script            | Purpose                                                    |
| ----------------- | ---------------------------------------------------------- |
| `npm run dev`     | Start development server with HMR at http://localhost:5173 |
| `npm run build`   | Build static site for production in `build/` directory     |
| `npm run preview` | Preview production build locally                           |
| `npm run sync`    | Regenerate SvelteKit type definitions                      |
| `npm run check`   | Type-check all TypeScript code                             |

## 🎨 Design System

**Color Palette:**

- **Primary Background:** `#1f242d` (Dark Navy) - Main page background
- **Secondary Background:** `#323946` (Dark Gray) - Card and component backgrounds
- **Accent Color:** `#00eeff` (Cyan) - Links, buttons, highlights, and glowing effects
- **Accent Hover:** `#88f7ff` (Light Cyan) - Interactive element hover states

**Typography:**

- **Body Font:** Inter (all weights) from Google Fonts - Readable and modern
- **Monospace Font:** JetBrains Mono - Used in typing animation and code display

**UI Features:**

- Custom cyan scrollbar with shadow effects
- Smooth scroll behavior across all sections
- Drop shadows with glowing main color effects
- Responsive Tailwind grid system for all layouts
- Extensive hover animations and smooth transitions
- Mobile hamburger menu with smooth animations

## 🌟 Featured Projects

The portfolio showcases 6 featured projects spanning multiple technologies:

1. **RASAKU** - Kotlin Mobile App for traditional dish classification using AI
2. **Animanga** - Kotlin Mobile App for anime database and information
3. **Baron** - Flutter Desktop Application for canteen reservation system
4. **Mind** - Unity Game - 2D platformer game
5. **Animania** - PHP/Laravel Web Application for anime streaming
6. **+8 more projects** - Additional portfolio pieces available on demand

Each project features:

- Live preview with hover overlay effects
- Technology stack information
- Project description and links
- Responsive image galleries

## 📞 Get In Touch

Feel free to reach out through any of these channels:

| Platform      | Contact                                                                         |
| ------------- | ------------------------------------------------------------------------------- |
| **Email**     | reviwh2@gmail.com                                                               |
| **LinkedIn**  | [Revi Wardana Putra](https://www.linkedin.com/in/revi-wardana-putra-5b207a229/) |
| **GitHub**    | [@reviwh](https://github.com/reviwh)                                            |
| **Instagram** | [@reviwh\_](https://www.instagram.com/reviwh_/)                                 |
| **Portfolio** | [portfolio-reviwh.vercel.app](https://portfolio-reviwh.vercel.app)              |

Or use the contact form directly on the website!

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to use, modify, and distribute this code with proper attribution.

**Copyright © 2023 Revi Wardana Putra**
