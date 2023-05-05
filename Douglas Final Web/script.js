function calculateTimeLeft() {
    const now = new Date();
    const currentDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const targetTime = new Date(currentDay.getTime() + 86400000); // Add 24 hours (86400000 ms)
    const timeLeft = targetTime - now;

    return timeLeft;
}

function formatTimeLeft(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);

    const hoursStr = hours.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');
    const secondsStr = seconds.toString().padStart(2, '0');

    return `${hoursStr}:${minutesStr}:${secondsStr}`;
}

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const timeLeft = calculateTimeLeft();
    countdownElement.innerHTML = formatTimeLeft(timeLeft);
}

updateCountdown();
setInterval(updateCountdown, 1000);