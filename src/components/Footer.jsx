import { useLanguage } from '../contexts/LanguageContext'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const { content: { personalInfo } } = useLanguage()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.left}>{personalInfo.name} · {year}</span>
        <div className={styles.right}>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
