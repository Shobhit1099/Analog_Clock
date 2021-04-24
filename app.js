setInterval(() => {
    date = new Date();
    hoursTime = date.getHours();
    minutesTime = date.getMinutes();
    secondsTime = date.getSeconds();
    millisecondsTime = date.getMilliseconds();

    hoursRotation = 30 * hoursTime + minutesTime / 2;
    minutesRotation = 6 * minutesTime + secondsTime / 10 + (1 / 10000) * millisecondsTime;
    secondsRotation = 6 * secondsTime + (3 / 500) * millisecondsTime;

    hour = document.getElementById("hour");
    minute = document.getElementById("minute");
    second = document.getElementById("second");

    hour.style.transform = `rotate(${hoursRotation}deg)`;
    minute.style.transform = `rotate(${minutesRotation}deg)`;
    second.style.transform = `rotate(${secondsRotation}deg)`;
}, 1);
