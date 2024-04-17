const modal = document.querySelector("#modal")
const imie = document.querySelector("#imie")

function editName(name){
    modal.style.display = "block"
    imie.value = name
}

function zamknij(){
    modal.style.display = "none"
}