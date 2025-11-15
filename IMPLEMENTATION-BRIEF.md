# Master Implementation Brief
## Sidekick Air Landing Page Prototypes - React + Tailwind

**Project Type:** Interactive Prototype Development
**Tech Stack:** React + Tailwind CSS
**Purpose:** Client Presentation (4 Design Variations)
**Implementation Approach:** Cloud Agent Delegation to 4 Design Skill Subagents
**Date:** November 14, 2025

---

## Executive Summary

This document provides technical implementation guidance for building 4 interactive React + Tailwind CSS prototypes of the Sidekick Air landing page. Each prototype represents a distinct design variation targeting different market segments:

- **Design 1 (TherapyFlow):** Warm healthcare professional aesthetic
- **Design 2 (Xpedition):** Modern tech/SaaS minimal aesthetic
- **Design 3 (Healers):** Premium wellness earth-tone aesthetic
- **Design 4 (Hollow):** Bold minimalist brutalist aesthetic

All prototypes are for **client presentation purposes** - prioritizing visual fidelity and key interactions over production-ready functionality.

---

## Technology Stack

### Core Technologies

```json
{
  "framework": "React 18+",
  "styling": "Tailwind CSS 3+",
  "buildTool": "Vite",
  "language": "JavaScript (ES6+)",
  "packageManager": "npm"
}
```

### Recommended Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.3.2",
    "vite": "^4.3.9"
  }
}
```

### Optional Enhancements

```json
{
  "framer-motion": "^10.12.16",    // For animations
  "react-icons": "^4.10.1",        // Icon library
  "clsx": "^1.2.1",                // Conditional classes
  "tailwind-merge": "^1.13.2"      // Class merging utility
}
```

---

## Project Structure Template

Each of the 4 prototypes should follow this structure:

```
sidekick-[design-name]/
├── public/
│   ├── images/              # Product photos, lifestyle images
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── icons/           # SVG icons
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navigation.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Origin.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── ProductShowcase.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── SidekickCareApp.jsx
│   │   │   └── CTASection.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Input.jsx
│   │       └── Container.jsx
│   ├── styles/
│   │   └── index.css         # Tailwind directives + custom CSS
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js        # Design-specific theme configuration
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## Shared Tailwind Base Configuration

### Common Configuration Structure

All 4 designs will extend this base Tailwind configuration:

```javascript
// tailwind.config.js (BASE - to be extended per design)
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Design-specific colors go here
      colors: {},

      // Design-specific fonts go here
      fontFamily: {},

      // Common spacing scale (8pt grid)
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '8': '64px',
        '10': '80px',
        '12': '96px',
        '16': '128px',
        '20': '160px',
      },

      // Common breakpoints
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      // Common animations
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
```

---

## Common React Components

### Shared Component Patterns

All 4 designs should implement these core components (styled differently):

#### 1. **Button Component**

```jsx
// src/components/ui/Button.jsx
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = ''
}) {
  // Variant and size classes defined per design in Tailwind config
  const baseClasses = 'font-semibold transition-all duration-200';
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

#### 2. **Container Component**

```jsx
// src/components/ui/Container.jsx
export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
```

#### 3. **Section Wrapper**

```jsx
// src/components/ui/Section.jsx
export default function Section({
  children,
  className = '',
  bgColor = 'bg-white',
  padding = 'py-16 md:py-20 lg:py-24'
}) {
  return (
    <section className={`${bgColor} ${padding} ${className}`}>
      {children}
    </section>
  );
}
```

---

## Prototype Scope Definition

### What to Include (Client Presentation)

✅ **Visual Design:**
- Complete visual implementation matching design systems
- Accurate colors, typography, spacing
- Responsive layouts (mobile, tablet, desktop)
- Design-specific component styling

✅ **Key Interactions:**
- Button hover states
- Navigation menu (mobile hamburger + desktop)
- Smooth scroll to sections
- Basic form field interactions (focus states)
- Hover effects on cards/features

✅ **Content:**
- Real copy from brand brief (not lorem ipsum)
- Placeholder images with proper aspect ratios
- All section content populated

✅ **Animations:**
- Subtle scroll-triggered fade-ins (where design specifies)
- Hover transitions
- Navigation open/close animations

### What to Exclude (Out of Scope)

❌ **Backend Functionality:**
- Form submissions (mock with console.log)
- Email capture (visual only)
- Database integration
- API calls

❌ **Advanced Features:**
- Multi-page routing (single page prototypes)
- Authentication/user accounts
- Shopping cart functionality
- Payment processing

❌ **Production Concerns:**
- SEO optimization (basic meta tags only)
- Analytics integration
- Error boundaries
- Performance optimization beyond basics
- Accessibility beyond WCAG AA basics

### Prototype Fidelity Target

**Visual Fidelity:** 95%+ match to design specifications
**Functional Fidelity:** 30-40% (presentation interactions only)
**Code Quality:** Clean, readable, demonstrative (not production-hardened)

---

## Development Standards

### React Component Guidelines

**Functional Components Only:**
```jsx
// ✅ Good
export default function Hero() {
  return <div>...</div>;
}

// ❌ Avoid
export default class Hero extends React.Component {
  render() {
    return <div>...</div>;
  }
}
```

**Component Organization:**
- One component per file
- Named exports for utility functions, default for components
- Props destructuring in function parameters
- Minimal state management (useState for UI state only)

**Naming Conventions:**
- Components: PascalCase (`Button.jsx`, `HeroSection.jsx`)
- Files: Match component name
- CSS classes: Tailwind utilities (kebab-case for custom classes)

### Tailwind Best Practices

**Use Design Tokens:**
```jsx
// ✅ Good - uses design tokens
<button className="bg-primary text-white px-6 py-3">

// ❌ Avoid - hardcoded colors
<button className="bg-blue-500 text-white px-6 py-3">
```

**Responsive Design:**
```jsx
// Mobile-first approach
<div className="text-2xl md:text-4xl lg:text-6xl">
```

**Conditional Classes:**
```jsx
// Use clsx or template literals
import clsx from 'clsx';

<button className={clsx(
  'base-classes',
  isActive && 'active-classes',
  isDisabled && 'disabled-classes'
)}>
```

### Code Quality

**Keep Components Small:**
- Max 150 lines per component
- Extract complex logic to helper functions
- Break down large sections into sub-components

**Readable Over Clever:**
```jsx
// ✅ Good - clear and readable
const isFormValid = email.length > 0 && email.includes('@');

// ❌ Avoid - overly clever
const isFormValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
```

**Comments for Clarity:**
```jsx
// Use comments to explain WHY, not WHAT
// Offset section to align with hero image edge
<div className="-mt-24 md:-mt-32">
```

---

## Asset Strategy

### Images

**Product Photography:**
- Format: WebP with PNG/JPG fallback
- Optimization: Compress before adding to project
- Naming: `sidekick-air-[context].webp` (e.g., `sidekick-air-hero.webp`)
- Location: `/public/images/`

**Placeholder Images:**
For client presentation, use high-quality placeholders:
- [Unsplash](https://unsplash.com/) - therapy, wellness, sports themes
- Aspect ratios from design specs
- Temporary watermark acceptable

**Image Component Pattern:**
```jsx
<img
  src="/images/sidekick-air-hero.webp"
  alt="Sidekick Air portable therapy table"
  className="w-full h-auto object-cover rounded-lg"
  loading="lazy"
/>
```

### Icons

**Icon Strategy:**
- Use `react-icons` library for common icons
- Custom SVGs for unique icons in `/src/assets/icons/`
- Inline SVG for icons with theme colors

```jsx
// Using react-icons
import { FiCheck, FiX } from 'react-icons/fi';

// Custom SVG component
export function CustomIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="..." fill="currentColor" />
    </svg>
  );
}
```

### Fonts

**Font Loading:**
```html
<!-- In index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
```

**Tailwind Configuration:**
```javascript
// tailwind.config.js
fontFamily: {
  'display': ['DM Sans', 'sans-serif'],
  'body': ['Inter', 'sans-serif'],
  'accent': ['Fraunces', 'serif'], // Design 3 only
}
```

---

## Responsive Design Approach

### Mobile-First Philosophy

**Build for mobile, enhance for desktop:**

```jsx
// Start with mobile layout
<div className="flex flex-col">
  {/* Mobile: stacked */}
</div>

// Add breakpoints for larger screens
<div className="flex flex-col md:flex-row">
  {/* Mobile: stacked, Desktop: side-by-side */}
</div>
```

### Breakpoint Strategy

| Breakpoint | Width | Target Devices | Design Priority |
|------------|-------|----------------|-----------------|
| `sm` | 640px | Large phones | Mobile refinements |
| `md` | 768px | Tablets | Layout shifts |
| `lg` | 1024px | Small laptops | Desktop layout |
| `xl` | 1280px | Desktops | Optimal experience |
| `2xl` | 1536px | Large screens | Max width constraints |

### Common Responsive Patterns

**Typography Scaling:**
```jsx
<h1 className="text-4xl md:text-5xl lg:text-6xl">
```

**Spacing Adjustments:**
```jsx
<section className="py-12 md:py-16 lg:py-20">
```

**Grid Transformations:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

**Image Aspect Ratios:**
```jsx
<div className="aspect-square md:aspect-video">
```

---

## Quality Gates

### Prototype Completion Checklist

Each prototype is considered "done" when it meets these criteria:

#### ✅ Visual Fidelity
- [ ] Matches design system colors exactly (using Tailwind theme)
- [ ] Typography scale implemented correctly
- [ ] Spacing follows 8pt grid system
- [ ] Component styles match specifications
- [ ] Responsive layouts work across breakpoints

#### ✅ Content
- [ ] All sections from design plan implemented
- [ ] Real copy from brand brief (not lorem ipsum)
- [ ] Images have proper aspect ratios
- [ ] Icons present where specified

#### ✅ Interactivity
- [ ] Navigation works (desktop + mobile)
- [ ] All buttons have hover states
- [ ] Forms show focus states
- [ ] Smooth scroll to sections works
- [ ] Mobile menu opens/closes

#### ✅ Code Quality
- [ ] No console errors
- [ ] Components are modular and reusable
- [ ] Tailwind classes use design tokens
- [ ] Code is formatted and readable
- [ ] Basic accessibility (semantic HTML, alt text)

#### ✅ Performance
- [ ] Page loads in < 3 seconds
- [ ] Images are optimized
- [ ] No layout shift on load
- [ ] Smooth animations (60fps)

### Testing Requirements

**Browser Testing:**
- Chrome (latest)
- Safari (latest)
- Firefox (latest)

**Device Testing:**
- Mobile (375px - iPhone SE)
- Tablet (768px - iPad)
- Desktop (1280px - laptop)
- Large Desktop (1920px)

**Accessibility Basics:**
- Semantic HTML5 elements
- Alt text on all images
- Keyboard navigation for interactive elements
- Color contrast meets WCAG AA (verify with design tokens)

---

## Common Challenges & Solutions

### Challenge 1: Tailwind Theme vs. Design Tokens

**Problem:** Design systems use CSS custom properties, Tailwind uses JavaScript config.

**Solution:**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#387CFF',
          'dark': '#2E6AE6',
          'light': '#5A94FF',
          50: '#F0F6FF',
          // ... full palette
        }
      }
    }
  }
}
```

### Challenge 2: Custom Animations Per Design

**Problem:** Each design has different animation philosophies.

**Solution:** Configure in design-specific Tailwind config:
```javascript
// Design 1: Gentle animations
animation: {
  'fade-in': 'fadeIn 0.6s ease-out',
}

// Design 4: No animations (static)
animation: {} // Empty - no animations
```

### Challenge 3: Typography Scale Complexity

**Problem:** Design systems have detailed type scales with line-height and letter-spacing.

**Solution:** Create custom Tailwind utilities:
```css
/* src/styles/index.css */
@layer utilities {
  .text-hero {
    @apply text-6xl font-bold leading-tight tracking-tight;
  }
  .text-body {
    @apply text-base leading-relaxed;
  }
}
```

### Challenge 4: Maintaining 4 Separate Prototypes

**Problem:** Risk of inconsistent approaches across prototypes.

**Solution:**
1. Create first prototype as reference
2. Extract common patterns to shared documentation
3. Review all 4 for consistency before final delivery
4. Use same component structure across all designs

---

## Build & Development Scripts

### Standard Scripts (All Prototypes)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Development Workflow

1. **Start Development Server:**
   ```bash
   npm run dev
   # Opens at http://localhost:5173
   ```

2. **Build for Production:**
   ```bash
   npm run build
   # Creates optimized build in /dist
   ```

3. **Preview Production Build:**
   ```bash
   npm run preview
   # Preview production build locally
   ```

---

## Deliverables

### Per Prototype

Each of the 4 prototypes should deliver:

1. **Functional React App:**
   - Runs with `npm run dev`
   - No console errors
   - All sections implemented

2. **README.md:**
   - Design variation name and philosophy
   - Setup instructions
   - Design highlights
   - Screenshot or GIF preview

3. **Deployment-Ready Build:**
   - `npm run build` succeeds
   - Optimized static files in `/dist`
   - Ready for Netlify/Vercel deployment

### Final Comparison

After all 4 prototypes are complete:

1. **Side-by-Side Comparison Document:**
   - Screenshots of each design
   - Target audience summary
   - Key differentiators
   - Recommendation framework

2. **Demo Links:**
   - All 4 prototypes deployed
   - Links organized for client review

---

## Timeline Expectations

### Per Prototype

**Estimated Time:** 4-6 hours per design (for experienced developer)

**Breakdown:**
- Setup & Configuration: 30 min
- Component Development: 2-3 hours
- Styling & Refinement: 1-2 hours
- Testing & Fixes: 1 hour
- Documentation: 30 min

**Total for 4 Prototypes:** 16-24 hours

### Delegation Approach

With cloud agent delegating to 4 subagents in parallel:
- **Concurrent Development:** All 4 prototypes built simultaneously
- **Wall Clock Time:** 4-6 hours (assuming no blocking dependencies)
- **Coordination Overhead:** 1-2 hours for consistency review

---

## Success Criteria

### Client Presentation Goals

**Visual Impact:**
- Immediately communicates design differences
- Professional, polished presentation quality
- Responsive across devices shown in presentation

**Decision Support:**
- Clear visual representation of each design philosophy
- Easy to compare and contrast approaches
- Target audience alignment evident

**Technical Credibility:**
- No bugs or broken interactions
- Smooth, professional interactions
- Shows technical feasibility

### Internal Success Metrics

- **Code Reusability:** 60%+ component reuse across designs
- **Tailwind Efficiency:** 90%+ styling via Tailwind (minimal custom CSS)
- **Performance:** All prototypes load in < 3 seconds
- **Accessibility:** WCAG AA compliance for contrast and keyboard navigation
- **Maintainability:** Another developer can understand and modify easily

---

## Next Steps

After reviewing this Master Implementation Brief:

1. **Review Per-Design Implementation Plans:**
   - `Design 1/implementation-plan.md`
   - `Design 2/implementation-plan.md`
   - `Design 3/implementation-plan.md`
   - `Design 4/implementation-plan.md`

2. **Review Delegation Instructions:**
   - `DELEGATION-INSTRUCTIONS.md`

3. **Confirm Technology Choices:**
   - React + Tailwind approved
   - Vite as build tool acceptable
   - Dependencies list reviewed

4. **Clarify Any Constraints:**
   - Deployment platform preferences
   - Timeline requirements
   - Additional client presentation needs

---

**Document Version:** 1.0.0
**Last Updated:** November 14, 2025
**Status:** Ready for Implementation
