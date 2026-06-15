import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import styles from './ProjectModal.module.css'

export default function ProjectModal({ project, onClose }) {
  const { content: { ui } } = useLanguage()

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        {project.image && (
          <img src={project.image} alt={project.title} className={styles.image} />
        )}

        <div className={styles.content}>
          <h2 className={styles.title}>{project.title}</h2>

          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className="pill">{tag}</span>
            ))}
          </div>

          <div className={styles.details}>
            {project.details.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className={styles.highlights}>
              <p className={styles.highlightsLabel}>{ui.projects.highlights}</p>
              <ul>
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${styles.githubBtn}`}
            >
              {ui.projects.viewOnGitHub}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
