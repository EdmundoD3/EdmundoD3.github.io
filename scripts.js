import { appendSkills, appendProyect, appendAboutMe, appendCertification, appendPersonalSkills } from "./scripts/append.js";
import { myDataEn, myDataEs, mySkills } from "./scripts/constants.js";
import { userLang } from "./scripts/modules.js";
function printData(myData,
  { skillTitle = "Skills",
    certificationTitle = "Certifications",
    projectTitle = "Projects",
    personalSkillTitle = "Personal Skill" }) {
  // mySkills = myData.skills;
  appendAboutMe(myData.aboutMe)
  appendSkills(myData.skills, skillTitle)
  appendProyect(myData.project, projectTitle)
  appendCertification(myData.certification, certificationTitle)
  appendPersonalSkills(myData.personalSkill, personalSkillTitle)
}
const validLang = ["en","es"]
function fillHtml(userLang) {
  switch (userLang) {
    case ("es"):
      printData(myDataEs, {
        skillTitle: "Habilidades",
        certificationTitle: "Certificados",
        projectTitle: "Proyectos",
        personalSkillTitle: "Habilidades personales"
      })
      break;
    case ("en"):
      printData(myDataEn, {})
      break;
    default:
      printData(myDataEn, {})
  }
}

//setting language
const selectLang = document.getElementById("select-languaje")
selectLang.value = userLang.get()

fillHtml(userLang.get())

//handling languaje
selectLang.addEventListener("change", (e) => {
  userLang.save(e.target.value) 
  fillHtml(userLang.get())
})
// document.getElementById("title-skills").addEventListener("click", () => Skill.resetSkills());
