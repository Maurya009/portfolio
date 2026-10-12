import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const cardStyles = [
  {
    background:
      "bg-gradient-to-br from-[#080f2b] via-[#17265b] to-[#39318b]",
    accent: "text-blue-200",
    pill: "border-blue-200/20 bg-blue-300/10",
    orb: "bg-blue-400/20",
    glow: "group-hover:shadow-blue-500/15",
    number: "text-blue-100/[0.08]",
  },
  {
    background:
      "bg-gradient-to-br from-[#03171a] via-[#064c40] to-[#12675d]",
    accent: "text-emerald-200",
    pill: "border-emerald-200/20 bg-emerald-300/10",
    orb: "bg-emerald-400/20",
    glow: "group-hover:shadow-emerald-400/15",
    number: "text-emerald-100/[0.08]",
  },
  {
    background:
      "bg-gradient-to-br from-[#261407] via-[#713b12] to-[#9a5b20]",
    accent: "text-amber-200",
    pill: "border-amber-200/20 bg-amber-300/10",
    orb: "bg-amber-400/20",
    glow: "group-hover:shadow-amber-400/15",
    number: "text-amber-100/[0.08]",
  },
  {
    background:
      "bg-gradient-to-br from-[#1e0b2d] via-[#4c1d68] to-[#742d83]",
    accent: "text-fuchsia-200",
    pill: "border-fuchsia-200/20 bg-fuchsia-300/10",
    orb: "bg-fuchsia-400/20",
    glow: "group-hover:shadow-fuchsia-400/15",
    number: "text-fuchsia-100/[0.08]",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-4 pb-24 pt-14 sm:px-8 sm:pt-20 lg:px-12">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-[min(90%,800px)] -translate-x-1/2 rounded-full bg-indigo-500/[0.07] blur-[100px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/65 sm:text-xs">
              Selected Work
            </span>
          </div>

          <h1 className="text-4xl font-semibold tracking-[-0.045em] text-paper sm:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-300 via-violet-300 to-emerald-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-mute sm:text-base sm:leading-8">
            A collection of digital products built with thoughtful design,
            modern technologies, and a focus on real-world problems.
          </p>

          <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </header>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const style = cardStyles[index % cardStyles.length];
            const isYmRealty = project.slug === "ym-realty";

            const previewImage = isYmRealty
              ? "/projects/ym-realty-preview.png"
              : "/images/rydex-dashboard.png";

            const logoImage = isYmRealty
              ? "/projects/ym-realty.png"
              : "/images/logo.jpeg";

            const imageAlt = isYmRealty
              ? "YM Realty real estate platform preview"
              : "Rydex vehicle booking platform preview";

            const logoAlt = isYmRealty
              ? "YM Realty logo"
              : "Rydex logo";

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`group relative block overflow-hidden rounded-[28px] border border-white/[0.13] p-5 shadow-xl shadow-black/10 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white/25 hover:shadow-2xl sm:rounded-[30px] sm:p-8 ${style.background} ${style.glow}`}
              >
                {/* Decorative light */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full blur-[85px] transition-all duration-700 group-hover:scale-125 group-hover:opacity-100 ${style.orb}`}
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-white/[0.035]"
                />

                <div className="relative z-10 grid items-center gap-9 md:grid-cols-[minmax(0,1fr)_280px] md:gap-8">
                  {/* Project details */}
                  <div className="min-w-0">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
<span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-xs">
                        Full-Stack Project
                      </span>
                    </div>

                    <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-3xl lg:text-[2.5rem]">
                      {project.title}
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                      {project.summary}
                    </p>

                    {/* Technology tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/[0.12] bg-black/[0.12] px-3 py-1.5 text-[11px] text-white/75 transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/[0.06] sm:text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Case study link */}
                    <div
                      className={`mt-7 inline-flex items-center gap-3 text-sm font-medium ${style.accent}`}
                    >
                      <span className="border-b border-current/30 pb-1 transition-colors group-hover:border-current">
                        Explore case study
                      </span>
                      <span
                        aria-hidden="true"
                        className="inline-block text-lg transition-transform duration-300 group-hover:translate-x-1.5"
                      >
                        →
                      </span>
                    </div>
                  </div>

                  {/* Project preview */}
                  <div className="relative mx-auto w-full max-w-[340px] md:mx-0 md:ml-auto">
                    <div
                      aria-hidden="true"
                      className={`absolute -inset-3 rounded-[28px] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${style.orb}`}
                    />

                    <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-black/35 p-1.5 shadow-2xl shadow-black/30 transition-all duration-500 group-hover:border-white/35 sm:rounded-[22px] sm:p-2">
                      <div className="relative aspect-[1.55/1] overflow-hidden rounded-xl bg-black/20 sm:rounded-[16px]">
                        <Image
                          src={previewImage}
                          alt={imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 520px"
                          priority={index < 2}
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                        />
                      </div>
                    </div>

                    {/* Floating project logo */}
                    <div className="absolute -bottom-5 left-4 flex h-[68px] w-[68px] items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-white p-2.5 shadow-xl shadow-black/25 transition-transform duration-500 group-hover:-translate-y-1 sm:-bottom-6 sm:left-6 sm:h-[82px] sm:w-[82px] sm:rounded-[20px] sm:p-3">
                      <Image
                        src={logoImage}
                        alt={logoAlt}
                        width={180}
                        height={180}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    {/* Project number */}
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute -bottom-5 right-1 hidden select-none font-mono text-7xl font-bold leading-none md:block lg:text-8xl ${style.number}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-white/35 sm:mt-16 sm:text-xs">
          Designed with purpose · Built with modern technology
        </p>
      </div>
    </main>
  );
}
