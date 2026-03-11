/**
 * Hero — the landing section with name, title, tagline, and two CTA buttons.
 * Features staggered fade-up animation and a cursor-driven button glow.
 *
 * Config keys: name, title, tagline, heroCtaPrimary, heroCtaSecondary
 */
import { motion } from 'framer-motion'
import portfolio from '../../config/portfolio.config'
import useMousePosition from '../../hooks/useMousePosition'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const { name, title, tagline, heroCtaPrimary, heroCtaSecondary } = portfolio
  const mouse = useMousePosition()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-3xl text-center"
      >
        <motion.p
          variants={fadeUp}
          className="text-accent font-mono text-sm tracking-wide mb-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-heading font-display text-5xl md:text-7xl leading-tight mb-4"
        >
          {name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-heading/70 font-display text-2xl md:text-3xl mb-3"
        >
          {title}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-body text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollTo('projects')}
            title="Scroll to projects"
            className="cursor-pointer relative overflow-hidden bg-accent text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-accent-light transition-colors"
            style={{
              backgroundImage:
                mouse.x > 0
                  ? `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.12) 0%, transparent 50%)`
                  : undefined,
            }}
          >
            {heroCtaPrimary}
          </button>

          <button
            onClick={() => scrollTo('contact')}
            title="Scroll to contact"
            className="cursor-pointer border border-accent text-accent px-8 py-3.5 rounded-full font-medium text-sm hover:bg-accent hover:text-white transition-colors"
          >
            {heroCtaSecondary}
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
