# 🚀 Full Stack Developer Portfolio — Next.js

Ek **Bold & Colorful** animated portfolio, built with **Next.js 14**, **Framer Motion**, aur **Tailwind CSS**.

## ✨ Features

- 🎨 **Bold & Colorful** dark theme with animated gradient orbs
- ⚡ **Framer Motion** animations — scroll reveals, hover effects, typing animation
- 📱 **Fully Responsive** — mobile, tablet, desktop
- 🧩 **All Sections** — Hero, About, Skills, Projects, Timeline, Contact
- 🔤 **Typing Animation** with `react-type-animation`
- 📊 **Animated skill progress bars**
- 🗺️ **Alternating Timeline** with animated line
- 📬 **Contact Form** with loading state
- 🌊 **Custom scrollbar + noise texture overlay**

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.js        # Root layout with fonts
│   ├── page.js          # Main page (imports all sections)
│   └── globals.css      # Global styles + animations
├── components/
│   ├── Navbar.js        # Sticky navbar with mobile menu
│   ├── Hero.js          # Hero with typing + floating orbs
│   ├── About.js         # About with animated avatar + stats
│   ├── Skills.js        # Skill bars + tech pill cloud
│   ├── Projects.js      # Project cards with hover effects
│   ├── Timeline.js      # Experience & education timeline
│   ├── Contact.js       # Contact form + info
│   ├── Footer.js        # Footer
│   └── FadeIn.js        # Reusable scroll-reveal component
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🛠️ Setup & Run

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

### 3. Build for production

```bash
npm run build
npm start
```

## 🎨 Customize Karo

### Apna naam/info update karo:
- `components/Hero.js` — Apna naam aur description
- `components/About.js` — Stats aur about text
- `components/Projects.js` — Apne projects add karo
- `components/Timeline.js` — Apni experience/education
- `components/Contact.js` — Apna email/location

### Colors change karne ke liye:
`app/globals.css` mein CSS variables update karo:
```css
:root {
  --c-pink: #FF3CAC;
  --c-violet: #784BA0;
  --c-blue: #2B86C5;
  --c-mint: #00F5A0;
  --c-yellow: #FFD200;
}
```

## 🚀 Deploy on Vercel

```bash
npm install -g vercel
vercel
```

---

Made with ❤️ by AlexDev
