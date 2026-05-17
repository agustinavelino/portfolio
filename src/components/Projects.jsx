import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import { projects } from '../data/content'
import styles from './Projects.module.css'

export default function Projects() {
  const ref = useScrollFadeIn()

  return (
    <section id="projects" className="section">
      <div ref={ref} className="fade-in">
        <p className="section-label">Projects</p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <span>imagen del proyecto</span>
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
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
