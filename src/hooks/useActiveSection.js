/**
 * useActiveSection Hook
 *
 * Uses Intersection Observer to track which section is currently
 * visible in the viewport. Returns the id of the active section.
 * Used by the Navbar to highlight the current nav link.
 */
import { useState, useEffect } from 'react'

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'contact']

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observers = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return activeSection
}
