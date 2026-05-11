'use client'
import { useState, useEffect } from 'react'
import { FiHeart } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()
  const [visitors, setVisitors] = useState(null)

  useEffect(() => {
    // Component mount hone pe API call karo
    // Har page load pe count +1 hoga
    fetch('/api/visitors')
      .then((res) => res.json())
      .then((data) => setVisitors(data.count))
      .catch(() => setVisitors(null))
  }, [])

  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <a href="#hero" className="font-syne font-extrabold text-lg gradient-text">
          &lt;SurajDev /&gt;
        </a>

        <p className="text-[#8888AA] text-sm flex items-center gap-1.5">
          Built with <FiHeart size={14} className="text-[#00D4FF]" /> using Next.js &amp; Framer Motion
        </p>

        {/* Visitor counter — sirf tab dikhao jab count load ho jaaye */}
        {visitors !== null && (
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
            {/* Green pulsing dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFA3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFA3]"></span>
            </span>
            <span className="text-[#8888AA] text-sm">
              {visitors.toLocaleString()} visitors
            </span>
          </div>
        )}

      </div>
    </footer>
  )
}