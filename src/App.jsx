/**
 * App — root component handling routing between Home and Projects pages.
 * Renders the shared Navbar, dot-grid background, cursor spotlight, and
 * custom cursor across both pages with page transition animations.
 */
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/ui/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import useMousePosition from './hooks/useMousePosition'

function CursorEffects() {
  const mouse = useMousePosition()
  const isTouchDevice =
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

  if (isTouchDevice) return null

  return (
    <>
      {/* Dot grid spotlight */}
      <div
        className="cursor-spotlight"
        style={{
          background:
            mouse.x > 0
              ? `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(13,27,75,0.04), transparent 70%)`
              : 'transparent',
        }}
      />
      {/* Custom cursor dot */}
      <motion.div
        className="custom-cursor"
        animate={{ x: mouse.x - 6, y: mouse.y - 6 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
    </>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="dot-grid-bg min-h-screen relative">
        <CursorEffects />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  )
}
