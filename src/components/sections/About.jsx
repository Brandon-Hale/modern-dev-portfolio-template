/**
 * About — bio paragraph and skills displayed as tag pills.
 * Animates in on scroll with fade-up.
 *
 * Config keys: bio, skills
 */
import { motion } from 'framer-motion'
import portfolio from '../../config/portfolio.config'
import TagMarquee from '../ui/TagMarquee'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  const { bio, skills } = portfolio

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-heading font-display text-4xl md:text-5xl mb-8"
          >
            About Me
          </motion.h2>

          <motion.div variants={fadeUp} className="space-y-4 mb-10">
            {bio.split('\n').map((paragraph, i) => (
              <p key={i} className="text-body leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-heading font-medium text-sm font-mono mb-4 uppercase tracking-wider">
              Technologies I work with
            </h3>
            <TagMarquee tags={skills} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
