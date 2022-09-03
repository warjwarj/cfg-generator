/*



dynamic.js holds any functionality that updates the page in real time with the users inputs.



*/


// UPDATE THE SELECT FIELDS


dynamicUpdate("cam_names", "alm_bmch")


function dynamicUpdate(updaterName, updateeName){

let updaterElements = document.getElementsByName(updaterName);
let updateeElements = document.getElementsByName(updateeName);

updaterElements.forEach(element => {
    function getIndex(){ 
        for (let i=0; i < updaterElements.length; i++){ 
            if (element === updaterElements[i]){ return i; } 
        }
    }
    
    let index = getIndex() // index of iteration of foreach 
    element.addEventListener('input', () => {
        for (let i=0; i < updateeElements.length; i++){
            updateeElements[i].options[index].innerHTML = updaterElements[index].value
        }
    })
})};


// MONITOR LAYOUT

dynamicUpdate("cam_names", "fullscreen")

let singleScreenDiv = document.getElementById("single_screen")

document.getElementsByName("v_out").forEach(element => {
    if (element.id === "one_ch"){
        element.addEventListener("click", () => {
            singleScreenDiv.hidden = false
        })
    } else {
        element.addEventListener("click", () => {
            singleScreenDiv.hidden = true
        })
    }
});



// SCREENSAVER

let saverToggle = document.getElementById('saver_toggle')
let saverNum = document.getElementsByName('saver_number')
let saverDisabled = true;

saverToggle.addEventListener('input', () => {
    let element = saverNum[0]

    if (saverDisabled === false){ 
        element.disabled = true;
        saverDisabled = true; 
    }
    else if (saverDisabled === true) { 
        element.disabled = false;
        saverDisabled = false; 
    }
})


// SHUTDOWN DELAY

let shutdownToggle = document.getElementById('shutdown_toggle')
let shutdownNum = document.getElementsByName('shutdown_number')
let shutdownChecked = false;

shutdownToggle.addEventListener('input', () => {
    let element = shutdownNum[0]

    if (shutdownChecked === false){ 
        element.disabled = true;
        shutdownChecked = true; 
    }
    else if (shutdownChecked === true) { 
        element.disabled = false;
        shutdownChecked = false; 
    }
})