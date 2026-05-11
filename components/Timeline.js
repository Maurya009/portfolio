'use client'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const timeline = [
  {
    year: '2026 — Present',
    title: 'Actively Looking for Opportunities',
    company: 'Open to Work 🚀',
    desc: 'Fresher Full Stack Developer seeking my first professional role. Ready to contribute, learn, and grow in a real-world team environment.',
    tags: ['Full Stack', 'React', 'Next.js', 'Node.js'],
    color: '#00D4FF',
    type: 'work',
  },
  {
    year: '2026',
    title: 'Rydex — Vehicle Booking Website',
    company: 'Personal Project · Deployed on Vercel',
    desc: 'Built and deployed a full-stack vehicle booking platform from scratch. Users can browse and book vehicles online. Live at rydex-booking.vercel.app.',
    tags: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Vercel'],
    color: '#00FFA3',
    type: 'project',
  },
  {
    year: '2022 — 2026',
    title: 'B.Tech in Computer Science & Engineering',
    company: 'Satyug Darshan Institute of Engineering & Technology, Bhupani Village',
    desc: 'Pursuing B.Tech CSE under J.C. Bose University of Science & Technology (YMCA), Faridabad. Graduating in 2026. Focused on Web Development, DSA, and modern full-stack technologies.',
    tags: ['B.Tech CSE', 'YMCA University', 'Faridabad', '2026'],
    color: '#00D4FF',
    type: 'education',
  },
  {
    year: '2022',
    title: 'Started Coding Journey',
    company: 'Self Learning & College',
    desc: 'Began learning programming with C, Java and gradually moved to web development. Fell in love with building things for the web.',
    tags: ['C', 'Java', 'HTML', 'CSS', 'JavaScript'],
    color: '#00D4FF',
    type: 'achievement',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="section-pad px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <FadeIn>
          <span className="section-tag">My Journey</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="section-title font-syne text-white mt-2">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[#8888AA] max-w-xl mx-auto">
            From first line of code to deploying real projects — this is my journey so far.
          </p>
        </FadeIn>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D4FF] via-[#7B2FFF] to-[#00D4FF] origin-top"
          style={{ transform: 'translateX(-50%)' }}
        />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex items-start gap-8 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row pl-14 md:pl-0`}
            >
              {/* Dot */}
              <div
                className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-2 border-current -translate-x-1/2 mt-2 z-10 flex-shrink-0"
                style={{ color: item.color, background: '#0A0A0F', boxShadow: `0 0 12px ${item.color}` }}
              />

              {/* Card */}
              <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} w-full`}>
                <div className="glass rounded-2xl p-5 border border-white/8 hover:border-white/20 transition-all duration-300 group">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full mb-3 inline-block"
                    style={{ background: `${item.color}15`, color: item.color }}
                  >
                    {item.year}
                  </span>

                  <h3 className="font-syne font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-sm font-medium mb-2" style={{ color: item.color }}>{item.company}</p>
                  <p className="text-[#8888AA] text-sm leading-relaxed mb-3">{item.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-white/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}