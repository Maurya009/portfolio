'use client'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const categories = [
  {
    title: 'Frontend',
    color: '#FF3CAC',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'TypeScript', level: 82 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    title: 'Backend',
    color: '#00F5A0',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 72 },
    ],
  },
  {
    title: 'Database & Tools',
    color: '#2B86C5',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'Git / GitHub', level: 93 },
    ],
  },
]

const techIcons = [
  { name: 'React', emoji: '⚛️' },
  { name: 'Next.js', emoji: '▲' },
  { name: 'Node', emoji: '🟢' },
  { name: 'TypeScript', emoji: '📘' },
  { name: 'MongoDB', emoji: '🍃' },
  { name: 'PostgreSQL', emoji: '🐘' },
  { name: 'Docker', emoji: '🐳' },
  { name: 'Git', emoji: '🔀' },
  { name: 'Tailwind', emoji: '🎨' },
  { name: 'Redis', emoji: '🔴' },
]

function SkillBar({ name, level, color, delay }) {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-white/80">{name}</span>
        <span className="text-sm font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <FadeIn>
          <span className="section-tag">What I Know</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="section-title font-syne text-white mt-2">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[#8888AA] max-w-xl mx-auto">
            A full-stack toolkit honed over years of building production apps — from pixel-perfect frontends to scalable backends.
          </p>
        </FadeIn>
      </div>

      

      {/* Skill bars grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, ci) => (
          <FadeIn key={cat.title} delay={0.1 * ci}>
            <div className="glass rounded-2xl p-6 hover:border-white/15 border border-white/8 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ background: cat.color, boxShadow: `0 0 12px ${cat.color}` }} />
                <h3 className="font-syne font-bold text-white text-lg">{cat.title}</h3>
              </div>
              {cat.skills.map((s, si) => (
                <SkillBar key={s.name} name={s.name} level={s.level} color={cat.color} delay={si * 0.1} />
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
