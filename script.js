let score = 0;
let coins = 0;
let level = 1;

const scoreEl = document.getElementById("score");
const coinsEl = document.getElementById("coins");
const levelEl = document.getElementById("level");

document.getElementById("tapBtn").addEventListener("click", () => {
  score++;
  coins++;

  if (score % 10 === 0) {
    level++;
  }

  scoreEl.textContent = score;
  coinsEl.textContent = coins;
  levelEl.textContent = level;

  if (navigator.vibrate) navigator.vibrate(10);
});

document.getElementById("shopBtn").addEventListener("click", () => {
  window.location.href = "https://square.link/u/8kqPFCgV?src=sheet";
});
