# ALJ Creative Studio - Landing Page

A modern, professional one-page landing site for ALJ Creative Studio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🔍 Check if You Have This Project

Use this PowerShell command to search for the project in your user directory:

```powershell
Get-ChildItem -Path $HOME -Recurse -Directory -Filter "alj" -Depth 5 -ErrorAction SilentlyContinue | Select-Object FullName
```

Or search by the `package.json` name (faster with limited depth):

```powershell
Get-ChildItem -Path $HOME -Recurse -Include "package.json" -Depth 5 -ErrorAction SilentlyContinue | ForEach-Object { if ((Get-Content $_.FullName -Raw) -match '"name":\s*"alj"') { $_.DirectoryName } }
```

> **Tip**: Adjust `-Depth 5` to search deeper, or replace `$HOME` with a specific folder (e.g., `C:\Dev`) to narrow the search.

## 🚀 Features

- **Modern Design**: Dark navy theme with cyan accents (#0B1220, #00AEEF)
- **Fully Responsive**: Optimized for all devices
- **Smooth Animations**: Framer Motion powered transitions
- **Calendly Integration**: Built-in booking system
- **SEO Optimized**: Meta tags and structured data
- **Professional Structure**: Component-based architecture

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with SEO
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Accordion.tsx
│   └── sections/            # Page sections
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Process.tsx
│       ├── Creators.tsx
│       ├── Portfolio.tsx
│       ├── Timeline.tsx
│       ├── CalendlySection.tsx
│       ├── FAQ.tsx
│       └── Footer.tsx
├── hooks/
│   └── useScrollAnimation.ts
├── lib/
│   └── data.ts              # Content data
└── types/
    └── index.ts             # TypeScript interfaces
```

## 🎨 Sections

1. **Hero**: Compelling headline with CTA buttons
2. **Services**: 6 service cards with icons
3. **Process**: 5-step process visualization
4. **Creators**: Collectif information and perks
5. **Portfolio**: Project showcase grid
6. **Timeline**: Company history and milestones
7. **Calendly**: Booking integration with popup
8. **FAQ**: Accordion-style questions
9. **Footer**: Links and social media

## 🛠 Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Update Calendly URL**:
   - Open `src/components/sections/CalendlySection.tsx`
   - Replace `YOUR_USERNAME` with your actual Calendly username
   - Update both inline widget and popup widget URLs

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## 🎯 Customization

### Colors
- Primary: `#0B1220` (Dark Navy)
- Accent: `#00AEEF` (Cyan)
- Text: `#FFFFFF` (White)
- Secondary Text: `#9CA3AF` (Gray)

### Content
- Update `src/lib/data.ts` to modify services, projects, FAQ, etc.
- Replace placeholder images with actual project images
- Update social media links in `src/lib/data.ts`

### Styling
- Modify `src/app/globals.css` for global styles
- Update component styles in individual component files
- Adjust animations in Framer Motion components

## 📱 Responsive Design

- **Mobile**: Single column layout, stacked sections
- **Tablet**: 2-column grids, optimized spacing
- **Desktop**: Full multi-column layouts, hover effects

## 🔧 Technical Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Booking**: React Calendly
- **Icons**: Emoji-based (easily replaceable)

## 📈 Performance

- Optimized images and animations
- Lazy loading for better performance
- Smooth scroll behavior
- Minimal bundle size

## 🚀 Deployment

Ready for deployment on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

## 📞 Support

For questions or customization requests, contact the development team.

---

**ALJ Creative Studio** - Réunir les créateurs de contenu pour scaler vos projets vidéo.