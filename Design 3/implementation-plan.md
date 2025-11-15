# Design 3 Implementation Plan
## Healers-Inspired - React + Tailwind

**Design Name:** Harmony System
**Design Philosophy:** Sophisticated Premium Wellness
**Target Audience:** Spa/wellness centers, premium clinics, established practices, upscale market
**Date:** November 14, 2025

---

## Design Overview

**Visual Personality:** Refined, polished, elevated, natural
**Color Strategy:** Deep Sage + Terracotta + Warm Cream (earth tones, sophisticated)
**Typography:** DM Sans (display) + Inter (body) + Fraunces (quotes/accents)
**Whitespace:** Generous (40-50%, premium feel)
**Best For:** Upscale positioning, established buyers valuing quality

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
        // Primary - Deep Sage
        primary: {
          DEFAULT: '#2D5F4C',
          50: '#F0FAF8',
          100: '#D9F2ED',
          200: '#B3E5DB',
          300: '#8DD8C9',
          400: '#3A7A70',
          500: '#2D5F4C',  // Main
          600: '#234E48',
          700: '#1D3F3A',
          800: '#16312C',
          900: '#0F241F',
        },

        // Secondary - Terracotta
        secondary: {
          DEFAULT: '#D36C3E',
          50: '#FEF2EE',
          100: '#FDE5DC',
          200: '#FACAB9',
          300: '#E6A58E',
          400: '#E08B6D',
          500: '#D36C3E',  // Main
          600: '#B5532A',
          700: '#9A441E',
          800: '#7F3617',
          900: '#662B12',
        },

        // Background Colors
        bg: {
          primary: '#FAF7F4',    // Warm cream - main background
          secondary: '#FFFFFF',  // Pure white
          tertiary: '#F5F3EF',   // Darker cream
        },

        // Text Colors
        text: {
          primary: '#1A1A1A',    // Charcoal
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
        accent: ['Fraunces', 'Georgia', 'serif'],
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
        'primary': '0 4px 16px rgba(45, 95, 76, 0.25)',
        'secondary': '0 4px 16px rgba(211, 108, 62, 0.2)',
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3A7A70, #2D5F4C)',
        'gradient-cta': 'linear-gradient(135deg, #2D5F4C 0%, #3A7A70 100%)',
        'gradient-warm': 'linear-gradient(135deg, #E6A58E 0%, #D36C3E 100%)',
      },

      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
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
│   └── Navigation (elegant, refined)
├── Hero (sophisticated split layout)
├── OriginStory (image + narrative)
├── Features (premium cards with gradients)
├── ProductShowcase (high-quality imagery)
├── Testimonials (elegant quote cards)
├── SidekickCareApp (wellness integration)
├── PremiumCTA (gradient background)
└── Footer (sophisticated 4-column)
```

### Component Breakdown

#### 1. **Header/Navigation**

**File:** `src/components/layout/Header.jsx`

**Design Philosophy:** Elegant, sophisticated, refined

**Tailwind Structure:**
```jsx
<header className="bg-bg-secondary border-b border-border-subtle sticky top-0 z-50">
  <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-gradient-primary rounded-lg"></div>
      <span className="text-xl font-display font-bold text-text-primary">Sidekick Air</span>
    </div>

    {/* Desktop Nav */}
    <div className="hidden md:flex items-center gap-8">
      <a href="#story" className="text-text-secondary hover:text-primary transition-colors">Story</a>
      <a href="#features" className="text-text-secondary hover:text-primary transition-colors">Features</a>
      <a href="#testimonials" className="text-text-secondary hover:text-primary transition-colors">Testimonials</a>
      <a href="#wellness" className="text-text-secondary hover:text-primary transition-colors">Wellness</a>
    </div>

    {/* CTA */}
    <Button variant="primary" size="md">Explore</Button>
  </nav>
</header>
```

---

#### 2. **Hero Section**

**File:** `src/components/sections/Hero.jsx`

**Layout:** 55/45 split (content left, image right)

**Tailwind Structure:**
```jsx
<section className="min-h-[90vh] bg-bg-primary flex items-center py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Content */}
      <div className="space-y-6">
        {/* Eyebrow */}
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">
          REIMAGINING RECOVERY
        </p>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-display font-bold text-text-primary leading-tight">
          Where Professional Excellence Meets Natural Innovation
        </h1>

        {/* Subtext */}
        <p className="text-xl text-text-secondary leading-relaxed max-w-xl">
          Crafted for discerning practitioners who demand both portability and uncompromising quality.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button variant="primary" size="lg">Explore Sidekick Air</Button>
          <Button variant="secondary" size="lg">Schedule Demo</Button>
        </div>

        {/* Trust Signals */}
        <div className="flex items-center gap-6 text-sm text-text-tertiary pt-6 border-t border-border-subtle">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a7 7 0 100 14A7 7 0 009 2zm0 12a5 5 0 110-10 5 5 0 010 10z"/>
            </svg>
            <span>Premium Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a7 7 0 100 14A7 7 0 009 2zm0 12a5 5 0 110-10 5 5 0 010 10z"/>
            </svg>
            <span>2-Year Warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a7 7 0 100 14A7 7 0 009 2zm0 12a5 5 0 110-10 5 5 0 010 10z"/>
            </svg>
            <span>Expert Support</span>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src="/images/sidekick-air-hero.jpg"
          alt="Sidekick Air in premium wellness setting"
          className="rounded-2xl shadow-2xl w-full h-auto"
        />
        {/* Optional: Floating element */}
        <div className="absolute -bottom-8 -left-8 bg-bg-secondary p-6 rounded-xl shadow-xl">
          <p className="text-sm text-text-tertiary mb-1">Professional Grade</p>
          <p className="text-3xl font-bold text-primary">800+ lbs</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

#### 3. **Origin Story Section**

**File:** `src/components/sections/OriginStory.jsx`

**Layout:** Image (50%) + Text (50%)

**Tailwind Structure:**
```jsx
<section className="bg-bg-secondary py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Image */}
      <div className="order-2 lg:order-1">
        <img
          src="/images/drew-origin.jpg"
          alt="Drew Freedman, Founder"
          className="rounded-2xl shadow-lg w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="order-1 lg:order-2 space-y-6">
        <p className="text-sm font-semibold text-secondary uppercase tracking-wider">
          THE ORIGIN STORY
        </p>

        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
          A Healer's Vision
        </h2>

        <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
          <p>
            Drew Freedman spent 25 years as The Boston Bodyworker, helping thousands
            find relief through expert hands-on therapy. His practice was built on
            trust, skill, and an unwavering commitment to healing.
          </p>
          <p>
            When he closed his practice to explore new horizons, a moment of clarity
            arrived on the water. Inflating a paddleboard, Drew saw the future of
            therapy tables—professional-grade stability in a portable form.
          </p>
          <p className="font-accent italic text-primary">
            "Sidekick Air is a continuation of my life's purpose: empowering healers
            to work without limits."
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

#### 4. **Features Section**

**File:** `src/components/sections/Features.jsx`

**Layout:** 3-column premium cards

**Tailwind Structure:**
```jsx
<section className="bg-bg-primary py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
        PREMIUM FEATURES
      </p>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
        Wellness Meets Innovation
      </h2>
      <p className="text-lg text-text-secondary">
        Every detail crafted for discerning practitioners
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard
        icon={<LeafIcon />}
        title="Natural Innovation"
        description="Aerospace materials meet organic design philosophy for sustainable excellence."
        gradient="from-primary/10 to-primary/5"
      />
      {/* More feature cards */}
    </div>
  </div>
</section>
```

**FeatureCard Component:**
```jsx
// src/components/ui/FeatureCard.jsx
export default function FeatureCard({ icon, title, description, gradient = 'from-primary/10 to-primary/5' }) {
  return (
    <div className="bg-bg-secondary p-8 rounded-xl border border-border-subtle hover:border-primary hover:shadow-lg transition-all duration-300">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-primary mb-6`}>
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

---

#### 5. **Product Showcase Section**

**File:** `src/components/sections/ProductShowcase.jsx`

**Layout:** Full-width high-quality imagery

**Tailwind Structure:**
```jsx
<section className="bg-bg-tertiary py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="rounded-2xl overflow-hidden shadow-2xl relative">
      <img
        src="/images/sidekick-air-wellness-setting.jpg"
        alt="Sidekick Air in premium wellness center"
        className="w-full h-auto"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-12">
        <div className="max-w-2xl">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Elevated Wellness Experience
          </h3>
          <p className="text-lg text-white/90 leading-relaxed">
            Premium craftsmanship meets thoughtful design. Every session becomes
            an expression of your commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

#### 6. **Testimonials Section**

**File:** `src/components/sections/Testimonials.jsx`

**Layout:** 2-column elegant quote cards

**Tailwind Structure:**
```jsx
<section className="bg-bg-primary py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
        PROFESSIONAL VALIDATION
      </p>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary">
        Trusted by Excellence
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <TestimonialCard
        quote="Sidekick Air elevated our mobile spa services. Clients notice the quality immediately."
        name="Elena Martinez"
        role="Wellness Center Director"
        image="/images/testimonial-elena.jpg"
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
    <div className="bg-bg-tertiary p-8 rounded-xl shadow-md relative">
      {/* Large quote mark */}
      <div className="absolute top-10 left-10 text-7xl font-accent text-primary/20 leading-none">
        "
      </div>

      <p className="text-lg font-accent italic text-text-secondary leading-relaxed mb-8 relative z-10">
        {quote}
      </p>

      <div className="flex items-center gap-4 relative z-10">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-3 border-primary"
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

#### 7. **Sidekick Care App Section**

**File:** `src/components/sections/SidekickCareApp.jsx`

**Layout:** Split - app mockup + features

**Tailwind Structure:**
```jsx
<section className="bg-bg-secondary py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* App Mockup */}
      <div className="flex justify-center">
        <img
          src="/images/sidekick-care-app-mockup.png"
          alt="Sidekick Care Wellness App"
          className="max-w-md w-full h-auto"
        />
      </div>

      {/* Features */}
      <div className="space-y-8">
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            DIGITAL WELLNESS COMPANION
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            Sidekick Care
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Your professional assistant for elevated client experiences
          </p>
        </div>

        <ul className="space-y-5">
          <li className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
              ✓
            </div>
            <div>
              <p className="font-semibold text-text-primary mb-1">Treatment Protocols</p>
              <p className="text-text-secondary">Condition-specific guidance and session planning</p>
            </div>
          </li>
          {/* More features */}
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

#### 8. **Premium CTA Section**

**File:** `src/components/sections/PremiumCTA.jsx`

**Layout:** Centered, gradient background

**Tailwind Structure:**
```jsx
<section className="bg-gradient-cta py-20 md:py-24">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
      Elevate Your Practice with Sidekick Air
    </h2>

    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
      Join discerning practitioners who've discovered the harmony of
      portability and premium quality.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <Button variant="white" size="lg">Reserve Your Table</Button>
      <Button variant="outline-white" size="lg">Schedule Consultation</Button>
    </div>

    <div className="flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
      <span className="flex items-center gap-2">
        <CheckIcon className="w-4 h-4" />
        Premium Quality
      </span>
      <span className="flex items-center gap-2">
        <CheckIcon className="w-4 h-4" />
        30-Day Guarantee
      </span>
      <span className="flex items-center gap-2">
        <CheckIcon className="w-4 h-4" />
        Expert Support
      </span>
    </div>
  </div>
</section>
```

---

#### 9. **Footer**

**File:** `src/components/layout/Footer.jsx`

**Layout:** 4-column sophisticated grid

**Tailwind Structure:**
```jsx
<footer className="bg-text-primary text-white py-16">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      {/* Brand */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 bg-gradient-warm rounded-lg"></div>
          <span className="text-xl font-display font-bold">Sidekick Air</span>
        </div>
        <p className="text-white/70 text-sm leading-relaxed">
          Reimagining recovery through premium portable therapy solutions.
        </p>
      </div>

      {/* Product */}
      <div>
        <h4 className="font-semibold mb-4">Product</h4>
        <ul className="space-y-3 text-sm text-white/70">
          <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
          <li><a href="#specs" className="hover:text-white transition-colors">Specifications</a></li>
          <li><a href="#app" className="hover:text-white transition-colors">Sidekick Care</a></li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="font-semibold mb-4">Company</h4>
        <ul className="space-y-3 text-sm text-white/70">
          <li><a href="#story" className="hover:text-white transition-colors">Our Story</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="font-semibold mb-4">Support</h4>
        <ul className="space-y-3 text-sm text-white/70">
          <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
          <li><a href="#warranty" className="hover:text-white transition-colors">Warranty</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
      <p>© 2025 Sidekick Air. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
        <a href="#terms" className="hover:text-white transition-colors">Terms</a>
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
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-primary hover:shadow-xl',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    white: 'bg-white text-primary hover:bg-white/90 shadow-lg',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-primary',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
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

---

## Implementation Checklist

### Phase 1: Project Setup
- [ ] Create React project: `npm create vite@latest sidekick-healers -- --template react`
- [ ] Install Tailwind: `npm install -D tailwindcss postcss autoprefixer`
- [ ] Initialize Tailwind: `npx tailwindcss init -p`
- [ ] Copy Tailwind config (earth-tone palette)
- [ ] Install dependencies: `npm install react-icons clsx`
- [ ] Add Google Fonts (DM Sans, Inter, Fraunces)

### Phase 2: Base Components (1-2 hours)
- [ ] Create Button with earth-tone variants
- [ ] Create sophisticated Header
- [ ] Create premium Footer (4-column)
- [ ] Test all base components

### Phase 3: Section Components (2-3 hours)
- [ ] Create Hero (split layout, elegant)
- [ ] Create OriginStory (image + narrative)
- [ ] Create Features (premium cards)
- [ ] Create ProductShowcase (high-quality imagery)
- [ ] Create Testimonials (elegant quotes with serif)
- [ ] Create SidekickCareApp (wellness integration)
- [ ] Create PremiumCTA (gradient background)

### Phase 4: Content Integration (1 hour)
- [ ] Add all copy from brand brief
- [ ] Add high-quality placeholder images
- [ ] Add icons with earth-tone colors
- [ ] Review for premium, sophisticated feel

### Phase 5: Interactions & Polish (1-2 hours)
- [ ] Implement all hover effects
- [ ] Add smooth transitions (0.8s luxurious timing)
- [ ] Test navigation and mobile menu
- [ ] Add gradient backgrounds
- [ ] Review all animations

### Phase 6: Responsive Testing (1 hour)
- [ ] Test all breakpoints
- [ ] Verify generous whitespace
- [ ] Fix any layout issues
- [ ] Test typography scaling

### Phase 7: Quality Assurance (30 min)
- [ ] Remove console errors
- [ ] Verify WCAG AA contrast
- [ ] Test keyboard navigation
- [ ] Test in Chrome, Safari, Firefox
- [ ] Build successfully

---

## Special Considerations

### Design-Specific Features

**Earth-Tone Gradients:**
Use gradients combining sage + terracotta:
```jsx
className="bg-gradient-to-br from-primary to-secondary"
```

**Serif Accent Font (Fraunces):**
Use for testimonial quotes and elegant accents:
```jsx
className="font-accent italic"
```

**Premium Feel:**
- Slower animations (0.8s vs 0.6s)
- Larger shadows for depth
- Generous padding and margins
- High-quality imagery essential

### Accessibility

**Color Contrast:**
- Deep Sage (#2D5F4C) on cream: 6.2:1 ✓
- Terracotta (#D36C3E) on cream: Use for accents only
- Charcoal (#1A1A1A) on cream: 18.2:1 ✓✓✓

---

## Expected Outcome

### Visual Result

A sophisticated, premium landing page that:
- Communicates upscale wellness positioning
- Uses earth tones to evoke natural sophistication
- Feels refined and polished
- Appeals to established, quality-focused buyers
- Balances organic aesthetic with professional credibility

### Technical Result

- Elegant React component architecture
- Earth-tone Tailwind theme
- Three-font system (display, body, accent)
- Generous spacing throughout
- ~400-500 lines of React code
- ~200 lines of custom CSS

---

**Implementation Plan Version:** 1.0.0
**Last Updated:** November 14, 2025
**Status:** Ready for Development
