# HusseinSDesiger — Instructional Designer Portfolio

A modern, single-page portfolio site built with **Next.js 16 (App Router)**, **React 19**, and **TypeScript**.

## Getting Started

Make sure Node.js is installed (installed locally at `~/.local/node/bin` if not on your PATH):

```bash
export PATH="$HOME/.local/node/bin:$PATH"
```

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Customize your content

All site content (name, about text, skills, and portfolio projects) lives in a single file:

- **`lib/content.ts`** — profile, about, skills, projects, contact info

Edit that file to swap in your real projects, resume link, email, and LinkedIn URL. No code changes needed.

## Project structure

```
app/
  layout.tsx      — root layout, fonts, metadata
  page.tsx        — single-page layout (navbar, hero, about, skills, portfolio, contact)
  globals.css     — indigo/blue theme styles
lib/
  content.ts      — all editable content
public/
  icon.svg        — site favicon
```

## Deploy

Easiest: push this repo to GitHub and import into [Vercel](https://vercel.com/new). The project is a static-compatible Next.js app, so hosting on Netlify/Vercel works out of the box.