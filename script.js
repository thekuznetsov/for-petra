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

const compliments = [
  "You're amazing ✨",
  "You make my day better 🌸",
  "Thinking of you 💭",
  "You're beautiful 💕",
  "My favorite person 🌟",
  "You light up my world ☀️",
  "Lucky to have you 🍀",
  "You're wonderful 💖",
];

const complimentEl = document.querySelector("#compliment");

function showRandomCompliment() {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  complimentEl.textContent = compliments[randomIndex];
}

showRandomCompliment();

const thinkingMessages = [
  "You crossed my mind 💭",
  "Hope you're having a great day 🌸",
  "Just wanted to say hi 👋",
  "Thinking about you ✨",
  "Sending you a smile 😊",
  "You're doing great 💪",
];

const thinkingBtn = document.querySelector("#thinking-btn");
const toastEl = document.querySelector("#toast");

thinkingBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * thinkingMessages.length);
  toastEl.textContent = thinkingMessages[randomIndex];
  toastEl.classList.add("show");

  setTimeout(function () {
    toastEl.classList.remove("show");
  }, 3000);
});
