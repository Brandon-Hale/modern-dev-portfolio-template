/**
 * Timeline — a vertical timeline component for displaying work experience.
 * Each item animates in individually as you scroll down — the dot scales in,
 * content slides up, and bullet points stagger in one by one.
 *
 * Props:
 * - items: array of experience objects from portfolio.config.js
 *
 * Config keys: experience[]
 */
import { motion } from 'framer-motion'

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.08 },
  },
}

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } },
}

const contentVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const bulletVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

function CompanyName({ name, url }) {
  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline" title={`View ${name} website`}>
        {name}
      </a>
    )
  }
  return name
}

function SingleRole({ item }) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="relative pl-12 md:pl-16"
    >
      <motion.div
        variants={dotVariants}
        className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-bg"
      />

      <div>
        <motion.h3 variants={contentVariants} className="text-lg font-semibold text-heading">
          {item.role}
        </motion.h3>
        <motion.p variants={contentVariants} className="text-accent font-medium">
          <CompanyName name={item.company} url={item.url} />
        </motion.p>
        <motion.p variants={contentVariants} className="text-sm font-mono text-body/60 mt-1">
          {item.dates}
        </motion.p>
        <ul className="mt-3 space-y-2">
          {item.bullets.map((bullet, j) => (
            <motion.li
              key={j}
              variants={bulletVariants}
              className="text-body text-sm leading-relaxed flex gap-2"
            >
              <span className="text-accent shrink-0">▸</span>
              <span>{bullet}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function GroupedRoles({ item }) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="relative pl-12 md:pl-16"
    >
      <motion.div
        variants={dotVariants}
        className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-bg"
      />

      <div>
        <motion.p variants={contentVariants} className="text-accent font-medium text-lg">
          <CompanyName name={item.company} url={item.url} />
        </motion.p>
        <motion.p variants={contentVariants} className="text-sm font-mono text-body/60 mt-1">
          {item.dates}
        </motion.p>

        <div className="relative mt-5 ml-1 border-l border-gray-200/60 pl-6 space-y-6">
          {item.roles.map((role, i) => (
            <motion.div key={i} variants={contentVariants} className="relative">
              <div className="absolute -left-[27px] top-1.5 w-2 h-2 rounded-full bg-accent/70 border-2 border-bg" />
              <h3 className="text-base font-semibold text-heading">{role.role}</h3>
              <p className="text-sm font-mono text-body/60 mt-0.5">{role.dates}</p>
              <ul className="mt-2 space-y-2">
                {role.bullets.map((bullet, j) => (
                  <motion.li
                    key={j}
                    variants={bulletVariants}
                    className="text-body text-sm leading-relaxed flex gap-2"
                  >
                    <span className="text-accent shrink-0">▸</span>
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Timeline({ items }) {
  return (
    <div className="relative">
      {/* Vertical line — animates height via CSS */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-200" />

      <div className="space-y-12">
        {items.map((item) =>
          item.roles ? (
            <GroupedRoles key={`${item.company}-group`} item={item} />
          ) : (
            <SingleRole key={`${item.company}-${item.role}`} item={item} />
          )
        )}
      </div>
    </div>
  )
}
