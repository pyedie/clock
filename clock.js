let clock = document.querySelector("#container")
let digiClock = document.querySelector("#digiTimeTxt")
let popup = document.querySelector("#popup")
let hours = document.querySelector("#hours")
let minutes = document.querySelector("#minutes")
let seconds = document.querySelector("#seconds")
let i = 0

function closePopup() {
    popup.style.visibility = "hidden"
}

function showDigit() {
    clock.style.visibility = "hidden"
    digiClock.style.visibility = "visible"
    document.body.style.backgroundColor = '#1d3557'
}

function showPhysic() {
    clock.style.visibility = "visible"
    digiClock.style.visibility = "hidden"
    document.body.style.backgroundColor = '#457b9d'
}

function setHourGood(hour) {
    if (hour < 19) {
        return hour + 5
    }
    else if (hour == 19) {
        return 0
    }
    else if (hour == 20) {
        return 1
    }
    else if (hour == 21) {
        return 2
    }
    else if (hour == 22) {
        return 3
    }
    else if (hour == 23) {
        return 4
    }
    else if (hour == 24 || hour == 0 || hour == 00) {
        return 5
    }
}

setInterval(() => {

    let deg = 6
    let date = new Date()
    let hoursT = setHourGood(date.getHours()) * 30
    let minutesT = date.getMinutes() * deg
    let secondsT = date.getSeconds() * deg

    hours.style.transform = `rotateZ(${hoursT+(minutesT/12)}deg)`
    minutes.style.transform = `rotateZ(${minutesT}deg)`
    seconds.style.transform = `rotateZ(${secondsT}deg)`
    
}, 1000);

setInterval(() => {

    let date = new Date()
    let hoursT = ("0" + setHourGood(date.getHours())).slice(-2)
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
