/**
 * Footer — minimal site footer with social links and copyright.
 *
 * Config keys: name, social
 */
import portfolio from '../../config/portfolio.config'
import { Github, Linkedin, Twitter, Mail } from './Icons'

export default function Footer() {
  const { name, social } = portfolio
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-body/60 font-mono text-center md:text-left">
          &copy; {year} {name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {social.github && (
            <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="text-body/50 hover:text-accent transition-colors">
              <Github size={18} />
            </a>
          )}
          {social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="text-body/50 hover:text-accent transition-colors">
              <Linkedin size={18} />
            </a>
          )}
          {social.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" title="Twitter / X" className="text-body/50 hover:text-accent transition-colors">
              <Twitter size={18} />
            </a>
          )}
          {social.email && (
            <a href={`mailto:${social.email}`} aria-label="Send email" title="Send email" className="text-body/50 hover:text-accent transition-colors">
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
