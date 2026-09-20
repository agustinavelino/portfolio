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

El proyecto está migrando de CSS Modules (paleta clara) a Tailwind v4 (paleta oscura).

- **Fase 1 (en curso):** stack, tokens, SKILL.md y Hero.
- **Fase 2:** Navbar, Footer, shell de secciones.
- **Fase 3:** About, Education, Skills, Experience, Contact.
- **Fase 4:** Projects, ProjectModal, pulido de rendimiento y accesibilidad.

Mientras dura la migración, `src/index.css` contiene un bloque marcado
**"PUENTE TEMPORAL"** con las variables y clases heredadas (`.section`, `.btn`, `.pill`,
`.fade-in`…) remapeadas a la paleta oscura, para que las secciones aún no migradas no se
rompan. **Ese bloque se elimina completo al cerrar la Fase 3**, junto con los
`.module.css` restantes y `useScrollFadeIn.js`.

Al migrar una sección: reescribirla con Tailwind, borrar su `.module.css` y dejar de
usar las clases del puente.

---

## Comandos

```bash
npm run dev       # servidor de desarrollo
npm run build     # build de producción
npm run preview   # sirve el build local
```
