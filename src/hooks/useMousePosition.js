/**
 * useMousePosition Hook
 *
 * Tracks the mouse cursor position across the viewport.
 * Returns { x, y } coordinates updated on every mousemove.
 * Disabled on touch devices (pointer: coarse) for performance.
 */
import { useState, useEffect } from 'react'

export default function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Skip mouse tracking on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return position
}
