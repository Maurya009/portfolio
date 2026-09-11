import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-white/[0.02] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        {/* Top section */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
          <div>
            <h2 className="text-xl font-semibold text-paper">
              {profile.name}
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-mute">
              Building modern, responsive and user-friendly web applications
              with the MERN stack.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm text-mute transition hover:border-signal hover:text-signal"
            >
              <Mail size={16} />
              Email
            </a>

            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm text-mute transition hover:border-signal hover:text-signal"
            >
              <Github size={16} />
              GitHub
            </a>

            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm text-mute transition hover:border-signal hover:text-signal"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col gap-4 border-t border-line pt-6 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span>Built with Next.js</span>

            <a
              href="#top"
              className="inline-flex items-center gap-2 transition hover:text-signal"
            >
              Back to top
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}