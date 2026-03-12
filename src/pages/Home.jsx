/**
 * Home — the main single-page portfolio.
 * Renders all sections in order with smooth scroll navigation.
 */
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Education from '../components/sections/Education'
import Experience from '../components/sections/Experience'
import ProjectsPreview from '../components/sections/ProjectsPreview'
import Contact from '../components/sections/Contact'
import Footer from '../components/ui/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Experience />
      <ProjectsPreview />
      <Contact />
      <Footer />
    </main>
  )
}
