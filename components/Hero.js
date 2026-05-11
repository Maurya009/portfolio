'use client'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiArrowDown, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: 'https://github.com/Maurya009', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/suraj-maurya-68b62a28b', label: 'LinkedIn' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full -top-32 -right-32 opacity-25" style={{ background: '#FFD700', filter: 'blur(90px)', animation: 'orbFloat 8s ease-in-out infinite' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full -bottom-20 -left-20 opacity-20" style={{ background: '#FFFFFF', filter: 'blur(80px)', animation: 'orbFloat 10s ease-in-out infinite reverse' }} />
        <div className="absolute w-[300px] h-[300px] rounded-full top-1/2 left-1/3 opacity-15" style={{ background: '#FF6B6B', filter: 'blur(70px)', animation: 'orbFloat 12s ease-in-out infinite' }} />
      </div>

      <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-32 left-6 md:left-16 glass rounded-lg px-3 py-2 text-xs font-mono text-[#FFD700] opacity-60 hidden md:block">
        const dev = () =&gt; 💻
      </motion.div>
      <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute bottom-40 right-6 md:right-20 glass rounded-lg px-3 py-2 text-xs font-mono text-[#FFD700] opacity-60 hidden md:block">
        &lt;BuildAmazing /&gt;
      </motion.div>
      <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }} className="absolute top-1/3 right-8 md:right-32 glass rounded-lg px-3 py-2 text-xs font-mono text-[#00D4FF] opacity-50 hidden lg:block">
        npm run amazing
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#FFD700]/30 text-[#FFD700] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
          Available for Work
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="font-syne text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none mb-4 tracking-tight">
          Hi, I&apos;m{' '}
          <span className="shimmer-text">Suraj</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="font-syne text-2xl md:text-4xl font-bold text-white/80 mb-6 h-12 flex items-center justify-center">
          I&nbsp;
          <TypeAnimation
            sequence={[
              'build Full Stack Apps', 2000,
              'craft React UIs', 2000,
              'design REST APIs', 2000,
              'ship with Next.js', 2000,
              'love clean code', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="gradient-text"
          />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }} className="text-[#8888AA] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Full Stack Developer passionate about building fast, scalable, and beautiful
          web applications. I turn ideas into production-ready products.
        </motion.p>

        {/* Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#projects" className="px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#00D4FF] via-[#7B2FFF] to-[#00D4FF] hover:scale-105 hover:shadow-2xl hover:shadow-[#00D4FF]/25 transition-all duration-300 text-base">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3.5 rounded-full font-semibold text-white glass border border-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 text-base">
            Let&apos;s Talk
          </a>
          <a href="/resume.pdf" download="Suraj_Maurya_Resume.pdf" className="px-8 py-3.5 rounded-full font-semibold text-[#FFD700] glass border border-[#FFD700]/30 hover:border-[#00FFA3]/60 hover:scale-105 transition-all duration-300 text-base flex items-center gap-2">
            <FiDownload size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="flex items-center justify-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 glass rounded-full flex items-center justify-center text-[#8888AA] hover:text-white hover:border-[#FFD700]/50 border border-white/5 transition-all duration-300 hover:scale-110">
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8888AA] text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}