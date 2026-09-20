import { useLanguage } from '../contexts/LanguageContext'
import Section from './Section'
import { label as labelClass } from '@/lib/styles'

export default function Skills() {
  const {
    content: { skills, certifications, ui },
  } = useLanguage()

  // Las categorías se declaran en `ui.skills.categories` con una clave suelta;
  // este acceso tolerante evita romper si una categoría aún no tiene datos.
  const groups = skills as Record<string, readonly string[] | undefined>

  return (
    <Section id="skills" label="Skills">
      <div className="flex flex-col gap-8">
        {/* Tabla de especificación: categoría a la izquierda, herramientas a la derecha */}
        <div className="overflow-hidden rounded-lg border border-line bg-surface">
          {ui.skills.categories.map(({ key, label }) => (
            <div
              key={key}
              className="grid grid-cols-1 items-center gap-2.5 border-b border-line px-5.5 py-4 last:border-b-0 min-[640px]:grid-cols-[12.5rem_minmax(0,1fr)] min-[640px]:gap-5 max-[640px]:px-4.5"
            >
              <p className={labelClass}>{label}</p>
              <div className="flex flex-wrap gap-[7px]">
                {groups[key]?.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-line bg-base px-3 py-[5px] text-[13px] text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certificaciones */}
        <div className="flex flex-col gap-3.5">
          <p className={labelClass}>{ui.skills.certificationsLabel}</p>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={`https://www.credly.com/badges/${cert.badgeId}/public_url`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-[3px] rounded-lg border border-line bg-surface px-5.5 py-4 transition-colors duration-200 hover:border-line-strong hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signal max-[640px]:w-full"
              >
                <span className="text-[15px] font-semibold text-ink [font-variation-settings:'wdth'_104]">
                  {cert.name}
                </span>
                <span className="text-[13px] text-ink-3">{cert.issuer}</span>
                <span className="mt-2.5 self-start border-b border-line-strong pb-px text-[13px] text-ink-2 transition-colors duration-200 group-hover:border-ink group-hover:text-ink">
                  {ui.skills.verify}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
