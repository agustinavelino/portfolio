import { useLanguage } from '../contexts/LanguageContext'
import { Carousel, Card, type CarouselCard } from './ui/apple-cards-carousel'
import { btnOutline, label as labelClass } from '@/lib/styles'
import { cn } from '@/lib/utils'

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
          <p className={labelClass}>{labels.highlights}</p>
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
          className={cn(btnOutline, "mt-10")}
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
        header={<h2 className={labelClass}>Projects</h2>}
      />
    </section>
  )
}
