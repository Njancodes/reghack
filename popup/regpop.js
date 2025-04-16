function makeApurpleBorder(){
    console.log("HIi")
    document.body.style.border = "10px solid purple"
}

function sendMessageToCS(tabs){
    browser.tabs.sendMessage(tabs[0].id, {
        command: "enter-details"
    })
}

function listenForClicks(){
    document.addEventListener("click", (e)=>{
        console.log(e.target.id)
        if (e.target.tagName === "BUTTON" && e.target.id === "submit-details") {
            console.log("Going to sent messaege for submitting the details")
            browser.tabs
                .query({active: true, currentWindow: true})
                .then(sendMessageToCS)
                .catch((error)=>{
                    console.error(error.message)
                })
          }else if(e.target.tagName === "BUTTON" && e.target.id === "enter-details"){
            console.log("Going to send the message for entering the details")
            browser.tabs.create({
                active:true,
                url:"/page/page.html"
            })
          }
    })
}

browser.tabs
    .executeScript({file:"/content_scripts/reghack.js"})
    .then(listenForClicks)
    .catch((error)=>{
        console.error(error.message)
    })