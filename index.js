let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById("minute");
let secondEl = document.getElementById("second");
let timeEl = document.getElementById("time");

let currentTime = () => {
    let presentTime = new Date();
    let localDate = presentTime.toLocaleString();
    if (presentTime.getHours().toString().length === 1) {
        hourEl.textContent = `0${presentTime.getHours()}`;
    } else {
        hourEl.textContent = presentTime.getHours();
    }
    if (presentTime.getMinutes().toString().length === 1) {
        minuteEl.textContent = `0${presentTime.getMinutes()}`;
    } else {
        minuteEl.textContent = presentTime.getMinutes();
    }
    if (presentTime.getSeconds().toString().length === 1) {
        secondEl.textContent = `0${presentTime.getSeconds()}`;
    } else {
        secondEl.textContent = presentTime.getSeconds();
    }
    let length = localDate.length;
    timeEl.textContent = localDate.slice(length - 2, length);
}

setInterval(function() {
    currentTime();
}, 1000);