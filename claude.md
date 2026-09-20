# CLAUDE.md — Portafolio Personal (Mecatrónica)

## Descripción

Portafolio personal de una sola página (SPA) de Agustín Avelino Pineda, estudiante de
Ingeniería en Mecatrónica. Presenta perfil, formación, habilidades, proyectos, experiencia
y contacto, en español e inglés.

Desplegado en Vercel.

---

## Stack

- **Build:** Vite 6
- **Framework:** React 19
- **Lenguaje:** JavaScript (`.jsx`) y TypeScript (`.tsx`) conviviendo — `allowJs: true`.
  El código propio existente es `.jsx`; los componentes nuevos y los pegados de registries
  externos son `.tsx`.
- **Estilos:** Tailwind CSS v4 (plugin `@tailwindcss/vite`). Los tokens se definen en
  `src/index.css` dentro de `@theme`.
- **Animación:** `motion` (motion.dev) — se importa desde `motion/react`.
- **Routing:** ninguno. Es una sola página con scroll y anclas.
- **Analytics:** `@vercel/analytics`.

> **No se usa Next.js y no hace falta.** Las librerías copy-paste que alimentan el diseño
> (Aceternity UI, Kokonut UI, Watermelon UI) son registries estilo shadcn: dependen de
> Tailwind + Motion, no del framework. Ver `.claude/skills/portfolio-taste/SKILL.md` §7
> para el procedimiento de integración.

---

## Estructura

```
index.html
vite.config.js          → plugin de Tailwind + alias '@' → ./src
tsconfig.json           → allowJs, paths '@/*'
components.json         → config del CLI de shadcn (para los registries)
public/
├── CV_Agustin_Avelino_Pineda_ES.pdf
├── CV_Agustin_Avelino_Pineda_EN.pdf
└── images/             → fotos de proyectos; bg/ para fondos SVG
src/
├── main.jsx            → entrypoint
├── App.jsx             → compone las secciones en orden vertical
├── index.css           → @theme (tokens) + capa base
├── lib/utils.ts        → helper cn()
├── contexts/
│   └── LanguageContext.jsx
├── data/
│   ├── content.js      → contenido ES
│   └── content.en.js   → contenido EN (misma forma)
├── hooks/
│   └── useScrollFadeIn.js
└── components/
    ├── Navbar, Hero, About, Education, Skills,
    │   Projects, ProjectModal, Experience, Contact, Footer
    └── ui/             → componentes pegados de registries externos
```

---

## Reglas de trabajo

### Diseño visual

**Toda decisión visual está gobernada por `.claude/skills/portfolio-taste/SKILL.md`.**
Ese archivo define la paleta, la escala tipográfica, los radios, los parámetros de
animación y una lista explícita de lo que está prohibido. Léelo antes de escribir o
editar cualquier componente, CSS o animación. No improvises colores, tamaños ni easings.

### Contenido

- Todo el texto vive en `src/data/content.js` (ES) y `src/data/content.en.js` (EN).
  **Nunca hardcodear texto dentro de un componente** — rompe el bilingüe.
- Los dos archivos de contenido deben mantener exactamente la misma forma. Si se agrega
  un campo a uno, se agrega al otro.
- Los componentes leen el contenido con `useLanguage()` desde
  `src/contexts/LanguageContext.jsx`.

### Invariantes que no se rompen

- Cada sección conserva su `id` (`#about`, `#education`, `#skills`, `#projects`,
  `#contact`) — de eso dependen el scroll suave y el scroll-spy del navbar.
- La descarga del CV cambia según el idioma activo.
- Sin scroll horizontal en ningún ancho, desde 375px.
- Accesibilidad: contraste AA, `:focus-visible` visible, `aria-label` en botones sin
  texto, y respeto a `prefers-reduced-motion`.

---

## Estado de la migración

**Completada.** No queda ningún CSS Module, ni el puente temporal de `index.css`, ni
`useScrollFadeIn.js`. Toda la UI es Tailwind v4 sobre los tokens de `@theme`.

### Cosas que ya están resueltas y conviene no deshacer

- **Contraste AA verificado** en todo el texto. `--color-ink-3` es el gris más oscuro
  permitido; oscurecerlo rompe el 4.5:1.
- **`document.documentElement.lang`** lo sincroniza `LanguageContext` al cambiar idioma.
- **Enlace de salto** al principio de `App.tsx`: debe seguir siendo el primer elemento
  enfocable de la página.
- **Jerarquía de encabezados** sin saltos: las etiquetas de sección son `<h2>` (las
  pinta `label` de `styles.ts`, no la etiqueta HTML). Hay un solo `<h1>`, en el Hero.
- **El panel de proyecto atrapa el foco** mientras está abierto y lo devuelve a la
  tarjeta al cerrarse.
- **Imágenes:** `chatbot` e `imagen1` están en WebP porque ahorraban 91% y 53%.
  `robot` y `tablero` siguen en JPEG **a propósito**: medido, WebP no mejoraba
  (14% y −2%). Mide antes de convertir.
- **Iconos:** `favicon-32.png` y `apple-touch-icon.png`, generados a partir del
  monograma con el fondo `#09090b` en vez de transparente, para que se vean también
  sobre barras de pestañas claras.

### Piezas compartidas — úsalas antes de escribir clases nuevas

- **`src/components/Section.tsx`** — esqueleto de sección (riel de etiqueta + contenido +
  aparición al entrar en pantalla). Toda sección de contenido se construye con él.
- **`src/components/Timeline.tsx`** — lista cronológica con riel y nodos. La usan
  Education y Experience.
- **`src/lib/styles.ts`** — `btnSolid`, `btnOutline`, `btnQuiet`, `label`, `labelSignal`.
  Si un botón o una etiqueta necesita el mismo aspecto, se importa de aquí; no se
  reescriben las utilidades.
- **`src/lib/utils.ts`** — `cn()` para componer clases.

---

## Comandos

```bash
npm run dev       # servidor de desarrollo
npm run build     # build de producción
npm run preview   # sirve el build local
```
