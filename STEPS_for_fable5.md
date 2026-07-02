# Step-by-Step Build Instructions for Claude Fable 5
## Paste ONE step at a time. Wait for it to finish before pasting the next.

---

## STEP 1 — Project Scaffold + Hero Section

Build a React 18 + TypeScript + Vite project with Tailwind CSS 3 and Framer Motion 12.

Create the Hero section:
- Fixed full-viewport `<video>` background: `position: fixed; top:0; left:0; width:100%; height:100vh; object-fit: cover; z-index:0`, autoplay, muted, loop, playsInline
- Transparent section over it, `position: relative; z-index:1; display:flex; flex-direction:column; justify-content:center; height:100vh; padding: 70px 32px 32px 32px` (mobile ≤900px: `90px 18px 32px 18px`)
- Heading: "HAFIZ MUHAMMAD USMAN — AI & ML DEVELOPER." — each word in its own `<span>`, `display:flex; flex-wrap:wrap; gap:0.25em`. Staggered fade-up: `opacity:0,y:32px → opacity:1,y:0`, Framer Motion `whileInView`, `viewport:{once:true, amount:0.2}`. Delay = `0.15 + (wordIndex * 0.08)`. Easing `[0.22,1,0.36,1]`, duration `0.7s`. Typography: `font-size:clamp(26px,3vw,42px); font-weight:700; line-height:1.08; letter-spacing:-0.01em; text-transform:uppercase; color:#fff`
- Subtext: "Building intelligent, data-driven systems and practical machine learning applications — from idea to deployment." Same fade-up pattern, `delay:0.9`, `y:24`. Style: `margin-top:24px; font-size:14px; line-height:1.65; color:rgba(255,255,255,0.85); max-width:260px`
- Font: `@import url('https://db.onlinewebfonts.com/c/e66905e07608167a84e6ad52f638c3c6?family=Helvetica+Now+Var')`, applied globally
- Add a nav bar (fixed top) with links: About, Skills, Projects, Contact (see Step 6 note on Experience)
- Build a reusable `FadeUp` component (Framer Motion wrapper) other sections will reuse

Video source: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4` (note: not self-hosted, flag as temporary)

---

## STEP 2 — About Section

Add an About section (`id="about"`) below Hero, using the same FadeUp pattern:
- Pitch: "I build intelligent systems, specializing in applied AI, machine learning, and bringing deep learning models into practical applications."
- Education: "BSCS — University of Management and Technology (UMT)"
- Project work list: Multi-Class Medical Image Classification System, AI Code Maintainability Scoring Engine, Smart Traffic Optimization System

---

## STEP 3 — Skills Section

Add a Skills section (`id="skills"`): Python, Machine Learning / Deep Learning, NLP, Computer Vision, React, Flask — displayed as pill/badge elements with staggered fade-up entrance.

---

## STEP 4 — Projects Section

Add a Projects section (`id="projects"`), grid of cards, one per repo, linking to `https://github.com/hmusman2804045-max/<repo-name>`:
- Multi-Class-Medical-Image-Classification-System
- AI-Code-Maintainability-Scoring-Engine
- Smart-Traffic-Optimization-System
- fraud-detection-ml

⚠️ Verify this GitHub username actually resolves before treating links as final — it was relayed via screenshot, not independently confirmed.

Each card: repo name, short description, language tag, "updated" date placeholder (real data should eventually come from `GET https://api.github.com/users/hmusman2804045-max/repos`).

---

## STEP 5 — Contact Section + Form

Add a Contact section (`id="contact"`) with a form: Name, Email, Subject, Message fields.
On submit → call a Vercel serverless function at `/api/contact` → that function calls the Resend API → sends an email to the user's inbox.
Requirements: server-side validation, honeypot field for spam, no client-side-only email service (explicitly not EmailJS — API key exposure risk).
Note: needs a real Resend account + API key from the user before this can be tested end-to-end.

---

## STEP 6 — Nav Fix + Social Links

- Current nav has "Experience" as a link with no matching section — either add a dedicated Experience section (separate from About) or remove that nav link. User needs to decide which; don't guess.
- Add LinkedIn + GitHub + email icons/links, likely in a footer or near Contact: LinkedIn — `https://www.linkedin.com/in/hafiz-muhammad-usman-a51300382`

---

## STEP 7 — Deployment Prep

- Push to GitHub with `main` / `develop` / `feature/*` branch structure
- Connect repo to Vercel
- Add custom domain `hmuhammadusman.com` in Vercel, update Cloudflare DNS (CNAME) to point to it
