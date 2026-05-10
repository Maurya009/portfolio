'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Projects', 'Timeline', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)  // ✅ progress state

  useEffect(() => {
    const handler = () => {
      // Scroll progress calculate karo
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

      setScrolled(scrollTop > 40)
      setProgress(scrollPercent)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
          scrolled ? 'py-3 bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-white/5' : 'py-5'
        }`}
      >
        {/* ✅ Scroll progress bar — bilkul top pe */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'linear', duration: 0.1 }}
          />
        </div>

        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FF3CAC]/50 group-hover:border-[#FF3CAC] transition-all duration-300 group-hover:scale-110">
            <img src="/profile.jpg" alt="Suraj Maurya" className="w-full h-full object-cover" />
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.li key={link} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.3 }}>
              <a href={'#' + link.toLowerCase()} className="text-sm font-medium tracking-widest uppercase text-[#8888AA] hover:text-white transition-colors duration-300 hover-underline">
                {link}
              </a>
            </motion.li>
          ))}
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <a href="#contact" className="text-sm font-semibold px-5 py-2 rounded-full border border-[#FF3CAC]/50 text-[#FF3CAC] hover:bg-[#FF3CAC] hover:text-white transition-all duration-300">
              Hire Me
            </a>
          </motion.li>
        </ul>

        <button className="md:hidden flex flex-col gap-[5px] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0F]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#FF3CAC]/50 mb-4">
              <img src="/profile.jpg" alt="Suraj Maurya" className="w-full h-full object-cover" />
            </div>

            {links.map((link, i) => (
              <motion.a
                key={link}
                href={'#' + link.toLowerCase()}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                className="font-syne text-3xl font-bold text-white hover:gradient-text transition-all"
              >
                {link}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-[#FF3CAC] to-[#2B86C5] text-white font-semibold text-lg"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}