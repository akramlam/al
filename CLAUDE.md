# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint and auto-fix issues

### Installation
- `npm install` - Install all dependencies

## Architecture

This is a Next.js 15 single-page landing site for ALJ Creative Studio using the App Router pattern.  
The project follows **DRY, component-based practices** with centralized data and type safety.

### Core Structure
- **App Router**: `src/app/`
- **Components**:
  - UI primitives → `src/components/ui/`
  - Page sections → `src/components/sections/`
- **Data**: Centralized in `src/lib/data.ts` (typed via `src/types/index.ts`)
- **Styling**: Tailwind CSS v4 + custom theme (dark navy #0B1220, cyan #00AEEF)

### Page Structure
`src/app/page.tsx` renders the following sections in order:
1. Navbar (sticky)
2. Hero (main CTA)
3. Services (6 cards)
4. Process (5 steps)
5. Creators (collective info)
6. Portfolio (projects)
7. Timeline (milestones)
8. CalendlySection (booking)
9. FAQ (expandable)
10. Footer (links + social)

### Data Architecture
- All text and content → `src/lib/data.ts`
- Types enforced with interfaces
- Includes: `services`, `processSteps`, `projects`, `timelineEvents`, `faqs`, `socialLinks`
- Placeholder images → `/api/placeholder/`

## Development Standards

### DRY Principles
- No duplicated code → extract to utils or shared components
- Reuse `ui/` components across sections

### Type Safety
- Strong typing required, no `any`
- Props and data must match interfaces

### Styling
- Tailwind utilities only, theme defined in `tailwind.config.js`
- No inline styles

### Accessibility
- Semantic HTML
- `alt` for images
- ARIA roles if necessary

### Performance
- Use `next/image`
- Lazy-load heavy sections
- Keep Framer Motion animations lightweight

## Calendly Configuration
Replace placeholder Calendly URL in `src/components/sections/CalendlySection.tsx` with the actual username.

## Content Management
Update site content in `src/lib/data.ts` only.  
Do not hardcode text or config inside components.
