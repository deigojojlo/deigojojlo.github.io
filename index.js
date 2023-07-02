const timerElement = document.getElementById("chrono")
let diff = 132000

function time () {
    diff <= 0 ? clearInterval(a) : diff - 1
    let heures = parseInt(diff/3600,10)
    let minutes = parseInt((diff%3600)/60,10)
    let seconds = parseInt((diff%3600)%60,10)
    timerElement.innerText = '${heures}:${minutes}:${seconds}'
    
}

a = setInterval(time,10)