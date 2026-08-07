import { useState } from 'react'
import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { useLanguage } from '../contexts/LanguageContext'
import styles from './Projects.module.css'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const ref = useScrollFadeIn()
  const [selected, setSelected] = useState(null)
  const { content: { projects, ui } } = useLanguage()

  return (
    <section id="projects" className="section">
      <div ref={ref} className="section-grid fade-in">
        <div className="rail">
          <p className="section-label">Projects</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`${styles.card} ${i === 0 ? styles.featured : ''}`}
            >
              <div className={styles.media}>
                {project.image
                  ? <img src={project.image} alt={project.title} className={styles.image} />
                  : <span className={styles.imageEmpty}>Sin imagen</span>
                }
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.actions}>
                  {project.details && (
                    <button
                      className={`btn ${styles.detailsBtn}`}
                      onClick={() => setSelected(project)}
                    >
                      {ui.projects.viewMore}
                    </button>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
