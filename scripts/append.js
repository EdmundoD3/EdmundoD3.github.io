import { myDataEn, myDataEs, searchSkill } from "./constants.js"
import { AboutMe } from "./modules.js"

const aboutMeh2 = document.getElementById("about-me-h2")
const aboutMeDiv =document.getElementById("about-me-p")
function appendAboutMe(aboutMe) {
  if(!aboutMe) return
  aboutMeh2.innerHTML = ""
  aboutMeDiv.innerHTML = ""
  const newAboutMe = new AboutMe(aboutMe)
  newAboutMe.create(aboutMeh2,aboutMeDiv)
}
const h2titleSkills = document.getElementById("title-skills")
function appendSkills(skillArr = [], title = "") {
  if(!skillArr) return
  if(h2titleSkills) h2titleSkills.textContent = title
  const skills = document.getElementById("skill-container")
  skills.innerHTML = "";
  skillArr.forEach(skill => skills.appendChild(skill.create()))
}
const proyectsContainer = document.getElementById("proyects-container")
function appendProyect(proyectArr = [], title="projects") {
  if(!proyectArr) return
  
  proyectsContainer.innerHTML = ""
  const titleProject = document.getElementById("project-title")
  titleProject.textContent =title
  if (searchSkill.length <= 0) return proyectArr.forEach(proyect => {
    proyectsContainer.appendChild(proyect.create())
  })
  return proyectArr.forEach(proyect => {
    if (proyect.includesSkill(searchSkill))
      return proyectsContainer.appendChild(proyect.create())
  })
}

function appendCertification(certificationArr = [], title = "") {
  if(!certificationArr) return
  const h2 = document.getElementById("title-certification")
  h2.textContent = title
  const certificationsContainer = document.getElementById("certification-container")
  certificationsContainer.innerHTML = "";
  certificationArr.forEach(certification => certificationsContainer.appendChild(certification.create()))
}
function fillProyect(lang){
  switch (lang) {
    case ("es"):
      appendProyect(myDataEs.project,"Proyectos")
      break;
    case ("en"):
      appendProyect(myDataEn.project)
      break;
    default:
      appendProyect(myDataEn.project)
  }
}
function appendPersonalSkills(pSkillArr = [], title = "") {
  if(!pSkillArr) return
  const h2 = document.getElementById("title-personal-skills")
  if(!h2) return
  h2.textContent = title
  const skills = document.getElementById("personal-skills-container")
  skills.innerHTML = "";
  pSkillArr.forEach(skill => skills.appendChild(skill.create()))
}
export {appendAboutMe,appendProyect,appendSkills,fillProyect, appendPersonalSkills,appendCertification}