import { Certification, PersonalSkills, Project, Skill } from "./modules.js"
export const searchSkill = []
export let mySkills;

const skills = {
  js: { src: "./Assets/js.png", skill: "js", alt: "JavaScript" },
  mongoDb: { src: "./Assets/mongodb_original_wordmark_logo_icon_146425.png", skill: "mongo-db", alt: "MongoDB" },
  sqlite: { src: "./Assets/servidor-sql.png", skill: "sqlite", alt: "SQLite" },
  node: { src: "./Assets/icons8-nodejs-48.png", skill: "node", alt: "Node.js" },
  express: { src: "./Assets/expressjs-icon.svg", skill: "express", alt: "Express.js" },
  react: { src: "./Assets/React-icon.svg", skill: "react", alt: "React" },
  expo: { src: "./Assets/expo-sdk.png", skill: "expo", alt: "Expo" },
  git: { src: "./Assets/github.png", skill: "git", alt: "Git" },
  resolucionDeProblemas: { src: "./Assets/icons8-methodical-approach-50.png", skill: "res-prob", alt: "Problem Solving" },
  aprendizajeAutonomo: { src: "./Assets/icons8-reading-48.png", skill: "ap-Aut", alt: "Self-Learning" }
};

const myDataEs = {
  aboutMe: {
    title: "Sobre mí",
    p: [
      `¡Hola! Soy un desarrollador backend con pasión por construir soluciones robustas y eficientes. Aunque mi enfoque principal es el backend, actualmente estoy explorando el desarrollo móvil con React Native y Expo, lo cual ha ampliado mis habilidades y mi perspectiva como desarrollador. Mi primer acercamiento a la programación fue en la universidad, creando proyectos con base en modelos matemáticos y físicos, lo que reforzó mi pensamiento lógico y estructurado. También estoy aprendiendo C# con .NET.`,

      `Soy una persona curiosa y dedicada que se involucra profundamente en los proyectos que le apasionan. He aprendido a equilibrar el tiempo que dedico a cada tarea. En mi tiempo libre disfruto de los videojuegos RPG, los postres, caminar en parques y pasar tiempo con mis gatos, a quienes adoro mimar.`
    ]

  },
  skills: [
    new Skill({ title: "JavaScript", ...skills.js }),
    new Skill({ title: "Node.js", ...skills.node }),
    new Skill({ title: "Express.js", ...skills.express }),
    new Skill({ title: "React", ...skills.react }),
    new Skill({ title: "Git", ...skills.git })
  ],
  project: [
    new Project({
      name: "Horoscopos mobile (en proceso)",
      info: "Aplicación de horoscopos mobile",
      github: "https://github.com/EdmundoD3/horoscopo-mobile",
      srcImg: "./Assets/horoscopo-mobile.png",
      href: "https://youtube.com/shorts/Hri5nAKS7ec",
      keySkills: [skills.js.skill, skills.sqlite.skill, skills.react.skill, skills.git.skill, skills.expo.skill]
    }),
    new Project({
      name: "Sqlite horoscopo tool",
      info: "Herramienta para rellenar y administrar la información de los horóscopos",
      github: "https://github.com/EdmundoD3/horoscopeTools",
      keySkills: [skills.js.skill, skills.sqlite.skill, skills.node.skill, skills.expo.skill]
    }),
    new Project({
      name: "Servidor para Conatumex",
      info: "Servidor para la empresa Genesis del Norte",
      github: "https://github.com/EdmundoD3/conatumexServer",
      srcImg: "./Assets/server conatumex.png",
      keySkills: [skills.js.skill, skills.mongoDb.skill, skills.node.skill, skills.express.skill, skills.git.skill]
    }),
    new Project({
      name: "Buscador de gifs",
      info: "Buscador de GIFs que utiliza la API de Giphy",
      github: "https://github.com/EdmundoD3/cat-fact-giffy",
      srcImg: "./Assets/gif cats.png",
      alt: "gif cats",
      href: "https://t3phg6.csb.app/",
      keySkills: [skills.js.skill, skills.react.skill, skills.git.skill]
    }),
    new Project({
      name: "Tidy task",
      info: "Ordenador de tareas",
      github: "https://github.com/EdmundoD3/tidy-task",
      href: "https://edmundod3.github.io/tidy-task/",
      alt: "Tidy task",
      srcImg: "./Assets/tidy-task.png",
      keySkills: [skills.js.skill, skills.git.skill, skills.resolucionDeProblemas]
    }),
    new Project({
      name: "update-database-from-csv",
      info: "Script para importar datos desde archivos CSV a MongoDB",
      github: "https://github.com/EdmundoD3/update-conatumex-database-from-csv",
      keySkills: [skills.node.skill, skills.js.skill, skills.mongoDb.skill, , skills.git.skill]
    }),
    new Project({
      name: "Métodos matemáticos",
      github: "https://github.com/EdmundoD3/Ejercicios-de-Python",
      srcImg: "./Assets/metodos matematicos.png",
      info: "Resolución de problemas matemáticos usando Python y Jupyter Notebooks",
      keySkills: [skills.git.skill, "python"]

    }),
    new Project({
      name: "Video to PDF/GIF Converter",
      info: "Aplicacion web para capturar imagenes de un video y obtener imagenes, gif o pdf",
      github: "https://github.com/EdmundoD3/Video-to-img-pdf",
      href: "https://edmundod3.github.io/Video-to-img-pdf/",
      keySkills: [skills.js.skill]
    })
  ],
  certification: [
    new Certification({
      title: "Microsoft Learn Modules",
      issuer: "Microsoft Learn",
      link: "https://learn.microsoft.com/es-mx/users/edmundo-8327/transcript/7o92ghz3j1r2pz4?tab=credentials-tab",
      description: "Finalización de varios módulos en Microsoft Learn, demostrando habilidades y conocimientos en diferentes áreas de la tecnología."
    }),
    new Certification({
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan",
      link: "https://coursera.org/share/7cce90d7297487dc97e245396db2ce16",
      description: "Certificación de la Universidad de Michigan en Coursera, que cubre conceptos y habilidades fundamentales en programación en Python."
    }),
    new Certification({
      title: "HackerRank Certification",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/profile/edmundorm1996",
      description: "Certificación de HackerRank que demuestra competencia en varias habilidades de codificación y habilidades para resolver problemas."
    })
  ],
  personalSkill: [
    new PersonalSkills("Pensamiento lógico y estructurado para resolver problemas"),
    new PersonalSkills("Aprendizaje autodidacta de tecnologías y herramientas nuevas"),
    new PersonalSkills("Adaptabilidad para migrar proyectos entre lenguajes y stacks"),
    new PersonalSkills("Responsabilidad en proyectos a largo plazo y atención al detalle"),
    new PersonalSkills("Capacidad para trabajar de forma autónoma en ambientes remotos"),
    new PersonalSkills("Comprensión sólida del inglés técnico (lectura y escritura)"),
    new PersonalSkills("Mejorando continuamente la comunicación oral en inglés")
  ]
}


const myDataEn = {
  aboutMe: {
    title: "About Me",
    p: [
      `Hi! I'm Edmundo, a backend developer who enjoys building robust and efficient solutions. 
      While my main focus is backend development, I’m currently exploring mobile development with React Expo, 
      which has broadened my skill set and perspective. My journey into programming began at university, 
      where I worked on projects focused on mathematical and physical models—this helped me develop strong logical 
      and structured thinking. I'm also exploring development in C# with .NET.`,

      `I’m a curious and dedicated person who loves diving deep into meaningful projects, though I’ve learned 
      to balance my time effectively. In my free time, I enjoy RPG video games, desserts, relaxing in parks, 
      and spending time with my cats, whom I absolutely love to pamper.`
    ]
  },
  skills: [
    new Skill({ title: "JavaScript", ...skills.js }),
    new Skill({ title: "Node.js", ...skills.node }),
    new Skill({ title: "Express.js", ...skills.express }),
    new Skill({ title: "React", ...skills.react }),
    new Skill({ title: "Git", ...skills.git })
  ],
  project: [
    new Project({
      name: "Horoscopes Mobile (in progress)",
      info: "Mobile app for daily horoscopes",
      github: "https://github.com/EdmundoD3/horoscopo-mobile",
      srcImg: "./Assets/horoscopo-mobile.png",
      href: "https://youtube.com/shorts/Hri5nAKS7ec",
      keySkills: [skills.js.skill, skills.sqlite.skill, skills.react.skill, skills.git.skill, skills.expo.skill]
    }),
    new Project({
      name: "SQLite Horoscope Tool",
      info: "Tool to streamline the input and organization of horoscope data",
      github: "https://github.com/EdmundoD3/horoscopeTools",
      keySkills: [skills.js.skill, skills.sqlite.skill, skills.node.skill, skills.expo.skill]
    }),
    new Project({
      name: "Conatumex Server",
      info: "Backend server for Genesis del Norte company",
      github: "https://github.com/EdmundoD3/conatumexServer",
      srcImg: "./Assets/server conatumex.png",
      keySkills: [skills.js.skill, skills.mongoDb.skill, skills.node.skill, skills.express.skill, skills.git.skill]
    }),
    new Project({
      name: "GIF Search App",
      info: "Search engine using the Giphy API",
      github: "https://github.com/EdmundoD3/cat-fact-giffy",
      srcImg: "./Assets/gif cats.png",
      alt: "gif cats",
      href: "https://t3phg6.csb.app/",
      keySkills: [skills.js.skill, skills.react.skill, skills.git.skill]
    }),
    new Project({
      name: "Tidy Task",
      info: "Task organizer built with vanilla JavaScript",
      github: "https://github.com/EdmundoD3/tidy-task",
      href: "https://edmundod3.github.io/tidy-task/",
      alt: "Tidy task",
      srcImg: "./Assets/tidy-task.png",
      keySkills: [skills.js.skill, skills.git.skill, skills.resolucionDeProblemas]
    }),
    new Project({
      name: "Update DB from CSV",
      info: "Imports data from CSV files into a MongoDB database",
      github: "https://github.com/EdmundoD3/update-conatumex-database-from-csv",
      keySkills: [skills.node.skill, skills.js.skill, skills.mongoDb.skill, skills.git.skill]
    }),
    new Project({
      name: "Mathematical Methods",
      info: "Solving various numerical and mathematical problems using Python (Jupyter)",
      github: "https://github.com/EdmundoD3/Ejercicios-de-Python",
      srcImg: "./Assets/metodos matematicos.png",
      keySkills: [skills.git.skill]
    }),
    new Project({
      name: "Video to PDF/GIF Converter",
      info: "Web app to capture video frames and export them as images, GIFs, or PDFs",
      github: "https://github.com/EdmundoD3/Video-to-img-pdf",
      href: "https://edmundod3.github.io/Video-to-img-pdf/",
      keySkills: [skills.js.skill]
    })
  ],
  certification: [
    new Certification({
      title: "Microsoft Learn Modules",
      issuer: "Microsoft Learn",
      link: "https://learn.microsoft.com/es-mx/users/edmundo-8327/transcript/7o92ghz3j1r2pz4?tab=credentials-tab",
      description: "Completed multiple modules on Microsoft Learn, demonstrating skills and knowledge across various tech domains."
    }),
    new Certification({
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan",
      link: "https://coursera.org/share/7cce90d7297487dc97e245396db2ce16",
      description: "Coursera certification covering fundamental programming concepts in Python, offered by the University of Michigan."
    }),
    new Certification({
      title: "HackerRank Certification",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/profile/edmundorm1996",
      description: "HackerRank certification showcasing problem-solving and coding proficiency across different topics."
    })
  ],
  personalSkill: [
    new PersonalSkills("Logical and structured problem-solving mindset"),
    new PersonalSkills("Self-taught learner of new technologies and tools"),
    new PersonalSkills("Adaptability to migrate projects between languages and stacks"),
    new PersonalSkills("Responsibility and attention to detail in long-term projects"),
    new PersonalSkills("Ability to work independently in remote environments"),
    new PersonalSkills("Strong understanding of technical English (reading and writing)"),
    new PersonalSkills("Actively improving spoken English communication skills")
  ]
};



export { skills, myDataEs, myDataEn }