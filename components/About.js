'use client'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { FiCode, FiCoffee, FiZap, FiHeart } from 'react-icons/fi'

const stats = [
  { value: 'Fresh', label: 'Graduate' },
  { value: '1+', label: 'Deployed Project' },
  { value: '100%', label: 'Dedication' },
  { value: '☕', label: 'Coffee Driven' },
]

const traits = [
  { icon: FiCode, label: 'Clean Coder', color: '#00D4FF' },
  { icon: FiZap, label: 'Fast Learner', color: '#00D4FF' },
  { icon: FiCoffee, label: 'Coffee Addict', color: '#7B2FFF' },
  { icon: FiHeart, label: 'UI Lover', color: '#00FFA3' },
]

export default function About() {
  return (
    <section id="about" className="section-pad px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image / Avatar block */}
        <FadeIn direction="right">
          <div className="relative flex justify-center">
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-dashed border-[#00D4FF]/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[240px] h-[240px] md:w-[310px] md:h-[310px] rounded-full border border-dashed border-[#00D4FF]/20"
            />

            {/* Avatar placeholder */}
            <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#00D4FF] via-[#7B2FFF] to-[#00D4FF] flex items-center justify-center text-8xl shadow-2xl shadow-[#00D4FF]/20">
              👨‍💻
            </div>

            {/* Floating trait badges */}
            {traits.map((t, i) => {
              const positions = [
                'top-0 -right-4 md:right-0',
                'bottom-4 -right-4 md:right-4',
                'top-8 -left-4 md:-left-4',
                'bottom-0 left-0 md:-left-8',
              ]
              return (
                <motion.div
                  key={t.label}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
                  className={`absolute ${positions[i]} glass rounded-xl px-3 py-2 flex items-center gap-2 text-sm font-medium whitespace-nowrap`}
                >
                  <t.icon style={{ color: t.color }} size={16} />
                  <span style={{ color: t.color }}>{t.label}</span>
                </motion.div>
              )
            })}
          </div>
        </FadeIn>

        {/* Right: Text */}
        <div>
          <FadeIn delay={0.1}>
            <span className="section-tag">About Me</span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="section-title font-syne text-white">
              Passionate about building<br />
              <span className="gradient-text">real-world</span> solutions
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-[#8888AA] text-base leading-relaxed mb-4">
              Hey! I&apos;m <span className="text-white font-semibold">Suraj Maurya</span>, a fresher Full Stack Developer
              from <span className="text-white font-semibold">Faridabad, India</span>. I love turning ideas into
              real, working web applications.
            </p>
            <p className="text-[#8888AA] text-base leading-relaxed mb-4">
              I recently built and deployed a <span className="text-[#00D4FF] font-semibold">Vehicle Booking Website</span> —
              a full-stack project live on the web. I&apos;m actively looking for opportunities
              where I can contribute, grow, and keep building amazing things.
            </p>
            <p className="text-[#8888AA] text-base leading-relaxed mb-8">
              My stack includes <span className="text-white font-medium">React, Next.js, Node.js, MongoDB</span> and more.
              I&apos;m always learning something new every day.
            </p>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.4}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-xl p-4 text-center">
                  <div className="font-syne text-2xl font-extrabold gradient-text">{s.value}</div>
                  <div className="text-xs text-[#8888AA] mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}