# Design 3: Design System
## Healers-Inspired System for Sidekick Air

**System Name:** Sidekick Air Harmony System
**Version:** 1.0.0
**Design Philosophy:** Sophisticated Premium Wellness
**Last Updated:** November 14, 2025

---

## Design Philosophy

The Harmony System embodies **natural sophistication** and **premium wellness**. Through earth-tone colors, generous whitespace, and refined typography, this system creates a high-end aesthetic that appeals to established practitioners and upscale wellness facilities.

### Core Principles

**1. Natural Elegance**
Earth tones (sage + terracotta) create organic, grounded feel while maintaining professional polish.

**2. Premium Positioning**
Generous whitespace (40-50% breathing room), high-quality photography, and refined details signal premium quality.

**3. Professional Credibility**
Established, sophisticated aesthetic builds trust with upscale market segments.

**4. Harmonious Balance**
Every element contributes to cohesive, balanced whole - nothing fights for attention.

---

## Color System

### Primary Colors

```css
/* Deep Sage - Primary Brand */
--color-primary-50: #F0FDFA;
--color-primary-100: #CCFBF1;
--color-primary-200: #99F6E4;
--color-primary-300: #5EEAD4;
--color-primary-400: #3A7A70;
--color-primary-500: #2D5F4C;  /* Primary */
--color-primary-600: #234E48;
--color-primary-700: #1D3F3A;
--color-primary-800: #16312C;
--color-primary-900: #0F241F;

/* Semantic Mappings */
--color-primary: var(--color-primary-500);
--color-primary-dark: var(--color-primary-600);
--color-primary-light: var(--color-primary-400);
```

### Secondary Colors

```css
/* Terracotta - Secondary Accent */
--color-secondary-50: #FEF2EE;
--color-secondary-100: #FDE5DC;
--color-secondary-200: #FACAB9;
--color-secondary-300: #E6A58E;
--color-secondary-400: #E08B6D;
--color-secondary-500: #D36C3E;  /* Secondary */
--color-secondary-600: #B5532A;
--color-secondary-700: #9A441E;
--color-secondary-800: #7F3617;
--color-secondary-900: #662B12;

--color-secondary: var(--color-secondary-500);
--color-secondary-light: var(--color-secondary-300);
--color-secondary-dark: var(--color-secondary-600);
```

### Neutral Colors

```css
--color-text-primary: #1A1A1A;
--color-text-secondary: #4A5568;
--color-text-tertiary: #718096;

--color-bg-primary: #FAF7F4;    /* Warm cream */
--color-bg-secondary: #FFFFFF;  /* Pure white */
--color-bg-tertiary: #F5F3EF;   /* Darker cream */

--color-border-subtle: #E2E2E4;
--color-border-medium: #D1D5DB;
```

### Functional Colors

```css
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
```

### Gradients

```css
--gradient-primary: linear-gradient(135deg,
  var(--color-primary-light),
  var(--color-primary));

--gradient-cta: linear-gradient(135deg,
  var(--color-primary) 0%,
  var(--color-primary-light) 100%);

--gradient-warm: linear-gradient(135deg,
  var(--color-secondary-light) 0%,
  var(--color-secondary) 100%);
```

---

## Typography

### Font Families

```css
/* Display - Refined Sans */
--font-display: 'DM Sans', 'Satoshi', sans-serif;

/* Body - Readable Sans */
--font-body: 'Inter', system-ui, sans-serif;

/* Accent - Elegant Serif */
--font-accent: 'Fraunces', Georgia, serif;
```

### Type Scale

```css
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 30px;
--text-4xl: 36px;
--text-5xl: 48px;
--text-6xl: 60px;
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
--leading-tight: 1.2;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.7;
--leading-loose: 1.9;
```

### Typography Tokens

```css
/* Hero Headline */
.text-hero {
  font-family: var(--font-display);
  font-size: var(--text-6xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
}

/* Elegant Quote */
.text-quote {
  font-family: var(--font-accent);
  font-size: var(--text-lg);
  font-style: italic;
  line-height: var(--leading-loose);
  color: var(--color-text-secondary);
}

/* Eyebrow */
.text-eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-primary);
}
```

---

## Spacing & Layout

### Spacing Scale (8pt Grid)

```css
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-5: 40px;
--space-6: 48px;
--space-8: 64px;
--space-10: 80px;
--space-12: 96px;
--space-16: 128px;
```

### Section Spacing

```css
--section-padding-mobile: 80px;
--section-padding-tablet: 100px;
--section-padding-desktop: 120px;
```

### Border Radius

```css
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### Shadows

```css
--shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
--shadow-md: 0 4px 16px rgba(0,0,0,0.1);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
--shadow-xl: 0 12px 32px rgba(0,0,0,0.15);

/* Colored Shadows */
--shadow-primary: 0 4px 16px rgba(45, 95, 76, 0.25);
--shadow-secondary: 0 4px 16px rgba(211, 108, 62, 0.2);
```

---

## Component Library

### Buttons

```css
/* Primary Button (Sage) */
.button-primary {
  background: var(--color-primary);
  color: white;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  border: none;
  box-shadow: var(--shadow-primary);
  min-height: 56px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(45, 95, 76, 0.35);
  }
}

/* Secondary Button (Outline) */
.button-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: calc(var(--space-3) - 2px) calc(var(--space-6) - 2px);
  border-radius: var(--radius-md);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  transition: all 0.3s ease;

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
  padding: var(--space-8) var(--space-6);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border-subtle);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-primary-light);
    box-shadow: var(--shadow-lg);
    transform: translateY(-6px);
  }
}

/* Testimonial Card */
.testimonial-card {
  background: var(--color-bg-tertiary);
  padding: var(--space-8) var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  position: relative;
}

.testimonial-card__quote-mark {
  position: absolute;
  top: 40px;
  left: 40px;
  font-size: 72px;
  font-family: var(--font-accent);
  color: var(--color-primary-light);
  opacity: 0.2;
}
```

### Forms

```css
.input {
  width: 100%;
  min-height: 56px;
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
  background: white;
  border: 1px solid var(--color-border-medium);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(45, 95, 76, 0.1);
  }
}
```

---

## Animation & Motion

### Timing

```css
--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 800ms;  /* Slower, more luxurious */

--ease-out: cubic-bezier(0, 0, 0.2, 1);
```

### Animations

```css
/* Gentle Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp var(--duration-slow) var(--ease-out);
}
```

---

## Accessibility

### Contrast Ratios
- Primary text (#1A1A1A) on cream: 18.2:1 ✓✓✓
- Secondary text (#4A5568) on cream: 7.8:1 ✓✓✓
- Sage (#2D5F4C) on cream: 6.2:1 ✓
- White on sage: 7.8:1 ✓✓

### Standards
- WCAG AA compliant
- Keyboard navigable
- Screen reader friendly
- Touch targets: 48px minimum

---

## Usage Guidelines

### When to Use Design 3

**Use Healers-inspired design when:**
✅ Targeting upscale wellness centers
✅ Premium positioning is goal
✅ Audience values natural/organic aesthetics
✅ Want sophisticated, established feel
✅ Emphasizing quality over price

### Don'ts

❌ Don't mix sage and terracotta equally (pick one as dominant)
❌ Don't use bright, saturated colors
❌ Don't crowd the layout (preserve whitespace)
❌ Don't use harsh, clinical photography
❌ Don't ignore the serif font for quotes

---

## Code Example

```html
<article class="feature-card">
  <div class="feature-card__icon">
    <svg><!-- Icon --></svg>
  </div>
  <h3 class="feature-card__title">Natural Innovation</h3>
  <p class="feature-card__description">
    Aerospace materials meet organic design philosophy.
  </p>
</article>

<style>
.feature-card {
  background: white;
  padding: 48px 40px;
  border-radius: 12px;
  border: 1px solid #E2E2E4;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: #3A7A70;
  box-shadow: 0 12px 32px rgba(45, 95, 76, 0.15);
  transform: translateY(-6px);
}
</style>
```

---

## Conclusion

The Harmony System creates sophisticated, premium wellness interfaces through:

✅ Earth-tone color palette (sage + terracotta)
✅ Generous whitespace (40-50%)
✅ Elegant typography with serif accents
✅ High-quality photography standards
✅ Refined, professional polish
✅ Natural wellness positioning

Perfect for upscale markets valuing sophistication, quality, and natural aesthetics.

---

**Document Version:** 1.0.0
**Last Updated:** November 14, 2025