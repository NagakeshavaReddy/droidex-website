# Droidex Australia Website

A multi-page website built with Next.js App Router, JavaScript, React and Tailwind CSS 4. The existing FastAPI approval tracker remains untouched in the parent directory.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validate

```bash
npm run lint
npm run build
```

## Routes

- `/` — Home
- `/about-us` — About Droidex
- `/aerial-drone` — Outback DXPRO 15
- `/marine-robot` — DeepDive / ROMAR
- `/e-boat` — Electric Boat Retrofit Propulsion System
- `/thermal-camera` — THERMAX PRO X16 Mini
- `/career` — Career enquiries
- `/contact-us` — Contact details and enquiry form

## Content and integrations

Product and company information, contact details, and the THERMAX PRO purchase link were checked against Droidex's public website. Product images in `public/images` are local copies of Droidex public assets. The underwater photograph is contextual imagery, not a photograph of the ROMAR robot; the public product material reviewed did not provide a suitable robot image.

The public careers page did not list specific vacancies. The careers page therefore offers a general email contact only.

The contact form uses browser validation and opens a pre-filled email through the visitor's configured email application. It does not send, store or track submissions. A server-side form handler or email service must be configured if direct submission is required. The THERMAX PRO purchase button links to Droidex's existing Stripe checkout.