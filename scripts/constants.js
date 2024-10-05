import { Certification, PersonalSkills, Project, Skill } from "./modules.js"
const searchSkill = []

const skills = {
  js: { src: "./Assets/js.png", skill: "js", alt: "JavaScript" },
  mongoDb: { src: "./Assets/mongodb_original_wordmark_logo_icon_146425.png", skill: "mongo-db", alt: "MongoDB" },
  sqlite: { src: "./Assets/servidor-sql.png", skill: "sqlite", alt: "SQLite" },
  node: { src: "./Assets/icons8-nodejs-48.png", skill: "node", alt: "Node.js" },
  express: { src: "./Assets/expressjs-icon.svg", skill: "express", alt: "Express.js" },
  react: { src: "./Assets/React-icon.svg", skill: "react", alt: "React" },
  git: { src: "./Assets/github.png", skill: "git", alt: "Git" },
  resolucionDeProblemas: { src: "./Assets/icons8-methodical-approach-50.png", skill: "res-prob", alt: "Problem Solving" },
  aprendizajeAutonomo: { src: "./Assets/icons8-reading-48.png", skill: "ap-Aut", alt: "Self-Learning" }
};

const myDataEs = {
  aboutMe: {
    title: "Sobre mí",
    p: [
      `¡Hola! Soy Edmundo, un desarrollador backend que disfruta creando soluciones robustas y eficientes. 
      Aunque me especializo en backend, actualmente estoy explorando el desarrollo móvil con React Expo, lo que me ha permitido 
      ampliar mis habilidades y perspectivas. Mi primer contacto con la programación fue en la universidad, donde desarrollé proyectos 
      enfocados en modelos matemáticos y físicos, lo que me enseñó a pensar de manera lógica y estructurada. Estoy explorando el desarrollo en c# con .Net`,

      `Soy una persona curiosa y dedicada, y me encanta sumergirme en los proyectos que me apasionan, aunque he aprendido a equilibrar el 
      tiempo que invierto en ellos. En mi tiempo libre, disfruto de los videojuegos RPG, los postres, salir a los parques y pasar tiempo con mis gatos, a quienes adoro mimar.`
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
      name: "App de cobranza",
      info: "Aplicación de cobranza para la empresa Genesis del Norte",
      github: "https://github.com/EdmundoD3/conatumex-mobile-app",
      srcImg: "./Assets/app mobile.png",
      keySkills: [skills.js.skill, skills.sqlite.skill, skills.react.skill, skills.git.skill]
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
      info: "Buscador de gifs usando la API de Giphy",
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
      keySkills: [skills.js.skill, skills.git.skill,skills.resolucionDeProblemas]
    }),
    new Project({
      name: "update-database-from-csv",
      info: "importar datos desde archivos CSV a una base de datos MongoDB",
      github: "https://github.com/EdmundoD3/update-conatumex-database-from-csv",
      keySkills: [skills.node.skill, skills.js.skill, skills.mongoDb.skill, , skills.git.skill]
    }),
    new Project({
      name: "Métodos matemáticos",
      info: "Resolución de varios problemas usando Jupyter con Python",
      github: "https://github.com/EdmundoD3/Ejercicios-de-Python",
      srcImg: "./Assets/metodos matematicos.png",
      keySkills: [skills.git.skill]
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
    new PersonalSkills("Resolución de Problemas"),
    new PersonalSkills("Aprendizaje Autónomo"),
    new PersonalSkills("Autodisciplina")
  ]
}


const myDataEn = {
  aboutMe: {
    title: "About Me",
    p: [
      `Hello! I'm Edmundo, a backend developer who enjoys creating robust and efficient solutions. 
      Although I specialize in backend development, I am currently exploring mobile development with React Expo, which has allowed me 
      to expand my skills and perspectives. My first encounter with programming was in university, where I developed projects 
      focused on mathematical and physical models, teaching me to think logically and structurally. I'm exploring development in C# with .NET.`,

      `I am a curious and dedicated person who loves to dive into projects that I am passionate about, though I have learned to balance 
      the time I invest in them. In my free time, I enjoy RPG video games, desserts, going to parks, and spending time with my cats, whom I love to pamper.`
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
      name: "Billing App",
      info: "Billing application for the company Genesis del Norte",
      github: "https://github.com/EdmundoD3/conatumex-mobile-app",
      srcImg: "./Assets/app mobile.png",
      keySkills: [skills.js.skill, skills.sqlite.skill, skills.react.skill, skills.git.skill]
    }),
    new Project({
      name: "Server for Conatumex",
      info: "Server for the company Genesis del Norte",
      github: "https://github.com/EdmundoD3/conatumexServer",
      srcImg: "./Assets/server conatumex.png",
      keySkills: [skills.js.skill, skills.mongoDb.skill, skills.node.skill, skills.express.skill, skills.git.skill]
    }),
    new Project({
      name: "GIF Searcher",
      info: "GIF searcher using the Giphy API",
      github: "https://github.com/EdmundoD3/cat-fact-giffy",
      srcImg: "./Assets/gif cats.png",
      alt: "gif cats",
      href: "https://t3phg6.csb.app/",
      keySkills: [skills.js.skill, skills.react.skill, skills.git.skill]
    }),
    new Project({
      name: "Tidy Task",
      info: "Task Organizer",
      github: "https://github.com/EdmundoD3/tidy-task",
      href: "https://edmundod3.github.io/tidy-task/",
      alt: "Tidy Task",
      srcImg: "./Assets/tidy-task.png",
      keySkills: [skills.js.skill, skills.git.skill, skills.problemSolving]
    }),
    new Project({
      name: "update-database-from-csv",
      info: "import data from CSV files into a MongoDB database",
      github: "https://github.com/EdmundoD3/update-conatumex-database-from-csv",
      keySkills: [skills.node.skill, skills.js.skill, skills.mongoDb.skill, skills.git.skill]
    }),

    new Project({
      name: "Mathematical Methods",
      info: "Solving various problems using Jupyter with Python",
      github: "https://github.com/EdmundoD3/Ejercicios-de-Python",
      srcImg: "./Assets/metodos matematicos.png",
      keySkills: [skills.git.skill]
    })
  ],
  certification: [
    new Certification({
      title: "Microsoft Learn Modules",
      issuer: "Microsoft Learn",
      link: "https://learn.microsoft.com/es-mx/users/edmundo-8327/transcript/7o92ghz3j1r2pz4?tab=credentials-tab",
      description: "Completion of various modules on Microsoft Learn, showcasing skills and knowledge in different areas of technology."
    }),
    new Certification({
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan",
      link: "https://coursera.org/share/7cce90d7297487dc97e245396db2ce16",
      description: "Certification from the University of Michigan on Coursera, covering fundamental concepts and skills in Python programming."
    }),
    new Certification({
      title: "HackerRank Certification",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/profile/edmundorm1996",
      description: "Certification from HackerRank demonstrating proficiency in various coding skills and problem-solving abilities."
    })
  ],
  personalSkill: [
    new PersonalSkills("Problem Solving"),
    new PersonalSkills("Self-Learning"),
    new PersonalSkills("Self-Discipline")
  ]
}


export { skills, searchSkill, myDataEs, myDataEn }