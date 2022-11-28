const addClassDisplayNone= (id)=>{
    const page = document.getElementById(`${id}`)
    // to remove class
    if (!page.classList.contains("d-none")){
        page.classList.toggle('d-none');
    }
}
const removeClassDisplayNone= (id)=>{
    const page = document.getElementById(`${id}`)
    // to add class
    if (page.classList.contains("d-none")){
        page.classList.toggle('d-none');
    }
}
const btnChange = (btn) => {
    const pages = ["abaut","skills","proyects"]
    pages.map(page=>{
        btn === page? removeClassDisplayNone(`${page}`): addClassDisplayNone(`${page}`)
    })
}