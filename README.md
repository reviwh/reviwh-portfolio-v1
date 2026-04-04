# Revi Wardana Putra's Portfolio Website

![GitHub repo size](https://img.shields.io/github/repo-size/reviwh/reviwh-portfolio-v1)
![GitHub contributors](https://img.shields.io/github/contributors/reviwh/reviwh-portfolio-v1)
![GitHub last commit](https://img.shields.io/github/last-commit/reviwh/reviwh-portfolio-v1)
![GitHub License](https://img.shields.io/github/license/reviwh/reviwh-portfolio-v1)

## About

A modern, fully responsive portfolio website showcasing my work and expertise as a software developer. Built with **SvelteKit** and **Tailwind CSS**, featuring an elegant dark theme with cyan accents, smooth animations, and engaging interactions. Utilizes the latest **Svelte 5** with runes for modern reactive programming.

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

- **SvelteKit 2.50.2** - Server-side rendering and static generation framework
- **Svelte 5.54.0** - Reactive UI component framework with runes
- **Vite 7.3.1** - Next-generation build tool for lightning-fast development

**Styling & Design:**

- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Custom CSS Variables** - For cohesive theming and responsive design

**Icons & Assets:**

- **@iconify/svelte 5.2.1** - Material Design Icons library
- **@sveltejs/enhanced-img 0.10.4** - Enhanced image optimization
- **WebP Images** - Optimized image formats for faster loading

**Development Tools:**

- **TypeScript 5.9.3** - Static type checking for safer code
- **svelte-check 4.4.2** - Svelte compiler validation and diagnostics
- **ESLint 10.0.3** - Code linting and formatting

**Deployment:**

- **@sveltejs/adapter-auto 7.0.0** - Automatic adapter selection for deployment
- **Vercel** - Hosting platform for production deployment

## 🚀 Quick Start

### Prerequisites

- **Node.js v25.9.0 or higher** - [Download from nodejs.org](https://nodejs.org/)
- npm, yarn, pnpm, or bun package manager

### Node Version Management

This project uses Node.js v25.9.0. You can use nvm to switch to the correct version:

```bash
# Install Node.js v25.9.0 using nvm
nvm install 25.9.0

# Use the correct version
nvm use 25.9.0

# Optional: set as default for this shell/project
nvm alias default 25.9.0
```

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

3. **Set up Environment Variables**

   This project requires the following environment variables:

   | Variable                  | Description          | Example                   |
   | ------------------------- | -------------------- | ------------------------- |
   | VITE_HOSTNAME             | Hostname             | localhost                 |
   | VITE_WEB3FORMS_ACCESS_KEY | Web3Forms access key | your-web3forms-access-key |

   **Setup:**
   1. Copy `.env.example` to `.env`

      ```bash
      cp .env.example .env
      ```

   2. Fill the real values in `.env`:

      ```env
      VITE_HOSTNAME=localhost
      VITE_WEB3FORMS_ACCESS_KEY=your-real-web3forms-access-key
      ```

      > **Note**: `.env` contains secrets, so do **not** commit it to the repository.

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser. The page will auto-reload as you make changes.

5. **Build for production:**

   ```bash
   npm run build
   ```

   This generates a static site in the `build/` directory ready for deployment.

6. **Preview production build (optional):**
   ```bash
   npm run preview
   ```
   Test the production build locally before deploying.

## 📁 Project Structure

```
reviwh-portfolio-v1/
├── src/
│   ├── components/             # UI Components
│   ├── lib/                    # Utilities, assets, and shared modules
│   ├── routes/                 # SvelteKit pages and layouts
│   ├── app.html                # HTML template
│   ├── app.d.ts                # SvelteKit app type definitions
│   └── global.d.ts             # Global type definitions
├── static/                     # Public static files
├── svelte.config.js            # SvelteKit configuration
├── vite.config.ts              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── tsconfig.json               # TypeScript compiler options
├── package.json                # Dependencies and scripts
├── .env                        # Environment variables
└── LICENSE                     # License
```

## 📜 Available Scripts

| Script                | Purpose                                                    |
| --------------------- | ---------------------------------------------------------- |
| `npm run dev`         | Start development server with HMR at http://localhost:5173 |
| `npm run build`       | Build static site for production in `build/` directory     |
| `npm run preview`     | Preview production build locally                           |
| `npm run prepare`     | Regenerate SvelteKit type definitions                      |
| `npm run check`       | Type-check all TypeScript code                             |
| `npm run check:watch` | Type-check with watch mode                                 |
| `npm run lint`        | Run ESLint for code linting                                |

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

**© 2023 Revi Wardana Putra.**
