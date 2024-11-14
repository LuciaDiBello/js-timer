const timerElement = document.querySelector("#timer");
let seconds=0;
let minutes=0;
let hours=0;
let interval;

function start() {
 interval = setInterval(timer, 1000);  
}

const pause = () => {
    clearInterval(interval);
 }

 const stop = () => {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timerElement.innerHTML = "00:00:00";
 }
 
const digitZero = (digit) => {
    if (digit < 10)
        return `0${digit}`;
    else return digit;
}

function timer() {
    seconds++;

    if (seconds == 60) {
       minutes++;
       seconds = 0;  
    }

    if (minutes == 60) {
       minutes = 0;
       hours++;
    }

    timerElement.innerHTML = digitZero(hours) + ":" + digitZero(minutes) + ":" + digitZero(seconds);
}

