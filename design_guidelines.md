# Stratem Accounting Services - Design Guidelines

## Design Approach
**Reference-Based Professional Services Design** inspired by modern SaaS and professional services leaders (Stripe, Plaid, QuickBooks) combined with clean B2B principles. This creates trust through clarity, professionalism through restraint, and credibility through consistent execution.

## Typography System

**Font Selection:** Inter or DM Sans (Google Fonts) - modern, professional sans-serif with excellent readability

**Hierarchy:**
- H1 (Hero Headlines): text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- H2 (Section Headers): text-3xl md:text-4xl lg:text-5xl, font-bold
- H3 (Subsection/Card Headers): text-xl md:text-2xl, font-semibold
- H4 (Component Headers): text-lg md:text-xl, font-semibold
- Body Large: text-lg md:text-xl, font-normal (hero subtext, important callouts)
- Body Regular: text-base md:text-lg, leading-relaxed
- Body Small: text-sm md:text-base (footer, captions)

## Spacing & Layout System

**Core Spacing Units:** Use Tailwind spacing of 4, 6, 8, 12, 16, 20, 24 for consistency
- Component padding: p-6 to p-8
- Section vertical spacing: py-16 md:py-20 lg:py-24
- Inner section spacing: space-y-12 to space-y-16
- Container max-widths: max-w-7xl for full sections, max-w-4xl for text-focused content

**Grid Systems:**
- Services cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8
- Process steps: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8
- Gallery: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6

## Component Library

**Navigation Header:**
- Sticky positioning with subtle shadow on scroll
- Logo text on left (text-xl font-bold)
- Horizontal menu items on desktop (space-x-8), hamburger menu on mobile
- Navigation links: text-base font-medium with subtle hover transitions
- Consistent padding: px-6 md:px-8, py-4

**Hero Section:**
- Full viewport height (min-h-screen) with professional background image (Namibian business setting or modern office)
- Dark overlay (bg-opacity-60 to bg-opacity-70) for text readability
- Centered content with max-w-4xl
- Headline + subtext + dual CTAs in vertical stack
- Primary button: Large (px-8 py-4), blurred background (backdrop-blur-sm)
- Secondary button: Outlined style with blurred background
- Spacing between elements: space-y-6 md:space-y-8

**Service Cards:**
- Equal height cards with border treatment
- Icon/graphic at top (64x64 minimum)
- Card structure: p-8, space-y-4
- Bullet points with proper list styling (list-disc, pl-5)
- Subtle hover effect (transform scale-105 transition)

**Process Steps:**
- Numbered indicators (large, bold numbers or icons)
- Each step: border-l or connecting line on desktop
- Step structure: space-y-3, min-height consistency
- Vertical stack on mobile, horizontal flow on desktop

**Contact Form:**
- Two-column layout on desktop: Form (col-span-2) + Contact Info (col-span-1)
- Input fields: Consistent height (h-12), padding (px-4), border-radius (rounded-md)
- Dropdown: Styled select with proper spacing
- Textarea: min-h-32
- Form spacing: space-y-6
- Submit button: Full width on mobile, auto width on desktop

**Gallery Grid:**
- Responsive image cards with aspect-ratio-square or aspect-ratio-video
- Hover zoom effect on images
- Consistent gap spacing throughout

**Footer:**
- Three-column structure on desktop: Business info, Quick links, Contact
- Single column stack on mobile
- Top border treatment
- Padding: py-12 md:py-16

## Images Strategy

**Required Images:**
1. **Hero Image:** Large, professional photograph showing modern Namibian business environment, office setting, or professional handshake. Must convey trust and local expertise. Image should be high-resolution, slightly desaturated for professionalism
2. **About Us Section:** Team photo or office environment photo showing the Stratem workspace
3. **Gallery Page:** 6-9 placeholder images showing: office workspace, team collaboration, financial documents (stylized), technology/computers, Namibian business setting, professional meetings

**Image Treatment:**
- All images should have subtle overlay or filter for brand consistency
- Hero image: Dark overlay (40-50% opacity) for text readability
- Gallery images: Maintain aspect ratios, apply subtle grayscale or blue tint on hover

## Page-Specific Layouts

**Home Page:**
- Hero (full viewport)
- Company intro section (centered, max-w-4xl, py-20)
- Services preview (4 cards, py-24)
- CTA section before footer (centered, py-16)

**About Us:**
- Page header with title (py-16)
- Story section with image (two-column on desktop)
- Values/benefits grid (3 columns on desktop)

**Services:**
- Page header with intro paragraph
- 4 detailed service cards in responsive grid
- Bottom CTA encouraging consultation

**Our Process:**
- Visual timeline or step cards
- Each step fully detailed
- Progress indicators connecting steps (desktop only)

**Contact:**
- Split layout: Form + Info sidebar
- Clear visual hierarchy
- Trust signal: "We respond within 1 business day" prominently displayed

## Accessibility & Interaction

- Minimum touch target: 44x44px for all interactive elements
- Focus states: Visible outline on all focusable elements
- Form labels: Always visible, proper association
- Semantic HTML structure throughout
- Skip navigation link for keyboard users
- ARIA labels on icon-only buttons

## Responsive Breakpoints

- Mobile: Base styles (< 768px)
- Tablet: md: (768px - 1024px)
- Desktop: lg: (1024px+)
- Wide: xl: (1280px+) for container constraints