'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(interval); return 100 }
        return prev + 1.5
      })
    }, 28)
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => { clearInterval(interval); clearTimeout(timer) }
  }, [])

  const dots = [
    { color: '#FF3CAC', delay: 0 },
    { color: '#784BA0', delay: 0.15 },
    { color: '#2B86C5', delay: 0.3 },
    { color: '#00F5A0', delay: 0.45 },
  ]

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: '#0A0A0F',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '2rem', overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
          <div style={{ position: 'absolute', width: 340, height: 340, borderRadius: '50%', background: '#FF3CAC', filter: 'blur(90px)', opacity: 0.1, top: -100, right: -80, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 280, height: 280, borderRadius: '50%', background: '#2B86C5', filter: 'blur(80px)', opacity: 0.08, bottom: -80, left: -60, pointerEvents: 'none' }} />

          {/* Bouncing Dots */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ display: 'flex', gap: 14, alignItems: 'flex-end', height: 50, position: 'relative', zIndex: 1 }}>
            {dots.map((dot, i) => (
              <motion.div key={i} animate={{ y: [0, -26, 0] }} transition={{ duration: 0.7, repeat: Infinity, delay: dot.delay, ease: [0.33, 1, 0.68, 1] }} style={{ width: 13, height: 13, borderRadius: '50%', background: dot.color, boxShadow: `0 0 12px ${dot.color}99, 0 0 24px ${dot.color}44` }} />
            ))}
          </motion.div>

          {/* Progress bar */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ width: 'min(220px, 60vw)', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 11, color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Loading</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#FF3CAC' }}>{Math.round(progress)}%</span>
            </div>
            <div style={{ height: 2, background: 'rgba(255,255,255,0.06)', borderRadius: 100, overflow: 'hidden' }}>
              <div style={{ height: '100%', borderRadius: 100, background: 'linear-gradient(90deg, #FF3CAC, #784BA0, #2B86C5)', width: `${progress}%`, transition: 'width 0.028s linear' }} />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ fontSize: 11, color: '#333', letterSpacing: '0.12em', textTransform: 'uppercase', position: 'relative', zIndex: 1 }}>
            Building something amazing...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
