class SocialLinks {
  constructor({ url = "", src = "", alt = "" }) {
    this.href = url
    this.src = src
    this.alt = alt
  }
  create() {
    const a = document.createElement("a")
    const img = createImg(this.src, this.alt)
    a.href = this.href
    a.target = "_blank"
    a.appendChild(img)
    console.log(a);
    return a
  }
}

function appendSocialLinks(socialLinkArr=[]) {
  const socialLinks = document.getElementById("social-links")
  socialLinks.innerHTML = "";
  socialLinkArr.forEach(socialLink => socialLinks.appendChild(socialLink.create()))
}

const socialLinksArr = [
  new SocialLinks({ url: "https://github.com/EdmundoD3", src: "./Assets/github.png", alt: "GitHub" }),
  new SocialLinks({ url: "", src: "./Assets/linkedin.png", alt: "LinkedIn" })
]

appendSocialLinks(socialLinksArr)
