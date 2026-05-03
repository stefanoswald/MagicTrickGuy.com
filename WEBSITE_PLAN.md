# MagicTrickGuy.com — Website Plan

## Overview

**Client:** Stefan Oswald — Magician, Speaker, Emcee, Mastermind Host  
**Domain:** MagicTrickGuy.com  
**Goal:** Premium booking website that converts corporate event planners, trade show managers, and entrepreneurs into booked clients.  
**Design:** Dark luxury — deep black/navy background, gold accents, crisp white type. Modern, polished, magical but never cheesy. Mobile-first.

---

## Page Map

| Route | Purpose |
|---|---|
| `/` | Home — full story, all services, social proof, CTA |
| `/corporate-magic` | Corporate Events service page |
| `/trade-show-magic` | Trade Show Magic service page |
| `/keynote-magic` | Keynote Magic Show service page |
| `/masterminds` | Magic Mansion Mastermind Events page |
| `/about` | About Stefan Oswald |
| `/testimonials` | Full testimonials archive |
| `/videos` | Video gallery / showreel |
| `/contact` | Contact / Book Now form |

---

## Homepage Sections

### 1. Hero
- Full-screen video/image background (dark overlay)
- Headline: *"Magic That Makes Your Event Impossible To Forget"*
- Subheadline: Stefan Oswald blends world-class sleight of hand, comedy, storytelling, and audience interaction...
- CTAs: **Book Stefan** (primary gold) + **Watch Video** (ghost)
- Placeholder: `[Replace with Stefan hero photo/video — landscape, dramatic lighting]`

### 2. Credibility Bar
- Logos row (placeholder logo blocks × 6)
- Stats: "1,000+ Five-Star Reviews", "500+ Corporate Events", "15+ Years Experience"
- Event types tag line

### 3. Services Cards
- 6 cards: Corporate Events, Trade Shows, Keynote Magic, Masterminds, Private Events, Emcee / Host
- Each card: icon, title, one-line description, "Learn More" link
- Hover state: gold border reveal, slight lift

### 4. Signature Video Section
- Large 16:9 video placeholder with play overlay
- Section headline + short supporting copy
- CTA below video

### 5. Why Book Stefan
- 5–6 value pillars: Funny & Professional, Fully Interactive, Easy to Work With, Meaningful Message, Memorable Moments, Versatile Across Formats
- Icon + headline + 2-line description per pillar

### 6. Masterminds Feature Section
- Full-width dark section with gold accents
- Magic Mansion Mastermind positioning: premium 3-day experiences
- Target audience: magicians, creators, entrepreneurs, high-level thinkers
- CTA: "Join the Next Mastermind"

### 7. Testimonials Carousel
- Star rating, quote, name, company/title, event type
- 6 placeholder testimonials, carousel on mobile
- "See All Testimonials" link

### 8. About Stefan (Preview)
- Short bio snippet + photo placeholder
- "Meet Stefan" CTA linking to /about

### 9. Final CTA / Contact Form
- Headline: *"Let's Make Your Event Unforgettable"*
- Fields: Name, Email, Phone, Event Date, Event Type (dropdown), Location, Guest Count, Budget Range, Message
- Submit button: gold, full-width on mobile

---

## Inner Page Structure

### Corporate Magic / Trade Show Magic / Keynote Magic
Each follows the same template:
1. Hero (service-specific headline + photo placeholder)
2. What to Expect (3 columns)
3. Audience Benefits
4. Process / How It Works (numbered steps)
5. Testimonials (filtered by service type)
6. FAQ Accordion
7. Booking CTA block

### Masterminds Page
1. Hero — "The Magic Mansion Mastermind"
2. What Is It? (immersive description)
3. Who It's For
4. What You'll Experience (3-day breakdown)
5. Past Attendee Testimonials
6. Application / Interest Form CTA

### About Page
1. Full bio hero
2. Story sections: origin, performance history, philosophy
3. Photo gallery placeholder (grid)
4. Press / media mentions
5. Download EPK button

### Testimonials Page
- Filterable grid by event type
- Each card: photo placeholder, quote, name, title, event type badge

### Videos Page
- Hero showreel embed (YouTube placeholder)
- Grid of video thumbnails (3 categories: Corporate, Stage, Behind the Scenes)

### Contact Page
- Full booking form (same as homepage section 9)
- FAQs on sidebar
- Response time promise

---

## Reusable Components

| Component | Used On |
|---|---|
| `Navbar` | All pages — sticky, transparent→dark on scroll |
| `Footer` | All pages — links, social, copyright |
| `StickyBookButton` | All pages — floating gold "Book Now" button (mobile bottom bar) |
| `HeroSection` | Home + all inner pages (variant: full-screen vs. compact) |
| `ServiceCard` | Home services grid + inner page "related services" |
| `TestimonialCard` | Homepage + Testimonials page |
| `TestimonialCarousel` | Homepage carousel |
| `VideoEmbed` | Home + Videos page |
| `CtaBlock` | Bottom of every page |
| `BookingForm` | Home + Contact page |
| `CredibilityBar` | Home (logos + stats) |
| `WhyBookPillar` | Home Why Book section |
| `FaqAccordion` | Service pages + Contact page |
| `SectionHeading` | Every section |
| `PlaceholderImage` | Throughout — clearly labeled for Stefan to replace |

---

## Visual Design System

### Colors
- `--color-bg`: `#0a0a0f` (near-black)
- `--color-surface`: `#12121a` (card/section bg)
- `--color-gold`: `#c9a84c` (primary accent)
- `--color-gold-light`: `#e8c97a` (hover/highlight)
- `--color-white`: `#f5f5f0`
- `--color-muted`: `#9a9a8a`
- `--color-blue-deep`: `#0d1b2a`

### Typography
- Display: Cormorant Garamond (elegant serif for headlines)
- Body: Inter (clean sans-serif for readability)
- Accent: Cinzel (small caps for labels, section tags)

### Spacing
- Section padding: 96px top/bottom desktop, 64px mobile
- Max content width: 1200px
- Card gap: 24px

---

## WordPress Editing Approach

Since this is built as a React site, Stefan can update content by:

1. **Text/Copy** — Edit directly in the component files (clearly commented)
2. **Photos** — Replace `PlaceholderImage` components with `<img>` tags pointing to uploaded assets
3. **Videos** — Swap YouTube embed IDs in the VideoEmbed component
4. **Testimonials** — Edit the `testimonials.data.ts` array (name, quote, company, event type)
5. **Services** — Edit the `services.data.ts` array (title, description, icon, link)
6. **Form** — Contact Form 7-style fields are built in; backend endpoint can be connected to Formspree or Netlify Forms

> **Note:** For full WordPress CMS editing, the design and components can be converted to a Gutenberg block theme by porting the HTML/CSS into WordPress FSE template parts. The React build serves as the design reference and static prototype.

---

## SEO Plan

- `<title>` and `<meta description>` per page
- Schema markup: `LocalBusiness` + `PerformingGroup` + `Event`
- Open Graph tags for social sharing
- Sitemap-ready route structure
- Alt text on all images (placeholder text included)
- Clean semantic HTML (h1, h2, article, section, nav, footer)
