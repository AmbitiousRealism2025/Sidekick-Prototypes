# Delegation Instructions for Cloud Agent
## Building 4 Sidekick Air Prototypes with Design Skill Subagents

**Purpose:** Guide for Claude Code Cloud Agent to coordinate 4 parallel design skill subagents
**Target:** 4 interactive React + Tailwind prototypes for client presentation
**Date:** November 14, 2025

---

## Overview

This document provides step-by-step instructions for a Claude Code Cloud Agent to:

1. Spawn 4 design skill subagents in parallel
2. Delegate distinct design implementation tasks to each subagent
3. Monitor progress and maintain consistency
4. Validate final deliverables across all 4 prototypes

**Expected Timeline:** 4-6 hours wall clock time (with parallel execution)

---

## Pre-Execution Checklist

Before spawning subagents, verify:

- [ ] All documentation is available and readable:
  - `IMPLEMENTATION-BRIEF.md`
  - `Design 1/implementation-plan.md`
  - `Design 2/implementation-plan.md`
  - `Design 3/implementation-plan.md`
  - `Design 4/implementation-plan.md`
  - `Sidekick Air Landing Page Draft Ideas.md`
  - `web-inspiration-examples.md`

- [ ] Working directory is clean and organized
- [ ] Git repository is initialized (for version control)
- [ ] User has confirmed design approach and timeline

---

## Agent Delegation Strategy

### Phase 1: Parallel Agent Spawning

Spawn **4 design skill subagents simultaneously** using the Claude Code `Skill` tool:

```javascript
// Spawn all 4 agents in a SINGLE message for parallel execution
Skill("frontend-design") // For Design 1
Skill("frontend-design") // For Design 2
Skill("frontend-design") // For Design 3
Skill("frontend-design") // For Design 4
```

**Agent Assignments:**

| Agent | Design | Template | Target Audience | Key Characteristics |
|-------|--------|----------|-----------------|---------------------|
| **Subagent 1** | Design 1 | TherapyFlow | Traditional therapists | Warm healthcare, sage + blue + cream |
| **Subagent 2** | Design 2 | Xpedition | Tech-savvy professionals | Modern SaaS, 95% monochrome |
| **Subagent 3** | Design 3 | Healers | Premium wellness centers | Earth tones, sage + terracotta |
| **Subagent 4** | Design 4 | Hollow | Design-conscious buyers | Brutalist, monochrome, extreme typography |

---

## Subagent Task Prompts

### Subagent 1 Prompt (Design 1 - TherapyFlow)

```
You are a frontend design specialist creating an interactive React + Tailwind prototype for Sidekick Air.

**Your Assignment: Design 1 - TherapyFlow-Inspired (Warm Healthcare)**

**Documentation:**
1. Read: `Design 1/ui-ux-design-plan.md`
2. Read: `Design 1/design-system.md`
3. Read: `Design 1/implementation-plan.md`
4. Reference: `Sidekick Air Landing Page Draft Ideas.md` (for content)
5. Reference: `IMPLEMENTATION-BRIEF.md` (for standards)

**Your Task:**
Create a complete React + Tailwind CSS prototype in a folder called `sidekick-therapyflow/`

**Requirements:**
- Follow Tailwind config from implementation plan EXACTLY
- Implement all sections from UI/UX design plan
- Use real copy from brand brief (not lorem ipsum)
- Achieve 95%+ visual fidelity to design specifications
- Implement responsive layouts (mobile, tablet, desktop)
- Include all interactive elements (navigation, hover states)
- Use placeholder images with correct aspect ratios
- Build with Vite + React + Tailwind CSS

**Quality Gates:**
- No console errors
- All sections implemented
- Responsive across breakpoints
- WCAG AA accessibility
- Clean, readable code

**Deliverable:**
A fully functional prototype that runs with `npm run dev` and demonstrates the warm healthcare professional aesthetic.

**Timeline:** Complete within 4-6 hours.
```

---

### Subagent 2 Prompt (Design 2 - Xpedition)

```
You are a frontend design specialist creating an interactive React + Tailwind prototype for Sidekick Air.

**Your Assignment: Design 2 - Xpedition-Inspired (Modern Tech)**

**Documentation:**
1. Read: `Design 2/ui-ux-design-plan.md`
2. Read: `Design 2/design-system.md`
3. Read: `Design 2/implementation-plan.md`
4. Reference: `Sidekick Air Landing Page Draft Ideas.md` (for content)
5. Reference: `IMPLEMENTATION-BRIEF.md` (for standards)

**Your Task:**
Create a complete React + Tailwind CSS prototype in a folder called `sidekick-xpedition/`

**Requirements:**
- Follow Tailwind config from implementation plan EXACTLY
- CRITICAL: 95% monochrome palette (blue ONLY for CTAs)
- Implement all sections from UI/UX design plan
- Use real copy from brand brief (not lorem ipsum)
- Achieve 95%+ visual fidelity to design specifications
- Implement responsive layouts (mobile, tablet, desktop)
- Include all interactive elements (navigation, hover states)
- Use placeholder images with correct aspect ratios
- Build with Vite + React + Tailwind CSS
- Single font (Inter) only

**Quality Gates:**
- No console errors
- All sections implemented
- Strict color discipline (95% neutral)
- Responsive across breakpoints
- WCAG AA accessibility
- Clean, readable code

**Deliverable:**
A fully functional prototype that runs with `npm run dev` and demonstrates the modern SaaS minimal aesthetic.

**Timeline:** Complete within 4-6 hours.
```

---

### Subagent 3 Prompt (Design 3 - Healers)

```
You are a frontend design specialist creating an interactive React + Tailwind prototype for Sidekick Air.

**Your Assignment: Design 3 - Healers-Inspired (Premium Wellness)**

**Documentation:**
1. Read: `Design 3/ui-ux-design-plan.md`
2. Read: `Design 3/design-system.md`
3. Read: `Design 3/implementation-plan.md`
4. Reference: `Sidekick Air Landing Page Draft Ideas.md` (for content)
5. Reference: `IMPLEMENTATION-BRIEF.md` (for standards)

**Your Task:**
Create a complete React + Tailwind CSS prototype in a folder called `sidekick-healers/`

**Requirements:**
- Follow Tailwind config from implementation plan EXACTLY
- CRITICAL: Earth-tone palette (sage + terracotta + warm cream)
- Use three fonts (DM Sans, Inter, Fraunces serif for quotes)
- Implement all sections from UI/UX design plan
- Use real copy from brand brief (not lorem ipsum)
- Achieve 95%+ visual fidelity to design specifications
- Implement responsive layouts (mobile, tablet, desktop)
- Include all interactive elements (navigation, hover states)
- Use placeholder images with correct aspect ratios
- Build with Vite + React + Tailwind CSS
- Slower animations (0.8s for premium feel)

**Quality Gates:**
- No console errors
- All sections implemented
- Earth-tone gradients working
- Serif font for testimonial quotes
- Responsive across breakpoints
- WCAG AA accessibility
- Clean, readable code

**Deliverable:**
A fully functional prototype that runs with `npm run dev` and demonstrates the sophisticated premium wellness aesthetic.

**Timeline:** Complete within 4-6 hours.
```

---

### Subagent 4 Prompt (Design 4 - Hollow)

```
You are a frontend design specialist creating an interactive React + Tailwind prototype for Sidekick Air.

**Your Assignment: Design 4 - Hollow-Inspired (Brutalist Minimalism)**

**Documentation:**
1. Read: `Design 4/ui-ux-design-plan.md`
2. Read: `Design 4/design-system.md`
3. Read: `Design 4/implementation-plan.md`
4. Reference: `Sidekick Air Landing Page Draft Ideas.md` (for content)
5. Reference: `IMPLEMENTATION-BRIEF.md` (for standards)

**Your Task:**
Create a complete React + Tailwind CSS prototype in a folder called `sidekick-hollow/`

**Requirements:**
- Follow Tailwind config from implementation plan EXACTLY
- CRITICAL: 98% monochrome (black/white/grays ONLY)
- CRITICAL: Blue accent (#387CFF) ONE USE ONLY (primary CTA hover)
- Extreme typography scale (120px headlines desktop)
- Single font (Inter) with TWO weights only (400, 700)
- NO animations (except color transitions)
- Sharp corners (0px border radius)
- Minimal shadows (if any)
- Implement all sections from UI/UX design plan
- Use real copy from brand brief (not lorem ipsum)
- Achieve 95%+ visual fidelity to design specifications
- Implement responsive layouts (mobile, tablet, desktop)
- Include all interactive elements (navigation, hover states)
- Use placeholder images with correct aspect ratios (converted to B&W)
- Build with Vite + React + Tailwind CSS

**Quality Gates:**
- No console errors
- All sections implemented
- Strict monochrome discipline
- No rounded corners
- No animations (static confidence)
- Typography at extreme scales
- Responsive across breakpoints
- WCAG AAA accessibility
- Clean, readable code

**Deliverable:**
A fully functional prototype that runs with `npm run dev` and demonstrates the bold brutalist minimalist aesthetic.

**Timeline:** Complete within 4-6 hours.
```

---

## Cloud Agent Coordination Tasks

### During Execution

**Monitor Progress:**
```
Every 1-2 hours, check in with each subagent:
1. Review code progress
2. Verify design fidelity
3. Check for blockers
4. Provide guidance if needed
```

**Maintain Consistency:**
```
Cross-check all 4 prototypes for:
- Same project structure (matching IMPLEMENTATION-BRIEF.md)
- Same section order (Hero, Features, etc.)
- Same content source (brand brief)
- Consistent component naming patterns
- Similar code quality standards
```

**Resolve Conflicts:**
```
If subagents encounter issues:
1. Reference implementation plans for guidance
2. Verify Tailwind config matches specifications
3. Check for missing dependencies
4. Provide design token clarifications
```

---

### Quality Validation Checklist

After all 4 subagents complete, validate each prototype:

#### Visual Fidelity (Per Design)

**Design 1 (TherapyFlow):**
- [ ] Sage green (#5FB5A5) + Electric blue (#387CFF) + Warm cream palette
- [ ] Three fonts (DM Sans, Inter, Fraunces) implemented
- [ ] Warm, trustworthy aesthetic achieved
- [ ] Gradient backgrounds using sage + blue

**Design 2 (Xpedition):**
- [ ] 95% monochrome (white/gray) maintained
- [ ] Blue (#387CFF) used ONLY for CTAs
- [ ] Single font (Inter) throughout
- [ ] Clean SaaS aesthetic achieved
- [ ] Generous whitespace (40-50%)

**Design 3 (Healers):**
- [ ] Earth-tone palette (sage #2D5F4C + terracotta #D36C3E)
- [ ] Three fonts (DM Sans, Inter, Fraunces serif for quotes)
- [ ] Premium, sophisticated aesthetic
- [ ] Gradients combining earth tones
- [ ] Generous whitespace (40-50%)

**Design 4 (Hollow):**
- [ ] 98% monochrome (black #000000 + white #FFFFFF + grays)
- [ ] Blue accent ONE USE ONLY (primary CTA hover)
- [ ] Extreme typography (120px headlines)
- [ ] Two font weights only (400, 700)
- [ ] Sharp corners (0px border radius)
- [ ] NO animations (static design)
- [ ] Extreme whitespace (50%+)

#### Technical Validation (All Designs)

- [ ] Runs with `npm run dev` without errors
- [ ] No console errors in browser
- [ ] All sections implemented
- [ ] Responsive across mobile/tablet/desktop
- [ ] Navigation works (desktop + mobile)
- [ ] All buttons have hover states
- [ ] Smooth scroll to sections works
- [ ] Images have proper aspect ratios
- [ ] Real copy (not lorem ipsum)
- [ ] WCAG AA (or AAA for Design 4) compliant

#### Code Quality (All Designs)

- [ ] Clean React component structure
- [ ] Tailwind theme configured correctly
- [ ] 90%+ Tailwind utilities (minimal custom CSS)
- [ ] Readable, well-organized code
- [ ] Component naming follows conventions
- [ ] No duplicated code patterns

---

## Final Deliverables Checklist

For each of the 4 prototypes:

### 1. Functional Prototype
- [ ] Complete React application
- [ ] All sections implemented
- [ ] Runs without errors
- [ ] Responsive design working

### 2. README.md (Per Prototype)
```markdown
# Sidekick Air - [Design Name]

**Design Variation:** [TherapyFlow/Xpedition/Healers/Hollow]
**Design Philosophy:** [Brief description]
**Target Audience:** [Target market]

## Setup

npm install
npm run dev

## Design Highlights

- [Key characteristic 1]
- [Key characteristic 2]
- [Key characteristic 3]

## Design Tokens

[Quick reference to main colors and fonts]

## Screenshot

[Add screenshot or GIF]
```

### 3. Build Verification
- [ ] `npm run build` succeeds
- [ ] Optimized files in `/dist`
- [ ] No build warnings/errors

---

## Comparison & Presentation

After all 4 prototypes are complete, create a comparison document:

### `DESIGN-COMPARISON.md`

```markdown
# Sidekick Air Design Variations - Comparison

## Overview
Four distinct design approaches for Sidekick Air landing page prototypes.

## Design 1: TherapyFlow (Warm Healthcare)
**Target:** Traditional therapists, sports medicine professionals
**Colors:** Sage + Blue + Warm Cream
**Mood:** Professional trust-building with emotional warmth
**Best For:** Conservative healthcare market
**Preview:** [Link to deployed prototype]

## Design 2: Xpedition (Modern Tech)
**Target:** Tech-savvy therapists, young professionals
**Colors:** 95% Monochrome (Blue accent)
**Mood:** Clean SaaS professional
**Best For:** Innovation-focused buyers
**Preview:** [Link to deployed prototype]

## Design 3: Healers (Premium Wellness)
**Target:** Spa/wellness centers, premium clinics
**Colors:** Deep Sage + Terracotta + Warm Cream
**Mood:** Sophisticated premium wellness
**Best For:** Upscale positioning
**Preview:** [Link to deployed prototype]

## Design 4: Hollow (Bold Minimalism)
**Target:** Design-savvy buyers, brand-conscious professionals
**Colors:** 98% Monochrome (Black/White)
**Mood:** Brutalist minimalism, disruptive
**Best For:** Bold differentiation
**Preview:** [Link to deployed prototype]

## Recommendation Framework

### Choose Design 1 if:
- Target audience values trust and warmth
- Healthcare professional credibility is priority
- Need balanced, approachable aesthetic

### Choose Design 2 if:
- Target audience is tech-forward
- Conversion optimization is priority
- Want clean, modern SaaS aesthetic

### Choose Design 3 if:
- Target audience is upscale wellness market
- Premium positioning is goal
- Want sophisticated, natural aesthetic

### Choose Design 4 if:
- Target audience values bold differentiation
- Want timeless design (won't date)
- Comfortable with unconventional approach
```

---

## Deployment Strategy

### Option 1: Netlify (Recommended)

For each prototype:
```bash
cd sidekick-[design-name]/
npm run build
npx netlify-cli deploy --prod --dir=dist
```

### Option 2: Vercel

For each prototype:
```bash
cd sidekick-[design-name]/
npx vercel --prod
```

### Option 3: GitHub Pages

For each prototype:
```bash
cd sidekick-[design-name]/
npm run build
# Deploy dist/ folder to gh-pages branch
```

---

## Success Criteria

The delegation is successful when:

✅ **All 4 prototypes are complete:**
- Each prototype runs without errors
- All sections implemented
- Responsive design working

✅ **Visual fidelity is high:**
- Design 1: Warm healthcare aesthetic achieved
- Design 2: 95% monochrome discipline maintained
- Design 3: Earth-tone sophistication evident
- Design 4: Brutalist minimalism executed

✅ **Consistency is maintained:**
- Same project structure
- Same content source
- Similar code quality
- Consistent component patterns

✅ **Client presentation ready:**
- All 4 deployed and accessible
- Comparison document created
- Screenshots/demos available
- Clear differentiation visible

✅ **Code quality standards met:**
- No console errors
- WCAG AA (or AAA) compliant
- Clean, readable code
- Documentation complete

---

## Troubleshooting Guide

### Issue: Subagent deviates from design specifications

**Solution:**
1. Review implementation plan with subagent
2. Verify Tailwind config matches specifications
3. Provide specific design token references
4. Show examples from web-inspiration-examples.md

### Issue: Color palette incorrect

**Solution:**
1. Check Tailwind config theme.extend.colors
2. Verify hex codes match implementation plan
3. Test with browser dev tools color picker
4. Reference design-system.md for correct values

### Issue: Typography not matching specifications

**Solution:**
1. Verify Google Fonts loaded in index.html
2. Check Tailwind config fontFamily
3. Confirm font weights available
4. Test text-* and font-* classes in code

### Issue: Inconsistency across prototypes

**Solution:**
1. Create shared component patterns document
2. Establish common section structure
3. Standardize naming conventions
4. Review all 4 prototypes side-by-side

### Issue: Performance problems

**Solution:**
1. Optimize images (WebP format, compression)
2. Remove unused Tailwind classes (check build output)
3. Minimize custom CSS
4. Use lazy loading for images

---

## Timeline & Milestones

**Hour 0-1: Setup & Spawning**
- Cloud agent reviews all documentation
- Spawns 4 subagents with detailed prompts
- Subagents begin project setup

**Hour 1-3: Core Development**
- Subagents implement base components
- Subagents build section components
- Cloud agent monitors progress

**Hour 3-5: Content & Polish**
- Subagents integrate content
- Subagents implement interactions
- Subagents test responsiveness

**Hour 5-6: Validation & Delivery**
- Cloud agent validates all prototypes
- Fixes identified issues
- Creates comparison document
- Deploys all 4 prototypes

---

## Post-Completion Actions

After successful completion:

1. **Git Commit:**
   ```bash
   git add .
   git commit -m "Complete: 4 Sidekick Air design prototypes"
   git push origin main
   ```

2. **Documentation:**
   - Create `DESIGN-COMPARISON.md`
   - Add screenshots to each prototype README
   - Update main project README with links

3. **Deployment:**
   - Deploy all 4 prototypes
   - Collect deployment URLs
   - Test all links

4. **Client Handoff:**
   - Provide comparison document
   - Share deployment URLs
   - Include setup instructions
   - Offer walkthrough if needed

---

## Cloud Agent Self-Assessment

Before marking delegation complete, verify:

- [ ] All 4 subagents completed their assignments
- [ ] All 4 prototypes run without errors
- [ ] Visual fidelity matches design specifications
- [ ] Consistency maintained across all prototypes
- [ ] Code quality meets standards
- [ ] All prototypes are deployed and accessible
- [ ] Comparison document created
- [ ] Client presentation materials ready

---

## Final Notes

**Key Principles for Successful Delegation:**

1. **Clear Prompts:** Each subagent receives comprehensive, unambiguous instructions
2. **Documentation:** All reference materials readily available
3. **Parallel Execution:** All 4 subagents work simultaneously for efficiency
4. **Active Monitoring:** Cloud agent checks progress and provides guidance
5. **Quality Gates:** Systematic validation ensures high standards
6. **Consistency:** Common patterns maintained across all prototypes

**Expected Outcome:**

Four distinct, polished, interactive React + Tailwind prototypes that clearly demonstrate different design approaches for Sidekick Air, ready for client presentation and decision-making.

---

**Delegation Instructions Version:** 1.0.0
**Last Updated:** November 14, 2025
**Status:** Ready for Execution
