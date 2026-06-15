export const personalInfo = {
  name: "Agustín Avelino Pineda",
  title: "Mechatronics Engineering Student",
  bio: "Mechatronics engineering student",
  about: [
    "Mechatronics engineering student with a strong software development foundation from my technical training. I'm passionate about the convergence of code, power electronics, and mechanical design. Focused on solving complex problems through creative solutions, with experience leading technical teams in high-demand projects.",
  ],
  email: "avelino.pineda.agustin@gmail.com",
  github: "https://github.com/agustinavelino",
  linkedin: "https://www.linkedin.com/in/avelino-pineda-agust%C3%ADn-al%C3%AD-9bb188365/",
  photo: "/images/imagen1.jpeg",
  cv: "cv_agustin_avelino_en.pdf",
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
  otros: ["ROS", "Git", "Linux", "Data analysis fundamentals"],
};

export const projects = [
  {
    title: "Reaction Board for American Football Wide Receivers",
    description: "Interactive board with an Arduino-controlled LED matrix to train wide receivers, measuring and improving their reaction time in the field.",
    details: [
      "The American football team needed a training tool to work on their receivers' reaction time and decision-making. I designed and built a board with 16 LED panels that light up in random sequences; the player must touch the correct panel as quickly as possible.",
      "The system combines custom hardware (LED circuit, buttons, and wiring soldered on stripboard) with Arduino programming for game logic and time logging via a display.",
      "The main challenge was robustness under heavy physical use: false contacts from rapid prototyping forced me to migrate to permanent soldering and implement series resistors to stabilize the battery supply. The result is a portable, organized, field-proof system.",
    ],
    highlights: [
      "Circuit soldered on stripboard with power management for 16 LED buttons",
      "Random sequence logic and time logging on Arduino",
      "Python interface with per-session performance metrics",
    ],
    tags: ["Arduino", "C++"],
    github: "https://github.com/agustinavelino/tablero_receptores",
    image: "/images/tablero.jpeg",
  },
  {
    title: "Design and Implementation of an AGV (Automated Guided Vehicle)",
    description: "Design and construction of an autonomous Arduino Uno-based AGV capable of following a predefined route, detecting loading/unloading stations, and operating a lifting mechanism to transport materials without human intervention.",
    details: [
      "This project consisted of the design and construction of an AGV (Automated Guided Vehicle) based on an Arduino Uno, capable of autonomously following a predefined route, detecting loading/unloading stations along the way, and operating a lifting mechanism to transport materials without human intervention. The goal was to integrate motion control, sensing, and mechanisms into a single functional platform, replicating the operation of an industrial AGV at a small scale.",
      "Navigation was achieved using a pair of analog optical sensors and a PD controller with a dead zone and an exponential smoothing filter on the PWM signal, which significantly reduced mechanical vibration when correcting course. Differential traction is managed with BTS7960 drivers, and two quadrature encoders monitor each motor's RPM in real time. For loading and unloading, a stepper motor drives a lifting mechanism that activates upon detecting station markers, while a load cell with a Kalman filter measures the transported weight. All electronics communicate via I2C (PCF8574 expander and OLED display), and the system includes a serial interface to adjust control parameters (speeds, PD gains, dead zones) in real time without recompiling.",
      "The result is a functional AGV that travels the route stably, identifies loading/unloading stations, and executes the complete cycle of lifting, transporting, and depositing material, dynamically adjusting its behavior based on the detected weight. Beyond the final result, the project was an iterative exercise in debugging and tuning a real control system, identifying and correcting typical embedded systems problems: sensor noise, actuator saturation, logical race conditions, and hardware calibration.",
    ],
    highlights: [
      "Automated loading/unloading system with a stepper motor lifting mechanism",
      "Compact I2C architecture (I/O expander + OLED display)",
      "Real-time speed monitoring (RPM) via quadrature encoders",
    ],
    tags: ["SolidWorks", "Control PID", "I2C", "Arduino"],
    github: "",
    image: "/images/robot.jpeg",
  },
  {
    title: "Voice Chatbot with Conversation Analytics",
    description: "Voice-first web chatbot built to explore the integration of language models with real-time audio processing — an end-to-end system that captures user speech, generates an intelligent response, and returns it as audio.",
    details: [
      "Voice-first web chatbot built to explore the integration of language models with real-time audio processing. The goal was an end-to-end system that captures user speech, generates an intelligent response, and returns it as audio.",
      "Built with Flask as the server, it integrates the OpenAI API for response generation, SpeechRecognition for speech-to-text transcription, and gTTS with Pygame for voice synthesis. Messages are persisted in SQLite and the interface uses Bootstrap and Tailwind CSS. Real-time client-server communication was implemented with Server-Sent Events (SSE).",
      "The result is a functional application that enables fluid voice conversations, complemented by a conversation analytics module using Pandas and Matplotlib that generates automatic downloadable PDF reports.",
    ],
    highlights: [
      "Full voice → text → AI → voice cycle using STT, OpenAI API, and TTS",
      "Data analysis module with automatic PDF report generation",
    ],
    tags: ["Flask", "SQLite", "OpenAI API"],
    github: "https://github.com/agustinavelino/chatbott",
    image: "/images/chatbot.png",
  },
];

export const education = [
  {
    degree: "Mechatronics Engineer",
    institution: "Tecnológico de Monterrey",
    period: "2024 – 2028",
    description: [
      "Technical focus: Embedded systems, microcontrollers, control, and mechanical design.",
      "Relevant projects: Implementation of the electrical and control system for the Electratón single-seater, and design and sensor integration for an AGV.",
      "Key skills: Modeling and simulation of complex assemblies in SolidWorks; microcontroller programming (ESP32/Arduino).",
    ],
  },
  {
    degree: "Programming Technician",
    institution: "Instituto Politécnico Nacional",
    period: "2021 – 2024",
    description: [
      "Software foundations: Solid background in programming logic, Data Structures, and Object-Oriented Programming (OOP).",
      "Languages: Experience in application development and database management using Java and Python.",
      "Key achievement: Application of software methodologies for the design of functional systems and local capstone projects.",
    ],
  },
];

export const experience = [
  {
    role: "Electronics Area Lead",
    institution: "Tecnológico de Monterrey - Omega Lightning",
    period: "[2026 – present]",
    description: [
      "Design and integration of electrical and control systems for the team's electric competition vehicle.",
      "Management of the high-power system (battery and motor controller), ensuring safety and energy efficiency.",
      "Leadership of a technical student team, coordinating delivery timelines and ensuring quality standards for competitions.",
    ],
  },
];

export const ui = {
  hero: {
    greeting: "Hi, I'm",
    viewProjects: 'View projects',
    contact: 'Contact',
    downloadCV: 'Download CV',
  },
  projects: {
    viewMore: 'View more',
    viewOnGitHub: 'View on GitHub →',
    highlights: 'Highlights',
  },
  skills: {
    verify: 'Verify →',
    categories: [
      { key: 'programacion', label: 'Programming' },
      { key: 'hardware', label: 'Hardware / Embedded' },
      { key: 'disenio', label: 'Mechanical Design' },
      { key: 'otros', label: 'Other' },
    ],
  },
};
