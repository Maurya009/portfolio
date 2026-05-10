'use client'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'Rydex — Vehicle Booking',
    desc: 'A full-stack vehicle booking platform where users can browse, select and book vehicles online. Built with modern web technologies and deployed live on Vercel.',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    color: '#FF3CAC',
    emoji: '🚗',
    github: 'https://github.com/Maurya009',
    live: 'https://rydex-booking.vercel.app/',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    desc: 'My personal developer portfolio built with Next.js and Framer Motion. Fully responsive with smooth animations, dark theme, and all sections.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    color: '#00F5A0',
    emoji: '🌐',
    github: 'https://github.com/Maurya009',
    live: '#',
    featured: true,
  },
  {
    title: 'More Projects Coming Soon',
    desc: 'I am actively working on new projects. Stay tuned — exciting full-stack apps are in the pipeline. Follow my GitHub to get notified!',
    tags: ['In Progress', 'Full Stack', 'Open Source'],
    color: '#2B86C5',
    emoji: '🚀',
    github: 'https://github.com/Maurya009',
    live: '#',
    featured: false,
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group glass rounded-2xl p-6 border border-white/8 hover:border-white/20 transition-all duration-300 flex flex-col relative overflow-hidden"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(circle at top left, ${project.color}10 0%, transparent 70%)` }}
      />

      {/* Featured badge */}
      {project.featured && (
        <span className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${project.color}20`, color: project.color }}>
          Featured
        </span>
      )}

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 flex-shrink-0"
        style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
      >
        {project.emoji}
      </div>

      {/* Title */}
      <h3 className="font-syne font-bold text-white text-xl mb-2">{project.title}</h3>

      {/* Description */}
      <p className="text-[#8888AA] text-sm leading-relaxed mb-4 flex-grow">{project.desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{ background: `${project.color}15`, color: project.color }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-auto">
        <a
          href={project.github}
          className="flex items-center gap-1.5 text-sm text-[#8888AA] hover:text-white transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub size={15} /> Code
        </a>
        {project.live !== '#' && (
          <a
            href={project.live}
            className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
            style={{ color: project.color }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink size={15} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <FadeIn>
          <span className="section-tag">My Work</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="section-title font-syne text-white mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[#8888AA] max-w-xl mx-auto">
            Real projects built with passion — from idea to deployment.
          </p>
        </FadeIn>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div className="text-center mt-12">
          <a
            href="https://github.com/Maurya009"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all duration-300"
          >
            <FiGithub size={18} /> View All on GitHub
          </a>
        </div>
      </FadeIn>
    </section>
  )
}