import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers3,
} from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      {/* Back link */}
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 text-sm text-mute transition hover:text-signal"
      >
        <ArrowLeft
          size={16}
          className="transition-transform group-hover:-translate-x-1"
        />
        Back to Projects
      </Link>

      {/* Header */}
      <section className="mt-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 font-mono text-xs text-blue-200">
            {project.year}
          </span>

          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mute">
            Full-Stack Case Study
          </span>
        </div>

        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-paper sm:text-6xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-8 text-mute sm:text-lg">
          {project.summary}
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-signal px-5 py-3 text-sm font-semibold text-ink transition hover:scale-[1.02] hover:opacity-90"
            >
              View Live Demo
              <ExternalLink size={16} />
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-semibold text-paper transition hover:border-signal hover:text-signal"
            >
              <Github size={17} />
              View GitHub Code
            </a>
          )}
        </div>
      </section>

      {/* Project preview */}
      <section className="mt-12">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 p-3 shadow-2xl sm:p-5">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <Image
              src="/images/rydex-dashboard.png"
              alt="Rydex vehicle booking dashboard preview"
              width={1400}
              height={850}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="absolute bottom-7 left-7 h-20 w-20 overflow-hidden rounded-2xl border border-white/20 bg-black/60 p-2 shadow-xl backdrop-blur-md sm:bottom-10 sm:left-10 sm:h-28 sm:w-28">
            <Image
              src="/images/logo.jpeg"
              alt="Rydex logo"
              width={220}
              height={220}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        {/* About */}
        <div className="rounded-3xl border border-line bg-white/[0.02] p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-400/10 p-2.5 text-blue-300">
              <Layers3 size={20} />
            </div>

            <h2 className="text-2xl font-semibold text-paper">
              About the Project
            </h2>
          </div>

          <p className="mt-6 whitespace-pre-line text-sm leading-8 text-mute sm:text-base">
            {project.about}
          </p>
        </div>

        {/* Project information */}
        <aside className="rounded-3xl border border-line bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-paper">
            Project Information
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-mute">
                Project Type
              </p>
              <p className="mt-2 text-sm text-paper">
                Full-Stack Web Application
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-mute">
                Year
              </p>
              <p className="mt-2 text-sm text-paper">{project.year}</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-mute">
                Main Stack
              </p>
              <p className="mt-2 text-sm text-paper">MERN Stack</p>
            </div>
          </div>
        </aside>
      </section>

      {/* Key features */}
      <section className="mt-10 rounded-3xl border border-line bg-white/[0.02] p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-paper">Key Features</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {project.keyFeatures.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 p-4"
            >
              <CheckCircle2
                size={19}
                className="mt-0.5 shrink-0 text-emerald-300"
              />

              <span className="text-sm leading-6 text-mute">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="mt-10 rounded-3xl border border-line bg-white/[0.02] p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-paper">Technology Stack</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.techStack.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 font-mono text-xs text-blue-100"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      {/* Bottom navigation */}
      <div className="mt-12 border-t border-line pt-8">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-mute transition hover:text-signal"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Explore More Projects
        </Link>
      </div>
    </main>
  );
}