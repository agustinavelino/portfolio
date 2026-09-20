export const personalInfo = {
  name: "Agustín Avelino Pineda",
  title: "Estudiante de Ingeniería en Mecatrónica",
  bio: "Diseño el hardware y escribo el firmware que lo mueve. Especializado en sistemas embebidos y electrónica de potencia: lideré el área de electrónica de un kart de competencia de 51.2 V/300 A y desarrollé el firmware completo de un AGV autónomo.",
  about: [
    "Estudiante de Ingeniería en Mecatrónica con una base sólida en desarrollo de software desde mi formación técnica en el IPN. Trabajo en la convergencia del código, la electrónica de potencia y el diseño mecánico: sistemas de alta potencia, firmware para robots autónomos y piezas que tienen que sobrevivir una competencia.",
    "En Omega Lightning, la escudería estudiantil del Tec de Monterrey, pasé de co-líder a líder del área de electrónica, coordinando a un equipo de cuatro personas bajo plazos de competencia.",
  ],
  email: "avelino.pineda.agustin@gmail.com",
  github: "https://github.com/agustinavelino",
  linkedin: "https://www.linkedin.com/in/agustin-avelino",
  photo: "/images/imagen1.jpeg",
  cv: "CV_Agustin_Avelino_Pineda_ES.pdf",
};

export const certifications = [
  {
    name: "NX Associate",
    issuer: "Siemens",
    platform: "Credly",
    badgeId: "3566df32-6716-4967-8da1-751c5f123116",
  },
];

export const skills = {
  programacion: ["C++", "Python", "MATLAB"],
  hardware: ["Arduino", "ESP32", "Raspberry Pi"],
  disenio: ["SolidWorks", "NX Siemens"],
  laboratorio: ["Soldadura", "Integración de sistemas electrónicos"],
  otros: ["Git / GitHub", "Linux", "ROS", "Fundamentos de análisis de datos"],
  idiomas: ["Español (nativo)", "Inglés (avanzado)"],
};

export const projects = [
  {
    title: "AGV sigue-líneas con sistema de carga/descarga",
    category: "Robótica autónoma",
    description: "Diseño y construcción de un AGV autónomo basado en Arduino Uno, capaz de seguir una ruta predefinida, detectar estaciones de carga/descarga y operar un mecanismo de elevación para transportar materiales sin intervención humana.",
    details: [
      "Este proyecto consistió en el diseño y construcción de un AGV (Automated Guided Vehicle) basado en Arduino Uno, capaz de seguir una ruta predefinida de forma autónoma, detectar estaciones de carga/descarga a lo largo del recorrido y operar un mecanismo de elevación para transportar materiales sin intervención humana. El objetivo era integrar control de movimiento, sensórica y mecanismos en una sola plataforma funcional, replicando a pequeña escala el funcionamiento de un AGV industrial.",
      "La navegación se logró mediante un par de sensores ópticos analógicos y un controlador PD con zona muerta y un filtro de suavizado exponencial sobre la señal PWM, lo que redujo significativamente la vibración mecánica al corregir el rumbo. La tracción diferencial se maneja con drivers BTS7960, y dos encoders de cuadratura permiten monitorear las RPM de cada motor en tiempo real. Para la carga y descarga, un motor a pasos acciona un mecanismo de elevación que se activa al detectar las marcas de estación, mientras una celda de carga con filtro de Kalman mide el peso transportado. Toda la electrónica se comunica por I2C (expansor PCF8574 y pantalla OLED), y el sistema incluye una interfaz serial para ajustar parámetros de control (velocidades, ganancias PD, zonas muertas) en tiempo real sin recompilar.",
      "El resultado es un AGV funcional que recorre la ruta de forma estable, identifica estaciones de carga/descarga y ejecuta el ciclo completo de levantar, transportar y depositar material, ajustando su comportamiento dinámicamente según el peso detectado. Más allá del resultado final, el proyecto representó un ejercicio iterativo de depuración y sintonización de un sistema de control real, identificando y corrigiendo problemas típicos de sistemas embebidos: ruido de sensores, saturación de actuadores, condiciones de carrera lógicas y calibración de hardware.",
    ],
    highlights: [
      "Controlador PD con zona muerta y filtro de suavizado exponencial sobre la señal PWM",
      "Celda de carga HX711 con filtro de Kalman y encoders de cuadratura de 494 PPR",
      "Motor a pasos TMC2209 para el mecanismo de elevación automatizado",
      "Arquitectura I2C a 400 kHz con expansor PCF8574 y pantalla OLED sobre el mismo bus",
      "Más de 20 versiones de firmware hasta lograr navegación estable y recuperación ante pérdida de trayectoria",
    ],
    tags: ["C++", "Control PD", "SolidWorks", "I2C"],
    github: "",
    image: "/images/robot.jpeg",
    // Imágenes adicionales del proyecto. Se ven como miniaturas dentro del panel
    // abierto; la de arriba (`image`) sigue siendo la portada de la tarjeta.
    // Copia los archivos a `public/images/` y referencia la ruta: "/images/mi-foto.jpg"
    gallery: [],
  },
  {
    title: "Tablero de reacción para receptores de fútbol americano",
    category: "Electrónica y firmware",
    description: "Tablero interactivo con matriz de LEDs controlada por Arduino para entrenar receptores de un equipo de fútbol americano, midiendo y mejorando su tiempo de reacción en campo.",
    details: [
      "El equipo de fútbol americano necesitaba una herramienta de entrenamiento para trabajar el tiempo de reacción y la toma de decisiones de sus receptores. Diseñé y construí un tablero con 16 paneles LED que se iluminan en secuencias aleatorias; el jugador debe tocar el panel correcto lo más rápido posible.",
      "El sistema combina hardware propio (circuito de LEDs, botoneras y cableado soldado en stripboard) con programación en Arduino para la lógica de juego y registro de tiempos mediante una pantalla.",
      "El principal reto fue la robustez ante el uso físico intensivo: los falsos contactos del prototipado rápido me obligaron a migrar a soldadura permanente e implementar resistencias en serie para estabilizar la alimentación de la batería. El resultado es un sistema portátil, ordenado y sin fallos en campo.",
    ],
    highlights: [
      "Circuito soldado en stripboard con gestión de alimentación para 16 botones LED",
      "Lógica de secuencias aleatorias y registro de tiempos en Arduino",
      "Interfaz Python con métricas de rendimiento por sesión",
    ],
    tags: ["Arduino", "C++"],
    github: "https://github.com/agustinavelino/tablero_receptores",
    image: "/images/tablero.jpeg",
    gallery: [],
  },
  {
    title: "Chatbot de voz con análisis de conversaciones",
    category: "Software e IA",
    description: "Aplicación web de chatbot con interacción completamente por voz, construida para explorar la integración de modelos de lenguaje con procesamiento de audio en tiempo real. El objetivo fue un sistema end-to-end que captura la voz del usuario,genera una respuesta inteligente y la devuelve como audio.",
    details: [
      "Aplicación web de chatbot con interacción completamente por voz, construida para explorar la integración de modelos de lenguaje con procesamiento de audio en tiempo real. El objetivo fue un sistema end-to-end que captura la voz del usuario,genera una respuesta inteligente y la devuelve como audio.",
      " Desarrollado con Flask como servidor, integra la API de OpenAI para generación de respuestas, SpeechRecognition para transcripción voz-a-texto y gTTS con Pygame para síntesis de voz. Los mensajes se persisten en SQLite y la interfaz usa Bootstrap y Tailwind CSS. La comunicación en tiempo real entre cliente y servidor se implementó con Server-Sent Events (SSE).",
      "El resultado es una aplicación funcional que permite conversaciones fluidas por voz, complementada con un módulo de análisis de conversaciones con Pandas y Matplotlib que genera reportes automáticos en PDF descargables.",
    ],
    highlights: [
      "Ciclo completo voz → texto → IA → voz usando STT, OpenAI API y TTS",
      "Módulo de análisis de datos con generación automática de reportes en PDF",
    ],
    tags: ["Flask", "SQLite", "OpenAI API"],
    github: "https://github.com/agustinavelino/chatbott",
    image: "/images/chatbot.png",
    gallery: [],
  },
 
];

export const education = [
  {
    degree: "Ingeniería en Mecatrónica",
    institution: "Tecnológico de Monterrey, Campus Santa Fe",
    period: "2024 — 2028",
    description: [
      "Enfoque técnico: sistemas embebidos, microcontroladores, control y diseño mecánico.",
      "Proyectos: sistema eléctrico de un kart de competencia de 51.2 V/300 A y firmware completo de un AGV autónomo.",
      "Herramientas: modelado y simulación de ensambles en SolidWorks y NX; programación de microcontroladores (ESP32/Arduino).",
      "Graduación esperada: agosto de 2028.",
    ],
  },
  {
    degree: "Técnico en Programación",
    institution: "CECyT 9 «Juan de Dios Bátiz» — IPN",
    period: "2021 — 2025",
    description: [
      "Bases de software: lógica de programación, estructuras de datos y programación orientada a objetos.",
      "Lenguajes: desarrollo de aplicaciones y gestión de bases de datos con Java y Python.",
      "Título obtenido en marzo de 2025.",
    ],
  },
];

export const experience = [
  {
    role: "Líder, Área de Electrónica",
    institution: "Omega Lightning · Escudería estudiantil, Tecnológico de Monterrey",
    period: "Feb 2026 — Ago 2026",
    description: [
      "Lideré el desarrollo del sistema eléctrico de un kart de competencia de 51.2 V/300 A, tomando las decisiones de especificación de componentes y coordinando a 4 personas bajo plazos de competencia.",
      "Rediseñé el cableado del kart (calibre 3/0 a 6 AWG de silicona) tras un análisis de componentes, reduciendo peso con la selección correcta de especificaciones.",
      "Diseñé en SolidWorks y fabriqué una carcasa hermética para proteger componentes, e implementé el sistema Safe-to-Touch para aislar eléctricamente el chasis en alta potencia (51.2 V/300 A pico).",
      "Integré paneles solares para la carga autónoma del sistema eléctrico secundario —iluminación, audio y protección, independiente del sistema de potencia del motor— y desarrollé un sistema de audio adaptativo a la velocidad que mejora la seguridad peatonal en pits.",
    ],
  },
  {
    role: "Co-líder, Área de Electrónica",
    institution: "Omega Lightning · Escudería estudiantil, Tecnológico de Monterrey",
    period: "Ago 2025 — Dic 2025",
    description: [
      "Apoyé el diseño e integración del sistema eléctrico del kart, sentando las bases del proyecto que después dirigí.",
      "Instalé el sistema de iluminación completo —luces delanteras, traseras y de freno— con arreglo en paralelo, garantizando 100% de redundancia lumínica ante fallas.",
      "Colaboré en la integración de motor y baterías y en el desarrollo técnico general bajo plazos de competencia.",
    ],
  },
];

export const ui = {
  hero: {
    greeting: 'Hola, soy',
    viewProjects: 'Ver proyectos',
    contact: 'Contacto',
    downloadCV: 'Descargar CV',
  },
  nav: {
    toggleLanguage: 'Cambiar idioma',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  projects: {
    viewMore: 'Ver más',
    prev: 'Proyecto anterior',
    next: 'Proyecto siguiente',
    close: 'Cerrar',
    image: 'Imagen {n}',
    viewOnGitHub: 'Ver en GitHub →',
    highlights: 'Highlights',
  },
  skills: {
    verify: 'Verificar →',
    certificationsLabel: 'Certificaciones',
    categories: [
      { key: 'programacion', label: 'Programación' },
      { key: 'hardware', label: 'Hardware / Embebidos' },
      { key: 'disenio', label: 'Diseño mecánico' },
      { key: 'laboratorio', label: 'Laboratorio' },
      { key: 'otros', label: 'Otros' },
      { key: 'idiomas', label: 'Idiomas' },
    ],
  },
};
