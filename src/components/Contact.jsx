import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { personalInfo } from '../data/content'
import styles from './Contact.module.css'

export default function Contact() {
  const ref = useScrollFadeIn()

  return (
    <section id="contact" className="section">
      <div ref={ref} className="fade-in">
        <p className="section-label">Contact</p>
        <div className={styles.links}>
          <a href={`mailto:${personalInfo.email}`} className={styles.emailLink}>
            {personalInfo.email}
          </a>
          <div className={styles.social}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
