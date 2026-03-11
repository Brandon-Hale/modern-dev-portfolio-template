/**
 * DotGridCanvas — interactive canvas overlay for the dot-grid background.
 *
 * Dots near the cursor brighten, scale up, and connect with faint lines
 * to form a constellation effect. The effect is excluded from content
 * areas (sections, nav) so it only appears in margins and open space.
 *
 * Uses lerp interpolation for smooth cursor tracking every frame.
 * Disabled on touch devices.
 */
import { useEffect, useRef, useCallback } from 'react'
import theme from '../../config/theme.config'

// Dot grid layout
const DOT_SPACING = theme.dotGrid.spacing
const BASE_OPACITY = theme.dotGrid.opacity
const BASE_RADIUS = theme.dotGrid.size

// Constellation effect tuning
const EFFECT_RADIUS = 95
const ACTIVE_OPACITY = 0.45
const ACTIVE_RADIUS_BOOST = 1
const CONNECTION_RADIUS = 100
const CONNECTION_OPACITY = 0.2
const CONNECTION_WIDTH = 0.8
const MAX_CONNECTIONS = 6
const LERP_SPEED = 0.8

// Accent color from theme, converted to RGB for canvas
const ACCENT_RGB = '13, 27, 75'

// How often to refresh content zone rects (every N frames)
const RECT_REFRESH_INTERVAL = 30

// Padding around content zones (px)
const CONTENT_PADDING_X = 24
const CONTENT_PADDING_Y = 12

export default function DotGridCanvas() {
  const canvasRef = useRef(null)
  const targetRef = useRef({ x: -9999, y: -9999 })
  const currentRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef(null)
  const dotsRef = useRef([])
  const contentRectsRef = useRef([])

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

    // Store raw viewport coordinates — scroll offset is added at draw time
    const onMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }

    // Snapshot bounding rects of content areas to exclude from the effect
    const updateContentRects = () => {
      const els = document.querySelectorAll(
        'section > div, .max-w-6xl, .max-w-3xl, .max-w-2xl, nav'
      )
      contentRectsRef.current = Array.from(els).map((el) => {
        const r = el.getBoundingClientRect()
        return {
          left: r.left - CONTENT_PADDING_X,
          right: r.right + CONTENT_PADDING_X,
          top: r.top + window.scrollY - CONTENT_PADDING_Y,
          bottom: r.bottom + window.scrollY + CONTENT_PADDING_Y,
        }
      })
    }

    const isInContentZone = (x, y) => {
      const rects = contentRectsRef.current
      for (let i = 0; i < rects.length; i++) {
        const r = rects[i]
        if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return true
      }
      return false
    }

    let frameCount = 0

    const draw = () => {
      // Refresh content rects periodically to stay accurate with layout shifts
      if (frameCount++ % RECT_REFRESH_INTERVAL === 0) updateContentRects()

      // Lerp toward target mouse position for smooth movement
      const cur = currentRef.current
      const tgt = targetRef.current
      cur.x += (tgt.x - cur.x) * LERP_SPEED
      cur.y += (tgt.y - cur.y) * LERP_SPEED

      const w = parseInt(canvas.style.width)
      const h = parseInt(canvas.style.height)
      ctx.clearRect(0, 0, w, h)

      // Convert viewport coords to page coords
      const mx = cur.x
      const my = cur.y + window.scrollY
      const activeDots = []

      // Draw all dots, activating nearby ones outside content zones
      for (let i = 0; i < dotsRef.current.length; i++) {
        const dot = dotsRef.current[i]
        const dx = dot.x - mx
        const dy = dot.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        let opacity = BASE_OPACITY
        let radius = BASE_RADIUS

        if (dist < EFFECT_RADIUS && !isInContentZone(dot.x, dot.y)) {
          const t = 1 - dist / EFFECT_RADIUS
          opacity = BASE_OPACITY + t * (ACTIVE_OPACITY - BASE_OPACITY)
          radius = BASE_RADIUS + t * ACTIVE_RADIUS_BOOST
          activeDots.push({ x: dot.x, y: dot.y, dist, t })
        }

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${ACCENT_RGB}, ${opacity})`
        ctx.fill()
      }

      // Draw constellation lines between nearby active dots
      if (activeDots.length > 1) {
        activeDots.sort((a, b) => a.dist - b.dist)

        for (let i = 0; i < activeDots.length; i++) {
          let connections = 0
          for (let j = i + 1; j < activeDots.length && connections < MAX_CONNECTIONS; j++) {
            const a = activeDots[i]
            const b = activeDots[j]

            const ddx = a.x - b.x
            const ddy = a.y - b.y
            const d = Math.sqrt(ddx * ddx + ddy * ddy)

            if (d < CONNECTION_RADIUS) {
              const lineOpacity =
                (1 - d / CONNECTION_RADIUS) * Math.min(a.t, b.t) * CONNECTION_OPACITY
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.strokeStyle = `rgba(${ACCENT_RGB}, ${lineOpacity})`
              ctx.lineWidth = CONNECTION_WIDTH
              ctx.stroke()
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
