'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  const dirs = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirs[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
