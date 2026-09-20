import { memo, useMemo } from 'react'
import { motion, useReducedMotion } from 'motion/react'

/* ==========================================================================
   Background Paths — origen: Kokonut UI (@dorianbaffier, MIT).
   https://kokonutui.com

   Adaptado al proyecto según .claude/skills/portfolio-taste/SKILL.md:
   - Sin Next.js: fuera "use client".
   - Re-tokenizado: el gradiente original era violeta → rosa → azul
     (rgba(147,51,234) → rgba(236,72,153) → rgba(59,130,246)). Ahora es
     zinc con un tramo ámbar tenue, coherente con la paleta.
   - Se descartan `AnimatedTitle` y el envoltorio de página: aquí solo
     interesa la capa de fondo, y aquel titular usaba bg-clip-text.
   - Rendimiento: el original animaba cada path por separado (37 bucles
     infinitos). Como todos los de un grupo comparten duración, se anima el
     <g> completo — 3 animaciones en vez de 37, mismo resultado visual.
   - Los ids aleatorios (Math.random + substr, deprecado) se sustituyen por
     claves por índice: evita remontar los paths al recalcular.
   - Respeta prefers-reduced-motion: sin flotación, capa estática.
   ========================================================================== */

type PathSpec = {
  d: string
  opacity: number
  width: number
}

type PathKind = 'primary' | 'secondary' | 'accent'

function generateAestheticPath(index: number, position: number, type: PathKind): string {
  const baseAmplitude = type === 'primary' ? 150 : type === 'secondary' ? 100 : 60
  const segments = type === 'primary' ? 10 : type === 'secondary' ? 8 : 6
  const phase = index * 0.2

  const startX = 2400
  const startY = 800
  const endX = -2400
  const endY = -800 + index * 25

  const points: { x: number; y: number }[] = []

  for (let i = 0; i <= segments; i++) {
    const progress = i / segments
    const eased = 1 - (1 - progress) ** 2

    const baseX = startX + (endX - startX) * eased
    const baseY = startY + (endY - startY) * eased

    const amplitudeFactor = 1 - eased * 0.3
    const wave1 = Math.sin(progress * Math.PI * 3 + phase) * (baseAmplitude * 0.7 * amplitudeFactor)
    const wave2 = Math.cos(progress * Math.PI * 4 + phase) * (baseAmplitude * 0.3 * amplitudeFactor)
    const wave3 = Math.sin(progress * Math.PI * 2 + phase) * (baseAmplitude * 0.2 * amplitudeFactor)

    points.push({ x: baseX * position, y: baseY + wave1 + wave2 + wave3 })
  }

  return points
    .map((point, i) => {
      if (i === 0) return `M ${point.x} ${point.y}`
      const prev = points[i - 1]
      const tension = 0.4
      const cp1x = prev.x + (point.x - prev.x) * tension
      const cp2x = prev.x + (point.x - prev.x) * (1 - tension)
      return `C ${cp1x} ${prev.y}, ${cp2x} ${point.y}, ${point.x} ${point.y}`
    })
    .join(' ')
}

/** Cada grupo flota como un todo: los paths de un grupo comparten duración. */
const GROUPS: { kind: PathKind; count: number; travel: number; duration: number; groupOpacity: number }[] = [
  { kind: 'primary', count: 8, travel: -15, duration: 8, groupOpacity: 1 },
  { kind: 'secondary', count: 10, travel: -10, duration: 6, groupOpacity: 0.8 },
  { kind: 'accent', count: 6, travel: -5, duration: 4, groupOpacity: 0.6 },
]

function specsFor(kind: PathKind, count: number, position: number): PathSpec[] {
  const base = kind === 'primary' ? 0.15 : kind === 'secondary' ? 0.12 : 0.08
  const stepO = kind === 'primary' ? 0.02 : kind === 'secondary' ? 0.015 : 0.03
  const baseW = kind === 'primary' ? 4 : kind === 'secondary' ? 3 : 2
  const stepW = kind === 'primary' ? 0.3 : kind === 'secondary' ? 0.25 : 0.2

  return Array.from({ length: count }, (_, i) => ({
    d: generateAestheticPath(i, position, kind),
    opacity: base + i * stepO,
    width: baseW + i * stepW,
  }))
}

export const FloatingPaths = memo(function FloatingPaths({
  position = 1,
  className = '',
}: {
  position?: number
  className?: string
}) {
  const reduced = useReducedMotion()
  const groups = useMemo(
    () => GROUPS.map((g) => ({ ...g, paths: specsFor(g.kind, g.count, position) })),
    [position],
  )

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        aria-hidden="true"
        focusable="false"
        className="h-full w-full"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="-2400 -800 4800 1600"
      >
        <defs>
          {/* Zinc con un tramo ámbar tenue — el acento no domina la capa */}
          <linearGradient id="bg-paths-stroke" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(161 161 170 / 0.30)" />
            <stop offset="50%" stopColor="rgb(240 160 32 / 0.32)" />
            <stop offset="100%" stopColor="rgb(113 113 122 / 0.18)" />
          </linearGradient>
        </defs>

        {groups.map((group) => (
          <motion.g
            key={group.kind}
            style={{ opacity: group.groupOpacity }}
            initial={reduced ? false : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: group.groupOpacity, y: [0, group.travel, 0] }}
            transition={
              reduced
                ? undefined
                : {
                    opacity: { duration: 1 },
                    y: {
                      duration: group.duration,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    },
                  }
            }
          >
            {group.paths.map((path, i) => (
              <path
                key={`${group.kind}-${i}`}
                d={path.d}
                stroke="url(#bg-paths-stroke)"
                strokeLinecap="round"
                strokeWidth={path.width}
                style={{ opacity: path.opacity }}
              />
            ))}
          </motion.g>
        ))}
      </svg>
    </div>
  )
})
