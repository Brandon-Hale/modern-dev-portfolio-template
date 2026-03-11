/**
 * Tag — a small pill-shaped label for displaying tech stack items.
 *
 * Props:
 * - label: string — the text to display
 * - active: boolean — whether to show the active/accent style
 * - onClick: function — optional click handler (makes the tag interactive)
 *
 * Config keys: none (purely presentational)
 */
import { motion } from 'framer-motion'

export default function Tag({ label, active = false, onClick }) {
  const base =
    'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-mono transition-colors duration-200'
  const style = active
    ? 'bg-accent text-white'
    : onClick
      ? 'bg-transparent border border-gray-300 text-body hover:border-accent hover:text-accent cursor-pointer'
      : 'bg-gray-100 text-body border border-transparent'

  if (onClick) {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        className={`${base} ${style}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        {label}
      </motion.button>
    )
  }

  return <span className={`${base} ${style}`}>{label}</span>
}
