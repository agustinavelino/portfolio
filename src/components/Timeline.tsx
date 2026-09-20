import { cn } from '@/lib/utils'

export type TimelineEntry = {
  /** Cargo o titulación. */
  title: string
  /** Empresa o institución. */
  subtitle: string
  period: string
  description?: readonly string[]
}

/**
 * Lista cronológica con riel vertical y nodo por entrada.
 * La comparten Education y Experience, que tenían el mismo CSS duplicado.
 * El nodo de la primera entrada va relleno: marca lo más reciente.
 */
export default function Timeline({ entries }: { entries: readonly TimelineEntry[] }) {
  return (
    <ol className="relative flex flex-col gap-4 pl-[30px] max-[600px]:pl-[22px]">
      {/* Riel: el orden es cronológico, no decorativo */}
      <span
        aria-hidden="true"
        className="absolute top-[26px] bottom-[26px] left-[3px] w-px bg-line-strong"
      />

      {entries.map((entry, i) => (
        <li
          key={`${entry.title}-${entry.period}`}
          className="relative flex flex-col gap-3.5 rounded-lg border border-line bg-surface px-6 py-5.5 max-[600px]:px-4.5 max-[600px]:py-4.5"
        >
          <span
            aria-hidden="true"
            className={cn(
              'absolute top-[26px] -left-[31px] h-[9px] w-[9px] rounded-full border-2 border-signal max-[600px]:-left-[23px]',
              i === 0 ? 'bg-signal' : 'bg-base',
            )}
          />

          <div className="flex items-baseline justify-between gap-5 max-[600px]:flex-col max-[600px]:gap-1.5">
            <div>
              <h3 className="mb-[3px] text-[17px] leading-[1.25] font-semibold tracking-[-0.01em] text-ink [font-variation-settings:'wdth'_104]">
                {entry.title}
              </h3>
              <span className="text-[13.5px] text-ink-2">{entry.subtitle}</span>
            </div>
            <span className="shrink-0 text-[12.5px] whitespace-nowrap text-ink-3 [font-feature-settings:'tnum']">
              {entry.period}
            </span>
          </div>

          {entry.description && entry.description.length > 0 && (
            <ul className="flex flex-col gap-2">
              {entry.description.map((point, j) => (
                <li
                  key={j}
                  className="relative pl-[18px] text-sm leading-[1.6] text-ink-2 before:absolute before:top-[9px] before:left-0 before:h-px before:w-[6px] before:bg-line-strong before:content-[''] max-[600px]:text-[13.5px]"
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}
