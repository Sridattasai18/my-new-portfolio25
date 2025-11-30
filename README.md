# Kaligotla Sri Datta Sai Vithal - Portfolio

A modern, responsive portfolio website built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Optimized for performance and deployed on GitHub Pages.

**Live Demo**: [https://Sridattasai18.github.io/my-new-portfolio25](https://vithal-portfolio.vercel.app/)

---

## ✨ Features

- **Responsive Design**: Mobile-first, works seamlessly across all devices
- **Optimized Images**: WebP/JPEG variants with responsive srcset for fast loading
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Dark Theme**: Modern dark UI with accent colors and glassmorphism effects
- **Floating Navigation**: Fixed dock navigation with smooth scrolling
- **Sections**:
  - Hero with profile image and intro
  - About section with call-to-action
  - Experience timeline (Smartbridge Data Science Intern)
  - Skills grid (Languages, Frontend, Backend, Data & AI, Tools, Soft Skills)
  - Projects showcase (AgriVision, CineMate, Superstore Analytics, Portfolio)
  - Contact section with social links
  - Footer

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18+ (https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Sridattasai18/my-new-portfolio25.git
cd my-new-portfolio25

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000` (or `3001` if 3000 is in use).

---

## 📦 Build for Production

```bash
npm run build
```

This generates an optimized `dist/` folder ready for deployment.

To preview the production build locally:
```bash
npm run preview
```

---

## 🖼️ Image Optimization

The portfolio uses responsive image variants to minimize bundle size:

- **WebP format**: Modern browsers (smaller file size)
- **JPEG fallback**: Older browser support
- **Multiple sizes**: 480w, 768w, 1200w for different devices
- **LQIP placeholder**: Low-quality placeholder while images load

**Original image**: 5.2 MB → **Optimized**: ~150 KB max (98% reduction)

To regenerate optimized images (if you update `public/DB.png`):
```bash
node scripts/optimize-images.js
```

---

## 🌐 GitHub Pages Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to the `main` branch.

### Manual Setup (if needed)

1. Go to repository **Settings → Pages**
2. Select **Source**: `Deploy from a branch`
3. Choose **Branch**: `main` / `/ (root)`
4. Click **Save**

Your site will be live at: `https://<username>.github.io/my-new-portfolio25`

### Workflow File
See `.github/workflows/deploy.yml` for the automated deployment configuration.

---

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions workflow
├── components/
│   ├── Hero.tsx                    # Hero section with profile image
│   ├── About.tsx                   # About and personal info
│   ├── Experience.tsx              # Work experience timeline
│   ├── Skills.tsx                  # Skills grid (bento layout)
│   ├── Projects.tsx                # Project showcase
│   ├── Footer.tsx                  # Footer with contact
│   └── Navigation.tsx              # Floating dock navigation
├── public/
│   ├── DB.png                      # Original profile image (5.2 MB)
│   └── images/
│       ├── profile-*.webp          # Optimized WebP variants
│       ├── profile-*.jpg           # JPEG fallback variants
│       └── profile-placeholder.jpg # LQIP placeholder
├── scripts/
│   └── optimize-images.js          # Image optimization script
├── App.tsx                         # Root component
├── index.tsx                       # React entry point
├── constants.tsx                   # Content data (skills, projects, etc.)
├── types.ts                        # TypeScript interfaces
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies and scripts
├── index.html                      # HTML template
├── DEPLOY.md                       # Deployment guide
└── README.md                       # This file
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend Framework** | React 19 |
| **Type Safety** | TypeScript 5.8 |
| **Build Tool** | Vite 6.4 |
| **Styling** | Tailwind CSS (CDN) |
| **Animations** | Framer Motion 12.23 |
| **Icons** | Lucide React 0.555 |
| **Image Optimization** | Sharp |
| **Minification** | Terser |

---

## 📝 Customization

### Update Personal Information
Edit `constants.tsx`:
```typescript
export const PERSONAL_DETAILS = {
  name: "Your Name",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourprofile",
  about: "Your bio..."
};
```

### Add Projects
Edit the `PROJECTS` array in `constants.tsx`:
```typescript
export const PROJECTS: Project[] = [
  {
    id: 'unique-id',
    title: "Project Title",
    year: "2025",
    description: "Project description",
    tech: ["React", "Tailwind"],
    image: "https://unsplash.com/...",
    link: "https://github.com/..."
  },
  // ...
];
```

### Add Skills
Edit the `SKILL_CATEGORIES` array in `constants.tsx`:
```typescript
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Category Name",
    description: "Category description",
    skills: [
      { name: "Skill", iconUrl: "https://icon-url.svg" },
      // ...
    ],
    className: "col-span-1 md:col-span-2"
  },
  // ...
];
```

---

## 🎨 Styling & Theme

The portfolio uses Tailwind CSS with custom theme variables defined in `index.html`:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#455CE9',
          dark: '#0a0a0a',
          card: '#121212',
          gray: '#888888'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['DM Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      }
    }
  }
}
```

To customize colors, update the theme config in `index.html`.

---

## 🔧 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Optimize profile images (responsive variants)
node scripts/optimize-images.js
```

---

## 📊 Performance

**Bundle Size** (production, gzipped):
- HTML: 0.89 KB
- Framer Motion chunk: 38.42 KB
- Lucide React chunk: 1.39 KB
- Main JS: 64.00 KB
- **Total**: ~104 KB

**Image Optimization**:
- Original profile image: 5.2 MB
- Optimized variants: 17-148 KB (98% reduction)
- Lazy loading & responsive srcset

---

## 🚢 Deployment Checklist

- [x] TypeScript strict mode enabled
- [x] Build passes without errors
- [x] Images optimized (WebP + JPEG variants)
- [x] Responsive design tested on mobile/tablet/desktop
- [x] GitHub Actions workflow configured
- [x] .gitignore properly set
- [x] Dependencies pinned in package-lock.json
- [x] No console warnings in production
- [x] Minification enabled (terser)
- [x] Source maps disabled for production

---

## 🐛 Troubleshooting

### Port 3000 already in use
Vite automatically tries port 3001. No action needed.

### Images not loading in production
Ensure `vite.config.ts` has `base: './'` for production builds (already configured).

### Build failing
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
npm run build
```

---

## 📧 Contact

- **Email**: kaligotlasridattasai18@gmail.com
- **LinkedIn**: [Kaligotla Sri Datta Sai Vithal](https://www.linkedin.com/in/kaligotla-sri-datta-sai-vithal-01bb2a321)
- **GitHub**: [Sridattasai18](https://github.com/Sridattasai18)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🎉 Thanks

Built with ❤️ using modern web technologies. Feel free to fork, modify, and make it your own!
