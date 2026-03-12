/**
 * useActiveSection Hook
 *
 * Tracks which section is currently visible by comparing scroll position
 * against each section's offset. More reliable than IntersectionObserver
 * for sections of varying heights.
 *
 * Used by the Navbar to highlight the current nav link.
 */
import { useState, useEffect } from 'react'

const SECTION_IDS = ['hero', 'about', 'education', 'experience', 'projects', 'contact']

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const getActive = () => {
      // If scrolled to bottom, activate the last section
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50
      if (atBottom) {
        setActiveSection(SECTION_IDS[SECTION_IDS.length - 1])
        return
      }

      const scrollY = window.scrollY + window.innerHeight * 0.35
      let current = SECTION_IDS[0]

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= scrollY) {
          current = id
        }
      }

      setActiveSection(current)
    }

    getActive()
    window.addEventListener('scroll', getActive, { passive: true })
    return () => window.removeEventListener('scroll', getActive)
  }, [])

  return activeSection
}
