let clock = document.querySelector("#container")
let digiClock = document.querySelector("#digiTimeTxt")
let popup = document.querySelector("#popup")
let hours = document.querySelector("#hours")
let minutes = document.querySelector("#minutes")
let seconds = document.querySelector("#seconds")
let digiBtn = document.querySelector("#changeToPhys")
let i = 0

function closePopup() {
    popup.style.visibility = "hidden"
}

function showDigit() {
    clock.style.visibility = "hidden"
    digiBtn.style.visibility = "visible"
    digiClock.style.visibility = "visible"
    document.body.style.backgroundColor = '#1d3557'
}

function showPhysic() {
    digiBtn.style.visibility = "hidden"
    digiClock.style.visibility = "hidden"
    clock.style.visibility = "visible"
    document.body.style.backgroundColor = '#457b9d'
}

setInterval(() => {

    let deg = 6
    let date = new Date()
    let hoursT = date.getHours() * 30
    let minutesT = date.getMinutes() * deg
    let secondsT = date.getSeconds() * deg

    hours.style.transform = `rotateZ(${hoursT+(minutesT/12)}deg)`
    minutes.style.transform = `rotateZ(${minutesT}deg)`
    seconds.style.transform = `rotateZ(${secondsT}deg)`
    
}, 1000);

setInterval(() => {

    let date = new Date()
    let hoursT = ("0" + date.getHours()).slice(-2)
    let minutesT = ("0" + date.getMinutes()).slice(-2)
    let secondsT = ("0" + date.getSeconds()).slice(-2)

    digiClock.innerHTML = `${hoursT}:${minutesT}:${secondsT}`
    
}, 1000);

document.addEventListener("keypress", e => {

    if (e.code === "Space") {
        if (i == 0) {
            showDigit()
            i = 1
        }
        else if (i == 1) {
            showPhysic()
            i = 0
        }
    }

})

Mousetrap.bind('up up down down left right left right', function() {
    popup.style.visibility = "visible"
});
