/**
 * Education — displays education background and certifications.
 * Animates in on scroll with fade-up.
 *
 * Config keys: education, certifications
 */
import { motion } from 'framer-motion'
import portfolio from '../../config/portfolio.config'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Education() {
  const { education, certifications } = portfolio

  if (!education?.length && !certifications?.length) return null

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-heading font-display text-4xl md:text-5xl mb-12"
          >
            Education
          </motion.h2>

          {education?.map((edu, i) => (
            <motion.div key={i} variants={fadeUp} className="mb-8">
              <h3 className="text-lg font-semibold text-heading">{edu.degree}</h3>
              <p className="text-accent font-medium">
                {edu.url ? (
                  <a href={edu.url} target="_blank" rel="noopener noreferrer" className="hover:underline" title={`View ${edu.institution} website`}>
                    {edu.institution}
                  </a>
                ) : (
                  edu.institution
                )}
              </p>
              <p className="text-sm font-mono text-body/60 mt-1">{edu.dates}</p>
              {edu.details?.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {edu.details.map((detail, j) => (
                    <li key={j} className="text-body text-sm leading-relaxed flex gap-2">
                      <span className="text-accent shrink-0">▸</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}

          {certifications?.length > 0 && (
            <motion.div variants={fadeUp} className="mt-10">
              <h3 className="text-heading font-medium text-sm font-mono mb-4 uppercase tracking-wider">
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="text-heading font-medium text-sm">{cert.name}</p>
                      <p className="text-body/60 text-xs">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-mono text-body/50 shrink-0">{cert.date}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
