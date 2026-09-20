import { FloatingPaths } from './ui/background-paths'

/**
 * Capa de fondo del Hero.
 *
 * Trazos flotantes (Background Paths de Kokonut UI, re-tokenizados) con una
 * máscara radial que los desvanece en los bordes, más el halo de señal y el
 * cierre inferior que empalma con la sección siguiente.
 */
export default function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <FloatingPaths
        position={1}
        className="opacity-70 [mask-image:radial-gradient(120%_85%_at_50%_40%,black_35%,transparent_85%)]"
      />

      {/* Halo de señal — el único uso de ámbar como superficie, muy diluido */}
      <div
        className="absolute -top-1/4 left-[58%] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgb(240 160 32 / 0.10) 0%, rgb(240 160 32 / 0.03) 45%, transparent 70%)',
        }}
      />

      {/* Cierre inferior hacia el fondo de página, para empalmar con la sección siguiente */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-base" />
    </div>
  )
}
