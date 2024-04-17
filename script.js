//NAVBAR
const hamburger = document.querySelector(".hamburger")
const dropdown = document.querySelector(".dropdown")

hamburger.addEventListener("click",()=>{
    dropdown.classList.toggle("opened")
    if(dropdown.classList.contains("opened")){
        dropdown.style.border = "10px black inset"
        hamburger.style.transform = "rotate(270deg)"
    }
    else{
        dropdown.style.border="none"
        hamburger.style.transform = "rotate(0deg)"
    }
})
