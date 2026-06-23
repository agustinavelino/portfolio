export const personalInfo = {
  name: "Agustín Avelino Pineda",
  title: "Estudiante de Ingeniería en Mecatrónica",
  bio: "Estudiante de ingeniería mecatrónica",
  about: [
    "Estudiante de Ingeniería en Mecatrónica con una sólida base en desarrollo de software desde mi formación técnica. Me apasiona la convergencia entre el código, la electrónica de potencia y el diseño mecánico. Enfocado en resolver problemas complejos mediante soluciones creativas y con experiencia liderando equipos técnicos en proyectos de alta exigencia.",
  ],
  email: "avelino.pineda.agustin@gmail.com",
  github: "https://github.com/agustinavelino",
  linkedin: "https://www.linkedin.com/in/avelino-pineda-agust%C3%ADn-al%C3%AD-9bb188365/",
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
  programacion: ["Python", "C++", "MATLAB"],
  hardware: ["Arduino", "Raspberry Pi", "Esp32"],
  disenio: ["SolidWorks", "NX Siemens"],
  otros: [ "ROS", "Git", "Linux", "Fundamentos de análisis de datos"],
};

export const projects = [
  {
    title: "Implementación y diseño de un AGV (Automated Guided Vehicle)",
    description: "Diseño y construcción de un AGV autónomo basado en Arduino Uno, capaz de seguir una ruta predefinida, detectar estaciones de carga/descarga y operar un mecanismo de elevación para transportar materiales sin intervención humana.",
    details: [
      "Este proyecto consistió en el diseño y construcción de un AGV (Automated Guided Vehicle) basado en Arduino Uno, capaz de seguir una ruta predefinida de forma autónoma, detectar estaciones de carga/descarga a lo largo del recorrido y operar un mecanismo de elevación para transportar materiales sin intervención humana. El objetivo era integrar control de movimiento, sensórica y mecanismos en una sola plataforma funcional, replicando a pequeña escala el funcionamiento de un AGV industrial.",
      "La navegación se logró mediante un par de sensores ópticos analógicos y un controlador PD con zona muerta y un filtro de suavizado exponencial sobre la señal PWM, lo que redujo significativamente la vibración mecánica al corregir el rumbo. La tracción diferencial se maneja con drivers BTS7960, y dos encoders de cuadratura permiten monitorear las RPM de cada motor en tiempo real. Para la carga y descarga, un motor a pasos acciona un mecanismo de elevación que se activa al detectar las marcas de estación, mientras una celda de carga con filtro de Kalman mide el peso transportado. Toda la electrónica se comunica por I2C (expansor PCF8574 y pantalla OLED), y el sistema incluye una interfaz serial para ajustar parámetros de control (velocidades, ganancias PD, zonas muertas) en tiempo real sin recompilar.",
      "El resultado es un AGV funcional que recorre la ruta de forma estable, identifica estaciones de carga/descarga y ejecuta el ciclo completo de levantar, transportar y depositar material, ajustando su comportamiento dinámicamente según el peso detectado. Más allá del resultado final, el proyecto representó un ejercicio iterativo de depuración y sintonización de un sistema de control real, identificando y corrigiendo problemas típicos de sistemas embebidos: ruido de sensores, saturación de actuadores, condiciones de carrera lógicas y calibración de hardware.",
    ],
    highlights: [
      "Sistema de carga/descarga automatizado con mecanismo de elevación por motor a pasos",
      "Arquitectura I2C compacta (expansor de E/S + pantalla OLED)",
      "Monitoreo de velocidad (RPM) mediante encoders de cuadratura",
    ],
    tags: ["SolidWorks", "Control PID", "I2C", "Arduino"],
    github: "",
    image: "/images/robot.jpeg",
  },
  {
    title: "Tablero de reacción para receptores de fútbol americano",
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
  },
  {
    title: "Chatbot de voz con análisis de conversaciones",
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
  },
 
];

export const education = [
  {
    degree: "Ingeniero en Mecatrónica",
    institution: "Tecnológico de Monterrey",
    period: "2024 – 2028",
    description: ["Enfoque técnico: Sistemas embebidos, microcontroladores, control y diseño mecánico.",
      "Proyectos relevantes: Implementación del sistema eléctrico y de control para el monoplaza de Electratón, y diseño e integración de sensores para un AGV",
      "Habilidades clave: Modelado y simulación de ensambles complejos en SolidWorks; programación de microcontroladores (ESP32/Arduino)."
    ],
  },
  {
    degree: "Técnico en Programación",
    institution: "Instituto Politécnico Nacional",
    period: "2021 – 2024",
    description: ["Bases de software: Sólido trasfondo en lógica de programación, Estructuras de Datos y Programación Orientada a Objetos (POO).",
      "Lenguajes dominados: Experiencia en el desarrollo de aplicaciones y gestión de bases de datos utilizando lenguajes como Java y Python.",
      "Logro clave: Aplicación de metodologías de software para el diseño de sistemas funcionales y proyectos de egreso locales."
    ],
  },
];

export const experience = [
  {
    role: "Líder área de electrónica",
    institution: "Tecnológico de Monterrey - Omega Lightning",
    period: "[2026 – presente]",
    description: ["Diseño e integración de sistemas eléctricos y de control para el vehículo eléctrico de competencia de la escudería.",
      "Gestión del sistema de alta potencia (baterías y controladores de motor), garantizando la seguridad eléctrica y eficiencia energética.",
      "Liderazgo de un equipo técnico de estudiantes, coordinando tiempos de entrega y asegurando estándares de calidad para las competencias",]
  }
];

export const ui = {
  hero: {
    greeting: 'Hola, soy',
    viewProjects: 'Ver proyectos',
    contact: 'Contacto',
    downloadCV: 'Descargar CV',
  },
  projects: {
    viewMore: 'Ver más',
    viewOnGitHub: 'Ver en GitHub →',
    highlights: 'Highlights',
  },
  skills: {
    verify: 'Verificar →',
    categories: [
      { key: 'programacion', label: 'Programación' },
      { key: 'hardware', label: 'Hardware / Embebidos' },
      { key: 'disenio', label: 'Diseño mecánico' },
      { key: 'otros', label: 'Otros' },
    ],
  },
};
