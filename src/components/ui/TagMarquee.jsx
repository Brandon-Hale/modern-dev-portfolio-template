/**
 * TagMarquee — an infinite horizontal scrolling ticker of tech tags.
 * Purely decorative — shows all unique tags from projects in a
 * continuous loop. Pauses on hover.
 *
 * Props:
 * - tags: string[] — all tags to display
 *
 * Config keys: derived from projects[].tags
 */
import { motion } from 'framer-motion'

export default function TagMarquee({ tags }) {
  // Double the tags so the loop is seamless
  const doubled = [...tags, ...tags]

  return (
    <div className="relative overflow-hidden py-3 group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        style={{ willChange: 'transform' }}
      >
        {doubled.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-mono bg-gray-100 text-body border border-transparent whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
