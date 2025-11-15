# Design 4: Design System
## Hollow-Inspired System for Sidekick Air

**System Name:** Sidekick Air Stark System
**Version:** 1.0.0
**Design Philosophy:** Bold Minimalist Typography
**Last Updated:** November 14, 2025

---

## Design Philosophy

The Stark System embodies **confident minimalism** and **typographic dominance**. Using a strict monochrome palette and a single typeface, this system creates a bold, timeless aesthetic that differentiates Sidekick Air through what it confidently excludes.

### Core Principles

**1. Restraint as Power**
Less is genuinely more. Every element must earn its place through absolute necessity.

**2. Typography IS Design**
Text itself is the primary visual element, not decoration applied to text.

**3. Timeless Over Trendy**
Design decisions that will remain effective for 5-10 years, not 5-10 months.

**4. Brutalist Honesty**
No decoration, no manipulation, no false sophistication. Honest materials, honest presentation.

---

## Color System

### Monochrome Palette

```css
/* Pure Black & White */
--color-black: #000000;
--color-white: #FFFFFF;

/* Gray Scale (9-step) */
--color-gray-50: #FAFAFA;
--color-gray-100: #F5F5F5;
--color-gray-200: #E5E5E5;
--color-gray-300: #D4D4D4;
--color-gray-400: #A3A3A3;
--color-gray-500: #666666;
--color-gray-600: #525252;
--color-gray-700: #404040;
--color-gray-800: #262626;
--color-gray-900: #171717;

/* Semantic Mappings */
--color-text-primary: var(--color-black);
--color-text-secondary: var(--color-gray-500);
--color-text-tertiary: var(--color-gray-400);

--color-bg-primary: var(--color-white);
--color-bg-secondary: var(--color-gray-100);
--color-bg-dark: var(--color-black);

--color-border: var(--color-gray-200);
```

### Accent Color (Strategic Single Use)

```css
/* Electric Blue - ONE strategic moment only */
--color-accent: #387CFF;
```

**Usage Rule:**
- Use ONLY for primary CTA hover state
- Nowhere else in entire design
- Creates single moment of surprise

### Color Usage Guidelines

**Do:**
✅ Use pure black for headlines
✅ Use gray-500 for body text
✅ Use white backgrounds for 95% of design
✅ Reserve accent blue for ONE interaction only
✅ Embrace high contrast

**Don't:**
❌ Use multiple colors
❌ Add decorative color
❌ Use color to communicate information
❌ Create gradients (except black → transparent for overlays)

**Contrast Ratios:**
- Black on white: 21:1 ✓✓✓ (WCAG AAA)
- Gray-500 on white: 5.7:1 ✓✓ (WCAG AA)
- Gray-400 on white: 3.2:1 (large text only)
- White on black: 21:1 ✓✓✓ (WCAG AAA)

---

## Typography

### Font Family (Single Typeface)

```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

**Why Inter Only:**
- Modern grotesque sans-serif
- Works at all sizes (14px to 120px)
- Variable font provides all weights
- Excellent readability
- No need for multiple fonts

### Type Scale (Extreme Jumps)

```css
/* Dramatic scale for impact */
--text-7xl: 7.5rem;     /* 120px - Hero */
--text-6xl: 6rem;       /* 96px */
--text-5xl: 4.5rem;     /* 72px */
--text-4xl: 3.75rem;    /* 60px */
--text-3xl: 3rem;       /* 48px */
--text-2xl: 2.25rem;    /* 36px */
--text-xl: 1.5rem;      /* 24px */
--text-lg: 1.25rem;     /* 20px */
--text-base: 1.125rem;  /* 18px */
--text-sm: 1rem;        /* 16px */
--text-xs: 0.875rem;    /* 14px */
```

### Font Weights (Two Only)

```css
--font-normal: 400;
--font-bold: 700;
```

**Philosophy:**
- Bold or regular, nothing in between
- No medium (500), no semibold (600)
- Extreme clarity in hierarchy
- Simplifies all design decisions

### Line Heights

```css
--leading-none: 1;
--leading-tight: 1.1;
--leading-snug: 1.3;
--leading-normal: 1.5;
--leading-relaxed: 1.6;
```

### Letter Spacing

```css
--tracking-tighter: -0.05em;  /* Very large headlines only */
--tracking-tight: -0.03em;    /* Large headlines */
--tracking-normal: 0;
--tracking-wide: 0.05em;      /* All-caps labels */
--tracking-wider: 0.15em;     /* Section labels */
```

### Typography Tokens

```css
/* Hero Headline (Extreme Scale) */
.text-hero {
  font-family: var(--font-primary);
  font-size: var(--text-7xl);           /* 120px */
  font-weight: var(--font-bold);
  line-height: var(--leading-none);     /* 1 */
  letter-spacing: var(--tracking-tighter);
  color: var(--color-black);
}

/* Section Heading */
.text-heading {
  font-family: var(--font-primary);
  font-size: var(--text-5xl);           /* 72px */
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-black);
}

/* Feature Title */
.text-feature {
  font-family: var(--font-primary);
  font-size: var(--text-2xl);           /* 36px */
  font-weight: var(--font-bold);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  color: var(--color-black);
}

/* Body Text */
.text-body {
  font-family: var(--font-primary);
  font-size: var(--text-base);          /* 18px */
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}

/* Label (All-Caps) */
.text-label {
  font-family: var(--font-primary);
  font-size: var(--text-sm);            /* 16px */
  font-weight: var(--font-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  color: var(--color-black);
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
--space-5: 2.5rem;      /* 40px */
--space-6: 3rem;        /* 48px */
--space-8: 4rem;        /* 64px */
--space-10: 5rem;       /* 80px */
--space-12: 6rem;       /* 96px */
--space-16: 8rem;       /* 128px */
--space-20: 10rem;      /* 160px */
```

### Section Spacing (Extreme Whitespace)

```css
--section-padding: var(--space-20);     /* 160px vertical */
--section-padding-mobile: var(--space-12); /* 96px mobile */
```

### Container Widths

```css
--container-narrow: 800px;
--container-standard: 1200px;
--container-wide: 1400px;
```

### Border Radius (Sharp Corners)

```css
--radius-none: 0;
--radius-sm: 2px;    /* Barely perceptible */
```

**Philosophy:**
- Sharp corners default (brutalist aesthetic)
- Minimal rounding only for subtle softness
- Never rounded pills or circles (except avatars)

### Shadows (Minimal Use)

```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 8px rgba(0,0,0,0.08);
```

**Philosophy:**
- Avoid shadows when possible
- Prefer borders over shadows
- Flat design default

---

## Component Library

### Buttons

```css
/* Primary Button (Black) */
.button-primary {
  background: var(--color-black);
  color: var(--color-white);
  padding: var(--space-4) var(--space-8);    /* 32px 64px */
  border-radius: var(--radius-none);          /* 0 - sharp */
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  border: none;
  min-height: 64px;
  transition: background 0.3s ease;

  &:hover {
    background: var(--color-accent);          /* ONLY color in design */
  }

  /* No transform, no shadow, no movement */
}

/* Secondary Button (Outline) */
.button-secondary {
  background: transparent;
  color: var(--color-black);
  border: 2px solid var(--color-black);
  padding: calc(var(--space-4) - 2px) calc(var(--space-8) - 2px);
  border-radius: var(--radius-none);
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-black);
    color: var(--color-white);
  }
}
```

### Feature Item

```css
.feature {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  padding-bottom: var(--space-5);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--space-5);
}

.feature__icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: var(--color-black);
}

.feature__title {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--color-black);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-2);
  letter-spacing: var(--tracking-tight);
}

.feature__description {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}
```

### Stat Display

```css
.stat {
  text-align: center;
}

.stat__number {
  font-size: var(--text-6xl);            /* 96px */
  font-weight: var(--font-bold);
  color: var(--color-black);
  line-height: 1;
  margin-bottom: var(--space-3);
  letter-spacing: var(--tracking-tight);
}

.stat__label {
  font-size: var(--text-sm);
  font-weight: var(--font-normal);
  color: var(--color-text-secondary);
  text-transform: lowercase;              /* Minimalist choice */
  letter-spacing: var(--tracking-wide);
}
```

### Forms

```css
.input {
  width: 100%;
  min-height: 64px;
  padding: var(--space-4);
  font-size: var(--text-base);
  background: var(--color-white);
  border: 2px solid var(--color-gray-200);
  border-radius: var(--radius-none);      /* Sharp */
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-black);
  }
}

.label {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  color: var(--color-black);
  margin-bottom: var(--space-2);
}
```

---

## Animation & Motion

### Philosophy: Static Confidence

**No Animations by Default:**
```css
/* Page load: Instant */
/* Scroll: No triggers */
/* Hover: Color change only */
```

**Single Animation: Hover Color**
```css
.button:hover {
  background: var(--color-accent);
  transition: background 0.3s ease;
  /* NO transform */
  /* NO shadow */
  /* NO scale */
}
```

**Rationale:**
- Movement is decoration
- Static is confident
- Faster performance
- Better accessibility (motion-safe by default)
- Timeless (animations date designs)

### Reduced Motion (Already Minimal)

```css
/* No animations to reduce */
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
  }
}
```

---

## Accessibility

### Standards: WCAG AAA

**Contrast Ratios (Exceeds AAA):**
- Black on white: 21:1 ✓✓✓
- Gray-500 on white: 5.7:1 ✓✓
- White on black: 21:1 ✓✓✓
- All text exceeds minimum requirements

**Keyboard Navigation:**
```css
*:focus-visible {
  outline: 2px solid var(--color-black);
  outline-offset: 2px;
}
```

**Touch Targets:**
- Minimum: 48px
- Preferred: 64px (actual implementation)
- Large spacing between targets

**Screen Readers:**
- Semantic HTML5 only
- Proper heading hierarchy
- Alt text for all images
- ARIA labels where needed

**Motion:**
- No animations by default
- Already motion-safe
- Respects user preferences

---

## Usage Guidelines

### When to Use Design 4

**Use Hollow-inspired design when:**
✅ Targeting design-savvy buyers
✅ Want to differentiate from competitors
✅ Emphasizing timeless, premium quality
✅ Audience values bold aesthetic choices
✅ Want design that won't date in 5-10 years
✅ Comfortable with unconventional healthcare marketing

### Don'ts

❌ Don't add color "for fun"
❌ Don't create custom components without reason
❌ Don't use rounded corners (except avatars)
❌ Don't add animations
❌ Don't use multiple fonts
❌ Don't fear whitespace
❌ Don't use medium/semibold weights

---

## Code Example

```html
<section class="feature">
  <div class="feature__icon">
    <svg><!-- Icon --></svg>
  </div>
  <div>
    <h3 class="feature__title">
      Professional Strength
    </h3>
    <p class="feature__description">
      800+ lb capacity without compromise.
    </p>
  </div>
</section>

<style>
.feature {
  display: flex;
  gap: 32px;
  padding-bottom: 40px;
  border-bottom: 1px solid #E5E5E5;
  margin-bottom: 40px;
}

.feature__icon {
  width: 32px;
  flex-shrink: 0;
  color: #000000;
}

.feature__title {
  font-size: 36px;
  font-weight: 700;
  color: #000000;
  line-height: 1.3;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.feature__description {
  font-size: 18px;
  line-height: 1.6;
  color: #666666;
}
</style>
```

---

## Conclusion

The Stark System creates bold, timeless, minimalist interfaces through:

✅ Strict monochrome palette (98% black/white/gray)
✅ Single typeface at dramatic scales
✅ Extreme whitespace (50%+ breathing room)
✅ Sharp corners and flat design
✅ No animations (static confidence)
✅ Typography as primary visual
✅ WCAG AAA accessibility

Perfect for design-conscious buyers who value differentiation, timelessness, and confident restraint.

This is the most daring of the four design systems - bold enough to be memorable, minimal enough to be timeless.

---

**Document Version:** 1.0.0
**Last Updated:** November 14, 2025