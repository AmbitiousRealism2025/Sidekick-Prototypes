# Sidekick Air - Hollow-Inspired Design
## Brutalist Minimalism Prototype

**Design Philosophy:** Bold Minimalist Typography
**Target Audience:** Design-savvy buyers, brand-conscious professionals, differentiation-focused marketing
**Visual Aesthetic:** Brutalist minimalism with typographic dominance

---

## Design Characteristics

### Color Strategy
- **98% Monochrome:** Black (#000000), White (#FFFFFF), Grays only
- **2% Blue Accent:** Electric Blue (#387CFF) - ONLY for primary CTA hover state
- **High Contrast:** WCAG AAA compliant (21:1 contrast ratio)

### Typography
- **Single Font:** Inter (400, 700 weights only)
- **Extreme Scale:** 120px headlines on desktop, 60px on mobile
- **Typography IS Design:** Text itself is the primary visual element

### Design Rules
- ✅ Sharp corners (0px border-radius)
- ✅ NO animations (except color transitions)
- ✅ Minimal shadows
- ✅ Extreme whitespace (50%+)
- ✅ Flat design (brutalist aesthetic)
- ✅ Static confidence (no movement)

---

## Setup Instructions

### Prerequisites
- Node.js 18+ and npm

### Installation

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

The app will be available at `http://localhost:5173`

---

## Project Structure

```
sidekick-hollow/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx          # Minimal navigation
│   │   │   └── Footer.jsx          # Minimal footer
│   │   ├── sections/
│   │   │   ├── Hero.jsx            # 120px typography, full viewport
│   │   │   ├── Stats.jsx           # Large numbers
│   │   │   ├── Origin.jsx          # Condensed narrative
│   │   │   ├── Features.jsx        # Single column, borders
│   │   │   ├── ProductShowcase.jsx # B&W photography
│   │   │   ├── Testimonials.jsx    # Typography-driven
│   │   │   └── FinalCTA.jsx        # Black background
│   │   └── ui/
│   │       ├── Button.jsx          # Sharp, minimal buttons
│   │       └── FeatureItem.jsx     # Feature card component
│   ├── styles/
│   │   └── index.css               # Tailwind directives
│   ├── App.jsx                     # Main app component
│   └── main.jsx                    # Entry point
├── tailwind.config.js              # Monochrome theme config
└── index.html
```

---

## Design Highlights

### 1. Extreme Typography
- Headlines at 120px (desktop) create bold visual impact
- Single font (Inter) with only 2 weights (400, 700)
- Tight letter-spacing for large text
- Wide letter-spacing for uppercase labels

### 2. Strict Monochrome Palette
- 98% of design uses black, white, and grays
- ONE strategic color moment: blue accent on CTA hover
- Creates sophisticated, timeless aesthetic
- Maximum contrast for accessibility

### 3. Brutalist Minimalism
- Sharp corners everywhere (no border-radius)
- NO decorative elements
- NO animations (static confidence)
- Extreme whitespace (50%+)
- Asymmetric layouts create tension

### 4. Typography AS Design
- Text itself is the primary visual element
- No reliance on photography or graphics
- Headlines dominate the visual hierarchy
- Minimal icons (simple SVGs, monochrome)

### 5. Static Confidence
- No page load animations
- No scroll-triggered effects
- ONLY color transitions on hover
- Movement is decoration - avoided intentionally

---

## Responsive Design

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px+

### Typography Scaling
- Desktop headlines: 120px
- Mobile headlines: 60px (50% reduction)
- Maintains extreme whitespace even on mobile

---

## Accessibility

### WCAG AAA Compliance
- **Black on white:** 21:1 contrast ratio ✓✓✓
- **Gray text (#666666) on white:** 5.7:1 ✓✓
- **White on black:** 21:1 contrast ratio ✓✓✓
- Exceeds all WCAG AAA requirements

### Features
- Semantic HTML5 elements
- Keyboard navigable
- No reliance on color (monochrome by design)
- Motion-safe by default (no animations)
- Touch targets: 48px minimum

---

## Technology Stack

- **React 18+** - UI framework
- **Vite** - Build tool
- **Tailwind CSS 3+** - Utility-first CSS
- **Google Fonts (Inter)** - Typography

---

## Design Comparison

This design is best suited for:
✅ Design-savvy, brand-conscious buyers
✅ Differentiation from competitors
✅ Timeless, premium positioning
✅ Bold aesthetic choices
✅ Challenging healthcare/medical conventions

---

## Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)

---

## License

© 2025 Sidekick Air. All rights reserved.
