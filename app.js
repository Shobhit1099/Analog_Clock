setInterval(() => {
    date = new Date();
    hoursTime = date.getHours();
    minutesTime = date.getMinutes();
    secondsTime = date.getSeconds();

    hoursRotation = 30 * hoursTime + minutesTime / 2;
    minutesRotation = 6 * minutesTime;
    secondsRotation = 6 * secondsTime;

    hour = document.getElementById("hour");
    minute = document.getElementById("minute");
    second = document.getElementById("second");

    hour.style.transform = `rotate(${hoursRotation}deg)`;
    minute.style.transform = `rotate(${minutesRotation}deg)`;
    second.style.transform = `rotate(${secondsRotation}deg)`;
}, 1000);