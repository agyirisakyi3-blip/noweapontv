# NO WEAPON TV

Premium Christian Streaming Platform built with Next.js 14.

## Features

- **Home** - Hero section with featured content
- **Live TV** - Live streaming section with program schedule
- **Sermons** - Searchable sermon library with filters
- **Testimonies** - Share and view testimonials
- **About** - Church information
- **Contact** - Contact form

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- Playwright (testing)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run tests
npx playwright test

# Lint
npm run lint
```

## Project Structure

```
app/
├── page.tsx           # Home
├── layout.tsx         # Root layout
├── globals.css        # Global styles
├── about/             # About page
├── contact/           # Contact page
├── live/              # Live TV page
├── sermons/           # Sermons page
└── testimonies/       # Testimonies page

components/
├── layout/
│   ├── Header.tsx
│   └── Footer.tsx
├── sections/
│   ├── FeaturedSermons.tsx
│   ├── HeroSection.tsx
│   ├── LiveTVSection.tsx
│   └── SermonFilters.tsx
└── ui/
    ├── Button.tsx
    ├── ProgramCard.tsx
    ├── SermonCard.tsx
    ├── TestimonyCard.tsx
    └── ThemeToggle.tsx

lib/
├── auth.ts
├── data.ts
├── hooks.ts
├── utils.ts
└── watchHistory.ts
```

## License

MIT