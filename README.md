# Europa 2026 — Guía de Viaje

A mobile-first travel itinerary app for a 23-day Europe trip (March 18 – April 9, 2026) covering Italy, Spain, and more.

## Tech Stack

- **React 19** + **TypeScript** + **Vite 7**
- **Tailwind CSS v4** with `@theme` design tokens
- Data layer abstracted via `useTripData()` hook — ready to swap for API/DB

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  types/trip.ts             — Domain types (TripDay, TransportLeg, Meals, Activity)
  data/days.ts              — Static 23-day itinerary data
  hooks/
    useTripData.ts          — Data access hook (future API swap point)
    useSwipe.ts             — Touch swipe navigation
  components/
    AppHeader.tsx           — Fixed header + scrollable day pills
    DayNav.tsx              — Horizontal day pill navigation
    BottomNav.tsx           — Glass morphism footer with prev/next
    DaySlide.tsx            — Day view (hero + transport + meals + activities)
    DayHero.tsx             — Day title card with accommodation info
    SectionCard.tsx         — Collapsible section wrapper
    TransportSection.tsx    — Transport legs with route visuals
    MealsSection.tsx        — Breakfast / lunch / dinner
    ActivitiesSection.tsx   — Timeline with activity cards
  App.tsx                   — Root component
  index.css                 — Tailwind theme tokens
```
