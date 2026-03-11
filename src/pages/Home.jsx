/**
 * Home — the main single-page portfolio.
 * Renders all sections in order with smooth scroll navigation.
 */
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import ProjectsPreview from '../components/sections/ProjectsPreview'
import Contact from '../components/sections/Contact'
import Footer from '../components/ui/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <ProjectsPreview />
      <Contact />
      <Footer />
    </main>
  )
}
