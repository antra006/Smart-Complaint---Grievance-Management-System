function updateClock() {
    const clock = document.getElementById("clock");
    if (!clock) return;

    const now = new Date();

    clock.innerHTML = `
        <div class="clock-time">${now.toLocaleTimeString()}</div>
        <div class="clock-date">${now.toLocaleDateString()}</div>
    `;
}

updateClock();
setInterval(updateClock, 1000);