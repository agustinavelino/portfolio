import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { personalInfo } from '../data/content'
import styles from './About.module.css'

export default function About() {
  const ref = useScrollFadeIn()

  return (
    <section id="about" className="section">
      <div ref={ref} className="fade-in">
        <p className="section-label">About</p>
        <p className={styles.text}>{personalInfo.about}</p>
      </div>
    </section>
  )
}
