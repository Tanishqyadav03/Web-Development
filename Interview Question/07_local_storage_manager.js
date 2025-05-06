function saveNoteToLocalStorage(){
    let setButton = document.getElementById("setNote")
    setButton.addEventListener("click",()=>{
        let noteValue = document.getElementById("writeNote").value
        localStorage.setItem("Note",noteValue)
    })

    let removeButton = document.getElementById("removeNote");
    removeButton.addEventListener("click",()=>{
        localStorage.removeItem("Note");
    })

    let getButton = document.getElementById("getNote");
    getButton.addEventListener("click",()=>{
        if(!localStorage.getItem("Note")){
            document.getElementById("showNote").innerText = "There is no note in this time";
            return;
        }else{
            let getItem = localStorage.getItem("Note");
            document.getElementById("showNote").innerText = getItem;
        }
    })
}

saveNoteToLocalStorage()