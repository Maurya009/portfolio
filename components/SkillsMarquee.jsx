"use client";
import { useState } from "react";

const frontendBackend = [
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

const databaseTools = [
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
];

function MarqueeRow({ items, direction, speed }) {
  const [paused, setPaused] = useState(false);
  const doubled = [...items, ...items, ...items];
  const isReverse = direction === "right";
  return (
    <div
      style={{ position: "relative", overflow: "hidden", width: "100%" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: "8rem", background: "linear-gradient(to right, #0a0a0a, transparent)", zIndex: 10, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "8rem", background: "linear-gradient(to left, #0a0a0a, transparent)", zIndex: 10, pointerEvents: "none" }} />
      <div style={{
        display: "flex", gap: "1.5rem", width: "max-content",
        animation: `${isReverse ? "marqueeReverse" : "marquee"} ${speed}s linear infinite`,
        animationPlayState: paused ? "paused" : "running",
      }}>
        {doubled.map((skill, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            padding: "0.75rem 1.25rem", borderRadius: "1rem",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.05)",
            whiteSpace: "nowrap", cursor: "default",
            transition: "border-color 0.2s, background 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,60,172,0.4)"; e.currentTarget.style.background = "rgba(255,60,172,0.07)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
          >
            <img src={skill.icon} alt={skill.name} style={{ width: "1.75rem", height: "1.75rem", objectFit: "contain", filter: skill.name === "Express.js" || skill.name === "Next.js" ? "invert(1)" : "none" }} />
            <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        @keyframes marqueeReverse { 0% { transform: translateX(-33.333%); } 100% { transform: translateX(0); } }
      `}</style>
      <section style={{ padding: "4rem 0", background: "#0a0a0a", overflow: "hidden" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem 2.5rem" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: "0.5rem" }}>What I Know</p>
          <h2 style={{ fontSize: "1.875rem", fontWeight: 700, color: "white" }}>My Tech Stack</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", padding: "0 1.5rem", marginBottom: "0.75rem" }}>Frontend & Backend</p>
            <MarqueeRow items={frontendBackend} direction="left" speed={28} />
          </div>
          <div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", padding: "0 1.5rem", marginBottom: "0.75rem" }}>Database & Tools</p>
            <MarqueeRow items={databaseTools} direction="right" speed={22} />
          </div>
        </div>
      </section>
    </>
  );
}
