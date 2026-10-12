import { profile } from "@/data/profile";
import Starfield from "@/components/Starfield";
import FloatingMascot from "@/components/FloatingMascot";
import HomeChat from "@/components/HomeChat";
import HeroTyping from "@/components/HeroTyping";
import TiltCard from "@/components/TiltCard";
import { Download, FileText } from "lucide-react";

const cards: {
  href: string;
  label: string;
  blurb: string;
  glyph: string;
  iconAnim?: "pulse" | "spin";
}[] = [
  {
    href: "/about",
    label: "About",
    blurb: "Who I am and what I build.",
    glyph: "🙋‍♂️",
    iconAnim: "pulse",
  },
  {
    href: "/work-experience",
    label: "Work Experience",
    blurb: "My professional journey and development experience.",
    glyph: "💼",
    iconAnim: "pulse",
  },
  {
    href: "/projects",
    label: "Projects",
    blurb: "Real-world applications built with modern technologies.",
    glyph: "🚀",
    iconAnim: "pulse",
  },
  {
    href: "/contact",
    label: "Contact",
    blurb: "Let’s discuss a project, opportunity, or idea.",
    glyph: "📩",
    iconAnim: "spin",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Starfield />
      <FloatingMascot />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-5 pb-10 pt-14 sm:px-8 sm:pt-20">
        {/* Hero */}
        <section className="relative mx-auto w-full max-w-5xl text-center">
<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <HeroTyping name={profile.name} />
          </h1>

          <p className="mt-5 text-lg font-semibold text-slate-200 sm:text-2xl">
            {profile.role}
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {profile.tagline}
          </p>

          {/* Resume actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-300/30 bg-blue-400/10 px-5 py-3 text-sm font-semibold text-blue-100 shadow-[0_0_24px_rgba(59,130,246,0.08)] transition hover:border-blue-300/60 hover:bg-blue-400/15"
            >
              <FileText size={18} /> View Resume
            </a>
            <a
              href="/resume.pdf"
              download="Suraj-Maurya-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-300/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300/60 hover:bg-emerald-400/15"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
        </section>

        {/* Navigation cards */}
        <section className="mx-auto mt-16 grid w-full max-w-6xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <TiltCard
              key={card.href}
              href={card.href}
              glyph={card.glyph}
              label={card.label}
              blurb={card.blurb}
              iconAnim={card.iconAnim}
              style={{
                animationDelay: `${0.15 + index * 0.1}s`,
              }}
            />
          ))}
        </section>

        {/* Availability */}
        <section className="mx-auto mt-7 flex w-full max-w-6xl flex-col justify-between gap-4 rounded-2xl border border-blue-400/15 bg-gradient-to-r from-blue-950/35 via-slate-900/60 to-indigo-950/30 px-5 py-4 shadow-[0_0_30px_rgba(37,99,235,0.06)] backdrop-blur-xl sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-blue-300 shadow-[0_0_14px_rgba(147,197,253,0.8)]" />

            <p className="text-sm text-slate-300">
              Available for freelance projects, internships, and full-time
              opportunities.
            </p>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="whitespace-nowrap text-sm font-semibold text-blue-300 transition hover:text-blue-200 hover:underline"
          >
            Let&apos;s connect →
          </a>
        </section>

        {/* AI Chat */}
        <section className="mx-auto mt-12 w-full max-w-5xl">
          <HomeChat />
        </section>
      </div>
    </main>
  );
}