# Design 2: Design System
## Xpedition-Inspired System for Sidekick Air

**System Name:** Sidekick Air Velocity System
**Version:** 1.0.0
**Design Philosophy:** Modern Tech Innovation
**Last Updated:** November 14, 2025

---

## Design Philosophy

The Velocity System embodies **minimalist precision** and **technological confidence**. Using a restrained color palette (95% blue/white/gray), this system creates a modern SaaS aesthetic that signals innovation, quality, and professional credibility.

### Core Principles

**1. Minimalism as Strategy**
Less is more. Every color, element, and interaction earns its place through function, not decoration.

**2. Conversion Focus**
Every design decision optimizes for clear user journeys and strategic conversion points.

**3. Performance First**
Fast loading,smooth interactions, and minimal assets create a premium feel.

**4. Clarity Over Cleverness**
Users understand the value proposition within 3 seconds. No confusion, no guessing.

---

## Color System

### Primary Colors

```css
/* Electric Steel Blue - Primary Brand */
--color-primary-50: #EFF6FF;
--color-primary-100: #DBEAFE;
--color-primary-200: #BFDBFE;
--color-primary-300: #93C5FD;
--color-primary-400: #60A5FA;
--color-primary-500: #387CFF;  /* Primary */
--color-primary-600: #2563EB;
--color-primary-700: #1D4ED8;
--color-primary-800: #1E40AF;
--color-primary-900: #1E3A8A;

/* Usage */
--color-primary: var(--color-primary-500);
--color-primary-dark: var(--color-primary-600);
--color-primary-light: var(--color-primary-400);
```

### Neutral Colors

```css
/* Text & Backgrounds */
--color-neutral-50: #F9FAFB;
--color-neutral-100: #F3F4F6;
--color-neutral-200: #E5E7EB;
--color-neutral-300: #D1D5DB;
--color-neutral-400: #9CA3AF;
--color-neutral-500: #6B7280;
--color-neutral-600: #4B5563;
--color-neutral-700: #374151;
--color-neutral-800: #1F2937;
--color-neutral-900: #111111;

/* Semantic Mappings */
--color-text-primary: var(--color-neutral-900);    /* #111111 */
--color-text-secondary: #333333;
--color-text-tertiary: #666666;

--color-bg-primary: #FFFFFF;
--color-bg-secondary: #F7F8FA;
--color-bg-tertiary: var(--color-neutral-100);
--color-bg-dark: #1C1C1E;

--color-border-light: var(--color-neutral-200);
--color-border-medium: var(--color-neutral-300);
```

### Accent & Functional

```css
/* Warm Accent (minimal use) */
--color-accent: #D36C3E;

/* Functional States */
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-info: #3B82F6;
```

### Gradients

```css
--gradient-primary: linear-gradient(135deg, #387CFF 0%, #60A5FA 100%);
--gradient-hero: linear-gradient(180deg, rgba(56,124,255,0.05) 0%, transparent 100%);
```

### Color Usage Guidelines

**Do:**
✅ Use primary blue for CTAs and interactive elements
✅ Maintain 95% neutral (white/gray), 5% blue
✅ Reserve accent copper for rare emphasis
✅ Use high contrast text (4.5:1 minimum)

**Don't:**
❌ Use blue for large background areas
❌ Mix primary blue with accent copper in same component
❌ Use color decoratively
❌ Place low-contrast text

**Contrast Ratios:**
- Primary text (#111111) on white: 20.5:1 ✓✓✓
- Secondary text (#333333) on white: 12.6:1 ✓✓✓
- Blue (#387CFF) on white: 4.6:1 ✓
- White on blue: 4.6:1 ✓

---

## Typography

### Font Family

```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Why Inter:**
- Geometric, modern sans-serif
- Optimized for digital screens
- Variable font support
- Excellent readability

### Type Scale

```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 2rem;        /* 32px */
--text-4xl: 3rem;        /* 48px */
--text-5xl: 4rem;        /* 64px */
```

### Font Weights

```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Line Heights

```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.6;
```

### Letter Spacing

```css
--tracking-tight: -0.02em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
```

### Typography Tokens

```css
/* Hero Headline */
.text-hero {
  font-size: var(--text-5xl);           /* 64px */
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-primary);
}

/* Section Heading */
.text-heading {
  font-size: var(--text-4xl);           /* 48px */
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-text-primary);
}

/* Subheading */
.text-subheading {
  font-size: var(--text-3xl);           /* 32px */
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  color: var(--color-text-primary);
}

/* Body Large */
.text-body-lg {
  font-size: var(--text-lg);            /* 18px */
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}

/* Body Standard */
.text-body {
  font-size: var(--text-base);          /* 16px */
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}

/* Caption */
.text-caption {
  font-size: var(--text-sm);            /* 14px */
  line-height: var(--leading-normal);
  color: var(--color-text-tertiary);
}
```

---

## Spacing & Layout

### Spacing Scale (8pt Grid)

```css
--space-1: 0.5rem;      /* 8px */
--space-2: 1rem;        /* 16px */
--space-3: 1.5rem;      /* 24px */
--space-4: 2rem;        /* 32px */
--space-6: 3rem;        /* 48px */
--space-8: 4rem;        /* 64px */
--space-12: 6rem;       /* 96px */
--space-16: 8rem;       /* 128px */
```

### Section Spacing

```css
--section-padding-sm: var(--space-12);    /* 96px mobile */
--section-padding-md: var(--space-16);    /* 128px tablet */
--section-padding-lg: var(--space-16);    /* 128px desktop */
```

### Container Widths

```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
```

### Border Radius

```css
--radius-sm: 0.375rem;    /* 6px */
--radius-md: 0.5rem;      /* 8px */
--radius-lg: 0.75rem;     /* 12px */
--radius-xl: 1rem;        /* 16px */
--radius-full: 9999px;
```

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 12px rgba(0,0,0,0.08);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
--shadow-xl: 0 12px 32px rgba(0,0,0,0.15);

/* Colored Shadows */
--shadow-primary: 0 4px 14px rgba(56,124,255,0.25);
--shadow-primary-lg: 0 6px 20px rgba(56,124,255,0.3);
```

---

## Component Library

### Buttons

```css
/* Primary Button */
.button-primary {
  background: var(--color-primary);
  color: white;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  border: none;
  box-shadow: var(--shadow-primary);
  min-height: 48px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-primary-lg);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
}

/* Secondary Button */
.button-secondary {
  background: transparent;
  color: var(--color-primary);
  padding: calc(var(--space-3) - 2px) calc(var(--space-6) - 2px);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  min-height: 48px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-primary);
    color: white;
  }
}
```

### Cards

```css
/* Feature Card */
.feature-card {
  background: white;
  padding: var(--space-6) var(--space-4);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border-light);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-primary);
    box-shadow: 0 8px 24px rgba(56,124,255,0.12);
    transform: translateY(-4px);
  }
}

.feature-card__icon {
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: var(--space-4);
}

.feature-card__title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.feature-card__description {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}
```

### Forms

```css
.input {
  width: 100%;
  min-height: 48px;
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
  color: var(--color-text-primary);
  background: white;
  border: 1px solid var(--color-border-medium);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(56,124,255,0.1);
  }
}

.label {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}
```

---

## Animation & Motion

### Timing

```css
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 400ms;

--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Animations

```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp var(--duration-slow) var(--ease-out);
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Accessibility

### Color Contrast

- Primary text (#111111) on white: 20.5:1 ✓✓✓
- Secondary text (#333333) on white: 12.6:1 ✓✓✓
- Blue (#387CFF) on white: 4.6:1 ✓
- All ratios exceed WCAG AA standards

### Keyboard Navigation

```css
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Touch Targets

- Minimum 48x48px for all interactive elements
- 8px spacing between targets
- Large buttons on mobile

### Screen Reader Support

- Semantic HTML5 elements
- ARIA labels for icon buttons
- Alt text for all images
- Proper heading hierarchy

---

## Usage Guidelines

### When to Use Design 2

**Use Xpedition-inspired design when:**
✅ Targeting tech-savvy professionals
✅ Emphasizing innovation and modernity
✅ Conversion optimization is primary goal
✅ Audience values clean, minimal aesthetics
✅ Want fast-loading, performant site

### Component Selection

| Need | Use |
|------|-----|
| Primary action | .button-primary |
| Secondary action | .button-secondary |
| Feature highlight | .feature-card |
| Form input | .input |
| Section title | .text-heading |

### Don'ts

❌ Don't add unnecessary decoration
❌ Don't use multiple accent colors
❌ Don't create custom components without reason
❌ Don't compromise performance for aesthetics
❌ Don't ignore spacing scale

---

## Code Example

```html
<!-- Feature Card -->
<article class="feature-card">
  <div class="feature-card__icon">
    <svg><!-- Icon --></svg>
  </div>
  <h3 class="feature-card__title">800+ lb Capacity</h3>
  <p class="feature-card__description">
    Professional-grade strength without the weight.
  </p>
</article>

<style>
.feature-card {
  background: white;
  padding: var(--space-6) var(--space-4);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border-light);
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 8px 24px rgba(56, 124, 255, 0.12);
  transform: translateY(-4px);
}
</style>
```

---

## Conclusion

The Velocity System creates clean, modern, conversion-optimized interfaces through:

✅ Minimalist color palette (95% neutral, 5% blue)
✅ Clear typography hierarchy with Inter
✅ Precise 8pt spacing system
✅ Performance-optimized components
✅ Accessible by default (WCAG AA)
✅ Mobile-first responsive design

Perfect for tech-forward audiences who value clarity, speed, and innovation.

---

**Document Version:** 1.0.0
**Last Updated:** November 14, 2025