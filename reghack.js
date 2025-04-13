document.body.style.border = "3px solid green"

let btn = document.createElement("button");
btn.id = "FUKE";
btn.textContent = "HELLO CLICK MEE";
btn.addEventListener("click",()=>{
    let name = "HackathonIsNice"
    if(window.location.hostname === "manage.devpost.com"){
        setInterval(()=>{
            try{
                document.getElementById("challenge_title").value = name
            }catch(error){
                alert("Not Working " + error.message)
            }
        },1000);
    }
    if(window.location.hostname === "org.devfolio.co"){
        setInterval(()=>{
            try{
                document.getElementById("name").value = name
            }catch(error){
                alert("Not Working " + error.message)
            }
        },1000);
    }
})

document.body.appendChild(btn);