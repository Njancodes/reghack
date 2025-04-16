(()=>{
    document.body.style.border = "3px solid green"
    console.log("Script Loaded")
    
    if(window.hasRun){
        return;
    }
    window.hasRun = true
    
    
    
    function enterAllDetails(){
        document.body.style.border = "3px solid purple"
        let name = "HOOKA BONGS"
        if(window.location.hostname === "manage.devpost.com"){
            document.getElementById("challenge_title").value = name
        }else if(window.location.hostname === "org.devfolio.co"){
            document.getElementById("name").value = name
        }
    }
    
    browser.runtime.onMessage.addListener((message) => {
        console.log("Message received")
        if (message.command === "enter-details") {
            enterAllDetails()
        } 
    });
})()

