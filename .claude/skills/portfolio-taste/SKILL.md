---
name: portfolio-taste
description: Dirección visual obligatoria para el portfolio de Agustín Avelino. Úsala SIEMPRE que escribas, edites o integres cualquier componente de UI, CSS, Tailwind o animación en este repo — incluyendo al pegar componentes de Aceternity UI, Kokonut UI, Watermelon UI o cualquier registry de shadcn.
---

# Taste — Portfolio Agustín Avelino

Sistema visual: **oscuro zinc, acento ámbar único, tipografía variable Archivo,
movimiento con parámetros cerrados.**

La referencia es el trabajo de un *design engineer*, no una plantilla. Si una decisión
visual podría aparecer idéntica en cualquier otro portfolio generado por IA, está mal.

---

## 1. Prohibido (lista antigenérico)

Esto es lo más importante del archivo. Nada de lo siguiente entra al proyecto:

- **Gradientes violeta→azul, índigo→rosa, cian→púrpura.** Ningún
  `from-purple-* to-blue-*`, `from-indigo-* to-pink-*` ni variante. Es la firma
  visual más delatora de una UI generada por IA.
- **`bg-clip-text text-transparent` en titulares.** El texto es sólido.
- **Glassmorphism por defecto.** `backdrop-blur` solo donde hay contenido real
  moviéndose detrás que justifique difuminarlo (ej. la navbar sobre el contenido
  al hacer scroll). Nunca en tarjetas estáticas.
- **Emojis como iconos.** Se usa `lucide-react` o SVG inline.
- **Glow / `shadow-2xl` / anillos luminosos en todas las tarjetas a la vez.**
  Si todo brilla, nada destaca. Máximo un elemento acentuado por sección.
- **Un único `rounded-xl` aplicado a todo.** El radio comunica jerarquía: ver §4.
- **Más de un color de acento.** El ámbar es el único. Sin azules de "info",
  sin verdes de "éxito", sin morados decorativos.
- **Texto centrado en bloques largos.** El cuerpo se alinea a la izquierda.
- **Animaciones de rebote (`bounce`), `pulse` infinito o partículas flotantes.**

---

## 2. Color

Tokens definidos en `src/index.css` bajo `@theme`. Usar siempre el token, nunca
un hex literal ni una clase `zinc-*` cruda.

| Token | Uso |
|---|---|
| `bg-base` `#09090b` | fondo de página. Nunca negro puro |
| `bg-surface` `#111113` | primera capa elevada (tarjetas) |
| `bg-surface-2` `#18181b` | segunda capa (modales, hover de tarjeta) |
| `bg-surface-3` `#1f1f23` | tercera capa (pills sobre tarjeta) |
| `text-ink` `#fafafa` | texto primario, titulares |
| `text-ink-2` `#a1a1aa` | cuerpo, descripciones |
| `text-ink-3` `#71717a` | labels, metadatos, fechas |
| `border-line` `white/6%` | borde por defecto |
| `border-line-strong` `white/10%` | borde en hover o énfasis |
| `text-signal` / `bg-signal` `#f0a020` | acento único |
| `bg-signal-soft` `amber/12%` | fondo de badge acentuado |

**Regla del acento:** el ámbar aparece como máximo **dos veces por pantalla visible**.
Se reserva para: el elemento interactivo primario, un dato que se quiere que se lea
primero, o una marca gráfica fina (una línea, un punto, un subrayado). Nunca como
fondo de un bloque grande.

**Elevación:** se comunica con la superficie y el borde, no con sombra. Las sombras
solo aparecen en elementos que flotan de verdad sobre el resto (modal, dropdown,
navbar al hacer scroll).

---

## 3. Tipografía

Una sola familia: **Archivo variable** (`--font-sans`), ya cargada en `index.html`
con el eje `wdth 75..125`. Ese eje es la firma del sitio — explotarlo sustituye a
añadir una segunda fuente.

| Rol | Token | Ancho | Peso | Caja |
|---|---|---|---|---|
| Display (Hero) | `text-display` 60px | `wdth 100` | 600 | normal |
| Título de bloque | `text-title` 30px | `wdth 100` | 600 | normal |
| Entradilla | `text-lg` 18px | `wdth 100` | 400 | normal |
| Cuerpo | `text-base` 15px | `wdth 100` | 400 | normal |
| UI / botón | `text-sm` 14px | `wdth 100` | 500 | normal |
| Label de sección | `text-label` 12px | `wdth 88` | 600 | UPPERCASE, `tracking-[0.14em]` |

Reglas:

- **La escala no se amplía.** Si un tamaño no está en la tabla, no se usa. Nunca
  incrementos de 2px entre niveles — los saltos son grandes a propósito.
- **La jerarquía sale del peso, el ancho y la caja antes que del color.** Bajar a
  `text-ink-3` es el último recurso, no el primero.
- El ancho se aplica con `font-variation-settings: 'wdth' N`.
- Medida de línea del cuerpo: máximo `65ch`. Nunca un párrafo a todo el ancho.

---

## 4. Forma y densidad

- **Bordes:** 1px `border-line` es el separador por defecto. Las líneas de 1px
  translúcidas son parte del lenguaje — se usan con generosidad.
- **Radios, por jerarquía** (no un valor único para todo):
  - `rounded-full` — pills, avatares, puntos
  - `rounded-lg` (8px) — botones, inputs
  - `rounded-xl` (12px) — tarjetas
  - `rounded-2xl` (16px) — modales, contenedores grandes
- **Ritmo vertical:** 88px entre secciones (56px en móvil). Aire generoso *entre*
  bloques, compacto *dentro* de cada bloque.
- **Asimetría deliberada:** el riel de label a la izquierda (`200px + 1fr`) es un
  activo del diseño actual y se conserva como esqueleto de sección. No centrar todo.

---

## 5. Movimiento

Parámetros cerrados. No se improvisan duraciones ni curvas por componente.

| Caso | Duración | Curva |
|---|---|---|
| Micro-interacción (hover, tap) | `0.15–0.2s` | `ease-out` |
| Entrada de un elemento | `0.4s` | `--ease-entrance` |
| Reveal al scroll | `0.6s`, `stagger 0.06s` | `--ease-entrance` |
| Interactivo / arrastre | — | spring `{ stiffness: 260, damping: 30 }` |

`--ease-entrance` = `cubic-bezier(0.22, 1, 0.36, 1)`.

Reglas duras:

- **Solo se animan `transform` y `opacity`.** Nunca `width`, `height`, `top`,
  `left` ni `margin` — provocan reflow.
- **Toda animación de entrada dispara una sola vez.** En Motion:
  `whileInView` + `viewport={{ once: true }}`.
- **Todo bloque animado respeta `useReducedMotion()`** de `motion/react`. Si
  devuelve `true`, el contenido aparece en su estado final sin transición.
- El movimiento comunica jerarquía y causa. Si no explica nada, se quita.

Import correcto: `import { motion, useReducedMotion } from 'motion/react'`.

---

## 6. Formas orgánicas (Haikei)

- Los SVG se generan en [haikei.app](https://app.haikei.app) y se guardan en
  `public/images/bg/`.
- Se montan como capa absoluta con `pointer-events-none`, `opacity` entre
  `0.35` y `0.6`, y un `mask-image` que desvanece los bordes — si se lee como
  "imagen pegada", está mal puesta.
- **Máximo una forma por pantalla visible.** Nunca detrás de texto de cuerpo.
- Se recolorean a la paleta del sitio: zinc y ámbar. Nunca los colores por
  defecto del generador.

---

## 7. Integrar componentes de terceros

Al pegar de Aceternity, Kokonut, Watermelon o cualquier registry de shadcn:

1. **Destino:** `src/components/ui/`. Esa carpeta es para código de terceros;
   `src/components/` es código propio.
2. **Limpiar los Next-ismos:** borrar `"use client"`; `next/image` → `<img>`;
   `next/link` → `<a>`. El alias `@/lib/utils` ya funciona (configurado en
   `vite.config.js`), no hay que tocar ese import.
3. **Re-tokenizar antes de usar.** Nunca dejar los colores de demo de la
   librería. Todo `bg-black`, `bg-slate-900`, `text-white`, `from-purple-500`
   se traduce a los tokens de §2.
4. **Re-parametrizar el movimiento** a la tabla de §5.
5. **Los datos salen siempre de `src/data/content.js` / `content.en.js`** vía
   `useLanguage()`. Ningún texto hardcodeado dentro de un componente — rompería
   el bilingüe ES/EN.
6. Si el componente trae dependencias nuevas, instalarlas explícitamente y
   mencionarlo.

---

## 8. Invariantes del proyecto

No romper nunca, sin importar el rediseño:

- **Bilingüe ES/EN** vía `useLanguage()` — ambos archivos de contenido tienen la
  misma forma y deben seguir teniéndola.
- **Scroll-spy y scroll suave** del navbar: cada sección conserva su `id`
  (`#about`, `#education`, `#skills`, `#projects`, `#contact`).
- **Descarga del CV** según idioma (`personalInfo.cv`).
- **Accesibilidad:** contraste AA mínimo, `:focus-visible` siempre visible,
  `aria-label` en todo botón sin texto, orden de foco lógico en el modal.
- **Sin scroll horizontal** en ningún ancho, de 375px en adelante.
