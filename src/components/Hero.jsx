import { useLanguage } from '../contexts/LanguageContext'
import styles from './Hero.module.css'

export default function Hero() {
  const { content: { personalInfo, ui } } = useLanguage()
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <span className={styles.tag}>{personalInfo.title}</span>
          <h1 className={styles.title}>{personalInfo.name}</h1>
          <p className={styles.bio}>{personalInfo.bio}</p>
          <div className={styles.actions}>
            <button className="btn btn-primary" onClick={() => scrollTo('#projects')}>
              {ui.hero.viewProjects}
            </button>
            <button className="btn" onClick={() => scrollTo('#contact')}>
              {ui.hero.contact}
            </button>
            {personalInfo.cv && (
              <a href={personalInfo.cv} download className="btn btn-ghost">
                {ui.hero.downloadCV}
              </a>
            )}
          </div>
        </div>

        <div className={styles.photoWrapper}>
          {personalInfo.photo ? (
            <img src={personalInfo.photo} alt={personalInfo.name} className={styles.photo} />
          ) : (
            <div className={styles.photoPlaceholder}>
              <span>Tu foto</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
