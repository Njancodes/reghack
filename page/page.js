const listOfWebsiteBtns = document.querySelectorAll("button.website-btn");

const requiredDatea = {
    "devfolio-btn":["name",]
}

for(let btn of listOfWebsiteBtns){
    btn.addEventListener("click",()=>{
        if(!(btn.classList.contains("website-btn-selected"))){
            btn.classList.add("website-btn-selected");
        }else{
            btn.classList.remove("website-btn-selected");
        }
    })
}