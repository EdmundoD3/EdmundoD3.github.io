import { myDataEn, myDataEs, searchSkill } from "./constants.js"
import { AboutMe } from "./modules.js"


function appendAboutMe(aboutMe) {
  if(!aboutMe) return
  const section = document.getElementById("about-me")
  section.innerHTML = ""
  const newAboutMe = new AboutMe(aboutMe)
  newAboutMe.create(section)
}

function appendSkills(skillArr = [], title = "") {
  if(!skillArr) return
  const h2 = document.getElementById("title-skills")
  h2.textContent = title
  const skills = document.getElementById("skill-container")
  skills.innerHTML = "";
  skillArr.forEach(skill => skills.appendChild(skill.create()))
}

function appendProyect(proyectArr = []) {
  if(!proyectArr) return
  const proyects = document.getElementById("proyects-container")
  proyects.innerHTML = ""
  if (searchSkill.length <= 0) return proyectArr.forEach(proyect => {
    proyects.appendChild(proyect.create())
  })
  return proyectArr.forEach(proyect => {
    if (proyect.includesSkill(searchSkill))
      return proyects.appendChild(proyect.create())
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
function fillProyect(userLang){
  switch (userLang) {
    case ("es"):
      appendProyect(myDataEs.project)
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
  h2.textContent = title
  const skills = document.getElementById("personal-skills-container")
  skills.innerHTML = "";
  pSkillArr.forEach(skill => skills.appendChild(skill.create()))
}
export {appendAboutMe,appendProyect,appendSkills,fillProyect, appendPersonalSkills,appendCertification}