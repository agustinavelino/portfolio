import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { useLanguage } from '../contexts/LanguageContext'
import styles from './Contact.module.css'

export default function Contact() {
  const ref = useScrollFadeIn()
  const { content: { personalInfo, ui } } = useLanguage()

  return (
    <section id="contact" className="section">
      <div ref={ref} className="section-grid fade-in">
        <div className="rail">
          <p className="section-label">Contact</p>
        </div>

        <div className={styles.body}>
          <a href={`mailto:${personalInfo.email}`} className={styles.emailLink}>
            {/* el <wbr> deja que el correo parta por el @ en pantallas angostas */}
            {personalInfo.email.split('@')[0]}
            <wbr />
            {`@${personalInfo.email.split('@')[1]}`}
          </a>
          <div className={styles.social}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn">
              LinkedIn
            </a>
            {personalInfo.cv && (
              <a href={personalInfo.cv} download className="btn btn-ghost">
                {ui.hero.downloadCV}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
