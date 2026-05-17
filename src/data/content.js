export const personalInfo = {
  name: "Agustín Avelino Pineda",
  title: "Estudiante de Ingeniería en Mecatrónica",
  bio: "Estudiante de ingeniería en mecatrónica con pasión por la programación, la electrónica y el diseño. Me gustan los retos y siempre busco aprender nuevas tecnologías para resolver problemas de manera creativa. Mi objetivo es convertirme en un ingeniero versátil capaz de liderar proyectos en el mundo ingenieril.",
  about: "[Párrafo de 3-5 oraciones: quién eres, qué estudias, en qué semestre vas, qué te apasiona y cuál es tu objetivo como ingeniero en mecatrónica.]",
  email: "avelino.pineda.agustin@gmail.com",
  github: "https://github.com/agustinavelino",
  linkedin: "https://www.linkedin.com/in/avelino-pineda-agust%C3%ADn-al%C3%AD-9bb188365/",
  photo: null, // Pon la ruta de tu foto aquí, e.g. "/foto.jpg" (coloca el archivo en la carpeta public/)
  cv: null,    // Pon la ruta de tu CV aquí, e.g. "/cv.pdf" (coloca el archivo en la carpeta public/)
};

export const skills = {
  programacion: ["Python", "C/C++", "MATLAB"],
  hardware: ["Arduino", "Raspberry Pi", "PLC"],
  disenio: ["SolidWorks", "AutoCAD"],
  otros: ["Control PID", "ROS (básico)", "Git"],
};

export const projects = [
  {
    title: "Tablero de reacción para receptores de fútbol americano",
    description: "Trabajé en el diseño y construccion de un tablero de reacción para entrenar a receptores de fútbol americano con el objetivo de mejorar su tiempo de reacción, velocidad de respuesta y toma de decisiones. El tablero ",
    tags: ["Arduino", "Python"],
    github: "",
    image: null,
  },
  {
    title: "[Nombre del proyecto 2]",
    description: "[Descripción breve del proyecto — qué problema resuelve, qué tecnologías usaste y cuál fue el resultado.]",
    tags: ["SolidWorks", "Control PID"],
    github: "",
    image: null,
  },
  {
    title: "[Nombre del proyecto 3]",
    description: "[Descripción breve del proyecto — qué problema resuelve, qué tecnologías usaste y cuál fue el resultado.]",
    tags: ["Raspberry Pi", "MATLAB"],
    github: "",
    image: null,
  },
  {
    title: "[Nombre del proyecto 4]",
    description: "[Descripción breve del proyecto — qué problema resuelve, qué tecnologías usaste y cuál fue el resultado.]",
    tags: ["C/C++", "ROS"],
    github: "",
    image: null,
  },
];

export const education = [
  {
    degree: "[Nombre de la carrera]",
    institution: "Tecnológico de Monterrey",
    period: "[Año inicio] – [Año fin esperado]",
    description: "[Semestre actual, logros académicos, actividades relevantes, etc.]",
  },
];

export const experience = [
  {
    role: "Líder área de electrónica",
    institution: "Tecnológico de Monterrey - Omega Lightning",
    period: "[2026 – presente]",
    description: "[Descripción breve de lo que hiciste — responsabilidades, logros o aprendizajes clave.]",
  },
  {
    role: "[Título del rol o proyecto]",
    institution: "[Universidad / empresa]",
    period: "[2022 – 2023]",
    description: "[Descripción breve de lo que hiciste — responsabilidades, logros o aprendizajes clave.]",
  },
];
