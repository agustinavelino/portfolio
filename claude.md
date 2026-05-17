# CLAUDE.md — Portafolio Personal (Mecatrónica)

## Descripción del proyecto
Portafolio personal de una sola página (SPA) construido en React.
El objetivo es presentar el perfil profesional de un estudiante de Ingeniería en Mecatrónica:
habilidades técnicas, proyectos, experiencia y datos de contacto.

---

## Stack técnico
- **Framework:** React 18+ con Vite
- **Lenguaje:** JavaScript (JSX)
- **Estilos:** CSS Modules o Tailwind CSS (preferir Tailwind si está disponible)
- **Routing:** No necesario — es una SPA de una sola página con scroll
- **Animaciones:** Opcionales y sutiles (fade-in al scroll con IntersectionObserver)
- **Sin librerías de UI externas** (no MUI, no Chakra, no Ant Design)

---

## Estructura de archivos esperada

```
src/
├── App.jsx
├── main.jsx
├── index.css
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Skills.jsx
    ├── Projects.jsx
    ├── Experience.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

Cada sección es un componente independiente.
`App.jsx` los importa y los renderiza en orden vertical.

---

## Diseño y estilo

### Filosofía
Minimalista, limpio, elegante. Inspirado en portafolios de ingeniería.
Sin ruido visual — el contenido es lo importante.

### Paleta de colores
```
Background:  #ffffff (light) / #0f0f0f (dark, opcional)
Texto:       #111111 primario / #666666 secundario
Bordes:      #e5e5e5 (líneas separadoras y cards)
Acento:      #111111 (sin colores llamativos)
```

### Tipografía
- Font: `Inter` (Google Fonts) o sistema sans-serif
- Pesos: solo `400` (regular) y `500` (medium) — nunca `700` ni bold pesado
- Tamaños: h1 36px, h2 18px, body 15-16px, labels 11-12px uppercase con letter-spacing

### Componentes visuales
- **Separadores:** `border-bottom: 1px solid #e5e5e5` entre secciones
- **Cards de proyectos:** fondo blanco, borde fino, border-radius 12px, padding 1rem 1.25rem
- **Pills de skills:** borde fino, border-radius 20px, padding 5px 12px, fondo transparente
- **Botones:** borde fino, fondo transparente, hover con fondo gris claro
- **Sin gradientes, sin sombras fuertes, sin animaciones flashy**

---

## Secciones y contenido

### 1. Navbar
- Fijo en la parte superior
- Izquierda: nombre completo (font-weight 500)
- Derecha: links de navegación — About, Skills, Projects, Contact
- Fondo blanco con ligera transparencia y blur (backdrop-filter)
- Borde inferior fino

### 2. Hero
- Etiqueta pequeña arriba: "Estudiante de Mecatrónica" (uppercase, color secundario)
- Título grande: "Hola, soy [NOMBRE]."
- Párrafo de descripción: 2-3 oraciones sobre intereses y objetivo profesional
- Dos botones: "Ver proyectos" (scroll a #projects) y "Contacto" (scroll a #contact)

### 3. About
- Label de sección: "About" (uppercase, 11px, color secundario)
- Párrafo de 3-5 oraciones: quién eres, qué estudias, en qué semestre vas, qué te apasiona

### 4. Skills
- Label de sección: "Skills"
- Agrupa las habilidades en categorías con sublabels:
  - **Programación:** Python, C/C++, MATLAB
  - **Hardware / Embebidos:** Arduino, Raspberry Pi, PLC
  - **Diseño mecánico:** SolidWorks, AutoCAD
  - **Otros:** Control PID, ROS (básico), Git
- Renderizar cada skill como un pill/tag
- [EDITAR: agregar o quitar skills según los reales]

### 5. Projects
- Label de sección: "Projects"
- Grid de 2 columnas (1 columna en mobile)
- Cada tarjeta contiene:
  - Área de imagen (placeholder gris con texto "imagen del proyecto")
  - Título del proyecto
  - Descripción corta (2-3 oraciones)
  - Pills con tecnologías usadas
  - Link opcional a GitHub o demo
- [EDITAR: reemplazar con proyectos reales]

### 6. Experience
- Label de sección: "Experience"
- Lista vertical de entradas, cada una con:
  - Título del rol / proyecto
  - Institución o empresa
  - Fechas (ej: "2023 – presente")
  - Descripción breve de lo que hiciste
- [EDITAR: agregar experiencia real — puede ser proyectos escolares, prácticas, concursos]

### 7. Contact
- Label de sección: "Contact"
- Email clickeable (mailto:)
- Links a GitHub y LinkedIn (abren en nueva pestaña)
- Opcional: formulario simple (nombre, email, mensaje) — solo frontend, sin backend

### 8. Footer
- Línea superior separadora
- Izquierda: nombre + año
- Derecha: links rápidos (GitHub, LinkedIn)

---

## Comportamiento y UX

- **Scroll suave** entre secciones (`scroll-behavior: smooth` en CSS)
- **Responsive:** mobile-first. En pantallas < 768px:
  - Navbar colapsa a menú hamburguesa o solo muestra el nombre
  - Grid de proyectos pasa a 1 columna
  - Padding lateral reducido (16px)
- **Sin lazy loading de imágenes** por ahora — usar placeholders estáticos
- **Animación opcional:** fade-in sutil con `IntersectionObserver` al entrar cada sección al viewport

---

## Lo que NO hacer
- No usar librerías de componentes externas (MUI, Chakra, etc.)
- No agregar colores de acento llamativos (azul eléctrico, verde neón, etc.)
- No poner fondos oscuros por sección (el fondo es siempre blanco)
- No usar fuentes decorativas
- No agregar partículas, cursor personalizado ni efectos 3D
- No crear backend ni base de datos — todo es estático

---

## Datos de contenido
> Reemplazar estas secciones con tu información real antes de ejecutar

```js
// Datos personales — editar en src/data/content.js
export const personalInfo = {
  name: "[TU NOMBRE]",
  title: "Estudiante de Ingeniería en Mecatrónica",
  bio: "[Tu descripción personal de 2-3 oraciones]",
  email: "[tu@email.com]",
  github: "https://github.com/[usuario]",
  linkedin: "https://linkedin.com/in/[usuario]",
};

export const skills = {
  programacion: ["Python", "C/C++", "MATLAB"],
  hardware: ["Arduino", "Raspberry Pi"],
  disenio: ["SolidWorks", "AutoCAD"],
  otros: ["Control PID", "Git"],
};

export const projects = [
  {
    title: "[Nombre del proyecto]",
    description: "[Descripción breve]",
    tags: ["Arduino", "Python"],
    github: "[url opcional]",
    image: null, // reemplazar con import de imagen cuando esté disponible
  },
];

export const experience = [
  {
    role: "[Título del rol o proyecto]",
    institution: "[Universidad / empresa]",
    period: "[2023 – presente]",
    description: "[Descripción breve]",
  },
];
```

---

## Comandos útiles

```bash
# Instalar dependencias
npm install

# Correr en desarrollo
npm run dev

# Build para producción
npm run build
```

---

## Notas para Claude Code
- Crear primero la estructura de archivos completa antes de escribir componentes
- Separar los datos de contenido en `src/data/content.js` para que sean fáciles de editar
- Usar `id="about"`, `id="skills"`, etc. en cada sección para el scroll suave del Navbar
- Si hay dudas sobre un dato de contenido, usar placeholder descriptivo entre corchetes: `[TU NOMBRE]`
- Priorizar que el código sea legible y fácil de modificar por alguien con nociones básicas de programación