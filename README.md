# Biruk Ayele - Modern Next.js Portfolio

A modern, high-performance portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Features

- **Modern Architecture**: Next.js App Router with React Server Components & Client Components.
- **Dynamic Typing Hero**: Smooth, dependency-free typing animation displaying your core roles.
- **Responsive Dark Design**: Tailored dark theme with sleek gradients, subtle glow, and glassmorphic navbar.
- **Decoupled Data Architecture**: All your content (bio, skills, experiences, projects, socials) is cleanly organized in [`src/data/portfolioData.ts`](./src/data/portfolioData.ts).
- **Filterable Projects Showcase**: Category filtering across Full-Stack, Frontend, Clones, and Games with live demo & GitHub repository links.
- **Interactive Experience Timeline**: Dedicated timeline component highlighting your tenure at Bura Technology.
- **Working Contact Section**: Integrated inquiry form with direct mailto fallback and social links.
- **SEO Ready**: Configured OpenGraph metadata, keywords, and favicons.

---

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React + Custom Brand SVGs
- **Deployment Ready**: Vercel, Netlify, or GitHub Pages

---

## 🏃 Getting Started

Navigate to the portfolio directory:

```bash
cd portfolio
```

### 1. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production

```bash
npm run build
```

### 3. Start Production Server

```bash
npm run start
```

---

## ✏️ How to Customize Your Content

All data is separated from the UI components. To add or update projects, experiences, or skills, simply edit [`src/data/portfolioData.ts`](./src/data/portfolioData.ts):

- **Update Projects**: Add new project objects to the `projects` array.
- **Add Skills**: Modify or add items to `skillCategories`.
- **Update Experience**: Add work entries to `experiences`.
- **Change Bio / Socials**: Edit `personalInfo`.

---

## 🌐 Deploy to Vercel (1-Click)

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and import your repository.
3. Set the Root Directory to `portfolio`.
4. Click **Deploy**. Vercel will automatically build and publish your site with a free SSL domain!
