import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { useLanguage } from '../contexts/LanguageContext'
import styles from './Experience.module.css'

export default function Experience() {
  const ref = useScrollFadeIn()
  const { content: { experience } } = useLanguage()

  return (
    <section id="experience" className="section">
      <div ref={ref} className="fade-in">
        <p className="section-label">Experience</p>
        <div className={styles.list}>
          {experience.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{item.role}</h3>
                  <span className={styles.institution}>{item.institution}</span>
                </div>
                <span className={styles.period}>{item.period}</span>
              </div>
              <ul className={styles.bullets}>
                {item.description.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
