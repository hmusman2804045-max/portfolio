# Full Build Roadmap — Portfolio (hmuhammadusman.com)
## Phase-by-phase, with tool ownership and handoff order

Legend: **[FABLE 5]** = writes code | **[ANTIGRAVITY]** = files/git/repo/assets | **[USER]** = decision needed, don't guess

---

## PHASE 0 — Repo & Environment Setup

1. **[ANTIGRAVITY]** Initialize GitHub repo, create branch structure: `main`, `develop`, `feature/*`
2. **[ANTIGRAVITY]** Create base folder structure (`src/`, `src/components/`, `src/assets/`, `public/`)
3. **[FABLE 5]** Scaffold the Vite + React 18 + TypeScript project inside that structure (package.json, tsconfig, vite.config, tailwind.config, postcss.config)
4. **[ANTIGRAVITY]** Commit scaffold to `feature/setup` → PR into `develop`

> Sequence matters here: step 3 needs step 2 done first, or Fable 5 has nowhere defined to put files.

---

## PHASE 1 — Hero Section

5. **[FABLE 5]** Build Hero.tsx: fixed video background, transparent overlay, staggered word heading ("HAFIZ MUHAMMAD USMAN — AI & ML DEVELOPER."), subtext, FadeUp component, nav bar. (Full spec: see STEPS_for_fable5.md Step 1)
6. **[ANTIGRAVITY]** Commit to `feature/hero`, PR into `develop`
7. **[USER]** Visually confirm: video plays/loops/muted, words stagger in correctly, nav links are visible

---

## PHASE 2 — About Section

8. **[FABLE 5]** Build About.tsx (pitch, education, project list) — content already finalized, see Section "Real Content" below
9. **[ANTIGRAVITY]** Commit to `feature/about`, PR into `develop`

---

## PHASE 3 — Skills Section

10. **[FABLE 5]** Build Skills.tsx (6 skills as pill badges with stagger)
11. **[ANTIGRAVITY]** Commit to `feature/skills`, PR into `develop`

---

## PHASE 4 — Projects Section

12. **[USER]** Verify GitHub username `hmusman2804045-max` actually resolves with the 4 named repos — do this before Fable 5 hardcodes links
13. **[FABLE 5]** Build Projects.tsx + ProjectCard.tsx (grid of 4 repo cards)
14. **[ANTIGRAVITY]** Commit to `feature/projects`, PR into `develop`

---

## PHASE 5 — Nav Fix + Social Links

15. **[USER]** Decide: does "Experience" get its own section, or does the nav link get removed?
16. **[FABLE 5]** Implement whichever the user decided in step 15; add LinkedIn/GitHub/email links (footer or near Contact)
17. **[ANTIGRAVITY]** Commit to `feature/nav-social`, PR into `develop`

---

## PHASE 6 — Contact Form

18. **[USER]** Create a Resend account, generate an API key
19. **[FABLE 5]** Build Contact.tsx (Name/Email/Subject/Message form) + `/api/contact` Vercel serverless function calling Resend, with server-side validation + honeypot
20. **[ANTIGRAVITY]** Store the Resend API key as an environment variable / secret (never committed to the repo) — commit code to `feature/contact-form`, PR into `develop`
21. **[USER]** Test: submit the form, confirm email actually arrives

---

## PHASE 7 — Assets & Video

22. **[USER]** Decide: keep the current CloudFront video URL, or self-host the video file
23. **[ANTIGRAVITY]** If self-hosting: download the video, add it to `src/assets/` or a CDN the user controls, update the reference
24. **[FABLE 5]** Update Hero.tsx video source if changed

---

## PHASE 8 — Merge & Deploy

25. **[ANTIGRAVITY]** Once `develop` is stable (all above phases merged and tested), open PR from `develop` → `main`
26. **[ANTIGRAVITY]** Connect repo to Vercel, enable auto-deploy from `main`
27. **[ANTIGRAVITY]** Add custom domain `hmuhammadusman.com` in Vercel project settings
28. **[USER]** Update Cloudflare DNS: add CNAME record pointing to Vercel (Vercel's dashboard gives the exact value after step 27)
29. **[USER]** Verify site loads at hmuhammadusman.com with SSL active

---

## Real Content Reference (for Fable 5, don't re-ask user)

- **Pitch:** "I build intelligent systems, specializing in applied AI, machine learning, and bringing deep learning models into practical applications."
- **Skills:** Python, Machine Learning / Deep Learning, NLP, Computer Vision, React, Flask
- **Projects:** Multi-Class-Medical-Image-Classification-System, AI-Code-Maintainability-Scoring-Engine, Smart-Traffic-Optimization-System, fraud-detection-ml
- **Education:** BSCS, University of Management and Technology (UMT)
- **LinkedIn:** https://www.linkedin.com/in/hafiz-muhammad-usman-a51300382
- **GitHub username:** hmusman2804045-max (⚠️ unverified — see Phase 4, step 12)

---

## Outstanding [USER] Decisions Blocking Later Phases

| Decision | Blocks |
|---|---|
| GitHub username verified? | Phase 4 |
| Experience: own section or drop nav link? | Phase 5 |
| Resend account created? | Phase 6 |
| Video: keep CloudFront link or self-host? | Phase 7 |
