
// Corazones flotando
const universe = document.querySelector(".universe");
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  universe.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 800);
