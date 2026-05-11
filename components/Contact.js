'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'  // ✅ EmailJS import
import FadeIn from './FadeIn'
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

// ✅ Apna actual email daalo
const info = [
  { icon: FiMail, label: 'Email', value: 'surajmaurya7107@gmail.com', href: 'mailto:surajmaurya7107@gmail.com' },
  { icon: FiMapPin, label: 'Location', value: 'New Delhi, India ,NIT FARIDABAD', href: '#' },
]

const socials = [
  { icon: FiGithub,   href: 'https://github.com/Maurya009',   label: 'GitHub',   color: '#8888AA' },
  { icon: FiLinkedin, href: 'www.linkedin.com/in/suraj-maurya-68b62a28b',  label: 'LinkedIn', color: '#00D4FF' },
  { icon: FiTwitter,  href: 'https://twitter.com',   label: 'Twitter',  color: '#00D4FF' },
  { icon: FaWhatsapp,  href: 'https://wa.me/9354967107',           label: 'WhatsApp',  color: '#25D366' },
  { icon: FaInstagram, href: 'https://www.instagram.com/suraj__maurya_____/',  label: 'Instagram', color: '#E1306C' },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [status, setStatus]   = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // ✅ REAL EMAIL BHEJNA - ab koi fake setTimeout nahi!
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    } finally {
      setLoading(false)
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="section-pad px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <FadeIn>
          <span className="section-tag">Get In Touch</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="section-title font-syne text-white mt-2">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[#8888AA] max-w-xl mx-auto">
            Have a project in mind or just want to say hello? My inbox is always open!
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Left - Info */}
        <FadeIn direction="right">
          <div>
            <h3 className="font-syne font-bold text-white text-2xl mb-4">
              Ready to start your next project?
            </h3>
            <p className="text-[#8888AA] leading-relaxed mb-8">
              Whether you need a full-stack web app, a new frontend, or a backend API — I&apos;m here to help.
              Let&apos;s build something great together.
            </p>

            {info.map((item) => (
              <a key={item.label} href={item.href} className="flex items-center gap-4 mb-4 group">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-[#00D4FF] border border-[#00D4FF]/20 group-hover:bg-[#00D4FF]/10 transition-colors">
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#8888AA] uppercase tracking-widest">{item.label}</div>
                  <div className="text-white font-medium text-sm">{item.value}</div>
                </div>
              </a>
            ))}

            <div className="flex gap-3 mt-8">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.15, y: -3 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 glass rounded-xl flex items-center justify-center border border-white/8 hover:border-white/20 transition-all"
                  style={{ color: s.color }}
                >
                  <s.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right - Form */}
        <FadeIn direction="left">
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 border border-white/8">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs text-[#8888AA] uppercase tracking-widest mb-2">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-[#8888AA] uppercase tracking-widest mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs text-[#8888AA] uppercase tracking-widest mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#00D4FF]/50 transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 bg-gradient-to-r from-[#00D4FF] via-[#7B2FFF] to-[#00D4FF] hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-shadow disabled:opacity-70"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <FiSend size={16} />
                  Send Message
                </>
              )}
            </motion.button>

            {/* ✅ Success */}
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-sm text-[#00FFA3] font-medium"
              >
                ✅ Message sent! I&apos;ll get back to you soon.
              </motion.p>
            )}

            {/* ✅ Error - pehle ye missing tha */}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-sm text-red-400 font-medium"
              >
                ❌ Kuch gadbad hui. Dobara try karo.
              </motion.p>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  )
}