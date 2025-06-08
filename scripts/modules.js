import { appendProyect, fillProyect } from "./append.js"
import { myDataEs, mySkills, searchSkill } from "./constants.js"

//getting language

class LangManager {
  static key = "userLang"
  static validLangs = ["en", "es"]
  constructor() {
    const lang = localStorage.getItem(LangManager.key)
    if (this.isValid(lang)) this.lang = lang
    else {
      const deviceLang = navigator.language || navigator.userLanguage || "en";
      const userLang = deviceLang.split('').slice(0, 2).join('')
      this.lang = this.isValid(userLang) ? userLang : "en";
      this.save(this.lang)
    }
  }
  isValid(lang) {
    return LangManager.validLangs.includes(lang)
  }
  save(lang) {
    if (!this.isValid(lang))return;
    this.lang = lang
    localStorage.setItem(LangManager.key, lang);
  }
  get(){
    return this.lang
  }
}
export const userLang = new LangManager()

const createP = (text) => {
  const p = document.createElement("p")
  p.textContent = text
  return p
}
const createImg = (src, alt = "") => {
  const img = document.createElement("img")
  img.src = src
  img.alt = alt
  return img
}

//certification

class Certification {
  constructor({ title, link, issuer, description }) {
    this.title = title
    this.link = link
    this.issuer = issuer
    this.description = description
  }
  create() {
    const div = document.createElement("div")
    div.className = "certification-box box-standard"
    const h3 = document.createElement("h3")
    h3.textContent = this.title
    div.appendChild(h3)
    if (this.issuer) {
      const h4 = document.createElement("h4")
      h4.textContent = this.issuer
      div.appendChild(h4)
    }
    if (this.description) {
      const h4 = document.createElement("h4")
      h4.textContent = this.description
      div.appendChild(h4)
    }
    const a = document.createElement("a")
    a.href = this.link
    a.target = "_blank"
    a.textContent = "Ver Certificado"
    div.appendChild(a)

    return div
  }
}

//about me
class AboutMe {
  constructor({ title, p = [] }) {
    this.title = title
    this.p = p
  }
  create(h2,div) {
    h2.textContent = this.title
    this.p.forEach(text => div.appendChild(createP(text)))
    return div
  }
}

//proyects
class Project {
  static language = {
    es: {verProyecto:"Ver Proyecto"},
    en: {verProyecto:"Ver Proyecto"}
  }
  constructor({ name, info, srcImg, href = "", github, keySkills = [] }) {
    this.name = name
    this.info = info
    this.srcImg = srcImg
    this.href = href
    this.keySkills = keySkills
    this.github = github
  }
  create() {
    const div = document.createElement("div")
    div.className = `box-standard project`
    if (this.srcImg) {
      const img = createImg(this.srcImg, this.info)
      div.appendChild(img)
    }
    const h3 = document.createElement("h3")
    h3.textContent = this.name
    div.appendChild(h3)
    const p = document.createElement("p")
    p.textContent = this.info
    div.appendChild(p)
    const subDiv = document.createElement("div")
    subDiv.className = "project-links"
    if (this.href) {
      const aProject = document.createElement("a")
      aProject.href = this.href
      aProject.target = "_blank"
      aProject.textContent = Project.language[userLang.get()]?.verProyecto ?? Project.language.en.verProyecto
      subDiv.appendChild(aProject)
    }

    const aGithub = document.createElement("a")
    aGithub.href = this.github
    aGithub.target = "_blank"
    aGithub.textContent = "Github"
    subDiv.appendChild(aGithub)
    div.appendChild(subDiv)

    return div
  }
  includesSkill(skills = []) {
    return skills.some(skill => this.keySkills.includes(skill));
  }
  includesAllSkill(skills = []) {
    return skills.every(skill => this.keySkills.includes(skill));
  }
}

class Skill {
  static selectClass = "skill-selected"
  constructor({ title = "", src = "", alt = "", skill, isClickable = true }) {
    this.src = src
    this.title = title
    this.alt = alt
    this.onclick = isClickable
    if (skill.includes(" ")) throw new Error("La skill no debe tener espacios vacios")
    this.skill = skill
  }
  create() {
    this.element = document.createElement("div")
    this.element.className = `skill`//box-standard 
    this.element.id = this.skill
    if (this.onclick) this.element.onclick = () => this.handleSkill()
    if (this.src) {
      const img = createImg(this.src, this.alt)
      this.element.appendChild(img)
    }
    if (this.title) {
      const h3 = document.createElement("h3")
      h3.textContent = this.title
      this.element.appendChild(h3)
    }
    return this.element
  }
  handleSkill() {
    const includesMark = this.element.classList.contains(Skill.selectClass)
    if (includesMark) {
      this.activate()
    } else {
      this.desactivate()
    }
    fillProyect(userLang.get())
  }
  activate() {
    this.element.classList.remove(Skill.selectClass)
    this.removeSkill(this.skill)
  }
  desactivate() {
    this.element.classList.add(Skill.selectClass)
    this.addSkill(this.skill)
  }
  removeSkill() {
    const index = searchSkill.indexOf(this.skill);
    if (index !== -1)
      searchSkill.splice(index, 1);
  }
  addSkill() {
    if (!searchSkill.includes(this.skill))
      searchSkill.push(this.skill);
  }
  static resetSkills() {
    mySkills.forEach(skill => skill.desactivate())
    searchSkill.splice(0, searchSkill.length)
    fillProyect(userLang.get())
  }
}

class PersonalSkills {
  constructor(title = "") {
    this.title = title
  }
  create() {
    const li = document.createElement("li")
    li.textContent = this.title
    return li
  }
}

export { AboutMe, Project, Skill, Certification, PersonalSkills }