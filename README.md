# Suraj — Portfolio (Next.js + AI Chat)

Multi-page portfolio, Amjad ke portfolio jaisa structure — projects, case-study pages,
about, work experience, contact, aur ek floating AI chat widget jo GPT-4o-mini use
karta hai.

## Structure

- `/` — Home
- `/projects` — sab projects ki listing
- `/projects/[slug]` — har project ka case-study page (data `data/projects.ts` mein)
- `/about` — bio
- `/work-experience` — timeline
- `/contact` — form (mailto-based, no backend needed)
- `/api/chat` — AI chat backend (OpenAI GPT-4o-mini)
- Floating "talk to my AI" button — har page pe visible

## Local setup

```bash
npm install
cp .env.example .env.local   # then paste your OPENAI_API_KEY inside
npm run dev
```

Site `http://localhost:3000` par khulega.

## Apna content daalna

1. `data/profile.ts` — apna naam, bio, skills, work experience, education edit karo.
2. `data/projects.ts` — apne projects add/edit karo. `coverImage` mein Cloudinary URL
   daal sakte ho (jaise Amjad karta hai) — pehle image Cloudinary pe upload karo,
   phir uska URL yahan paste karo.
3. `components/Nav.tsx` aur `Footer.tsx` mein social links update karo.

## OpenAI API key kaise banayein

1. https://platform.openai.com/api-keys pe jaake sign up/login karo.
2. "Create new secret key" click karo, key copy karo (sirf ek baar dikhegi).
3. Billing section mein card add karo — GPT-4o-mini bahut sasta hai, portfolio-scale
   traffic ke liye ₹100/month se bhi kam lagega.
4. Key ko kabhi bhi code mein hardcode mat karo — sirf `.env.local` (local) ya
   Vercel Environment Variables (production) mein daalo.

## Deploy to Vercel

1. Is repo ko GitHub pe push karo.
2. https://vercel.com pe "New Project" → apna GitHub repo import karo.
3. Deploy se pehle "Environment Variables" mein `OPENAI_API_KEY` add karo.
4. Deploy click karo — 2 minute mein live ho jayega.

## Notes

- Chat widget frontend `components/ChatWidget.tsx` mein hai, backend
  `app/api/chat/route.ts` mein — dono edit kar sakte ho.
- Design tokens (colors, fonts) `tailwind.config.ts` mein hain agar palette
  change karni ho.
