import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { useLanguage } from '../contexts/LanguageContext'
import styles from './About.module.css'

export default function About() {
  const ref = useScrollFadeIn()
  const { content: { personalInfo } } = useLanguage()

  return (
    <section id="about" className="section">
      <div ref={ref} className="fade-in">
        <p className="section-label">About</p>
        {personalInfo.about.map((paragraph, i) => (
          <p key={i} className={styles.text}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
