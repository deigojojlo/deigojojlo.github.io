const timerElement = document.getElementById("chrono") ;
var specificDate = new Date("July 4, 2023 10:00:00 GMT+0200");
var date = new Date();
const timeBefore = specificDate - date ;
let diff = timeBefore / 1000

function time () {
    diff--
    let heures = parseInt(diff/3600,10)
    let minutes = parseInt((diff%3600)/60,10)
    let seconds = parseInt((diff%3600)%60,10)
    timerElement.innerText = heures + ":" + minutes + ":" + seconds
    
};

a = setInterval(time,1000);