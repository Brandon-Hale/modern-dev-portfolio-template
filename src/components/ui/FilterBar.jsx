/**
 * FilterBar — a horizontally scrollable row of tag filter buttons.
 * Used on the /projects page to filter by technology.
 *
 * Props:
 * - tags: string[] — all available tags
 * - activeTags: string[] — currently selected tags
 * - onToggle: (tag: string) => void — called when a tag is clicked
 *
 * Config keys: derived from projects[].tags
 */
import Tag from './Tag'

export default function FilterBar({ tags, activeTags, onToggle }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {tags.map((tag) => (
        <Tag
          key={tag}
          label={tag}
          active={activeTags.includes(tag)}
          onClick={() => onToggle(tag)}
        />
      ))}
    </div>
  )
}
