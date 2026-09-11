"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "index" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/work-experience", label: "experience" },
  { href: "/contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="font-mono text-sm text-paper">
          {/* Empty brand area — navigation remains unchanged */}
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 font-mono text-sm text-mute sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative py-1 transition-colors hover:text-signal after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-signal after:transition-all after:duration-300 hover:after:w-full"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 border-l border-line pl-4 sm:flex">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-mute transition-colors hover:text-signal"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-mute transition-colors hover:text-signal"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-paper transition-colors hover:text-signal sm:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-line bg-ink px-5 pb-6 pt-2 sm:hidden">
          <ul className="flex flex-col gap-1 font-mono text-sm">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-3 transition-colors ${
                      active
                        ? "bg-white/[0.04] text-signal"
                        : "text-mute hover:bg-white/[0.03] hover:text-paper"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 flex items-center gap-4 border-t border-line pt-4">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-signal"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-signal"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}