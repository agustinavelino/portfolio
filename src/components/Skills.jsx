import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { skills } from '../data/content'
import styles from './Skills.module.css'

const categories = [
  { key: 'programacion', label: 'Programación' },
  { key: 'hardware', label: 'Hardware / Embebidos' },
  { key: 'disenio', label: 'Diseño mecánico' },
  { key: 'otros', label: 'Otros' },
]

export default function Skills() {
  const ref = useScrollFadeIn()

  return (
    <section id="skills" className="section">
      <div ref={ref} className="fade-in">
        <p className="section-label">Skills</p>
        <div className={styles.grid}>
          {categories.map(({ key, label }) => (
            <div key={key} className={styles.category}>
              <p className={styles.catLabel}>{label}</p>
              <div className={styles.pills}>
                {skills[key]?.map((skill) => (
                  <span key={skill} className="pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
