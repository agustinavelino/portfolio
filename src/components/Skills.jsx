import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { useLanguage } from '../contexts/LanguageContext'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useScrollFadeIn()
  const { content: { skills, certifications, ui } } = useLanguage()

  return (
    <section id="skills" className="section">
      <div ref={ref} className="section-grid fade-in">
        <div className="rail">
          <p className="section-label">Skills</p>
        </div>

        <div className={styles.body}>
          <div className={styles.grid}>
            {ui.skills.categories.map(({ key, label }) => (
              <div key={key} className={styles.category}>
                <p className={styles.catLabel}>{label}</p>
                <div className={styles.pills}>
                  {skills[key]?.map((skill) => (
                    <span key={skill} className={styles.pill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.certBlock}>
            <p className={styles.certLabel}>{ui.skills.certificationsLabel}</p>
            <div className={styles.certGrid}>
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={`https://www.credly.com/badges/${cert.badgeId}/public_url`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certCard}
                >
                  <span className={styles.certName}>{cert.name}</span>
                  <span className={styles.certIssuer}>{cert.issuer}</span>
                  <span className={styles.certVerify}>{ui.skills.verify}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
