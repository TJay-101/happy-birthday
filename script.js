const startBtn = document.getElementById("startBtn");
const finalBtn = document.getElementById("finalBtn");
const letter = document.getElementById("letter");
const finalMessage = document.getElementById("finalMessage");
const hearts = document.querySelector(".hearts");

// Create floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = ["❤️","💖","💕","💗"][Math.floor(Math.random() * 4)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 4) + "s";
  heart.style.fontSize = (18 + Math.random() * 20) + "px";

  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

setInterval(createHeart, 400);

// Open the letter
const intro = document.getElementById("intro");

startBtn.addEventListener("click", () => {
  intro.style.display = "none";   // 👈 hides the whole opening section
  letter.classList.remove("hidden");
  letter.scrollIntoView({ behavior: "smooth" });
});

// Open the final message
finalBtn.addEventListener("click", () => {
  letter.classList.add("hidden");
  finalMessage.classList.remove("hidden");
});

  // Simple confetti effect using emojis
  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement("div");
    confetti.innerHTML = ["🎉","🎊","✨","💖"][Math.floor(Math.random() * 4)];
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = Math.random() * 100 + "vh";
    confetti.style.fontSize = (18 + Math.random() * 18) + "px";
    confetti.style.pointerEvents = "none";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 2500);
  }

  finalMessage.scrollIntoView({ behavior: "smooth" });
});
