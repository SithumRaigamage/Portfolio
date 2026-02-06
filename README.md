# Portfolio - React + Tailwind CSS + shadcn/ui

Modern portfolio website built with React, Tailwind CSS, and shadcn/ui components.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio-react/
├── public/
│   └── images/
│       ├── profile/           # Profile photos
│       ├── projects/          # Project screenshots
│       └── logos/             # Institution/company logos
├── src/
│   ├── components/
│   │   ├── sections/          # Page sections (Navbar, Hero, etc.)
│   │   └── ui/                # shadcn/ui components
│   ├── data/                  # Data files (projects, tech stack, etc.)
│   ├── lib/                   # Utilities
│   ├── types/                 # TypeScript type definitions
│   ├── App.tsx                # Main App component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles + Tailwind
├── components.json            # shadcn/ui config
├── tailwind.config.js         # Tailwind config
└── vite.config.ts             # Vite config
```

## 🎨 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## 📦 Components

### Sections
| Component | Description |
|-----------|-------------|
| `Navbar` | Fixed navigation with smooth scroll |
| `Hero` | Introduction section with profile image |
| `About` | Tabbed section (Personal, Education, Experience, Certs, Stats) |
| `Services` | Service cards with icons |
| `Projects` | Filterable project gallery with pagination |
| `TechStack` | Tabbed tech stack display |
| `Contact` | Contact form with mailto |
| `Footer` | Social links and copyright |

### UI Components (shadcn/ui)
- Button, Card, Tabs, Badge, Avatar
- Input, Textarea, Form, Label
- Sheet (mobile nav), Tooltip, Skeleton
- Navigation Menu, Pagination, Scroll Area

## 📝 Data Files

All portfolio data is stored in `src/data/`:

- `personal.ts` - Personal info, education, experience, services, stats
- `projects.ts` - Project portfolio with tech stacks
- `tech-stack.ts` - Technology categories
- `certificates.ts` - Certifications and courses

## 🎯 Features

- ✅ Responsive design (mobile-first)
- ✅ Dark mode by default
- ✅ Smooth scroll navigation
- ✅ Filterable projects by category
- ✅ Paginated projects and certificates
- ✅ Tabbed About section
- ✅ Tabbed Tech Stack section
- ✅ Contact form with mailto

## 🔧 Customization

### Update Personal Info
Edit `src/data/personal.ts`:
```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  jobTitle: 'Your Title',
  // ...
};
```

### Add Projects
Edit `src/data/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'New Project',
    description: 'Project description',
    category: 'web_development',
    imageUrl: '/images/projects/your-image.jpg',
    projectLink: 'https://example.com',
    techStack: [
      { name: 'React', icon: 'https://...' }
    ],
  },
];
```

### Add shadcn/ui Components
```bash
npx shadcn@latest add [component-name]
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` folder.

### Deploy to GitHub Pages
```bash
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

npm run build
npm run deploy
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
Drag and drop the `dist/` folder to Netlify, or connect your GitHub repo.

## 📄 License

MIT License - feel free to use for your own portfolio!

---

*Migrated from HTML/CSS/JS to React + Tailwind + shadcn/ui*
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
