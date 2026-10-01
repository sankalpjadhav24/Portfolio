# Sankalp Jadhav — Engineering Portfolio

A production-grade, high-performance personal portfolio website presenting **Sankalp Jadhav**, an undergraduate Computer Engineering student at Savitribai Phule Pune University (Dhole Patil College of Engineering, Pune).

Designed with an **experienced developer first, visual effects second** philosophy. Completely static, lightweight, zero-dependency, and instantly ready for deployment on **GitHub Pages**.

---

## 🚀 Live Demo & Deployment

This project is built to run natively in any modern web browser without a mandatory build step.

### Quick Local Preview

You can open `index.html` directly in your browser, or serve it using any lightweight local server:

#### Using Python (Built-in)
```bash
# Navigate to the portfolio folder
cd "my portfolio"  # or my_portfolio

# Start a local HTTP server
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

#### Using Node.js / npx
```bash
npx serve .
```

#### Using VS Code Live Server
Right-click on `index.html` and select **"Open with Live Server"**.

---

## 🌐 GitHub Pages Deployment Guide

To deploy this website to GitHub Pages in under 2 minutes:

1. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new).
   - Name your repository (e.g., `portfolio` or `<your-username>.github.io`).
   - Set visibility to **Public**.

2. **Initialize & Push**:
   ```bash
   cd "my_portfolio"
   git init
   git add .
   git commit -m "feat: initial release of production portfolio"
   git branch -M main
   git remote add origin https://github.com/sankalpjadhav24/<REPO-NAME>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch: `main` and folder: `/ (root)`.
   - Click **Save**.
   - Your site will be live within 60 seconds at `https://sankalpjadhav24.github.io/<REPO-NAME>/`.

---

## 🛠️ Architecture & Tech Stack

- **Markup**: Semantic HTML5 (W3C validated, ARIA compliant, zero bloat).
- **Styling**: Modular CSS3 with CSS Custom Properties (Design System Tokens).
  - Pure CSS responsive grid and flexbox layout.
  - Zero Tailwind / CSS-in-JS overhead.
  - Native `prefers-reduced-motion` accessibility support.
  - Dark-dominant technical palette with restrained cyan accents (`#38bdf8`).
- **Scripting**: Vanilla ECMAScript 6+ (Zero external libraries/frameworks).
  - Single source of truth in `assets/js/projects-data.js`.
  - Accessible modal dialog for project architecture deep-dives.
  - Smooth scrollspy navigation and mobile drawer.
  - One-click clipboard copy utility for contact email.
- **Assets**: SVG project visuals plus JPEG profile imagery.

---

## 📂 Project Structure

```text
my_portfolio/
├── .nojekyll                 # Bypasses Jekyll processing on GitHub Pages
├── index.html                # Semantic, SEO-optimized markup entry point
├── README.md                 # Complete documentation and setup guide
└── assets/
    ├── css/
    │   ├── variables.css     # Centralized design tokens (colors, typography, spacing)
    │   ├── components.css    # Reusable UI components (buttons, badges, cards, modal, resume hub)
    │   └── style.css         # Page layouts, hero, timeline, responsive rules
    ├── js/
    │   ├── projects-data.js  # Centralized project architecture data store
    │   └── main.js           # Navigation, scrollspy, filter, modal, toast logic
    ├── images/
    │   ├── favicon.svg       # Developer terminal monogram favicon
    │   ├── prof.sankalp.jpeg # Profile photograph
    │   ├── mindwar-preview.svg    # MindWar Arena architecture diagram
    │   ├── cloudburst-preview.svg # Cloudburst ML pipeline visualization
    │   ├── finxpert-preview.svg   # FinXpert market data & failover cache diagram
    │   └── stockmarket-preview.svg# StockMarket AI PyTorch LSTM diagram
    └── resumes/              # 6 targeted types × 3 formats (PDF, .tex, .txe) = 18 files
        ├── resume_java_developer.[pdf|tex|txe]
        ├── cv_java_developer.[pdf|tex|txe]
        ├── resume_python_developer.[pdf|tex|txe]
        ├── cv_python_developer.[pdf|tex|txe]
        ├── resume_web_developer.[pdf|tex|txe]
        └── cv_web_developer.[pdf|tex|txe]
```

---

## ⚙️ Customization & Updates

### 1. Modifying Projects & Architecture Details
All project cards, technical metrics, problem/solution statements, and architecture breakdowns are managed in:
[`assets/js/projects-data.js`](assets/js/projects-data.js)

To add or update a project, simply edit or append an object to `PROJECTS_DATA`:
```javascript
{
  id: "your-project-id",
  title: "Your Project Title",
  flagship: false,
  category: "ai-ml", // 'systems-games', 'ai-ml', or 'web-db'
  categoryLabel: "Subheading Label",
  status: "Active Architecture",
  badge: "PIPELINE",
  githubUrl: "https://github.com/...",
  visual: "assets/images/your-diagram.svg",
  summary: "Concise summary...",
  problem: "Technical challenge...",
  solution: "Engineered solution...",
  architecture: [ ... ],
  technologies: [ ... ],
  metrics: [ ... ]
}
```

### 2. Updating Profile Photo
Replace [`assets/images/prof.sankalp.jpeg`](assets/images/prof.sankalp.jpeg) with your updated image. The layout will adapt dynamically while preserving aspect ratios.

### 3. Updating Contact Information & Socials
Contact points are defined in [`index.html`](index.html) under the `#contact` section and in [`assets/js/main.js`](assets/js/main.js):
- **Email**: `prof.sankalpjadhav@gmail.com`
- **LinkedIn**: `https://www.linkedin.com/in/sankalp-jadhav-931ba2434/`
- **GitHub**: `https://github.com/sankalpjadhav24`

### 4. Customizing Theme Colors & Tokens
Theme variables are centrally defined in [`assets/css/variables.css`](assets/css/variables.css):
- `--bg-primary`: Deep background `#070a10`
- `--surface-card`: Surface panels `#151d2d`
- `--accent-cyan`: Restrained technical accent `#38bdf8`
- `--accent-emerald`: Status / active indicator `#10b981`

---

## ♿ Accessibility & Standards

- **Semantic Landmark Hierarchy**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Keyboard Trapping & Esc Key**: Fully navigable with `Tab` and `Shift+Tab`. Modal dialog closes gracefully on `Escape`.
- **Contrast Ratios**: Exceeds WCAG 2.1 AA standards for dark interfaces.
- **Prefers Reduced Motion**: Automatically disables smooth scrolling, pulsing rings, and transitions for users with motion sensitivity.

---

## 📄 License & Attribution

Designed and engineered by **Sankalp Jadhav** (2026). Open source under the MIT License.
