# Adi (Adarsh Dessai) - AI Architect Portfolio

Futuristic "AI OS dashboard" style portfolio built with Next.js 14 + TypeScript, Tailwind, Framer Motion, Zustand, React Hook Form + Zod.

[![Railway Deploy](https://railway.app/button.svg)](https://railway.app/new/template?repo=https://github.com/adarshdessai4-spec/my_ai_arch_portfolio)

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Replace Placeholder Assets

- Portrait: `public/adi.jpg`
- Logo: `public/logo.png`
- OpenGraph: `public/og.png`

Note: Live portrait uses a CSS blink overlay. Replace `public/adi.jpg` with your real photo. If you plan to use video later, swap the `LivePortrait` component.

## Update Links

- Calendly placeholder: `/app/page.tsx` and `/app/contact/page.tsx`
- WhatsApp placeholder: `/app/contact/page.tsx`

## AI Backend Integration (Later)

- Chat endpoint stub: `app/api/chat/route.ts`
- Estimator endpoint stub: `app/api/estimate/route.ts`

Hook your RAG/agent backend into `POST /api/chat` and update `AskAdiChat` to stream responses.

## Role-based Personalization

Role selection persists in localStorage via Zustand.
- Role store: `lib/store.ts`
- Role data + service ordering: `data/services.ts`
- Role-driven product + case study highlights: `app/page.tsx`

## Performance Notes

- Tailwind + motion transitions are lightweight.
- `prefers-reduced-motion` supported in `styles/globals.css`.
- No heavy 3D/shaders included.

## Folder Highlights

- Pages: `app/*`
- Core components: `components/*`
- Typed data: `data/*`

## Deploy on Railway

1) Push this repo to GitHub.
2) In Railway, create a new project from the repo.
3) Set build command: `npm run build`
4) Set start command: `npm run start`
5) Optional env: `NEXT_TELEMETRY_DISABLED=1`

Railway will auto-detect Next.js and expose the deployment URL.

Optional: add a Railway badge by replacing the link above with your project URL once deployed.
