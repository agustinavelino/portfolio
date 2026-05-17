import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { education } from '../data/content'
import styles from './Education.module.css'

export default function Education() {
  const ref = useScrollFadeIn()

  return (
    <section id="education" className="section">
      <div ref={ref} className="fade-in">
        <p className="section-label">Education</p>
        <div className={styles.list}>
          {education.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.degree}>{item.degree}</h3>
                  <span className={styles.institution}>{item.institution}</span>
                </div>
                <span className={styles.period}>{item.period}</span>
              </div>
              {item.description && (
                <p className={styles.description}>{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
