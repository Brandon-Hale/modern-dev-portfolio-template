/**
 * ProjectCard — displays a single project with auto-generated gradient banner,
 * title, description, category badge, tech tags, and action links.
 *
 * Props:
 * - project: object — a single project from portfolio.config.js
 * - onTagClick: (tag: string) => void — optional, called when a tech tag is clicked
 *
 * Config keys: projects[]
 */
import Card from './Card'
import Tag from './Tag'
import { Github, ExternalLink, Lock } from './Icons'

/**
 * Generates a deterministic gradient from a project title.
 * Uses a simple string hash to pick hue values.
 */
function generateGradient(title) {
  let hash = 0
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash)
  }
  const hue1 = Math.abs(hash % 360)
  const hue2 = (hue1 + 40 + Math.abs((hash >> 8) % 40)) % 360
  return `linear-gradient(135deg, hsl(${hue1}, 60%, 72%), hsl(${hue2}, 55%, 58%))`
}

const CATEGORY_LABELS = {
  work: 'Work',
  personal: 'Personal',
  'open-source': 'Open Source',
}

export default function ProjectCard({ project, onTagClick }) {
  const { title, description, featured, category, tags, year, github, demo } = project

  return (
    <Card featured={featured}>
      {/* Gradient banner */}
      <div
        className="h-36 relative"
        style={{ background: generateGradient(title) }}
      >
        {featured && (
          <span className="absolute top-3 right-3 bg-white/90 text-accent text-xs font-mono font-medium px-2.5 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Category + Year */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-medium text-accent bg-accent/8 px-2.5 py-1 rounded-full">
            {CATEGORY_LABELS[category] || category}
          </span>
          <span className="text-xs font-mono text-body/50">{year}</span>
        </div>

        {/* Title + Description */}
        <h3 className="text-heading text-lg font-semibold leading-snug">{title}</h3>
        <p className="text-body text-sm leading-relaxed line-clamp-3">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {tags.map((tag) => (
            <Tag
              key={tag}
              label={tag}
              onClick={onTagClick ? () => onTagClick(tag) : undefined}
            />
          ))}
        </div>

        {/* Action links */}
        <div className="flex items-center gap-3 mt-2 pt-3 border-t border-gray-100">
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              title={`View ${title} source code on GitHub`}
              className="flex items-center gap-1.5 text-sm text-body/60 hover:text-accent transition-colors"
            >
              <Github size={16} />
              <span className="font-mono text-xs">Code</span>
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-body/40" title="Source code is private">
              <Lock size={14} />
              <span className="font-mono text-xs">Private</span>
            </span>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              title={`View ${title} live demo`}
              className="flex items-center gap-1.5 text-sm text-body/60 hover:text-accent transition-colors"
            >
              <ExternalLink size={16} />
              <span className="font-mono text-xs">Demo</span>
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}
