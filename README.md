# PaperAnimator

Browser-first paper animation editor for nived938/paperanimator.

Included: landing page, image upload, paper cutout controls, Fold Out, Magazine Letters, Motion Lab workspace, aspect ratios, transparent/white/green backgrounds, PNG export, and local-first Canvas rendering.

Deliberately excluded: Google authentication, accounts, billing, pricing, and paid image-processing APIs.

Run: npm install, copy .env.example to .env.local, npm run dev.

Run db/schema.sql in Neon for optional project persistence. The editor itself does not require a database or external image API.

Deployment: Vercel + Neon is the preferred setup. For heavier video rendering later, a Render background worker can be added.