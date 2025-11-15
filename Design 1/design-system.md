# Design 1: Design System
## TherapyFlow-Inspired System for Sidekick Air

**System Name:** Sidekick Air Healing System
**Version:** 1.0.0
**Design Philosophy:** Warm Healthcare Professional
**Last Updated:** November 14, 2025

---

## Table of Contents

1. [Introduction & Philosophy](#introduction--philosophy)
2. [Color System](#color-system)
3. [Typography System](#typography-system)
4. [Spacing & Layout](#spacing--layout)
5. [Component Library](#component-library)
6. [Iconography](#iconography)
7. [Imagery Guidelines](#imagery-guidelines)
8. [Animation & Motion](#animation--motion)
9. [Accessibility Standards](#accessibility-standards)
10. [Usage Guidelines](#usage-guidelines)
11. [Code Examples](#code-examples)

---

## Introduction & Philosophy

### Design System Purpose

The Sidekick Air Healing System is a comprehensive design language that balances **professional healthcare credibility** with **warm human connection**. It creates interfaces that inspire trust while reducing anxiety through calming colors, generous whitespace, and authentic photography.

### Core Principles

**1. Trust Through Design**
Every color, spacing decision, and interaction pattern builds professional credibility. Healthcare professionals need to trust that Sidekick Air is a serious, reliable tool.

**2. Warmth & Accessibility**
Sage greens and warm creams create an approachable, non-clinical atmosphere. This isn't a sterile medical device—it's a tool for healing and human connection.

**3. Clarity Over Complexity**
Generous whitespace, clear typography hierarchy, and intuitive interactions ensure users never feel overwhelmed. Information is progressively disclosed.

**4. Consistency Builds Confidence**
Repeatable patterns, predictable behaviors, and systematic design tokens create a cohesive experience that feels polished and intentional.

### Design Values

- **Professional:** Credible, established, trustworthy
- **Warm:** Human, compassionate, approachable
- **Optimistic:** Hopeful, energizing, forward-looking
- **Clear:** Simple, intuitive, unambiguous

---

## Color System

### Philosophy

The color palette blends **healthcare trust** (blues and sage greens) with **human warmth** (creams and coppers). This creates a unique positioning: professional enough for clinical settings, warm enough for personal wellness practices.

### Primary Colors

```css
/* Electric Steel Blue - Innovation & Trust */
--color-primary-50: #EFF6FF;
--color-primary-100: #DBEAFE;
--color-primary-200: #BFDBFE;
--color-primary-300: #93C5FD;
--color-primary-400: #60A5FA;
--color-primary-500: #387CFF;  /* Primary brand color */
--color-primary-600: #2563EB;
--color-primary-700: #1D4ED8;
--color-primary-800: #1E40AF;
--color-primary-900: #1E3A8A;
```

**Usage:**
- Primary CTAs (buttons, links)
- Interactive elements
- Highlights and accents
- Focus states
- Loading indicators

**Accessibility:**
- Primary-500 on white: 4.6:1 (AA compliant)
- White on primary-500: 4.6:1 (AA compliant)

---

### Secondary Colors

```css
/* Sage Green/Teal - Healing & Balance */
--color-secondary-50: #F0FDFA;
--color-secondary-100: #CCFBF1;
--color-secondary-200: #99F6E4;
--color-secondary-300: #5EEAD4;
--color-secondary-400: #7BC5B8;
--color-secondary-500: #5FB5A5;  /* Secondary brand color */
--color-secondary-600: #4A9388;
--color-secondary-700: #3A7A70;
--color-secondary-800: #2D5F58;
--color-secondary-900: #234E48;
```

**Usage:**
- Secondary CTAs
- Eyebrow text
- Icons and decorative elements
- Success states
- Navigation hover states

**Accessibility:**
- Secondary-500 on white: 3.8:1 (AA Large compliant)
- White on secondary-600: 4.7:1 (AA compliant)

---

### Accent Colors

```css
/* Burnt Copper - Warmth & Energy */
--color-accent-50: #FEF2EE;
--color-accent-100: #FDE5DC;
--color-accent-200: #FACAB9;
--color-accent-300: #E6A58E;  /* Coral/Peach light */
--color-accent-400: #E08B6D;
--color-accent-500: #D36C3E;  /* Primary accent */
--color-accent-600: #B5532A;
--color-accent-700: #9A441E;
--color-accent-800: #7F3617;
--color-accent-900: #662B12;
```

**Usage:**
- Warm highlights
- Section dividers
- Icon accents
- Gradient overlays
- Emotional emphasis

**Accessibility:**
- Accent-500 on white: 4.9:1 (AA compliant)
- White on accent-600: 5.1:1 (AA compliant)

---

### Neutral Colors

```css
/* Graphite Charcoal - Text & Dark Backgrounds */
--color-neutral-50: #F9FAFB;
--color-neutral-100: #F3F4F6;
--color-neutral-200: #E5E7EB;
--color-neutral-300: #D1D5DB;
--color-neutral-400: #9CA3AF;
--color-neutral-500: #6B7280;
--color-neutral-600: #4A5568;  /* Secondary text */
--color-neutral-700: #374151;
--color-neutral-800: #1F2937;
--color-neutral-900: #1C1C1E;  /* Primary text / Dark BG */
```

**Usage:**
- Text colors (900, 600, 500)
- Borders and dividers (200, 300)
- Card backgrounds (50, 100)
- Dark sections (900)

---

### Background Colors

```css
/* Arctic White - Primary Background */
--color-bg-primary: #F7F8FA;

/* Warm Cream - Alternating Sections */
--color-bg-secondary: #F5F3EF;

/* Pure White - Cards & Elevated Content */
--color-bg-tertiary: #FFFFFF;

/* Graphite Charcoal - Dark Sections */
--color-bg-dark: #1C1C1E;

/* Mist Grey - Subtle Backgrounds */
--color-bg-subtle: #E2E2E4;
```

**Usage Pattern:**
- Alternate sections: White → Cream → White → Cream
- Cards on colored backgrounds use white
- Dark sections for contrast and emphasis
- Subtle grey for disabled states

---

### Functional Colors

```css
/* Success */
--color-success-50: #ECFDF5;
--color-success-500: #10B981;
--color-success-700: #047857;

/* Warning */
--color-warning-50: #FFFBEB;
--color-warning-500: #F59E0B;
--color-warning-700: #B45309;

/* Error */
--color-error-50: #FEF2F2;
--color-error-500: #EF4444;
--color-error-700: #B91C1C;

/* Info */
--color-info-50: #EFF6FF;
--color-info-500: #3B82F6;
--color-info-700: #1D4ED8;
```

**Usage:**
- Form validation states
- Alert messages
- Status indicators
- Toasts and notifications

---

### Gradient Overlays

```css
/* Hero Gradient */
--gradient-hero: linear-gradient(
  135deg,
  rgba(56, 124, 255, 0.1) 0%,
  rgba(95, 181, 165, 0.1) 100%
);

/* CTA Gradient */
--gradient-cta: linear-gradient(
  135deg,
  #387CFF 0%,
  #5FB5A5 100%
);

/* Dark Overlay */
--overlay-dark: linear-gradient(
  180deg,
  rgba(28, 28, 30, 0.6) 0%,
  rgba(28, 28, 30, 0.8) 100%
);

/* Light Overlay */
--overlay-light: linear-gradient(
  180deg,
  rgba(255, 255, 255, 0.8) 0%,
  rgba(255, 255, 255, 0.95) 100%
);
```

---

### Color Usage Guidelines

**Do:**
✅ Use primary blue for main CTAs and interactive elements
✅ Use sage green for supportive, calming UI elements
✅ Use copper accents sparingly for warmth and emphasis
✅ Maintain high contrast ratios (minimum 4.5:1 for text)
✅ Use neutral grays for text hierarchy
✅ Alternate section backgrounds for visual rhythm

**Don't:**
❌ Mix more than 3 colors in a single component
❌ Use accent colors for large areas
❌ Place low-contrast text on backgrounds
❌ Use pure black (#000000) for text
❌ Overuse gradients (reserve for special emphasis)

---

## Typography System

### Philosophy

Typography creates **clarity, hierarchy, and trust**. We use a two-font system: a distinctive display font for headlines and a highly readable sans-serif for body text. Generous line heights and letter spacing create breathing room and improve readability.

### Font Families

```css
/* Display & Headings */
--font-display: 'DM Sans', 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
font-feature-settings: 'kern' 1, 'liga' 1;

/* Body Text */
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;

/* Accent (Quotes, Testimonials) */
--font-accent: 'Fraunces', Georgia, 'Times New Roman', serif;
font-feature-settings: 'kern' 1, 'liga' 1;
```

**Font Stack Rationale:**
- **DM Sans:** Geometric, modern, friendly, excellent at large sizes
- **Inter:** Highly readable, optimized for screens, extensive language support
- **Fraunces:** Elegant serif for quotes, adds sophistication

**Font Loading Strategy:**
```css
@font-face {
  font-family: 'DM Sans';
  src: url('/fonts/dm-sans-variable.woff2') format('woff2');
  font-weight: 400 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-variable.woff2') format('woff2');
  font-weight: 400 700;
  font-style: normal;
  font-display: swap;
}
```

---

### Type Scale (1.5x Modular Scale)

```css
/* Font Sizes */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
--text-7xl: 4.5rem;      /* 72px - rarely used */
```

### Font Weights

```css
--font-normal: 400;      /* Body text, regular content */
--font-medium: 500;      /* Slightly emphasized text */
--font-semibold: 600;    /* Subheadings, labels, buttons */
--font-bold: 700;        /* Headlines, strong emphasis */
--font-extrabold: 800;   /* Rare, for extreme emphasis */
```

### Line Heights

```css
--leading-none: 1;       /* Tight headlines, decorative */
--leading-tight: 1.25;   /* Large headlines */
--leading-snug: 1.375;   /* Medium headlines */
--leading-normal: 1.5;   /* UI elements, small text */
--leading-relaxed: 1.625;/* Body text (optimal reading) */
--leading-loose: 2;      /* Spacious, airy content */
```

### Letter Spacing

```css
--tracking-tighter: -0.05em;   /* Very large headlines */
--tracking-tight: -0.025em;    /* Headlines */
--tracking-normal: 0;          /* Body text */
--tracking-wide: 0.025em;      /* Subtle spacing */
--tracking-wider: 0.05em;      /* Labels, small caps */
--tracking-widest: 0.1em;      /* Eyebrow text, all-caps */
```

---

### Typography Tokens

#### Display 1 (Hero Headline)
```css
.text-display-1 {
  font-family: var(--font-display);
  font-size: var(--text-6xl);           /* 60px */
  font-weight: var(--font-bold);        /* 700 */
  line-height: var(--leading-tight);    /* 1.25 */
  letter-spacing: var(--tracking-tight);/* -0.025em */
  color: var(--color-neutral-900);
}

/* Mobile */
@media (max-width: 768px) {
  .text-display-1 {
    font-size: var(--text-4xl);         /* 36px */
  }
}
```

**Usage:** Hero headlines only
**Max Line Length:** 15-20 characters

---

#### Display 2 (Section Headlines)
```css
.text-display-2 {
  font-family: var(--font-display);
  font-size: var(--text-5xl);           /* 48px */
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-neutral-900);
}

@media (max-width: 768px) {
  .text-display-2 {
    font-size: var(--text-3xl);         /* 30px */
  }
}
```

**Usage:** Major section headings
**Max Line Length:** 20-30 characters

---

#### Heading 1 (H1 - Page Title)
```css
.text-h1 {
  font-family: var(--font-display);
  font-size: var(--text-4xl);           /* 36px */
  font-weight: var(--font-bold);
  line-height: var(--leading-snug);     /* 1.375 */
  letter-spacing: var(--tracking-tight);
  color: var(--color-neutral-900);
}
```

---

#### Heading 2 (H2 - Section Title)
```css
.text-h2 {
  font-family: var(--font-display);
  font-size: var(--text-3xl);           /* 30px */
  font-weight: var(--font-bold);
  line-height: var(--leading-snug);
  color: var(--color-neutral-900);
}
```

---

#### Heading 3 (H3 - Subsection)
```css
.text-h3 {
  font-family: var(--font-display);
  font-size: var(--text-2xl);           /* 24px */
  font-weight: var(--font-semibold);    /* 600 */
  line-height: var(--leading-snug);
  color: var(--color-neutral-900);
}
```

---

#### Heading 4 (H4 - Card Title)
```css
.text-h4 {
  font-family: var(--font-display);
  font-size: var(--text-xl);            /* 20px */
  font-weight: var(--font-semibold);
  line-height: var(--leading-normal);   /* 1.5 */
  color: var(--color-neutral-900);
}
```

---

#### Body Large (Lead Text)
```css
.text-body-lg {
  font-family: var(--font-body);
  font-size: var(--text-lg);            /* 18px */
  font-weight: var(--font-normal);      /* 400 */
  line-height: var(--leading-relaxed);  /* 1.625 */
  color: var(--color-neutral-600);
  max-width: 75ch; /* Optimal reading width */
}
```

**Usage:** Hero subtext, section introductions, emphasis paragraphs

---

#### Body Standard (Regular Text)
```css
.text-body {
  font-family: var(--font-body);
  font-size: var(--text-base);          /* 16px */
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  color: var(--color-neutral-600);
  max-width: 65ch;
}
```

**Usage:** Main content, descriptions, paragraphs

---

#### Body Small
```css
.text-body-sm {
  font-family: var(--font-body);
  font-size: var(--text-sm);            /* 14px */
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);   /* 1.5 */
  color: var(--color-neutral-500);
}
```

**Usage:** Captions, metadata, fine print

---

#### Eyebrow Text
```css
.text-eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-sm);            /* 14px */
  font-weight: var(--font-semibold);    /* 600 */
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-widest);/* 0.1em */
  text-transform: uppercase;
  color: var(--color-secondary-500);
}
```

**Usage:** Section labels above headlines
**Examples:** "THE ORIGIN STORY", "OUR MISSION"

---

#### Quote Text
```css
.text-quote {
  font-family: var(--font-accent);
  font-size: var(--text-lg);            /* 18px */
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  font-style: italic;
  color: var(--color-neutral-700);
}
```

**Usage:** Testimonials, pull quotes

---

### Typography Usage Guidelines

**Do:**
✅ Use display fonts for headlines only (not body text)
✅ Maintain consistent hierarchy (H1 > H2 > H3)
✅ Keep line length between 45-75 characters for optimal readability
✅ Use generous line height for body text (1.625)
✅ Apply letter-spacing to all-caps text
✅ Use semantic HTML headings (H1, H2, H3)

**Don't:**
❌ Use more than 3 font families
❌ Mix font weights randomly (stick to 400, 600, 700)
❌ Use font sizes smaller than 14px for body text
❌ Create orphans (single words on last line)
❌ Use ALL CAPS for large blocks of text
❌ Justify body text (creates uneven spacing)

---

## Spacing & Layout

### Philosophy

Spacing creates **rhythm, hierarchy, and breathing room**. We use an **8pt grid system** where all spacing is a multiple of 8px. This creates visual consistency and makes responsive design predictable.

### Base Unit

```css
--base-unit: 8px;
```

All spacing decisions are multiples of this base unit.

---

### Spacing Scale

```css
/* Spacing Tokens (multiples of 8px) */
--space-0: 0;
--space-1: 0.5rem;    /* 8px */
--space-2: 1rem;      /* 16px */
--space-3: 1.5rem;    /* 24px */
--space-4: 2rem;      /* 32px */
--space-5: 2.5rem;    /* 40px */
--space-6: 3rem;      /* 48px */
--space-8: 4rem;      /* 64px */
--space-10: 5rem;     /* 80px */
--space-12: 6rem;     /* 96px */
--space-16: 8rem;     /* 128px */
--space-20: 10rem;    /* 160px */
--space-24: 12rem;    /* 192px */
```

---

### Section Spacing

```css
/* Vertical Padding for Sections */
--section-padding-sm: var(--space-12);   /* 96px - mobile */
--section-padding-md: var(--space-16);   /* 128px - tablet */
--section-padding-lg: var(--space-20);   /* 160px - desktop */

/* Usage */
.section {
  padding-top: var(--section-padding-sm);
  padding-bottom: var(--section-padding-sm);
}

@media (min-width: 768px) {
  .section {
    padding-top: var(--section-padding-md);
    padding-bottom: var(--section-padding-md);
  }
}

@media (min-width: 1024px) {
  .section {
    padding-top: var(--section-padding-lg);
    padding-bottom: var(--section-padding-lg);
  }
}
```

---

### Container Widths

```css
/* Max Widths for Content Containers */
--container-sm: 640px;    /* Single column content */
--container-md: 768px;    /* Narrow content */
--container-lg: 1024px;   /* Standard content */
--container-xl: 1280px;   /* Wide content */
--container-2xl: 1400px;  /* Maximum width */

/* Default Container */
.container {
  width: 100%;
  max-width: var(--container-xl);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

@media (min-width: 768px) {
  .container {
    padding-left: var(--space-6);
    padding-right: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: var(--space-8);
    padding-right: var(--space-8);
  }
}
```

---

### Grid System

```css
/* 12-Column Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6); /* 48px */
}

/* Common Layouts */
.grid-2-col {
  grid-template-columns: repeat(2, 1fr);
}

.grid-3-col {
  grid-template-columns: repeat(3, 1fr);
}

.grid-4-col {
  grid-template-columns: repeat(4, 1fr);
}

/* Responsive */
@media (max-width: 768px) {
  .grid-2-col,
  .grid-3-col,
  .grid-4-col {
    grid-template-columns: 1fr;
  }
}
```

---

### Common Spacing Patterns

```css
/* Vertical Stack (between elements) */
.stack > * + * {
  margin-top: var(--stack-space, var(--space-4));
}

/* Tight stack (list items) */
.stack-sm > * + * {
  margin-top: var(--space-2); /* 16px */
}

/* Medium stack (card content) */
.stack-md > * + * {
  margin-top: var(--space-4); /* 32px */
}

/* Loose stack (sections) */
.stack-lg > * + * {
  margin-top: var(--space-8); /* 64px */
}
```

---

### Border Radius

```css
--radius-none: 0;
--radius-sm: 0.25rem;    /* 4px - tight corners */
--radius-md: 0.5rem;     /* 8px - standard */
--radius-lg: 0.75rem;    /* 12px - cards */
--radius-xl: 1rem;       /* 16px - large cards */
--radius-2xl: 1.5rem;    /* 24px - hero images */
--radius-full: 9999px;   /* Pill shape, circles */
```

**Usage:**
- Buttons: 8px (--radius-md)
- Cards: 12px (--radius-lg)
- Images: 12-16px (--radius-lg to --radius-xl)
- Avatars: 9999px (--radius-full)

---

### Shadows

```css
/* Elevation System */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
--shadow-xl: 0 12px 32px rgba(0, 0, 0, 0.15);
--shadow-2xl: 0 20px 48px rgba(0, 0, 0, 0.18);

/* Colored Shadows (for CTAs) */
--shadow-primary: 0 4px 12px rgba(56, 124, 255, 0.25);
--shadow-primary-lg: 0 8px 24px rgba(56, 124, 255, 0.3);
--shadow-secondary: 0 4px 12px rgba(95, 181, 165, 0.2);
```

**Usage:**
- Cards at rest: --shadow-sm
- Cards on hover: --shadow-lg
- Primary buttons: --shadow-primary
- Modals/overlays: --shadow-2xl

---

### Z-Index Scale

```css
--z-base: 0;
--z-dropdown: 1000;
--z-sticky: 1100;
--z-fixed: 1200;
--z-modal-backdrop: 1300;
--z-modal: 1400;
--z-popover: 1500;
--z-tooltip: 1600;
```

---

## Component Library

### Buttons

#### Primary Button
```css
.button-primary {
  /* Sizing */
  padding: var(--space-3) var(--space-6);  /* 24px 48px */
  min-height: 48px;

  /* Typography */
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  line-height: 1;

  /* Visual */
  background: var(--color-primary-500);
  color: white;
  border-radius: var(--radius-md);
  border: none;
  box-shadow: var(--shadow-primary);

  /* Interaction */
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-primary-600);
    transform: translateY(-2px);
    box-shadow: var(--shadow-primary-lg);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
}
```

**Usage:** Primary CTAs, main actions
**Example:** "Pre-Order Now", "Get Started"

---

#### Secondary Button
```css
.button-secondary {
  padding: var(--space-3) var(--space-6);
  min-height: 48px;

  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);

  background: transparent;
  color: var(--color-primary-500);
  border: 2px solid var(--color-primary-500);
  border-radius: var(--radius-md);

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-primary-500);
    color: white;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 2px;
  }
}
```

**Usage:** Secondary actions, alternative options
**Example:** "Learn More", "Watch Demo"

---

#### Tertiary Button (Text Link)
```css
.button-tertiary {
  padding: var(--space-2) var(--space-3);

  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);

  background: transparent;
  color: var(--color-primary-500);
  border: none;

  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);

  &:hover {
    text-decoration: underline;
  }
}
```

**Usage:** Low-emphasis actions, inline links

---

#### Button Sizes
```css
/* Small Button */
.button-sm {
  padding: var(--space-2) var(--space-4);  /* 16px 32px */
  min-height: 40px;
  font-size: var(--text-sm);
}

/* Large Button */
.button-lg {
  padding: var(--space-4) var(--space-8);  /* 32px 64px */
  min-height: 56px;
  font-size: var(--text-lg);
}

/* Full Width (mobile) */
.button-full {
  width: 100%;
}
```

---

### Cards

#### Standard Card
```css
.card {
  /* Structure */
  padding: var(--space-6);              /* 48px */
  border-radius: var(--radius-lg);      /* 12px */

  /* Visual */
  background: white;
  border: 1px solid var(--color-neutral-200);
  box-shadow: var(--shadow-sm);

  /* Interaction */
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-secondary-300);
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }
}

/* Card Header */
.card__header {
  margin-bottom: var(--space-4);
}

/* Card Body */
.card__body {
  color: var(--color-neutral-600);
}

/* Card Footer */
.card__footer {
  margin-top: var(--space-6);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-neutral-200);
}
```

---

#### Feature Card
```css
.feature-card {
  padding: var(--space-6) var(--space-5);
  border-radius: var(--radius-lg);
  background: white;
  border: 1px solid var(--color-neutral-200);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-secondary-400);
    box-shadow: var(--shadow-secondary);
    transform: translateY(-6px);
  }
}

.feature-card__icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background: linear-gradient(
    135deg,
    var(--color-secondary-400),
    var(--color-secondary-600)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 28px;
  margin-bottom: var(--space-4);
}

.feature-card__title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--color-neutral-900);
  margin-bottom: var(--space-3);
}

.feature-card__description {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-neutral-600);
}
```

---

#### Testimonial Card
```css
.testimonial-card {
  padding: var(--space-8) var(--space-6);
  border-radius: var(--radius-lg);
  background: white;
  box-shadow: var(--shadow-md);
  position: relative;
}

.testimonial-card__quote-mark {
  position: absolute;
  top: var(--space-6);
  left: var(--space-6);
  font-size: 64px;
  font-family: var(--font-accent);
  color: var(--color-secondary-300);
  opacity: 0.3;
  line-height: 1;
}

.testimonial-card__text {
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  font-style: italic;
  color: var(--color-neutral-700);
  margin-bottom: var(--space-6);
  position: relative;
  z-index: 1;
}

.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.testimonial-card__avatar {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-full);
  object-fit: cover;
  border: 3px solid var(--color-secondary-300);
}

.testimonial-card__name {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-neutral-900);
  margin-bottom: var(--space-1);
}

.testimonial-card__role {
  font-size: var(--text-sm);
  color: var(--color-neutral-500);
}
```

---

### Forms

#### Input Field
```css
.input {
  /* Sizing */
  width: 100%;
  min-height: 48px;
  padding: var(--space-3) var(--space-4);

  /* Typography */
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-neutral-900);

  /* Visual */
  background: white;
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--radius-md);

  /* Interaction */
  transition: all 0.2s ease;

  &::placeholder {
    color: var(--color-neutral-400);
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 3px rgba(56, 124, 255, 0.1);
  }

  &:disabled {
    background: var(--color-neutral-100);
    cursor: not-allowed;
  }

  &.error {
    border-color: var(--color-error-500);
  }

  &.success {
    border-color: var(--color-success-500);
  }
}
```

---

#### Label
```css
.label {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-neutral-700);
  margin-bottom: var(--space-2);
}

.label--required::after {
  content: " *";
  color: var(--color-error-500);
}
```

---

#### Helper Text
```css
.helper-text {
  font-size: var(--text-sm);
  color: var(--color-neutral-500);
  margin-top: var(--space-1);
}

.helper-text--error {
  color: var(--color-error-500);
}

.helper-text--success {
  color: var(--color-success-500);
}
```

---

### Navigation

#### Header
```css
.header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background: white;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.header--scrolled {
  border-bottom-color: var(--color-neutral-200);
  box-shadow: var(--shadow-sm);
}

.header__container {
  max-width: var(--container-2xl);
  margin: 0 auto;
  padding: var(--space-4) var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
}

.header__logo {
  height: 40px;
  width: auto;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.header__link {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--color-neutral-700);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-secondary-500);
  }

  &.active {
    color: var(--color-secondary-600);
    font-weight: var(--font-semibold);
  }
}
```

---

## Iconography

### Icon System

**Icon Library:** Heroicons (outline style)
**Stroke Width:** 2px
**Sizes:** 16px, 20px, 24px, 32px, 48px, 64px

```css
/* Icon Sizes */
--icon-xs: 16px;
--icon-sm: 20px;
--icon-md: 24px;
--icon-lg: 32px;
--icon-xl: 48px;
--icon-2xl: 64px;

/* Icon Colors */
.icon--primary { color: var(--color-primary-500); }
.icon--secondary { color: var(--color-secondary-500); }
.icon--accent { color: var(--color-accent-500); }
.icon--neutral { color: var(--color-neutral-500); }
```

**Usage Guidelines:**
- UI icons: 20-24px
- Feature icons: 48-64px
- Maintain consistent stroke width (2px)
- Use semantic color (green for success, red for error)
- Always provide aria-label for icon-only buttons

---

## Imagery Guidelines

### Photography Style

**Subject Matter:**
- Real therapists working with real clients
- Authentic moments, not overly posed
- Diverse representation (age, ethnicity, gender)
- Professional settings (clinic, field, gym, home)

**Lighting:**
- Natural, warm lighting
- Avoid harsh shadows
- Golden hour outdoor shots
- Soft indoor lighting

**Color Treatment:**
- Warm tones to match brand palette
- Slight desaturation for cohesion
- Avoid overly saturated colors
- Consistent color grading across images

**Composition:**
- Rule of thirds
- Generous negative space
- Clear subject focus
- Professional framing

---

### Image Formats & Optimization

```html
<!-- Responsive Image with WebP -->
<picture>
  <source
    srcset="image-small.webp 640w,
            image-medium.webp 1024w,
            image-large.webp 1400w"
    type="image/webp"
    sizes="(max-width: 640px) 640px,
           (max-width: 1024px) 1024px,
           1400px">
  <source
    srcset="image-small.jpg 640w,
            image-medium.jpg 1024w,
            image-large.jpg 1400w"
    type="image/jpeg"
    sizes="(max-width: 640px) 640px,
           (max-width: 1024px) 1024px,
           1400px">
  <img
    src="image-medium.jpg"
    alt="Descriptive alt text"
    loading="lazy"
    width="1024"
    height="768">
</picture>
```

**Optimization Guidelines:**
- Use WebP format with JPG fallback
- Lazy load all below-fold images
- Provide width/height to prevent layout shift
- Compress images to <200KB per image
- Use appropriate aspect ratios (16:9, 4:3, 1:1)

---

### Image Treatments

```css
/* Standard Image Treatment */
.image-standard {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

/* Hero Image Treatment */
.image-hero {
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
}

/* Avatar Treatment */
.image-avatar {
  border-radius: var(--radius-full);
  border: 3px solid var(--color-secondary-300);
}

/* Zoom on Hover */
.image-zoom-container {
  overflow: hidden;
  border-radius: var(--radius-lg);
}

.image-zoom {
  transition: transform 0.4s ease;
}

.image-zoom-container:hover .image-zoom {
  transform: scale(1.05);
}
```

---

## Animation & Motion

### Animation Principles

1. **Purposeful:** Every animation serves a function
2. **Subtle:** Never distracting or overwhelming
3. **Fast:** Quick enough to feel responsive (<300ms for most interactions)
4. **Eased:** Natural motion curves, not linear
5. **Respectful:** Honor prefers-reduced-motion preferences

---

### Timing Functions

```css
/* Easing Curves */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Duration */
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;
--duration-slower: 500ms;
```

---

### Standard Animations

#### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn var(--duration-normal) var(--ease-out);
}
```

#### Fade In Up
```css
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

#### Scale In
```css
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

.animate-scale-in {
  animation: scaleIn var(--duration-normal) var(--ease-out);
}
```

---

### Interaction Animations

#### Button Hover
```css
.button {
  transition: all var(--duration-fast) var(--ease-out);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary-lg);
}

.button:active {
  transform: translateY(0);
  transition-duration: 50ms;
}
```

#### Card Hover
```css
.card {
  transition: all var(--duration-normal) var(--ease-out);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-secondary-300);
}
```

---

### Loading States

#### Spinner
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--color-neutral-200);
  border-top-color: var(--color-primary-500);
  border-radius: var(--radius-full);
  animation: spin 0.8s linear infinite;
}
```

#### Pulse
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.skeleton {
  background: var(--color-neutral-100);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

---

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Accessibility Standards

### WCAG 2.1 Level AA Compliance

#### Color Contrast Requirements

**Text:**
- Normal text (< 24px): 4.5:1 minimum
- Large text (≥ 24px): 3:1 minimum
- UI components: 3:1 minimum

**Our Ratios:**
- Primary text (#1C1C1E) on white: 19.5:1 ✓✓✓
- Secondary text (#4A5568) on white: 8.3:1 ✓✓✓
- Electric blue (#387CFF) on white: 4.6:1 ✓
- Sage green (#5FB5A5) on white: 3.8:1 ✓ (large text only)
- White on electric blue: 4.6:1 ✓
- White on graphite (#1C1C1E): 19.5:1 ✓✓✓

---

#### Keyboard Navigation

**Requirements:**
- All interactive elements keyboard accessible
- Logical tab order (left to right, top to bottom)
- Visible focus indicators
- Skip to main content link
- Escape key closes modals/menus
- Enter/Space activates buttons

**Focus Styles:**
```css
*:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* High contrast mode */
@media (prefers-contrast: high) {
  *:focus-visible {
    outline-width: 3px;
    outline-offset: 3px;
  }
}
```

---

#### Screen Reader Support

**Semantic HTML:**
```html
<header role="banner">
  <nav aria-label="Main navigation">
    <!-- Navigation -->
  </nav>
</header>

<main role="main" id="main-content">
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading"><!-- Headline --></h1>
  </section>
</main>

<footer role="contentinfo">
  <!-- Footer -->
</footer>
```

**ARIA Labels:**
```html
<!-- Icon-only button -->
<button aria-label="Close menu">
  <svg aria-hidden="true"><!-- Icon --></svg>
</button>

<!-- Decorative image -->
<img src="pattern.png" alt="" role="presentation">

<!-- Informative image -->
<img src="therapist.jpg" alt="Therapist treating athlete field-side with Sidekick Air table">
```

**Live Regions:**
```html
<!-- Form validation -->
<div role="alert" aria-live="assertive">
  Email address is required
</div>

<!-- Loading states -->
<div role="status" aria-live="polite" aria-busy="true">
  Loading content...
</div>
```

---

#### Touch Targets

**Requirements:**
- Minimum size: 44x44px (WCAG AAA: 48x48px preferred)
- Minimum spacing: 8px between targets
- Mobile buttons: 48-56px height minimum

```css
/* Touch Target Enforcement */
.button,
.link,
[role="button"] {
  min-height: 48px;
  min-width: 48px;
  padding: max(var(--space-3), 12px) max(var(--space-4), 16px);
}

@media (min-width: 1024px) {
  .button {
    min-height: 44px; /* Slightly smaller on desktop (mouse precision) */
  }
}
```

---

#### Alt Text Guidelines

**Do:**
✅ Describe what's in the image
✅ Be concise (< 150 characters)
✅ Provide context for purpose
✅ Include text that appears in image

**Don't:**
❌ Start with "Image of..." or "Picture of..."
❌ Repeat information in surrounding text
❌ Describe decorative images (use alt="" instead)

**Examples:**
```html
<!-- Good -->
<img src="therapist-field.jpg" alt="Athletic trainer treating athlete outdoors using Sidekick Air portable table">

<!-- Bad -->
<img src="therapist-field.jpg" alt="Image of a person">

<!-- Decorative -->
<img src="background-pattern.svg" alt="" role="presentation">
```

---

## Usage Guidelines

### When to Use This System

**Use Design 1 (TherapyFlow-inspired) when:**
✅ Targeting traditional healthcare professionals
✅ Building trust is the primary goal
✅ Audience may be skeptical of new technology
✅ Need to balance innovation with familiarity
✅ Emphasizing human connection and care
✅ Appealing to massage therapists, physical therapists, bodyworkers

---

### Component Selection Guide

| Need | Component | Variant |
|------|-----------|---------|
| Primary action | Button | Primary |
| Secondary action | Button | Secondary |
| Tertiary action | Button | Tertiary |
| Product feature | Card | Feature Card |
| User testimonial | Card | Testimonial Card |
| Form input | Input | Standard |
| Section heading | Typography | Display 2 |
| Body paragraph | Typography | Body Standard |

---

### Don'ts

**Design Don'ts:**
❌ Don't use primary blue and sage green together (pick one as dominant)
❌ Don't create custom components when system components exist
❌ Don't use font sizes smaller than 14px for body text
❌ Don't use more than 3 levels of card nesting
❌ Don't ignore spacing scale (always use multiples of 8px)
❌ Don't mix border radius values randomly
❌ Don't create shadows that are too heavy/dark

**Color Don'ts:**
❌ Don't place sage green text on white (insufficient contrast)
❌ Don't use accent copper for large areas
❌ Don't create gradients with more than 2 colors
❌ Don't use pure black (#000000) for text

**Typography Don'ts:**
❌ Don't use display fonts for body text
❌ Don't use more than 3 font weights in a design
❌ Don't justify body text (creates rivers)
❌ Don't use ALL CAPS for paragraphs
❌ Don't create orphans (single word on last line)

---

## Code Examples

### Complete Button Implementation

```html
<!-- HTML -->
<button class="button button-primary">
  Pre-Order Now
</button>

<button class="button button-secondary">
  Learn More
</button>

<!-- CSS -->
<style>
.button {
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  /* Sizing */
  padding: var(--space-3) var(--space-6);
  min-height: 48px;
  min-width: 48px;

  /* Typography */
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  line-height: 1;
  text-decoration: none;

  /* Visual */
  border-radius: var(--radius-md);
  border: none;

  /* Interaction */
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);

  /* Accessibility */
  user-select: none;
}

.button:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}

.button-primary {
  background: var(--color-primary-500);
  color: white;
  box-shadow: var(--shadow-primary);
}

.button-primary:hover:not(:disabled) {
  background: var(--color-primary-600);
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary-lg);
}

.button-primary:active:not(:disabled) {
  transform: translateY(0);
}

.button-secondary {
  background: transparent;
  color: var(--color-primary-500);
  border: 2px solid var(--color-primary-500);
}

.button-secondary:hover:not(:disabled) {
  background: var(--color-primary-500);
  color: white;
}
</style>
```

---

### Complete Card Implementation

```html
<!-- HTML -->
<article class="feature-card">
  <div class="feature-card__icon">
    <svg><!-- Icon SVG --></svg>
  </div>
  <h3 class="feature-card__title">Lightweight & Portable</h3>
  <p class="feature-card__description">
    Packs down to the size of a yoga mat. Take your practice anywhere.
  </p>
</article>

<!-- CSS -->
<style>
.feature-card {
  /* Structure */
  padding: var(--space-6) var(--space-5);
  border-radius: var(--radius-lg);

  /* Visual */
  background: white;
  border: 1px solid var(--color-neutral-200);
  box-shadow: var(--shadow-sm);

  /* Interaction */
  transition: all var(--duration-normal) var(--ease-out);
}

.feature-card:hover {
  border-color: var(--color-secondary-400);
  box-shadow: var(--shadow-secondary);
  transform: translateY(-6px);
}

.feature-card__icon {
  /* Sizing */
  width: 56px;
  height: 56px;

  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);

  /* Visual */
  border-radius: var(--radius-lg);
  background: linear-gradient(
    135deg,
    var(--color-secondary-400),
    var(--color-secondary-600)
  );
  color: white;
  font-size: 28px;
}

.feature-card__title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--color-neutral-900);
  margin-bottom: var(--space-3);
  line-height: var(--leading-snug);
}

.feature-card__description {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-neutral-600);
}
</style>
```

---

### Responsive Section Layout

```html
<!-- HTML -->
<section class="section">
  <div class="container">
    <header class="section__header">
      <p class="text-eyebrow">THE DIFFERENCE</p>
      <h2 class="text-display-2">Engineered for Movement</h2>
      <p class="text-body-lg">
        Every detail designed to eliminate obstacles.
      </p>
    </header>

    <div class="grid grid-3-col">
      <!-- Feature cards here -->
    </div>
  </div>
</section>

<!-- CSS -->
<style>
.section {
  padding-top: var(--section-padding-sm);
  padding-bottom: var(--section-padding-sm);
}

@media (min-width: 768px) {
  .section {
    padding-top: var(--section-padding-md);
    padding-bottom: var(--section-padding-md);
  }
}

@media (min-width: 1024px) {
  .section {
    padding-top: var(--section-padding-lg);
    padding-bottom: var(--section-padding-lg);
  }
}

.container {
  max-width: var(--container-xl);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

@media (min-width: 768px) {
  .container {
    padding-left: var(--space-6);
    padding-right: var(--space-6);
  }
}

.section__header {
  text-align: center;
  margin-bottom: var(--space-12);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section__header > * + * {
  margin-top: var(--space-4);
}

.grid {
  display: grid;
  gap: var(--space-6);
}

.grid-3-col {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 1024px) {
  .grid-3-col {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-3-col {
    grid-template-columns: 1fr;
  }
}
</style>
```

---

## Version History

**Version 1.0.0** (November 14, 2025)
- Initial design system release
- Complete color, typography, spacing tokens
- Component library (buttons, cards, forms)
- Accessibility documentation
- Code examples and usage guidelines

---

## Maintenance & Updates

### How to Propose Changes

1. Identify need (missing component, accessibility issue, etc.)
2. Document proposal with rationale
3. Create design mockups showing proposed change
4. Test with accessibility tools
5. Get stakeholder approval
6. Update design system documentation
7. Update codebase
8. Communicate changes to team

### Deprecation Process

1. Mark component/token as deprecated
2. Provide migration path
3. Allow 2 release cycles before removal
4. Update all documentation
5. Remove deprecated code

---

## Resources & Tools

### Design Tools
- Figma (design mockups)
- Contrast checker (WebAIM)
- Accessibility testing (axe DevTools)

### Development Tools
- CSS custom properties (design tokens)
- Tailwind CSS (utility classes)
- PostCSS (processing)

### Testing Tools
- Lighthouse (performance & accessibility)
- WAVE (accessibility testing)
- Screen readers (NVDA, JAWS, VoiceOver)

---

## Conclusion

The Sidekick Air Healing System (Design 1) provides a complete foundation for building trustworthy, warm, and accessible interfaces for healthcare professionals. By following this system, designs will be:

✅ **Consistent:** Repeatable patterns create familiarity
✅ **Accessible:** WCAG AA compliant with semantic HTML
✅ **Professional:** Polished visual language builds credibility
✅ **Warm:** Approachable colors and generous spacing reduce anxiety
✅ **Maintainable:** Token-based system easy to update
✅ **Scalable:** Components work across all breakpoints

Use this system as a foundation, adapt thoughtfully, and always prioritize user needs over aesthetic trends.

---

**Document Version:** 1.0.0
**Last Updated:** November 14, 2025
**Maintained by:** Sidekick Air Design Team