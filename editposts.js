//EDIT POSTS
const editButtons = document.querySelectorAll(".edit")
const titleInput = document.querySelectorAll(".title")
const textArea = document.querySelectorAll(".text")
const submit = document.querySelectorAll("input[type='submit']")

for (var i = 0; i < editButtons.length; i++) {
    editButtons[i].dataset.index=i;
    editButtons[i].onclick = function(e) {
        var index=this.dataset.index;
        let truefalse = !titleInput[index].disabled
        titleInput[index].disabled = truefalse
        textArea[index].disabled = truefalse
        submit[index].disabled = truefalse
    }
    submit[i].addEventListener("click",()=>{
        for (var j = 0; j<submit.length;j++){
            titleInput[j].disabled = true
            textArea[j].disabled = true
            submit[j].disabled = true
        }
    })
}

