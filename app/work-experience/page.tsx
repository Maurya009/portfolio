import { profile } from "@/data/profile";

export default function WorkExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <p className="font-mono text-sm text-signal">$ history</p>
      <h1 className="mt-4 text-3xl font-semibold text-paper">Work Experience</h1>

      <div className="mt-10 space-y-10 border-l border-line pl-6">
        {profile.workExperience.map((w) => (
          <div key={w.company} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-signal" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-medium text-paper">
                {w.title} · {w.company}
              </h2>
              <span className="font-mono text-xs text-mute">{w.period}</span>
            </div>
            <ul className="mt-3 space-y-2">
              {w.points.map((pt) => (
                <li key={pt} className="flex gap-2 text-sm text-mute">
                  <span className="text-signal">›</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="mt-14">
        <p className="font-mono text-xs text-mute">education</p>
        <div className="mt-4 space-y-3 border-l border-line pl-6">
          {profile.education.map((e) => (
            <div key={e.institution} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-amber" />
              <p className="text-paper">{e.degree}</p>
              <p className="text-sm text-mute">{e.institution} · {e.period}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}