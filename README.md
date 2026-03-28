# Nova Code Dominion Pro Portfolio

A motion-first, recruiter-centric one-page developer portfolio built with **React + TypeScript + Vite**.  
Designed to help graduates and early-career developers stand out with cinematic scroll reveals, instant proof points, and friction-free contact.

---

## What this is

Graduate CVs often blend into a sea of PDFs. This portfolio turns your profile into a **scroll-driven story**:

- A blurred-glass header on a charcoal canvas
- Emerald accent lines that guide the eye to your name, role, and a **one-tap “Download CV”** button
- Sections that reveal only when they enter the viewport (Hero → About → Expertise → Projects → Internships → Contact)
- First-glance credibility with animated stats like **Projects / Internships / Repos**
- Live GitHub / demo links + a Formspree-powered contact form with toast feedback

In under a minute, a reviewer absorbs: **identity → skills → proof → contact info**, and can leave with a **PDF + live link**.

---

## Why a portfolio matters (especially for graduates)

A resume summarizes. A portfolio **proves**.

A personal portfolio helps you:
- show real projects (not just claims)
- build a recognizable personal brand
- stand out in a crowded applicant pool
- share a link recruiters can forward internally or paste into an ATS

**Best places to share your portfolio**
- LinkedIn (bio + Featured)
- Resume header (hyperlink)
- GitHub README
- Email signature
- Job applications (“Portfolio” field)
- QR code on your CV/business card

---

## Highlights

- **Motion-first narrative**  
  IntersectionObserver + framer-motion reveal sections around ~30% visibility for smooth, cinematic pacing.
- **Instant resume export**  
  Header-level link serves a branded PDF (replace with your own file).
- **Live toast feedback**  
  React-Toastify confirms success or surfaces errors when using the contact form.
- **Dynamic metrics row**  
  Animated stat chips (“Projects”, “Internships”, “Repos”) create instant credibility.
- **Scroll-aware navigation**  
  Active-link tracking, navbar darken-on-scroll, and a mobile drawer experience.
- **Accessible by default**  
  Respects `prefers-reduced-motion`, keeps focus rings visible, and uses ARIA labels for icons.
- **Lightweight and fast**  
  SVG icons, lazy-loaded images, and Vite tree-shaking keep bundle size small and load times snappy.

---

## Tech stack

- **React 18 + TypeScript**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **React Scroll**
- **React Toastify**
- **Lucide React**
- **Formspree (fetch helper)**
- **ESLint + Prettier + Husky**

Build output is static: `npm run build` produces a `/dist` folder ready for Netlify, Vercel, Firebase Hosting, or GitHub Pages.

---

## Project structure (typical)

> Your repo may vary slightly, but this is the usual layout.

```
src/
  components/
    HeroSection.tsx
    AboutSection.tsx
    ExpertiseSection.tsx
    ProjectsSection.tsx
    InternshipsSection.tsx
    ContactSection.tsx
  data/
    (plain-object modules: stats, skills, projects, internships, links)
public/
  (images, resume PDF, icons)
tailwind.config.js
vite.config.ts
```

---

## Edit your content

All copy, numbers, and media live in **one of two places**:

1. **Components:** `src/components/*Section.tsx`  
2. **Data modules:** `src/data/*` (plain TypeScript objects / arrays)

Update any of these:
- **Name / Role / Social links**
- **Stats (Projects / Internships / Repos)**
- **Tech stack chips**
- **Projects array (title, description, GitHub, demo links)**
- **Internship entries (logo, role, dates, highlights)**
- **Contact copy + Formspree endpoint**

**Hot reload:** Save changes and Vite updates instantly (often <100ms), usually preserving scroll position.

### Replace your resume PDF
1. Put your resume PDF in `/public`  
2. Update the header “Download CV” link path to your file name  
   Example: `public/Rohan_Kapoor.pdf` → `public/Your_Name.pdf`

### Update images/icons
- Images: swap URLs or use local `/public` assets
- Icons: import any **Lucide** icon and replace the component

### Re-skin the colors
Edit `tailwind.config.js` to change:
- background shades
- accent color (emerald)
- typography scales

---

## Run locally (step-by-step)

1. Download the repo / ZIP
2. Extract it to a folder
3. Open in VS Code
4. In terminal, install dependencies:
   ```bash
   npm install
   ```
5. Start dev server:
   ```bash
   npm run dev
   ```
6. Open the local URL shown (commonly):
   - `http://localhost:5173`

---

## Deploy (Netlify example)

1. Sign up / log in at Netlify
2. **Add New Site → Import from Git**
3. Select your repo
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Deploy → Netlify provides a live URL
6. (Optional) attach a custom domain

### Other deployment options
- **Vercel:** auto CI/CD from GitHub
- **Firebase Hosting:** great if you're already using Firebase
- **GitHub Pages:** simple free static hosting
- **Render:** supports static + fullstack hosting

---

## Accessibility notes

- Animations respect `prefers-reduced-motion`
- Keyboard navigation is supported with visible focus rings
- ARIA labels are used for icon buttons and social links
- Colors aim for strong contrast (WCAG-friendly)

---

## Contact form setup (Formspree)

This project expects a Formspree endpoint.

1. Create a form on Formspree
2. Copy your endpoint URL
3. Paste it into the contact form submit handler (where fetch is called)

If you don’t want Formspree, you can replace it with:
- a custom backend endpoint
- EmailJS
- Netlify forms

---

## Video guide (optional)

A step-by-step playlist is available here:  
https://tinyurl.com/playlist-portfolio

---

## Final note

This portfolio turns a flat resume into a **living, scroll-driven proof of work**.  
Fork it, personalize it, deploy it — and make your application impossible to ignore.
