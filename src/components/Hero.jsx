import { personalInfo } from '../data/content'
import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <span className={styles.tag}>{personalInfo.title}</span>
          <h1 className={styles.title}>Hola, soy {personalInfo.name}.</h1>
          <p className={styles.bio}>{personalInfo.bio}</p>
          <div className={styles.actions}>
            <button className="btn" onClick={() => scrollTo('#projects')}>
              Ver proyectos
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo('#contact')}>
              Contacto
            </button>
            {personalInfo.cv ? (
              <a href={personalInfo.cv} download className={`btn ${styles.cvBtn}`}>
                Descargar CV
              </a>
            ) : (
              <span className={styles.cvPlaceholder}>
                [Agrega tu CV en content.js]
              </span>
            )}
          </div>
        </div>

        <div className={styles.photoWrapper}>
          {personalInfo.photo ? (
            <img
              src={personalInfo.photo}
              alt={personalInfo.name}
              className={styles.photo}
            />
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
