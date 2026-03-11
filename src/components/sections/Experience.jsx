/**
 * Experience — work history displayed as a vertical timeline.
 * Wraps the Timeline UI component with section heading.
 *
 * Config keys: experience
 */
import { motion } from 'framer-motion'
import portfolio from '../../config/portfolio.config'
import Timeline from '../ui/Timeline'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-heading font-display text-4xl md:text-5xl mb-12"
        >
          Experience
        </motion.h2>

        <Timeline items={portfolio.experience} />
      </div>
    </section>
  )
}
