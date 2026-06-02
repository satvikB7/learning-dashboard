# Learning Dashboard

A simple learning dashboard built using Next.js, Supabase, Tailwind CSS and Framer Motion.

## Features

- Responsive dashboard layout
- Sidebar navigation
- Mobile bottom navigation
- Course data from Supabase
- Loading state
- Error state
- Simple animations

## Technologies Used

- Next.js
- TypeScript
- Supabase
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure

- app/ - pages and layouts
- components/ - reusable UI components
- lib/ - Supabase client
- types/ - TypeScript types

## Server and Client Components (Main Ones I added Here)

The page component fetches course data from Supabase on the server.

Interactive components such as the sidebar, navigation and animations use client components.

## Challenges Faced (Mainly I Faced This Challenge Only)

The main challenge was connecting Supabase with Next.js and configuring Row Level Security policies so the dashboard could fetch data correctly.

## Environment Variables

Create a .env.local file and add:

NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY
