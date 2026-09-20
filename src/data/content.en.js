export const personalInfo = {
  name: "Agustín Avelino Pineda",
  title: "Mechatronics Engineering Student",
  bio: "I design the hardware and write the firmware that moves it. Specialized in embedded systems and power electronics: I led the electronics area of a 51.2 V/300 A competition kart and developed the full firmware for an autonomous AGV.",
  about: [
    "Mechatronics engineering student with a strong software foundation from my technical training at IPN. I work where code, power electronics and mechanical design meet: high-power systems, firmware for autonomous robots, and parts that have to survive a race.",
    "At Omega Lightning, Tecnológico de Monterrey's student racing team, I went from co-lead to lead of the electronics area, coordinating a team of four under competition deadlines.",
  ],
  email: "avelino.pineda.agustin@gmail.com",
  github: "https://github.com/agustinavelino",
  linkedin: "https://www.linkedin.com/in/agustin-avelino",
  photo: "/images/imagen1.webp",
  cv: "CV_Agustin_Avelino_Pineda_EN.pdf",
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
  laboratorio: ["Soldering", "Electronic systems integration"],
  otros: ["Git / GitHub", "Linux", "ROS", "Data analysis fundamentals"],
  idiomas: ["Spanish (native)", "English (advanced)"],
};

export const projects = [
  {
    title: "Analog instrumentation for a hybrid dehydrator",
    category: "Electronics and instrumentation",
    details: [
      "A food dehydrator with two heat sources —a solar collector and a 127 VAC heating element— for which I designed the measurement, indication and control electronics. The goal was to monitor and regulate the drying process without microcontrollers or any programmable device: the requirement forced me to solve with discrete analog electronics what would normally be done with an ADC and firmware. It had to measure at least two variables using non-digital sensors, display them to the operator, and regulate an actuator continuously rather than by on/off switching, running day and night.",
      "The temperature channel is a class B PT100 in the upper leg of a Wheatstone bridge excited at 5.00 V, followed by an AD620 at a gain of 29.6 and a 1.69 Hz passive filter: 1.00 to 4.60 V across 20–100 °C. It sits in the upper leg because with the sensor below, the nodes settle at 0.49 V and the amplifier saturates. Humidity comes from a capacitive HIH-4030. The whole design is ratiometric —bridge, references and scale endpoints all hang off the same 5 V rail— so battery discharge doesn't shift the reading. Two LM3914s drive 10-LED bars, a comparator with hysteresis switches the heater through an SSR, and an NE555 at 151 Hz with an IRLZ44N drives the exhaust fan by PWM.",
      "Both signal chains were validated on a breadboard, with zero and span trimmed against a reference thermometer and checked by replacing the PT100 with resistors from 110 to 138.5 Ω. I debugged three faults: the 0.80 V reference follower stuck because of the 250 µA the LM3914's internal divider pushes into that node, a floating RLO pin that collapsed the scale window, and resistance readings falsified by parallel paths when measuring in-circuit. Schematic and PCB were laid out in KiCad; fabrication didn't fit the term because I checked the supplier's capabilities after routing. Manufacturing rules are a design input, not a final check.",
    ],
    highlights: [
      "45 mV/°C scale using an AD620 at a gain of 29.6, with 8 °C of resolution per LED",
      "151 Hz PWM on a 302 mA exhaust fan: the MOSFET dissipates 2 mW instead of 1.8 W",
      "3S 4000 mAh pack gives 15 h of runtime; sensing and airflow continue off-grid",
      "A single 1 kΩ pulldown fixed the LM324's current-sink limit at 0.80 V output",
      "Two-layer PCB, 150×100 mm, roughly 75 THT components, routed in KiCad",
    ],
    tags: ["KiCad", "Signal conditioning", "PT100 / AD620", "Analog PWM"],
    github: "",
    image: "/images/portada-deshidratador.webp",
    gallery: ["/images/visor3d-deshidratador.webp", "/images/esquema-pcb-deshidratador.webp"],
  },
  {
    title: "Line-following AGV with load/unload system",
    category: "Autonomous robotics",
    description: "Design and construction of an autonomous Arduino Uno-based AGV capable of following a predefined route, detecting loading/unloading stations, and operating a lifting mechanism to transport materials without human intervention.",
    details: [
      "This project consisted of the design and construction of an AGV (Automated Guided Vehicle) based on an Arduino Uno, capable of autonomously following a predefined route, detecting loading/unloading stations along the way, and operating a lifting mechanism to transport materials without human intervention. The goal was to integrate motion control, sensing, and mechanisms into a single functional platform, replicating the operation of an industrial AGV at a small scale.",
      "Navigation was achieved using a pair of analog optical sensors and a PD controller with a dead zone and an exponential smoothing filter on the PWM signal, which significantly reduced mechanical vibration when correcting course. Differential traction is managed with BTS7960 drivers, and two quadrature encoders monitor each motor's RPM in real time. For loading and unloading, a stepper motor drives a lifting mechanism that activates upon detecting station markers, while a load cell with a Kalman filter measures the transported weight. All electronics communicate via I2C (PCF8574 expander and OLED display), and the system includes a serial interface to adjust control parameters (speeds, PD gains, dead zones) in real time without recompiling.",
      "The result is a functional AGV that travels the route stably, identifies loading/unloading stations, and executes the complete cycle of lifting, transporting, and depositing material, dynamically adjusting its behavior based on the detected weight. Beyond the final result, the project was an iterative exercise in debugging and tuning a real control system, identifying and correcting typical embedded systems problems: sensor noise, actuator saturation, logical race conditions, and hardware calibration.",
    ],
    highlights: [
      "PD controller with dead zone and exponential smoothing filter on the PWM signal",
      "HX711 load cell with a Kalman filter and 494 PPR quadrature encoders",
      "TMC2209 stepper motor driving the automated lifting mechanism",
      "400 kHz I2C architecture with a PCF8574 expander and OLED display on the same bus",
      "20+ firmware versions to reach stable navigation and path-loss recovery",
    ],
    tags: ["C++", "PD control", "SolidWorks", "I2C"],
    github: "",
    image: "/images/robot.jpeg",
    // Imágenes adicionales — mantener en paralelo con content.js
    gallery: [],
  },
  {
    title: "Reaction Board for American Football Wide Receivers",
    category: "Electronics & firmware",
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
    gallery: [],
  },
  {
    title: "Voice Chatbot with Conversation Analytics",
    category: "Software & AI",
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
    image: "/images/chatbot.webp",
    gallery: [],
  },
];

export const education = [
  {
    degree: "B.S. in Mechatronics Engineering",
    institution: "Tecnológico de Monterrey, Campus Santa Fe",
    period: "2024 — 2028",
    description: [
      "Technical focus: embedded systems, microcontrollers, control and mechanical design.",
      "Projects: electrical system of a 51.2 V/300 A competition kart and the full firmware of an autonomous AGV.",
      "Tools: modeling and simulation of assemblies in SolidWorks and NX; microcontroller programming (ESP32/Arduino).",
      "Expected graduation: August 2028.",
    ],
  },
  {
    degree: "Technical Degree in Programming",
    institution: "CECyT 9 «Juan de Dios Bátiz» — IPN",
    period: "2021 — 2025",
    description: [
      "Software foundations: programming logic, data structures and object-oriented programming.",
      "Languages: application development and database management with Java and Python.",
      "Degree obtained in March 2025.",
    ],
  },
];

export const experience = [
  {
    role: "Lead, Electronics Area",
    institution: "Omega Lightning · Student racing team, Tecnológico de Monterrey",
    period: "Feb 2026 — Aug 2026",
    description: [
      "Led the development of the electrical system of a 51.2 V/300 A competition kart, making component specification decisions and coordinating a team of 4 under competition deadlines.",
      "Redesigned the kart wiring (from 3/0 to 6 AWG silicone cable) after a component analysis, cutting weight through the right choice of technical specifications.",
      "Designed in SolidWorks and manufactured a sealed enclosure to protect components, and implemented a Safe-to-Touch system to electrically isolate the chassis in high-power operation (51.2 V/300 A peak).",
      "Integrated solar panels for autonomous charging of the secondary electrical system — lighting, audio and protection, independent from the motor power system — and built a speed-adaptive audio system that improves pedestrian safety in the pit area.",
    ],
  },
  {
    role: "Co-lead, Electronics Area",
    institution: "Omega Lightning · Student racing team, Tecnológico de Monterrey",
    period: "Aug 2025 — Dec 2025",
    description: [
      "Supported the design and integration of the kart's electrical system, laying the groundwork for the project I later led.",
      "Installed the complete lighting system — headlights, taillights and brake lights — in a parallel arrangement, guaranteeing 100% lighting redundancy in case of failure.",
      "Collaborated on motor and battery integration and general technical development under competition deadlines.",
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
  nav: {
    toggleLanguage: 'Switch language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
  },
  projects: {
    viewMore: 'View more',
    prev: 'Previous project',
    next: 'Next project',
    close: 'Close',
    image: 'Image {n}',
    viewOnGitHub: 'View on GitHub →',
    highlights: 'Highlights',
  },
  skills: {
    verify: 'Verify →',
    certificationsLabel: 'Certifications',
    categories: [
      { key: 'programacion', label: 'Programming' },
      { key: 'hardware', label: 'Hardware / Embedded' },
      { key: 'disenio', label: 'Mechanical design' },
      { key: 'laboratorio', label: 'Lab' },
      { key: 'otros', label: 'Other' },
      { key: 'idiomas', label: 'Languages' },
    ],
  },
};
