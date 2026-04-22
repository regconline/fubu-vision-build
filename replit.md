# Project Overview

A React/TypeScript frontend application built with Vite, Tailwind CSS, and shadcn/ui components. Originally created in Lovable, migrated to Replit.

## Stack

- **Framework**: React 18 with TypeScript
- **Build tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui component library
- **Routing**: React Router DOM v6
- **State/Data**: TanStack React Query
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- 

## Project Structure

```
src/
  App.tsx          - Root app with routing
  main.tsx         - Entry point
  pages/           - Page components (Home, About, Contact, Portfolio, Services, NotFound)
  components/      - Reusable UI components
    ui/            - shadcn/ui base components
    layout/        - Layout components
    sections/      - Page section components
  hooks/           - Custom React hooks
  lib/             - Utility functions
  assets/          - Static assets
```

## Running the App

The app runs on port 5000 via `npm run dev`. The workflow "Start application" manages this process.

## Deployment

Build with `npm run build` — outputs to `dist/`. Deploy as a static site.

## Notes

- Removed `lovable-tagger` dependency from Vite config (Lovable-specific tooling not needed on Replit)
- Vite server configured for `0.0.0.0` host binding so Replit's proxy can reach it
