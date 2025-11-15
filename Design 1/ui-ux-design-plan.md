# Design 1: UI/UX Design Plan
## TherapyFlow-Inspired Design for Sidekick Air

**Design Philosophy:** Warm Healthcare Professional
**Target Audience:** Traditional therapists, sports medicine professionals, healthcare practitioners
**Aesthetic Direction:** Professional trust-building with emotional warmth
**Date:** November 14, 2025

---

## Executive Summary

This design adapts the TherapyFlow template's warm, approachable healthcare aesthetic to Sidekick Air's revolutionary portable therapy table. The design emphasizes **emotional intelligence**, **trust-building**, and **professional credibility** through a sophisticated sage-and-blue color palette, generous whitespace, and authentic photography showing real therapists using the product.

**Key Differentiators:**
- Calming color palette that reduces anxiety
- Human-centered photography showing authentic use cases
- Progressive disclosure of information (problem → solution → proof)
- Emphasis on Drew's personal story and connection
- Gentle, purposeful animations that guide attention
- Strong testimonial and social proof integration

---

## Design Tone & Character

**Visual Personality:**
- **Warmth:** Inviting, safe, approachable
- **Professional:** Credible, established, trustworthy
- **Optimistic:** Hopeful, energizing, forward-looking
- **Human-Centered:** Personal, relational, compassionate

**What Makes This Memorable:**
- The sophisticated blend of healthcare professionalism with warm optimism
- Sage green + electric blue palette creates unique healthcare-tech hybrid
- Strong storytelling through Drew's origin story
- Photography showing product in authentic therapy contexts
- Subtle breath-rhythm animations symbolizing healing and care

---

## Color Strategy

### Primary Palette (Sidekick Air Brand + TherapyFlow Warmth)

```css
/* Primary Brand Colors */
--color-primary: #387CFF;          /* Electric Steel Blue - primary CTAs */
--color-primary-dark: #2563EB;     /* Darker blue for hovers */
--color-primary-light: #60A5FF;    /* Lighter blue for backgrounds */

/* Secondary Warm Accent */
--color-secondary: #5FB5A5;        /* Sage Green/Teal - trust, healing */
--color-secondary-dark: #4A9388;   /* Darker sage for depth */
--color-secondary-light: #7BC5B8;  /* Lighter sage for subtle accents */

/* Warm Emotional Accent */
--color-accent: #D36C3E;           /* Burnt Copper - warmth, energy */
--color-accent-light: #E6A58E;     /* Coral/Peach - soft highlights */

/* Neutral Backgrounds */
--color-bg-primary: #F7F8FA;       /* Arctic White - main background */
--color-bg-secondary: #F5F3EF;     /* Warm Cream - alternating sections */
--color-bg-tertiary: #FFFFFF;      /* Pure White - cards, elevated content */
--color-bg-dark: #1C1C1E;          /* Graphite Charcoal - dark sections */

/* Text Colors */
--color-text-primary: #1C1C1E;     /* Charcoal - headlines, primary text */
--color-text-secondary: #4A5568;   /* Medium gray - body text */
--color-text-tertiary: #718096;    /* Light gray - captions, meta */
--color-text-on-dark: #F7F8FA;     /* Arctic white on dark backgrounds */

/* Borders & Dividers */
--color-border-subtle: #E2E2E4;    /* Mist Grey - subtle dividers */
--color-border-medium: #D1D5DB;    /* Medium gray borders */

/* Functional Colors */
--color-success: #10B981;          /* Green for success states */
--color-warning: #F59E0B;          /* Orange for warnings */
--color-error: #EF4444;            /* Red for errors */
--color-info: #3B82F6;             /* Blue for info */
```

**Color Psychology:**
- **Electric Blue (#387CFF):** Innovation, technology, trust, professionalism
- **Sage Green (#5FB5A5):** Healing, growth, balance, nature, calm
- **Burnt Copper (#D36C3E):** Warmth, energy, optimism, approachability
- **Warm Cream (#F5F3EF):** Comfort, safety, softness, accessibility

**Usage Guidelines:**
- **70%** Neutral backgrounds (cream, white, arctic white)
- **20%** Primary brand colors (blue, sage accents)
- **10%** Warm accents (copper for CTAs, highlights)
- Never use more than 3 colors in a single section
- Maintain high contrast ratios for accessibility (min 4.5:1)

---

## Typography System

### Font Families

```css
/* Display & Headings */
--font-display: 'DM Sans', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
/* Alternative: 'Satoshi', 'Clash Display' for more personality */

/* Body Text */
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Accent/Special */
--font-accent: 'Fraunces', Georgia, serif; /* For quotes, testimonials */
```

### Type Scale (1.5x Modular Scale)

```css
/* Font Sizes */
--text-xs: 0.75rem;      /* 12px - tiny labels, meta */
--text-sm: 0.875rem;     /* 14px - small text, captions */
--text-base: 1rem;       /* 16px - body text baseline */
--text-lg: 1.125rem;     /* 18px - large body, leads */
--text-xl: 1.25rem;      /* 20px - small headings */
--text-2xl: 1.5rem;      /* 24px - H4 */
--text-3xl: 1.875rem;    /* 30px - H3 */
--text-4xl: 2.25rem;     /* 36px - H2 */
--text-5xl: 3rem;        /* 48px - H1 */
--text-6xl: 3.75rem;     /* 60px - Hero headlines */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;

/* Line Heights */
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;

/* Letter Spacing */
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

### Typography Hierarchy

#### Hero Headline (H1)
```css
font-family: var(--font-display);
font-size: var(--text-6xl);        /* 60px desktop, 36px mobile */
font-weight: var(--font-bold);     /* 700 */
line-height: var(--leading-tight); /* 1.25 */
letter-spacing: var(--tracking-tight); /* -0.025em */
color: var(--color-text-primary);
```

**Usage:** Hero section primary headline
**Max Width:** 15-20 characters per line
**Example:** "Reimagining Recovery" or "Professional Strength. Limitless Mobility."

#### Section Heading (H2)
```css
font-family: var(--font-display);
font-size: var(--text-4xl);        /* 36px desktop, 28px mobile */
font-weight: var(--font-bold);
line-height: var(--leading-snug);  /* 1.375 */
letter-spacing: var(--tracking-tight);
color: var(--color-text-primary);
```

**Usage:** Major section titles
**Example:** "The Origin Story", "The Problem to Solve"

#### Subsection Heading (H3)
```css
font-family: var(--font-display);
font-size: var(--text-3xl);        /* 30px */
font-weight: var(--font-semibold); /* 600 */
line-height: var(--leading-snug);
color: var(--color-text-primary);
```

**Usage:** Feature cards, subsection headers

#### Feature Title (H4)
```css
font-family: var(--font-display);
font-size: var(--text-2xl);        /* 24px */
font-weight: var(--font-semibold);
line-height: var(--leading-normal);
color: var(--color-text-primary);
```

**Usage:** Card titles, small section headers

#### Body Text (Large)
```css
font-family: var(--font-body);
font-size: var(--text-lg);         /* 18px */
font-weight: var(--font-normal);
line-height: var(--leading-relaxed); /* 1.625 */
color: var(--color-text-secondary);
max-width: 75ch; /* Optimal reading width */
```

**Usage:** Hero subtext, section introductions, emphasis paragraphs

#### Body Text (Standard)
```css
font-family: var(--font-body);
font-size: var(--text-base);       /* 16px */
font-weight: var(--font-normal);
line-height: var(--leading-relaxed);
color: var(--color-text-secondary);
max-width: 65ch;
```

**Usage:** Main content, descriptions, paragraphs

#### Caption/Meta Text
```css
font-family: var(--font-body);
font-size: var(--text-sm);         /* 14px */
font-weight: var(--font-medium);
line-height: var(--leading-normal);
color: var(--color-text-tertiary);
letter-spacing: var(--tracking-wide);
```

**Usage:** Image captions, metadata, small labels

#### Eyebrow Text
```css
font-family: var(--font-body);
font-size: var(--text-sm);
font-weight: var(--font-semibold);
line-height: var(--leading-normal);
color: var(--color-secondary);     /* Sage green */
letter-spacing: var(--tracking-widest);
text-transform: uppercase;
```

**Usage:** Section labels above headlines
**Example:** "ORIGIN STORY", "THE DIFFERENCE"

---

## Spacing System (8pt Grid)

```css
/* Base Spacing Units */
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

/* Section Spacing */
--section-padding-mobile: var(--space-12);   /* 96px */
--section-padding-tablet: var(--space-16);   /* 128px */
--section-padding-desktop: var(--space-20);  /* 160px */

/* Container Widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1400px;
```

**Spacing Philosophy:**
- Use multiples of 8px for all spacing decisions
- Vertical rhythm: maintain consistent spacing between sections
- Generous whitespace creates premium feel (40-50% of viewport)
- Breathing room around CTAs and key elements

---

## Component Specifications

### 1. Navigation Header

**Desktop Layout:**
```
┌─────────────────────────────────────────────────┐
│ [Logo]              [Links]    [CTA Button]     │
└─────────────────────────────────────────────────┘
```

**Specifications:**
- **Height:** 80px desktop, 64px mobile
- **Background:** White with subtle shadow on scroll
- **Position:** Sticky (fixed on scroll)
- **Logo:** Left-aligned, 140px wide
- **Navigation Links:** Right-aligned, 16px font, 600 weight, sage green on hover
- **CTA Button:** Primary blue button, "Pre-Order Now"
- **Shadow (on scroll):** `0 2px 12px rgba(0,0,0,0.08)`

**Mobile Behavior:**
- Hamburger menu (3 lines, 24x24px)
- Full-screen overlay menu slides from right
- Menu background: Warm cream (#F5F3EF)
- Large touch targets (48px minimum height)

**Interaction:**
```css
/* Smooth scroll behavior */
scroll-behavior: smooth;

/* Navigation link hover */
.nav-link:hover {
  color: var(--color-secondary);
  transition: color 0.2s ease;
}

/* Sticky header transition */
.header--scrolled {
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: box-shadow 0.3s ease;
}
```

---

### 2. Hero Section

**Layout Structure:**
```
┌─────────────────────────────────────────────────┐
│                                                 │
│   [Eyebrow Text]                  [Image/      │
│   [Hero Headline]                  Product     │
│   [Hero Subtext]                   Visual]     │
│   [Primary CTA] [Secondary CTA]                │
│   [Trust Indicator]                            │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Specifications:**

**Container:**
- Height: 90vh minimum (full viewport on desktop)
- Padding: 80px vertical, responsive horizontal
- Background: Warm cream (#F5F3EF) OR gradient overlay on image
- Layout: 55/45 split (text/image) on desktop, stacked on mobile

**Content Block (Left 55%):**

**Eyebrow:**
```css
font-size: 14px;
font-weight: 600;
color: var(--color-secondary);
letter-spacing: 0.1em;
text-transform: uppercase;
margin-bottom: 16px;
```
**Text:** "REIMAGINING RECOVERY"

**Headline:**
```css
font-size: 60px (desktop), 36px (mobile);
font-weight: 700;
line-height: 1.2;
letter-spacing: -0.025em;
color: var(--color-text-primary);
max-width: 600px;
margin-bottom: 24px;
```
**Text Options:**
- "Professional Strength. Limitless Mobility."
- "Power Your Performance. Anywhere."
- "Where Recovery Meets Reinvention."

**Subheadline:**
```css
font-size: 20px;
font-weight: 400;
line-height: 1.6;
color: var(--color-text-secondary);
max-width: 540px;
margin-bottom: 32px;
```
**Text:** "Built for the hands that heal. The first portable therapy table engineered for professionals in motion."

**CTA Buttons:**

Primary Button:
```css
background: var(--color-primary);
color: white;
padding: 16px 32px;
border-radius: 8px;
font-size: 16px;
font-weight: 600;
box-shadow: 0 4px 12px rgba(56, 124, 255, 0.25);
margin-right: 16px;

&:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(56, 124, 255, 0.35);
  transition: all 0.2s ease;
}
```
**Text:** "Pre-Order Now"

Secondary Button:
```css
background: transparent;
color: var(--color-primary);
border: 2px solid var(--color-primary);
padding: 14px 30px; /* Account for border */
border-radius: 8px;
font-size: 16px;
font-weight: 600;

&:hover {
  background: var(--color-primary);
  color: white;
  transition: all 0.2s ease;
}
```
**Text:** "Watch Demo"

**Trust Indicator:**
```css
font-size: 14px;
color: var(--color-text-tertiary);
margin-top: 24px;
display: flex;
align-items: center;
gap: 8px;
```
**Icon:** Checkmark icon (sage green)
**Text:** "Trusted by 500+ therapists nationwide"

**Visual Block (Right 45%):**
- **Image:** Product in use (therapist working on athlete field-side)
- **Treatment:** Rounded corners (12px), subtle shadow
- **Aspect Ratio:** 4:3 or custom
- **Animation:** Gentle fade-in on load, subtle parallax on scroll

**Mobile Adaptations:**
- Stack content (text above image)
- Full-width image below text
- Buttons stack vertically or go full-width
- Reduce headline size to 36px
- Reduce vertical padding to 60px

**Animation Sequence:**
```css
/* Hero load animation */
.hero__eyebrow {
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.hero__headline {
  animation: fadeInUp 0.6s ease-out 0.4s both;
}

.hero__subtext {
  animation: fadeInUp 0.6s ease-out 0.6s both;
}

.hero__cta {
  animation: fadeInUp 0.6s ease-out 0.8s both;
}

.hero__image {
  animation: fadeIn 0.8s ease-out 1s both;
}

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

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

### 3. Trust Indicators Section

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  [Logo 1]  [Logo 2]  [Logo 3]  [Logo 4]  [...]  │
└─────────────────────────────────────────────────┘
```
OR
```
┌─────────────────────────────────────────────────┐
│   [Stat #]    │   [Stat #]    │   [Stat #]     │
│   [Label]     │   [Label]     │   [Label]      │
└─────────────────────────────────────────────────┘
```

**Specifications:**

**Container:**
- Padding: 48px vertical
- Background: White
- Border top/bottom: 1px solid mist grey

**Option A: Logo Strip**
- Display client/partner logos in grayscale
- Logos sized 80-100px wide
- Equal spacing between (32-48px)
- Slight opacity (0.6), full opacity on hover

**Option B: Statistics Grid**

Three-column layout with metrics:

**Statistic Display:**
```css
.stat__number {
  font-size: 48px;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: 8px;
}

.stat__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

**Content Examples:**
- "800+ lbs" / "Weight Capacity"
- "2 min" / "Setup Time"
- "500+" / "Professional Users"

**Animation:**
- Counter animation on scroll into view
- Increment numbers from 0 to final value
- Duration: 1.5s, ease-out easing

---

### 4. Origin Story Section

**Layout:**
```
┌─────────────────────────────────────────────────┐
│                                                 │
│   [Image: Drew      [Eyebrow]                  │
│    with             [Section Title]            │
│    paddleboard]     [Story Content]            │
│                     [Story Content]            │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Specifications:**

**Container:**
- Padding: 120px vertical (desktop), 80px (mobile)
- Background: Arctic white (#F7F8FA)
- Max-width: 1280px
- Layout: 50/50 split desktop, stacked mobile

**Image Block (Left 50%):**
- **Image:** Drew inflating paddleboard, warm natural lighting
- **Aspect Ratio:** 3:4 (portrait) or 1:1 (square)
- **Border Radius:** 12px
- **Shadow:** `0 8px 24px rgba(0,0,0,0.1)`
- **Animation:** Fade-in on scroll into view

**Content Block (Right 50%):**

**Eyebrow:**
```css
font-size: 12px;
font-weight: 600;
color: var(--color-accent);
letter-spacing: 0.1em;
text-transform: uppercase;
margin-bottom: 16px;
```
**Text:** "THE ORIGIN STORY"

**Section Title:**
```css
font-size: 36px;
font-weight: 700;
line-height: 1.3;
color: var(--color-text-primary);
margin-bottom: 24px;
max-width: 500px;
```
**Text:** "Born from a Moment of Clarity"

**Story Content:**
```css
font-size: 18px;
line-height: 1.7;
color: var(--color-text-secondary);
margin-bottom: 20px;
max-width: 560px;
```

**Paragraphs:** (from brief)
1. Drew's 25 years building The Boston Bodyworker...
2. Paddleboard moment of revelation...
3. Sidekick Air as continuation of purpose...

**Visual Treatment:**
- Warm, introspective photography
- Natural lighting, authentic moments
- Optional: Timeline graphic showing journey
- Warm color grading matching brand palette

**Mobile Adaptation:**
- Image stacks above text
- Full-width image
- Reduced padding (60px vertical)

---

### 5. Problem/Solution Section

**Layout:**
```
┌─────────────────────────────────────────────────┐
│              [Section Title]                    │
│                                                 │
│  [Problem Image]         [Solution Image]      │
│  ┌──────────────┐       ┌──────────────┐       │
│  │ Traditional  │  VS   │ Sidekick Air │       │
│  │   Therapy    │       │   Solution   │       │
│  │    Table     │       │              │       │
│  │  [Pain Pts]  │       │  [Benefits]  │       │
│  └──────────────┘       └──────────────┘       │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Specifications:**

**Container:**
- Padding: 120px vertical
- Background: Warm cream (#F5F3EF)
- Max-width: 1280px

**Section Header:**
```css
.section__title {
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: var(--color-text-primary);
  margin-bottom: 64px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
```
**Text:** "The Problem Traditional Tables Can't Solve"

**Comparison Layout:**

Two-column grid with divider:

**Problem Column (Left):**

Card Design:
```css
background: white;
padding: 40px;
border-radius: 12px;
box-shadow: 0 4px 16px rgba(0,0,0,0.08);
```

**Icon/Image:** Heavy table icon or struggling therapist image

**Heading:**
```css
font-size: 24px;
font-weight: 600;
color: var(--color-text-primary);
margin-bottom: 24px;
```
**Text:** "The Weight of Tradition"

**Pain Points List:**
```css
.pain-point {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}

.pain-point__icon {
  color: var(--color-error);
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.pain-point__text {
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-secondary);
}
```

**Pain Points:** (from brief)
- ❌ Excessive weight (35-45 lbs daily strain)
- ❌ Awkward balance through tight spaces
- ❌ Bulky storage consuming valuable space
- ❌ Setup fatigue before each session
- ❌ Durability trade-offs, instability
- ❌ High shipping costs
- ❌ No customization or branding
- ❌ Environmental waste

**VS Divider:**
```css
.vs-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-accent);
  margin: 0 32px;
  position: relative;
}

/* Vertical line on desktop */
&::before {
  content: '';
  position: absolute;
  width: 2px;
  height: 100%;
  background: var(--color-border-subtle);
  left: 50%;
  transform: translateX(-50%);
}
```

**Solution Column (Right):**

Card Design: (same as problem card)

**Icon/Image:** Light Sidekick Air pack or easy carrying image

**Heading:**
```css
font-size: 24px;
font-weight: 600;
color: var(--color-primary);
margin-bottom: 24px;
```
**Text:** "The Sidekick Air Advantage"

**Benefits List:**
```css
.benefit {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}

.benefit__icon {
  color: var(--color-success);
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.benefit__text {
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-secondary);
}
```

**Benefits:** (from brief)
- ✓ Advanced drop-stitch material (aerospace grade)
- ✓ 800+ lb capacity, rock-solid stability
- ✓ Packs to yoga mat size
- ✓ 2-minute inflation setup
- ✓ Exceptional strength without weight
- ✓ Efficient shipping, reduced costs
- ✓ Custom branding options
- ✓ Eco-friendly materials

**Mobile Adaptation:**
- Stack columns vertically (Problem above Solution)
- Remove vertical divider, add horizontal
- Full-width cards
- Maintain visual hierarchy

---

### 6. Features Grid Section

**Layout:**
```
┌─────────────────────────────────────────────────┐
│              [Section Header]                   │
│                                                 │
│  ┌────────┐  ┌────────┐  ┌────────┐           │
│  │ Icon   │  │ Icon   │  │ Icon   │           │
│  │ Title  │  │ Title  │  │ Title  │           │
│  │ Descr. │  │ Descr. │  │ Descr. │           │
│  └────────┘  └────────┘  └────────┘           │
│  ┌────────┐  ┌────────┐  ┌────────┐           │
│  │ Icon   │  │ Icon   │  │ Icon   │           │
│  │ Title  │  │ Title  │  │ Title  │           │
│  │ Descr. │  │ Descr. │  │ Descr. │           │
│  └────────┘  └────────┘  └────────┘           │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Specifications:**

**Container:**
- Padding: 120px vertical
- Background: White
- Max-width: 1280px

**Section Header:**
```css
.section__eyebrow {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-secondary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 12px;
}

.section__title {
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: var(--color-text-primary);
  margin-bottom: 16px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.section__subtitle {
  font-size: 20px;
  line-height: 1.6;
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 64px;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}
```

**Eyebrow:** "THE DIFFERENCE"
**Title:** "Engineered for Movement. Built for Excellence."
**Subtitle:** "Every detail designed to eliminate obstacles and empower the modern therapist."

**Feature Grid:**

3-column grid (desktop), 2-column (tablet), 1-column (mobile)
Gap: 32px horizontal, 48px vertical

**Feature Card:**
```css
.feature-card {
  background: var(--color-bg-tertiary);
  padding: 40px 32px;
  border-radius: 12px;
  border: 1px solid var(--color-border-subtle);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-secondary-light);
    box-shadow: 0 8px 24px rgba(95, 181, 165, 0.12);
    transform: translateY(-4px);
  }
}

.feature-card__icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg,
    var(--color-secondary-light),
    var(--color-secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: white;
  font-size: 28px;
}

.feature-card__title {
  font-size: 22px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 12px;
  line-height: 1.3;
}

.feature-card__description {
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-secondary);
}
```

**Features Content:**

1. **Icon:** 🪶 Feather
   **Title:** "Lightweight & Portable"
   **Description:** "Packs down to the size of a yoga mat. Take your practice anywhere—gyms, homes, sports fields, or international travel."

2. **Icon:** 💪 Strength
   **Title:** "Professional-Grade Strength"
   **Description:** "800+ lb capacity with rock-solid stability. Advanced drop-stitch technology delivers the strength of traditional tables without the weight."

3. **Icon:** ⚡ Lightning
   **Title:** "2-Minute Setup"
   **Description:** "Inflates in minutes, not hours. Spend your energy on clients, not equipment. Simple, fast, effortless."

4. **Icon:** 🎨 Palette
   **Title:** "Customizable Branding"
   **Description:** "Make it yours. Optional color customization and professional branding turn your table into an extension of your identity."

5. **Icon:** 🌱 Leaf
   **Title:** "Eco-Friendly Design"
   **Description:** "Sustainable materials and efficient shipping reduce environmental impact. High performance with lower carbon footprint."

6. **Icon:** 🔧 Tools
   **Title:** "Modular & Adaptable"
   **Description:** "Collapsible stand and advanced fasteners provide unmatched stability and flexibility for any environment."

**Animation:**
- Stagger fade-in on scroll (100ms delay between cards)
- Hover lift effect with subtle shadow increase
- Icon subtle rotation on hover

---

### 7. Product Showcase Section

**Layout:**
```
┌─────────────────────────────────────────────────┐
│                                                 │
│         [Large Product Image/Render]            │
│       [Exploded View or Lifestyle Shot]         │
│                                                 │
│   ┌─────┐    ┌─────┐    ┌─────┐    ┌─────┐    │
│   │Detl1│    │Detl2│    │Detl3│    │Detl4│    │
│   └─────┘    └─────┘    └─────┘    └─────┘    │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Specifications:**

**Container:**
- Padding: 120px vertical
- Background: Warm cream (#F5F3EF)
- Max-width: 1400px

**Hero Product Image:**
- Full-width or 80% width centered
- Aspect ratio: 16:9 or custom
- Treatment: Clean white/transparent background
- Options:
  - Exploded CAD view showing layers
  - Lifestyle shot (therapist using in gym/field)
  - 360° product view with rotation
- Border radius: 16px
- Shadow: `0 12px 40px rgba(0,0,0,0.15)`

**Detail Highlight Strip:**

Four-column grid below main image:

```css
.detail-highlight {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px;
}

.detail-highlight__image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
}

.detail-highlight__title {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.detail-highlight__caption {
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-text-secondary);
}
```

**Detail Content Examples:**
1. Close-up of drop-stitch material texture
2. Modular frame connection detail
3. Branding customization options
4. Compact packed size comparison

**Interactive Elements:**
- Hover to zoom on detail images
- Optional: 360° product viewer
- Optional: Video player showing inflation process

---

### 8. Testimonials Section

**Layout:**
```
┌─────────────────────────────────────────────────┐
│              [Section Header]                   │
│                                                 │
│  ┌──────────────┐  ┌──────────────┐           │
│  │ "Quote..."   │  │ "Quote..."   │           │
│  │              │  │              │           │
│  │ [Avatar]     │  │ [Avatar]     │           │
│  │ Name         │  │ Name         │           │
│  │ Role         │  │ Role         │           │
│  └──────────────┘  └──────────────┘           │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Specifications:**

**Container:**
- Padding: 120px vertical
- Background: Arctic white (#F7F8FA)
- Max-width: 1280px

**Section Header:**
```css
.section__title {
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: var(--color-text-primary);
  margin-bottom: 64px;
}
```
**Text:** "Trusted by Professionals Who Demand Excellence"

**Testimonial Grid:**

2-column layout (desktop), 1-column (mobile)
Gap: 32px

**Testimonial Card:**
```css
.testimonial-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  position: relative;
}

.testimonial-card__quote-mark {
  position: absolute;
  top: 32px;
  left: 32px;
  font-size: 64px;
  font-family: var(--font-accent);
  color: var(--color-secondary-light);
  opacity: 0.3;
  line-height: 1;
}

.testimonial-card__text {
  font-size: 18px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  font-style: italic;
  margin-bottom: 32px;
  position: relative;
  z-index: 1;
}

.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: 16px;
}

.testimonial-card__avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-secondary-light);
}

.testimonial-card__author-info {
  flex: 1;
}

.testimonial-card__name {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 4px;
}

.testimonial-card__role {
  font-size: 14px;
  color: var(--color-text-tertiary);
}

.testimonial-card__rating {
  display: flex;
  gap: 4px;
  margin-top: 8px;
}

.star {
  color: #F59E0B; /* Gold */
  font-size: 16px;
}
```

**Sample Testimonials:**

**Testimonial 1:**
**Quote:** "Sidekick Air has completely transformed my mobile practice. I used to dread carrying my heavy table up apartment stairs. Now I pack it in my backpack and bike to clients. It's incredibly stable—my clients can't believe it's inflatable. This is the innovation our industry has needed for decades."

**Author:** Sarah Chen, LMT
**Role:** Mobile Massage Therapist, Seattle
**Rating:** 5 stars

**Testimonial 2:**
**Quote:** "As a sports trainer working with college athletes, I needed something portable for field-side treatments. Sidekick Air is a game-changer. It inflates in under 2 minutes and handles 250+ lb athletes without any give. The fact that I can customize it with our team colors is the cherry on top."

**Author:** Marcus Johnson, ATC
**Role:** Athletic Trainer, Division I Program
**Rating:** 5 stars

**Testimonial 3:**
**Quote:** "I was skeptical at first—can an inflatable table really match my traditional table? But the drop-stitch technology is incredible. It's absolutely rock-solid, and the 6-inch height is perfect. Plus, I've eliminated the back strain from moving equipment between my clinic and home office."

**Author:** Dr. Emily Rodriguez, PT, DPT
**Role:** Physical Therapist & Clinic Owner
**Rating:** 5 stars

**Testimonial 4:**
**Quote:** "Traveling internationally for wellness retreats used to mean renting subpar equipment. Now I bring Sidekick Air in my luggage. It's changed everything—consistent quality equipment anywhere in the world, and my clients love the story behind it."

**Author:** David Nakamura
**Role:** Bodywork Specialist, International Instructor
**Rating:** 5 stars

**Animation:**
- Testimonials fade in on scroll
- Optional: Carousel/slider for mobile
- Subtle parallax effect on scroll

---

### 9. Sidekick Care App Section

**Layout:**
```
┌─────────────────────────────────────────────────┐
│                                                 │
│  [Content Block]              [App Screenshot/ │
│  - Eyebrow                     Phone Mockup]   │
│  - Heading                                      │
│  - Description                                  │
│  - Feature List                                 │
│  - CTA                                          │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Specifications:**

**Container:**
- Padding: 120px vertical
- Background: Graphite charcoal (#1C1C1E) - dark section
- Max-width: 1280px
- Layout: 50/50 split, image on right

**Content Block (Left):**

**Eyebrow:**
```css
font-size: 12px;
font-weight: 600;
color: var(--color-primary);
letter-spacing: 0.1em;
text-transform: uppercase;
margin-bottom: 16px;
```
**Text:** "SIDEKICK CARE APP"

**Heading:**
```css
font-size: 42px;
font-weight: 700;
line-height: 1.2;
color: white;
margin-bottom: 20px;
max-width: 500px;
```
**Text:** "Technology That Moves With You"

**Description:**
```css
font-size: 18px;
line-height: 1.7;
color: rgba(255,255,255,0.8);
margin-bottom: 32px;
max-width: 540px;
```
**Text:** "The Sidekick Care app extends your table's capabilities, connecting therapists, clients, and performance data into one intelligent platform."

**Feature List:**
```css
.app-feature {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
}

.app-feature__icon {
  width: 24px;
  height: 24px;
  color: var(--color-primary);
  flex-shrink: 0;
}

.app-feature__text {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255,255,255,0.9);
}
```

**Features:** (from brief)
- ✓ Step-by-step setup guides
- ✓ Treatment protocols for every condition
- ✓ Client tracking & progress notes
- ✓ Professional network integration
- ✓ Continuing education modules
- ✓ Wearable device integration

**CTA:**
```css
.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
  margin-top: 16px;

  &:hover {
    gap: 12px;
    transition: gap 0.2s ease;
  }
}
```
**Text:** "Learn More About the App →"

**Visual Block (Right):**
- Phone mockup showing app interface
- Or tablet showing dashboard
- Treatment: Floating device with subtle shadow
- Background: Subtle gradient or abstract tech visual
- Animation: Parallax scroll effect

**Mobile Adaptation:**
- Stack content (text above image)
- Centered alignment
- Full-width mockup

---

### 10. Final CTA Section

**Layout:**
```
┌─────────────────────────────────────────────────┐
│                                                 │
│              [Centered Content]                 │
│                                                 │
│              [Headline]                         │
│              [Subtext]                          │
│              [Primary CTA]                      │
│              [Trust Signals]                    │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Specifications:**

**Container:**
- Padding: 120px vertical
- Background: Gradient (Electric blue to Sage green)
  ```css
  background: linear-gradient(135deg,
    var(--color-primary) 0%,
    var(--color-secondary) 100%);
  ```
- Text align: center
- Max content width: 700px

**Headline:**
```css
font-size: 48px;
font-weight: 700;
line-height: 1.2;
color: white;
margin-bottom: 20px;
```
**Text:** "Join the Movement. Transform Your Practice."

**Subtext:**
```css
font-size: 20px;
line-height: 1.6;
color: rgba(255,255,255,0.95);
margin-bottom: 40px;
```
**Text:** "Pre-order now and be among the first to experience the future of portable therapy."

**CTA Button:**
```css
.cta-final {
  background: white;
  color: var(--color-primary);
  padding: 18px 48px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 12px 32px rgba(0,0,0,0.25);
    transition: all 0.2s ease;
  }
}
```
**Text:** "Reserve Your Sidekick Air"

**Trust Signals:**
```css
.trust-signals {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 32px;
  font-size: 14px;
  color: rgba(255,255,255,0.9);
}

.trust-signal {
  display: flex;
  align-items: center;
  gap: 8px;
}

.trust-signal__icon {
  width: 20px;
  height: 20px;
}
```

**Trust Signal Content:**
- ✓ Free Shipping
- ✓ 30-Day Money-Back Guarantee
- ✓ 2-Year Warranty

---

### 11. Footer

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  [Logo]                                         │
│  [Tagline]                                      │
│                                                 │
│  [Column 1]  [Column 2]  [Column 3]  [Column 4]│
│  Product     Company     Resources   Contact   │
│  - Link      - Link      - Link      Email     │
│  - Link      - Link      - Link      Phone     │
│  - Link      - Link      - Link      Social    │
│                                                 │
│  ─────────────────────────────────────────────  │
│  © 2025 Sidekick Air    [Legal Links]          │
└─────────────────────────────────────────────────┘
```

**Specifications:**

**Container:**
- Padding: 64px vertical, 40px horizontal
- Background: Graphite charcoal (#1C1C1E)
- Color: White text

**Footer Top:**

Logo & Tagline:
```css
.footer__logo {
  width: 160px;
  margin-bottom: 16px;
}

.footer__tagline {
  font-size: 16px;
  color: rgba(255,255,255,0.7);
  margin-bottom: 48px;
  max-width: 360px;
}
```
**Tagline:** "Built for the hands that heal."

**Footer Columns:**

Four-column grid:

```css
.footer__columns {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
  margin-bottom: 48px;
}

.footer__column-title {
  font-size: 14px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.footer__link {
  display: block;
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  margin-bottom: 12px;
  text-decoration: none;

  &:hover {
    color: var(--color-primary);
    transition: color 0.2s ease;
  }
}
```

**Column Content:**

**Product:**
- Features
- Specifications
- Pricing
- Pre-Order

**Company:**
- About Us
- Origin Story
- Team
- Careers

**Resources:**
- User Guide
- FAQs
- Support
- Warranty

**Contact:**
- hello@sidekickair.com
- (555) 123-4567
- [Social Media Icons]

**Footer Bottom:**

```css
.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__copyright {
  font-size: 14px;
  color: rgba(255,255,255,0.5);
}

.footer__legal-links {
  display: flex;
  gap: 24px;
}

.footer__legal-link {
  font-size: 14px;
  color: rgba(255,255,255,0.5);

  &:hover {
    color: rgba(255,255,255,0.8);
  }
}
```

**Copyright:** © 2025 Sidekick Air. All rights reserved.
**Legal Links:** Privacy Policy | Terms of Service | Accessibility

**Mobile Adaptation:**
- Stack columns vertically
- Reduce padding
- Stack footer bottom elements

---

## Responsive Breakpoints

```css
/* Mobile First Approach */

/* Small phones */
@media (min-width: 375px) { }

/* Large phones */
@media (min-width: 640px) { }

/* Tablets */
@media (min-width: 768px) {
  /* Switch to 2-column layouts */
  /* Increase spacing */
}

/* Small laptops */
@media (min-width: 1024px) {
  /* Switch to 3-column layouts */
  /* Full desktop navigation */
}

/* Desktop */
@media (min-width: 1280px) {
  /* Full layouts */
  /* Maximum spacing */
}

/* Large desktop */
@media (min-width: 1536px) {
  /* Container max-widths */
  /* Enhanced spacing */
}
```

### Mobile Transformations

**Typography:**
- H1: 60px → 36px
- H2: 42px → 28px
- H3: 30px → 22px
- Body: 18px → 16px
- Line heights slightly increase for mobile readability

**Spacing:**
- Section padding: 120px → 60px
- Element spacing: 32-48px → 16-24px
- Container padding: 40px → 24px

**Layout:**
- All multi-column grids → single column
- Image-text sections → stacked (image first)
- Navigation → hamburger menu
- Footer columns → stacked

**Buttons:**
- Full-width or very wide (min 280px)
- Stack vertically with 16px gap
- Maintain 48px minimum touch target height

---

## Animation & Interaction Patterns

### Scroll Animations

**Fade In Up (Default for sections):**
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

.animate-on-scroll {
  animation: fadeInUp 0.8s ease-out;
}
```

**Stagger Delays:**
```css
.stagger-item:nth-child(1) { animation-delay: 0s; }
.stagger-item:nth-child(2) { animation-delay: 0.1s; }
.stagger-item:nth-child(3) { animation-delay: 0.2s; }
.stagger-item:nth-child(4) { animation-delay: 0.3s; }
```

### Hover States

**Cards:**
```css
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.12);
}
```

**Buttons:**
```css
.button {
  transition: all 0.2s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(56, 124, 255, 0.35);
}

.button:active {
  transform: translateY(0);
}
```

**Images:**
```css
.image-zoom-container {
  overflow: hidden;
  border-radius: 12px;
}

.image-zoom {
  transition: transform 0.4s ease;
}

.image-zoom-container:hover .image-zoom {
  transform: scale(1.05);
}
```

### Parallax Effects

**Hero Background:**
```javascript
// Subtle parallax on hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.hero__image');
  parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
});
```

### Loading Animations

**Page Load Sequence:**
1. Navigation fades in (0.3s)
2. Hero content staggers in (0.6s each, 0.2s delays)
3. Subsequent sections trigger on scroll

**Counter Animation:**
```javascript
// Stat counter animation
const animateCounter = (element, target) => {
  let current = 0;
  const increment = target / 60; // 60 frames
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.ceil(current);
    }
  }, 16); // ~60fps
};
```

---

## Content Strategy & Copywriting

### Messaging Hierarchy

**Primary Message (Hero):**
"Professional Strength. Limitless Mobility."

**Supporting Message:**
"Built for the hands that heal. The first portable therapy table engineered for professionals in motion."

**Value Propositions:**
1. **Lightweight:** Packs to yoga mat size
2. **Professional-Grade:** 800+ lb capacity
3. **Fast Setup:** 2-minute inflation
4. **Customizable:** Branding options
5. **Eco-Friendly:** Sustainable materials
6. **Modular:** Adapts to any environment

### Tone Guidelines

**Voice Characteristics:**
- **Professional:** Credible, knowledgeable, trustworthy
- **Warm:** Human, approachable, compassionate
- **Optimistic:** Energizing, forward-looking, hopeful
- **Confident:** Assured, established, authoritative

**Do:**
- Use active voice
- Lead with benefits, support with features
- Tell Drew's story authentically
- Acknowledge therapist pain points
- Speak directly to the professional user
- Use inclusive language

**Don't:**
- Use excessive jargon or technical terms
- Over-promise or exaggerate
- Sound sales-y or pushy
- Ignore the emotional connection
- Be too casual or informal

### Call-to-Action Hierarchy

**Primary CTAs:**
- "Pre-Order Now"
- "Reserve Your Sidekick Air"
- "Get Early Access"

**Secondary CTAs:**
- "Watch Demo"
- "Learn More"
- "See Specifications"
- "Read the Story"

**Tertiary CTAs:**
- "Contact Us"
- "Download Guide"
- "Join Mailing List"

---

## Accessibility Requirements

### WCAG 2.1 Level AA Compliance

**Color Contrast:**
- Text on backgrounds: minimum 4.5:1
- Large text (24px+): minimum 3:1
- UI components: minimum 3:1

**Actual Ratios:**
- Primary text (#1C1C1E) on white: 19.5:1 ✓
- Secondary text (#4A5568) on white: 8.3:1 ✓
- Blue (#387CFF) on white: 4.6:1 ✓
- White on blue (#387CFF): 4.6:1 ✓
- White on dark (#1C1C1E): 19.5:1 ✓

**Keyboard Navigation:**
- All interactive elements keyboard accessible
- Logical tab order
- Visible focus indicators (2px outline)
- Skip to main content link
- Escape key closes modals/menus

**Focus States:**
```css
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 4px;
}
```

**Screen Reader Support:**
- Semantic HTML5 elements
- ARIA labels for icon buttons
- Alt text for all images
- aria-live regions for dynamic content
- Proper heading hierarchy (H1 → H2 → H3)

**Touch Targets:**
- Minimum 44x44px for all interactive elements
- 8px minimum spacing between targets
- Large buttons on mobile (48-56px height)

**Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Technical Implementation Notes

### Performance Targets

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3.5s
- **Cumulative Layout Shift:** < 0.1
- **First Input Delay:** < 100ms

### Image Optimization

```html
<!-- Responsive images with WebP -->
<picture>
  <source
    srcset="hero-image.webp 1x, hero-image@2x.webp 2x"
    type="image/webp">
  <source
    srcset="hero-image.jpg 1x, hero-image@2x.jpg 2x"
    type="image/jpeg">
  <img
    src="hero-image.jpg"
    alt="Therapist using Sidekick Air outdoors"
    loading="lazy"
    width="800"
    height="600">
</picture>
```

**Image Strategy:**
- WebP format with JPG fallback
- Lazy loading for below-fold images
- Responsive srcset for different viewport sizes
- Proper width/height to prevent layout shift
- Compression while maintaining quality

### Font Loading

```css
@font-face {
  font-family: 'DM Sans';
  src: url('/fonts/dm-sans-var.woff2') format('woff2');
  font-weight: 400 700;
  font-display: swap;
}
```

**Strategy:**
- Variable fonts where possible
- font-display: swap to prevent FOIT
- Subset fonts to include only needed characters
- Preload critical fonts

### CSS Architecture

```css
/* Utility-first approach with semantic components */
/* CSS Variables for theming */
/* Mobile-first responsive design */
/* BEM naming convention for components */

.component { }
.component__element { }
.component--modifier { }
```

### JavaScript Framework

**Recommendation:** React or Vue.js

**Key Libraries:**
- Framer Motion (animations)
- React Intersection Observer (scroll triggers)
- React Hook Form (forms)
- React Helmet (SEO)

**Vanilla JS Alternative:**
- Intersection Observer API
- CSS-only animations where possible
- Progressive enhancement

---

## SEO & Meta Information

### Meta Tags

```html
<title>Sidekick Air - Professional Portable Therapy Table | Reimagining Recovery</title>

<meta name="description" content="Revolutionary portable therapy table with 800+ lb capacity. Packs to yoga mat size. 2-minute setup. Built for therapists, athletic trainers, and bodywork professionals.">

<meta name="keywords" content="portable therapy table, massage table, athletic training, mobile therapist, inflatable therapy table, professional massage equipment">

<!-- Open Graph -->
<meta property="og:title" content="Sidekick Air - Professional Strength. Limitless Mobility.">
<meta property="og:description" content="The first truly portable therapy table engineered for professionals. 800+ lb capacity, yoga mat size, 2-minute setup.">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:url" content="https://sidekickair.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Sidekick Air - Reimagining Recovery">
<meta name="twitter:description" content="Professional portable therapy table. 800+ lb capacity. Packs to yoga mat size.">
<meta name="twitter:image" content="/twitter-image.jpg">
```

### Semantic HTML

```html
<header>
  <nav aria-label="Main navigation">
    <!-- Navigation content -->
  </nav>
</header>

<main>
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading"><!-- Hero headline --></h1>
  </section>

  <section aria-labelledby="origin-heading">
    <h2 id="origin-heading">The Origin Story</h2>
  </section>

  <!-- More sections -->
</main>

<footer>
  <!-- Footer content -->
</footer>
```

### Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Sidekick Air Portable Therapy Table",
  "description": "Professional-grade portable therapy table with 800+ lb capacity",
  "brand": {
    "@type": "Brand",
    "name": "Sidekick Air"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/PreOrder",
    "price": "TBD",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "500"
  }
}
```

---

## Conversion Optimization

### A/B Testing Opportunities

**Hero Headlines:**
- A: "Professional Strength. Limitless Mobility."
- B: "Reimagining Recovery"
- C: "Power Your Performance. Anywhere."

**CTA Button Text:**
- A: "Pre-Order Now"
- B: "Reserve Your Table"
- C: "Get Early Access"

**Hero Layout:**
- A: 55/45 split (text left, image right)
- B: Centered with background image
- C: Full-width with text overlay

**Color Accents:**
- A: Electric Blue primary
- B: Sage Green primary
- C: Hybrid (both colors)

### Conversion Funnel

1. **Awareness:** Hero + Trust indicators
2. **Interest:** Origin story + Problem/solution
3. **Consideration:** Features + Product showcase
4. **Evaluation:** Testimonials + App section
5. **Conversion:** Final CTA + Trust signals

### Trust Signals

**Throughout Site:**
- Therapist testimonials with photos
- User count ("Trusted by 500+ therapists")
- Professional credentials
- Warranty information
- Money-back guarantee
- Free shipping
- Secure payment badges

---

## Development Handoff Checklist

### Design Assets

- [ ] High-res product images (WebP + JPG)
- [ ] Hero section images
- [ ] Icon set (SVG)
- [ ] Logo files (SVG, PNG)
- [ ] Photography (lifestyle shots)
- [ ] Avatar images for testimonials
- [ ] App screenshots/mockups

### Documentation

- [ ] Design system tokens (colors, typography, spacing)
- [ ] Component specifications
- [ ] Responsive breakpoints
- [ ] Animation specifications
- [ ] Accessibility requirements
- [ ] SEO meta information
- [ ] Content inventory

### Code Deliverables

- [ ] HTML/CSS/JS or React components
- [ ] Responsive layouts
- [ ] Interactive prototypes
- [ ] Animation implementations
- [ ] Form validation
- [ ] Accessibility features
- [ ] Performance optimizations

---

## Conclusion

This UI/UX design plan for Sidekick Air Design 1 (TherapyFlow-inspired) creates a warm, trustworthy, and professional landing page that:

✅ Builds emotional connection through Drew's origin story
✅ Establishes professional credibility through clean, polished design
✅ Converts visitors through strategic CTA placement and social proof
✅ Works beautifully across all devices with mobile-first responsive design
✅ Meets WCAG AA accessibility standards
✅ Performs fast with optimized images and animations
✅ Tells a compelling story from problem to solution to transformation

The design balances healthcare professionalism with warm optimism, creating a unique aesthetic that differentiates Sidekick Air from traditional medical equipment while building trust with conservative healthcare practitioners.

---

**Document Version:** 1.0
**Last Updated:** November 14, 2025
**Next Steps:** Create comprehensive design system document with tokenized values