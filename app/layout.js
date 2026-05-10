import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: 'Suraj Maurya — Full Stack Developer',  // ✅ Naam bhi update kar diya
  description: 'Full Stack Developer Portfolio — React, Node.js, Next.js & more',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="noise">
      <body>
        {children}
        {/* Google Analytics — har page visit pe automatically track hoga */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  )
}