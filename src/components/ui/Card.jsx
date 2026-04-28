/**
 * Card — a white card with subtle border and shadow that floats above the dot grid.
 * On hover, the card lifts gently and its shadow grows.
 *
 * Props:
 * - children: React node
 * - className: additional CSS classes
 * - featured: boolean — if true, spans 2 columns on desktop
 *
 * Config keys: none (purely presentational)
 */
import { motion } from 'framer-motion'

export default function Card({ children, className = '', featured = false }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className={`group relative bg-card border border-card-border rounded-2xl shadow-sm hover:shadow-xl overflow-hidden transition-shadow duration-300 ${
        featured ? 'md:col-span-2' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}
