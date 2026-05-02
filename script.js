function updateCountdown() {
    const now = new Date();
    const year = now.getFullYear();

    let independenceDay = new Date(`February 4, ${year}`);

    if (now > independenceDay) {
        independenceDay = new Date(`February 4, ${year + 1}`);
    }

    const diff = independenceDay - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `Next Independence Day in ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* Anthem Controls */
const anthem = document.getElementById("anthem");

function playAnthem() {
    anthem.play();
}

function pauseAnthem() {
    anthem.pause();
}
