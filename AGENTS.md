# GraphQL Day Website - Codebase Summary

## Project Overview
This is a Next.js 15.5.2 website for GraphQL Day at FOST (Future of Software Technology), an event co-located with API Days Paris at CNIT La Defense, Paris on December 11, 2025.

## Migration Status: ✅ COMPLETE

### What Was Accomplished
The website has been successfully migrated from an old codebase to a modern Next.js application. All major components, assets, and design systems have been copied and integrated.

#### Key Migration Achievements:
- **✅ Build Status**: Project builds successfully with no errors
- **✅ Component Migration**: All essential components copied from old repository
- **✅ SVG to TSX Conversion**: 21 pixel art icons converted to React components
- **✅ Design System**: Complete design system with Tailwind CSS 3.x integration
- **✅ Venue Information**: Event location properly displays "CNIT La Defense, Paris"

## Technical Stack
- **Framework**: Next.js 15.5.2 with Turbopack
- **React**: 19.1.0
- **Styling**: Tailwind CSS 3.4.0 with custom design tokens
- **TypeScript**: Full TypeScript support with strict configuration
- **Package Manager**: npm with package-lock.json

## Architecture Overview

### Directory Structure
```
website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Main GraphQL Day landing page  
│   │   ├── layout.tsx         # Root layout with metadata
│   │   └── opengraph-image.tsx # OG image generation
│   ├── components/            # React components
│   │   ├── design-system/     # Reusable design components
│   │   │   ├── pixelarticons/ # 21 TSX icon components
│   │   │   ├── accordion.tsx  # Collapsible content
│   │   │   ├── anchor.tsx     # Styled links
│   │   │   ├── button.tsx     # Button variations
│   │   │   └── stripes-decoration.tsx
│   │   ├── hero/              # Hero section components
│   │   ├── cta-card-section/  # Call-to-action components
│   │   ├── navbar.tsx         # Site navigation
│   │   └── Various OG image components
│   └── globals.css            # Global styles and CSS variables
└── Configuration files (Tailwind, TypeScript, Next.js)
```

### Component Inventory (41 Total TSX Components)

#### Design System Components
- **Icons**: 21 pixel art icons converted from SVG to TSX with proper TypeScript interfaces
  - Menu, Close, Arrow Down, External Link, Check, Bullseye, Calendar, etc.
  - All use `React.SVGProps<SVGSVGElement>` interface
  - Support `currentColor` for theme compatibility

- **Interactive Components**: 
  - Accordion with expand/collapse functionality
  - Button with multiple variants (primary, secondary)
  - Anchor with hover states and focus management

#### Page Components
- **Hero Section**: Full-width hero with background stripes, date/location, and CTAs
- **Content Sections**: About, Expert Meetup, Venue & Location, Event Partners
- **CTA Card Section**: Call-to-action section with buttons for CFP and tickets

#### Utility Components
- **Image Loading**: ImageLoaded component for progressive image enhancement
- **OpenGraph**: Multiple OG image generation components
- **Navigation**: Responsive navbar with mobile hamburger menu

## Key Features

### Event Information
- **Date**: December 11, 2025
- **Location**: CNIT La Defense, Paris (prominently featured)
- **Integration**: Part of Future of Software Technology week with API Days Paris

### User Experience
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Performance**: Next.js 15 with Turbopack for fast builds
- **Accessibility**: Focus management and semantic HTML
- **SEO**: Proper metadata, OpenGraph images, and structured data

### Interactive Elements
- **Call-to-Action Buttons**: Links to CFP submission and ticket purchase
- **Accordion Navigation**: Collapsible venue/transportation information
- **Location Map**: Embedded Google Maps for venue location
- **Responsive Layout**: Adapts to all screen sizes

## Development Workflow

### Build Process
- **Status**: ✅ Builds successfully in ~3.7s
- **Command**: `npm run build`
- **Output**: Static export ready for deployment
- **Performance**: Optimized bundle sizes with code splitting

### Code Quality
- **TypeScript**: Strict configuration with full type safety
- **Linting**: ESLint integration for code quality
- **Styling**: Consistent design tokens through Tailwind config
- **Icons**: All SVG assets converted to maintainable TSX components

## Notable Implementation Details

### SVG to TSX Conversion
All 21 pixel art icons were systematically converted from SVG files to React TSX components:
- Consistent naming convention (`IconName` + `Icon` suffix)
- Proper TypeScript interfaces with `React.SVGProps<SVGSVGElement>`
- Theme-compatible `currentColor` fills
- Removed all SVG files to prevent confusion

### Design System Integration
- Custom CSS variables for consistent theming
- Tailwind configuration extends base colors with design tokens
- Typography scale with semantic naming
- Responsive utilities for container queries

### Content Management
- Event details centralized in main page component
- External links for CFP and ticket purchases
- Venue information with detailed transportation options
- Partner branding integration

## Deployment Ready
The website is production-ready with:
- ✅ Successful builds
- ✅ No TypeScript errors
- ✅ Optimized assets and code splitting
- ✅ SEO metadata and OpenGraph images
- ✅ Responsive design tested
- ✅ All components functioning correctly

## Next Steps
The migration is complete. The website is ready for:
1. Content updates and speaker announcements
2. Registration integration
3. Additional sponsor/partner information
4. Social media promotion assets

---
*Last updated: Current build passing successfully with all components migrated and SVG icons converted to TSX.*