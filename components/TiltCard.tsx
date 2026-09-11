"use client";

import { useRef, type CSSProperties, type MouseEvent } from "react";
import Link from "next/link";

export default function TiltCard({
  href,
  glyph,
  label,
  blurb,
  iconAnim = "pulse",
  style,
}: {
  href: string;
  glyph: string;
  label: string;
  blurb: string;
  iconAnim?: "pulse" | "spin";
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const rotateX = ((y - cy) / cy) * -5;
    const rotateY = ((x - cx) / cx) * 5;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);

    el.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-5px)
    `;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;

    el.style.transform = `
      perspective(900px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;
  }

  return (
    <Link
      ref={ref}
      href={href}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative block h-full animate-fade-up rounded-2xl transition-transform duration-300 ease-out will-change-transform"
    >
      {/* Soft blue hover glow */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-blue-500/[0.08] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative flex h-full min-h-[215px] flex-col justify-between overflow-hidden rounded-2xl border border-blue-300/15 bg-gradient-to-br from-[#171a2b] via-[#151827] to-[#10121f] p-6 shadow-[0_12px_40px_rgba(15,23,42,0.22)] transition-all duration-300 group-hover:border-blue-300/35 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.14)]">
        {/* Top row */}
        <span className="flex items-center justify-between">
          <span
            className={`font-mono text-xl text-blue-200 transition-transform duration-300 ${
              iconAnim === "spin"
                ? "group-hover:rotate-12"
                : "group-hover:scale-110"
            }`}
          >
            {glyph}
          </span>

          <span className="text-xl text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-200">
            ↗
          </span>
        </span>

        {/* Content */}
        <span className="mt-10 block">
          <span className="block text-2xl font-semibold tracking-tight text-slate-100">
            {label}
          </span>

          <span className="mt-3 block max-w-[230px] text-sm leading-6 text-slate-400">
            {blurb}
          </span>
        </span>

        {/* Bottom shine */}
        <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-blue-300/60 transition-all duration-500 group-hover:w-full" />
      </span>
    </Link>
  );
}