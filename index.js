const timerElement = document.getElementById("chrono")
let diff = 132000

function Time () {
    diff--
}

function Afficher () {
    let heures = parseInt(diff/3600,10)
    let minutes = parseInt((diff%3600)/60,10)
    let seconds = parseInt((diff%3600)%60,10)
    timerElement.innerText = heures  + ":" + minutes + ":" + seconds
    if (diff <= 0) {
        function Afficher () {

        }
    }
}
setInterval(Time(),1000)
setInterval(Afficher(),1000)