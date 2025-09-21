# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Installation
- `npm install` - Install all dependencies

## Architecture

This is a Next.js 15 single-page landing site for ALJ Creative Studio built with the App Router pattern. The application follows a component-based architecture with clear separation of concerns:

### Core Structure
- **App Router**: Uses Next.js 15 App Router (`src/app/`)
- **Component Architecture**: Split into reusable UI components (`src/components/ui/`) and page sections (`src/components/sections/`)
- **Data Management**: Centralized content data in `src/lib/data.ts` with TypeScript interfaces in `src/types/index.ts`
- **Styling**: Tailwind CSS v4 with custom design system (dark navy #0B1220 + cyan #00AEEF)

### Page Structure
The main page (`src/app/page.tsx`) is a client component that renders sections in sequence:
1. Navbar (sticky navigation)
2. Hero (main call-to-action)
3. Services (6 service cards)
4. Process (5-step workflow)
5. Creators (collectif information)
6. Portfolio (project showcase)
7. Timeline (company milestones)
8. CalendlySection (booking integration)
9. FAQ (expandable questions)
10. Footer (links and social)

### Data Architecture
- All content is defined as typed objects in `src/lib/data.ts`
- TypeScript interfaces ensure type safety across components
- Content includes: services, processSteps, projects, timelineEvents, faqs, socialLinks
- Placeholder images use `/api/placeholder/` URLs

### Key Features
- **Framer Motion**: Used for smooth animations and transitions
- **React Calendly**: Integrated booking system (requires Calendly URL configuration)
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Smooth Scrolling**: Custom anchor link handling for section navigation

### Calendly Configuration
The Calendly integration in `src/components/sections/CalendlySection.tsx` requires updating placeholder URLs with actual Calendly username.

### Content Management
To update site content, modify the exported arrays in `src/lib/data.ts`. All text content, service descriptions, project information, and FAQ entries are centralized here.