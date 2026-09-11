import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Code2,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";
import { profile } from "@/data/profile";

const skillGroups = [
  {
    label: "Frontend",
    icon: Code2,
    items: profile.techStack.frontend,
  },
  {
    label: "Backend",
    icon: BriefcaseBusiness,
    items: profile.techStack.backend,
  },
  {
    label: "Data & Database",
    icon: Code2,
    items: profile.techStack.database,
  },
  {
    label: "Tools & DevOps",
    icon: BriefcaseBusiness,
    items: profile.techStack.tools,
  },
  {
    label: "Programming",
    icon: Code2,
    items: profile.techStack.programming,
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-signal">
          Profile & Background
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
          About Me
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-mute sm:text-base">
          Get to know my background, technical skills, experience and the
          technologies I use to build modern web applications.
        </p>
      </div>

      <div className="grid gap-7 lg:grid-cols-[320px_minmax(0,1fr)]">
        {/* Left Column */}
        <aside className="space-y-7">
          {/* Profile Card */}
          <section className="group overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-950/70 via-slate-950/90 to-emerald-950/60 shadow-[0_0_45px_-20px_rgba(59,130,246,0.55)] backdrop-blur-xl">
            {/* Profile Image */}
            <div className="relative aspect-[4/4.7] overflow-hidden">
              <Image
                src={profile.photo}
                alt={`${profile.name} profile photo`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover object-top transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-5 right-5">
                <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-200 backdrop-blur-md">
                  Available for opportunities
                </span>
              </div>
            </div>

            {/* Profile Details */}
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-paper">
                {profile.name}
              </h2>

              <p className="mt-2 text-sm text-blue-200">{profile.role}</p>

              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-mute">
                <MapPin size={15} className="text-emerald-300" />
                <span>{profile.location}</span>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex justify-center gap-3">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-mute transition duration-300 hover:-translate-y-1 hover:border-blue-300/50 hover:bg-blue-400/10 hover:text-blue-200"
                >
                  <Github size={18} />
                </a>

                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-mute transition duration-300 hover:-translate-y-1 hover:border-blue-300/50 hover:bg-blue-400/10 hover:text-blue-200"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-mute transition duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:bg-emerald-400/10 hover:text-emerald-200"
                >
                  <Mail size={18} />
                </a>
              </div>

              {/* Stats */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                {profile.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="font-mono text-xl font-semibold text-emerald-300">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-[11px] text-mute">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Soft Skills */}
          <section className="rounded-3xl border border-emerald-400/15 bg-gradient-to-br from-emerald-950/30 to-slate-950/70 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <Sparkles size={17} className="text-emerald-300" />

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-mute">
                Soft Skills
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {profile.softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-300/20 bg-emerald-400/[0.06] px-3 py-1.5 text-xs text-emerald-100 transition duration-300 hover:border-emerald-300/50 hover:bg-emerald-400/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </aside>

        {/* Right Column */}
        <div className="space-y-7">
          {/* About Section */}
          <section className="rounded-3xl border border-blue-400/15 bg-gradient-to-br from-blue-950/35 via-slate-950/70 to-slate-950/90 p-6 shadow-[0_0_40px_-25px_rgba(59,130,246,0.6)] backdrop-blur-xl sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-200/70">
              about.md
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-paper">
              Who I Am
            </h2>

            <p className="mt-5 whitespace-pre-line text-sm leading-8 text-mute sm:text-base">
              {profile.about}
            </p>
          </section>

          {/* Tech Stack */}
          <section className="rounded-3xl border border-blue-400/15 bg-gradient-to-br from-slate-950/90 via-blue-950/25 to-emerald-950/25 p-6 backdrop-blur-xl sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-200/70">
              tech-stack
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-paper">
              Tech Stack & Skills
            </h2>

            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              {skillGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <div
                    key={group.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:border-blue-300/25 hover:bg-blue-400/[0.04]"
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={16} className="text-emerald-300" />

                      <h3 className="text-sm font-medium text-paper">
                        {group.label}
                      </h3>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 font-mono text-xs text-mute transition duration-300 hover:border-emerald-300/40 hover:text-emerald-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Education */}
          <section className="rounded-3xl border border-blue-400/15 bg-gradient-to-br from-blue-950/25 to-slate-950/80 p-6 backdrop-blur-xl sm:p-8">
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-blue-300" />

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-200/70">
                education
              </p>
            </div>

            <div className="mt-6 space-y-5">
              {profile.education.map((education) => (
                <div
                  key={education.institution}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <div className="border-l-2 border-emerald-300/60 pl-4">
                    <p className="font-medium text-paper">
                      {education.degree}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-mute">
                      {education.institution}
                    </p>

                    <span className="mt-3 inline-block rounded-full border border-blue-300/20 bg-blue-400/[0.06] px-3 py-1 font-mono text-xs text-blue-200">
                      {education.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Training */}
          <section className="rounded-3xl border border-emerald-400/15 bg-gradient-to-br from-emerald-950/30 via-slate-950/80 to-slate-950/90 p-6 backdrop-blur-xl sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-200/70">
              current-training
            </p>

            {profile.training.map((training) => (
              <div key={training.organization} className="mt-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-paper">
                      {training.program}
                    </h2>

                    <p className="mt-2 text-sm text-mute">
                      {training.organization}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-emerald-300/30 bg-emerald-400/[0.06] px-3 py-1 font-mono text-xs text-emerald-200">
                    {training.status}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {training.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 font-mono text-xs text-mute transition duration-300 hover:border-emerald-300/40 hover:text-emerald-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}