/**
 * DotGridCanvas — an interactive canvas overlay that replaces the static
 * CSS dot grid and spotlight. Dots near the cursor brighten, scale up,
 * and connect with faint lines to form a constellation/network effect.
 *
 * Uses lerp interpolation for buttery-smooth cursor tracking every frame.
 * Disabled on touch devices.
 */
import { useEffect, useRef, useCallback } from 'react'
import theme from '../../config/theme.config'

const DOT_SPACING = theme.dotGrid.spacing
const BASE_OPACITY = theme.dotGrid.opacity
const BASE_RADIUS = theme.dotGrid.size
const EFFECT_RADIUS = 95
const CONNECTION_RADIUS = 100
const MAX_CONNECTIONS = 6
const LERP_SPEED = 0.8

export default function DotGridCanvas() {
  const canvasRef = useRef(null)
  const targetRef = useRef({ x: -9999, y: -9999 })
  const currentRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef(null)
  const dotsRef = useRef([])

  const buildDots = useCallback((width, height) => {
    const dots = []
    const cols = Math.ceil(width / DOT_SPACING) + 1
    const rows = Math.ceil(height / DOT_SPACING) + 1
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dots.push({ x: col * DOT_SPACING, y: row * DOT_SPACING })
      }
    }
    return dots
  }, [])

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = document.documentElement.scrollHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      dotsRef.current = buildDots(width, height)
    }

    // Store raw viewport coordinates — scroll offset added at draw time
    const onMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }

    const draw = () => {
      // Lerp viewport position for smooth movement
      const cur = currentRef.current
      const tgt = targetRef.current
      cur.x += (tgt.x - cur.x) * LERP_SPEED
      cur.y += (tgt.y - cur.y) * LERP_SPEED

      const w = parseInt(canvas.style.width)
      const h = parseInt(canvas.style.height)
      ctx.clearRect(0, 0, w, h)

      // Convert viewport coords to page coords at draw time
      const mx = cur.x
      const my = cur.y + window.scrollY
      const activeDots = []

      // Draw dots
      for (let i = 0; i < dotsRef.current.length; i++) {
        const dot = dotsRef.current[i]
        const dx = dot.x - mx
        const dy = dot.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        let opacity = BASE_OPACITY
        let radius = BASE_RADIUS

        if (dist < EFFECT_RADIUS) {
          const t = 1 - dist / EFFECT_RADIUS
          opacity = BASE_OPACITY + t * (0.45 - BASE_OPACITY)
          radius = BASE_RADIUS + t * 1
          activeDots.push({ ...dot, dist, t })
        }

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(13, 27, 75, ${opacity})`
        ctx.fill()
      }

      // Draw connections between nearby active dots
      if (activeDots.length > 1) {
        activeDots.sort((a, b) => a.dist - b.dist)
        const drawn = new Set()

        for (let i = 0; i < activeDots.length; i++) {
          let connections = 0
          for (let j = i + 1; j < activeDots.length; j++) {
            if (connections >= MAX_CONNECTIONS) break
            const a = activeDots[i]
            const b = activeDots[j]
            const key = `${i}-${j}`
            if (drawn.has(key)) continue

            const ddx = a.x - b.x
            const ddy = a.y - b.y
            const d = Math.sqrt(ddx * ddx + ddy * ddy)

            if (d < CONNECTION_RADIUS) {
              const lineOpacity = (1 - d / CONNECTION_RADIUS) * Math.min(a.t, b.t) * 0.2
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.strokeStyle = `rgba(13, 27, 75, ${lineOpacity})`
              ctx.lineWidth = 0.8
              ctx.stroke()
              drawn.add(key)
              connections++
            }
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    resize()
    rafRef.current = requestAnimationFrame(draw)

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('resize', resize)

    const observer = new ResizeObserver(resize)
    observer.observe(document.body)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', resize)
      observer.disconnect()
    }
  }, [buildDots])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 hidden md:block"
      aria-hidden="true"
    />
  )
}
