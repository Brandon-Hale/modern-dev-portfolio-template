/**
 * Timeline — a vertical timeline component for displaying work experience.
 * Each item shows role, company, dates, and bullet points.
 * Animates children in with staggered reveal on scroll.
 *
 * Props:
 * - items: array of experience objects from portfolio.config.js
 *
 * Config keys: experience[]
 */
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Timeline({ items }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="relative"
    >
      {/* Vertical line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-200" />

      <div className="space-y-12">
        {items.map((item) => (
          <motion.div key={`${item.company}-${item.role}`} variants={itemVariants} className="relative pl-12 md:pl-16">
            {/* Dot marker */}
            <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-bg" />

            <div>
              <h3 className="text-lg font-semibold text-heading">{item.role}</h3>
              <p className="text-accent font-medium">{item.company}</p>
              <p className="text-sm font-mono text-body/60 mt-1">{item.dates}</p>
              <ul className="mt-3 space-y-2">
                {item.bullets.map((bullet, j) => (
                  <li key={j} className="text-body text-sm leading-relaxed flex gap-2">
                    <span className="text-accent shrink-0">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
