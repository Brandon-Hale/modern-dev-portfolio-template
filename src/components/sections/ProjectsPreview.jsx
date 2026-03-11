/**
 * ProjectsPreview — shows only featured projects (max 3) on the home page.
 * Includes a prominent "View All Projects →" link to the /projects route.
 *
 * Config keys: projects (filtered to featured: true)
 */
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import portfolio from '../../config/portfolio.config'
import ProjectCard from '../ui/ProjectCard'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ProjectsPreview() {
  const featured = portfolio.projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-heading font-display text-4xl md:text-5xl mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body text-lg mb-12 max-w-2xl">
            A selection of work I&apos;m most proud of.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-accent-light transition-colors"
          >
            View All Projects
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
