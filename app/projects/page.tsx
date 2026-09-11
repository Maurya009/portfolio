import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const cardStyles = [
  {
    background:
      "bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900",
    accent: "text-blue-200",
    glow: "group-hover:shadow-[0_0_35px_-10px_rgba(59,130,246,0.7)]",
  },
  {
    background:
      "bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-900",
    accent: "text-emerald-200",
    glow: "group-hover:shadow-[0_0_35px_-10px_rgba(20,184,166,0.7)]",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-signal">
          Selected Work
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
          Featured Projects
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-mute">
          A selection of real-world applications and systems I have built
          using modern web technologies.
        </p>
      </div>

      {/* Project cards */}
      <div className="space-y-8">
        {projects.map((project, index) => {
          const style = cardStyles[index % cardStyles.length];

          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group relative block overflow-hidden rounded-[28px] border border-white/10 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 sm:p-8 ${style.background} ${style.glow}`}
            >
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

              <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_280px] md:items-center">
                {/* Project content */}
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-xs ${style.accent}`}
                    >
                      {project.year}
                    </span>

                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                      Full-Stack Project
                    </span>
                  </div>

                  <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {project.title}
                  </h2>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
                    {project.summary}
                  </p>

                  {/* Tech stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/15 bg-black/10 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Case study link */}
                  <div
                    className={`mt-7 inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-4 ${style.accent}`}
                  >
                    View Case Study
                    <span className="text-lg">→</span>
                  </div>
                </div>

                {/* Project images */}
                <div className="relative">
                  {/* Dashboard image */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/20 p-2 shadow-2xl">
                    <Image
                      src="/images/rydex-dashboard.png"
                      alt="Rydex vehicle booking dashboard"
                      width={700}
                      height={450}
                      priority
                      className="h-48 w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Rydex logo */}
                  <div className="absolute -bottom-5 -left-5 h-24 w-24 overflow-hidden rounded-2xl border border-white/20 bg-black/60 p-2 shadow-xl backdrop-blur-md">
                    <Image
                      src="/images/logo.jpeg"
                      alt="Rydex logo"
                      width={180}
                      height={180}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Project number */}
              <div className="pointer-events-none absolute bottom-4 right-6 hidden select-none md:block">
                <span className="font-mono text-8xl font-bold text-white/10">
                  0{index + 1}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}