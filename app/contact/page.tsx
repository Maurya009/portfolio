import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { profile } from "@/data/profile";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      {/* Header */}
      <section className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
          Get In Touch
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-paper sm:text-6xl">
          Let&apos;s Build Something
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-mute sm:text-lg">
          Have a project idea, job opportunity, or collaboration in mind?
          Send me a message and I&apos;ll get back to you as soon as possible.
        </p>
      </section>

      {/* Contact layout */}
      <section className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Contact information */}
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-white">
              Contact Information
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/70">
              I&apos;m always open to discussing new projects, development
              opportunities, and interesting ideas.
            </p>

            <div className="mt-8 space-y-5">
              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-blue-300/40 hover:bg-white/10"
              >
                <span className="rounded-xl bg-blue-400/10 p-3 text-blue-200">
                  <Mail size={20} />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-white/50">
                    Email
                  </span>

                  <span className="mt-1 block break-all text-sm text-white/90">
                    {profile.email}
                  </span>
                </span>

                <ArrowUpRight
                  size={17}
                  className="ml-auto text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-200"
                />
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <span className="rounded-xl bg-emerald-400/10 p-3 text-emerald-200">
                  <MapPin size={20} />
                </span>

                <span>
                  <span className="block text-xs uppercase tracking-wider text-white/50">
                    Location
                  </span>

                  <span className="mt-1 block text-sm text-white/90">
                    {profile.location}
                  </span>
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="text-xs uppercase tracking-wider text-white/50">
                Connect with me
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-white/80 transition hover:border-white/30 hover:text-white"
                >
                  <Github size={17} />
                  GitHub
                </a>

                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-white/80 transition hover:border-white/30 hover:text-white"
                >
                  <Linkedin size={17} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-[28px] border border-line bg-white/[0.02] p-6 sm:p-8">
          <div className="mb-7">
            <h2 className="text-2xl font-semibold text-paper">
              Send a Message
            </h2>

            <p className="mt-3 text-sm leading-7 text-mute">
              Fill out the form below with your details and message.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}