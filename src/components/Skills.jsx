import { useEffect } from 'react'
import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { useLanguage } from '../contexts/LanguageContext'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useScrollFadeIn()
  const { content: { skills, certifications, ui } } = useLanguage()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//cdn.credly.com/assets/utilities/embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  return (
    <section id="skills" className="section">
      <div ref={ref} className="fade-in">
        <p className="section-label">Certifications</p>

        <div className={styles.certGrid}>
          {certifications.map((cert) => (
            <div key={cert.name} className={styles.certCard}>
              {cert.badgeId && (
                <div
                  data-iframe-width="150"
                  data-iframe-height="270"
                  data-share-badge-id={cert.badgeId}
                  data-share-badge-host="https://www.credly.com"
                />
              )}
            </div>
          ))}
        </div>

        <div className={styles.skillsBlock}>
          <p className={styles.skillsLabel}>Skills</p>
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
        </div>
      </div>
    </section>
  )
}
