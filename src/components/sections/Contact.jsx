/**
 * Contact — email CTA and social icon links.
 * Animates in on scroll.
 *
 * Config keys: social (email, github, linkedin, twitter)
 */
import { motion } from 'framer-motion'
import portfolio from '../../config/portfolio.config'
import { Github, Linkedin, Twitter, Mail } from '../ui/Icons'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Contact() {
  const { social } = portfolio

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
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
            Get In Touch
          </motion.h2>

          <motion.p variants={fadeUp} className="text-body text-lg mb-10 leading-relaxed">
            I&apos;m always open to new opportunities, collaborations, or just a friendly
            chat about tech. Feel free to reach out!
          </motion.p>

          {social.email && (
            <motion.div variants={fadeUp} className="mb-10">
              <a
                href={`mailto:${social.email}`}
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-accent-light transition-colors"
              >
                <Mail size={18} />
                Say Hello
              </a>
            </motion.div>
          )}

          <motion.div variants={fadeUp} className="flex justify-center gap-6">
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-body/50 hover:text-accent transition-colors"
              >
                <Github size={24} />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-body/50 hover:text-accent transition-colors"
              >
                <Linkedin size={24} />
              </a>
            )}
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="text-body/50 hover:text-accent transition-colors"
              >
                <Twitter size={24} />
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
