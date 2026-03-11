/**
 * Projects — dedicated full projects page at /projects.
 *
 * Features:
 * - Category tabs: All, Work, Personal, Open Source
 * - Tech tag filter bar with multi-select
 * - URL query params for shareable filtered views
 * - Load more pagination (6 at a time)
 * - AnimatePresence for card transitions
 * - Featured projects span 2 columns and appear first
 *
 * Config keys: projects, projectsPageSubtitle
 */
import { useMemo, useCallback, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import portfolio from '../config/portfolio.config'
import ProjectCard from '../components/ui/ProjectCard'
import FilterBar from '../components/ui/FilterBar'
import Footer from '../components/ui/Footer'

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'work', label: 'Work' },
  { key: 'personal', label: 'Personal' },
  { key: 'open-source', label: 'Open Source' },
]

const PAGE_SIZE = 6

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams()

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Read filter state from URL
  const activeCategory = searchParams.get('category') || 'all'
  const activeTags = useMemo(() => {
    const raw = searchParams.get('tags')
    return raw ? raw.split(',').filter(Boolean) : []
  }, [searchParams])
  const visibleCount = parseInt(searchParams.get('show') || PAGE_SIZE, 10)

  // Collect all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set()
    portfolio.projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)))
    return [...tagSet].sort()
  }, [])

  // Filter projects
  const filtered = useMemo(() => {
    let list = [...portfolio.projects]

    // Category filter
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory)
    }

    // Tag filter — show projects matching ANY of the selected tags
    if (activeTags.length > 0) {
      list = list.filter((p) => activeTags.some((t) => p.tags.includes(t)))
    }

    // Sort: featured first, then by year descending
    list.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return b.year - a.year
    })

    return list
  }, [activeCategory, activeTags])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  // URL param helpers
  const updateParams = useCallback(
    (updates) => {
      const params = new URLSearchParams(searchParams)
      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === undefined || value === '' || value === 'all') {
          params.delete(key)
        } else {
          params.set(key, value)
        }
      })
      // Reset show count when filters change (unless we're just loading more)
      if (!('show' in updates)) {
        params.delete('show')
      }
      setSearchParams(params, { replace: true })
    },
    [searchParams, setSearchParams]
  )

  const setCategory = (cat) => updateParams({ category: cat })

  const toggleTag = (tag) => {
    const next = activeTags.includes(tag)
      ? activeTags.filter((t) => t !== tag)
      : [...activeTags, tag]
    updateParams({ tags: next.length > 0 ? next.join(',') : null })
  }

  const clearFilters = () => {
    setSearchParams({}, { replace: true })
  }

  const loadMore = () => {
    updateParams({ show: String(visibleCount + PAGE_SIZE) })
  }

  const hasActiveFilters = activeCategory !== 'all' || activeTags.length > 0

  return (
    <main className="pt-24 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-heading font-display text-4xl md:text-5xl mb-3">
            All Projects
          </h1>
          <p className="text-body text-lg max-w-2xl">
            {portfolio.projectsPageSubtitle}
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex gap-1 overflow-x-auto pb-2 mb-4"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              className={`cursor-pointer px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat.key
                  ? 'bg-accent text-white'
                  : 'text-body/60 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Tag filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-6"
        >
          <FilterBar tags={allTags} activeTags={activeTags} onToggle={toggleTag} />
        </motion.div>

        {/* Clear filters + count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm font-mono text-body/50">
            Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} project
            {filtered.length !== 1 ? 's' : ''}
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="cursor-pointer text-sm font-mono text-accent hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={project.featured ? 'md:col-span-2 lg:col-span-2' : ''}
              >
                <ProjectCard project={project} onTagClick={toggleTag} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-body/50 text-lg mb-4">No projects match your filters.</p>
            <button
              onClick={clearFilters}
              className="cursor-pointer text-accent font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="cursor-pointer border border-accent text-accent px-8 py-3 rounded-full font-medium text-sm hover:bg-accent hover:text-white transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
