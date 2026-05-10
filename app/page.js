import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import SkillsMarquee from '../components/SkillsMarquee'
import Projects from '../components/Projects'
import Timeline from '../components/Timeline'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <SkillsMarquee />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}
