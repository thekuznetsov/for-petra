const startDate = new Date("2026-09-19T00:00:00");

const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  daysEl.textContent = totalDays;
  hoursEl.textContent = totalHours % 24;
  minutesEl.textContent = totalMinutes % 60;
  secondsEl.textContent = totalSeconds % 60;
}

setInterval(updateTimer, 1000);
updateTimer();
