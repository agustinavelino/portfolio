import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { useLanguage } from '../contexts/LanguageContext'
import styles from './Education.module.css'

export default function Education() {
  const ref = useScrollFadeIn()
  const { content: { education } } = useLanguage()

  return (
    <section id="education" className="section">
      <div ref={ref} className="section-grid fade-in">
        <div className="rail">
          <p className="section-label">Education</p>
        </div>
        <div className={styles.list}>
          {education.map((item, i) => (
            <article key={i} className={styles.item}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.degree}>{item.degree}</h3>
                  <span className={styles.institution}>{item.institution}</span>
                </div>
                <span className={styles.period}>{item.period}</span>
              </div>
              {item.description && (
                <ul className={styles.bullets}>
                  {item.description.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
