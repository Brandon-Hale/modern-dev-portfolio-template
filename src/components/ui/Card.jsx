/**
 * Card — a white card with subtle border and shadow that floats above the dot grid.
 * Includes a magnetic tilt effect on hover driven by mouse position.
 *
 * Props:
 * - children: React node
 * - className: additional CSS classes
 * - featured: boolean — if true, spans 2 columns on desktop
 * - tilt: boolean — enable mouse tilt effect (default true)
 *
 * Config keys: none (purely presentational)
 */
import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Card({ children, className = '', featured = false, tilt = true }) {
  const ref = useRef(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  const isTouchDevice =
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

  const handleMouseMove = (e) => {
    if (!tilt || isTouchDevice || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    rotateX.set(((y - centerY) / centerY) * -8)
    rotateY.set(((x - centerX) / centerX) * 8)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 800,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`bg-card border border-card-border rounded-2xl shadow-sm overflow-hidden ${
        featured ? 'md:col-span-2' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}
