# Design 1 Implementation Plan
## TherapyFlow-Inspired - React + Tailwind

**Design Name:** Healing System
**Design Philosophy:** Warm Healthcare Professional
**Target Audience:** Traditional therapists, sports medicine professionals, healthcare practitioners
**Date:** November 14, 2025

---

## Design Overview

**Visual Personality:** Professional trust-building with emotional warmth
**Color Strategy:** Sage Green + Electric Blue + Warm Cream (balanced, welcoming)
**Typography:** DM Sans (display) + Inter (body) + Fraunces (accents)
**Whitespace:** Generous (40%)
**Best For:** Conservative healthcare market, building trust with skeptical buyers

---

## Tailwind Theme Configuration

### Complete tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Electric Steel Blue
        primary: {
          DEFAULT: '#387CFF',
          50: '#EBF3FF',
          100: '#D6E7FF',
          200: '#ADCFFF',
          300: '#85B7FF',
          400: '#5C9FFF',
          500: '#387CFF',  // Main
          600: '#1B66E6',
          700: '#1550B8',
          800: '#0F3A8A',
          900: '#09245C',
        },

        // Secondary - Sage Green/Teal
        secondary: {
          DEFAULT: '#5FB5A5',
          50: '#F0FAF8',
          100: '#D9F2ED',
          200: '#B3E5DB',
          300: '#8DD8C9',
          400: '#76C6B7',
          500: '#5FB5A5',  // Main
          600: '#4A9084',
          700: '#3A7269',
          800: '#2A544D',
          900: '#1A3631',
        },

        // Accent - Burnt Copper
        accent: {
          DEFAULT: '#D36C3E',
          50: '#FDF4EF',
          100: '#FAE9DF',
          200: '#F5D3BF',
          300: '#F0BD9F',
          400: '#E29471',
          500: '#D36C3E',  // Main
          600: '#B85527',
          700: '#8F421E',
          800: '#663015',
          900: '#3D1D0C',
        },

        // Background Colors
        bg: {
          primary: '#F7F8FA',    // Arctic White
          secondary: '#F5F3EF',  // Warm Cream
          tertiary: '#FFFFFF',   // Pure White
        },

        // Text Colors
        text: {
          primary: '#1C1C1E',    // Charcoal
          secondary: '#4A5568',  // Medium gray
          tertiary: '#718096',   // Light gray
        },

        // Border Colors
        border: {
          subtle: '#E2E2E4',
          medium: '#D1D5DB',
        },
      },

      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Fraunces', 'serif'],
      },

      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
      },

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

      borderRadius: {
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'full': '9999px',
      },

      boxShadow: {
        'sm': '0 2px 8px rgba(0,0,0,0.06)',
        'md': '0 4px 16px rgba(0,0,0,0.1)',
        'lg': '0 8px 24px rgba(0,0,0,0.12)',
        'xl': '0 12px 32px rgba(0,0,0,0.15)',
        'primary': '0 4px 16px rgba(56, 124, 255, 0.25)',
        'primary-lg': '0 6px 24px rgba(56, 124, 255, 0.35)',
        'secondary': '0 4px 16px rgba(95, 181, 165, 0.25)',
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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

## Component Architecture

### Page Structure

```
App.jsx
├── Header
│   └── Navigation
├── Hero
├── OriginStory
├── ProblemSolution
├── Features
│   ├── FeatureCard (x3)
│   └── FeatureGrid
├── ProductShowcase
├── Testimonials
│   └── TestimonialCard (x2)
├── SidekickCareApp
├── CTASection
└── Footer
```

### Component Breakdown

#### 1. **Header/Navigation**

**File:** `src/components/layout/Header.jsx`

**Functionality:**
- Fixed/sticky header (design decision)
- Desktop: horizontal navigation links
- Mobile: hamburger menu
- Logo on left, nav links on right
- "Pre-Order" CTA button in nav

**Tailwind Classes:**
```jsx
<header className="bg-bg-tertiary border-b border-border-subtle sticky top-0 z-50">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
```

**Content:**
- Logo: "Sidekick Air"
- Links: Features, Story, Testimonials, Contact
- CTA: "Pre-Order Now"

---

#### 2. **Hero Section**

**File:** `src/components/sections/Hero.jsx`

**Layout:** Left content (60%) + Right image (40%)

**Tailwind Structure:**
```jsx
<section className="bg-bg-primary min-h-screen flex items-center py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div> {/* Content */} </div>
      <div> {/* Image */} </div>
    </div>
  </div>
</section>
```

**Content Structure:**
```jsx
<div className="space-y-6">
  {/* Eyebrow */}
  <p className="text-sm font-semibold text-secondary uppercase tracking-wider">
    REIMAGINING RECOVERY
  </p>

  {/* Headline */}
  <h1 className="text-5xl md:text-6xl font-display font-bold text-text-primary leading-tight">
    Built for the hands that heal
  </h1>

  {/* Subtext */}
  <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
    The first portable therapy table engineered for professionals in motion.
  </p>

  {/* CTAs */}
  <div className="flex flex-col sm:flex-row gap-4">
    <Button variant="primary" size="lg">Pre-Order Now</Button>
    <Button variant="secondary" size="lg">Watch Demo</Button>
  </div>

  {/* Trust Signals */}
  <div className="flex items-center gap-6 text-sm text-text-tertiary pt-4">
    <span>✓ 500+ Therapists</span>
    <span>✓ 2-Year Warranty</span>
    <span>✓ Free Shipping</span>
  </div>
</div>
```

**Image:**
```jsx
<div className="relative">
  <img
    src="/images/sidekick-air-hero.jpg"
    alt="Sidekick Air portable therapy table"
    className="rounded-lg shadow-lg w-full h-auto"
  />
  {/* Optional: floating badge */}
  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
    <p className="text-4xl font-bold text-primary">800+</p>
    <p className="text-sm text-text-tertiary">lb capacity</p>
  </div>
</div>
```

---

#### 3. **Origin Story Section**

**File:** `src/components/sections/OriginStory.jsx`

**Layout:** Image (45%) + Text (55%)

**Tailwind Structure:**
```jsx
<section className="bg-bg-tertiary py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1"> {/* Image */} </div>
      <div className="order-1 lg:order-2"> {/* Content */} </div>
    </div>
  </div>
</section>
```

**Content:**
```jsx
<div className="space-y-6">
  <p className="text-sm font-semibold text-accent uppercase tracking-wider">
    THE ORIGIN STORY
  </p>

  <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary">
    From Healer to Innovator
  </h2>

  <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
    <p>
      Drew Freedman spent 25 years as The Boston Bodyworker, helping thousands
      find relief through expert hands-on therapy.
    </p>
    <p>
      When he closed his practice and bought a paddleboard, a revelation struck:
      the drop-stitch material revolutionizing water sports could redefine the therapy table.
    </p>
    <p>
      Sidekick Air was born from this insight—a continuation of Drew's purpose
      to help healers work without limits.
    </p>
  </div>
</div>
```

---

#### 4. **Problem/Solution Section**

**File:** `src/components/sections/ProblemSolution.jsx`

**Layout:** Two-column comparison (Before/After style)

**Tailwind Structure:**
```jsx
<section className="bg-bg-primary py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-text-primary mb-16">
      The Sidekick Air Difference
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Traditional Tables (Problems) */}
      <div className="bg-white p-8 rounded-lg border-2 border-border-subtle">
        <h3 className="text-2xl font-bold text-text-primary mb-6">Traditional Tables</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-accent text-xl">✗</span>
            <span className="text-text-secondary">Heavy (35-45 lbs) causing physical strain</span>
          </li>
          {/* More problems */}
        </ul>
      </div>

      {/* Sidekick Air (Solutions) */}
      <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-white mb-6">Sidekick Air</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-white text-xl">✓</span>
            <span className="text-white">Lightweight ~12 lbs, packs to yoga mat size</span>
          </li>
          {/* More solutions */}
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

#### 5. **Features Section**

**File:** `src/components/sections/Features.jsx`
**Sub-component:** `src/components/ui/FeatureCard.jsx`

**Layout:** 3-column grid

**Tailwind Structure:**
```jsx
<section className="bg-bg-secondary py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-text-primary mb-16">
      Why Therapists Choose Sidekick Air
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard
        icon={<PackageIcon />}
        title="Ultimate Portability"
        description="Packs to yoga mat size, weighs just 12 lbs. Take your practice anywhere."
      />
      {/* More feature cards */}
    </div>
  </div>
</section>
```

**FeatureCard Component:**
```jsx
// src/components/ui/FeatureCard.jsx
export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg border border-border-subtle hover:border-primary hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
        {title}
      </h3>
      <p className="text-base text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}
```

**Feature Content:**
1. **Ultimate Portability** - Packs to yoga mat size, 12 lbs
2. **Professional Strength** - 800+ lb capacity, aerospace drop-stitch
3. **2-Minute Setup** - Inflates instantly, effortless
4. **Custom Branding** - Color options, professional identity
5. **Eco-Friendly** - Sustainable materials, carbon-neutral shipping
6. **Smart Integration** - Sidekick Care app connectivity

---

#### 6. **Product Showcase Section**

**File:** `src/components/sections/ProductShowcase.jsx`

**Layout:** Full-width image with text overlay or side-by-side

**Tailwind Structure:**
```jsx
<section className="bg-bg-tertiary py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
      <img
        src="/images/sidekick-air-product.jpg"
        alt="Sidekick Air therapy table"
        className="w-full h-auto"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-12">
        <h3 className="text-3xl font-display font-bold text-white mb-4">
          Drop-Stitch Aerospace Technology
        </h3>
        <p className="text-lg text-white/90 max-w-2xl">
          The same material trusted in marine and aerospace industries
          now supports professional therapy sessions.
        </p>
      </div>
    </div>
  </div>
</section>
```

---

#### 7. **Testimonials Section**

**File:** `src/components/sections/Testimonials.jsx`
**Sub-component:** `src/components/ui/TestimonialCard.jsx`

**Layout:** 2-column grid

**Tailwind Structure:**
```jsx
<section className="bg-bg-primary py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-text-primary mb-16">
      Trusted by Professionals
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <TestimonialCard
        quote="Sidekick Air transformed my mobile practice. I can see twice as many clients without the physical toll."
        name="Sarah Chen"
        role="Sports Massage Therapist"
        image="/images/testimonial-sarah.jpg"
      />
      {/* More testimonials */}
    </div>
  </div>
</section>
```

**TestimonialCard Component:**
```jsx
// src/components/ui/TestimonialCard.jsx
export default function TestimonialCard({ quote, name, role, image }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md relative">
      {/* Quote mark */}
      <svg className="absolute top-6 left-6 w-12 h-12 text-secondary opacity-20" fill="currentColor">
        <path d="M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm24 0c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z" />
      </svg>

      <p className="text-lg text-text-secondary leading-relaxed mb-6 relative z-10 font-accent italic">
        "{quote}"
      </p>

      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary"
        />
        <div>
          <p className="font-semibold text-text-primary">{name}</p>
          <p className="text-sm text-text-tertiary">{role}</p>
        </div>
      </div>
    </div>
  );
}
```

---

#### 8. **Sidekick Care App Section**

**File:** `src/components/sections/SidekickCareApp.jsx`

**Layout:** Split layout - app mockup + features list

**Tailwind Structure:**
```jsx
<section className="bg-bg-secondary py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* App Mockup */}
      <div className="flex justify-center">
        <img
          src="/images/sidekick-care-app.png"
          alt="Sidekick Care App"
          className="max-w-sm w-full h-auto"
        />
      </div>

      {/* Features */}
      <div className="space-y-8">
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            SIDEKICK CARE APP
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary">
            Your Digital Assistant
          </h2>
        </div>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-primary text-xl">✓</span>
            <div>
              <p className="font-semibold text-text-primary">Setup Guides</p>
              <p className="text-text-secondary">Step-by-step inflation and assembly</p>
            </div>
          </li>
          {/* More app features */}
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

#### 9. **CTA Section**

**File:** `src/components/sections/CTASection.jsx`

**Layout:** Centered content with gradient background

**Tailwind Structure:**
```jsx
<section className="bg-gradient-to-r from-primary via-secondary to-primary py-20 md:py-24">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
      Ready to Transform Your Practice?
    </h2>

    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
      Join 500+ therapists who've discovered the freedom of professional portability.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="white" size="lg">Pre-Order Now</Button>
      <Button variant="outline-white" size="lg">Download Guide</Button>
    </div>

    <div className="flex items-center justify-center gap-8 text-white/80 text-sm mt-10">
      <span>✓ 30-Day Money Back</span>
      <span>✓ Free Shipping</span>
      <span>✓ 2-Year Warranty</span>
    </div>
  </div>
</section>
```

---

#### 10. **Footer**

**File:** `src/components/layout/Footer.jsx`

**Layout:** 4-column grid + bottom bar

**Tailwind Structure:**
```jsx
<footer className="bg-text-primary text-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      {/* Column 1: Brand */}
      <div>
        <h3 className="text-xl font-display font-bold mb-4">Sidekick Air</h3>
        <p className="text-white/70 text-sm">
          Reimagining recovery through portable professional therapy tables.
        </p>
      </div>

      {/* Column 2: Product */}
      <div>
        <h4 className="font-semibold mb-4">Product</h4>
        <ul className="space-y-2 text-sm text-white/70">
          <li><a href="#features">Features</a></li>
          <li><a href="#specs">Specifications</a></li>
          <li><a href="#app">Sidekick Care App</a></li>
        </ul>
      </div>

      {/* Column 3: Company */}
      <div>
        <h4 className="font-semibold mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-white/70">
          <li><a href="#story">Our Story</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Column 4: Support */}
      <div>
        <h4 className="font-semibold mb-4">Support</h4>
        <ul className="space-y-2 text-sm text-white/70">
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#warranty">Warranty</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
      <p>© 2025 Sidekick Air. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
```

---

## UI Component Library

### Button Variants

```jsx
// src/components/ui/Button.jsx
export default function Button({ children, variant = 'primary', size = 'md', className = '' }) {
  const baseClasses = 'font-semibold rounded-md transition-all duration-200 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-primary hover:shadow-primary-lg',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    white: 'bg-white text-primary hover:bg-white/90',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-primary',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
}
```

### Card Component

```jsx
// src/components/ui/Card.jsx
export default function Card({ children, className = '', hover = false }) {
  const baseClasses = 'bg-white rounded-lg border border-border-subtle';
  const hoverClasses = hover ? 'hover:border-primary hover:shadow-lg transition-all duration-300' : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
```

---

## Implementation Checklist

### Phase 1: Project Setup
- [ ] Create React project with Vite: `npm create vite@latest sidekick-therapyflow -- --template react`
- [ ] Install Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer`
- [ ] Initialize Tailwind: `npx tailwindcss init -p`
- [ ] Copy Tailwind config from this document
- [ ] Install dependencies: `npm install react-icons clsx`
- [ ] Add Google Fonts to index.html (DM Sans, Inter, Fraunces)

### Phase 2: Base Components (1-2 hours)
- [ ] Create `src/components/ui/Button.jsx`
- [ ] Create `src/components/ui/Card.jsx`
- [ ] Create `src/components/ui/Container.jsx`
- [ ] Create `src/components/layout/Header.jsx`
- [ ] Create `src/components/layout/Footer.jsx`
- [ ] Test base components in App.jsx

### Phase 3: Section Components (2-3 hours)
- [ ] Create `src/components/sections/Hero.jsx`
- [ ] Create `src/components/sections/OriginStory.jsx`
- [ ] Create `src/components/sections/ProblemSolution.jsx`
- [ ] Create `src/components/sections/Features.jsx` + `FeatureCard.jsx`
- [ ] Create `src/components/sections/ProductShowcase.jsx`
- [ ] Create `src/components/sections/Testimonials.jsx` + `TestimonialCard.jsx`
- [ ] Create `src/components/sections/SidekickCareApp.jsx`
- [ ] Create `src/components/sections/CTASection.jsx`

### Phase 4: Content Integration (1 hour)
- [ ] Add real copy from brand brief to all sections
- [ ] Add placeholder images (use Unsplash for therapy/wellness themes)
- [ ] Add icons (react-icons or custom SVGs)
- [ ] Review all text content for accuracy

### Phase 5: Interactions & Polish (1-2 hours)
- [ ] Implement mobile navigation menu
- [ ] Add smooth scroll to section links
- [ ] Test all button hover states
- [ ] Test all card hover effects
- [ ] Add form focus states (if forms included)
- [ ] Review all transitions and animations

### Phase 6: Responsive Testing (1 hour)
- [ ] Test mobile (375px - iPhone SE)
- [ ] Test tablet (768px - iPad)
- [ ] Test desktop (1280px - laptop)
- [ ] Test large desktop (1920px)
- [ ] Fix any layout issues
- [ ] Verify typography scales correctly

### Phase 7: Quality Assurance (30 min)
- [ ] Check console for errors
- [ ] Verify all images have alt text
- [ ] Test keyboard navigation
- [ ] Verify color contrast (WCAG AA)
- [ ] Test in Chrome, Safari, Firefox
- [ ] Run `npm run build` successfully

### Phase 8: Documentation (30 min)
- [ ] Create README.md with setup instructions
- [ ] Add design philosophy summary
- [ ] Include screenshots
- [ ] Document any deviations from design spec

---

## Special Considerations

### Design-Specific Features

**Warm Color Gradient:**
This design uses gradients combining primary (blue) and secondary (sage green):
```jsx
className="bg-gradient-to-br from-primary to-secondary"
```

**Serif Accent Font:**
Use Fraunces serif font for testimonial quotes and elegant accents:
```jsx
className="font-accent italic"
```

**Trust-Building Elements:**
Emphasize trust signals throughout (therapist count, warranty, guarantees):
```jsx
<div className="flex items-center gap-6 text-sm text-text-tertiary">
  <span>✓ 500+ Therapists</span>
  <span>✓ 2-Year Warranty</span>
  <span>✓ Free Shipping</span>
</div>
```

### Accessibility

**Color Contrast:**
- Primary (#387CFF) on white: 4.5:1 ✓
- Secondary (#5FB5A5) on white: 3.2:1 (use darker shade for text)
- All text colors meet WCAG AA standards

**Keyboard Navigation:**
- All interactive elements must be keyboard accessible
- Add focus-visible states:
```jsx
className="focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
```

### Performance Tips

**Image Optimization:**
- Use WebP format with JPG fallback
- Implement lazy loading: `loading="lazy"`
- Compress images before adding

**Animation Performance:**
- Use CSS transforms (GPU-accelerated)
- Avoid animating width/height
- Use `will-change` sparingly

---

## Content Mapping

### Copy from Brand Brief → Components

**Hero Section:**
- Headline: "Built for the hands that heal"
- Subtext: "The first portable therapy table engineered for professionals in motion."

**Origin Story:**
- Use condensed version from brief (Drew's 25-year journey + paddleboard revelation)

**Features:**
1. Ultimate Portability: "Packs to yoga mat size, weighs just 12 lbs"
2. Professional Strength: "800+ lb capacity with drop-stitch aerospace technology"
3. 2-Minute Setup: "Inflates in 2 minutes, effortless setup"
4. Custom Branding: "Customizable colors and professional branding options"
5. Eco-Friendly: "Sustainable materials, carbon-neutral shipping"
6. Smart Integration: "Sidekick Care app with setup guides and protocols"

**Sidekick Care App Features:**
- Step-by-step setup guides
- Condition-based treatment protocols
- Client tracking tools
- Professional network integration
- Continuing education modules

---

## Expected Outcome

### Visual Result

A warm, trustworthy landing page that:
- Communicates professional credibility
- Builds trust with healthcare practitioners
- Shows product benefits clearly
- Feels approachable yet sophisticated
- Balances blue (tech/trust) with sage green (healing/wellness)

### Technical Result

- Clean React component architecture
- Efficient Tailwind CSS usage (90%+ utility classes)
- Fully responsive (mobile-first)
- Smooth interactions
- No console errors
- ~300-500 lines of React code
- ~150 lines of custom CSS (beyond Tailwind)

---

**Implementation Plan Version:** 1.0.0
**Last Updated:** November 14, 2025
**Status:** Ready for Development
