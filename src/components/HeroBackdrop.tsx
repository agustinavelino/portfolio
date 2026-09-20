/**
 * Capa de fondo del Hero.
 *
 * Retícula técnica fina + un solo halo ámbar, ambos con máscara radial para que
 * se desvanezcan en los bordes y no se lean como "imagen pegada".
 *
 * Para sustituirla por un SVG de Haikei: genera el archivo en app.haikei.app,
 * recolorealo a zinc + ámbar, guárdalo en `public/images/bg/hero.svg` y móntalo
 * como un <img> absoluto aquí, conservando `pointer-events-none`, la opacidad
 * entre 0.35 y 0.6 y la máscara. Ver SKILL.md §6.
 */
export default function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Retícula de 72px, 1px de línea a 4% de blanco */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(90%_70%_at_50%_35%,black,transparent)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(255 255 255 / 0.04) 1px, transparent 1px),' +
            'linear-gradient(to bottom, rgb(255 255 255 / 0.04) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
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
