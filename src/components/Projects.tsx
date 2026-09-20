import { useLanguage } from '../contexts/LanguageContext'
import { Carousel, Card, type CarouselCard } from './ui/apple-cards-carousel'

/** Contenido del panel abierto de un proyecto. */
function ProjectDetail({
  project,
  labels,
}: {
  project: (typeof import('../data/content'))['projects'][number]
  labels: { highlights: string; viewOnGitHub: string }
}) {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line bg-surface-3 px-3 py-1 text-label text-ink-2"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 max-w-[65ch] space-y-4 text-base text-ink-2">
        {project.details.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {project.highlights && project.highlights.length > 0 && (
        <div className="mt-10 border-t border-line pt-6">
          <p className="text-label font-semibold tracking-[0.14em] text-ink-3 uppercase [font-variation-settings:'wdth'_88]">
            {labels.highlights}
          </p>
          <ul className="mt-4 max-w-[65ch] space-y-3">
            {project.highlights.map((item, i) => (
              <li key={i} className="flex gap-3 text-base text-ink-2">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-signal"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-lg border border-line-strong bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink-3 hover:bg-surface-3 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signal"
        >
          {labels.viewOnGitHub}
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  const {
    content: { projects, ui },
  } = useLanguage()

  const cards = projects.map((project, index) => {
    const card: CarouselCard = {
      src: project.image,
      gallery: project.gallery,
      title: project.title,
      category: project.category,
      content: (
        <ProjectDetail
          project={project}
          labels={{ highlights: ui.projects.highlights, viewOnGitHub: ui.projects.viewOnGitHub }}
        />
      ),
    }
    return <Card key={project.title} card={card} index={index} />
  })

  return (
    // A sangre: el carrusel se sale del contenedor, por eso overflow-hidden aquí
    // evita que el derrame genere scroll horizontal en la página.
    <section id="projects" className="overflow-hidden border-b border-line py-22">
      <Carousel
        items={cards}
        labels={{
          prev: ui.projects.prev,
          next: ui.projects.next,
          close: ui.projects.close,
          image: ui.projects.image,
        }}
        header={
          <p className="text-label font-semibold tracking-[0.14em] text-ink-3 uppercase [font-variation-settings:'wdth'_88]">
            Projects
          </p>
        }
      />
    </section>
  )
}
