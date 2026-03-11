/**
 * Navbar — sticky navigation bar shared across all pages.
 *
 * On the home page (/): shows section links with smooth scroll and
 * an active section indicator powered by useActiveSection.
 *
 * On the projects page (/projects): shows a "← Home" back link
 * alongside the logo/name.
 *
 * Features:
 * - Frosted glass blur effect on scroll
 * - Shared layout underline animation via Framer Motion layoutId
 * - Hamburger menu on mobile with slide-down drawer
 *
 * Config keys: name
 */
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import useActiveSection from '../../hooks/useActiveSection'
import portfolio from '../../config/portfolio.config'
import { ArrowLeft, Menu, X } from './Icons'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const { name } = portfolio
  const location = useLocation()
  const isHome = location.pathname === '/'
  const activeSection = useActiveSection()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const scrollToSection = (id) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-black/5 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          to="/"
          className="text-heading font-display text-xl font-semibold hover:text-accent transition-colors"
        >
          {isHome ? (
            name.split(' ')[0]
          ) : (
            <span className="flex items-center gap-2">
              <ArrowLeft size={16} />
              <span>Home</span>
            </span>
          )}
        </Link>

        {/* Desktop nav links — only on home page */}
        {isHome && (
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative px-4 py-2 text-sm font-medium text-body/70 hover:text-heading transition-colors"
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Mobile hamburger */}
        {isHome && (
          <button
            className="md:hidden text-heading p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && isHome && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-bg/95 backdrop-blur-xl border-b border-black/5"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-accent/10 text-accent'
                      : 'text-body/70 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
